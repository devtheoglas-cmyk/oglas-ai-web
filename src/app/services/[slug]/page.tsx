import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  CircuitBoard,
  Megaphone,
  Network,
  Rocket,
  ShieldCheck,
  Target,
  UsersRound,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import { services } from "@/content/site";
import { serviceSeo } from "@/content/seo";
import { FaqStructuredData } from "@/components/structured-data";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

const workflowFaqs = [
  {
    question: "What is custom workflow automation?",
    answer:
      "Custom workflow automation is the process of designing software workflows around a company's specific processes, approval rules, systems, and business requirements. It can automate repetitive tasks such as approvals, notifications, document routing, data movement, and internal requests, helping teams reduce manual work and keep processes moving.",
  },
  {
    question: "What business processes can be automated?",
    answer:
      "Most repeatable, rule-based business processes can be automated. Common examples include HR requests, employee onboarding, invoice approvals, expense processing, lead assignment, CRM updates, document workflows, task management, reporting, notifications, and operational approvals.",
  },
  {
    question:
      "Can workflow automation integrate with our existing ERP, CRM, or HR systems?",
    answer:
      "Yes. Custom workflow automation can integrate with existing business systems such as ERP, CRM, HR software, databases, and APIs. This allows businesses to automate processes across their current technology environment without necessarily replacing the systems their teams already use.",
  },
  {
    question:
      "Can custom workflows handle complex approval rules and exceptions?",
    answer:
      "Yes. Custom workflows can be designed to handle multiple approval levels, user roles, conditions, escalations, exceptions, and different business rules. This makes them suitable for processes that go beyond simple trigger-and-action automation.",
  },
  {
    question: "How does Oglas AI develop a workflow automation solution?",
    answer:
      "Oglas AI starts by understanding how your business currently operates, then designs the workflow around your processes and business rules. The solution can then be integrated with your existing systems, tested with your team, deployed into your environment, and refined based on real-world usage.",
  },
];

const workflowCapabilities = [
  {
    title: "Approval Workflows",
    description:
      "Route requests to the right people, apply your business rules, and trigger the next step as soon as an approval is completed.",
  },
  {
    title: "Document Routing",
    description:
      "Automatically route documents between teams, departments, and approval stages based on document type, status, or business rules.",
  },
  {
    title: "Notifications & Alerts",
    description:
      "Trigger emails, alerts, and reminders when an action is required, a deadline is approaching, or a workflow changes status.",
  },
  {
    title: "Task Assignment",
    description:
      "Automatically create and assign tasks to the right team or employee based on your workflow rules, responsibilities, and conditions.",
  },
  {
    title: "Repetitive Process Automation",
    description:
      "Automate recurring business processes that depend on manual data entry, follow-ups, status updates, or movement between multiple systems.",
  },
];

const workflowTeams = [
  {
    number: "01",
    title: "HR",
    subtitle: "Automate everyday employee processes",
    description:
      "Streamline leave requests, employee onboarding, document collection, approvals, attendance workflows, and internal HR requests.",
    icon: UsersRound,
  },
  {
    number: "02",
    title: "Finance",
    subtitle: "Keep financial processes moving",
    description:
      "Automate invoice approvals, expense requests, payment workflows, document verification, and finance-related notifications.",
    icon: BarChart3,
  },
  {
    number: "03",
    title: "Operations",
    subtitle: "Connect tasks across your operations",
    description:
      "Coordinate requests, approvals, task assignments, status updates, and operational processes across teams and locations.",
    icon: CircuitBoard,
  },
  {
    number: "04",
    title: "Sales & Marketing",
    subtitle: "Turn leads and campaigns into structured workflows",
    description:
      "Automate lead assignment, follow-ups, CRM updates, campaign processes, approvals, and notifications so opportunities don't get stuck between teams.",
    icon: Megaphone,
  },
  {
    number: "05",
    title: "Management",
    subtitle: "Give decision-makers better control",
    description:
      "Automate reporting workflows, approval chains, alerts, escalations, and management requests so important actions reach the right people at the right time.",
    icon: Target,
  },
];

const workflowSteps = [
  {
    number: "01",
    title: "Understand",
    subtitle: "Start with how your business actually works",
    description:
      "We map your existing processes, identify repetitive work, understand approval rules, and determine where automation can create the most value.",
  },
  {
    number: "02",
    title: "Design",
    subtitle: "Build workflows around your business rules",
    description:
      "We design the workflow logic, user roles, approvals, conditions, notifications, and exception handling around your specific requirements.",
  },
  {
    number: "03",
    title: "Integrate",
    subtitle: "Connect the systems your teams already use",
    description:
      "We integrate the workflow with your existing business software, databases, CRM, ERP, HR systems, APIs, and other tools where required.",
  },
  {
    number: "04",
    title: "Deploy",
    subtitle: "Put the workflow into operation",
    description:
      "We test the automation, validate the workflow with your team, deploy it into your environment, and refine it based on real-world usage.",
  },
];

