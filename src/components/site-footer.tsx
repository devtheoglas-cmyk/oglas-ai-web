import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { company, navigation, services } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-onyx text-white">
      <div className="mx-auto grid w-full max-w-[1160px] px-4 gap-12 py-14 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <BrandMark tone="dark" />
          <p className="mt-6 max-w-md text-sm leading-7 text-white/70">
            {company.positioning}
          </p>
          <a
            href={`mailto:${company.email}`}
            className="mt-5 inline-flex text-sm font-semibold text-champagne transition hover:text-cyan"
          >
            {company.email}
          </a>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Pages</h2>
          <div className="mt-5 grid gap-3">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/65 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/privacy" className="text-sm text-white/65 transition hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Core Services</h2>
          <div className="mt-5 grid gap-3">
            {services.slice(0, 5).map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="text-sm text-white/65 transition hover:text-white"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="mx-auto flex w-full max-w-[1160px] px-4 flex-col gap-3 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Oglas AI. All rights reserved.</span>
          <span>Dubai, UAE. Built for global operations.</span>
        </div>
      </div>
    </footer>
  );
}
