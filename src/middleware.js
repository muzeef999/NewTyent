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

export async function middleware(request) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
  const url = request.nextUrl.clone();

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
    return NextResponse.next();
  }

  // Redirect to the default page for the role if path is not allowed
  url.pathname = defaultRedirect;
  return NextResponse.redirect(url);
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
