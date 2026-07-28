import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Eyebrow, RevealText } from "@/components/site";
import { galleryImages } from "@/lib/site-data";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Renders and moments from Quantumrise Infra" },
      { name: "description", content: "Clubhouse, amenities, landscape, interiors, aerial views and villa plots at Quantumrise Infra." },
      { property: "og:title", content: "Quantumrise Infra Gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <section className="container-lux pt-24 pb-10 md:pt-32">
        <Eyebrow>Gallery</Eyebrow>
        <RevealText as="h1" className="max-w-4xl font-display text-5xl leading-[1.05] text-primary md:text-7xl">
          A quiet portfolio of what Quantumrise Infra looks like.
        </RevealText>
      </section>

      <section className="container-lux pb-24">
        <motion.div layout className="columns-1 gap-4 sm:columns-2 md:columns-3 xl:columns-4">
          {galleryImages.map((g, i) => (
            <motion.button
              layout
              key={g.src}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (i % 8) * 0.05 }}
              onClick={() => setOpen(i)}
              className="group mb-4 block w-full overflow-hidden rounded-2xl bg-muted"
            >
              <div className="relative overflow-hidden">
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  style={{ aspectRatio: `${1000 / (g.height || 1)}` }}
                />
              </div>
            </motion.button>
          ))}
        </motion.div>
      </section>

      <AnimatePresence>
        {open !== null && galleryImages[open] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-primary/95 p-6 backdrop-blur"
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={galleryImages[open].src}
              alt={galleryImages[open].alt}
              className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpen(null);
              }}
              aria-label="Close"
              className="absolute right-6 top-6 rounded-full border border-primary-foreground/30 px-4 py-2 text-xs uppercase tracking-[0.2em] text-primary-foreground"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
