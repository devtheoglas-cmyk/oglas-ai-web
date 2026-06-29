import { defineField, defineType } from "sanity";

export const caseStudy = defineType({
  name: "caseStudy",
  title: "Case Study",
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
      name: "sector",
      title: "Anonymous Sector Name",
      type: "string",
      description: "Example: Manpower Company, Steel Manufacturing",
    }),
    defineField({
      name: "metric",
      title: "Headline Metric",
      type: "string",
      description: "Example: 300 minutes saved per day",
    }),
    defineField({
      name: "challenge",
      title: "Challenge",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "solution",
      title: "Solution",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "outcomes",
      title: "Outcomes",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "services",
      title: "Related Services",
      type: "array",
      of: [{ type: "reference", to: [{ type: "service" }] }],
    }),
    defineField({
      name: "published",
      title: "Published",
      type: "boolean",
      initialValue: true,
    }),
  ],
});
