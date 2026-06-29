import {
  BarChart3,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  Camera,
  CircuitBoard,
  Factory,
  FileScan,
  HeartPulse,
  Megaphone,
  Network,
  ShieldCheck,
  Store,
  Truck,
  UsersRound,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const company = {
  name: "Oglas AI",
  email: "md@oglasglobal.com",
  location: "Dubai, United Arab Emirates",
  positioning:
    "UAE-based custom software and AI solutions partner for companies building smarter operations across global markets.",
};

export const navigation = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  icon: LucideIcon;
  outcomes: string[];
  capabilities: string[];
  fit: string;
};

export const services: Service[] = [
  {
    slug: "erp-payroll-automation",
    title: "ERP & Payroll Automation",
    eyebrow: "Core operations",
    summary:
      "Custom ERP, payroll, attendance, approvals, and HR operations built around your company rules.",
    description:
      "We design ERP and payroll systems that match real business workflows instead of forcing teams into rigid templates. Oglas AI connects employee records, attendance, leave, approvals, payroll rules, finance views, and reporting into one controlled operating layer.",
    icon: CircuitBoard,
    outcomes: [
      "Cleaner payroll cycles with fewer manual checks",
      "Centralized employee, attendance, and approval records",
      "Audit-ready reports for finance and management",
    ],
    capabilities: [
      "Payroll rule engines",
      "Attendance and leave workflows",
      "Role-based ESS portals",
      "Finance and HR dashboards",
    ],
    fit: "Best for manpower companies, multi-branch operators, manufacturing firms, and service companies with complex payroll rules.",
  },
  {
    slug: "intelligent-computer-vision",
    title: "Intelligent Computer Vision",
    eyebrow: "AI vision systems",
    summary:
      "Camera-based intelligence for safety, monitoring, counting, compliance, and operational visibility.",
    description:
      "We turn camera streams and visual inspection points into useful business signals. From safety detection to activity monitoring and process visibility, Oglas AI builds computer vision systems that support operators without overwhelming them with noise.",
    icon: Camera,
    outcomes: [
      "Faster detection of operational exceptions",
      "Better monitoring without adding manual review load",
      "Structured visual data for reports and alerts",
    ],
    capabilities: [
      "Object and activity detection",
      "Safety and compliance alerts",
      "Visual inspection workflows",
      "Camera analytics dashboards",
    ],
    fit: "Best for security providers, industrial sites, facilities, warehouses, clinics, and operations teams with camera infrastructure.",
  },
  {
    slug: "workflow-automation",
    title: "Workflow Automation",
    eyebrow: "Process systems",
    summary:
      "Approval flows, notifications, document routing, and task automation for teams with repeated manual work.",
    description:
      "Oglas AI maps the steps your teams repeat every day and converts them into reliable digital workflows. We automate approvals, reminders, handoffs, document checks, and exception handling while keeping people in control of important decisions.",
    icon: Workflow,
    outcomes: [
      "Less follow-up work across departments",
      "Clear ownership for every request and approval",
      "Faster turnaround on recurring business processes",
    ],
    capabilities: [
      "Approval engines",
      "Department workflows",
      "Automated notifications",
      "SLA and escalation tracking",
    ],
    fit: "Best for companies where work moves through HR, finance, operations, sales, or compliance before completion.",
  },
  {
    slug: "marketing-automation",
    title: "Marketing Automation",
    eyebrow: "Growth operations",
    summary:
      "Automated lead handling, campaign workflows, CRM updates, and reporting systems for marketing teams.",
    description:
      "We help marketing and sales teams reduce messy handoffs by connecting lead forms, CRM stages, campaign activity, notifications, and reporting. The result is a cleaner pipeline and faster response to qualified opportunities.",
    icon: Megaphone,
    outcomes: [
      "Faster lead response and campaign visibility",
      "Reduced manual CRM updates",
      "Clearer reporting across channels and teams",
    ],
    capabilities: [
      "Lead routing",
      "CRM automation",
      "Campaign reporting",
      "WhatsApp and email workflow planning",
    ],
    fit: "Best for agencies, service brands, clinics, property teams, and sales-led companies handling repeated enquiries.",
  },
  {
    slug: "ess-hr-portals",
    title: "ESS & HR Portals",
    eyebrow: "Employee experience",
    summary:
      "Employee self-service portals for leave, documents, requests, approvals, and HR communication.",
    description:
      "We build ESS portals that reduce HR back-and-forth and give employees a clear place to manage requests, documents, approvals, and updates. The systems can connect to payroll, attendance, and ERP modules when needed.",
    icon: UsersRound,
    outcomes: [
      "Reduced HR ticket volume",
      "Cleaner document and request tracking",
      "Better visibility for employees and managers",
    ],
    capabilities: [
      "Employee profiles",
      "Document expiry alerts",
      "Leave and request workflows",
      "Manager approvals",
    ],
    fit: "Best for manpower companies, facility management groups, clinics, retail operators, and teams with mobile staff.",
  },
  {
    slug: "ai-dashboards-decision-intelligence",
    title: "AI Dashboards & Decision Intelligence",
    eyebrow: "Management visibility",
    summary:
      "Executive dashboards, predictive insights, reporting automation, and operational intelligence layers.",
    description:
      "Oglas AI builds dashboards that help leadership see what matters without waiting for manual reports. We connect data from operations, finance, HR, sales, and production systems into clear management views with alerts and AI-assisted summaries.",
    icon: BarChart3,
    outcomes: [
      "Management visibility across key departments",
      "Less spreadsheet consolidation",
      "Earlier signals for bottlenecks and risks",
    ],
    capabilities: [
      "Executive dashboards",
      "Automated reporting",
      "Forecasting models",
      "AI-assisted summaries",
    ],
    fit: "Best for leadership teams that need one reliable view of operations, sales, finance, HR, and production performance.",
  },
  {
    slug: "ai-document-processing",
    title: "AI Document Processing",
    eyebrow: "Document intelligence",
    summary:
      "Extraction, classification, verification, and approval workflows for business documents.",
    description:
      "We use AI to help teams process documents faster while maintaining human review where it matters. The system can extract fields, classify files, flag missing details, and route documents to the right department.",
    icon: FileScan,
    outcomes: [
      "Faster document intake and review",
      "Reduced repetitive data entry",
      "Clearer exception handling",
    ],
    capabilities: [
      "Invoice and form extraction",
      "Document classification",
      "Validation checks",
      "Approval routing",
    ],
    fit: "Best for finance, HR, logistics, healthcare, trading, and compliance-heavy teams.",
  },
  {
    slug: "ai-chatbots-knowledge-assistants",
    title: "AI Chatbots & Knowledge Assistants",
    eyebrow: "AI assistance",
    summary:
      "Private AI assistants for internal knowledge, customer support, HR helpdesks, and operational FAQs.",
    description:
      "We build AI assistants that answer from approved company knowledge and workflow data. They can support employees, customers, sales teams, or operations staff while staying aligned with your policies and escalation rules.",
    icon: Bot,
    outcomes: [
      "Faster answers for repeated questions",
      "Better use of internal knowledge",
      "Escalation paths for sensitive requests",
    ],
    capabilities: [
      "Internal knowledge assistants",
      "Customer support bots",
      "HR and policy assistants",
      "Escalation workflows",
    ],
    fit: "Best for teams with repeated support, policy, product, or operations questions.",
  },
];

