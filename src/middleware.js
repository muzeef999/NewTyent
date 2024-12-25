import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
  const url = request.nextUrl.clone();

  
  if (!token) {
    url.pathname = '/'; 
    return NextResponse.redirect(url);
  }

  const { role } = token;

  // Manager role handling
  if (role === 'manager') {
    if (url.pathname === '/') {
      url.pathname = '/leads'; 
      return NextResponse.redirect(url);
    }
    if (['/leads', '/service', '/complains', '/adminBlog'].some(path => url.pathname.startsWith(path))) {
      return NextResponse.next(); 
    }
    url.pathname = '/leads'; 
    return NextResponse.redirect(url);
  }

  // Employee role handling
  if (role === 'employee') {
    if (['/complains', '/service'].some(path => url.pathname.startsWith(path))) {
      return NextResponse.next(); // Allow access to permitted pages
    }
    url.pathname = '/complains'; // Redirect unauthorized paths
    return NextResponse.redirect(url);
  }

  // Admin role handling
  if (role === 'admin') {
    if (url.pathname.startsWith('/dashboard')) {
      return NextResponse.next(); // Allow dashboard access
    }
    url.pathname = '/'; // Redirect unauthorized paths
    return NextResponse.redirect(url);
  }

  // Default handling for undefined roles
  url.pathname = '/';
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/shipping',
    '/adminOrder',
    '/adminBlog/:path*',
    '/leads',
    '/complains',
    '/service',
  ],
};
