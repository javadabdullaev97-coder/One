import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Set currency cookie on first visit based on Cloudflare IP country header.
  // CF-IPCountry is injected automatically by Cloudflare on all plans.
  if (!request.cookies.has("currency")) {
    const country = request.headers.get("cf-ipcountry") ?? "";
    const currency = country === "UZ" ? "UZS" : "USD";
    response.cookies.set("currency", currency, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:webp|png|jpg|jpeg|svg|ico|woff2?|ttf|otf)).*)",
  ],
};
