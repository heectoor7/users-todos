import { NextRequest, NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { sessionOptions, SessionData } from "@/app/(auth)/lib";

const protectedRoutes = ["/info", "/products", "/todos", "/update", "/users"];

export async function middleware(req: NextRequest) {
  const session = await getIronSession<SessionData>(
    req.cookies as any,
    sessionOptions
  );

  const res = NextResponse.next();

  res.headers.set("x-is-logged-in", session.isLoggedIn ? "true" : "false");
  res.headers.set("x-username", session.username ?? "");
  res.headers.set("x-user-id", session.userId ?? "");

  const isProtected = protectedRoutes.some(r =>
    req.nextUrl.pathname.startsWith(r)
  );

  if (isProtected && !session.isLoggedIn) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return res;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|api).*)",
  ],
};