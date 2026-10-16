export interface Platform {
  id: string;
  name: string;
  tagline: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  altText: string;
  productUrl: string;
  demoUrl: string;
  highlights: string[];
  metrics?: { label: string; value: string }[];
  featuredLayout: "primary" | "secondary" | "split";
}

export const FEATURED_PLATFORMS: Platform[] = [
  {
    id: "multicart",
    name: "iScripts MultiCart",
    tagline: "Multi-vendor shopping cart & marketplace software",
    category: "Ecommerce & Marketplaces",
    shortDescription:
      "A complete multi-vendor ecommerce platform allowing multiple sellers to create storefronts, manage catalogs, and process orders under one unified marketplace.",
    fullDescription:
      "MultiCart equips entrepreneurs with everything needed to operate an Amazon or Etsy style commerce network. Sellers receive dedicated dashboards for inventory, pricing, and order fulfillment, while marketplace operators retain automated commission split controls, unified checkout, and comprehensive payout auditing.",
    image: "/images/multicart_bnr.webp",
    altText: "iScripts MultiCart marketplace software interface",
    productUrl: "https://www.iscripts.com/multicart/",
    demoUrl: "https://www.iscripts.com/multicart/demo.php",
    highlights: [
      "Individual vendor storefronts with independent catalogs",
      "Automated split payments and flexible commission tiers",
      "Unified customer cart with single multi-vendor checkout",
      "Companion native iOS and Android customer and vendor apps",
    ],
    metrics: [
      { label: "Deployment Type", value: "Self-Hosted / Cloud" },
      { label: "Source Access", value: "100% Unencrypted" },
      { label: "Mobile Apps", value: "iOS & Android" },
    ],
    featuredLayout: "primary",
  },
  {
    id: "uberforx",
    name: "iScripts UberforX",
    tagline: "On-demand dispatch & service booking platform",
    category: "On-Demand Services",
    shortDescription:
      "Real-time dispatch and scheduling software for service businesses, home maintenance, roadside assistance, healthcare visits, or courier operations.",
    fullDescription:
      "Built for businesses requiring geolocation matching and immediate job dispatch. The platform coordinates customers and independent contractors through synchronized mobile apps, real-time map tracking, fare calculation, and instant payment settlement.",
    image: "/images/banner_uberforx.webp",
    altText: "iScripts UberforX on-demand services platform",
    productUrl: "https://www.iscripts.com/uberforx/",
    demoUrl: "https://www.iscripts.com/uberforx/demo.php",
    highlights: [
      "Live GPS tracking with dynamic contractor dispatch",
      "Dual applications: Service Provider and Customer apps",
      "Real-time fare calculation, surcharges, and gratuity",
      "In-app push notifications and booking schedule management",
    ],
    metrics: [
      { label: "Matching Logic", value: "Radius / Nearest" },
      { label: "Tracking", value: "Real-Time GPS" },
    ],
    featuredLayout: "secondary",
  },
  {
    id: "netmenus",
    name: "iScripts NetMenus",
    tagline: "Multi-restaurant ordering & menu management",
    category: "Food & Restaurant",
    shortDescription:
      "A city or regional food portal enabling restaurants to list menus, accept takeout and delivery orders, manage table reservations, and coordinate drivers.",
    fullDescription:
      "NetMenus brings local culinary businesses under one digital roof. Features include live kitchen order alerts, customizable menu modifiers, scheduled delivery windows, and automated split billing for franchise networks.",
    image: "/images/banner_netmenus.webp",
    altText: "iScripts NetMenus restaurant ordering platform",
    productUrl: "https://www.iscripts.com/netmenus/",
    demoUrl: "https://www.iscripts.com/netmenus/demo.php",
    highlights: [
      "Menu builder with dish modifiers, combos, and specials",
      "Takeout, delivery, catering, and table reservation flows",
      "Kitchen receipt printing and merchant notification terminals",
      "Delivery zone mapping and flat or distance-based fees",
    ],
    metrics: [
      { label: "Order Modes", value: "Delivery / Pickup / Dine-in" },
      { label: "Integration", value: "POS & Thermal Printers" },
    ],
    featuredLayout: "secondary",
  },
  {
    id: "locologic",
    name: "iScripts Locologic",
    tagline: "3PL delivery & last-mile logistics management",
    category: "Logistics & Delivery",
    shortDescription:
      "Dispatch console and mobile driver toolkit engineered for 3PL providers, courier companies, and last-mile distribution centers.",
    fullDescription:
      "Coordinate high-density urban deliveries with intelligent route optimization, automated vehicle load assignment, barcode scanning, proof-of-delivery capture, and live tracking portals for end recipients and corporate shippers.",
    image: "/images/banner_locologic.webp",
    altText: "iScripts Locologic 3PL logistics and delivery management",
    productUrl: "https://www.iscripts.com/locologic/",
    demoUrl: "https://www.iscripts.com/locologic/demo.php",
    highlights: [
      "Automated route sequencing and multi-stop dispatch",
      "Driver companion app with turn-by-turn navigation",
      "Digital proof-of-delivery (signature & photo capture)",
      "Dedicated supplier web console for warehouse cross-docking",
    ],
    metrics: [
      { label: "Optimization", value: "Multi-Stop Routing" },
      { label: "Proof of Delivery", value: "Photo + Signature" },
    ],
    featuredLayout: "split",
  },
];

