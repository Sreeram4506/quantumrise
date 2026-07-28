import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { z } from "zod";
import { Eyebrow, MagneticButton, RevealText } from "@/components/site";
import { brand } from "@/lib/site-data";
import { buildWhatsAppUrl, joinWhatsAppLines } from "@/lib/whatsapp";

const schema = z.object({
  name: z.string().trim().min(2, "Please share your name").max(80),
  phone: z.string().trim().min(7, "A valid phone please").max(20),
  email: z.string().trim().email("A valid email please").max(160),
  date: z.string().optional(),
  message: z.string().trim().max(600).optional(),
});

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book a site visit | Quantumrise Infra" },
      { name: "description", content: "Book a private tour of Quantumrise Infra. Thursday to Sunday. Transport arranged from your side of the city." },
      { property: "og:title", content: "Contact · Quantumrise Infra" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [state, setState] = useState<"idle" | "sent">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const es: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (es[i.path[0] as string] = i.message));
      setErrors(es);
      return;
    }
    setErrors({});
    setSubmitting(true);

    const { name, phone, email, date, message } = parsed.data;
    const msg = joinWhatsAppLines([
      "*New Site Visit Request*",
      `Name: ${name}`,
      `Phone: ${phone}`,
      email && `Email: ${email}`,
      date && `Preferred Date: ${date}`,
      message && `Message: ${message}`,
    ]);

    const whatsappUrl = buildWhatsAppUrl(brand.whatsapp, msg);
    window.open(whatsappUrl, "_blank");
    setSubmitting(false);
    setState("sent");
  };

  return (
    <>
      <section className="container-lux pt-24 pb-8 md:pt-32">
        <Eyebrow>Book a visit</Eyebrow>
        <RevealText as="h1" className="max-w-4xl font-display text-5xl leading-[1.05] text-primary md:text-7xl">
          Come see what we can't put into a brochure.
        </RevealText>
      </section>

      <section className="container-lux pb-24">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <div className="rounded-3xl border border-border bg-card p-8 md:p-12">
            <AnimatePresence mode="wait">
              {state === "idle" ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={onSubmit}
                  className="space-y-6"
                  noValidate
                >
                  {[
                    { name: "name", label: "Your name", type: "text" },
                    { name: "phone", label: "Phone", type: "tel" },
                    { name: "email", label: "Email", type: "email" },
                    { name: "date", label: "Preferred date", type: "date" },
                  ].map((f) => (
                    <div key={f.name}>
                      <label className="mb-2 block text-[10px] uppercase tracking-[0.28em] text-muted-foreground">{f.label}</label>
                      <input
                        name={f.name}
                        type={f.type}
                        className="w-full border-b border-border bg-transparent py-3 text-base focus:border-primary focus:outline-none"
                      />
                      {errors[f.name] && <div className="mt-1 text-xs text-destructive">{errors[f.name]}</div>}
                    </div>
                  ))}
                  <div>
                    <label className="mb-2 block text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Message</label>
                    <textarea
                      name="message"
                      rows={3}
                      className="w-full resize-none border-b border-border bg-transparent py-3 text-base focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div className="pt-4">
                    <MagneticButton type="submit" variant="gold">
                      {submitting ? "Sending..." : "Request a visit"}
                    </MagneticButton>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="ok"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-16 text-center"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                    ✓
                  </div>
                  <h2 className="mt-6 font-display text-3xl text-primary">Thank you.</h2>
                  <p className="mt-3 text-muted-foreground">Our estate manager will be in touch within one working day to confirm your visit.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl bg-primary p-8 text-primary-foreground">
              <div className="text-[10px] uppercase tracking-[0.28em] text-secondary">Sales gallery</div>
              <div className="mt-3 font-display text-2xl">{brand.address}</div>
              <div className="mt-4 space-y-1 text-sm text-primary-foreground/80">
                <div>Thursday — Sunday · 10am — 7pm</div>
                <div>Or by private appointment.</div>
              </div>
            </div>
            <a href={`tel:${brand.phone}`} className="block rounded-3xl border border-border bg-card p-8">
              <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Call the estate desk</div>
              <div className="mt-2 font-display text-2xl text-primary">{brand.phone}</div>
            </a>
            <a href={`https://wa.me/${brand.whatsapp.replace(/\D/g, "")}`} className="block rounded-3xl border border-border bg-card p-8">
              <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">WhatsApp</div>
              <div className="mt-2 font-display text-2xl text-primary">Chat with sales</div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
