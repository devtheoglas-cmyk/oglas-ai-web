import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { insights } from "@/content/site";

type InsightPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return insights.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = insights.find((item) => item.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function InsightDetailPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const post = insights.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-white">
      <div className="mx-auto w-full max-w-[820px] px-4 py-20">
        <Link href="/insights" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald">
          <ArrowLeft className="h-4 w-4" />
          Insights
        </Link>
        <p className="mt-10 text-xs font-semibold uppercase text-champagne">{post.category}</p>
        <h1 className="mt-5 text-5xl font-semibold leading-tight text-onyx">{post.title}</h1>
        <p className="mt-6 text-sm font-semibold text-steel">
          {post.readTime} · {new Date(post.date).toLocaleDateString("en", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        <p className="mt-10 text-xl leading-9 text-steel">{post.excerpt}</p>
        <div className="mt-10 grid gap-6 text-base leading-8 text-steel">
          <p>
            Most companies do not need a vague AI transformation project. They need
            better workflow capture, cleaner operating data, and software that
            removes repeated manual work before advanced intelligence is layered on top.
          </p>
          <p>
            Oglas AI starts with the business process: who does the work, which
            approvals matter, where data enters the system, and what leadership needs
            to see. That foundation makes ERP, automation, dashboards, and AI systems
            easier to adopt.
          </p>
          <p>
            The best systems are practical, measurable, and designed around the teams
            who will use them every day.
          </p>
        </div>
      </div>
    </article>
  );
}