export interface BusinessModel {
  id: string;
  title: string;
  description: string;
  suggestedPlatform: string;
  platformLink: string;
  iconType: "marketplace" | "dispatch" | "food" | "logistics" | "store" | "barter";
}

export const BUSINESS_MODELS: BusinessModel[] = [
  {
    id: "marketplace",
    title: "Launch a multi-vendor marketplace",
    description:
      "Enable independent vendors to sell their physical or digital catalog with automated commission splits, seller dashboards, and single-cart checkout.",
    suggestedPlatform: "iScripts MultiCart",
    platformLink: "https://www.iscripts.com/multicart/",
    iconType: "marketplace",
  },
  {
    id: "on-demand",
    title: "Build an on-demand service business",
    description:
      "Deploy instant and scheduled dispatch for contractors, home services, healthcare, rides, or mobile technicians with real-time GPS tracking.",
    suggestedPlatform: "iScripts UberforX",
    platformLink: "https://www.iscripts.com/uberforx/",
    iconType: "dispatch",
  },
  {
    id: "restaurant",
    title: "Start an online restaurant network",
    description:
      "Aggregate local eateries with online ordering, kitchen management, takeout, delivery routing, and dining reservation workflows.",
    suggestedPlatform: "iScripts NetMenus",
    platformLink: "https://www.iscripts.com/netmenus/",
    iconType: "food",
  },
  {
    id: "logistics",
    title: "Manage 3PL & courier deliveries",
    description:
      "Equip your delivery fleet with automated dispatch, multi-stop route sequencing, driver mobile apps, and recipient tracking links.",
    suggestedPlatform: "iScripts Locologic",
    platformLink: "https://www.iscripts.com/locologic/",
    iconType: "logistics",
  },
  {
    id: "store-builder",
    title: "Create a multi-tenant store builder",
    description:
      "Provide SMBs with branded ecommerce stores on subdomains, recurring subscription plans, and central administrative controls.",
    suggestedPlatform: "iScripts GoStores",
    platformLink: "https://www.iscripts.com/gostores/",
    iconType: "store",
  },
  {
    id: "barter",
    title: "Operate a barter & swap exchange",
    description:
      "Launch a trading community where members swap goods, services, or trade items directly using flexible escrow and points systems.",
    suggestedPlatform: "iScripts eSwap",
    platformLink: "https://www.iscripts.com/eswap/",
    iconType: "barter",
  },
];
