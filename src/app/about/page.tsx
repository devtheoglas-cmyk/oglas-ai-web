import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { company, processSteps } from "@/content/site";
import { staticPageSeo } from "@/content/seo";

const seo = staticPageSeo["/about"];

export const metadata: Metadata = {
  title: {
    absolute: seo.title!,
  },
  description: seo.description,
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="surface-grid bg-pearl py-20">
        <div className="mx-auto grid w-full max-w-[1160px] px-4 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            eyebrow="About"
            title="A Dubai technology partner for custom business systems"
            headingLevel="h1"
          />
          <p className="text-lg leading-8 text-steel">
            Oglas AI builds software and AI integrated solutions for companies that
            need more than off-the-shelf tools. We work across ERP, payroll, ESS,
            workflow automation, computer vision, marketing automation, and
            decision intelligence.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid w-full max-w-[1160px] px-4 gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-lg border border-black/10 bg-onyx p-7 text-white">
            <MapPin className="h-7 w-7 text-champagne" />
            <h2 className="mt-6 text-2xl font-semibold">{company.location}</h2>
            <p className="mt-5 text-sm leading-7 text-white/70">
              UAE based, built for companies with regional and global ambitions,
              including upcoming expansion opportunities in Saudi Arabia and Australia.
            </p>
          </div>
          <div>
            <SectionHeading
              title="Built around the way your company actually works"
              summary="Your system should match your approval flows, users, reports, and business rules. We design around your operating model so your team gets software that fits the way work really moves."
            />
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {processSteps.map((step) => (
                <div key={step.title} className="rounded-lg border border-black/10 bg-pearl p-5">
                  <h3 className="text-lg font-semibold text-onyx">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-steel">{step.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
