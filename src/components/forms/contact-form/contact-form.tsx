"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle } from "lucide-react";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useActionState } from "@/lib/use-action-state";
import { cn } from "@/lib/utils";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { sendMessage } from "./contact-form.action";
import { schema } from "./schema";

export const ContactForm = () => {
  const [state, formAction, pending] = useActionState(sendMessage, {
    message: "",
  });
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
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
    <Form {...form}>
      <form
        className="mx-auto grid max-w-[420px] grid-flow-col grid-cols-1 grid-rows-5 gap-5 sm:max-w-screen-sm sm:grid-cols-2 sm:grid-rows-3"
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
          name="name"
          render={({ field }) => (
            <FormItem className="grow">
              <FormControl>
                <Input
                  {...field}
                  placeholder="Full Name"
                  className="h-16 rounded-2xl p-5 text-sm"
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="grow">
              <FormControl>
                <Input
                  {...field}
                  placeholder="Email Address"
                  className="h-16 rounded-2xl p-5 text-sm"
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="row-span-2 sm:col-start-2 sm:row-span-3">
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Message"
                  className="h-full resize-none rounded-2xl p-5 text-sm font-medium text-black"
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <button
          className={cn(
            "h-full w-full rounded-2xl px-4 text-base font-semibold text-white",
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
            "Send Message"
          ) : (
            "Thanks!"
          )}
        </button>
      </form>
    </Form>
  );
};
