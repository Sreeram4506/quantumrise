import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import hero from "@/assets/hero-aerial.jpg";
import interior from "@/assets/interior.jpg";
import aerial from "@/assets/aerial-forest.jpg";
import plotImg from "@/assets/plot.jpg";
import {
  Eyebrow,
  GlassCard,
  MagneticButton,
  Parallax,
  RevealText,
  SectionHeading,
  StatCounter,
  TiltCard,
} from "@/components/site";
import { EnquiryModal } from "@/components/enquiry-modal";
import { MasterPlanShowcase } from "@/components/master-plan-showcase";
import { brand, heroStats, stats, testimonials, usps } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Quantumrise Infra — Premium plotted communities in Bangalore" },
      {
        name: "description",
        content:
          "Premium plotted communities in Bangalore by Quantumrise Infra. DTCP approved plots from 1,500–4,800 sq.ft with world-class amenities.",
      },
      { property: "og:title", content: "Quantumrise Infra — Premium plotted communities for a considered life" },
      {
        property: "og:description",
        content:
          "Premium plotted communities for a considered life. DTCP approved, RERA approved.",
      },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
    links: [{ rel: "preload", as: "image", href: hero, fetchpriority: "high" }],
  }),
  component: Home,
});

function Home() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [enquiryContext, setEnquiryContext] = useState("");
  const [enquiryTitle, setEnquiryTitle] = useState("Interested in this project?");

  const openEnquiry = (context: string, title = "Interested in this project?") => {
    setEnquiryContext(context);
    setEnquiryTitle(title);
    setEnquiryOpen(true);
  };

  return (
    <>
      <Hero />
      <StoryStrip />
      <CompanySection />
      <WhyUs />
      <ProjectsTeaser openEnquiry={openEnquiry} />
      <MasterPlanShowcase
        onPrimaryAction={() => openEnquiry("Brochure download - Master Plan", "Download the Master Plan Brochure")}
      />
      <ClosingCTA />
      <EnquiryModal
        open={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        title={enquiryTitle}
        context={enquiryContext}
      />
    </>
  );
}

