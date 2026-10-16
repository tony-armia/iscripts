export interface NavItem {
  label: string;
  href: string;
  description?: string;
  tag?: string;
}

export interface NavCategory {
  title: string;
  items: NavItem[];
}

export const PLATFORM_CATEGORIES: NavCategory[] = [
  {
    title: "Ecommerce & Marketplaces",
    items: [
      {
        label: "iScripts MultiCart",
        href: "https://www.iscripts.com/multicart/",
        description: "Multi-vendor shopping cart with vendor portals & split payouts.",
      },
      {
        label: "iScripts eSwap",
        href: "https://www.iscripts.com/eswap/",
        description: "Barter exchange platform with escrow and virtual points economy.",
      },
      {
        label: "iScripts GoStores",
        href: "https://www.iscripts.com/gostores/",
        description: "Hosted multi-tenant store builder with automated provisioning.",
      },
      {
        label: "iScripts MultiCart Enterprise",
        href: "https://www.iscripts.com/multicart-enterprise/",
        description: "Enterprise multi-vendor platform for high-volume commerce.",
      },
    ],
  },
  {
    title: "On-Demand & Services",
    items: [
      {
        label: "iScripts UberforX",
        href: "https://www.iscripts.com/uberforx/",
        description: "On-demand dispatch marketplace for services and booking.",
      },
      {
        label: "iScripts SocialWallet",
        href: "https://www.iscripts.com/socialwallet/",
        description: "Peer-to-peer micro-lending and community financing network.",
      },
    ],
  },
  {
    title: "Food & Restaurant",
    items: [
      {
        label: "iScripts NetMenus",
        href: "https://www.iscripts.com/netmenus/",
        description: "Multi-restaurant menu management, ordering, and table booking.",
      },
    ],
  },
  {
    title: "Logistics & Delivery",
    items: [
      {
        label: "iScripts Locologic",
        href: "https://www.iscripts.com/locologic/",
        description: "3PL last-mile delivery tracking and dispatch management.",
      },
      {
        label: "iScripts PrintLogic",
        href: "https://www.iscripts.com/printlogic/",
        description: "Web-to-print online product designer and print order platform.",
      },
      {
        label: "iScripts ReserveLogic",
        href: "https://www.iscripts.com/reservelogic/",
        description: "Hotel reservation and hospitality booking management.",
      },
    ],
  },
];

export const SOLUTIONS_ITEMS: NavItem[] = [
  {
    label: "Launch a Marketplace",
    href: "#featured-platforms",
    description: "Build an Amazon or Etsy style multi-vendor commerce platform.",
  },
  {
    label: "On-Demand Service Platforms",
    href: "#featured-platforms",
    description: "Connect customers with verified service providers in real time.",
  },
  {
    label: "Restaurant & Food Delivery",
    href: "#featured-platforms",
    description: "Launch a city-wide multi-restaurant takeout and ordering service.",
  },
  {
    label: "3PL & Last-Mile Delivery",
    href: "#featured-platforms",
    description: "Route optimization and live courier tracking for logistics.",
  },
  {
    label: "Barter & Item Exchange",
    href: "#featured-platforms",
    description: "Community swapping platform with virtual credits and escrow.",
  },
];

export const SERVICES_ITEMS: NavItem[] = [
  {
    label: "Software Customization",
    href: "https://www.iscripts.com/customization.php",
    description: "Adapt branding, business logic, workflows, and database models.",
  },
  {
    label: "Custom Programming",
    href: "https://www.iscripts.com/customdevelopment.php",
    description: "Build custom features and integrations onto existing platforms.",
  },
  {
    label: "Dedicated Development",
    href: "https://www.iscripts.com/dedicated-development-services.php",
    description: "Dedicated full-stack engineers managed directly with your team.",
  },
  {
    label: "Free Script Installation",
    href: "https://www.iscripts.com/installation.php",
    description: "Zero-cost setup on your server or cloud infrastructure.",
  },
];
