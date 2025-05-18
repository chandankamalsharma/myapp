import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const policy = defineType({
  name: "policy",
  title: "Policy",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title of policy document",
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug of policy document",
      options: {
        source: "title",
      },
      validation: (rule) =>
        rule.required().error(`Required to generate a page on the website`),
      hidden: ({ document }) => !document?.title,
    }),
    defineField({
      name: "content",
      type: "array",
      title: "Content",
      of: [
        {
          type: "block",
        },
      ],
    }),
  ],
});
