"use server";

import { sleep } from "@/lib/utils";

import { schema } from "./schema";

type FormState = {
  message: string;
};

export const sendMessage = async (
  prevState: FormState,
  formData: FormData,
): Promise<FormState> => {
  const data = Object.fromEntries(formData);
  const parsed = await schema.safeParseAsync(data);

  if (!parsed.success) return { message: "FAIL" };

  await sleep(1000);

  return { message: "SUCCESS" };
};
