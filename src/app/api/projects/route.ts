import db from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const projects = await db.project.findMany({
      select: {
        id: true,
        name: true,
        photo: true,
      },
    });
    return NextResponse.json(projects, { status: 200 });

    //
  } catch (error) {
    console.error("❌ Error fetching projects:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}
