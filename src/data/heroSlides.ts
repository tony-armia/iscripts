export interface HeroSlide {
  id: string;
  index: string; // e.g. "01"
  number: number;
  productName: string;
  navSubtitle: string;
  category: string;
  headlineLine1: string;
  headlineHighlight: string;
  headlineLine2: string;
  description: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  image: string;
  altText: string;
  features: { title: string; subtitle: string }[];
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "multicart",
    index: "01",
    number: 1,
    productName: "MultiCart",
    navSubtitle: "Multi-vendor ecommerce",
    category: "Ecommerce & Marketplaces",
    headlineLine1: "Your marketplace.",
    headlineHighlight: "Ready to",
    headlineLine2: "take shape.",
    description:
      "Launch a multi-vendor ecommerce business with a customizable platform built for products, sellers, and marketplace operations.",
    primaryCtaText: "Explore MultiCart",
    primaryCtaHref: "https://www.iscripts.com/multicart/",
    secondaryCtaText: "Talk to an Expert",
    image: "/images/multicart_bnr.webp",
    altText: "iScripts MultiCart marketplace software interface and mobile storefront",
    features: [
      { title: "Multi-vendor catalog", subtitle: "Manage sellers easily" },
      { title: "Commission split", subtitle: "Automated payouts" },
      { title: "Mobile storefronts", subtitle: "iOS & Android apps" },
    ],
  },
  {
    id: "uberforx",
    index: "02",
    number: 2,
    productName: "UberforX",
    navSubtitle: "On-demand services",
    category: "On-Demand Services",
    headlineLine1: "A better",
    headlineHighlight: "starting point",
    headlineLine2: "for on-demand.",
    description:
      "Build a service marketplace that connects customers with providers through workflows tailored to your business.",
    primaryCtaText: "Explore UberforX",
    primaryCtaHref: "https://www.iscripts.com/uberforx/",
    secondaryCtaText: "Talk to an Expert",
    image: "/images/banner_uberforx.webp",
    altText: "iScripts UberforX on-demand dispatch console and mobile app",
    features: [
      { title: "Real-time dispatch", subtitle: "Geolocation tracking" },
      { title: "Dual app suite", subtitle: "Providers & customers" },
      { title: "Custom booking", subtitle: "Tailored service flows" },
    ],
  },
  {
    id: "netmenus",
    index: "03",
    number: 3,
    productName: "NetMenus",
    navSubtitle: "Restaurant ordering",
    category: "Restaurant Ordering",
    headlineLine1: "Bring your",
    headlineHighlight: "restaurant business",
    headlineLine2: "online.",
    description:
      "Create a restaurant ordering experience with customizable menus, order management, and delivery workflows.",
    primaryCtaText: "Explore NetMenus",
    primaryCtaHref: "https://www.iscripts.com/netmenus/",
    secondaryCtaText: "Talk to an Expert",
    image: "/images/banner_netmenus.webp",
    altText: "iScripts NetMenus online restaurant ordering platform and mobile ordering app",
    features: [
      { title: "Menu management", subtitle: "Modifiers & categories" },
      { title: "Multi-channel orders", subtitle: "Takeout, dine-in & delivery" },
      { title: "Kitchen dispatch", subtitle: "POS ready alerts" },
    ],
  },
  {
    id: "locologic",
    index: "04",
    number: 4,
    productName: "Locologic",
    navSubtitle: "Delivery & logistics",
    category: "Logistics & Dispatch",
    headlineLine1: "Bring every",
    headlineHighlight: "delivery",
    headlineLine2: "into focus.",
    description:
      "Manage logistics, dispatching, and delivery operations from one adaptable platform built to support growing businesses.",
    primaryCtaText: "Explore Locologic",
    primaryCtaHref: "https://www.iscripts.com/locologic/",
    secondaryCtaText: "Talk to an Expert",
    image: "/images/banner_locologic.webp",
    altText: "iScripts Locologic delivery management dashboard and driver mobile app",
    features: [
      { title: "Dispatch & tracking", subtitle: "Streamline operations" },
      { title: "Multi-branch support", subtitle: "Manage teams easily" },
      { title: "Customisable workflows", subtitle: "Adapt to your business" },
    ],
  },
];
