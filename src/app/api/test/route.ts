import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

export async function GET() {
  const data = await prisma.project.findMany();
  return NextResponse.json({ data }, { status: 200 });
}
