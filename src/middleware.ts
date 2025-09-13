import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
    const allowedPaths = [
        "/",
        "/about",
        "/chatbot",
        "/gallery",
        "/home",
        "/menu",
        "/outlets",
        "/menu-details",
    ]

    const { pathname } = request.nextUrl

    if (
        pathname.startsWith("/_next") ||
        pathname.startsWith("/api") ||
        pathname.includes(".")
    ) {
        return NextResponse.next()
    }

    if (!allowedPaths.includes(pathname)) {
        return NextResponse.redirect(new URL("/home", request.url), 307)
    }

    return NextResponse.next()
}

export const config = {
    matcher: ["/:path*"],
}
