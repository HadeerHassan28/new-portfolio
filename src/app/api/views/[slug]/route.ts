import { getViewCount } from "@/lib/redis";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

type Params = {
  slug: string;
};

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<Params> }
): Promise<NextResponse> {
  try {
    const { slug } = await params;
    
    if (!slug) {
      return NextResponse.json({ error: "Slug is required" }, { status: 400 });
    }

    const views = await getViewCount(slug);
    
    return NextResponse.json({ views }, {
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
      },
    });
  } catch (error) {
    console.error("Error fetching view count:", error);
    return NextResponse.json({ views: 0 });
  }
}