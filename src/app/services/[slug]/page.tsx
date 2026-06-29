import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/content/site";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {};
  }

  return {
    title: service.title,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="surface-grid bg-pearl py-20">
        <div className="mx-auto grid w-full max-w-[1160px] px-4 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <service.icon className="h-10 w-10 text-emerald" />
            <p className="mt-6 text-xs font-semibold uppercase text-champagne">
              {service.eyebrow}
            </p>
            <h1 className="mt-4 text-5xl font-semibold leading-tight text-onyx md:text-6xl">
              {service.title}
            </h1>
          </div>
          <p className="text-lg leading-8 text-steel">{service.description}</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid w-full max-w-[1160px] px-4 gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-lg border border-black/10 bg-onyx p-7 text-white">
            <h2 className="text-2xl font-semibold">Best fit</h2>
            <p className="mt-5 text-sm leading-7 text-white/70">{service.fit}</p>
            <Link
              href="/contact"
              className="mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-white px-5 text-sm font-semibold text-onyx transition hover:bg-champagne"
            >
              Book a Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <SectionHeading title="Expected outcomes" />
              <div className="mt-6 grid gap-3">
                {service.outcomes.map((outcome) => (
                  <div key={outcome} className="flex gap-3 rounded-md border border-black/10 bg-pearl p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald" />
                    <span className="text-sm leading-6 text-steel">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionHeading title="Capabilities" />
              <div className="mt-6 grid gap-3">
                {service.capabilities.map((capability) => (
                  <div key={capability} className="rounded-md border border-black/10 bg-pearl p-4 text-sm font-semibold text-onyx">
                    {capability}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
