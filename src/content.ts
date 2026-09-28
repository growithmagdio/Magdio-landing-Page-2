// Use only verified results, screenshots and genuine testimonials.

export interface StatItem {
  number: string;
  label: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  business: string;
  challenge: string;
  seoWork: string;
  result: string;
  beforeAfterTable?: {
    metric: string;
    before: string;
    after: string;
  }[];
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
}

export interface ProofItem {
  id: string;
  type: 'ranking' | 'case_study' | 'testimonial' | 'report';
  title: string;
  data: any;
}

export const HERO_CONTENT = {
  eyebrow: "Be One of the First Businesses Customers See on Google",
  h1: "Get Your Business Into the Top 3 on Google Within 90 Days",
  body1: "When people search for your service in your area, your business should be visible where those searches happen.",
  body2: "We build a focused local SEO strategy to improve your Google Maps and local search presence.",
  primaryCTA: "Get My Free SEO Audit",
  underCTA: "Find out how visible your business is today and where you are losing local search opportunities.",
  trustRowText: "Proven results: #1 on Google · 503K+ search impressions · ₹1.05 Cr+ organic sales",
};

export const GAP_CONTENT = {
  h2: "Your Competitors Are Showing Up. Why Aren't You?",
  leftLead: "A customer searches for:",
  searchQuery: "[Your Service] near me",
  leftSub1: "They see several businesses.",
  leftSub2: "If your business isn't visible among those results, that customer may never know you exist.",
  stackedLines: [
    "Your website can be good.",
    "Your service can be great.",
    "But if you're not visible when people search, you're missing opportunities."
  ],
  closingLine: "We focus on fixing that visibility gap.",
};

export const WHAT_WE_DO_CONTENT = {
  id: "what-we-do",
  h2: "We Build Your Local Search Presence Around Your Business",
  intro: "Instead of applying the same SEO checklist to every business, we work around your actual services, locations and competitors.",
  cards: [
    {
      iconName: "MapPin",
      title: "Google Business Profile",
      description: "Make your business profile more complete, relevant and active."
    },
    {
      iconName: "Globe",
      title: "Website SEO",
      description: "Improve your website structure, service pages and key on-page elements."
    },
    {
      iconName: "Target",
      title: "Service + Location Signals",
      description: "Strengthen your relevance for the services you provide and the locations you serve."
    },
    {
      iconName: "ShieldCheck",
      title: "Local Authority",
      description: "Build relevant local signals that support your business presence across search."
    },
    {
      iconName: "LineChart",
      title: "Search Visibility Tracking",
      description: "Monitor how your business appears across your important local searches."
    }
  ]
};

export const WHAT_CHANGES_CONTENT = {
  h2: "From Being Hard to Find → To Being Visible Where It Matters",
  body1: "The objective isn't simply to \"do SEO.\"",
  body2: "It's to improve your presence when potential customers are actively searching for your services.",
  steps: [
    {
      num: "01",
      title: "Better local visibility"
    },
    {
      num: "02",
      title: "More people see your business"
    },
    {
      num: "03",
      title: "More opportunities for calls, enquiries and visits"
    }
  ],
  note: "The exact results depend on your location, industry, competition and search demand."
};

export const WHY_US_CONTENT = {
  id: "why-us",
  h2: "Your SEO Strategy Should Fit Your Business",
  leftText: "Every business has different:",
  chips: [
    "Services",
    "Locations",
    "Competitors",
    "Search terms",
    "Existing rankings",
    "Google Business Profile",
    "Website strength"
  ],
  belowText: "So we first identify where your business stands and where the biggest opportunities are.",
  boldText: "Then we build the SEO work around those findings.",
  highlightLine: "No unnecessary SEO work just for the sake of adding more tasks."
};