const workflowBenefits = [
  {
    number: "01",
    title: "Built Around Your Processes",
    subtitle: "Automate the way your business actually works",
    description:
      "Your workflows can follow your existing processes, approval structures, roles, and business rules instead of forcing your team to adapt to a rigid automation platform.",
    icon: Workflow,
  },
  {
    number: "02",
    title: "Works With Your Existing Systems",
    subtitle: "Connect the tools you already depend on",
    description:
      "Custom workflows can work alongside your ERP, CRM, HR software, databases, APIs, and other business systems without requiring you to replace everything.",
    icon: Network,
  },
  {
    number: "03",
    title: "Handle Complex Business Rules",
    subtitle: "Go beyond simple trigger-and-action automation",
    description:
      "Manage multiple approval levels, conditions, exceptions, escalations, dependencies, and role-based actions that standard automation tools may not handle well.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Scale With Your Business",
    subtitle: "Expand automation as your operations grow",
    description:
      "Start with the processes that create the most manual work and gradually extend automation across teams, departments, locations, and new business requirements.",
    icon: Rocket,
  },
  {
    number: "05",
    title: "More Control Over Your Workflow",
    subtitle: "Keep your processes aligned with your business",
    description:
      "With custom workflow automation, you have greater control over how tasks move, who approves them, what happens when something changes, and how information flows between systems.",
    icon: CheckCircle2,
  },
];

const baseUrl = "https://www.oglasai.com";

function BreadcrumbStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${baseUrl}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${baseUrl}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Workflow Automation Services",
        item: `${baseUrl}/services/workflow-automation`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

function WorkflowAutomationStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${baseUrl}/services/workflow-automation#service`,
    name: "Workflow Automation Services",
    serviceType: "Workflow Automation",
    description:
      "Oglas AI builds workflow automation solutions for approvals, operations, HR, finance, CRM, and business systems, built in Dubai for global businesses.",
    provider: {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: "Oglas AI",
      url: baseUrl,
    },
    areaServed: [
      "Dubai, United Arab Emirates",
      "United Arab Emirates",
      "Global",
    ],
    url: `${baseUrl}/services/workflow-automation`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

