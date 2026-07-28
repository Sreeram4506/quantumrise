
# Geown Tranquil — Luxury Real Estate Site (v1)

A cinematic, Apple-grade marketing site for a fictional ₹1cr+ villa plot community. Placeholder copy + generated imagery throughout, structured so a CMS/API can plug in later.

## Design system

- Palette: forest `#123026`, gold `#C8A85D`, off-white `#F8F8F6`, charcoal `#222`, pure white.
- Type: Playfair Display (headings, tight tracking) + Inter (body). Loaded via `<link>` in `__root.tsx`.
- Motion language: slow, weighty, always eased. Lenis smooth scroll globally. Framer Motion for component reveals, GSAP ScrollTrigger for pinned/scrubbed sections (master plan, timeline, investment ROI). Reduced-motion respected everywhere.
- Components: rounded-2xl cards, soft shadows, glass overlays over hero/photography, gold hairline dividers, magnetic buttons, custom cursor on desktop.
- Tokens live in `src/styles.css` (@theme), all colors semantic — no hardcoded hex in components.

## Content strategy

All copy is premium placeholder in `src/content/*.ts` (typed objects) so a CMS can replace them 1:1. Imagery generated once into `src/assets/` (hero, amenities, gallery, aerial, interiors, testimonial portraits) and externalized via `lovable-assets` to keep the repo light.

## Pages & routes

```text
/                       Home (hero, about teaser, USPs, amenities preview, master plan teaser, gallery strip, testimonials, contact CTA)
/about                  Story, timeline, leadership, values
/project                Project overview / specs
/amenities              Full amenity carousel + detail cards
/master-plan            Interactive plan with hotspots (zoom/pan, popovers)
/gallery                Masonry + filters + lightbox
/location               Map + nearby POIs + travel-time cards
/investment             ROI charts, appreciation timeline
/pricing                Plot sizes, EMI calc, brochure CTA
/testimonials           Video + text testimonials
/faq                    Searchable accordion
/contact                Booking form + WhatsApp/call/map
/blog                   Blog index (static JSON)
/blog/$slug             Article template
/privacy                Legal
/terms                  Legal
/*                      404 (already exists, will restyle)
```

## Global chrome

- Loading screen: logo mark, gold progress bar, background video loop (generated still + subtle Ken Burns as fallback), fades out after route + fonts ready.
- Nav: transparent → solid on scroll, animated underline, mega menu on desktop, full-screen animated hamburger on mobile, persistent "Book Site Visit" CTA.
- Floating: WhatsApp, call, back-to-top, chat widget stub.
- Mobile sticky bottom bar: Book Visit / Call / WhatsApp.
- Footer: quick links, newsletter, social, legal, animated wordmark.

## Signature interactions

- Hero: generated cinematic aerial still, parallax layers, floating particle leaves (canvas), animated headline (word-by-word blur reveal), floating stat cards, scroll-cue.
- About: split layout, counters trigger on view, gold timeline draw.
- Master plan: pinned section, SVG hotspots, click reveals amenity popover.
- Amenities: 3D-tilt glass cards in Swiper carousel.
- Gallery: masonry with filter chips, lightbox with keyboard/swipe.
- Investment: GSAP scrubbed ROI chart draw.
- Testimonials: glass cards, auto-advance, video modal.
- Contact: luxury form (Zod-validated), date picker, success animation.

## Technical

- Stack: TanStack Start (React 19, Vite 7, TS, Tailwind v4). Add: `framer-motion`, `lenis`, `gsap`, `swiper`, `react-icons`, `@lottiefiles/react-lottie-player`, `zod`, `react-hook-form`, `recharts` (ROI), `embla-carousel-react` fallback if Swiper conflicts.
- Per-route `head()` with unique title/description/og/twitter. `og:image` on leaf routes only (hero image reused). Canonical + og:url relative. JSON-LD: Organization on root, RealEstateAgent + Place on `/`, Article on blog posts, FAQPage on `/faq`, BreadcrumbList on deep routes.
- `sitemap.xml` server route + `robots.txt`.
- All images lazy, responsive `<img srcset>` where meaningful, `fetchpriority=high` preload on hero.
- Accessibility: single `<main>` per route, focus states, aria-labels on icon buttons, prefers-reduced-motion disables scroll effects.
- Reusable components in `src/components/` (Nav, Footer, SectionHeading, MagneticButton, GlassCard, TiltCard, RevealText, StatCounter, Lightbox, HotspotMap, RoiChart, TestimonialSlider, ContactForm, LoadingScreen, CursorFollower, FloatingActions, MobileBottomBar).
- Data in `src/content/` (JSON-shaped TS): `project.ts`, `amenities.ts`, `plots.ts`, `gallery.ts`, `faqs.ts`, `testimonials.ts`, `blog.ts`, `location.ts`.

## Build order (one pass)

1. Design tokens + fonts + Lenis + cursor + loading screen + Nav + Footer.
2. Reusable primitives (RevealText, MagneticButton, GlassCard, TiltCard, StatCounter, SectionHeading).
3. Home page end-to-end (hero → contact CTA) — sets the visual bar.
4. About, Project, Amenities, Master Plan, Gallery, Location.
5. Investment, Pricing, Testimonials, FAQ, Contact.
6. Blog index + article, Privacy, Terms, restyled 404.
7. SEO: per-route head, sitemap route, robots, JSON-LD.
8. Generate hero + section imagery, externalize via `lovable-assets`.
9. Pass: reduced-motion, mobile bottom bar, lighthouse quick wins, accessibility sweep.

## Explicit non-goals for v1

- No real Three.js hero (generated still + parallax as agreed).
- No real Google Maps key — embed via iframe with placeholder coords; swap later.
- No real video testimonials — poster + modal stub; wire URLs later.
- No live availability / mortgage backend — client-side calculators only.
- Dark mode: tokens ready, toggle deferred unless you want it now.
- Real CMS integration deferred; content is typed JSON, ready to swap.
