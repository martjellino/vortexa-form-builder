import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import * as jose from "jose";

// // This example protects all routes including api/trpc routes
// // Please edit this to allow other routes to be public as needed.
// // See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default authMiddleware({
  publicRoutes: ['/', '/api/:path*', '/verify', '/sso-callback', '/form/:path*'],
  afterAuth(auth, req, evt) {
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }

    if (
      auth.userId &&
      (req.nextUrl.pathname == "/register" || req.nextUrl.pathname == "/login")
    ) {
      const dashboard = new URL("/dashboard", req.url);
      return NextResponse.redirect(dashboard);
    }
  },
});

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)",
    "/",
    "/(api|trpc)(.*)",
    "/dashboard",
  ],
};