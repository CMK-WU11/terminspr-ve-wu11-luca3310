import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middelware(request: NextRequest) {
  if (
    !request.cookies.get("landrupToken") ||
    !request.cookies.get("landrupUserId")
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/calendar",
};
