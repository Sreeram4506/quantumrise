import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Eyebrow, RevealText } from "@/components/site";
import { blogPosts } from "@/lib/site-data";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Journal — Notes on land, design and living | Quantumrise Infra" },
      { name: "description", content: "Essays on North Bangalore's land thesis, the master plan, and low-density living." },
      { property: "og:title", content: "Journal · Quantumrise Infra" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <>
      <section className="container-lux pt-24 pb-10 md:pt-32">
        <Eyebrow>Journal</Eyebrow>
        <RevealText as="h1" className="max-w-3xl font-display text-5xl leading-[1.05] text-primary md:text-7xl">
          Notes on land, design and living.
        </RevealText>
      </section>

      <section className="container-lux pb-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
            >
              <Link to="/blog/$slug" params={{ slug: p.slug }} className="group block">
                <div className="overflow-hidden rounded-3xl bg-muted">
                  <img
                    src={p.cover}
                    alt={p.title}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                </div>
                <div className="mt-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  <span className="rounded-full bg-muted px-3 py-1">{p.tag}</span>
                  <span>{p.read}</span>
                </div>
                <h2 className="mt-4 font-display text-2xl leading-tight text-primary transition-colors group-hover:text-primary/80 md:text-3xl">
                  {p.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}
