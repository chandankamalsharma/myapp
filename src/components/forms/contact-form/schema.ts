import { z } from "zod";

export const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});
