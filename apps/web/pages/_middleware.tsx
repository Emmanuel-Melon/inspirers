import { getSession } from "next-auth/react";
import { NextResponse } from "next/server";
export async function middleware(req) {
    return NextResponse.redirect("/auth/login");
  return NextResponse.next();
}
