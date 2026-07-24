import type { Metadata } from "next";
import { staticPageSeo } from "@/content/seo";

const seo = staticPageSeo["/privacy"];

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: seo.description,
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto w-full max-w-[820px] px-4">
        <p className="text-xs font-semibold uppercase text-champagne">Privacy Policy</p>
        <h1 className="mt-4 text-5xl font-semibold leading-tight text-onyx">
          Privacy Policy
        </h1>
        <div className="mt-10 grid gap-6 text-base leading-8 text-steel">
          <p>
            Oglas AI collects information submitted through this website to respond
            to business enquiries, consultation requests, and project discussions.
          </p>
          <p>
            Contact details and project information are used only for communication,
            qualification, and service planning. We do not sell enquiry information
            to third parties.
          </p>
          <p>
            If you want your enquiry information removed, contact md@oglasglobal.com
            and we will review the request.
          </p>
        </div>
      </div>
    </section>
  );
}
