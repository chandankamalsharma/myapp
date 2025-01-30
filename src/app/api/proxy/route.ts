import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const response = await fetch(
      "https://go.pardot.com/l/1085292/2025-01-30/8q2dgs",
      {
        headers: {
          "User-Agent": req.headers.get("user-agent") || "",
          Referer: req.headers.get("referer") || "", // Preserve the referer header if needed
        },
        redirect: "follow", // Ensure redirects are followed
      },
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: `Failed to fetch iframe content. Status: ${response.status}` },
        { status: response.status },
      );
    }

    const data = await response.text();
    return new NextResponse(data, {
      headers: { "Content-Type": "text/html" },
    });
  } catch (error) {
    console.error(error); // For debugging
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
