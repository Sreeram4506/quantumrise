import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { z } from "zod";
import { brand } from "@/lib/site-data";
import { buildWhatsAppUrl, joinWhatsAppLines } from "@/lib/whatsapp";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(20),
  email: z.string().trim().email("Please enter a valid email").max(160).optional().or(z.literal("")),
  address: z.string().trim().min(5, "Please enter your address").max(200),
  message: z.string().trim().max(600).optional().or(z.literal("")),
});

interface EnquiryModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  context?: string;
}

export function EnquiryModal({ open, onClose, title = "Interested in this project?", context = "" }: EnquiryModalProps) {
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

    const { name, phone, email, address, message: userMessage } = parsed.data;
    const message = joinWhatsAppLines([
      "*New Enquiry*",
      context && `Regarding: ${context}`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      email && `Email: ${email}`,
      `Address: ${address}`,
      userMessage && `Message: ${userMessage}`,
    ]);

    const whatsappUrl = buildWhatsAppUrl(brand.whatsapp, message);
    window.open(whatsappUrl, "_blank");
    setSubmitting(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-end justify-center bg-black/50 backdrop-blur-sm md:items-center"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg rounded-t-3xl bg-background p-8 shadow-2xl md:rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground hover:bg-muted transition-colors"
              aria-label="Close"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 1l12 12M13 1L1 13" />
              </svg>
            </button>

            <div className="mb-6">
              <h2 className="mt-2 font-display text-3xl leading-tight text-primary">{title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Share your details and we&apos;ll connect you with our sales team on WhatsApp.
              </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-5" noValidate>
              <div>
                <label className="mb-1.5 block text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                  Your Name <span className="text-destructive">*</span>
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="e.g. Rajesh Kumar"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-primary placeholder:text-muted-foreground/50 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary/30"
                />
                {errors.name && <div className="mt-1 text-xs text-destructive">{errors.name}</div>}
              </div>

              <div>
                <label className="mb-1.5 block text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                  Phone Number <span className="text-destructive">*</span>
                </label>
                <input
                  name="phone"
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-primary placeholder:text-muted-foreground/50 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary/30"
                />
                {errors.phone && <div className="mt-1 text-xs text-destructive">{errors.phone}</div>}
              </div>

              <div>
                <label className="mb-1.5 block text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                  Email (optional)
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="e.g. rajesh@example.com"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-primary placeholder:text-muted-foreground/50 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary/30"
                />
                {errors.email && <div className="mt-1 text-xs text-destructive">{errors.email}</div>}
              </div>

              <div>
                <label className="mb-1.5 block text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                  Your Address <span className="text-destructive">*</span>
                </label>
                <textarea
                  name="address"
                  required
                  rows={2}
                  placeholder="e.g. 42, MG Road, Bangalore"
                  className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-primary placeholder:text-muted-foreground/50 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary/30"
                />
                {errors.address && <div className="mt-1 text-xs text-destructive">{errors.address}</div>}
              </div>

              <div>
                <label className="mb-1.5 block text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Tell us what you need, the preferred plot size, or any timing preference"
                  className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-primary placeholder:text-muted-foreground/50 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary/30"
                />
                {errors.message && <div className="mt-1 text-xs text-destructive">{errors.message}</div>}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-full bg-secondary py-3.5 text-sm font-medium uppercase tracking-[0.2em] text-secondary-foreground transition-all hover:brightness-105 disabled:opacity-60"
              >
                {submitting ? "Sending..." : "Send enquiry on WhatsApp"}
              </button>

              <p className="text-center text-[10px] text-muted-foreground/60">
                Your details will be shared with our sales team via WhatsApp. No spam, ever.
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
