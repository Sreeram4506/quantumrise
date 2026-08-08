// Content layer. Shape mirrors what a CMS would deliver — safe to swap 1:1.

import clubhouse from "@/assets/clubhouse.jpg";
import pool from "@/assets/pool.jpg";
import gym from "@/assets/gym.jpg";
import jogging from "@/assets/jogging.jpg";
import kids from "@/assets/kids.jpg";
import yoga from "@/assets/yoga.jpg";
import sports from "@/assets/sports.jpg";
import landscape from "@/assets/landscape.jpg";
import plot from "@/assets/plot.jpg";
import interior from "@/assets/interior.jpg";
import aerial from "@/assets/aerial-forest.jpg";
import masterplan from "@/assets/masterplan.jpg";
import t1 from "@/assets/testimonial-1.jpg";
import t2 from "@/assets/testimonial-2.jpg";
import t3 from "@/assets/testimonial-3.jpg";

export const brand = {
  name: "Green Gardens by Quantum Rise",
  company: "Quantum Rise Infra",
  tagline: "Premium plotted communities crafted for a considered life.",
  short: "Green Gardens",
  phone: "+91 98802 66251",
  whatsapp: "+919880266251",
  email: "hello@quantumriseinfra.com",
  address: "Site No:17/1, Neelanka Agrahara, Malur, Kolar Dt, Karnataka-563130",
  locality: "Malur, Kolar",
};

export const nav = [
  { label: "Projects", to: "/project" as const },
  { label: "Master Plan", to: "/master-plan" as const },
  { label: "Gallery", to: "/gallery" as const },
  { label: "Location", to: "/location" as const },
  { label: "About", to: "/about" as const },
];

export const heroStats = [
  { value: "120+", label: "Acres" },
  { value: "42k", label: "Sq.ft Clubhouse" },
  { value: "180+", label: "Villa Plots" },
  { value: "2027", label: "Possession" },
];

export const usps = [
  { title: "Infrastructure", body: "Underground utilities, granite kerbs, tree-lined avenues and rain-water harvesting across every plot.", icon: "grid" },
  { title: "Location", body: "Connected to Whitefield, ITPL, Narasapura Industrial Area and Bengaluru International Airport.", icon: "map" },
  { title: "Investment", body: "Prime East Bangalore land with a five-year price appreciation curve consistently above 14% CAGR.", icon: "trend" },
  { title: "Amenities", body: "A 42,000 sq.ft clubhouse, forest walking trails, sports arena, yoga deck and family pool.", icon: "spark" },
  { title: "Legal Clarity", body: "DTCP approved layout, single-title conveyance, RERA-registered with clean sub-registrar records.", icon: "shield" },
  { title: "Future Growth", body: "Close to the proposed Malur Ring Road and the industrial growth belt around Narasapura.", icon: "compass" },
];

export const amenities = [
  { title: "The Clubhouse", body: "42,000 sq.ft of curated indoor life — library, screening room, private dining, spa.", image: clubhouse },
  { title: "Infinity Pool", body: "A resort-grade pool cantilevered above the forest edge.", image: pool },
  { title: "Wellness Gym", body: "Technogym-equipped double-height gym overlooking the canopy.", image: gym },
  { title: "Forest Trail", body: "2.4 km of jogging trail winding through native tropical planting.", image: jogging },
  { title: "Kids Village", body: "Ergonomic play landscape with sensory paths and creche.", image: kids },
  { title: "Yoga Deck", body: "Timber yoga pavilion suspended over the reservoir.", image: yoga },
  { title: "Sports Arena", body: "Tennis, basketball and turf cricket net — floodlit for evening play.", image: sports },
  { title: "Landscaped Gardens", body: "50+ acres of curated botanical gardens by Studio Yardstick.", image: landscape },
];

export const galleryImages = [
  { src: "/WhatsApp%20Image%202026-07-20%20at%202.30.33%20PM.jpeg", alt: "Gallery photo 1", category: "Gallery", height: 900 },
  { src: "/WhatsApp%20Image%202026-07-20%20at%202.30.34%20PM.jpeg", alt: "Gallery photo 2", category: "Gallery", height: 720 },
  { src: "/WhatsApp%20Image%202026-07-20%20at%202.30.35%20PM.jpeg", alt: "Gallery photo 3", category: "Gallery", height: 820 },
  { src: "/WhatsApp%20Image%202026-07-20%20at%202.30.35%20PM%20(1).jpeg", alt: "Gallery photo 4", category: "Gallery", height: 640 },
  { src: "/WhatsApp%20Image%202026-07-20%20at%202.30.36%20PM.jpeg", alt: "Gallery photo 5", category: "Gallery", height: 860 },
  { src: "/WhatsApp%20Image%202026-07-20%20at%202.30.37%20PM.jpeg", alt: "Gallery photo 6", category: "Gallery", height: 720 },
  { src: "/WhatsApp%20Image%202026-07-20%20at%202.30.37%20PM%20(1).jpeg", alt: "Gallery photo 7", category: "Gallery", height: 1000 },
  { src: "/WhatsApp%20Image%202026-07-20%20at%202.30.38%20PM.jpeg", alt: "Gallery photo 8", category: "Gallery", height: 780 },
  { src: "/WhatsApp%20Image%202026-07-20%20at%202.30.38%20PM%20(1).jpeg", alt: "Gallery photo 9", category: "Gallery", height: 680 },
];

