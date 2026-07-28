import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Eyebrow, GlassCard, RevealText } from "@/components/site";
import { testimonials } from "@/lib/site-data";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Owner stories | Quantumrise Infra" },
      { name: "description", content: "What early residents say about buying at Quantumrise Infra." },
      { property: "og:title", content: "Owner stories · Quantumrise Infra" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <section className="container-lux pt-24 pb-16 md:pt-32">
        <Eyebrow>Owners</Eyebrow>
        <RevealText as="h1" className="max-w-4xl font-display text-5xl leading-[1.05] text-primary md:text-7xl">
          Kind words from the first residents.
        </RevealText>
      </section>

      <section className="container-lux pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={i === 0 ? "md:col-span-2" : ""}
            >
              <GlassCard className="h-full border border-border/60 bg-card/70 md:p-12">
                <div className="flex flex-col gap-8 md:flex-row md:items-start">
                  <img src={t.photo} alt="" loading="lazy" className="h-24 w-24 shrink-0 rounded-full object-cover md:h-32 md:w-32" />
                  <div>
                    <p className="font-display text-2xl leading-snug text-primary md:text-3xl">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="mt-6">
                      <div className="font-medium text-primary">{t.name}</div>
                      <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 rounded-3xl bg-primary p-10 text-primary-foreground">
          <div>
            <div className="text-[10px] uppercase tracking-[0.28em] text-secondary">Google reviews</div>
            <div className="mt-3 flex items-baseline gap-3">
              <span className="font-display text-6xl">4.9</span>
              <span className="text-sm text-primary-foreground/70">/ 5 · from 218 verified reviews</span>
            </div>
          </div>
          <div className="text-3xl text-secondary">★ ★ ★ ★ ★</div>
        </div>
      </section>
    </>
  );
}
