import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request })
  const isAuthenticated = !!token

  // Paths that require authentication
  const protectedPaths = ["/dashboard"]
  
  // Check if the requested path requires authentication
  const isProtectedPath = protectedPaths.some(path => 
    request.nextUrl.pathname.startsWith(path)
  )

  if (isProtectedPath && !isAuthenticated) {
    // Redirect to login if trying to access protected route while not authenticated
    const loginUrl = new URL("/login", request.url)
    loginUrl.searchParams.set("callbackUrl", request.url)
    return NextResponse.redirect(loginUrl)
  }

  // Redirect to dashboard if already authenticated and trying to access login/signup
  if (isAuthenticated && (
    request.nextUrl.pathname === "/login" || 
    request.nextUrl.pathname === "/signup"
  )) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/login",
    "/signup",
  ],
}