export type Industry = {
  title: string;
  slug: string;
  summary: string;
  icon: LucideIcon;
  needs: string[];
};

export const industries: Industry[] = [
  {
    title: "Manpower & Staffing",
    slug: "manpower-staffing",
    summary:
      "Payroll, attendance, onboarding, employee documents, ESS, and deployment visibility for distributed teams.",
    icon: UsersRound,
    needs: ["Payroll automation", "ESS portals", "Document expiry alerts"],
  },
  {
    title: "Manufacturing & Industrial",
    slug: "manufacturing-industrial",
    summary:
      "Production visibility, inventory workflows, maintenance tracking, and AI inspection for industrial operations.",
    icon: Factory,
    needs: ["Production dashboards", "Inventory workflows", "Computer vision"],
  },
  {
    title: "Security & Surveillance",
    slug: "security-surveillance",
    summary:
      "Camera intelligence, incident workflows, guard operations, monitoring dashboards, and alert management.",
    icon: ShieldCheck,
    needs: ["AI monitoring", "Incident workflows", "Operations dashboards"],
  },
  {
    title: "Trading & Distribution",
    slug: "trading-distribution",
    summary:
      "Order workflows, stock visibility, supplier coordination, delivery tracking, and finance reporting.",
    icon: Truck,
    needs: ["Inventory automation", "Order flows", "Executive reporting"],
  },
  {
    title: "Healthcare Clinics",
    slug: "healthcare-clinics",
    summary:
      "Patient workflows, appointment operations, staff scheduling, document processing, and reporting systems.",
    icon: HeartPulse,
    needs: ["Appointment workflows", "Document automation", "Clinic reporting"],
  },
  {
    title: "Marketing Agencies",
    slug: "marketing-agencies",
    summary:
      "Lead routing, campaign reporting, client dashboards, content workflows, and CRM automation.",
    icon: BriefcaseBusiness,
    needs: ["Lead automation", "CRM workflows", "Client dashboards"],
  },
  {
    title: "Facility Management",
    slug: "facility-management",
    summary:
      "Work orders, field staff coordination, asset checks, attendance, and client reporting.",
    icon: Building2,
    needs: ["Work orders", "Field staff portals", "Client reports"],
  },
  {
    title: "Retail & Multi-branch",
    slug: "retail-multibranch",
    summary:
      "Branch operations, staff scheduling, stock movement, sales reporting, and workflow standardization.",
    icon: Store,
    needs: ["Branch dashboards", "Stock flows", "Staff scheduling"],
  },
];

