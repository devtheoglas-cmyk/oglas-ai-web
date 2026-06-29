import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { insights } from "@/content/site";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Oglas AI insights on ERP, automation, AI adoption, computer vision, and business software strategy.",
};

export default function InsightsPage() {
  return (
    <>
      <section className="surface-grid bg-pearl py-20">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <SectionHeading
            eyebrow="Insights"
            title="Automation and AI thinking for operational leaders"
            summary="Practical articles to help you decide what to automate, where AI fits, and how to modernize operations without creating more complexity."
          />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid w-full max-w-[1160px] px-4 gap-6 lg:grid-cols-3">
          {insights.map((post) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              className="group rounded-lg border border-black/10 bg-pearl p-7 transition hover:-translate-y-1 hover:border-emerald/35"
            >
              <p className="text-xs font-semibold uppercase text-champagne">{post.category}</p>
              <h2 className="mt-5 text-2xl font-semibold leading-tight text-onyx">
                {post.title}
              </h2>
              <p className="mt-5 text-sm leading-7 text-steel">{post.excerpt}</p>
              <div className="mt-7 flex items-center justify-between text-xs font-semibold text-steel">
                <span>{post.readTime}</span>
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:text-emerald" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
