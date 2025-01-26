import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

// Role-specific accessible paths
const rolePaths = {
  admin: ['/dashboard', '/adminOrder', '/leads', '/service', '/complains', '/adminBlog'],
  manager: ['/leads', '/adminBlog'],
  employee: ['/complains', '/service'],
};

// Default redirect paths for each role
const roleRedirects = {
  admin: '/dashboard',
  manager: '/leads',
  employee: '/complains',
};

// CORS Headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*', // Allow requests from all origins
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS', // Allowed methods
  'Access-Control-Allow-Headers': 'Content-Type, Authorization', // Allowed headers
};

export async function middleware(request) {
  const url = request.nextUrl.clone();

  // Handle CORS preflight requests
  if (request.method === 'OPTIONS') {
    const response = NextResponse.next();
    Object.entries(corsHeaders).forEach(([key, value]) => {
      response.headers.set(key, value);
    });
    return response;
  }

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
