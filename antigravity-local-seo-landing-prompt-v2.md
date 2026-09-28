# Antigravity Prompt — Magdio Local SEO Landing Page (Version 2)

Build a premium, high-converting, single-page landing page for **Magdio — The AI Growth Studio**, selling a Local SEO service ("Get your business into the Top 3 on Google within 90 days").

Use the copy below **word for word**. Do not invent testimonials, stats, client names or results — only use the verified case-study figures given in Section 06.

---

## 1. Tech stack
- React + Vite + TypeScript
- Tailwind CSS
- Framer Motion for animation
- lucide-react for icons
- Fully responsive (mobile-first: 375px → 1440px+), no horizontal scroll
- Lighthouse 90+ for performance, accessibility and SEO
- Semantic HTML, one H1, proper heading order, meta title + description, Open Graph tags, and ProfessionalService + FAQPage JSON-LD schema
- Meta title: "Get Into Google's Top 3 in 90 Days | Local SEO by Magdio"
- Meta description: "Be one of the first businesses customers see on Google. Magdio builds a focused local SEO strategy to improve your Google Maps and local search presence. Get your free SEO audit."

## 2. Brand & assets
- Logo: `/public/magdio-logo.png` (I'll add it). It shows a rising blue bar chart with a gold upward arrow, "MAGDIO" in bold white, and the tagline "THE AI GROWTH STUDIO". Use it in the navbar (~40px high) and footer.
- Proof screenshots: `/public/proof/` (I'll add them — file names listed in Section 06).
- Colour palette (from the logo):
  - Background: deep navy `#0A0F1F`, surface `#111831`, card `#151D3B`
  - Primary blue: `#2F6BFF` → `#1E4FD8`
  - Accent gold: `#F5B82E` → `#FFD166` — main CTAs, growth-arrow motif, key highlights
  - Text: white `#FFFFFF`, muted `#A7B0C8`, borders `rgba(255,255,255,0.08)`
- Typography: "Plus Jakarta Sans" (headings, bold/extra-bold, tight tracking) + "Inter" (body), from Google Fonts.
- Style: dark, premium agency look. Subtle grid background (like the logo backdrop), soft blue/gold radial glows, glassmorphism cards (backdrop-blur, thin borders), generous spacing, rounded-2xl corners.

## 3. Global elements
- **Sticky navbar**: logo left; links: What We Do, Why Us, Results, FAQ; right-side gold button "Get My Free SEO Audit". Transparent at top, blurred navy after scroll. Mobile hamburger menu.
- **All CTA buttons** link to `https://api.hiighvance.com/widget/booking/CkAk13z879sKg6csRKJ1` (new tab). Store it in one constant `CTA_URL`.
- **Floating mobile CTA bar** (mobile only, appears after scrolling past the hero): "Get My Free SEO Audit".
- Scroll-reveal animations (fade + slide up, staggered), hover lift on cards, smooth anchor scrolling. Respect `prefers-reduced-motion`.

## 4. Sections & exact copy

### 01 — Hero
- Eyebrow (small gold pill above H1): **Be One of the First Businesses Customers See on Google**
- H1: **Get Your Business Into the Top 3 on Google Within 90 Days**
- Body: When people search for your service in your area, your business should be visible where those searches happen.
- Body: We build a focused local SEO strategy to improve your Google Maps and local search presence.
- Primary CTA (gold): **Get My Free SEO Audit**
- Under CTA (small, muted italic): *Find out how visible your business is today and where you are losing local search opportunities.*
- Right-side visual (code-built with HTML/CSS/SVG, no stock images): a Google Maps "local pack" mock — map card with 3 listings, the top one highlighted as "Your Business" with a gold "#1" badge and star rating, plus a floating mini ranking chart trending up with the gold arrow. Gentle floating animation.
- Trust row under hero (small, muted): "Proven results: #1 on Google · 503K+ search impressions · ₹1.05 Cr+ organic sales" (links to #results).

### 02 — The Gap
- H2: **Your Competitors Are Showing Up. Why Aren't You?**
- Left column copy:
  - A customer searches for:
  - Search-bar mock with a typing animation: **"[Your Service] near me"**
  - They see several businesses.
  - If your business isn't visible among those results, that customer may never know you exist.
- Right column: a results list mock — 3 competitor listings shown clearly at the top, "Your Business" faded/blurred far below with a small "Not visible" label.
- Three stacked lines, revealed one by one on scroll (large text):
  - Your website can be good.
  - Your service can be great.
  - But if you're not visible when people search, you're missing opportunities.
- Closing line (gold gradient text): **We focus on fixing that visibility gap.**

### 03 — What We Do (id="what-we-do")
- H2: **We Build Your Local Search Presence Around Your Business**
- Intro: Instead of applying the same SEO checklist to every business, we work around your actual services, locations and competitors.
- 5 glass cards with icons (3 + 2 grid on desktop, last row centred; 1 column on mobile):
  1. **Google Business Profile** — Make your business profile more complete, relevant and active. (MapPin)
  2. **Website SEO** — Improve your website structure, service pages and key on-page elements. (Globe)
  3. **Service + Location Signals** — Strengthen your relevance for the services you provide and the locations you serve. (Target)
  4. **Local Authority** — Build relevant local signals that support your business presence across search. (ShieldCheck)
  5. **Search Visibility Tracking** — Monitor how your business appears across your important local searches. (LineChart)

### 04 — What Changes
- H2: **From Being Hard to Find → To Being Visible Where It Matters** (render the → as a gold animated arrow)
- Body: The objective isn't simply to "do SEO."
- Body: It's to improve your presence when potential customers are actively searching for your services.
- 3-step flow (horizontal on desktop, vertical on mobile), connected by an animated gold arrow line that draws on scroll:
  1. **Better local visibility**
  2. **More people see your business**
  3. **More opportunities for calls, enquiries and visits**
- Note (small, muted italic): *The exact results depend on your location, industry, competition and search demand.*

### 05 — Why Businesses Work With Us (id="why-us")
- H2: **Your SEO Strategy Should Fit Your Business**
- Split layout: text left, chip grid right.
- Left: Every business has different:
- Right: 7 glass chips with small icons: Services · Locations · Competitors · Search terms · Existing rankings · Google Business Profile · Website strength
- Below: So we first identify where your business stands and where the biggest opportunities are.
- Bold: **Then we build the SEO work around those findings.**
- Highlight line (gold left border): No unnecessary SEO work just for the sake of adding more tasks.

### 06 — See The Difference (id="results")
- H2: **Don't Just Take Our Word For It**
- Sub: Show potential clients what changed.
- These are real, verified client results. Use the figures **exactly** as written — do not round, inflate or add numbers.
- Every screenshot: inside a dark "browser window" frame (3 dots, rounded corners, soft shadow), `loading="lazy"`, descriptive alt text, click to open in a lightbox (Esc to close).

**A) Stat strip** (4 count-up tiles, gold numbers):
- **#1** — on Google for "cotton towels" & "organic cotton towels"
- **503K+** — search impressions (Haber Living)
- **₹1.05 Cr+** — sales from Google organic search (automobile e-commerce)
- **Featured Snippet** — for "bulk organic rice exporters" (Nethi Exports)

**B) Proof blocks** — map to the 4 slots from the copy:

1. **Google Maps / Ranking Screenshot — Before & after visibility**
   - Nethi Exports and Imports (Local Business · Coimbatore, Tamil Nadu)
   - Featured snippet for "bulk organic rice exporters" · #1 organic result for "Bulk Organic Food Exporter" in Coimbatore
   - Images: `nethi-bulk-organic-rice-exporters.webp`, `nethi-bulk-organic-food-exporter.webp`

2. **Case Study — Business → Challenge → SEO work → Result** (render as a 4-step horizontal timeline card; tabs to switch between the 2 case studies)
   - **Haber Living — Premium Towel Brand** (Luxury Home & Living · India)
     - Business: Premium towel and home essentials e-commerce brand
     - Challenge: Very low organic traffic, poor rankings for product keywords, slow pages, 404/redirect errors, no analytics tracking
     - SEO work: Website revamp & speed optimization · Technical SEO fixes · Product & category page SEO · Analytics & Search Console setup
     - Result: #1 on Google for "cotton towels" and "organic cotton towels" · 503K+ search impressions
     - Before → After table:
       | Metric | Before | After |
       |---|---|---|
       | Organic visibility | Very Low | Top Ranking Positions |
       | Search impressions | Minimal | 503K+ |
       | Website performance | Poor | Optimized |
       | SEO structure | Unoptimized | Fully Optimized |
       | Analytics tracking | Not Configured | Fully Integrated |
     - Images: `haber-rank1-cotton-towels.webp`, `haber-rank1-organic-cotton-towels.webp`
   - **Automobile Spare Parts E-commerce** (India · client name confidential)
     - Business: Newly launched bike & car spare parts online store
     - Challenge: Brand-new website — zero domain authority, no rankings, pages not indexed, no organic sales
     - SEO work: SEO-friendly site architecture · Technical SEO & Core Web Vitals · Product page on-page SEO · GEO & AEO for ChatGPT and Google AI Overviews · GA4 & conversion tracking
     - Result: ₹1,05,07,861+ in sales from Google organic (3,451 orders) · ₹2,75,834+ in sales from ChatGPT referrals (114 orders) · Organic traffic built from zero
     - Image: `auto-ecommerce-sales-dashboard.webp` — caption "Store analytics: sales by traffic source"

3. **Client Testimonial — Short, genuine client feedback**
   - Placeholder card: "[Insert genuine client testimonial here.]" — Client Name, Business Name, 5-star row.
   - Controlled by `showTestimonial = false` in `content.ts` — hidden until I add a real one. When hidden, the grid reflows cleanly.

4. **Ranking / Search Visibility Report — Real data from an actual campaign**
   - Image: `haber-search-console-503k.webp` — caption "Google Search Console: 503K impressions · 3.15K clicks (Haber Living)"

- Footer note (muted, centred): *All results shown are from actual client work.*
- Put all proof data in a `proofItems` array in `content.ts` with the comment: "Use only verified results, screenshots and genuine testimonials."

### 07 — Is Your Business Ready For This? (id="audit")
- Eyebrow: **Is Your Business Ready For This?**
- H2: **Let's See Where You Stand on Google**
- Design as a premium "audit report" card: left = copy, right = checklist that ticks itself one by one on scroll (gold check circles).
- Copy: We'll look at key areas such as:
- Checklist:
  - ✓ Google Business Profile
  - ✓ Current local visibility
  - ✓ Website SEO
  - ✓ Service & location relevance
  - ✓ Competitor presence
  - ✓ Local search opportunities
- Body: You get a clearer picture of **what is currently holding your visibility back and where there is room to improve.**
- Sub-heading: **Get Your Free SEO Audit**
- CTA (gold): **Check My Google Visibility**
- Small text: No commitment. Just a clear look at your current local search presence.

### 08 — FAQ (id="faq")
- H2: **A Few Things You May Want to Know**
- Accordion (one open at a time, plus/minus icon, aria-expanded):
  1. **Is Top 3 guaranteed?** — No. Google rankings depend on several factors, including competition, location and search terms. Our objective is to systematically improve your visibility and work toward Top 3 positions.
  2. **Why 90 days?** — SEO isn't an instant process. Google needs time to crawl, process and evaluate changes. 90 days gives enough time to implement and measure meaningful work.
  3. **Can you work with my existing website?** — Yes. We first assess what you already have and identify what needs improvement.
  4. **Will you work on Google Maps?** — Yes. Google Business Profile and local search visibility are an important part of the strategy.
- Also output as FAQPage JSON-LD.

### 09 — Final CTA
- Full-width band: blue→navy gradient, grid pattern, gold glow, subtle animated rising-arrow graphic.
- H2: **How Visible Is Your Business on Google Right Now?**
- Line (large, gold): You don't have to guess.
- Body: Get a clear look at your current local search visibility and the opportunities available for your business.
- CTA (large gold): **Get My Free SEO Audit**
- Closing line: **Your next customer could already be searching. Make sure your business is there.**

### Footer
- Logo + "The AI Growth Studio"
- Links: What We Do, Results, FAQ, Book a Free Audit
- Website: www.magdio.com
- © 2026 Pannovites Private Limited. All rights reserved.

## 5. Code quality
- One component per section in `src/components/sections/`; shared `Button`, `SectionHeading`, `GlassCard`, `BrowserFrame`, `Lightbox` components.
- All copy and proof data in `src/content.ts` so text can be edited without touching layout.
- Accessible: visible focus states, alt text, keyboard-friendly accordion and lightbox, AA colour contrast.
- Optimise images (webp, width/height set to avoid layout shift).
- After building, run the dev server, open it in the browser, check at 375px, 768px and 1440px, and fix any layout issues before finishing.
