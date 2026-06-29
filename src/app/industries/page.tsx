import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { industries } from "@/content/site";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Oglas AI builds custom software and AI systems for manpower, manufacturing, security, trading, healthcare, marketing, facility management, and retail companies.",
};

export default function IndustriesPage() {
  return (
    <>
      <section className="surface-grid bg-pearl py-20">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <SectionHeading
            eyebrow="Industries"
            title="Designed for companies where operations, people, and data have to move together"
            summary="Your industry has its own rules, approvals, teams, and reporting needs. The right system removes manual friction, connects workflows, and gives leadership clearer visibility."
          />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid w-full max-w-[1160px] px-4 gap-6 md:grid-cols-2">
          {industries.map((industry) => (
            <article key={industry.slug} className="rounded-lg border border-black/10 bg-pearl p-7">
              <industry.icon className="h-8 w-8 text-emerald" />
              <h2 className="mt-7 text-2xl font-semibold text-onyx">{industry.title}</h2>
              <p className="mt-4 text-sm leading-7 text-steel">{industry.summary}</p>
              <div className="mt-6 grid gap-2">
                {industry.needs.map((need) => (
                  <span key={need} className="flex items-center gap-2 text-sm text-steel">
                    <CheckCircle2 className="h-4 w-4 text-emerald" />
                    {need}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
