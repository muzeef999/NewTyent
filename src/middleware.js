import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

const allowedOrigins = [
  'https://tyent.co.in',
  'http://localhost:3000',
];

const corsOptions = {
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Allow-Credentials': 'true',
};

// ✅ Role-based paths
const rolePaths = {
  admin: ['/dashboard', '/adminOrder', '/leads', '/service', '/complains', '/adminBlog'],
  manager: ['/leads'],
  employee: ['/complains', '/service'],
};

// ✅ Default redirect for roles
const roleRedirects = {
  admin: '/dashboard',
  manager: '/leads',
  employee: '/complains',
};

// Case-sensitive redirects (old uppercase URLs → new lowercase)
const caseRedirects = {
  '/Terms_of_Use': '/terms-of-use',
  '/Cancellation_Returns': '/cancellation-returns',
  '/Sterilizing-water-generator': '/sterilizing-water-generator',
  '/7-types-of-Tyent-water': '/7-types-of-tyent-water',
  '/patented-SMPS-plus': '/patented-smps-plus',
  '/Privacy': '/privacy',
  '/Security': '/security',
};

export async function middleware(request) {
  const url = new URL(request.url);
  const origin = request.headers.get('origin') ?? '';
  const isAllowedOrigin = allowedOrigins.includes(origin);

  // Case-sensitive redirect check (exact match only)
  const redirectTo = caseRedirects[url.pathname];
  if (redirectTo) {
    url.pathname = redirectTo;
    return NextResponse.redirect(url, 308);
  }

  // ✅ Handle preflight OPTIONS request
  if (request.method === 'OPTIONS') {
    const preflightHeaders = { ...corsOptions };
    if (isAllowedOrigin) {
      preflightHeaders['Access-Control-Allow-Origin'] = origin;
    }
    return new NextResponse(null, { status: 204, headers: preflightHeaders });
  }

  // ✅ Add CORS headers to every response
  const response = NextResponse.next();
  if (isAllowedOrigin) {
    response.headers.set('Access-Control-Allow-Origin', origin);
  }
  Object.entries(corsOptions).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  // 🚫 Skip auth for API routes — do not redirect API calls
  if (url.pathname.startsWith('/api/')) {
    return response;
  }

  // 🛡️ Auth & Role checks for page routes
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

  if (!token) {
    // No token — redirect to home page (or login)
    url.pathname = '/';
    const redirectRes = NextResponse.redirect(url);
    if (isAllowedOrigin) {
      redirectRes.headers.set('Access-Control-Allow-Origin', origin);
    }
    Object.entries(corsOptions).forEach(([key, value]) => {
      redirectRes.headers.set(key, value);
    });
    return redirectRes;
  }

  const role = token.role;
  const allowedPaths = rolePaths[role] || [];
  const defaultRedirect = roleRedirects[role] || '/';

  // ✅ If role has access, continue
  if (allowedPaths.some(path => url.pathname.startsWith(path))) {
    return response;
  }

  // 🚀 Otherwise redirect to default route for their role
  url.pathname = defaultRedirect;
  const roleRedirectRes = NextResponse.redirect(url);
  if (isAllowedOrigin) {
    roleRedirectRes.headers.set('Access-Control-Allow-Origin', origin);
  }
  Object.entries(corsOptions).forEach(([key, value]) => {
    roleRedirectRes.headers.set(key, value);
  });
  return roleRedirectRes;
}

export const config = {
  matcher: [
    '/dashboard',
    '/adminOrder',
    '/adminBlog/:path*',
    '/leads',
    '/complains',
    '/service',
    '/api/:path*',
    '/Terms_of_Use',
    '/Cancellation_Returns',
    '/Sterilizing-water-generator',
    '/7-types-of-Tyent-water',
    '/patented-SMPS-plus',
    '/Privacy',
    '/Security',
  ],
};
