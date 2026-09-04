import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  BarChart3,
  Bell,
  Boxes,
  Brain,
  Building2,
  CheckCircle2,
  CircuitBoard,
  ClipboardCheck,
  Database,
  Eye,
  Factory,
  FileSpreadsheet,
  Gauge,
  LineChart,
  ListChecks,
  Lock,
  Megaphone,
  MessageSquare,
  Network,
  Radar,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
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

const aiDashboardsFaqs = [
  {
    question: "What are AI dashboards?",
    answer:
      "AI dashboards are business intelligence dashboards that combine business data with AI-assisted analysis to help teams understand performance and make better decisions. Unlike basic reporting dashboards that primarily display historical metrics, AI dashboards can identify patterns, highlight unusual changes, support forecasting and summarise important movements in business data. Oglas AI builds custom AI dashboards around the KPIs, systems and decisions that matter to each business.",
  },
  {
    question:
      "What is the difference between traditional dashboards and AI-powered dashboards?",
    answer:
      "Traditional dashboards primarily show business metrics and historical performance. AI-powered dashboards can go further by analysing those metrics, identifying patterns and anomalies, supporting forecasts and providing written explanations of important changes. Traditional reporting generally requires users to monitor dashboards and interpret the information themselves. AI-powered dashboards can also surface important changes through alerts and, where supported, connect insights to follow-up workflows.",
  },
  {
    question:
      "Can Oglas AI connect dashboards to our existing business systems?",
    answer:
      "Yes. Oglas AI can connect dashboards to supported ERP, CRM, finance, HR, sales, production and operational systems. Depending on the environment, integrations can include platforms such as Odoo, SAP, Microsoft Dynamics, Zoho, Salesforce, HubSpot, QuickBooks, Tally, Shopify, Google Sheets and supported SQL databases or APIs. The exact integration approach depends on the systems, data structure, API or database access and project requirements.",
  },
  {
    question: "How long does it take to build an AI dashboard?",
    answer:
      "The timeline depends on the number of systems, KPIs, integrations, entities and level of intelligence required. A focused single-department dashboard may require less implementation time than a multi-system executive intelligence layer. Oglas AI begins with decision mapping and a data assessment because unclear KPIs and data issues can affect the delivery timeline.",
  },
  {
    question: "What does an AI dashboard project cost?",
    answer:
      "AI dashboard projects are scoped around the systems, KPIs, integrations and requirements involved rather than sold as a single fixed package. Data readiness audits and single-department dashboards can be offered as fixed-scope engagements, while larger executive intelligence projects are priced according to their specific requirements. Oglas AI provides a fixed project quote after the initial consultation and assessment.",
  },
  {
    question: "What if our data is messy or incomplete?",
    answer:
      "Messy or incomplete data is a common starting point and does not automatically prevent an AI dashboard project. Oglas AI can begin with a data readiness assessment to determine what data is usable, what needs cleaning, which KPIs can be measured reliably and what should be addressed before implementation. You receive a written assessment of the findings whether or not you proceed with the full dashboard build.",
  },
  {
    question: "Where does our data live, and who can see it?",
    answer:
      "Data hosting and access depend on the project architecture and business requirements. Solutions can be designed around appropriate UAE-region cloud infrastructure or customer-controlled infrastructure where supported. Access can be managed through role-based permissions so users only see the entities, branches, departments or information they are authorised to access. Security, data protection, hosting and governance controls should be defined and verified as part of the implementation. Oglas AI does not sell or resell customer business data.",
  },
  {
    question: "We already use Power BI or Excel — what changes?",
    answer:
      "You do not necessarily need to replace Power BI or Excel. The change is usually not the tool itself; it is the intelligence layer underneath it: one agreed definition per KPI, live connections instead of manual exports, and AI analysis and alerting on top. If your existing reporting setup is sound, Oglas AI can build on it where appropriate rather than replacing technology that already works.",
  },
  {
    question: "Can AI dashboards provide forecasting and anomaly detection?",
    answer:
      "Yes. AI dashboards can support forecasting, trend analysis and anomaly detection around the specific KPIs and business processes you monitor. Examples include demand forecasting, cashflow forecasting, capacity forecasting, margin anomaly detection, cost anomaly detection, and collections and ageing risk. These models can be built around your historical data and refined as more data becomes available and the system is validated over time.",
  },
  {
    question: "Do you train our team, and what happens after handover?",
    answer:
      "Yes. Rollout can include training, access setup and documentation so your team can use and manage the dashboards after implementation. The goal is for your organisation to own and understand the dashboards rather than depending on Oglas AI to interpret every report. Oglas AI can also provide ongoing support and development for businesses that want to extend their intelligence layer after the initial implementation.",
  },
  {
    question: "How do AI dashboards help businesses make better decisions?",
    answer:
      "AI dashboards help businesses make better decisions by bringing important business data into one connected view, explaining what changed, highlighting what needs attention and putting the next action in front of the person responsible. Leaders can monitor KPIs, understand trends, identify emerging risks and act on important information in the same environment. Oglas AI designs this around the decisions, workflows and goals of each business rather than simply displaying a collection of charts.",
  },
];

