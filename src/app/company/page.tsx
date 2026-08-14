import type { Metadata } from "next";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Building2,
  CircuitBoard,
  Compass,
  Factory,
  FileScan,
  Globe2,
  Handshake,
  HeartPulse,
  LineChart,
  MapPin,
  Megaphone,
  Network,
  Quote,
  Rocket,
  ShieldCheck,
  Store,
  Target,
  Truck,
  UsersRound,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaqStructuredData } from "@/components/structured-data";
import { company } from "@/content/site";
import { staticPageSeo } from "@/content/seo";

export const revalidate = 60;

const seo = staticPageSeo["/company"];
const baseUrl = "https://www.oglasai.com";

export const metadata: Metadata = {
  title: { absolute: seo.title! },
  description: seo.description,
  alternates: { canonical: "/company" },
};

/* ---------- content ---------- */

type IconItem = {
  index: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const whatWeDo: (IconItem & { image: string })[] = [
  {
    index: "01",
    title: "Custom Business Software",
    description:
      "Applications and internal systems designed around your workflows, users, data, approvals, and operational requirements.",
    icon: CircuitBoard,
    image: "/images/company/wwd1.jpg",
  },
  {
    index: "02",
    title: "Business Automation",
    description:
      "Automated workflows that reduce repetitive work across payroll, approvals, documents, reporting, operations, and customer processes.",
    icon: Workflow,
    image: "/images/company/wwd2.jpg",
  },
  {
    index: "03",
    title: "Practical AI",
    description:
      "AI systems that solve specific business problems — from computer vision and document processing to dashboards, assistants, and decision intelligence.",
    icon: BrainCircuit,
    image: "/images/company/wwd3.jpg",
  },
  {
    index: "04",
    title: "Integrated Business Systems",
    description:
      "Connected systems that bring data and processes together across ERP, HR, payroll, CRM, operations, and other business applications.",
    icon: Network,
    image: "/images/company/wwd4.jpg",
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
    icon: BarChart3,
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
    icon: Compass,
  },
  {
    index: "02",
    title: "Design",
    description:
      "We translate those requirements into practical software architecture, user experiences, data flows, integrations, and automation opportunities.",
    icon: FileScan,
  },
  {
    index: "03",
    title: "Build",
    description:
      "We develop the system in focused stages, with regular reviews, testing, and feedback throughout the process.",
    icon: CircuitBoard,
  },
  {
    index: "04",
    title: "Improve",
    description:
      "Once the system is in use, we help refine workflows, expand functionality, integrate new requirements, and support the business as it grows.",
    icon: LineChart,
  },
];

const basedFeatures = [
  { title: "Strong Local Understanding", icon: BarChart3 },
  { title: "Built for Global Operations", icon: Globe2 },
  { title: "Reliable Partnership", icon: ShieldCheck },
  { title: "Long-Term Support", icon: Handshake },
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
    value: "300",
    unit: "Minutes",
    label: "HR time recovered per day",
    description:
      "An employee self-service portal reduced repetitive HR queries and helped recover approximately 300 minutes of HR time every day.",
    icon: LineChart,
  },
  {
    value: "<10",
    unit: "Seconds",
    label: "Payroll processing",
    description:
      "Payroll automation with ESS integration reduced a processing workflow to less than 10 seconds.",
    icon: Rocket,
  },
  {
    value: "16–48",
    unit: "Hours",
    label: "Estimated staff-hours recovered",
    description:
      "The same payroll workflow recovered an estimated 16–48 staff-hours per payroll cycle.",
    icon: UsersRound,
  },
];

const whyOglas: IconItem[] = [
  {
    index: "01",
    title: "Business Before Technology",
    description:
      "We start with the way your business works rather than starting with a particular technology.",
    icon: UsersRound,
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
    icon: Network,
  },
  {
    index: "04",
    title: "Long-Term Thinking",
    description:
      "We design systems that can evolve as your business, teams, and operational needs change.",
    icon: LineChart,
  },
];

