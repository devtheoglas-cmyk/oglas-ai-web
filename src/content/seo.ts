export type SeoEntry = {
  title?: string;
  description: string;
};

export const staticPageSeo: Record<string, SeoEntry> = {
  "/": {
    title: "Custom Software Development & Practical AI | Oglas AI",
    description:
      "Oglas AI is a Dubai-based custom software development and AI solutions company delivering ERP, workflow automation, computer vision, payroll systems, and business AI for growing businesses.",
  },
  "/services": {
    title: "Custom Software & AI Solutions in Dubai | Oglas AI Services",
    description:
      "Explore Oglas AI's custom software development and AI solutions in Dubai, including ERP systems, payroll automation, workflow automation, computer vision, marketing automation, and AI dashboards.",
  },
  "/industries": {
    title: "Custom Software & AI Solutions for Industries | Oglas AI",
    description:
      "Explore Oglas AI's industry-focused custom software and AI solutions for manufacturing, healthcare, manpower, retail, trading, security, marketing, and facility management businesses in Dubai.",
  },
  "/case-studies": {
    title: "Custom Software & AI Case Studies | Oglas AI",
    description:
      "Explore Oglas AI case studies showcasing custom software development and AI solutions for businesses across manufacturing, manpower, healthcare, retail, and other industries.",
  },
  "/insights": {
    title: "AI, Automation & Software Insights | Oglas AI",
    description:
      "Explore insights from Oglas AI on custom software development, AI adoption, ERP, workflow automation, computer vision, and digital transformation for modern businesses.",
  },
  "/about": {
    title: "About Oglas AI | Custom Software & AI Company",
    description:
      "Learn about Oglas AI, a Dubai-based custom software and AI solutions company helping businesses streamline operations through automation, intelligent software, and practical AI.",
  },
  "/contact": {
    title: "Contact Oglas AI | Custom Software & AI Solutions",
    description:
      "Book a free consultation with Oglas AI to discuss custom software development, AI solutions, ERP systems, workflow automation, and business technology tailored to your needs.",
  },
  "/privacy": {
    description:
      "Read the Oglas AI Privacy Policy to learn how we collect, use, and protect your personal information when you use our website or contact us.",
  },
};

export const serviceSeo: Record<string, SeoEntry> = {
  "erp-payroll-automation": {
    title: "ERP & Payroll Software Solutions | Oglas AI",
    description:
      "Streamline HR and business operations with custom ERP and payroll software. Oglas AI builds solutions for payroll, attendance, approvals, leave management, and workforce automation.",
  },
  "intelligent-computer-vision": {
    title: "Computer Vision Solutions | Oglas AI",
    description:
      "Develop AI-powered computer vision solutions for safety, monitoring, object detection, compliance, counting, and operational visibility with Oglas AI.",
  },
  "workflow-automation": {
    title: "Workflow Automation Solutions | Oglas AI",
    description:
      "Automate approvals, document routing, notifications, and repetitive tasks with custom workflow automation solutions that improve efficiency and streamline business operations.",
  },
  "marketing-automation": {
    title: "Marketing Automation Solutions | Oglas AI",
    description:
      "Streamline lead management, campaign workflows, CRM updates, and reporting with custom marketing automation solutions designed to improve efficiency and customer engagement.",
  },
  "ess-hr-portals": {
    title: "Employee Self-Service (ESS) & HR Portals | Oglas AI",
    description:
      "Build custom employee self-service (ESS) and HR portals for leave requests, document access, approvals, HR communication, and employee workflows with Oglas AI.",
  },
  "ai-dashboards-decision-intelligence": {
    title: "AI Dashboards & Business Intelligence | Oglas AI",
    description:
      "Build AI-powered dashboards with real-time reporting, predictive insights, KPI tracking, and business intelligence to support faster, data-driven decisions.",
  },
  "ai-document-processing": {
    title: "Intelligent Document Processing (IDP) | Oglas AI",
    description:
      "Automate document extraction, classification, verification, and approval with intelligent document processing (IDP) solutions powered by AI and OCR.",
  },
  "ai-chatbots-knowledge-assistants": {
    title: "AI Chatbot Solutions | Oglas AI",
    description:
      "Build secure AI chatbots and knowledge assistants for customer support, employee self-service, HR helpdesks, internal knowledge bases, and business operations.",
  },
};

export const insightSeo: Record<string, SeoEntry> = {
  "what-to-automate-before-ai": {
    title: "What to Automate Before Investing in AI | Oglas AI",
    description:
      "Learn which business processes UAE companies should automate before adopting AI. Discover how workflow automation, clean data, and streamlined operations improve AI success.",
  },
  "computer-vision-operational-intelligence": {
    title: "How Computer Vision Improves Business Operations | Oglas AI",
    description:
      "Learn how AI-powered computer vision transforms camera feeds into real-time alerts, operational insights, automated monitoring, and business intelligence.",
  },
  "payroll-erp-foundation": {
    title: "Why Payroll Should Be Part of Your ERP System | Oglas AI",
    description:
      "Learn why integrating payroll into your ERP system improves HR, attendance, finance, approvals, and compliance while reducing manual work and operational inefficiencies.",
  },
};
