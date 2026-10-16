export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  productUsed: string;
  isFeatured?: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I really appreciate you from the initial point of contact all the way through the thorough detail you and your team at iScripts have given me on my project. I couldn't be a happier client!",
    author: "Garrett Richardson",
    role: "Founder",
    company: "HoopCliq.com",
    productUsed: "Customized Social & Community Platform",
    isFeatured: true,
  },
  {
    quote:
      "I engaged iScripts to design a customized version of PrintLogic for my company and the follow up from contract initiation to go live was a very smooth process. The team at iScripts were very accommodating.",
    author: "Kai Lo",
    role: "Managing Director",
    company: "Scubadge.com",
    productUsed: "iScripts PrintLogic",
  },
  {
    quote:
      "iScripts was a game changer for me. I knew what I wanted to do and how I wanted to do it. The challenge for me was to cost-effectively build the application. I looked at a number of different options before finalizing iScripts platform.",
    author: "Mike Serrano",
    role: "Chief Executive",
    company: "Classroom2Classroom.com",
    productUsed: "iScripts MultiCart",
  },
];

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  details: string[];
}

export const HOW_IT_WORKS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Choose your platform",
    description:
      "Explore existing software platforms and select the architectural foundation that matches your core business model.",
    details: [
      "Review functional demos and mobile companion apps",
      "Validate technical requirements and licensing options",
      "Evaluate included workflows, vendor portals, and APIs",
    ],
  },
  {
    step: "02",
    title: "Make it yours",
    description:
      "Configure your settings or collaborate with our engineering team to adapt design, workflows, and integrations to your exact specifications.",
    details: [
      "White-label the frontend with your custom branding",
      "Integrate regional payment gateways and SMS providers",
      "Modify business logic or commission structures as needed",
    ],
  },
  {
    step: "03",
    title: "Prepare to launch",
    description:
      "Deploy onto your cloud infrastructure or server with our free installation service and launch with dedicated technical backup.",
    details: [
      "Free script installation performed by our systems team",
      "Rigorous end-to-end integration and smoke testing",
      "Ongoing technical support and code maintainability",
    ],
  },
];

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    id: "customization",
    question: "Can I customize an iScripts platform?",
    answer:
      "Yes. iScripts software is explicitly engineered to be customized. You can modify the front-end user experience, adapt business logic, introduce new integrations, or connect your existing systems. You can make these adjustments internally with your own developers or hire our in-house customization team.",
  },
  {
    id: "source-code",
    question: "Do I get access to the source code?",
    answer:
      "Yes. We deliver unencrypted source code with commercial licenses so you maintain long-term independence. You have full visibility into the codebase, database schemas, and architectural patterns without proprietary runtime locks.",
  },
  {
    id: "installation",
    question: "Can iScripts help with server installation?",
    answer:
      "Yes, we provide complimentary installation on compatible web hosting and cloud environments (such as AWS, DigitalOcean, or standard Linux VPS environments). Our technical engineers configure the database, server dependencies, cron jobs, and mail handlers to ensure your platform starts cleanly.",
  },
  {
    id: "mobile-apps",
    question: "Are mobile applications available for these platforms?",
    answer:
      "Yes. Many core iScripts platforms—including MultiCart, UberforX, NetMenus, and Locologic—offer companion mobile applications for iOS and Android. Mobile apps can be white-labeled, customized, and published under your organization's own App Store and Google Play developer accounts.",
  },
  {
    id: "custom-requests",
    question: "Can I request custom functionality before purchasing?",
    answer:
      "Absolutely. Our solutions engineers can review your scope of work, wireframes, or feature wishlist and provide a transparent quotation that combines the base platform license with dedicated customization hours.",
  },
  {
    id: "hosting",
    question: "Where can the software be hosted?",
    answer:
      "You are never locked into proprietary hosting. iScripts platforms run on standard Linux environments with PHP and MySQL/MariaDB. You can host on AWS, Google Cloud, Microsoft Azure, VPS providers, or dedicated servers of your choice.",
  },
];

export const COMPANY_STATS = [
  { value: "15+", label: "Years in business" },
  { value: "150+", label: "Software engineers" },
  { value: "8,000+", label: "Deployments worldwide" },
  { value: "25+", label: "Turnkey platforms catered" },
];

export const COMPANY_CONTACT = {
  addressLine1: "1020 Milwaukee Ave, Suite 245",
  addressLine2: "Deerfield, IL 60015, United States",
  salesEmail: "sales@iscripts.com",
  directPhone: "1-(312)-423-6728",
  tollFreePhone: "1-(800)-569-5538",
  hours: "Monday – Friday, 9:00 AM – 6:00 PM CST",
  parentCompany: "Armia Systems, Inc.",
};
