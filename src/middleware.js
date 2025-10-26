import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

// Role-specific accessible paths
const rolePaths = {
  admin: ['/dashboard', '/adminOrder', '/leads', '/service', '/complains', '/adminBlog'],
  manager: ['/leads'],
  employee: ['/complains', '/service'],
};

// Default redirect paths for each role
const roleRedirects = {
  admin: '/dashboard',
  manager: '/leads',
  employee: '/complains',
};


const allowedOrigins = ['*']


const corsOptions = {
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}


export async function middleware(request) {
  const url = request.nextUrl.clone();


     const origin = req.headers.get('origin') ?? ''
  const isAllowedOrigin = allowedOrigins.includes(origin)

    // Handle preflighted requests
  const isPreflight = req.method === 'OPTIONS'
 
  if (isPreflight) {
    const preflightHeaders = {
      ...(isAllowedOrigin && { 'Access-Control-Allow-Origin': origin }),
      ...corsOptions,
    }
    return NextResponse.json({}, { headers: preflightHeaders })
  }

   if (isAllowedOrigin) {
    response.headers.set('Access-Control-Allow-Origin', origin)
  }
 
  Object.entries(corsOptions).forEach(([key, value]) => {
    response.headers.set(key, value)
  })


  // Authentication and role-based access control
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
  if (!token) {
    // Redirect unauthenticated users to home
    url.pathname = '/';
    return NextResponse.redirect(url);
  }

  const { role } = token;
  const allowedPaths = rolePaths[role] || [];
  const defaultRedirect = roleRedirects[role] || '/';

  // Check if the path is allowed for the role
  if (allowedPaths.some(path => url.pathname.startsWith(path))) {
    const response = NextResponse.next();
    // Add CORS headers to the response
    Object.entries(corsHeaders).forEach(([key, value]) => {
      response.headers.set(key, value);
    });
    return response;
  }

  // Redirect to the default page for the role if path is not allowed
  url.pathname = defaultRedirect;
  const response = NextResponse.redirect(url);
  // Add CORS headers to the response
  Object.entries(corsHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });
  return response;
}

export const config = {
  matcher: [
    '/dashboard',
    '/adminOrder',
    '/adminBlog/:path*',
    '/leads',
    '/complains',
    '/service',
  ],
};