const aiDashboardsProblems = [
  {
    title: "Fragmented Data",
    description:
      "Information sits across systems, spreadsheets and departments, making it difficult to see the full picture.",
  },
  {
    title: "Delayed Reporting",
    description:
      "Manual consolidation pushes important numbers behind the decisions they are supposed to support.",
  },
  {
    title: "Conflicting Numbers",
    description:
      "Different departments can calculate or report the same KPI differently, creating uncertainty about which number is correct.",
  },
  {
    title: "Limited Visibility",
    description:
      "Operational issues, performance changes and emerging risks can remain hidden until they become more difficult to address.",
  },
  {
    title: "Decision Gaps",
    description:
      "Having access to data does not automatically provide the right insight, context or action at the moment a decision is required.",
  },
];

const aiDashboardsSources = [
  {
    title: "ERP & Business Systems",
    description:
      "Connect operational data from platforms such as Odoo, SAP, Microsoft Dynamics, Zoho and other business systems.",
    icon: Database,
  },
  {
    title: "CRM & Sales Data",
    description:
      "Bring together customer, pipeline, sales and commercial performance data from platforms such as Salesforce, HubSpot, Zoho CRM and Shopify.",
    icon: TrendingUp,
  },
  {
    title: "Finance & HR",
    description:
      "Connect financial, payroll and workforce information from systems such as QuickBooks, Tally, Xero and supported payroll platforms.",
    icon: FileSpreadsheet,
  },
  {
    title: "Production & Operations",
    description:
      "Bring operational and production data together to monitor throughput, bottlenecks, utilisation, costs and other business-specific KPIs.",
    icon: Factory,
  },
];

const aiDashboardsLadder = [
  {
    number: "01",
    title: "See",
    subtitle: "Live Visibility",
    description:
      "Monitor the KPIs, metrics and business activity that matter to your organisation. Dashboards can refresh live or on a scheduled basis, depending on what each source system supports.",
    icon: Eye,
  },
  {
    number: "02",
    title: "Understand",
    subtitle: "AI-Assisted Insights",
    description:
      "Identify patterns, unusual movements and trends across your business data. AI-assisted summaries can explain what changed and help users understand where attention may be required.",
    icon: Brain,
  },
  {
    number: "03",
    title: "Anticipate",
    subtitle: "Forecasting & Risk",
    description:
      "Use historical and current data to support forecasts for areas such as demand, cash flow and capacity. Anomaly and risk detection can help identify unusual movements before they become larger business problems.",
    icon: Radar,
  },
  {
    number: "04",
    title: "Act",
    subtitle: "Agent-Assisted Follow-Through",
    description:
      "Route alerts, recommendations and follow-up actions to the person responsible. Where the underlying workflow supports automation, actions can be assisted or triggered through connected systems.",
    icon: Rocket,
  },
];