const team = [
  {
    name: "Jithin Jose",
    role: "Founder / CEO",
    image: "/images/company/head1.jpg",
    bio: "10+ years in building custom software and automation solutions for businesses in the UAE and India. Leads strategy, client partnerships, and product direction.",
  },
  {
    name: "Alen Shaji",
    role: "Co-Founder / CTO",
    image: "/images/company/head2.jpg",
    bio: "9+ years of experience in enterprise software architecture, ERP systems, and workflow automation. Leads engineering, solutions architecture, and technology strategy.",
  },
  {
    name: "Albin Babu",
    role: "Head of Delivery",
    image: "/images/company/head3.jpg",
    bio: "8+ years in project delivery and operations across multiple industries. Ensures projects are delivered on time, with quality, and aligned to business goals.",
  },
  {
    name: "Sreerag Sreenivasan",
    role: "Lead – AI & Automation",
    image: "/images/company/head4.jpg",
    bio: "7+ years of experience in AI, computer vision, and process automation. Leads product development for intelligent automation and AI integrated solutions.",
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

/* ---------- JSON-LD (SEO / AEO / GEO) ---------- */

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

const teamSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${baseUrl}/#organization`,
  employee: team.map((member) => ({
    "@type": "Person",
    name: member.name,
    jobTitle: member.role,
    description: member.bio,
    worksFor: { "@id": `${baseUrl}/#organization` },
  })),
};

/* ---------- small building blocks ---------- */

function Eyebrow({ num, children }: { num: string; children: string }) {
  return (
    <div className="flex items-center gap-3">
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-champagne">
        {num} — {children}
      </p>
      <span className="h-px w-10 bg-champagne/50" aria-hidden="true" />
    </div>
  );
}

function IconBadge({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="grid h-14 w-14 place-items-center rounded-full bg-champagne/15 text-champagne">
      <Icon className="h-6 w-6" />
    </span>
  );
}

/* ---------- page ---------- */

export default function CompanyPage() {
  return (
    <>
      <FaqStructuredData faqs={faqs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(aboutPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(teamSchema) }}
      />

      {/* SECTION 1 — Hero */}
      <section className="surface-grid border-b border-black/10 bg-pearl">
        <div className="mx-auto grid w-full max-w-[1160px] gap-12 px-4 py-16 lg:grid-cols-[1fr_1fr] lg:items-center lg:py-24">
          <div>
            <Eyebrow num="01">ABOUT OGLAS AI</Eyebrow>
            <h1 className="mt-6 max-w-xl text-4xl font-semibold leading-[1.05] text-onyx md:text-6xl">
              Technology Built Around How Businesses Actually Work
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-steel">
              Oglas AI is a UAE-based custom software and practical AI company
              helping businesses replace disconnected tools, repetitive
              processes, and manual work with software designed around the way
              they operate.
            </p>
            <p className="mt-5 max-w-xl text-base leading-8 text-steel">
              From ERP and payroll systems to workflow automation, computer
              vision, intelligent document processing, and AI-powered business
              applications, we build technology around real operational needs.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-onyx px-6 text-sm font-semibold text-white transition hover:bg-emerald"
              >
                Talk to Oglas AI
                <ArrowRight className="h-4 w-4" />
              </Link>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-steel">
                <Globe2 className="h-4 w-4 text-champagne" />
                UAE-based · Globally available
              </span>
            </div>
          </div>
          <Image
            src="/images/company/hero.jpg"
            alt="Oglas AI office in Dubai showing custom software and practical AI service areas"
            width={850}
            height={920}
            priority
            className="h-auto w-full rounded-2xl border border-black/10 object-cover shadow-xl shadow-black/5"
          />
        </div>
      </section>

      {/* SECTION 2 — Who We Are */}
      <section className="bg-white py-20">
        <div className="mx-auto grid w-full max-w-[1160px] items-center gap-12 px-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Eyebrow num="02">WHO WE ARE</Eyebrow>
            <h2 className="mt-6 text-3xl font-semibold leading-tight text-onyx md:text-5xl">
              Software Should Fit the Business — Not the Other Way Around
            </h2>
            <div className="mt-7 grid gap-5">
              <p className="text-base leading-8 text-steel">
                Every business has its own processes, approval structures,
                people, data, and operational challenges. Yet many companies are
                expected to adapt those workflows around software that was never
                designed for them.
              </p>
              <p className="text-base leading-8 text-steel">
                Oglas AI takes a different approach. We understand how a business
                works first, then design and build the technology around it.
              </p>
              <p className="text-base leading-8 text-steel">
                Our work sits at the intersection of custom software development,
                business automation, and practical AI — helping organizations
                improve everyday operations without adding unnecessary
                technological complexity.
              </p>
            </div>
            <div className="mt-8 flex items-start gap-4 rounded-lg border-l-4 border-champagne bg-pearl px-6 py-5">
              <Quote className="mt-1 h-6 w-6 shrink-0 text-champagne" />
              <p className="text-lg font-semibold leading-8 text-onyx">
                Understand the business. Build around it. Improve it
                continuously.
              </p>
            </div>
          </div>
          <Image
            src="/images/company/who.jpg"
            alt="Oglas AI team mapping a business workflow before building software"
            width={844}
            height={960}
            className="h-auto w-full rounded-2xl border border-black/10 object-cover"
          />
        </div>
      </section>

      {/* SECTION 3 — What We Do */}
      <section className="bg-pearl py-20">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <Eyebrow num="03">WHAT WE DO</Eyebrow>
          <h2 className="mt-6 max-w-3xl text-3xl font-semibold leading-tight text-onyx md:text-5xl">
            From Business Problems to Working Systems
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-steel md:text-lg">
            We build software for businesses that have outgrown spreadsheets,
            disconnected applications, repetitive manual processes, or
            off-the-shelf tools that don&apos;t quite fit.
          </p>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {whatWeDo.map((item) => (
              <article
                key={item.title}
                className="flex flex-col overflow-hidden rounded-lg border border-black/10 bg-white"
              >
                <Image
                  src={item.image}
                  alt={`${item.title} interface`}
                  width={344}
                  height={232}
                  className="h-40 w-full border-b border-black/10 object-cover"
                />
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div className="flex items-center justify-between">
                    <IconBadge icon={item.icon} />
                    <span className="text-sm font-semibold text-champagne">
                      {item.index}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-onyx">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-7 text-steel">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — Our Approach */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <Eyebrow num="04">OUR APPROACH</Eyebrow>
              <h2 className="mt-6 text-3xl font-semibold leading-tight text-onyx md:text-5xl">
                Technology Should Solve a Business Problem First
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-steel md:text-lg">
                The best technology starts with a clear understanding of the
                problem it needs to solve. We focus on building practical systems
                that fit your business, create measurable value, and continue to
                evolve as your needs change.
              </p>
            </div>
            <Image
              src="/images/company/approach.jpg"
              alt="Oglas AI team reviewing workflow designs and dashboards"
              width={710}
              height={440}
              className="h-auto w-full rounded-2xl border border-black/10 object-cover"
            />
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {approach.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-5 rounded-lg border border-black/10 bg-pearl p-6"
              >
                <div className="flex items-center gap-3">
                  <IconBadge icon={item.icon} />
                  <span className="text-lg font-semibold text-champagne">
                    {item.index}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-onyx">
                    {item.title}
                  </h3>
                  <span className="mt-2 block h-0.5 w-8 bg-champagne" />
                </div>
                <p className="text-sm leading-7 text-steel">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — How We Work */}
      <section className="bg-pearl py-20">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <Eyebrow num="05">HOW WE WORK</Eyebrow>
          <h2 className="mt-6 max-w-3xl text-3xl font-semibold leading-tight text-onyx md:text-5xl">
            From Discovery to Long-Term Improvement
          </h2>
          <div className="mt-12 grid gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {howWeWork.map((item, i) => (
              <div key={item.title} className="relative">
                <div className="flex h-full flex-col gap-5 rounded-lg border border-black/10 bg-white p-6">
                  <span className="text-lg font-semibold text-champagne">
                    {item.index}
                  </span>
                  <IconBadge icon={item.icon} />
                  <div>
                    <h3 className="text-lg font-semibold text-onyx">
                      {item.title}
                    </h3>
                    <span className="mt-2 block h-0.5 w-8 bg-champagne" />
                  </div>
                  <p className="text-sm leading-7 text-steel">
                    {item.description}
                  </p>
                </div>
                {i < howWeWork.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 place-items-center rounded-full bg-champagne text-white lg:grid"
                  >
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — Where We're Based */}
      <section className="bg-white py-20">
        <div className="mx-auto grid w-full max-w-[1160px] items-center gap-12 px-4 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <Eyebrow num="06">WHERE WE&apos;RE BASED</Eyebrow>
            <h2 className="mt-6 text-3xl font-semibold leading-tight text-onyx md:text-5xl">
              UAE-Based. Built for Global Business
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-steel">
              Oglas AI is based in{" "}
              <strong className="font-semibold text-onyx">
                Dubai, United Arab Emirates
              </strong>
              , serving businesses that need custom software, automation, and
              practical AI solutions.
            </p>
            <p className="mt-5 max-w-xl text-base leading-8 text-steel">
              Our UAE base gives us a strong understanding of the region&apos;s
              business environment while our approach and technology are designed
              to support companies operating across markets.
            </p>
            <div className="mt-8 flex items-center gap-4 rounded-lg bg-pearl px-6 py-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-champagne text-white">
                <MapPin className="h-6 w-6" />
              </span>
              <p className="text-xl font-semibold leading-7 text-onyx">
                Dubai, United Arab Emirates
              </p>
            </div>
            <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-champagne/40 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-steel">
              <Globe2 className="h-4 w-4 text-champagne" />
              UAE-based · Globally available
            </span>
          </div>
          <div className="overflow-hidden rounded-2xl border border-black/10">
            <Image
              src="/images/company/based.jpg"
              alt="Dubai skyline with the Burj Khalifa representing Oglas AI's UAE base and global reach"
              width={750}
              height={938}
              className="h-auto w-full object-cover"
            />
            <div className="grid grid-cols-2 gap-4 bg-onyx p-6 sm:grid-cols-4">
              {basedFeatures.map((f) => (
                <div key={f.title} className="flex flex-col items-center gap-2 text-center">
                  <f.icon className="h-5 w-5 text-champagne" />
                  <span className="text-xs font-medium leading-5 text-white/80">
                    {f.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — Who We Work With */}
      <section className="bg-pearl py-20">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <div className="grid items-start gap-8 lg:grid-cols-[1.4fr_0.6fr]">
            <div>
              <Eyebrow num="07">WHO WE WORK WITH</Eyebrow>
              <h2 className="mt-6 max-w-2xl text-3xl font-semibold leading-tight text-onyx md:text-5xl">
                Software Built for Businesses With Real Operational Complexity
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-steel">
                We work with businesses where people, processes, data, and
                systems need to work together. Our solutions are designed around
                the operational requirements of each industry, rather than
                forcing teams into generic workflows.
              </p>
            </div>
            <Image
              src="/images/company/based.jpg"
              alt="Dubai business district served by Oglas AI"
              width={750}
              height={420}
              className="hidden h-44 w-full rounded-2xl border border-black/10 object-cover lg:block"
            />
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {whoWeWorkWith.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-4 rounded-lg border border-black/10 bg-white p-6"
              >
                <div className="flex items-center gap-3">
                  <IconBadge icon={item.icon} />
                  <span className="text-lg font-semibold text-champagne">
                    {item.index}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-onyx">
                  {item.title}
                </h3>
                <p className="text-sm leading-7 text-steel">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex items-center gap-4 rounded-lg border border-black/10 bg-white px-6 py-5">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-champagne/15 text-champagne">
              <UsersRound className="h-5 w-5" />
            </span>
            <p className="text-base font-semibold text-onyx">
              Different industries. Different workflows.{" "}
              <span className="text-champagne">One business-first approach.</span>
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 8 — Experience in Practice */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <Eyebrow num="08">EXPERIENCE IN PRACTICE</Eyebrow>
              <h2 className="mt-6 text-3xl font-semibold leading-tight text-onyx md:text-5xl">
                We Measure Software by What It Changes
              </h2>
              <p className="mt-7 max-w-xl text-base leading-8 text-steel">
                Good software isn&apos;t measured by how impressive it looks. It
                is measured by what happens after people start using it.
              </p>
              <p className="mt-5 max-w-xl text-base leading-8 text-steel">
                Our projects focus on practical outcomes such as reducing manual
                work, shortening processing time, improving operational
                visibility, connecting disconnected workflows, and giving teams
                better access to information.
              </p>
            </div>
            <Image
              src="/images/company/experience.jpg"
              alt="HR and payroll dashboard built by Oglas AI"
              width={780}
              height={458}
              className="h-auto w-full rounded-2xl border border-black/10 object-cover"
            />
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-4 rounded-lg border border-black/10 bg-pearl p-7"
              >
                <div className="flex items-center gap-4">
                  <IconBadge icon={stat.icon} />
                  <p className="text-4xl font-semibold text-champagne">
                    {stat.value}
                    <span className="ml-2 text-base font-semibold uppercase tracking-wide">
                      {stat.unit}
                    </span>
                  </p>
                </div>
                <h3 className="text-lg font-semibold text-onyx">{stat.label}</h3>
                <p className="text-sm leading-7 text-steel">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 — Why Oglas AI */}
      <section className="bg-pearl py-20">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <Eyebrow num="09">WHY OGLAS AI</Eyebrow>
              <h2 className="mt-6 text-3xl font-semibold leading-tight text-onyx md:text-5xl">
                A Business-First Approach to Technology
              </h2>
              <p className="mt-7 max-w-xl text-base leading-8 text-steel">
                We believe technology should support the way your business works,
                not force your team to work around it. That means understanding
                your processes first, then building practical systems that create
                value today and can evolve with your business.
              </p>
            </div>
            <Image
              src="/images/company/why.jpg"
              alt="Workflow automation dashboard showing processes automated by Oglas AI"
              width={724}
              height={460}
              className="h-auto w-full rounded-2xl border border-black/10 object-cover"
            />
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {whyOglas.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-5 rounded-lg border border-black/10 bg-white p-6"
              >
                <IconBadge icon={item.icon} />
                <div>
                  <h3 className="text-lg font-semibold text-onyx">
                    {item.title}
                  </h3>
                  <span className="mt-2 block h-0.5 w-8 bg-champagne" />
                </div>
                <p className="text-sm leading-7 text-steel">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-start gap-3 rounded-lg border border-black/10 bg-white px-6 py-5 sm:flex-row sm:items-center">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-onyx text-champagne">
              <Rocket className="h-5 w-5" />
            </span>
            <p className="text-base font-semibold text-onyx">
              Business-first thinking. Practical solutions. Long-term
              partnership.{" "}
              <span className="text-champagne">
                That&apos;s the Oglas AI approach.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 10 — The People Behind Oglas AI */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <Eyebrow num="10">THE PEOPLE BEHIND OGLAS AI</Eyebrow>
              <h2 className="mt-6 text-3xl font-semibold leading-tight text-onyx md:text-5xl">
                Built by People Who Understand Business and Technology
              </h2>
              <p className="mt-7 max-w-xl text-base leading-8 text-steel">
                We are a team of builders, problem-solvers, and domain thinkers.
                We combine business understanding with deep technical expertise
                to build software that creates real impact.
              </p>
            </div>
            <Image
              src="/images/company/team.jpg"
              alt="The Oglas AI team collaborating in their Dubai office"
              width={788}
              height={404}
              className="h-auto w-full rounded-2xl border border-black/10 object-cover"
            />
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="flex flex-col gap-4 rounded-lg border border-black/10 bg-pearl p-6"
              >
                <div className="flex items-start justify-between">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role} at Oglas AI`}
                    width={168}
                    height={168}
                    className="h-20 w-20 rounded-full border border-black/10 object-cover"
                  />
                  <span
                    aria-hidden="true"
                    className="grid h-7 w-7 place-items-center rounded-md border border-champagne/40 text-xs font-bold text-champagne"
                  >
                    in
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-onyx">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-champagne">
                    {member.role}
                  </p>
                </div>
                <p className="text-sm leading-7 text-steel">{member.bio}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-start gap-3 rounded-lg bg-pearl px-6 py-5 sm:flex-row sm:items-center">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-champagne/15 text-champagne">
              <UsersRound className="h-5 w-5" />
            </span>
            <p className="text-base font-semibold text-onyx">
              Different backgrounds. Shared mindset. One goal:{" "}
              <span className="text-champagne">
                building practical software that drives real business outcomes.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 11 — FAQ */}
      <section className="bg-pearl py-20">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <Eyebrow num="11">FREQUENTLY ASKED QUESTIONS</Eyebrow>
          <h2 className="mt-6 max-w-3xl text-3xl font-semibold leading-tight text-onyx md:text-5xl">
            Questions Businesses Ask About Oglas AI
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-steel md:text-lg">
            Answers to common questions about Oglas AI, our custom software
            development approach, practical AI solutions, and the businesses we
            work with.
          </p>
          <div className="mt-12 grid gap-4">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-lg border border-black/10 bg-white p-6 open:border-champagne/50"
                open={index === 0}
              >
                <summary className="flex cursor-pointer items-start justify-between gap-6 text-base font-semibold text-onyx marker:hidden">
                  {faq.question}
                  <span
                    aria-hidden="true"
                    className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-md border border-black/10 bg-pearl text-champagne transition group-open:rotate-45"
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

      {/* SECTION 12 — Final CTA */}
      <section className="bg-white py-20">
        <div className="mx-auto grid w-full max-w-[1160px] items-center gap-12 px-4 lg:grid-cols-[1fr_1fr]">
          <div>
            <Eyebrow num="12">FINAL CTA</Eyebrow>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.15em] text-champagne">
              Start With the Business Problem
            </p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight text-onyx md:text-6xl">
              Tell Us What You Want to Improve
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-steel">
              Whether you&apos;re replacing manual processes, connecting
              disconnected systems, exploring AI, or building a new business
              application, we&apos;ll start by understanding how your business
              works.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-champagne px-6 text-sm font-semibold text-onyx transition hover:bg-onyx hover:text-white"
              >
                Book a Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-champagne px-6 text-sm font-semibold text-champagne transition hover:bg-champagne hover:text-onyx"
              >
                Explore Our Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <Image
            src="/images/company/cta.jpg"
            alt="Oglas AI workspace in Dubai with a laptop and branded notebook"
            width={700}
            height={818}
            className="h-auto w-full rounded-2xl border border-black/10 object-cover"
          />
        </div>
        <p className="mx-auto mt-8 w-full max-w-[1160px] px-4 text-sm text-steel">
          {company.name} · {company.location}
        </p>
      </section>
    </>
  );
}
