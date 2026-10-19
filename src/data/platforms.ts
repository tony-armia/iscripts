export interface Platform {
  id: string;
  name: string;
  tagline: string;
  category: "Marketplaces" | "On-Demand" | "Ecommerce" | "Logistics" | "Social";
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  altText: string;
  productUrl: string;
  demoUrl: string;
  highlights: string[];
  metrics?: { label: string; value: string }[];
  featuredLayout?: "primary" | "secondary" | "split";
}

export const FEATURED_PLATFORMS: Platform[] = [
  {
    id: "multicart",
    name: "iScripts MultiCart",
    tagline: "Multi-Vendor Shopping Cart & Marketplace Platform",
    category: "Marketplaces",
    categoryLabel: "Marketplaces",
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
      "Companion native iOS and Android apps for buyers and sellers",
    ],
    metrics: [
      { label: "Architecture", value: "PHP & MySQL" },
      { label: "Source Access", value: "100% Unencrypted" },
      { label: "Mobile Apps", value: "iOS & Android" },
    ],
    featuredLayout: "primary",
  },
  {
    id: "uberforx",
    name: "iScripts UberforX",
    tagline: "On-Demand Services & Geolocation Dispatch Marketplace",
    category: "On-Demand",
    categoryLabel: "On-Demand",
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
    tagline: "Restaurant Menu Management & Multi-Eatery Ordering",
    category: "On-Demand",
    categoryLabel: "Food & Restaurant",
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
    tagline: "3PL Delivery & Last-Mile Logistics Management System",
    category: "Logistics",
    categoryLabel: "Logistics",
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
  {
    id: "eswap",
    name: "iScripts eSwap",
    tagline: "Peer-to-Peer Barter Exchange & Swap Community Platform",
    category: "Marketplaces",
    categoryLabel: "Barter & Trade",
    shortDescription:
      "A feature-rich trading network where users swap, barter, or buy items with integrated escrow, valuation points, and escrow protections.",
    fullDescription:
      "eSwap powers collaborative consumption marketplaces. Users can negotiate item trades, balance trade differentials with cash or platform reward points, and rate trading partners through community reputation scores.",
    image: "/images/banner_eswap.webp",
    altText: "iScripts eSwap barter exchange platform",
    productUrl: "https://www.iscripts.com/eswap/",
    demoUrl: "https://www.iscripts.com/eswap/demo.php",
    highlights: [
      "Multi-item barter proposals with cash-difference balances",
      "Optional points and virtual currency accounting system",
      "Built-in escrow workflow for verified goods exchange",
      "Member dispute mediation and feedback rating system",
    ],
    metrics: [
      { label: "Transaction Mode", value: "Barter / Cash / Points" },
      { label: "Security", value: "Escrow Protection" },
    ],
    featuredLayout: "secondary",
  },
  {
    id: "printlogic",
    name: "iScripts PrintLogic",
    tagline: "Online Web-to-Print & Custom Design Merchandise Platform",
    category: "Ecommerce",
    categoryLabel: "Web-to-Print",
    shortDescription:
      "Web-to-print solution featuring an interactive HTML5 design studio for business cards, apparel, banners, and promotional merchandise.",
    fullDescription:
      "Empower customers to design customized print products directly in their browser. PrintLogic automates prepress PDF rendering, CMYK color profiles, bleed line validation, and print vendor routing.",
    image: "/images/printlogic-back.png",
    altText: "iScripts PrintLogic web-to-print software",
    productUrl: "https://www.iscripts.com/printlogic/",
    demoUrl: "https://www.iscripts.com/printlogic/demo.php",
    highlights: [
      "Interactive HTML5 vector canvas with clipart & typography",
      "Print-ready high-resolution PDF generation with bleed margins",
      "Automated pricing matrix based on paper stock, quantity, and finish",
      "Multi-printer routing and supplier job ticketing",
    ],
    metrics: [
      { label: "Design Canvas", value: "HTML5 Vector Studio" },
      { label: "Output", value: "Print-Ready Vector PDF" },
    ],
    featuredLayout: "secondary",
  },
  {
    id: "gostores",
    name: "iScripts GoStores",
    tagline: "Multi-Tenant Hosted Store Builder & SaaS Ecommerce Engine",
    category: "Ecommerce",
    categoryLabel: "Store Builder SaaS",
    shortDescription:
      "Launch your own Shopify-like hosted ecommerce platform, allowing SMBs to subscribe, select themes, and launch online stores.",
    fullDescription:
      "GoStores enables entrepreneurs to become SaaS ecommerce providers. Platform tenants get isolated storefronts, custom domain mapping, product catalog controls, and integrated payment gateways while you collect recurring subscription revenue.",
    image: "/images/webtoolkit1.webp",
    altText: "iScripts GoStores hosted ecommerce platform builder",
    productUrl: "https://www.iscripts.com/gostores/",
    demoUrl: "https://www.iscripts.com/gostores/demo.php",
    highlights: [
      "Multi-tenant architecture with automated subdomain provisioning",
      "Subscription billing management with recurring recurring plans",
      "Theme customization engine and mobile-responsive templates",
      "Central super-admin dashboard for tenant management and analytics",
    ],
    metrics: [
      { label: "Business Model", value: "Recurring SaaS Billing" },
      { label: "Tenancy", value: "Isolated Merchant Stores" },
    ],
    featuredLayout: "secondary",
  },
  {
    id: "socialware",
    name: "iScripts SocialWare",
    tagline: "Community Network & Private Social Engagement Platform",
    category: "Social",
    categoryLabel: "Social Network",
    shortDescription:
      "Enterprise social networking software for alumni networks, professional associations, niche hobbyist groups, and creator communities.",
    fullDescription:
      "Build a branded social ecosystem free from third-party algorithm restrictions. Features activity feeds, user groups, private messaging, media sharing, event calendars, and community monetization tools.",
    image: "/images/home-screen.png",
    altText: "iScripts SocialWare community software platform",
    productUrl: "https://www.iscripts.com/socialware/",
    demoUrl: "https://www.iscripts.com/socialware/demo.php",
    highlights: [
      "Dynamic activity feed with rich media posts, likes, and comments",
      "Public and private interest-based groups with moderator tools",
      "Real-time instant chat and direct messaging channels",
      "Monetization through paid memberships and sponsored placements",
    ],
    metrics: [
      { label: "Community", value: "Feeds, Groups, Messaging" },
      { label: "Ownership", value: "100% Private Data" },
    ],
    featuredLayout: "secondary",
  },
  {
    id: "multicart-enterprise",
    name: "iScripts MultiCart Enterprise",
    tagline: "High-Volume B2B & Wholesale Multi-Vendor Commerce Engine",
    category: "Marketplaces",
    categoryLabel: "Enterprise B2B",
    shortDescription:
      "Enterprise edition of MultiCart built for wholesale distributors, B2B procurement networks, and multi-warehouse supply chains.",
    fullDescription:
      "Engineered for high-volume corporate transactions with tiered wholesale pricing, purchase order approvals, credit limit terms, and multi-warehouse distribution routing across nationwide vendor networks.",
    image: "/images/multicart_bnr.webp",
    altText: "iScripts MultiCart Enterprise B2B wholesale platform",
    productUrl: "https://www.iscripts.com/multicart-enterprise/",
    demoUrl: "https://www.iscripts.com/multicart/demo.php",
    highlights: [
      "B2B quote requests, custom price tiers, and bulk order discounts",
      "Purchase order (PO) workflows and net payment terms",
      "Multi-warehouse inventory routing and split shipment fulfillment",
      "ERP and accounting integration hooks for automated reconciliation",
    ],
    metrics: [
      { label: "Scale", value: "High-Volume B2B" },
      { label: "Workflows", value: "Quotes & Net Terms" },
    ],
    featuredLayout: "secondary",
  },
];
