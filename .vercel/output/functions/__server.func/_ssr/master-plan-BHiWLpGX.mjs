import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { o as motion, s as AnimatePresence } from "../_libs/framer-motion.mjs";
import { a as RevealText, r as MagneticButton, t as Eyebrow } from "./site-Cuda1iA-.mjs";
import { t as EnquiryModal } from "./enquiry-modal-Ck6LNQU1.mjs";
import { t as masterplan_default } from "./masterplan-Bj3lfwqN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/master-plan-BHiWLpGX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hotspots = [
	{
		x: 30,
		y: 40,
		label: "The Clubhouse",
		body: "42,000 sq.ft — the heart of the estate."
	},
	{
		x: 62,
		y: 30,
		label: "Infinity Pool",
		body: "Resort-grade pool at the forest edge."
	},
	{
		x: 46,
		y: 58,
		label: "Central Green",
		body: "Twelve acres of protected open space."
	},
	{
		x: 72,
		y: 66,
		label: "Sports Arena",
		body: "Tennis, basketball, cricket net."
	},
	{
		x: 22,
		y: 72,
		label: "Forest Trail",
		body: "2.4 km through native planting."
	}
];
function MasterPlanPage() {
	const [active, setActive] = (0, import_react.useState)(0);
	const [enquiryOpen, setEnquiryOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-lux pt-24 pb-10 md:pt-32",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "The master plan" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealText, {
				as: "h1",
				className: "max-w-4xl font-display text-5xl leading-[1.05] text-primary md:text-7xl",
				children: "Tap a hotspot. See where life happens."
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-lux pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 lg:grid-cols-[1fr_320px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative overflow-hidden rounded-3xl bg-primary/5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: masterplan_default,
						alt: "Master plan of Quantumrise Infra",
						className: "w-full object-cover",
						loading: "lazy"
					}), hotspots.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setActive(i),
						"aria-label": h.label,
						className: "absolute -translate-x-1/2 -translate-y-1/2",
						style: {
							left: `${h.x}%`,
							top: `${h.y}%`
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative flex h-4 w-4 items-center justify-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75 ${active === i ? "" : "opacity-40"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `relative inline-flex h-3 w-3 rounded-full border-2 border-primary-foreground ${active === i ? "bg-secondary" : "bg-primary"}` })]
						})
					}, h.label))]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "rounded-3xl border border-border bg-card p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] uppercase tracking-[0.3em] text-secondary-foreground/70",
							children: "Legend"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 space-y-1",
							children: hotspots.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setActive(i),
								className: `flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left transition-colors ${active === i ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `flex h-6 w-6 items-center justify-center rounded-full text-[10px] ${active === i ? "bg-secondary text-secondary-foreground" : "bg-muted text-muted-foreground"}`,
									children: i + 1
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-lg",
									children: h.label
								})]
							}, h.label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
							mode: "wait",
							children: active !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 8
								},
								animate: {
									opacity: 1,
									y: 0
								},
								exit: {
									opacity: 0,
									y: -8
								},
								className: "mt-6 rounded-2xl bg-muted/60 p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-[10px] uppercase tracking-[0.3em] text-secondary-foreground/70",
										children: ["Hotspot ", String(active + 1).padStart(2, "0")]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2 font-display text-2xl text-primary",
										children: hotspots[active].label
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted-foreground",
										children: hotspots[active].body
									})
								]
							}, active)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
								variant: "gold",
								onClick: () => setEnquiryOpen(true),
								children: "Download brochure"
							})
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnquiryModal, {
			open: enquiryOpen,
			onClose: () => setEnquiryOpen(false),
			title: "Download the Master Plan Brochure",
			context: "Brochure download — Master Plan"
		})
	] });
}
//#endregion
export { MasterPlanPage as component };