export const managingDirector = {
  name: "Vishnu Vardhan Boilla",
  role: "Managing Director",
  photo: "/md-placeholder.jpg",
  bio: "Leading Quantumrise Infra with a vision for considered, low-density plotted communities across South India — land developed with restraint, honesty and a view to the next generation.",
  quote: "We don't build houses. We plant communities that outlive us.",
};

export const testimonials = [
  { name: "Ravi & Kavitha Menon", role: "Bought a 3200 sq.ft plot", quote: "Quantumrise Infra feels less like a project and more like a private forest we happen to own an address in. Every detail — from the way the trees frame the entrance to the finish of the kerbstones — is considered.", photo: t1 },
  { name: "Dr. Meera Ranganath", role: "Consultant, Manipal Hospitals", quote: "We looked at every marquee project in North Bangalore. Nothing else made land feel this luxurious. The clubhouse alone would justify the address.", photo: t2 },
  { name: "Arvind Nair", role: "Angel investor", quote: "Approvals were transparent, the master plan is honest about density, and the investment case is quietly compelling. Rare combination.", photo: t3 },
];

export const timeline = [
  { year: "2011", title: "Founded", body: "Quantumrise Infra established with a single premium plotted community." },
  { year: "2016", title: "First 500 acres", body: "Delivered five gated villa communities across South India." },
  { year: "2021", title: "The Quantumrise vision", body: "Land acquired and master planned by Studio Yardstick." },
  { year: "2024", title: "Groundbreaking", body: "Infrastructure works and clubhouse foundations begin." },
  { year: "2027", title: "Possession", body: "Handover with full amenities operational." },
];

export const stats = [
  { value: 13, suffix: "+", label: "Years crafting land" },
  { value: 2400, suffix: "+", label: "Happy families" },
  { value: 1800, suffix: "", label: "Acres developed" },
  { value: 22, suffix: "", label: "Projects delivered" },
];

export const nearby = [
  { name: "Bengaluru International Airport", time: "44 km", category: "Airport" },
  { name: "Whitefield", time: "22 km", category: "IT Corridor" },
  { name: "ITPL", time: "24 km", category: "IT Park" },
  { name: "Narasapura Industrial Area", time: "10 km", category: "Industrial" },
  { name: "Malur Sub-Registrar Office", time: "1.5 km", category: "Civic" },
  { name: "Malur Police Station", time: "1.5 km", category: "Civic" },
  { name: "Malur Railway Station", time: "2 km", category: "Railway" },
  { name: "Hoskote", time: "16 km", category: "Town" },
  { name: "Proposed Malur Ring Road", time: "500 m", category: "Road" },
  { name: "Many higher schools", time: "300 m", category: "Schools" },
];

export const roi = [
  { year: "2021", value: 100 },
  { year: "2022", value: 118 },
  { year: "2023", value: 138 },
  { year: "2024", value: 162 },
  { year: "2025", value: 189 },
  { year: "2026", value: 222 },
  { year: "2027", value: 264 },
];

export const faqs = [
  { q: "Is the project RERA registered?", a: "Yes. Quantumrise Infra is registered under Karnataka RERA (PRM/KA/RERA/1251/446/PR/240110/006712), developed by Quantumrise Infra, with all statutory documentation available for review at our sales gallery." },
  { q: "What is included in the plot price?", a: "Land cost with fully-developed infrastructure — roads, drainage, water, power connection to plot, and access to the full clubhouse and amenities on possession." },
  { q: "Can I construct my own villa?", a: "Yes. You can appoint your own architect within the community design charter, or choose from three curated villa templates by our design partners." },
  { q: "What are the payment plans?", a: "Standard 20-40-40, construction-linked with our banking partners, or a discounted upfront plan. EMI options begin at ₹98,000." },
  { q: "When will the amenities be ready?", a: "Phase one clubhouse, pool and landscape trail are scheduled for late 2026. Sports arena and kids village complete in Q2 2027." },
  { q: "Are the plots freehold?", a: "Yes, single-title freehold conveyance under registered sale deed." },
];

export const blogPosts = [
  { slug: "north-bangalore-thesis", title: "The North Bangalore land thesis, plainly told", excerpt: "Why every serious portfolio has begun rebalancing towards the airport corridor — and what to look for in a plotted community.", date: "2026-05-20", tag: "Investment", read: "6 min", cover: aerial },
  { slug: "studio-yardstick-masterplan", title: "Inside the master plan with Studio Yardstick", excerpt: "A conversation with the landscape architects about density, biodiversity and the choreography of quiet.", date: "2026-04-08", tag: "Design", read: "9 min", cover: landscape },
  { slug: "living-with-forest", title: "Living with a forest at your doorstep", excerpt: "Notes from families who moved from Whitefield and Sadashivanagar into low-density villa communities.", date: "2026-03-14", tag: "Living", read: "5 min", cover: interior },
];

export const images = { clubhouse, pool, gym, jogging, kids, yoga, sports, landscape, plot, interior, aerial, masterplan };
