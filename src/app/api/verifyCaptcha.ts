import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { captchaToken } = req.body;

  if (!captchaToken) {
    return res.status(400).json({ error: "CAPTCHA token missing" });
  }

  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaToken}`,
    {
      method: "POST",
    },
  );

  const data = await response.json();

  if (!data.success) {
    return res.status(400).json({ error: "CAPTCHA validation failed" });
  }

  res.status(200).json({ message: "CAPTCHA verified successfully" });
}
