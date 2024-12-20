import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
  const url = request.nextUrl.clone();

  // Protect the /dashboard route for admin users only
  if (url.pathname.startsWith('/dashboard')) {
    if (!token || token.role !== 'admin') {
      url.pathname = '/'; // Redirect to login page
      return NextResponse.redirect(url);
    }
  }

  // Protect the /shipping route for authenticated users
  if (url.pathname.startsWith('/shipping')) {
    if (!token) {
      url.pathname = '/'; // Redirect to login page
      return NextResponse.redirect(url);
    }
  }

  // Allow access if the user meets the criteria
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/shipping'], // Define matched routes
};
