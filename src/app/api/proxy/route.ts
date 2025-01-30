import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const response = await fetch(
      "http://go.pardot.com/l/1085292/2025-01-30/8q2dgs",
      {
        headers: {
          "User-Agent": req.headers.get("user-agent") || "", // Preserve user agent
        },
      },
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch iframe content" },
        { status: response.status },
      );
    }

    const data = await response.text();
    return new NextResponse(data, {
      headers: { "Content-Type": "text/html" },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
