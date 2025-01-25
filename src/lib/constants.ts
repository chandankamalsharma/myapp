export type Theme = "purple" | "blue";

export const calendlyLink =
  "https://calendly.com/d/ckc4-qw4-yd7/ichras-com-intro";

export const baseUrl = process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";
