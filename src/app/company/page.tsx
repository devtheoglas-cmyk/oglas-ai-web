import type { Metadata } from "next";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Building2,
  CheckCircle2,
  CircuitBoard,
  Compass,
  Factory,
  Globe2,
  Handshake,
  HeartPulse,
  LineChart,
  MapPin,
  Megaphone,
  Network,
  Rocket,
  ShieldCheck,
  Store,
  Target,
  Truck,
  UsersRound,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { FaqStructuredData } from "@/components/structured-data";
import { company } from "@/content/site";
import { staticPageSeo } from "@/content/seo";

export const revalidate = 60;

const seo = staticPageSeo["/company"];
const baseUrl = "https://www.oglasai.com";

export const metadata: Metadata = {
  title: {
    absolute: seo.title!,
  },
  description: seo.description,
  alternates: {
    canonical: "/company",
  },
};

type IconItem = {
  index: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const whatWeDo: IconItem[] = [
  {
    index: "01",
    title: "Custom Business Software",
    description:
      "Applications and internal systems designed around your workflows, users, data, approvals, and operational requirements.",
    icon: CircuitBoard,
  },
  {
    index: "02",
    title: "Business Automation",
    description:
      "Automated workflows that reduce repetitive work across payroll, approvals, documents, reporting, operations, and customer processes.",
    icon: Workflow,
  },
  {
    index: "03",
    title: "Practical AI",
    description:
      "AI systems that solve specific business problems — from computer vision and document processing to dashboards, assistants, and decision intelligence.",
    icon: BrainCircuit,
  },
  {
    index: "04",
    title: "Integrated Business Systems",
    description:
      "Connected systems that bring data and processes together across ERP, HR, payroll, CRM, operations, and other business applications.",
    icon: Network,
  },
];

const approach: IconItem[] = [
  {
    index: "01",
    title: "Understand Before We Build",
    description:
      "We start by understanding your existing workflows, business rules, people, systems, and pain points before recommending a solution.",
    icon: Compass,
  },
  {
    index: "02",
    title: "Build What You Need",
    description:
      "We focus on the processes that matter instead of adding technology simply because it is available.",
    icon: Target,
  },
  {
    index: "03",
    title: "Make It Practical",
    description:
      "AI and automation should create measurable value — saving time, improving visibility, reducing errors, or helping teams make better decisions.",
    icon: CheckCircle2,
  },
  {
    index: "04",
    title: "Improve Over Time",
    description:
      "A business changes. Your software should be able to evolve with new workflows, users, integrations, and operational requirements.",
    icon: Rocket,
  },
];

const howWeWork: IconItem[] = [
  {
    index: "01",
    title: "Discover",
    description:
      "We map your workflows, business rules, users, systems, integrations, and operational challenges to understand what actually needs to change.",
    icon: Handshake,
  },
  {
    index: "02",
    title: "Design",
    description:
      "We translate those requirements into practical software architecture, user experiences, data flows, integrations, and automation opportunities.",
    icon: BarChart3,
  },
  {
    index: "03",
    title: "Build",
    description:
      "We develop the system in focused stages, with regular reviews, testing, and feedback throughout the process.",
    icon: Building2,
  },
  {
    index: "04",
    title: "Improve",
    description:
      "Once the system is in use, we help refine workflows, expand functionality, integrate new requirements, and support the business as it grows.",
    icon: LineChart,
  },
];

const whoWeWorkWith: IconItem[] = [
  {
    index: "01",
    title: "Manpower & Staffing",
    description:
      "Payroll, attendance, employee self-service, onboarding, deployment tracking, and workforce operations for distributed teams.",
    icon: UsersRound,
  },
  {
    index: "02",
    title: "Manufacturing & Industrial",
    description:
      "Production workflows, inventory visibility, maintenance tracking, quality processes, reporting, and AI-powered inspection for industrial operations.",
    icon: Factory,
  },
  {
    index: "03",
    title: "Security & Surveillance",
    description:
      "Camera intelligence, incident management, guard operations, monitoring dashboards, alerts, and operational visibility for security teams.",
    icon: ShieldCheck,
  },
  {
    index: "04",
    title: "Trading & Distribution",
    description:
      "Order management, inventory workflows, supplier coordination, delivery tracking, approvals, and business reporting.",
    icon: Truck,
  },
  {
    index: "05",
    title: "Healthcare",
    description:
      "Patient workflows, appointment operations, staff scheduling, document processing, internal requests, and reporting systems.",
    icon: HeartPulse,
  },
  {
    index: "06",
    title: "Marketing Agencies",
    description:
      "Lead routing, campaign workflows, client reporting, CRM automation, content operations, and performance dashboards.",
    icon: Megaphone,
  },
  {
    index: "07",
    title: "Facility Management",
    description:
      "Work orders, field staff coordination, attendance, asset checks, service workflows, and client reporting.",
    icon: Building2,
  },
  {
    index: "08",
    title: "Retail & Multi-branch",
    description:
      "Branch operations, staff scheduling, stock movement, sales reporting, approvals, and workflow standardization across locations.",
    icon: Store,
  },
];

const stats = [
  {
    metric: "300 minutes",
    label: "HR time recovered per day",
    description:
      "An employee self-service portal reduced repetitive HR queries and helped recover approximately 300 minutes of HR time every day.",
    icon: BarChart3,
  },
  {
    metric: "<10 seconds",
    label: "Payroll processing",
    description:
      "Payroll automation with ESS integration reduced a processing workflow to less than 10 seconds.",
    icon: Rocket,
  },
  {
    metric: "16–48 hours",
    label: "Estimated staff-hours recovered",
    description:
      "The same payroll workflow recovered an estimated 16–48 staff-hours per payroll cycle.",
    icon: LineChart,
  },
];

const whyOglas: IconItem[] = [
  {
    index: "01",
    title: "Business Before Technology",
    description:
      "We start with the way your business works rather than starting with a particular technology.",
    icon: Building2,
  },
  {
    index: "02",
    title: "Practical Over Complicated",
    description:
      "We focus on solutions that teams can actually use, maintain, and improve.",
    icon: Target,
  },
  {
    index: "03",
    title: "Built Around Your Workflows",
    description:
      "Your approvals, roles, processes, integrations, and business rules shape the system.",
    icon: Workflow,
  },
  {
    index: "04",
    title: "Long-Term Thinking",
    description:
      "We design systems that can evolve as your business, teams, and operational needs change.",
    icon: Rocket,
  },
];

const disciplines = [
  {
    title: "Builders",
    description:
      "Engineers who ship focused, maintainable systems in stages rather than oversized, over-complicated platforms.",
    icon: Rocket,
  },
  {
    title: "Problem-Solvers",
    description:
      "People who look for the real operational bottleneck first, then build technology that measurably removes it.",
    icon: BrainCircuit,
  },
  {
    title: "Domain Thinkers",
    description:
      "Team members who understand how businesses actually run, so software fits real workflows instead of forcing new ones.",
    icon: UsersRound,
  },
];

const faqs = [
  {
    question: "What is Oglas AI?",
    answer:
      "Oglas AI is a UAE-based custom software and practical AI company that builds business systems, automation solutions, and AI-powered applications around the way organizations actually work.",
  },
  {
    question: "What does Oglas AI do?",
    answer:
      "Oglas AI develops custom business software, ERP and payroll systems, workflow automation, employee self-service portals, computer vision solutions, AI document processing, AI assistants, dashboards, and other integrated business systems.",
  },
  {
    question: "Where is Oglas AI based?",
    answer:
      "Oglas AI is based in Dubai, United Arab Emirates. The company serves UAE businesses and is globally available for organizations that need custom software, automation, and practical AI solutions.",
  },
  {
    question: "What industries does Oglas AI work with?",
    answer:
      "Oglas AI works with businesses across manpower and staffing, manufacturing and industrial operations, security and surveillance, trading and distribution, healthcare, marketing, facility management, and retail.",
  },
  {
    question:
      "Does Oglas AI build custom software or provide off-the-shelf software?",
    answer:
      "Oglas AI focuses on custom software and integrated business solutions. Systems are designed around a company's workflows, users, business rules, data, approvals, and existing technology rather than forcing the business into a fixed software structure.",
  },
  {
    question: "What AI solutions does Oglas AI provide?",
    answer:
      "Oglas AI develops practical AI solutions including computer vision, intelligent document processing, AI dashboards and decision intelligence, AI assistants and chatbots, and AI-powered workflow automation.",
  },
  {
    question:
      "Can Oglas AI integrate with our existing ERP, CRM, or business systems?",
    answer:
      "Yes. Oglas AI can design integrations between new and existing systems so that information and workflows can move between ERP, CRM, HR, payroll, operational, and other business applications.",
  },
  {
    question: "How does Oglas AI approach a software development project?",
    answer:
      "Oglas AI follows a discovery-first approach: understanding the business and its workflows, designing the appropriate system, developing it in focused stages, and continuously improving the solution as business requirements evolve.",
  },
  {
    question: "When should a business consider custom software?",
    answer:
      "Custom software can make sense when existing tools cannot support important business processes, teams rely heavily on manual work or spreadsheets, systems do not integrate properly, or the business needs workflows and functionality that off-the-shelf software cannot provide.",
  },
  {
    question: "Does Oglas AI work with businesses outside the UAE?",
    answer:
      "Yes. Oglas AI is UAE-based and globally available, supporting businesses that need custom software, automation, and practical AI solutions across different markets.",
  },
];

function jsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${baseUrl}/company#aboutpage`,
  url: `${baseUrl}/company`,
  name: seo.title,
  description: seo.description,
  isPartOf: { "@id": `${baseUrl}/#website` },
  about: { "@id": `${baseUrl}/#organization` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Company",
        item: `${baseUrl}/company`,
      },
    ],
  },
};