/* -------------------------------------------------------------------------- */

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  const downloadBrochure = () => {
    const link = document.createElement("a");
    link.href = "/Green%20Garden.pdf";
    link.download = "Green Garden.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <section ref={ref} className="relative -mt-16 h-[100svh] min-h-[640px] overflow-hidden md:-mt-20">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src="/Background.png"
          alt=""
          className="h-full w-full object-cover"
          fetchPriority="high"
          width={1920}
          height={1280}
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/20 to-primary/70" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_60%_at_50%_120%,rgba(18,48,38,0.9),transparent)]" />

      <motion.div style={{ opacity }} className="container-lux relative z-10 flex h-full flex-col justify-end pb-24 md:pb-32">
        <RevealText
          as="h1"
          className="max-w-5xl font-display text-[42px] leading-[1.02] tracking-tight text-primary-foreground md:text-[92px]"
        >
          A quiet estate for a considered life.
        </RevealText>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-6 max-w-lg text-base leading-relaxed text-primary-foreground/85 md:text-lg"
        >
          One hundred and twenty acres of forest, land and clubhouse — plotted for families
          who value quiet more than address.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <MagneticButton variant="gold" onClick={downloadBrochure}>
            Download brochure
          </MagneticButton>
          <MagneticButton to="/contact" variant="ghost" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary">Schedule a visit</MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <div className="absolute inset-x-0 bottom-4 z-10 flex justify-center md:bottom-8">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-[10px] uppercase tracking-[0.35em] text-primary-foreground/70"
        >
          Scroll
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */

function StoryStrip() {
  return (
    <section className="border-y border-border/60 bg-background py-6">
      <div className="container-lux flex flex-wrap items-center justify-between gap-6 text-xs uppercase tracking-[0.28em] text-muted-foreground">
        <span>DTCP Approved</span>
        <span className="hidden md:inline">RERA · PRM/KA/RERA/1251/446</span>
        <span>Studio Yardstick · Landscape</span>
        <span className="hidden md:inline">Technogym · Wellness</span>
        <span>Ready for construction</span>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */

function About() {
  return (
    <section className="container-lux relative py-28 md:py-40">
      <div className="grid gap-16 md:grid-cols-2 md:items-center">
        <div>
          <Parallax offset={60}>
            <div className="relative overflow-hidden rounded-3xl">
          <img src={interior} alt="A villa interior at Greenlands" className="aspect-[4/5] w-full object-cover" loading="lazy" width={1400} height={1000} />
            </div>
          </Parallax>
        </div>
        <div>
          <SectionHeading
            eyebrow="The estate"
            title={<>Land as the last<br /><em className="italic text-secondary">luxury.</em></>}
            intro="Greenlands is our most considered work — a low-density plotted community drawn around what already exists. Existing tree lines are protected. Water follows the natural fall. The clubhouse is placed where the site's best long-view happens to be."
          />
          <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s) => (
              <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
            ))}
          </div>
          <div className="mt-10">
            <MagneticButton to="/about" variant="ghost">Our story</MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */

function CompanySection() {
  return (
    <section className="container-lux py-28 md:py-40">
      <div className="grid gap-16 md:grid-cols-2 md:items-center">
        <div>
          <Parallax offset={60}>
            <div className="relative overflow-hidden rounded-3xl">
              <img src={aerial} alt="Aerial view of the Green Gardens estate" className="aspect-[4/5] w-full object-cover" loading="lazy" width={1400} height={1000} />
            </div>
          </Parallax>
        </div>
        <div>
          <SectionHeading
            eyebrow="About the company"
            title={<>A developer built on<br /><em className="italic text-secondary">quiet conviction.</em></>}
            intro="Quantum Rise Infra crafts low-density, amenity-rich plotted communities across South India. We believe land should be treated with restraint — protected tree lines, honest master plans and infrastructure that outlasts trends."
          />
          <div className="mt-10 flex flex-wrap gap-3">
            <MagneticButton to="/about" variant="gold">Our story</MagneticButton>
            <MagneticButton to="/project" variant="ghost">Explore projects</MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */

function WhyUs() {
  return (
    <section className="bg-primary py-28 text-primary-foreground md:py-40">
      <div className="container-lux">
        <SectionHeading
          eyebrow="Why Greenlands"
          title={<>Six reasons this address will<br /><em className="italic text-secondary">age well.</em></>}
          eyebrowClassName="text-secondary"
          titleClassName="text-secondary"
        />
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {usps.map((u, i) => (
            <motion.div
              key={u.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.06 }}
            >
              <TiltCard>
                <div className="group h-full rounded-3xl border border-primary-foreground/10 bg-primary-foreground/5 p-8 transition-all duration-500 hover:border-secondary/40 hover:bg-primary-foreground/10 hover:shadow-[0_20px_60px_-20px_rgba(200,168,93,0.35)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-secondary/40 text-secondary">
                    <span className="font-display text-lg">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl">{u.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">{u.body}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */

function ProjectsTeaser({ openEnquiry }: { openEnquiry: (context: string) => void }) {
  const projects = [
    {
      title: "Greenlands",
      tag: "Flagship Estate",
      description: "A 2-acre plotted layout with 46,000 sq.ft of area, MPA approval, and no clubhouse planned.",
      image: "/greenlands.jpeg",
      stats: [
        { value: "2", label: "Acres" },
        { value: "34", label: "Plots" },
        { value: "46K", label: "Area" },
      ],
    },
  ];

  return (
    <section className="container-lux py-28 md:py-40">
      <SectionHeading
        eyebrow="Our Projects"
        title={<>Discover our<br /><em className="italic text-secondary">signature communities.</em></>}
        intro="Each project by Quantumrise Infra is thoughtfully planned — blending location, amenity and long-term value into a single address."
      />
      <div className="mt-16 flex justify-center">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: i * 0.12 }}
          >
            <button
              onClick={() => openEnquiry(project.title)}
              className="group block h-full w-full text-left"
            >
              <div className="relative h-full overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:border-secondary/30 hover:shadow-[0_24px_80px_-24px_rgba(200,168,93,0.25)]">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="inline-block rounded-full bg-secondary px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-primary">
                      {project.tag}
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-display text-2xl text-primary transition-colors duration-300 group-hover:text-secondary">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-6 grid grid-cols-3 gap-4 border-t border-border pt-6">
                    {project.stats.map((s) => (
                      <div key={s.label} className="text-center">
                        <div className="font-display text-xl text-primary md:text-2xl">{s.value}</div>
                        <div className="mt-0.5 text-[9px] uppercase tracking-[0.25em] text-muted-foreground">{s.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-secondary opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Enquire now
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </div>
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */

function TestimonialsPreview() {
  return (
    <section className="container-lux py-28 md:py-40">
      <SectionHeading
        eyebrow="Owners"
        title={<>Kind words from the<br /><em className="italic text-secondary">first residents.</em></>}
      />
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
          >
            <GlassCard className="h-full border border-border/60 bg-card/60">
              <p className="font-display text-xl leading-snug text-primary md:text-2xl">
                &ldquo;{t.quote.slice(0, 140)}…&rdquo;
              </p>
              <div className="mt-8 flex items-center gap-4">
                <img src={t.photo} alt="" className="h-12 w-12 rounded-full object-cover" loading="lazy" />
                <div>
                  <div className="text-sm font-medium text-primary">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
      <div className="mt-10">
        <MagneticButton to="/testimonials" variant="ghost">All owner stories</MagneticButton>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */

function ClosingCTA() {
  return (
    <section className="container-lux py-28 md:py-40">
      <div className="relative overflow-hidden rounded-[36px] bg-primary p-10 text-primary-foreground md:p-20">
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-secondary/30 blur-3xl" />
        <div className="relative z-10 grid gap-10 md:grid-cols-[1.6fr_1fr] md:items-center">
          <div>
            <Eyebrow className="text-secondary">Reserve a visit</Eyebrow>
            <RevealText as="h2" className="font-display text-4xl leading-[1.05] text-secondary md:text-6xl">
              Tour the estate before the site is fenced off.
            </RevealText>
          </div>
          <div className="md:max-w-sm md:justify-self-end">
            <p className="text-primary-foreground/75">
              Private site tours are available Thursday through Sunday. We'll arrange transport from your side of the city.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <MagneticButton to="/contact" variant="gold">Book your visit</MagneticButton>
              <Link to="/contact" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-primary-foreground/80 hover:text-secondary">
                Request details →
              </Link>
            </div>
            <div className="mt-6 text-xs text-primary-foreground/60">Or call {brand.phone}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
