"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { BrandMark } from "@/components/brand-mark";
import { navigation } from "@/content/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-pearl/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-[1160px] px-4 items-center justify-between">
        <BrandMark />

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-steel transition hover:text-onyx"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-md bg-onyx px-5 text-sm font-semibold text-white transition hover:bg-emerald"
          >
            Book a Free Consultation
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-md border border-black/10 text-onyx md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-black/10 bg-pearl md:hidden">
          <nav className="mx-auto grid w-full max-w-[1160px] px-4 gap-2 py-5" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-semibold text-onyx transition hover:bg-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-11 items-center justify-center rounded-md bg-onyx px-5 text-sm font-semibold text-white"
            >
              Book a Free Consultation
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
