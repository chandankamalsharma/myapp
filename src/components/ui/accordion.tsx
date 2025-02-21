"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import {
  AccordionMultipleProps,
  AccordionSingleProps,
} from "@radix-ui/react-accordion";
import * as React from "react";
import { ComponentProps, useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn("flex flex-1 items-center justify-center", className)}
      {...props}
    >
      {children}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

const MEDIA_QUERY = "(min-width: 640px)";
const MobileOnlyAccordion = (props: ComponentProps<typeof Accordion>) => {
  if (props.type === "single") {
    return <MobileOnlySingleAccordion {...props} />;
  } else {
    return <MobileOnlyMultipleAccordion {...props} />;
  }
};

const MobileOnlySingleAccordion = (
  props: Omit<AccordionSingleProps, "value" | "onValueChange">,
) => {
  const [value, setValue] = useState(props.defaultValue);
  const isMobile = !useMediaQuery(MEDIA_QUERY);

  return (
    <Accordion
      value={isMobile ? value : props.defaultValue}
      onValueChange={isMobile ? setValue : undefined}
      {...props}
    />
  );
};
const MobileOnlyMultipleAccordion = (
  props: Omit<AccordionMultipleProps, "value" | "onValueChange">,
) => {
  const [values, setValues] = useState(props.defaultValue);
  const isMobile = !useMediaQuery(MEDIA_QUERY);

  useEffect(() => {
    if (props.defaultValue && props.defaultValue.length > 0) {
      if (isMobile) {
        setValues([props.defaultValue[0]]);
      } else {
        setValues(props.defaultValue);
      }
    }
  }, [isMobile, props.defaultValue]);

  return (
    <Accordion
      value={isMobile ? values : props.defaultValue}
      onValueChange={isMobile ? setValues : undefined}
      {...props}
    />
  );
};

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  MobileOnlyAccordion,
};