const aiDashboardsCapabilities = [
  {
    title: "Executive Dashboards",
    description:
      "Get a clear view of company-wide KPIs, financial performance and operational metrics that leadership is accountable for.",
    icon: Gauge,
  },
  {
    title: "Ask Your Data",
    description:
      "Ask questions about your business data in plain language and receive answers, visualisations and supporting information without relying on an analyst for every question.",
    icon: MessageSquare,
  },
  {
    title: "Alerts That Reach You",
    description:
      "Receive threshold and anomaly alerts through supported channels such as WhatsApp, email or Microsoft Teams, so important changes reach the people responsible.",
    icon: Bell,
  },
  {
    title: "One Definition Per KPI",
    description:
      "Create a governed definition for every important KPI so that metrics such as gross margin, revenue and collections are calculated consistently across the business.",
    icon: ListChecks,
  },
  {
    title: "Automated Reporting",
    description:
      "Generate and distribute scheduled management packs and department-level reports without relying on repetitive manual reporting processes.",
    icon: FileSpreadsheet,
  },
  {
    title: "Predictive Analytics & Forecasting",
    description:
      "Use historical and current business data to support forecasting for areas such as demand, cash flow, capacity and other operational requirements.",
    icon: LineChart,
  },
  {
    title: "Anomaly & Risk Detection",
    description:
      "Identify unusual movements in areas such as cost, margin, inventory, receivables and collections.",
    icon: Radar,
  },
  {
    title: "AI-Assisted Summaries",
    description:
      "Turn complex dashboard movements into concise explanations that help users understand what changed and where attention may be required.",
    icon: Sparkles,
  },
  {
    title: "Role-Based Access",
    description:
      "Control what users can access based on their role, entity, branch or department.",
    icon: Lock,
  },
  {
    title: "Mobile & On-the-Go",
    description:
      "Give authorised users access to the same business information through supported mobile experiences, helping leadership stay informed beyond the desktop.",
    icon: Smartphone,
  },
];

const aiDashboardsComparison = [
  {
    traditional: "Shows what happened",
    oglas: "Explains what changed and can help identify what is likely next",
  },
  {
    traditional: "Requires users to monitor dashboards for issues",
    oglas: "Alerts can bring important changes to the people responsible",
  },
  {
    traditional: "Departments may define KPIs differently",
    oglas: "One agreed KPI definition can be governed across the business",
  },
  {
    traditional: "New questions may require analyst support",
    oglas: "Users can ask supported questions in plain language",
  },
  {
    traditional: "Reporting follows the refresh cycle of the underlying system",
    oglas: "Live or scheduled refresh can be matched to each source system",
  },
  {
    traditional: "Ends with reporting and analysis",
    oglas: "Can connect insight to alerts, recommendations and follow-up workflows",
  },
  {
    traditional: "Often built around a reporting template",
    oglas: "Built around your systems, KPIs and business decisions",
  },
];

const aiDashboardsProcess = [
  {
    number: "01",
    title: "Decision Mapping",
    timeline: "Week 1",
    description:
      "We document the decisions, questions and business outcomes the dashboards need to support before deciding what should be reported.",
  },
  {
    number: "02",
    title: "Data & Systems Audit",
    timeline: "Week 1–2",
    description:
      "We assess where the required data exists, whether it is reliable, what is missing and what can realistically be measured.",
  },
  {
    number: "03",
    title: "KPI Definition",
    timeline: "Week 2",
    description:
      "We establish agreed definitions for important metrics and align them with the relevant finance, operations and management stakeholders.",
  },
  {
    number: "04",
    title: "Build & Connect",
    timeline: "Week 3–6",
    description:
      "We build the dashboards, data models and required integrations against the relevant systems, reviewing progress at agreed milestones.",
  },
  {
    number: "05",
    title: "Rollout & Handover",
    timeline: "Week 6–8",
    description:
      "We configure access, train the team and provide documentation so your organisation can own and use the dashboards after implementation.",
  },
];

