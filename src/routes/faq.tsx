import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { HiOutlinePlus } from "react-icons/hi2";
import { Eyebrow, RevealText } from "@/components/site";
import { faqs } from "@/lib/site-data";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Common questions | Quantumrise Infra" },
      { name: "description", content: "Everything buyers ask about Quantumrise Infra — approvals, payment plans, construction and possession." },
      { property: "og:title", content: "Quantumrise Infra — FAQ" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Faq,
});

function Faq() {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState<number | null>(0);
  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return faqs;
    return faqs.filter((f) => f.q.toLowerCase().includes(s) || f.a.toLowerCase().includes(s));
  }, [q]);

  return (
    <>
      <section className="container-lux pt-24 pb-10 md:pt-32">
        <Eyebrow>FAQ</Eyebrow>
        <RevealText as="h1" className="max-w-3xl font-display text-5xl leading-[1.05] text-primary md:text-7xl">
          Everything, in plain language.
        </RevealText>
      </section>

      <section className="container-lux pb-24">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search the FAQ…"
          aria-label="Search frequently asked questions"
          className="mb-8 w-full rounded-full border border-border bg-card px-6 py-4 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none"
        />

        <div className="space-y-2">
          {filtered.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="overflow-hidden rounded-2xl border border-border bg-card"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                >
                  <span className="font-display text-lg text-primary md:text-xl">{f.q}</span>
                  <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="text-primary">
                    <HiOutlinePlus />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.65, 0, 0.35, 1] }}
                    >
                      <div className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground md:text-base">
                        {f.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
}
