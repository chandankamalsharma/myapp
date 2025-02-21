import { defineField, defineType } from "sanity";

export const blog = defineType({
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title of blogs article",
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug of your blogs article",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "titleImage",
      type: "image",
      title: "Title Image",
    }),
    defineField({
      name: "smallDescription",
      type: "text",
      title: "Small Description",
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