export default function CompanyPage() {
  return (
    <>
      <FaqStructuredData faqs={faqs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(aboutPageSchema) }}
      />

      {/* SECTION 1 — Hero */}
      <section className="surface-grid border-b border-black/10 bg-pearl">
        <div className="mx-auto w-full max-w-[1160px] px-4 py-16 lg:py-24">
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex h-9 items-center rounded-md border border-black/10 bg-white/75 px-3 text-xs font-semibold uppercase tracking-wide text-champagne">
              About Oglas AI
            </span>
            <span className="inline-flex h-9 items-center gap-2 rounded-md border border-black/10 bg-white/75 px-3 text-xs font-semibold uppercase tracking-wide text-steel">
              <Globe2 className="h-4 w-4 text-emerald" />
              UAE-based · Globally available
            </span>
          </div>
          <h1 className="mt-8 max-w-4xl text-4xl font-semibold leading-[1.05] text-onyx md:text-6xl">
            Technology Built Around How Businesses Actually Work
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-steel">
            Oglas AI is a UAE-based custom software and practical AI company
            helping businesses replace disconnected tools, repetitive processes,
            and manual work with software designed around the way they operate.
          </p>
          <p className="mt-5 max-w-3xl text-base leading-8 text-steel">
            From ERP and payroll systems to workflow automation, computer vision,
            intelligent document processing, and AI-powered business applications,
            we build technology around real operational needs.
          </p>
          <div className="mt-9">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-onyx px-6 text-sm font-semibold text-white transition hover:bg-emerald"
            >
              Talk to Oglas AI
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Who We Are */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <SectionHeading
            eyebrow="Who We Are"
            title="Software Should Fit the Business — Not the Other Way Around"
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="grid gap-5">
              <p className="text-base leading-8 text-steel">
                Every business has its own processes, approval structures, people,
                data, and operational challenges. Yet many companies are expected
                to adapt those workflows around software that was never designed
                for them.
              </p>
              <p className="text-base leading-8 text-steel">
                Oglas AI takes a different approach. We understand how a business
                works first, then design and build the technology around it.
              </p>
            </div>
            <p className="text-base leading-8 text-steel">
              Our work sits at the intersection of custom software development,
              business automation, and practical AI — helping organizations
              improve everyday operations without adding unnecessary technological
              complexity.
            </p>
          </div>
          <p className="mt-10 rounded-lg border border-emerald/20 bg-emerald/5 px-6 py-5 text-lg font-semibold leading-8 text-emerald">
            Understand the business. Build around it. Improve it continuously.
          </p>
        </div>
      </section>

      {/* SECTION 3 — What We Do */}
      <section className="bg-pearl py-20">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <SectionHeading
            eyebrow="What We Do"
            title="From Business Problems to Working Systems"
            summary="We build software for businesses that have outgrown spreadsheets, disconnected applications, repetitive manual processes, or off-the-shelf tools that don't quite fit."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {whatWeDo.map((item) => (
              <article
                key={item.title}
                className="flex flex-col gap-5 rounded-lg border border-black/10 bg-white p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-md bg-onyx text-champagne">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold text-champagne">
                    {item.index}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-onyx">{item.title}</h3>
                <p className="text-sm leading-7 text-steel">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — Our Approach */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <SectionHeading
            eyebrow="Our Approach"
            title="Technology Should Solve a Business Problem First"
            summary="The best technology starts with a clear understanding of the problem it needs to solve. We focus on building practical systems that fit your business, create measurable value, and continue to evolve as your needs change."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {approach.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-5 rounded-lg border border-black/10 bg-pearl p-6"
              >
                <span className="grid h-11 w-11 place-items-center rounded-md bg-emerald/10 text-emerald">
                  <item.icon className="h-5 w-5" />
                </span>
                <p className="text-xs font-semibold uppercase tracking-wide text-champagne">
                  {item.index}
                </p>
                <h3 className="text-lg font-semibold text-onyx">{item.title}</h3>
                <p className="text-sm leading-7 text-steel">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — How We Work */}
      <section className="bg-pearl py-20">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <SectionHeading
            eyebrow="How We Work"
            title="From Discovery to Long-Term Improvement"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {howWeWork.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-5 rounded-lg border border-black/10 bg-white p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-md bg-onyx text-champagne">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold text-champagne">
                    {item.index}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-onyx">{item.title}</h3>
                <p className="text-sm leading-7 text-steel">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — Where We're Based */}
      <section className="bg-white py-20">
        <div className="mx-auto grid w-full max-w-[1160px] px-4 gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-lg border border-black/10 bg-onyx p-7 text-white">
            <MapPin className="h-7 w-7 text-champagne" />
            <h2 className="mt-6 text-2xl font-semibold">Dubai, United Arab Emirates</h2>
            <p className="mt-5 text-sm leading-7 text-white/70">
              UAE-based · Globally available
            </p>
          </div>
          <div>
            <SectionHeading
              eyebrow="Where We're Based"
              title="UAE-Based. Built for Global Business"
            />
            <p className="mt-6 text-base leading-8 text-steel">
              Oglas AI is based in Dubai, United Arab Emirates, serving businesses
              that need custom software, automation, and practical AI solutions.
            </p>
            <p className="mt-5 text-base leading-8 text-steel">
              Our UAE base gives us a strong understanding of the region&apos;s
              business environment while our approach and technology are designed
              to support companies operating across markets.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7 — Who We Work With */}
      <section className="bg-pearl py-20">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <SectionHeading
            eyebrow="Who We Work With"
            title="Software Built for Businesses With Real Operational Complexity"
            summary="We work with businesses where people, processes, data, and systems need to work together. Our solutions are designed around the operational requirements of each industry, rather than forcing teams into generic workflows."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {whoWeWorkWith.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-4 rounded-lg border border-black/10 bg-white p-5"
              >
                <item.icon className="h-6 w-6 text-emerald" />
                <h3 className="text-base font-semibold text-onyx">{item.title}</h3>
                <p className="text-sm leading-7 text-steel">{item.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-base font-semibold text-emerald">
            Different industries. Different workflows. One business-first approach.
          </p>
        </div>
      </section>

      {/* SECTION 8 — Experience in Practice */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <SectionHeading
            eyebrow="Experience in Practice"
            title="We Measure Software by What It Changes"
            summary="Good software isn't measured by how impressive it looks. It is measured by what happens after people start using it. Our projects focus on practical outcomes such as reducing manual work, shortening processing time, improving operational visibility, connecting disconnected workflows, and giving teams better access to information."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.metric}
                className="flex flex-col gap-4 rounded-lg border border-black/10 bg-pearl p-7"
              >
                <stat.icon className="h-6 w-6 text-emerald" />
                <p className="text-3xl font-semibold text-onyx">{stat.metric}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-champagne">
                  {stat.label}
                </p>
                <p className="text-sm leading-7 text-steel">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 — Why Oglas AI */}
      <section className="bg-pearl py-20">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <SectionHeading
            eyebrow="Why Oglas AI"
            title="A Business-First Approach to Technology"
            summary="We believe technology should support the way your business works, not force your team to work around it. That means understanding your processes first, then building practical systems that create value today and can evolve with your business."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {whyOglas.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-5 rounded-lg border border-black/10 bg-white p-6"
              >
                <span className="grid h-11 w-11 place-items-center rounded-md bg-onyx text-champagne">
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-onyx">{item.title}</h3>
                <p className="text-sm leading-7 text-steel">{item.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-base font-semibold text-emerald">
            Business-first thinking. Practical solutions. Long-term partnership.
          </p>
        </div>
      </section>

      {/* SECTION 10 — The People Behind Oglas AI */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <SectionHeading
            eyebrow="The People Behind Oglas AI"
            title="Built by People Who Understand Business and Technology"
            summary="We are a team of builders, problem-solvers, and domain thinkers. We combine business understanding with deep technical expertise to build software that creates real impact."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {disciplines.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-5 rounded-lg border border-black/10 bg-pearl p-6"
              >
                <span className="grid h-11 w-11 place-items-center rounded-md bg-emerald/10 text-emerald">
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-onyx">{item.title}</h3>
                <p className="text-sm leading-7 text-steel">{item.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-base font-semibold text-emerald">
            Different backgrounds. Shared mindset. One goal: building practical
            software that drives real business outcomes.
          </p>
        </div>
      </section>

      {/* SECTION 11 — FAQ */}
      <section className="bg-pearl py-20">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Questions Businesses Ask About Oglas AI"
            summary="Answers to common questions about Oglas AI, our custom software development approach, practical AI solutions, and the businesses we work with."
          />
          <div className="mt-12 grid gap-4">
            {faqs.map((faq, index) => (
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

      {/* SECTION 12 — CTA */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <div className="flex flex-col gap-8 rounded-lg border border-black/10 bg-onyx px-8 py-12 text-white md:px-12">
            <p className="text-xs font-semibold uppercase tracking-wide text-champagne">
              Start With the Business Problem
            </p>
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
              Tell Us What You Want to Improve
            </h2>
            <p className="max-w-3xl text-lg leading-8 text-white/80">
              Whether you&apos;re replacing manual processes, connecting
              disconnected systems, exploring AI, or building a new business
              application, we&apos;ll start by understanding how your business
              works.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-white px-6 text-sm font-semibold text-onyx transition hover:bg-champagne"
              >
                Book a Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex h-12 items-center justify-center rounded-md border border-white/25 px-6 text-sm font-semibold text-white transition hover:border-champagne hover:text-champagne"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-steel">
            {company.name} · {company.location}
          </p>
        </div>
      </section>
    </>
  );
}
