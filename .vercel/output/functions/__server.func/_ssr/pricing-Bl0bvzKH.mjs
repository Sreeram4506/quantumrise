import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { o as motion } from "../_libs/framer-motion.mjs";
import { S as plots, a as RevealText, o as SectionHeading, r as MagneticButton, t as Eyebrow } from "./site-Cuda1iA-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pricing-Bl0bvzKH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Pricing() {
	const [amount, setAmount] = (0, import_react.useState)(1.95);
	const [years, setYears] = (0, import_react.useState)(20);
	const [rate, setRate] = (0, import_react.useState)(8.5);
	const emi = (0, import_react.useMemo)(() => {
		const P = amount * 1e7;
		const r = rate / 12 / 100;
		const n = years * 12;
		const val = P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
		return Math.round(val).toLocaleString("en-IN");
	}, [
		amount,
		years,
		rate
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-lux pt-24 pb-16 md:pt-32",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Pricing" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealText, {
				as: "h1",
				className: "max-w-4xl font-display text-5xl leading-[1.05] text-primary md:text-7xl",
				children: "Four sizes, one design charter."
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-lux pb-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 md:grid-cols-2 lg:grid-cols-4",
				children: plots.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 24
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-60px"
					},
					transition: {
						duration: .7,
						delay: i * .08
					},
					className: `relative rounded-3xl border p-8 transition-all ${p.featured ? "border-secondary bg-primary text-primary-foreground shadow-[0_20px_60px_-20px_rgba(200,168,93,0.4)]" : "border-border bg-card"}`,
					children: [
						p.featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute -top-3 right-6 rounded-full bg-secondary px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-secondary-foreground",
							children: "Most chosen"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `text-[10px] uppercase tracking-[0.3em] ${p.featured ? "text-secondary" : "text-muted-foreground"}`,
							children: p.tag
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 font-display text-2xl",
							children: p.size
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `mt-6 font-display text-4xl ${p.featured ? "text-secondary" : "text-primary"}`,
							children: p.price
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `mt-2 text-xs ${p.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`,
							children: [
								"EMI from ",
								p.emi,
								" / month"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: `mt-6 space-y-2 text-sm ${p.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "· Full clubhouse access" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "· Registered freehold title" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "· Utilities to plot line" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "· Design charter guidance" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
								to: "/contact",
								variant: p.featured ? "gold" : "ghost",
								children: "Reserve"
							})
						})
					]
				}, p.size))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-lux pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl border border-border bg-card p-8 md:p-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "EMI calculator",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"See the monthly",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "italic text-secondary",
							children: "picture."
						})
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 grid gap-10 md:grid-cols-[1fr_1fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: `Plot price · ₹${amount} Cr`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "range",
									min: 1,
									max: 4,
									step: .05,
									value: amount,
									onChange: (e) => setAmount(+e.target.value),
									className: "w-full accent-[var(--primary)]"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: `Tenure · ${years} years`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "range",
									min: 5,
									max: 25,
									value: years,
									onChange: (e) => setYears(+e.target.value),
									className: "w-full accent-[var(--primary)]"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: `Interest · ${rate}%`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "range",
									min: 7,
									max: 12,
									step: .1,
									value: rate,
									onChange: (e) => setRate(+e.target.value),
									className: "w-full accent-[var(--primary)]"
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col justify-center rounded-2xl bg-primary p-10 text-primary-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase tracking-[0.28em] text-secondary",
								children: "Monthly EMI"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 font-display text-5xl md:text-6xl",
								children: ["₹", emi]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 text-sm text-primary-foreground/70",
								children: "Indicative only. Final rate subject to lender."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
									to: "/contact",
									variant: "gold",
									children: "Book consultation"
								})
							})
						]
					})]
				})]
			})
		})
	] });
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground",
		children: label
	}), children] });
}
//#endregion
export { Pricing as component };
