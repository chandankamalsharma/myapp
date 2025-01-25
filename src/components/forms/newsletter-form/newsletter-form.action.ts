"use server";

import { sleep } from "@/lib/utils";

import { schema } from "@/components/forms/newsletter-form/schema";

type FormState = {
  message: string;
};

export const subscribeToNewsletter = async (
  prevState: FormState,
  formData: FormData,
): Promise<FormState> => {
  const data = Object.fromEntries(formData);
  const parsed = await schema.safeParseAsync(data);

  if (!parsed.success) return { message: "FAIL" };

  await sleep(1000);

  return { message: "SUCCESS" };
};
