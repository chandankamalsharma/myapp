import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    console.log("API received form data:", formData);

    // Transform the data to match Pardot's expected format
    const pardotData = new URLSearchParams({
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      city: formData.city,
      state: formData.state,
    });

    console.log(
      "Transformed data for Pardot:",
      Object.fromEntries(pardotData.entries()),
    );

    // Forward the request to Pardot
    console.log("Sending data to Pardot...");
    const pardotResponse = await fetch(
      "https://go.mic.life/l/1085292/2025-01-30/8q2gt6",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        },
        body: pardotData.toString(),
      },
    );

    console.log("Pardot response status:", pardotResponse.status);
    console.log(
      "Pardot response headers:",
      Object.fromEntries(pardotResponse.headers.entries()),
    );

    const pardotResponseText = await pardotResponse.text();
    console.log("Pardot response body:", pardotResponseText);

    // Check if the response contains success indicators
    const isSuccess =
      pardotResponseText.includes("success") ||
      pardotResponseText.includes("thank you") ||
      pardotResponse.status === 200;

    if (!isSuccess) {
      console.error("Pardot API error:", pardotResponseText);
      throw new Error(`Failed to submit to Pardot: ${pardotResponseText}`);
    }

    // Return a success response
    return NextResponse.json(
      {
        message: "Form submitted successfully",
        details: {
          status: pardotResponse.status,
          response: "Successfully submitted to Pardot",
        },
      },
      {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      },
    );
  } catch (error) {
    console.error("Error submitting form:", error);
    console.error("Detailed error:", {
      name: error instanceof Error ? error.name : "Unknown",
      message: error instanceof Error ? error.message : "Unknown error",
      stack: error instanceof Error ? error.stack : undefined,
    });

    return NextResponse.json(
      {
        message:
          error instanceof Error ? error.message : "Error submitting form",
        error: true,
        details:
          error instanceof Error
            ? {
                name: error.name,
                message: error.message,
                stack: error.stack,
              }
            : undefined,
      },
      {
        status: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      },
    );
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    },
  );
}

