import { a as __toESM } from "../_runtime.mjs";
import { o as motion, s as AnimatePresence } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as RevealText, f as brand, r as MagneticButton, t as Eyebrow } from "./site-H_PIM-QR.mjs";
import { n as joinWhatsAppLines, t as buildWhatsAppUrl } from "./whatsapp-DL1OTT2C.mjs";
import { n as object, r as string } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-DdsXI7JS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var schema = object({
	name: string().trim().min(2, "Please share your name").max(80),
	phone: string().trim().min(7, "A valid phone please").max(20),
	email: string().trim().email("A valid email please").max(160),
	date: string().optional(),
	message: string().trim().max(600).optional()
});
function Contact() {
	const [state, setState] = (0, import_react.useState)("idle");
	const [errors, setErrors] = (0, import_react.useState)({});
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const onSubmit = (e) => {
		e.preventDefault();
		const data = Object.fromEntries(new FormData(e.currentTarget));
		const parsed = schema.safeParse(data);
		if (!parsed.success) {
			const es = {};
			parsed.error.issues.forEach((i) => es[i.path[0]] = i.message);
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
			message && `Message: ${message}`
		]);
		const whatsappUrl = buildWhatsAppUrl(brand.whatsapp, msg);
		window.open(whatsappUrl, "_blank");
		setSubmitting(false);
		setState("sent");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-lux pt-24 pb-8 md:pt-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Book a visit" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealText, {
			as: "h1",
			className: "max-w-4xl font-display text-5xl leading-[1.05] text-primary md:text-7xl",
			children: "Come see what we can't put into a brochure."
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-lux pb-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 md:grid-cols-[1.2fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-3xl border border-border bg-card p-8 md:p-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
					mode: "wait",
					children: state === "idle" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.form, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						exit: { opacity: 0 },
						onSubmit,
						className: "space-y-6",
						noValidate: true,
						children: [
							[
								{
									name: "name",
									label: "Your name",
									type: "text"
								},
								{
									name: "phone",
									label: "Phone",
									type: "tel"
								},
								{
									name: "email",
									label: "Email",
									type: "email"
								},
								{
									name: "date",
									label: "Preferred date",
									type: "date"
								}
							].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "mb-2 block text-[10px] uppercase tracking-[0.28em] text-muted-foreground",
									children: f.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									name: f.name,
									type: f.type,
									className: "w-full border-b border-border bg-transparent py-3 text-base focus:border-primary focus:outline-none"
								}),
								errors[f.name] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 text-xs text-destructive",
									children: errors[f.name]
								})
							] }, f.name)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "mb-2 block text-[10px] uppercase tracking-[0.28em] text-muted-foreground",
								children: "Message"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								name: "message",
								rows: 3,
								className: "w-full resize-none border-b border-border bg-transparent py-3 text-base focus:border-primary focus:outline-none"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pt-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
									type: "submit",
									variant: "gold",
									children: submitting ? "Sending..." : "Request a visit"
								})
							})
						]
					}, "form") : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 10
						},
						animate: {
							opacity: 1,
							y: 0
						},
						className: "py-16 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-secondary-foreground",
								children: "✓"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-6 font-display text-3xl text-primary",
								children: "Thank you."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-muted-foreground",
								children: "Our estate manager will be in touch within one working day to confirm your visit."
							})
						]
					}, "ok")
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-3xl bg-primary p-8 text-primary-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] uppercase tracking-[0.28em] text-secondary",
								children: "Sales gallery"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 font-display text-2xl",
								children: brand.address
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 space-y-1 text-sm text-primary-foreground/80",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Thursday — Sunday · 10am — 7pm" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Or by private appointment." })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `tel:${brand.phone}`,
						className: "block rounded-3xl border border-border bg-card p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] uppercase tracking-[0.28em] text-muted-foreground",
							children: "Call the estate desk"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 font-display text-2xl text-primary",
							children: brand.phone
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `https://wa.me/${brand.whatsapp.replace(/\D/g, "")}`,
						className: "block rounded-3xl border border-border bg-card p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] uppercase tracking-[0.28em] text-muted-foreground",
							children: "WhatsApp"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 font-display text-2xl text-primary",
							children: "Chat with sales"
						})]
					})
				]
			})]
		})
	})] });
}
//#endregion
export { Contact as component };
