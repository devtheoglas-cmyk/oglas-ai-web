import { defineField, defineType } from "sanity";

export const industry = defineType({
  name: "industry",
  title: "Industry",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "titleAr",
      title: "Arabic Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "summaryAr",
      title: "Arabic Summary",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "needs",
      title: "Common Needs",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});
