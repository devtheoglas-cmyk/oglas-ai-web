import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Globe2, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { InterfaceVisual } from "@/components/interface-visual";
import { SectionHeading } from "@/components/section-heading";
import { FaqStructuredData } from "@/components/structured-data";
import {
  caseStudies,
  company,
  helpSlides,
  homepageFaqs,
  industries,
  testimonials,
  whyChooseCards,
} from "@/content/site";
import { staticPageSeo } from "@/content/seo";
import { getPublishedPosts } from "@/sanity/lib/posts";

export const revalidate = 60;

const seo = staticPageSeo["/"];

export const metadata: Metadata = {
  title: {
    absolute: seo.title!,
  },
  description: seo.description,
  alternates: {
    canonical: "/",
  },
};

export default async function Home() {
  const latestInsights = await getPublishedPosts(3);

  return (
    <>
      <FaqStructuredData faqs={homepageFaqs} />

      {/* SECTION 1 — Hero */}
      <section className="surface-grid border-b border-black/10 bg-pearl">
        <div className="mx-auto grid w-full max-w-[1160px] gap-12 px-4 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-24">
          <div>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex h-9 items-center rounded-md border border-black/10 bg-white/75 px-3 text-xs font-semibold uppercase tracking-wide text-champagne">
                Custom Software &amp; AI Solutions
              </span>
              <span className="inline-flex h-9 items-center gap-2 rounded-md border border-black/10 bg-white/75 px-3 text-xs font-semibold uppercase tracking-wide text-steel">
                <Globe2 className="h-4 w-4 text-emerald" />
                UAE-based · Globally available
              </span>
            </div>
            <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[1.05] text-onyx md:text-7xl">
              Software Built Around Real Business Operations
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-steel">
              Our custom software development covers ERP systems, AI-powered solutions,
              workflow automation, and business applications designed around your unique
              business processes — helping you reduce manual work, improve operational
              efficiency, and scale with confidence.
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
                Explore Our Services
              </Link>
            </div>
          </div>

          <InterfaceVisual />
        </div>
      </section>

      {/* SECTION 2 — Why Do Businesses Choose Oglas AI? */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <SectionHeading
            eyebrow="Why Oglas AI"
            title="Why Do Businesses Choose Oglas AI?"
            summary="Businesses choose Oglas AI because we believe great software starts with understanding the business behind it. That's how we build custom software that solves real challenges, supports your team, and grows with your business."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {whyChooseCards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col gap-5 rounded-lg border border-black/10 bg-pearl p-6"
              >
                <span className="grid h-11 w-11 place-items-center rounded-md bg-onyx text-champagne">
                  <card.icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-onyx">{card.title}</h3>
                <p className="text-sm leading-7 text-steel">{card.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — How We Help Your Business */}
      <section className="bg-pearl py-20">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <SectionHeading
            eyebrow="How We Help"
            title="How We Help Your Business"
            summary="Every business has unique challenges and goals. We create custom software and AI solutions that simplify operations, empower your teams, and help you grow with confidence."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {helpSlides.map((slide) => (
              <article
                key={slide.title}
                className="flex flex-col gap-6 rounded-lg border border-black/10 bg-white p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-champagne">
                  {slide.eyebrow}
                </p>
                <h3 className="text-2xl font-semibold leading-8 text-onyx">
                  {slide.title}
                </h3>
                <p className="text-sm leading-7 text-steel">{slide.description}</p>
                <div className="grid gap-4 border-t border-black/5 pt-6">
                  {slide.points.map((point) => (
                    <div key={point.title} className="flex gap-4">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-emerald/10 text-emerald">
                        <point.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h4 className="text-sm font-semibold text-onyx">
                          <Link
                            href={point.href}
                            className="transition-colors hover:text-emerald"
                          >
                            {point.title}
                          </Link>
                        </h4>
                        <p className="mt-1 text-sm leading-6 text-steel">
                          {point.summary}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-auto text-sm font-semibold text-emerald">
                  {slide.closer}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-start gap-6 rounded-lg border border-black/10 bg-onyx px-8 py-10 text-white md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-champagne">
                Built on Trust. Focused on Results.
              </p>
              <p className="mt-3 max-w-2xl text-lg leading-8 text-white/80">
                We combine deep expertise, real-world experience, and a
                customer-first approach to deliver solutions that create lasting
                impact.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-white px-6 text-sm font-semibold text-onyx transition hover:bg-champagne"
            >
              Let&apos;s Build What&apos;s Next
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Software Designed for the Way You Do Business */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <SectionHeading
            eyebrow="Industries"
            title="Software Designed for the Way You Do Business"
            summary="Every industry has its own way of working, and the right software should reflect that. We build custom solutions that fit your workflows, solve industry-specific challenges, and help your business grow with confidence."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <div
                key={industry.slug}
                className="flex flex-col gap-4 rounded-lg border border-black/10 bg-pearl p-5"
              >
                <industry.icon className="h-6 w-6 text-emerald" />
                <h3 className="text-lg font-semibold text-onyx">{industry.title}</h3>
                <p className="text-sm leading-7 text-steel">{industry.summary}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 grid gap-6 rounded-lg border border-black/10 bg-pearl p-8 md:grid-cols-[1.4fr_0.6fr] md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-champagne">
                Different Industries. One Approach.
              </p>
              <p className="mt-3 text-lg leading-8 text-onyx">
                Every business is unique, but our approach stays the same. We take
                the time to understand how you work before designing software that
                delivers lasting value.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-onyx px-6 text-sm font-semibold text-white transition hover:bg-emerald md:justify-self-end"
            >
              Book a Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5 — What Our Clients Say */}
      <section className="bg-pearl py-20">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <SectionHeading
            eyebrow="Client Voices"
            title="What Our Clients Say"
            summary="The strongest proof of our work comes from the businesses we've partnered with. Here's what our clients have to say about their experience working with Oglas AI."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <blockquote
                key={item.quote}
                className="flex flex-col gap-6 rounded-lg border border-black/10 bg-white p-6"
              >
                <Quote className="h-6 w-6 text-champagne" />
                <p className="text-sm leading-7 text-onyx">&ldquo;{item.quote}&rdquo;</p>
                <footer className="mt-auto border-t border-black/5 pt-4">
                  <p className="text-sm font-semibold text-onyx">{item.role}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-steel">
                    {item.sector}
                  </p>
                </footer>
              </blockquote>
            ))}
          </div>

          {caseStudies.length ? (
            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {caseStudies.slice(0, 2).map((study) => (
                <article
                  key={study.slug}
                  className="rounded-lg border border-black/10 bg-white p-6"
                >
                  <p className="text-xs font-semibold uppercase text-emerald">
                    {study.sector}
                  </p>
                  <p className="mt-4 inline-flex rounded-md border border-champagne/30 bg-champagne/10 px-3 py-2 text-xs font-semibold text-onyx">
                    {study.metric}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold leading-7 text-onyx">
                    {study.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-steel">
                    {study.solution}
                  </p>
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
          ) : null}
        </div>
      </section>

      {/* Insights */}
      {latestInsights.length ? (
        <section className="bg-white py-20">
          <div className="mx-auto w-full max-w-[1160px] px-4">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionHeading
                eyebrow="Insights"
                title="Ideas for automation, ERP, and AI adoption"
              />
              <Link
                href="/insights"
                className="text-sm font-semibold text-emerald transition hover:text-onyx"
              >
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
                    <p className="text-xs font-semibold uppercase text-champagne">
                      {post.category}
                    </p>
                    <h3 className="mt-4 text-xl font-semibold leading-7 text-onyx">
                      {post.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-steel">
                      {post.excerpt}
                    </p>
                    <p className="mt-6 text-xs font-semibold text-steel">
                      {post.readTime}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* SECTION 6 — Frequently Asked Questions */}
      <section className="bg-pearl py-20">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            summary="Answers to the questions Dubai-based leadership teams ask most often before starting a custom software or AI project."
          />
          <div className="mt-12 grid gap-4">
            {homepageFaqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-lg border border-black/10 bg-white p-6 open:border-emerald/40"
                open={index === 0}
              >
                <summary className="flex cursor-pointer items-start justify-between gap-6 text-base font-semibold text-onyx marker:hidden">
                  {faq.question}
                  <span
                    aria-hidden="true"
                    className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-md border border-black/10 bg-pearl text-emerald transition group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-steel">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL SECTION — Contact Form */}
      <section id="contact" className="bg-white py-20">
        <div className="mx-auto grid w-full max-w-[1160px] gap-12 px-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-champagne">
              Book a Free Consultation
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-onyx md:text-5xl">
              Tell us the workflow you want to improve. We will map the system
              around it.
            </h2>
            <p className="mt-5 text-base leading-8 text-steel">
              Share a short brief and we will follow up with next steps, timelines,
              and a tailored engagement plan for {company.location}-based and global
              operations.
            </p>
            <ul className="mt-8 grid gap-3">
              {[
                "Custom quote only",
                "Discovery-first engagement",
                "UAE-based · Globally available",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-onyx">
                  <CheckCircle2 className="h-5 w-5 text-emerald" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-black/10 bg-pearl p-6 md:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
