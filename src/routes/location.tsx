import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Eyebrow, MagneticButton, RevealText, SectionHeading } from "@/components/site";
import { EnquiryModal } from "@/components/enquiry-modal";
import { nearby } from "@/lib/site-data";

export const Route = createFileRoute("/location")({
  head: () => ({
    meta: [
      { title: "Location - Malur connectivity | Quantumrise Infra" },
      {
        name: "description",
        content:
          "Malur location with access to Whitefield, ITPL, Narasapura Industrial Area, Hoskote, Bengaluru International Airport and civic conveniences.",
      },
      { property: "og:title", content: "Quantumrise Infra - Location" },
    ],
    links: [{ rel: "canonical", href: "/location" }],
  }),
  component: LocationPage,
});

function LocationPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <>
      <section className="container-lux pt-24 pb-10 md:pt-32">
        <Eyebrow>Location</Eyebrow>
        <RevealText as="h1" className="max-w-4xl font-display text-5xl leading-[1.05] text-primary md:text-7xl">
          Close to Malur, connected to Bangalore's growth corridors.
        </RevealText>
        <p className="mt-6 max-w-2xl text-muted-foreground md:text-lg">
          Positioned near Malur with fast access to Whitefield, ITPL, Narasapura Industrial Area, Hoskote and Bengaluru International Airport.
        </p>
        <div className="mt-8">
          <MagneticButton variant="gold" onClick={() => setEnquiryOpen(true)}>
            Enquire about this location
          </MagneticButton>
        </div>
      </section>

      <section className="container-lux pb-16">
        <div className="grid items-stretch gap-8 md:grid-cols-[1.4fr_1fr]">
          <div className="overflow-hidden rounded-3xl border border-border bg-primary/5 h-[520px]">
            <iframe
              title="Quantumrise Infra location map"
              loading="lazy"
              className="block h-full w-full"
              style={{ border: 0 }}
              src="https://www.google.com/maps?q=XXW5%2B3CW,+Neelakanta+Agrahara,+Malur,+Karnataka+563130&output=embed"
            />
          </div>
          <div className="space-y-3">
            {nearby.map((n, i) => (
              <motion.div
                key={n.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-card p-5"
              >
                <div>
                  <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">{n.category}</div>
                  <div className="font-display text-lg text-primary">{n.name}</div>
                </div>
                <div className="rounded-full bg-primary px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground">
                  {n.time}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-24 text-primary-foreground md:py-32">
        <div className="container-lux">
          <SectionHeading
            eyebrow="Why here"
            title={<>Malur sits between<br /><em className="italic text-secondary">industry, IT and access.</em></>}
            intro="With Narasapura Industrial Area nearby, Whitefield and ITPL within reach, and the proposed Malur Ring Road just 500 metres away, the location keeps work hubs and daily essentials easy to access."
          />
          <div className="mt-10">
            <MagneticButton variant="gold" onClick={() => setEnquiryOpen(true)}>
              Get location details
            </MagneticButton>
          </div>
        </div>
      </section>

      <EnquiryModal
        open={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        title="Interested in this location?"
        context="Location enquiry - Malur"
      />
    </>
  );
}
