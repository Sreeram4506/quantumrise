import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Eyebrow, MagneticButton, RevealText, SectionHeading, StatCounter } from "@/components/site";
import { stats, timeline } from "@/lib/site-data";
import landscape from "@/assets/landscape.jpg";
import interior from "@/assets/interior.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Quantumrise Infra — Thirteen years of considered land" },
      { name: "description", content: "Quantumrise Infra has been developing thoughtful plotted communities across South India since 2011. Meet the studio behind the vision." },
      { property: "og:title", content: "About Quantumrise Infra" },
      { property: "og:description", content: "13 years, 22 projects, 2,400 families. The studio behind the vision." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="container-lux py-28 md:py-40">
          <Eyebrow>About Quantumrise Infra</Eyebrow>
          <RevealText as="h1" className="max-w-4xl font-display text-5xl leading-[1.05] md:text-7xl">
            We develop land the way old families used to plant trees.
          </RevealText>
          <p className="mt-8 max-w-2xl text-primary-foreground/80 md:text-lg">
            Slowly, with a view of the second generation. Quantumrise Infra was founded in 2011 with a single plotted
            community outside Coimbatore. Since then we've delivered twenty-two projects across four
            southern states — always plotted, always low-density, always finished before we sell the next.
            Quantumrise Infra is our flagship community.
          </p>
        </div>
      </section>

      <section className="container-lux py-24">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {stats.map((s) => (
            <StatCounter key={s.label} {...s} />
          ))}
        </div>
      </section>

      <section className="container-lux py-24">
        <div className="grid gap-16 md:grid-cols-[1fr_1.2fr] md:items-start">
          <SectionHeading
            eyebrow="Studio"
            title={<>A house style that<br /><em className="italic text-secondary">refuses trend.</em></>}
            intro="Our work is designed to look correct in 2045 — not just correct in 2025. We work with a small circle of landscape and interior collaborators. We turn down two out of every three land opportunities."
          />
          <div className="relative">
            <img src={landscape} alt="" loading="lazy" className="aspect-[4/5] w-full rounded-3xl object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-primary py-24 text-primary-foreground md:py-32">
        <div className="container-lux">
          <SectionHeading eyebrow="Timeline" title={<>Thirteen quiet years.</>} />
          <div className="mt-16 space-y-2">
            {timeline.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="grid gap-4 border-b border-primary-foreground/10 py-8 md:grid-cols-[120px_1fr_2fr] md:items-baseline"
              >
                <div className="font-display text-3xl text-secondary">{t.year}</div>
                <div className="font-display text-xl">{t.title}</div>
                <div className="text-sm text-primary-foreground/70">{t.body}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-lux py-28">
        <div className="grid gap-10 rounded-3xl bg-card p-10 md:grid-cols-2 md:p-16">
          <div>
            <SectionHeading
              eyebrow="Meet"
              title={<>Come by our<br /><em className="italic text-secondary">sales gallery.</em></>}
              intro="Twelve minutes from the airport. Espresso, master plan on the wall, and no pressure to make up your mind."
            />
            <div className="mt-8">
              <MagneticButton to="/contact" variant="gold">Book your visit</MagneticButton>
            </div>
          </div>
          <img src={interior} alt="" loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover" />
        </div>
      </section>
    </>
  );
}
