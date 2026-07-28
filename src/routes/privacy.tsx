import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow, RevealText } from "@/components/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Quantumrise Infra" },
      { name: "description", content: "How Quantumrise Infra collects, uses and protects your information." },
      { property: "og:title", content: "Privacy · Quantumrise Infra" },
      { name: "robots", content: "index,follow" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <section className="container-lux max-w-3xl pt-24 pb-24 md:pt-32">
      <Eyebrow>Legal</Eyebrow>
      <RevealText as="h1" className="font-display text-5xl text-primary md:text-6xl">
        Privacy Policy
      </RevealText>
      <div className="prose mt-10 space-y-5 text-foreground/85">
        <p className="text-sm text-muted-foreground">Last updated: 20 May 2026</p>
        <p>This page is maintained by Quantumrise Infra to explain how we handle personal information collected through quantumriseinfra.com and our sales gallery.</p>
        <h2 className="mt-8 font-display text-2xl text-primary">What we collect</h2>
        <p>We collect the information you share when you request a site visit, download a brochure, or subscribe to the journal — typically your name, phone, email and preferred visit date.</p>
        <h2 className="mt-8 font-display text-2xl text-primary">How we use it</h2>
        <p>We use it to schedule and confirm your visit, share pricing and project updates you've asked for, and comply with regulatory requirements around real-estate marketing in Karnataka.</p>
        <h2 className="mt-8 font-display text-2xl text-primary">Sharing</h2>
        <p>We do not sell your information. We share it only with the small circle of Quantumrise Infra employees and vetted service providers who help us respond to you.</p>
        <h2 className="mt-8 font-display text-2xl text-primary">Your choices</h2>
        <p>You can ask us to update or delete your information at any time by writing to privacy@quantumriseinfra.com. Newsletter subscribers can unsubscribe from every email.</p>
        <h2 className="mt-8 font-display text-2xl text-primary">Contact</h2>
        <p>For any privacy question, email privacy@quantumriseinfra.com or write to Quantumrise Infra, North Bangalore.</p>
      </div>
    </section>
  );
}