export const RESULTS_CONTENT = {
  id: "results",
  h2: "Don't Just Take Our Word For It",
  sub: "Show potential clients what changed.",
  stats: [
    {
      number: "#1",
      label: "on Google for \"cotton towels\" & \"organic cotton towels\""
    },
    {
      number: "503K+",
      label: "search impressions (Haber Living)"
    },
    {
      number: "₹1.05 Cr+",
      label: "sales from Google organic search (automobile e-commerce)"
    },
    {
      number: "Featured Snippet",
      label: "for \"bulk organic rice exporters\" (Nethi Exports)"
    }
  ],
  proof1_nethi: {
    title: "Nethi Exports and Imports",
    category: "Local Business · Coimbatore, Tamil Nadu",
    highlights: "Featured snippet for \"bulk organic rice exporters\" · #1 organic result for \"Bulk Organic Food Exporter\" in Coimbatore",
    images: [
      {
        src: "/proof/nethi-bulk-organic-rice-exporters.webp",
        alt: "Nethi Exports Featured Snippet for bulk organic rice exporters on Google Search"
      },
      {
        src: "/proof/nethi-bulk-organic-food-exporter.webp",
        alt: "Nethi Exports #1 ranking for Bulk Organic Food Exporter in Coimbatore"
      }
    ]
  },
  caseStudies: [
    {
      id: "haber",
      title: "Haber Living — Premium Towel Brand",
      category: "Luxury Home & Living · India",
      business: "Premium towel and home essentials e-commerce brand",
      challenge: "Very low organic traffic, poor rankings for product keywords, slow pages, 404/redirect errors, no analytics tracking",
      seoWork: "Website revamp & speed optimization · Technical SEO fixes · Product & category page SEO · Analytics & Search Console setup",
      result: "#1 on Google for \"cotton towels\" and \"organic cotton towels\" · 503K+ search impressions",
      beforeAfterTable: [
        { metric: "Organic visibility", before: "Very Low", after: "Top Ranking Positions" },
        { metric: "Search impressions", before: "Minimal", after: "503K+" },
        { metric: "Website performance", before: "Poor", after: "Optimized" },
        { metric: "SEO structure", before: "Unoptimized", after: "Fully Optimized" },
        { metric: "Analytics tracking", before: "Not Configured", after: "Fully Integrated" }
      ],
      images: [
        {
          src: "/proof/haber-rank1-cotton-towels.webp",
          alt: "Haber Living #1 Google ranking for cotton towels"
        },
        {
          src: "/proof/haber-rank1-organic-cotton-towels.webp",
          alt: "Haber Living #1 Google ranking for organic cotton towels"
        }
      ]
    },
    {
      id: "auto",
      title: "Automobile Spare Parts E-commerce",
      category: "India · client name confidential",
      business: "Newly launched bike & car spare parts online store",
      challenge: "Brand-new website — zero domain authority, no rankings, pages not indexed, no organic sales",
      seoWork: "SEO-friendly site architecture · Technical SEO & Core Web Vitals · Product page on-page SEO · GEO & AEO for ChatGPT and Google AI Overviews · GA4 & conversion tracking",
      result: "₹1,05,07,861+ in sales from Google organic (3,451 orders) · ₹2,75,834+ in sales from ChatGPT referrals (114 orders) · Organic traffic built from zero",
      images: [
        {
          src: "/proof/auto-ecommerce-sales-dashboard.webp",
          alt: "Automobile Spare Parts Store analytics sales by traffic source",
          caption: "Store analytics: sales by traffic source"
        }
      ]
    }
  ],
  showTestimonial: false, // Controlled flag - hidden until real testimonial is provided
  testimonialPlaceholder: {
    quote: "[Insert genuine client testimonial here.]",
    clientName: "Client Name",
    businessName: "Business Name",
    rating: 5
  },
  report: {
    image: {
      src: "/proof/haber-search-console-503k.webp",
      alt: "Google Search Console report showing 503K impressions for Haber Living",
      caption: "Google Search Console: 503K impressions · 3.15K clicks (Haber Living)"
    }
  },
  footerNote: "All results shown are from actual client work."
};

// Array of all proof items for structured usage
export const proofItems: ProofItem[] = [
  {
    id: "nethi-proof",
    type: "ranking",
    title: RESULTS_CONTENT.proof1_nethi.title,
    data: RESULTS_CONTENT.proof1_nethi
  },
  {
    id: "haber-cs",
    type: "case_study",
    title: RESULTS_CONTENT.caseStudies[0].title,
    data: RESULTS_CONTENT.caseStudies[0]
  },
  {
    id: "auto-cs",
    type: "case_study",
    title: RESULTS_CONTENT.caseStudies[1].title,
    data: RESULTS_CONTENT.caseStudies[1]
  },
  {
    id: "haber-report",
    type: "report",
    title: "Google Search Console Visibility Report",
    data: RESULTS_CONTENT.report
  }
];

export const AUDIT_CONTENT = {
  id: "audit",
  eyebrow: "Is Your Business Ready For This?",
  h2: "Let's See Where You Stand on Google",
  copy: "We'll look at key areas such as:",
  checklist: [
    "Google Business Profile",
    "Current local visibility",
    "Website SEO",
    "Service & location relevance",
    "Competitor presence",
    "Local search opportunities"
  ],
  body: "You get a clearer picture of what is currently holding your visibility back and where there is room to improve.",
  subHeading: "Get Your Free SEO Audit",
  cta: "Check My Google Visibility",
  smallText: "No commitment. Just a clear look at your current local search presence."
};

export const FAQ_CONTENT = {
  id: "faq",
  h2: "A Few Things You May Want to Know",
  items: [
    {
      q: "Is Top 3 guaranteed?",
      a: "No. Google rankings depend on several factors, including competition, location and search terms. Our objective is to systematically improve your visibility and work toward Top 3 positions."
    },
    {
      q: "Why 90 days?",
      a: "SEO isn't an instant process. Google needs time to crawl, process and evaluate changes. 90 days gives enough time to implement and measure meaningful work."
    },
    {
      q: "Can you work with my existing website?",
      a: "Yes. We first assess what you already have and identify what needs improvement."
    },
    {
      q: "Will you work on Google Maps?",
      a: "Yes. Google Business Profile and local search visibility are an important part of the strategy."
    }
  ]
};

export const FINAL_CTA_CONTENT = {
  h2: "How Visible Is Your Business on Google Right Now?",
  goldLine: "You don't have to guess.",
  body: "Get a clear look at your current local search visibility and the opportunities available for your business.",
  cta: "Get My Free SEO Audit",
  closingLine: "Your next customer could already be searching. Make sure your business is there."
};

export const FOOTER_CONTENT = {
  tagline: "The AI Growth Studio",
  navLinks: [
    { label: "What We Do", href: "#what-we-do" },
    { label: "Results", href: "#results" },
    { label: "FAQ", href: "#faq" },
    { label: "Book a Free Audit", href: "https://api.hiighvance.com/widget/booking/CkAk13z879sKg6csRKJ1", external: true }
  ],
  website: "www.magdio.com",
  copyright: "© 2026 Pannovites Private Limited. All rights reserved."
};