export const caseStudies = [
  {
    slug: "manpower-ess-portal-hr-time-savings",
    sector: "Manpower Company",
    metric: "300 minutes saved per day",
    title: "ESS portal that recovered 300 HR minutes every day",
    challenge:
      "The HR team was spending a large part of each day answering repeated employee queries, handling request follow-ups, and guiding staff through basic HR processes.",
    solution:
      "Oglas AI built an employee self-service portal where staff could raise HR queries, check request status, access guided information, and reduce direct dependency on the HR team for repeated questions.",
    outcomes: [
      "Saved 300 minutes per day for the HR team",
      "Recovered 110 HR hours across a 22-working-day month",
      "Equivalent to nearly 14 full working days saved every month",
    ],
    services: ["ESS & HR Portals", "Workflow Automation"],
  },
  {
    slug: "payroll-automation-ess-integration",
    sector: "Manpower Company",
    metric: "1-2 days reduced to under 10 seconds",
    title: "Payroll automation with ESS integration",
    challenge:
      "Payroll processing was one of the company's biggest operational headaches, requiring 2-3 staff members and 1-2 business days to complete a single payroll cycle.",
    solution:
      "Oglas AI automated the payroll workflow and integrated it with the ESS layer, allowing payroll inputs, employee records, and approval data to move through the system without manual consolidation.",
    outcomes: [
      "Reduced payroll processing to less than 10 seconds",
      "Recovered an estimated 16-48 staff-hours per payroll cycle",
      "Equivalent to 2-6 staff working days saved in a monthly payroll run",
    ],
    services: ["ERP & Payroll Automation", "ESS & HR Portals"],
  },
  {
    slug: "steel-manufacturing-erp-bi-cashflow",
    sector: "Steel Manufacturing",
    metric: "Cashflow leakage made visible",
    title: "ERP and BI dashboards for steel manufacturing visibility",
    challenge:
      "The owner needed a clearer view of workshop activity, project costing, client payment cycles, cashflow movement, and aging reports across the manufacturing operation.",
    solution:
      "Oglas AI built an ERP layer with advanced BI dashboards to connect workshop status, project data, payment cycles, aging reports, and management visibility. An intelligent machine learning layer was also introduced to learn project costing patterns for future automation.",
    outcomes: [
      "Gave ownership a complete view from workshop status to payment aging",
      "Helped identify cashflow leakage through BI dashboards",
      "Created a machine learning foundation for future costing automation",
    ],
    services: ["AI Dashboards & Decision Intelligence", "Workflow Automation"],
  },
  {
    slug: "meta-ads-marketing-agent",
    sector: "Marketing Automation",
    metric: "24/7 campaign inspection",
    title: "Marketing agent for Meta Ads optimization",
    challenge:
      "Campaign performance needed constant monitoring, but manual optimization could not reliably inspect ads, budgets, and signals around the clock.",
    solution:
      "Oglas AI deployed a marketing agent that monitors Meta Ads performance 24/7, reviews campaign signals, and supports advanced optimization decisions based on live performance patterns.",
    outcomes: [
      "Enabled always-on campaign inspection",
      "Reduced dependency on manual ad account checks",
      "Supported faster optimization decisions for active campaigns",
    ],
    services: ["Marketing Automation", "AI Dashboards & Decision Intelligence"],
  },
];

export const insights = [
  {
    slug: "what-to-automate-before-ai",
    title: "What UAE companies should automate before investing heavily in AI",
    category: "Automation Strategy",
    date: "2026-06-29",
    readTime: "5 min read",
    excerpt:
      "The strongest AI projects usually start with cleaner workflows, better data capture, and fewer manual handoffs.",
  },
  {
    slug: "computer-vision-operational-intelligence",
    title: "How computer vision turns surveillance into operational intelligence",
    category: "Computer Vision",
    date: "2026-06-29",
    readTime: "4 min read",
    excerpt:
      "AI vision systems can convert camera feeds into alerts, reports, and measurable operating signals.",
  },
  {
    slug: "payroll-erp-foundation",
    title: "Why payroll should be designed as part of ERP, not beside it",
    category: "ERP Systems",
    date: "2026-06-29",
    readTime: "6 min read",
    excerpt:
      "Payroll touches HR, attendance, finance, approvals, and compliance. Treating it separately creates avoidable friction.",
  },
];

export const processSteps = [
  {
    title: "Discover",
    summary:
      "We map current workflows, business rules, stakeholders, integrations, and operational pain points.",
  },
  {
    title: "Design",
    summary:
      "We define the software architecture, user roles, data flows, dashboards, and AI opportunities.",
  },
  {
    title: "Build",
    summary:
      "We develop custom systems in focused releases, with clear review points and practical training.",
  },
  {
    title: "Scale",
    summary:
      "We monitor adoption, refine workflows, and expand the platform as your company grows into new markets.",
  },
];

export const aiServiceIdeas = [
  {
    title: "Predictive Operations Alerts",
    icon: BrainCircuit,
    summary:
      "Detect early signs of delays, capacity issues, missed approvals, or operational risk.",
  },
  {
    title: "System Integration Layer",
    icon: Network,
    summary:
      "Connect CRM, ERP, HR, finance, forms, and dashboards into one coordinated workflow.",
  },
  {
    title: "AI Reporting Assistant",
    icon: BarChart3,
    summary:
      "Generate management summaries from operational data without waiting for manual report packs.",
  },
];
