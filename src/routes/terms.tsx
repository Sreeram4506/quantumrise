import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow, RevealText } from "@/components/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use | Quantumrise Infra" },
      { name: "description", content: "Terms governing your use of quantumriseinfra.com." },
      { property: "og:title", content: "Terms · Quantumrise Infra" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <section className="container-lux max-w-3xl pt-24 pb-24 md:pt-32">
      <Eyebrow>Legal</Eyebrow>
      <RevealText as="h1" className="font-display text-5xl text-primary md:text-6xl">
        Terms of Use
      </RevealText>
      <div className="mt-10 space-y-5 text-foreground/85">
        <p className="text-sm text-muted-foreground">Last updated: 20 May 2026</p>
        <p>Please read these terms before using this website. By continuing to browse, you agree to them.</p>
        <h2 className="mt-8 font-display text-2xl text-primary">Content</h2>
        <p>All renders, master plans, images, layouts and text on this site are indicative only. Final specifications, pricing, elevations and delivery timelines are governed by the sale deed and RERA filings.</p>
        <h2 className="mt-8 font-display text-2xl text-primary">Intellectual property</h2>
        <p>All imagery, copy and brand marks are the property of Quantumrise Infra. Please write for permission before reuse.</p>
        <h2 className="mt-8 font-display text-2xl text-primary">Jurisdiction</h2>
        <p>These terms are governed by the laws of India. Any dispute will be subject to the exclusive jurisdiction of courts in Bangalore, Karnataka.</p>
      </div>
    </section>
  );
}
