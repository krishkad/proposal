import { NextResponse, type NextRequest } from "next/server";

const AUTH_ROUTES = ["/sign-in", "/sign-up"];
const PROTECTED_ROUTES = [
  "/dashboard/generate",
  "/dashboard/overview",
  "/dashboard/settings",
  "/dashboard/all-proposals",
]; // Add your protected routes here

export function middleware(request: NextRequest) {
  const token =
    request.cookies.get("freeposal-authentication")?.value || // Adjust cookie name
    request.headers.get("Authorization")?.replace("Bearer ", "");

  const { pathname } = request.nextUrl;

  const isAuthRoute = AUTH_ROUTES.some((route) => pathname.startsWith(route));
  const isProtectedRoute = PROTECTED_ROUTES.some((route) =>
    pathname.startsWith(route)
  );

  // ✅ Case 1: User is logged in
  if (token) {
    // ❌ Prevent access to signin/signup if logged in
    if (isAuthRoute) {
      return NextResponse.redirect(new URL("/dashboard/generate", request.url)); // or home
    }
    // ✅ Allow access to everything else
    return NextResponse.next();
  }

  // ❌ Case 2: User is not logged in
  if (isProtectedRoute) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  // ✅ Allow access to public pages including /signin, /signup
  return NextResponse.next();
}
