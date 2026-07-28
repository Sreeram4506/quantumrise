import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { o as motion } from "../_libs/framer-motion.mjs";
import { a as RevealText, b as nearby, o as SectionHeading, r as MagneticButton, t as Eyebrow } from "./site-Cuda1iA-.mjs";
import { t as EnquiryModal } from "./enquiry-modal-Ck6LNQU1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/location-CsxWAuWR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LocationPage() {
	const [enquiryOpen, setEnquiryOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-lux pt-24 pb-10 md:pt-32",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Location" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealText, {
					as: "h1",
					className: "max-w-4xl font-display text-5xl leading-[1.05] text-primary md:text-7xl",
					children: "North of the city, ahead of the curve."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-2xl text-muted-foreground md:text-lg",
					children: "Set on the emerging Nelamangala–Devanahalli corridor, twenty-two minutes from Kempegowda International Airport and adjacent to the proposed Peripheral Ring Road."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
						variant: "gold",
						onClick: () => setEnquiryOpen(true),
						children: "Enquire about this location"
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-lux pb-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 md:grid-cols-[1.4fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-3xl border border-border bg-primary/5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: "Quantumrise Infra location map",
						width: "100%",
						height: "520",
						loading: "lazy",
						className: "block h-[520px] w-full",
						src: "https://www.openstreetmap.org/export/embed.html?bbox=77.55%2C13.15%2C77.75%2C13.35&layer=mapnik"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-3",
					children: nearby.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							x: 20
						},
						whileInView: {
							opacity: 1,
							x: 0
						},
						viewport: {
							once: true,
							margin: "-60px"
						},
						transition: {
							duration: .6,
							delay: i * .05
						},
						className: "flex items-center justify-between gap-4 rounded-2xl border border-border bg-card p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] uppercase tracking-[0.28em] text-muted-foreground",
							children: n.category
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-lg text-primary",
							children: n.name
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-full bg-primary px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground",
							children: n.time
						})]
					}, n.name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-primary py-24 text-primary-foreground md:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-lux",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Why here",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"The airport corridor is",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "italic text-secondary",
							children: "Bangalore's next decade."
						})
					] }),
					intro: "Devanahalli is now home to India's second-largest aerospace SEZ, a new financial city and the Prestige tech corridor. Land within a twenty-minute radius has appreciated at a five-year CAGR above 14%."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
						variant: "gold",
						onClick: () => setEnquiryOpen(true),
						children: "Get location details"
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnquiryModal, {
			open: enquiryOpen,
			onClose: () => setEnquiryOpen(false),
			title: "Interested in this location?",
			context: "Location enquiry — North Bangalore"
		})
	] });
}
//#endregion
export { LocationPage as component };