const aiDashboardsGovernance = [
  {
    title: "Hosted where you choose",
    description:
      "Depending on project requirements, deployment can be designed around UAE-region cloud infrastructure or your own infrastructure.",
    icon: Building2,
  },
  {
    title: "Role-based access",
    description:
      "Users can be given access based on the entity, branch, department or information they are authorised to view.",
    icon: Lock,
  },
  {
    title: "Governance & Compliance",
    description:
      "Solutions are designed with applicable UAE data protection requirements in mind, with appropriate controls and human oversight for automated decision-support workflows.",
    icon: ShieldCheck,
  },
  {
    title: "Audit trails",
    description:
      "Where supported by the underlying implementation, access and relevant system activity can be logged for governance and accountability.",
    icon: ClipboardCheck,
  },
  {
    title: "No data resale, no model training",
    description:
      "Oglas AI does not sell or resell customer business data, and customer business data is not used to train third-party models unless that specific arrangement has been explicitly agreed and disclosed.",
    icon: ShieldCheck,
  },
];

const aiDashboardsBestFit = [
  {
    title: "Leadership & Management Teams",
    description:
      "For leaders who need a connected view of the KPIs, financial performance and operational metrics they are accountable for.",
    icon: Target,
  },
  {
    title: "Growing & Mid-Sized Businesses",
    description:
      "For organisations whose data becomes increasingly difficult to manage as teams, entities, systems and operations grow.",
    icon: Rocket,
  },
  {
    title: "Data-Rich Operations",
    description:
      "Particularly relevant to businesses in manufacturing, distribution, retail and e-commerce, F&B, logistics, construction and agri-processing.",
    icon: Boxes,
  },
  {
    title: "Businesses Moving Beyond Reporting",
    description:
      "For organisations that want to move beyond static reports toward forecasting, anomaly detection, alerts and AI-assisted analysis.",
    icon: TrendingUp,
  },
];

const aiDashboardsNotFor = [
  "Your data exists entirely within one system that already provides everything you need.",
  "You are looking for a generic dashboard template rather than a solution built around your KPIs.",
  "No internal stakeholder owns the numbers or decisions the dashboard is supposed to support.",
];

const aiDashboardsExpectations = [
  {
    title: "Connected Business Visibility",
    description:
      "Bring important information together across relevant systems and functions.",
  },
  {
    title: "Faster Access to Insight",
    description:
      "Reduce the time spent searching through spreadsheets and manually prepared reports.",
  },
  {
    title: "Better Decision Support",
    description:
      "Give leaders clearer context around performance, trends, risks and opportunities.",
  },
  {
    title: "Built Around Your Business",
    description:
      "Design dashboards around your actual systems, KPIs, workflows and decisions rather than forcing your organisation into a generic template.",
  },
];

const aiDashboardsEngagements = [
  {
    title: "Data Readiness Audit",
    description:
      "A fixed-scope assessment of your systems, data quality, KPI definitions and reporting requirements.",
    includes: [
      "Data and systems assessment",
      "KPI and reporting review",
      "Data readiness findings",
      "Recommended next steps",
      "Written assessment",
    ],
  },
  {
    title: "Single-Department Dashboard",
    description:
      "A focused dashboard for a single business area, scoped around the systems, KPIs and data sources involved.",
    includes: ["Finance", "Sales", "Production", "Operations"],
  },
  {
    title: "Executive Intelligence Layer",
    description:
      "A multi-system, potentially multi-entity intelligence layer combining executive dashboards with capabilities such as forecasting, alerts, governed KPIs and supported agent-assisted workflows.",
    includes: [
      "Multi-system integration",
      "Governed KPIs",
      "Forecasting & alerts",
      "Agent-assisted workflows",
    ],
  },
];

