"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle } from "lucide-react";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useActionState } from "@/lib/use-action-state";
import { cn } from "@/lib/utils";

import { schema } from "@/components/forms/newsletter-form/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { subscribeToNewsletter } from "./newsletter-form.action";

export const NewsletterForm = () => {
  const [state, formAction, pending] = useActionState(subscribeToNewsletter, {
    message: "",
  });
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
    },
  });
  const formRef = useRef<HTMLFormElement>(null);

  const isSuccess = state.message === "SUCCESS";

  useEffect(() => {
    if (isSuccess) {
      form.reset();
    }
  }, [form, isSuccess]);

  return (
    <div>
      <p className="pb-1.5 text-center text-xs text-white sm:pb-2 sm:text-base">
        Sign up for our newsletter to stay updated
      </p>
      <Form {...form}>
        <form
          className="mx-auto flex max-w-[420px] gap-2 sm:max-w-[420px] sm:gap-3"
          ref={formRef}
          action={formAction}
          onSubmit={async (evt) => {
            evt.preventDefault();
            await form.handleSubmit(() => {
              formAction(new FormData(formRef.current!));
            })(evt);
          }}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="grow">
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Email Address"
                    className="h-8 rounded-lg text-[8px] sm:h-12"
                  />
                </FormControl>
                <FormMessage className="text-[8px]" />
              </FormItem>
            )}
          />
          <button
            className={cn(
              "h-8 w-[61px] rounded-lg px-3.5 text-[8px] font-semibold text-white sm:h-12 sm:w-[98px] sm:px-5 sm:text-sm",
              {
                "bg-dark": !isSuccess,
                "bg-[#189925]": isSuccess,
              },
            )}
            disabled={isSuccess || pending}
          >
            {pending ? (
              <LoaderCircle className="mx-auto h-5 w-5 animate-spin" />
            ) : !isSuccess ? (
              "Sign Up"
            ) : (
              "Thanks!"
            )}
          </button>
        </form>
      </Form>
    </div>
  );
};
