import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Eyebrow, MagneticButton, Parallax, RevealText, SectionHeading } from "@/components/site";
import { EnquiryModal } from "@/components/enquiry-modal";
import aerial from "@/assets/aerial-forest.jpg";
import landscape from "@/assets/landscape.jpg";
import plot from "@/assets/plot.jpg";
import { nearby } from "@/lib/site-data";

export const Route = createFileRoute("/project")({
  head: () => ({
    meta: [
      { title: "Green Gardens — Project Overview" },
      { name: "description", content: "Explore Green Gardens, a premium plotted villa community in North Bangalore." },
      { property: "og:title", content: "Green Gardens — Project Overview" },
      { property: "og:image", content: aerial },
    ],
    links: [{ rel: "canonical", href: "/project" }],
  }),
  component: Project,
});

const specs = [
  { k: "Project", v: "Green Gardens" },
  { k: "Developer", v: "Quantumrise Infra" },
  { k: "Type", v: "Plotted villa community" },
  { k: "Setting", v: "Low-density residential" },
  { k: "Planning", v: "Tree-lined avenues & parks" },
  { k: "Roads", v: "Well-lit internal roads" },
  { k: "Utilities", v: "Water, power & drainage ready" },
  { k: "Open space", v: "64% open & recreational area" },
  { k: "Status", v: "Construction underway — Possession Q4 2027" },
  { k: "Visits", v: "Thu–Sun, 10am–7pm" },
];

function Project() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [enquiryContext, setEnquiryContext] = useState("");

  const openEnquiry = (context: string) => {
    setEnquiryContext(context);
    setEnquiryOpen(true);
  };

  return (
    <>
      <section className="relative h-[70svh] min-h-[520px] overflow-hidden">
        <img src={aerial} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-primary/80" />
        <div className="container-lux relative z-10 flex h-full flex-col justify-end pb-16 text-primary-foreground">
          <Eyebrow className="text-secondary">Green Gardens</Eyebrow>
          <RevealText as="h1" className="max-w-3xl font-display text-5xl leading-[1.05] md:text-7xl">
            A greener address, planned for everyday calm.
          </RevealText>
          <div className="mt-8">
            <MagneticButton variant="gold" onClick={() => openEnquiry("Green Gardens")}>
              Enquire now
            </MagneticButton>
          </div>
        </div>
      </section>

      <section className="container-lux py-20 md:py-28">
        <div className="mb-16 text-center">
          <Eyebrow className="justify-center">Announcement</Eyebrow>
          <RevealText as="h2" className="mx-auto max-w-3xl font-display text-4xl leading-[1.1] text-primary md:text-6xl">
            Something big is happening.
          </RevealText>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Stay tuned for a major new announcement from Quantumrise Infra.
          </motion.p>
        </div>
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-3xl bg-primary/5"
          >
            <div className="flex aspect-[16/7] w-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-secondary/20 text-secondary">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-4xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M464 448H48c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h416c8.8 0 16 7.2 16 16v352c0 8.8-7.2 16-16 16zM96 288l64-64 96 96 64-64 96 96V128H96v160z"></path>
                </svg>
              </div>
              <div className="text-center">
                <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Image coming soon</div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <SectionHeading
            eyebrow="Walkthrough"
            title={<>See Green Gardens<br /><em className="italic text-secondary">in motion.</em></>}
            intro="This walkthrough gives a quick sense of the site, the setting and the overall Green Gardens experience before you visit in person."
          />
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-[0_18px_60px_rgba(19,31,38,0.12)]">
            <video
              controls
              playsInline
              preload="metadata"
              className="block h-full w-full bg-black object-cover"
            >
              <source src="/Green%20Garden%20Walkthrough.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <section className="container-lux py-28">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <SectionHeading
            eyebrow="Project profile"
            eyebrowClassName="text-secondary"
            title={<>Green Gardens at<br /><em className="italic text-secondary">a glance.</em></>}
            intro="Green Gardens is our flagship plotted residential community with a quieter planning language: usable land, clear internal movement and pockets of green space around daily life."
          />
          <div className="grid grid-cols-1 divide-y divide-border rounded-3xl border border-border bg-card">
            {specs.map((s) => (
              <div key={s.k} className="flex items-baseline justify-between gap-8 px-6 py-5">
                <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{s.k}</div>
                <div className="font-display text-xl text-primary md:text-2xl">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center">
          <MagneticButton variant="gold" onClick={() => openEnquiry("Green Gardens — Project Profile")}>
            Get pricing & availability
          </MagneticButton>
        </div>
      </section>

      <section className="bg-primary py-28 text-primary-foreground md:py-40">
        <div className="container-lux grid gap-14 md:grid-cols-2 md:items-center">
          <SectionHeading
            eyebrow="Planning intent"
            eyebrowClassName="text-secondary"
            title={<>Green space that<br /><em className="italic text-secondary">feels usable.</em></>}
            intro="Green Gardens focuses on the essentials buyers look for first: a clear residential layout, comfortable streets and a landscape-led setting."
          />
          <Parallax offset={60}>
            <img src={landscape} alt="" loading="lazy" className="aspect-[4/5] rounded-3xl object-cover" />
          </Parallax>
        </div>
      </section>

      <section className="container-lux py-28">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
          <img src={plot} alt="" loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover" />
          <div>
            <SectionHeading
              eyebrow="The plots"
              title={<>Land for a<br /><em className="italic text-secondary">future home.</em></>}
              intro="Each plot at Green Gardens is designed for your future home — with clear titles, underground utilities and a community design charter that protects your investment."
            />
            <div className="mt-8">
              <MagneticButton variant="primary" onClick={() => openEnquiry("Green Gardens — Plots")}>
                Check plot availability
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>

      <section className="container-lux pb-28 md:pb-40">
        <div className="mb-12">
          <SectionHeading
            eyebrow="Location"
            title={<>Connected to what<br /><em className="italic text-secondary">matters nearby.</em></>}
            intro="The map gives buyers a quick sense of the project setting, while the nearby list keeps daily conveniences, work hubs and leisure points easy to scan."
          />
          <div className="mt-6">
            <MagneticButton variant="gold" onClick={() => openEnquiry("Green Gardens — Location")}>
              Enquire about this location
            </MagneticButton>
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:items-start">
          <div className="self-start overflow-hidden rounded-3xl border border-border bg-primary/5">
            <iframe
              title="Site No:17/1, Neelanka Agrahara, Malur, Kolar Dt, Karnataka-563130 map"
              width="100%"
              height="560"
              loading="lazy"
              className="block h-[420px] w-full md:h-[560px]"
              src="https://www.google.com/maps?q=Site+No%3A17%2F1%2C+Neelanka+Agrahara%2C+Malur%2C+Kolar+Dt%2C+Karnataka-563130&output=embed"
            />
          </div>
          <div className="grid content-start gap-3">
            {nearby.map((item) => (
              <button
                key={item.name}
                onClick={() => openEnquiry(`Green Gardens — ${item.name} (${item.category})`)}
                className="flex w-full items-center justify-between gap-4 rounded-2xl border border-border bg-card p-5 text-left transition-all hover:border-secondary/40 hover:shadow-md"
              >
                <div>
                  <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                    {item.category}
                  </div>
                  <div className="font-display text-lg text-primary">{item.name}</div>
                </div>
                <div className="shrink-0 rounded-full bg-primary px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground">
                  {item.time}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <EnquiryModal
        open={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        title="Interested in Green Gardens?"
        context={enquiryContext}
      />
    </>
  );
}
