import { defineArrayMember, defineField, defineType } from "sanity";

const bodyContent = [
  defineArrayMember({
    type: "block",
    styles: [
      { title: "Normal", value: "normal" },
      { title: "Heading 2", value: "h2" },
      { title: "Heading 3", value: "h3" },
      { title: "Quote", value: "blockquote" },
    ],
    lists: [
      { title: "Bullet", value: "bullet" },
      { title: "Number", value: "number" },
    ],
    marks: {
      decorators: [
        { title: "Strong", value: "strong" },
        { title: "Emphasis", value: "em" },
      ],
      annotations: [
        {
          name: "link",
          title: "Link",
          type: "object",
          fields: [
            defineField({
              name: "href",
              title: "URL",
              type: "url",
              validation: (rule) =>
                rule.uri({
                  scheme: ["http", "https", "mailto", "tel"],
                }),
            }),
          ],
        },
      ],
    },
  }),
  defineArrayMember({
    name: "image",
    title: "Image",
    type: "image",
    options: { hotspot: true },
    fields: [
      defineField({
        name: "alt",
        title: "Alt Text",
        type: "string",
        description: "Short description for SEO and accessibility.",
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: "caption",
        title: "Caption",
        type: "string",
      }),
    ],
  }),
];

export const post = defineType({
  name: "post",
  title: "Insight",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "seo", title: "SEO" },
    { name: "arabic", title: "Arabic" },
  ],
  initialValue: () => ({
    status: "published",
    publishedAt: new Date().toISOString(),
  }),
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: "content",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "titleAr",
      title: "Arabic Title",
      type: "string",
      group: "arabic",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "content",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "status",
      title: "Visibility",
      type: "string",
      group: "content",
      options: {
        layout: "radio",
        list: [
          { title: "Published on website", value: "published" },
          { title: "Hidden from website", value: "hidden" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      group: "content",
      options: {
        list: [
          "Automation Strategy",
          "ERP Systems",
          "Computer Vision",
          "Marketing Automation",
          "AI Operations",
          "Business Intelligence",
        ],
      },
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      group: "content",
      rows: 3,
      validation: (rule) => rule.max(220),
    }),
    defineField({
      name: "excerptAr",
      title: "Arabic Excerpt",
      type: "text",
      group: "arabic",
      rows: 3,
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      group: "content",
    }),
    defineField({
      name: "readTime",
      title: "Read Time",
      type: "string",
      group: "content",
      description: "Example: 5 min read",
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      group: "content",
      to: [{ type: "author" }],
    }),
    defineField({
      name: "mainImage",
      title: "Cover Image",
      type: "image",
      group: "content",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Short description for SEO and accessibility.",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "caption",
          title: "Caption",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      group: "content",
      of: bodyContent,
    }),
    defineField({
      name: "bodyAr",
      title: "Arabic Body",
      type: "array",
      group: "arabic",
      of: bodyContent,
    }),
    defineField({
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
      group: "seo",
      validation: (rule) => rule.max(70),
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      group: "seo",
      rows: 3,
      validation: (rule) => rule.max(160),
    }),
    defineField({
      name: "keywords",
      title: "SEO Keywords",
      type: "array",
      group: "seo",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "canonicalUrl",
      title: "Canonical URL",
      type: "url",
      group: "seo",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "mainImage",
    },
  },
});
