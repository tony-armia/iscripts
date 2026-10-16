export interface BusinessModelBenefit {
  icon: 'users' | 'chart' | 'cart' | 'tag' | 'map' | 'smartphone' | 'calendar' | 'shield' | 'layers' | 'truck' | 'printer' | 'clock' | 'compass' | 'check' | 'navigation' | 'bell' | 'globe' | 'repeat' | 'palette' | 'sliders' | 'refresh' | 'lock' | 'credit' | 'message';
  text: string;
}

export interface BusinessModelItem {
  id: string;
  index: string; // e.g. "01"
  mobileTabLabel: string;
  modelTitle: string;
  modelShortDesc: string;
  iconType: 'marketplace' | 'dispatch' | 'food' | 'logistics' | 'store' | 'barter';
  platformName: string;
  platformHeading: string;
  platformDescription: string;
  image: string;
  altText: string;
  benefits: BusinessModelBenefit[];
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
}

export const BUSINESS_MODEL_ITEMS: BusinessModelItem[] = [
  {
    id: 'marketplace',
    index: '01',
    mobileTabLabel: '01 Marketplace',
    modelTitle: 'Launch a multi-vendor marketplace',
    modelShortDesc:
      'Enable independent vendors to sell with commission splits, dashboards, and single-cart checkout.',
    iconType: 'marketplace',
    platformName: 'iScripts MultiCart',
    platformHeading: 'Launch a multi-vendor marketplace',
    platformDescription:
      'Enable independent vendors to sell their physical or digital catalog with automated commission splits, seller dashboards, and single-cart checkout.',
    image: '/images/multicart_bnr.webp',
    altText: 'iScripts MultiCart marketplace software interface and mobile storefront',
    benefits: [
      { icon: 'users', text: 'Multi-vendor stores and commissions' },
      { icon: 'chart', text: 'Seller dashboards and order management' },
      { icon: 'cart', text: 'Single-cart checkout experience' },
      { icon: 'tag', text: 'Branded marketplace with flexible categories' },
    ],
    primaryCtaText: 'Explore MultiCart',
    primaryCtaHref: 'https://www.iscripts.com/multicart/',
    secondaryCtaText: 'View platform details',
    secondaryCtaHref: 'https://www.iscripts.com/multicart/demo.php',
  },
  {
    id: 'on-demand',
    index: '02',
    mobileTabLabel: '02 On-Demand',
    modelTitle: 'Build an on-demand service business',
    modelShortDesc:
      'Deploy instant and scheduled dispatch for contractors, home services, healthcare, rides, or mobile technicians.',
    iconType: 'dispatch',
    platformName: 'iScripts UberforX',
    platformHeading: 'Build an on-demand service business',
    platformDescription:
      'Connect customers with verified service professionals through automated geolocation dispatch, upfront pricing, and real-time job progress tracking.',
    image: '/images/banner_uberforx.webp',
    altText: 'iScripts UberforX on-demand service dispatch software and provider app',
    benefits: [
      { icon: 'map', text: 'Real-time dispatch and GPS tracking' },
      { icon: 'smartphone', text: 'Dedicated customer and provider mobile apps' },
      { icon: 'calendar', text: 'Instant or scheduled appointment booking' },
      { icon: 'shield', text: 'Automated payouts and ratings system' },
    ],
    primaryCtaText: 'Explore UberforX',
    primaryCtaHref: 'https://www.iscripts.com/uberforx/',
    secondaryCtaText: 'View platform details',
    secondaryCtaHref: 'https://www.iscripts.com/uberforx/demo.php',
  },
  {
    id: 'restaurant',
    index: '03',
    mobileTabLabel: '03 Restaurant',
    modelTitle: 'Start an online restaurant network',
    modelShortDesc:
      'Aggregate local eateries with online ordering, kitchen management, delivery routing, and reservations.',
    iconType: 'food',
    platformName: 'iScripts NetMenus',
    platformHeading: 'Start an online restaurant network',
    platformDescription:
      'Empower multiple restaurants to accept commission-free online food orders, customize modifier menus, and coordinate kitchen-to-doorstep delivery.',
    image: '/images/banner_netmenus.webp',
    altText: 'iScripts NetMenus multi-restaurant online ordering system and customer app',
    benefits: [
      { icon: 'layers', text: 'Custom menu modifiers and combos' },
      { icon: 'truck', text: 'Takeout, dine-in and delivery workflows' },
      { icon: 'printer', text: 'Thermal printer and kitchen POS integration' },
      { icon: 'clock', text: 'Live order tracking with estimated prep times' },
    ],
    primaryCtaText: 'Explore NetMenus',
    primaryCtaHref: 'https://www.iscripts.com/netmenus/',
    secondaryCtaText: 'View platform details',
    secondaryCtaHref: 'https://www.iscripts.com/netmenus/demo.php',
  },
  {
    id: 'logistics',
    index: '04',
    mobileTabLabel: '04 Logistics',
    modelTitle: 'Manage 3PL & courier deliveries',
    modelShortDesc:
      'Equip your delivery fleet with automated dispatch, multi-stop routing, driver apps, and tracking links.',
    iconType: 'logistics',
    platformName: 'iScripts Locologic',
    platformHeading: 'Manage 3PL & courier deliveries',
    platformDescription:
      'Coordinate end-to-end logistics with intelligent route optimization, real-time driver telemetry, dynamic dispatch, and digital proof-of-delivery.',
    image: '/images/banner_locologic.webp',
    altText: 'iScripts Locologic last-mile dispatch dashboard and driver mobile app',
    benefits: [
      { icon: 'compass', text: 'Multi-stop dynamic route optimization' },
      { icon: 'check', text: 'Proof-of-delivery with signature & photo' },
      { icon: 'navigation', text: 'Turn-by-turn driver app navigation' },
      { icon: 'bell', text: 'Customer SMS alerts with live tracking map' },
    ],
    primaryCtaText: 'Explore Locologic',
    primaryCtaHref: 'https://www.iscripts.com/locologic/',
    secondaryCtaText: 'View platform details',
    secondaryCtaHref: 'https://www.iscripts.com/locologic/demo.php',
  },
  {
    id: 'store-builder',
    index: '05',
    mobileTabLabel: '05 Store Builder',
    modelTitle: 'Create a multi-tenant store builder',
    modelShortDesc:
      'Provide SMBs with branded ecommerce stores on subdomains, recurring plans, and admin controls.',
    iconType: 'store',
    platformName: 'iScripts GoStores',
    platformHeading: 'Create a multi-tenant store builder',
    platformDescription:
      'Run a hosted ecommerce platform similar to Shopify, enabling merchants to sign up, build storefronts, and manage product catalogs on custom subdomains.',
    image: '/images/webtoolkit1.webp',
    altText: 'iScripts GoStores hosted online store builder and merchant admin console',
    benefits: [
      { icon: 'globe', text: 'Automated subdomain store provisioning' },
      { icon: 'repeat', text: 'Tiered monthly merchant subscription billing' },
      { icon: 'palette', text: 'Customizable themes and responsive storefronts' },
      { icon: 'sliders', text: 'Central administrator oversight and billing' },
    ],
    primaryCtaText: 'Explore GoStores',
    primaryCtaHref: 'https://www.iscripts.com/gostores/',
    secondaryCtaText: 'View platform details',
    secondaryCtaHref: 'https://www.iscripts.com/gostores/',
  },
  {
    id: 'barter',
    index: '06',
    mobileTabLabel: '06 Barter & Swap',
    modelTitle: 'Operate a barter & swap exchange',
    modelShortDesc:
      'Launch a trading community where members swap goods, services, or trade items using escrow and points systems.',
    iconType: 'barter',
    platformName: 'iScripts eSwap',
    platformHeading: 'Operate a barter & swap exchange',
    platformDescription:
      'Facilitate multi-party item exchanges, direct swap proposals, and cashless trading communities backed by virtual points and transaction escrow.',
    image: '/images/banner_eswap.webp',
    altText: 'iScripts eSwap online barter marketplace interface and swap negotiation app',
    benefits: [
      { icon: 'refresh', text: 'Direct item-for-item and item-plus-cash swaps' },
      { icon: 'lock', text: 'Escrow protection for secure member exchanges' },
      { icon: 'credit', text: 'Virtual points and trade-credit economy' },
      { icon: 'message', text: 'Integrated counter-offer negotiation engine' },
    ],
    primaryCtaText: 'Explore eSwap',
    primaryCtaHref: 'https://www.iscripts.com/eswap/',
    secondaryCtaText: 'View platform details',
    secondaryCtaHref: 'https://www.iscripts.com/eswap/demo.php',
  },
];