function WorkflowAutomationPage() {
  return (
    <>
      <BreadcrumbStructuredData />
      <WorkflowAutomationStructuredData />
      <FaqStructuredData faqs={workflowFaqs} />

      <section className="surface-grid bg-pearl py-20 md:py-28">
        <div className="mx-auto grid w-full max-w-[1160px] gap-10 px-4 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-champagne">
              Built in Dubai. Designed for businesses globally
            </p>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.05] text-onyx md:text-6xl">
              Workflow Automation Services
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-steel">
              Automate approvals, document routing, notifications, and repetitive
              tasks with workflows built around the way your business actually
              operates.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-onyx px-6 text-sm font-semibold text-white transition hover:bg-champagne hover:text-onyx"
            >
              Automate Your Workflow
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
            <div className="rounded-xl bg-onyx p-5 text-white">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
                    Oglas AI
                  </p>
                  <p className="mt-1 text-lg font-semibold">Workflow orchestration</p>
                </div>
                <Workflow className="h-8 w-8 text-emerald-light" />
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {["Approval", "Document", "Notification", "Task", "Escalation", "Reporting"].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80"
                    >
                      {item} automation
                    </div>
                  ),
                )}
              </div>
              <div className="mt-5 rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-white/60">
                Your process. Your rules. Automated.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald">
            What We Automate
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-onyx md:text-5xl">
            Automate the Work That Slows Your Business Down
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-steel md:text-lg">
            Oglas AI builds workflow automation systems around the way your business
            operates. We connect people, processes, documents, and business systems to
            reduce repetitive manual work and keep tasks moving without constant
            follow-ups.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {workflowCapabilities.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-black/10 bg-pearl p-6"
              >
                <CheckCircle2 className="h-6 w-6 text-emerald" />
                <h3 className="mt-5 text-lg font-semibold text-onyx">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-steel">{item.description}</p>
              </article>
            ))}
          </div>

          <p className="mt-10 text-center text-base font-semibold text-onyx">
            Your process. Your rules. Automated.
          </p>
        </div>
      </section>

      <section className="bg-pearl py-20 md:py-24">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald">
            Workflow Automation Across Your Business
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-onyx md:text-5xl">
            Workflow Automation Across Your Business
          </h2>
          <p className="mt-5 max-w-4xl text-base leading-8 text-steel md:text-lg">
            Different teams have different processes, but the goal is the same: keep
            work moving without relying on repetitive manual follow-ups. Oglas AI can
            automate workflows across departments while adapting the system to your
            existing processes and business rules.
          </p>

          <div className="mt-12 grid gap-5 lg:grid-cols-5">
            {workflowTeams.map((team) => {
              const Icon = team.icon;
              return (
                <article
                  key={team.number}
                  className="rounded-xl border border-black/10 bg-white p-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-[0.16em] text-champagne">
                      {team.number}
                    </span>
                    <Icon className="h-6 w-6 text-emerald" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-onyx">{team.title}</h3>
                  <p className="mt-3 text-sm font-semibold leading-6 text-onyx">
                    {team.subtitle}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-steel">{team.description}</p>
                </article>
              );
            })}
          </div>

          <p className="mt-10 text-base font-semibold text-onyx">
            From everyday requests to business-critical processes, automate the work
            that keeps your teams moving.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald">
            How Oglas AI Builds It
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-onyx md:text-5xl">
            How Oglas AI Builds Workflow Automation
          </h2>
          <p className="mt-5 max-w-4xl text-base leading-8 text-steel md:text-lg">
            Every business works differently. Instead of forcing your processes into a
            fixed workflow, Oglas AI designs automation around your existing
            operations, systems, and business rules.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {workflowSteps.map((step) => (
              <article
                key={step.number}
                className="rounded-xl border border-black/10 bg-pearl p-6"
              >
                <span className="text-xs font-semibold tracking-[0.16em] text-champagne">
                  {step.number}
                </span>
                <h3 className="mt-5 text-2xl font-semibold text-onyx">{step.title}</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-onyx">
                  {step.subtitle}
                </p>
                <p className="mt-3 text-sm leading-7 text-steel">{step.description}</p>
              </article>
            ))}
          </div>

          <p className="mt-10 text-base font-semibold text-onyx">
            From process discovery to deployment, every workflow is designed around how
            your business operates.
          </p>
        </div>
      </section>

      <section className="bg-pearl py-20 md:py-24">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald">
            Why Custom Workflow Automation
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-onyx md:text-5xl">
            Why Choose Custom Workflow Automation?
          </h2>
          <p className="mt-5 max-w-4xl text-base leading-8 text-steel md:text-lg">
            Generic automation tools can work well for straightforward processes. But
            when workflows involve multiple teams, approval rules, existing business
            systems, or exceptions, a solution built around your operations can provide
            much greater control.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {workflowBenefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <article
                  key={benefit.number}
                  className="rounded-xl border border-black/10 bg-white p-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-[0.16em] text-champagne">
                      {benefit.number}
                    </span>
                    <Icon className="h-6 w-6 text-emerald" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold leading-7 text-onyx">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm font-semibold leading-6 text-onyx">
                    {benefit.subtitle}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-steel">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>

          <p className="mt-10 text-base font-semibold text-onyx">
            When your workflows are unique, your automation should be designed around
            your business—not the other way around.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto w-full max-w-[960px] px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald">
            Frequently Asked Questions
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-onyx md:text-5xl">
            Frequently Asked Questions
          </h2>

          <div className="mt-10 divide-y divide-black/10 rounded-xl border border-black/10">
            {workflowFaqs.map((faq) => (
              <details key={faq.question} className="group p-6">
                <summary className="cursor-pointer list-none pr-8 text-lg font-semibold text-onyx marker:hidden">
                  {faq.question}
                </summary>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-steel">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-onyx py-16 md:py-20">
        <div className="mx-auto flex w-full max-w-[1160px] flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-light">
              Oglas AI
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              Ready to automate the work slowing your team down?
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-white px-6 text-sm font-semibold text-onyx transition hover:bg-champagne"
          >
            Automate Your Workflow
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {};
  }

  const seo = serviceSeo[service.slug];

  return {
    title: {
      absolute: seo?.title || `${service.title} | Oglas AI`,
    },
    description: seo?.description || service.summary,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  if (slug === "workflow-automation") {
    return <WorkflowAutomationPage />;
  }

  return (
    <>
      <section className="surface-grid bg-pearl py-20">
        <div className="mx-auto grid w-full max-w-[1160px] gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
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
        <div className="mx-auto grid w-full max-w-[1160px] gap-10 px-4 lg:grid-cols-[0.8fr_1.2fr]">
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
              <h2 className="text-2xl font-semibold text-onyx">Expected outcomes</h2>
              <div className="mt-6 grid gap-3">
                {service.outcomes.map((outcome) => (
                  <div
                    key={outcome}
                    className="flex gap-3 rounded-md border border-black/10 bg-pearl p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald" />
                    <span className="text-sm leading-6 text-steel">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-onyx">Capabilities</h2>
              <div className="mt-6 grid gap-3">
                {service.capabilities.map((capability) => (
                  <div
                    key={capability}
                    className="rounded-md border border-black/10 bg-pearl p-4 text-sm font-semibold text-onyx"
                  >
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
