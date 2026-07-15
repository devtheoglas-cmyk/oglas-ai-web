import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Globe2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { InterfaceVisual } from "@/components/interface-visual";
import { SectionHeading } from "@/components/section-heading";
import {
  aiServiceIdeas,
  caseStudies,
  company,
  industries,
  processSteps,
  services,
} from "@/content/site";
import { getPublishedPosts } from "@/sanity/lib/posts";

export const revalidate = 60;

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default async function Home() {
  const latestInsights = await getPublishedPosts(3);

  return (
    <>
      <section className="surface-grid border-b border-black/10 bg-pearl">
        <div className="mx-auto grid w-full max-w-[1160px] px-4 gap-12 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-24">
          <div>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex h-9 items-center rounded-md border border-black/10 bg-white/75 px-3 text-xs font-semibold uppercase text-champagne">
                Custom software
              </span>
              <span className="inline-flex h-9 items-center rounded-md border border-black/10 bg-white/75 px-3 text-xs font-semibold uppercase text-emerald">
                Practical AI
              </span>
              <span className="inline-flex h-9 items-center gap-2 rounded-md border border-black/10 bg-white/75 px-3 text-xs font-semibold uppercase text-steel">
                <Globe2 className="h-4 w-4 text-emerald" />
                UAE-based
              </span>
            </div>
            <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[1.05] text-onyx md:text-7xl">
              Custom software and AI systems for companies ready to operate smarter.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-steel">
              {company.positioning} We build ERP, payroll automation, ESS portals,
              workflow systems, computer vision, and AI dashboards around the way
              your business actually runs.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-onyx px-6 text-sm font-semibold text-white transition hover:bg-emerald"
              >
                Book a Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex h-12 items-center justify-center rounded-md border border-black/10 bg-white px-6 text-sm font-semibold text-onyx transition hover:border-emerald/40"
              >
                Explore Services
              </Link>
            </div>
          </div>

          <InterfaceVisual />
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="mx-auto grid w-full max-w-[1160px] px-4 gap-4 md:grid-cols-3">
          {[
            "Custom quote only",
            "Built for UAE operations",
            "Ready for Saudi and Australia expansion",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-md border border-black/10 bg-pearl p-4">
              <CheckCircle2 className="h-5 w-5 text-emerald" />
              <span className="text-sm font-semibold text-onyx">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-pearl py-20">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <SectionHeading
            eyebrow="Services"
            title="Software and AI capabilities for operational companies"
            summary="Replace scattered tools and manual follow-ups with systems that connect your teams, reduce repeated work, and give leadership a clearer view of daily operations."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-lg border border-black/10 bg-white p-6 transition hover:-translate-y-1 hover:border-emerald/35 hover:shadow-xl hover:shadow-black/5"
              >
                <service.icon className="h-7 w-7 text-emerald" />
                <p className="mt-6 text-xs font-semibold uppercase text-champagne">
                  {service.eyebrow}
                </p>
                <h3 className="mt-3 text-xl font-semibold leading-7 text-onyx">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-steel">{service.summary}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald">
                  View service
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-grid bg-onyx py-20 text-white">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <SectionHeading
            eyebrow="AI systems"
            title="Smarter ways to reduce repeated operational work"
            summary="Use AI to detect delays earlier, connect disconnected tools, summarize reports faster, and help your team act before small issues become expensive problems."
            tone="dark"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {aiServiceIdeas.map((idea) => (
              <div key={idea.title} className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
                <idea.icon className="h-7 w-7 text-champagne" />
                <h3 className="mt-6 text-xl font-semibold text-white">{idea.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/65">{idea.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading
              eyebrow="Industries"
              title="Flexible across sectors, specific inside every workflow"
              summary="Whether you run staffing, manufacturing, security, trading, healthcare, or agency operations, your workflows can be mapped into one clearer operating system."
            />
            <div className="grid gap-4 md:grid-cols-2">
              {industries.slice(0, 6).map((industry) => (
                <div key={industry.slug} className="rounded-lg border border-black/10 bg-pearl p-5">
                  <industry.icon className="h-6 w-6 text-emerald" />
                  <h3 className="mt-5 text-lg font-semibold text-onyx">{industry.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-steel">{industry.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-pearl py-20">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <SectionHeading
            eyebrow="Anonymous case studies"
            title="Confidential work, visible outcomes"
            summary="See how similar teams reduced HR workload, shortened payroll cycles, uncovered cashflow gaps, and improved campaign monitoring while keeping client identities confidential."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {caseStudies.map((study) => (
              <article key={study.slug} className="rounded-lg border border-black/10 bg-white p-6">
                <p className="text-xs font-semibold uppercase text-emerald">{study.sector}</p>
                <p className="mt-4 inline-flex rounded-md border border-champagne/30 bg-champagne/10 px-3 py-2 text-xs font-semibold text-onyx">
                  {study.metric}
                </p>
                <h3 className="mt-4 text-xl font-semibold leading-7 text-onyx">{study.title}</h3>
                <p className="mt-4 text-sm leading-7 text-steel">{study.solution}</p>
                <div className="mt-6 grid gap-2">
                  {study.outcomes.map((outcome) => (
                    <div key={outcome} className="flex gap-2 text-sm text-steel">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <SectionHeading
            eyebrow="Delivery"
            title="A practical build process for serious business systems"
            summary="You do not need generic AI. You need a system your team can adopt, measure, and improve without adding more complexity to the business."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step.title} className="rounded-lg border border-black/10 bg-pearl p-5">
                <span className="grid h-9 w-9 place-items-center rounded-md bg-onyx text-sm font-semibold text-champagne">
                  {index + 1}
                </span>
                <h3 className="mt-6 text-lg font-semibold text-onyx">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-steel">{step.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-pearl py-20">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Insights"
              title="Ideas for automation, ERP, and AI adoption"
            />
            <Link href="/insights" className="text-sm font-semibold text-emerald transition hover:text-onyx">
              View all insights
            </Link>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {latestInsights.map((post) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                className="overflow-hidden rounded-lg border border-black/10 bg-white transition hover:-translate-y-1 hover:border-emerald/35"
              >
                {post.mainImage?.asset?.url ? (
                  <div className="relative aspect-[16/10] border-b border-black/10 bg-pearl">
                    <Image
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt ?? ""}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                ) : null}
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase text-champagne">{post.category}</p>
                  <h3 className="mt-4 text-xl font-semibold leading-7 text-onyx">{post.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-steel">{post.excerpt}</p>
                  <p className="mt-6 text-xs font-semibold text-steel">{post.readTime}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-onyx py-16 text-white">
        <div className="mx-auto flex w-full max-w-[1160px] px-4 flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase text-champagne">Start with a focused consultation</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight md:text-5xl">
              Tell us the workflow you want to improve. We will map the system around it.
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-white px-6 text-sm font-semibold text-onyx transition hover:bg-champagne"
          >
            Book a Free Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
