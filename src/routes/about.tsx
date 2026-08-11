import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Eyebrow, MagneticButton, RevealText, SectionHeading } from "@/components/site";
import interior from "@/assets/interior.jpg";
import { managingDirector } from "@/lib/site-data";

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

      <section className="container-lux py-28 md:py-40">
        <div className="grid gap-16 md:grid-cols-[1fr_1.4fr] md:items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-3xl bg-primary/5"
            >
              <img
                src={managingDirector.photo}
                alt={managingDirector.name}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover object-center"
              />
            </motion.div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Leadership"
              title={<>The man behind<br /><em className="italic text-secondary">the vision.</em></>}
            />
            <div className="mt-8">
              <h3 className="font-display text-3xl text-primary md:text-4xl">{managingDirector.name}</h3>
              <div className="mt-2 text-xs uppercase tracking-[0.3em] text-secondary">{managingDirector.role}</div>
              <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">{managingDirector.bio}</p>
              <blockquote className="mt-8 border-l-2 border-secondary pl-6 font-display text-xl leading-snug text-primary md:text-2xl">
                &ldquo;{managingDirector.quote}&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