const aiDashboardsIntegrations = [
  "Odoo",
  "SAP",
  "Microsoft Dynamics 365",
  "Zoho",
  "QuickBooks",
  "Tally",
  "Xero",
  "Salesforce",
  "HubSpot",
  "Shopify",
  "Google Sheets",
  "Microsoft Excel",
  "SQL Server",
  "PostgreSQL",
  "MySQL",
  "REST APIs",
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

function AiDashboardsBreadcrumbStructuredData() {
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
        name: "AI Dashboards & Decision Intelligence",
        item: `${baseUrl}/services/ai-dashboards-decision-intelligence`,
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

function AiDashboardsServiceStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${baseUrl}/services/ai-dashboards-decision-intelligence#service`,
    name: "AI Dashboards & Decision Intelligence",
    serviceType: "Business Intelligence & Decision Intelligence",
    description:
      "Oglas AI builds AI dashboards that connect ERP, CRM, finance, HR and operations data into a governed intelligence layer with forecasting, alerts and AI-assisted analysis.",
    provider: {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: "Oglas AI",
      url: baseUrl,
    },
    areaServed: [
      "United Arab Emirates",
      "Dubai, United Arab Emirates",
    ],
    url: `${baseUrl}/services/ai-dashboards-decision-intelligence`,
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

function AiDashboardsPage() {
  return (
    <>
      <AiDashboardsBreadcrumbStructuredData />
      <AiDashboardsServiceStructuredData />
      <FaqStructuredData faqs={aiDashboardsFaqs} />

      {/* Hero */}
      <section className="surface-grid bg-pearl py-20 md:py-28">
        <div className="mx-auto grid w-full max-w-[1160px] gap-10 px-4 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-champagne">
              AI-Powered Business Intelligence
            </p>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.05] text-onyx md:text-6xl">
              AI Dashboards & Decision Intelligence
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-steel">
              Oglas AI connects your ERP, CRM, finance, HR and production data
              into one live business intelligence view — then goes further. Our
              dashboards surface what changed, forecast what is coming, and help
              trigger the follow-up action. Built for UAE businesses that need
              to decide faster than their reporting cycle allows.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-onyx px-6 text-sm font-semibold text-white transition hover:bg-champagne hover:text-onyx"
              >
                Book a Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-onyx px-6 text-sm font-semibold text-onyx transition hover:bg-onyx hover:text-white"
              >
                Get a Free Data Readiness Check
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <p className="mt-8 text-xs font-medium uppercase tracking-[0.14em] text-steel/70">
              Connected to the systems you already run
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-steel">
              Odoo · SAP · Microsoft Dynamics · Zoho · Salesforce · QuickBooks ·
              Tally · Shopify
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
            <div className="rounded-xl bg-onyx p-5 text-white">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
                    Oglas AI
                  </p>
                  <p className="mt-1 text-lg font-semibold">
                    Executive Overview
                  </p>
                </div>
                <Gauge className="h-8 w-8 text-emerald-light" />
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Revenue",
                  "Gross Margin",
                  "Receivables",
                  "Cash Position",
                  "Pipeline",
                  "Utilisation",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-white/60">
                See. Understand. Anticipate. Act.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald">
            The Problem
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-onyx md:text-5xl">
            When Business Data Exists but Decisions Still Depend on Manual
            Reports
          </h2>
          <div className="mt-6 max-w-3xl space-y-5 text-base leading-8 text-steel md:text-lg">
            <p>
              Your business already generates valuable data across finance,
              sales, operations, HR and production. But when that information
              sits in separate spreadsheets, platforms and disconnected reports,
              a clear picture of performance can arrive days after the decision
              needed to be made.
            </p>
            <p>
              Leadership should not have to wait for someone to consolidate
              spreadsheets, reconcile conflicting numbers or prepare another
              management report before understanding what is happening.
            </p>
            <p>
              Oglas AI turns fragmented business data into a connected
              intelligence layer — helping your teams move from reading reports
              to acting on what the data is telling them.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {aiDashboardsProblems.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-black/10 bg-pearl p-6"
              >
                <h3 className="text-lg font-semibold text-onyx">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-steel">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What Oglas AI Builds */}
      <section className="bg-pearl py-20 md:py-24">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald">
            What Oglas AI Builds
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-onyx md:text-5xl">
            Business Intelligence Built on Your Live Systems
          </h2>
          <div className="mt-6 max-w-3xl space-y-5 text-base leading-8 text-steel md:text-lg">
            <p>
              Oglas AI connects data from your ERP, CRM, finance, HR, sales,
              production and operational systems into a governed business
              intelligence layer.
            </p>
            <p>
              Instead of forcing your business into a generic dashboard
              template, we build around the systems you already use, the KPIs
              your teams are responsible for and the decisions leadership needs
              to make.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {aiDashboardsSources.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-xl border border-black/10 bg-white p-6"
                >
                  <Icon className="h-6 w-6 text-emerald" />
                  <h3 className="mt-5 text-lg font-semibold text-onyx">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-steel">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-12 rounded-xl border border-black/10 bg-white p-6">
            <p className="text-sm font-semibold text-onyx">
              Integrations Oglas AI can work with
            </p>
            <p className="mt-3 text-sm leading-7 text-steel">
              Supported business applications, spreadsheets, databases and APIs,
              depending on the systems, data structure and requirements of the
              project.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {aiDashboardsIntegrations.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-black/10 bg-pearl px-3 py-1 text-xs font-medium text-onyx"
                >
                  {tool}
                </span>
              ))}
            </div>
            <p className="mt-4 text-xs text-steel">
              Working with something else? Most business systems can be
              connected through their API or database.
            </p>
          </div>
        </div>
      </section>

      {/* From Reporting to Action */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald">
            From Reporting to Action
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-onyx md:text-5xl">
            From Dashboards That Report to Systems That Act
          </h2>
          <div className="mt-6 max-w-3xl space-y-5 text-base leading-8 text-steel md:text-lg">
            <p>
              A dashboard shows you what happened. Decision intelligence helps
              you understand what is happening, what needs attention, what may
              happen next and what action should follow.
            </p>
            <p>
              Oglas AI combines business intelligence with AI-assisted analysis,
              forecasting, alerts and workflow support. Your dashboards can
              surface patterns, highlight unusual changes, provide context
              around performance and route important actions to the people
              responsible.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {aiDashboardsLadder.map((step) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.number}
                  className="rounded-xl border border-black/10 bg-pearl p-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-[0.16em] text-champagne">
                      {step.number}
                    </span>
                    <Icon className="h-6 w-6 text-emerald" />
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-onyx">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm font-semibold leading-6 text-onyx">
                    {step.subtitle}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-steel">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-pearl py-20 md:py-24">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald">
            Capabilities
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-onyx md:text-5xl">
            Built for the Way Your Business Operates
          </h2>
          <p className="mt-5 max-w-4xl text-base leading-8 text-steel md:text-lg">
            From executive reporting to operational analysis, Oglas AI
            dashboards bring together the capabilities you need to monitor
            performance, understand trends and act on what matters.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {aiDashboardsCapabilities.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-xl border border-black/10 bg-white p-6"
                >
                  <Icon className="h-6 w-6 text-emerald" />
                  <h3 className="mt-5 text-base font-semibold text-onyx">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-steel">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald">
            Comparison
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-onyx md:text-5xl">
            Traditional Dashboards vs Decision Intelligence
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-steel md:text-lg">
            Most businesses already have a reporting tool. The difference is not
            the chart — it is what happens after you look at it.
          </p>

          <div className="mt-10 overflow-x-auto rounded-xl border border-black/10">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead className="bg-pearl">
                <tr>
                  <th className="p-5 text-xs font-semibold uppercase tracking-[0.14em] text-steel">
                    Traditional BI dashboard
                  </th>
                  <th className="p-5 text-xs font-semibold uppercase tracking-[0.14em] text-onyx">
                    Oglas AI decision intelligence
                  </th>
                </tr>
              </thead>
              <tbody>
                {aiDashboardsComparison.map((row) => (
                  <tr
                    key={row.traditional}
                    className="border-t border-black/10 align-top"
                  >
                    <td className="p-5 leading-7 text-steel">
                      {row.traditional}
                    </td>
                    <td className="p-5 font-medium leading-7 text-onyx">
                      {row.oglas}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Real-world experience */}
      <section className="bg-pearl py-20 md:py-24">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald">
            Real-World Experience
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-onyx md:text-5xl">
            Decision Intelligence Built Around Real Operations
          </h2>
          <p className="mt-5 max-w-4xl text-base leading-8 text-steel md:text-lg">
            AI dashboards earn their place when they change what a business does
            — not simply what it sees. Oglas AI builds business intelligence and
            decision-support solutions around real operational environments
            where data, workflows and management decisions are connected.
          </p>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="rounded-xl border border-black/10 bg-white p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-champagne">
                Case Study · Steel Manufacturing, UAE
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-onyx">
                ERP and BI Dashboards for Steel Manufacturing Visibility
              </h3>
              <p className="mt-4 text-sm leading-7 text-steel">
                A UAE steel manufacturing business needed better visibility into
                workshop activity, project costing, client payment cycles, cash
                flow movement and ageing reports. Oglas AI implemented an ERP
                and BI approach that connected operational and financial
                information into a clearer management view.
              </p>
              <p className="mt-4 text-sm font-semibold text-onyx">
                The solution brought together:
              </p>
              <ul className="mt-3 grid gap-2 text-sm leading-6 text-steel sm:grid-cols-2">
                {[
                  "Workshop activity",
                  "Project information",
                  "Project costing",
                  "Client payment cycles",
                  "Receivables and ageing",
                  "Management reporting",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-7 text-steel">
                A machine learning layer also provided a foundation for
                analysing project-costing patterns and supporting future
                automation opportunities.
              </p>
              <p className="mt-4 text-sm font-semibold text-onyx">
                Business impact
              </p>
              <p className="mt-2 text-sm leading-7 text-steel">
                The solution gave management a more complete view of operations,
                project performance, receivables and cash flow. It helped
                identify areas of cashflow leakage and improved visibility into
                project costing and collections.
              </p>
            </article>

            <article className="rounded-xl border border-black/10 bg-white p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-champagne">
                Case Study · Agri-Processing, UAE
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-onyx">
                Business Intelligence for Farming & Packhouse Operations
              </h3>
              <p className="mt-4 text-sm leading-7 text-steel">
                Oglas AI also applies ERP, business intelligence and operational
                reporting to agriculture and packhouse environments, where
                production activity, inventory, procurement, sales and
                operational information need to work together.
              </p>
              <p className="mt-4 text-sm leading-7 text-steel">
                The solution can provide management with a clearer view across
                operational processes while creating a stronger foundation for
                reporting, analysis and future automation.
              </p>
              <Link
                href="/case-studies"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-onyx underline-offset-4 hover:underline"
              >
                View case studies
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald">
            How We Work
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-onyx md:text-5xl">
            From First Conversation to Dashboards Your Team Actually Uses
          </h2>
          <div className="mt-6 max-w-3xl space-y-5 text-base leading-8 text-steel md:text-lg">
            <p>
              Dashboard projects can fail when they begin with the data that
              happens to exist rather than the decisions the business actually
              needs to make.
            </p>
            <p>
              Oglas AI starts from the other end: what decisions need better
              information, which KPIs support those decisions and what data is
              required to measure them reliably.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {aiDashboardsProcess.map((step) => (
              <article
                key={step.number}
                className="rounded-xl border border-black/10 bg-pearl p-6"
              >
                <span className="text-xs font-semibold tracking-[0.16em] text-champagne">
                  {step.number}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-onyx">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-emerald">
                  {step.timeline}
                </p>
                <p className="mt-3 text-sm leading-7 text-steel">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Data Readiness */}
      <section className="bg-pearl py-20 md:py-24">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald">
            Data Readiness
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-onyx md:text-5xl">
            Most Businesses Do Not Start With Clean Data
          </h2>
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-3xl space-y-5 text-base leading-8 text-steel md:text-lg">
              <p>
                Incomplete records, duplicate customer entries, inconsistent KPI
                definitions and differences between operational records and
                system data are common starting points. They are not
                necessarily reasons to stop a dashboard project.
              </p>
              <p>
                Oglas AI can begin with a data readiness assessment to determine
                what is usable today and what needs work — and you receive a
                written assessment whether or not you decide to proceed with the
                full build.
              </p>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-onyx px-6 text-sm font-semibold text-white transition hover:bg-champagne hover:text-onyx"
              >
                Get a Free Data Readiness Check
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-xl border border-black/10 bg-white p-6">
              <p className="text-sm font-semibold text-onyx">
                The assessment covers:
              </p>
              <ul className="mt-4 grid gap-3 text-sm leading-6 text-steel">
                {[
                  "What data is usable today",
                  "What needs cleaning or restructuring",
                  "Which systems should be connected",
                  "Which KPIs can be measured reliably",
                  "What gaps need to be addressed",
                  "What can realistically be delivered from the available data",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Governance */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald">
            Data Security & Governance
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-onyx md:text-5xl">
            Your Data Stays Yours
          </h2>
          <p className="mt-5 max-w-4xl text-base leading-8 text-steel md:text-lg">
            Connecting finance, HR, operational and customer data to a new
            intelligence layer requires clear controls around access, hosting
            and governance. Oglas AI approaches these requirements around the
            needs of your business and deployment environment.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {aiDashboardsGovernance.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-xl border border-black/10 bg-pearl p-6"
                >
                  <Icon className="h-6 w-6 text-emerald" />
                  <h3 className="mt-5 text-base font-semibold text-onyx">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-steel">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="bg-pearl py-20 md:py-24">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald">
            Who It's For
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-onyx md:text-5xl">
            AI Dashboards Built Around Your Business
          </h2>
          <p className="mt-5 max-w-4xl text-base leading-8 text-steel md:text-lg">
            Oglas AI builds dashboards and decision intelligence solutions for
            UAE businesses that need clearer visibility, faster analysis and
            stronger decision support across their operations.
          </p>

          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.16em] text-onyx">
            Best fit for
          </p>
          <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {aiDashboardsBestFit.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-xl border border-black/10 bg-white p-6"
                >
                  <Icon className="h-6 w-6 text-emerald" />
                  <h3 className="mt-5 text-base font-semibold text-onyx">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-steel">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-black/10 bg-white p-7">
              <h3 className="text-lg font-semibold text-onyx">
                Probably not a fit if
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-steel">
                {aiDashboardsNotFor.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-champagne"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm italic leading-7 text-steel">
                A successful dashboard needs a decision-maker and a business
                purpose, not just a collection of charts.
              </p>
            </div>

            <div className="rounded-xl border border-black/10 bg-white p-7">
              <h3 className="text-lg font-semibold text-onyx">
                What you can expect
              </h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {aiDashboardsExpectations.map((item) => (
                  <div key={item.title}>
                    <p className="text-sm font-semibold text-onyx">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-steel">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald">
            Engagement Models
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-onyx md:text-5xl">
            How Projects Are Scoped
          </h2>
          <p className="mt-5 max-w-4xl text-base leading-8 text-steel md:text-lg">
            Every Oglas AI dashboard project is scoped around the systems, KPIs,
            integrations and decisions involved rather than sold as a fixed
            one-size-fits-all package. Most engagements fall into one of three
            shapes.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {aiDashboardsEngagements.map((option) => (
              <article
                key={option.title}
                className="flex flex-col rounded-xl border border-black/10 bg-pearl p-6"
              >
                <h3 className="text-xl font-semibold text-onyx">
                  {option.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-steel">
                  {option.description}
                </p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-onyx">
                  Includes
                </p>
                <ul className="mt-3 grid gap-2 text-sm leading-6 text-steel">
                  {option.includes.map((item) => (
                    <li key={item} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm leading-7 text-steel">
            <span className="font-semibold text-onyx">Pricing.</span> Scoped
            according to the systems, entities, KPIs, integrations and
            requirements involved.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-pearl py-20 md:py-24">
        <div className="mx-auto w-full max-w-[960px] px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald">
            Frequently Asked Questions
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-onyx md:text-5xl">
            Frequently Asked Questions
          </h2>

          <div className="mt-10 divide-y divide-black/10 rounded-xl border border-black/10 bg-white">
            {aiDashboardsFaqs.map((faq) => (
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

      {/* Closing CTA */}
      <section className="bg-onyx py-16 md:py-20">
        <div className="mx-auto flex w-full max-w-[1160px] flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-light">
              Oglas AI
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              Turn Your Business Data Into Better Decisions
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">
              Your business already has the data. The challenge is turning it
              into a reliable view of what is happening, what needs attention
              and what should happen next.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-white px-6 text-sm font-semibold text-onyx transition hover:bg-champagne"
            >
              Book a Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/40 px-6 text-sm font-semibold text-white transition hover:bg-white hover:text-onyx"
            >
              Free Data Readiness Check
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
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

  if (slug === "ai-dashboards-decision-intelligence") {
    return <AiDashboardsPage />;
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
