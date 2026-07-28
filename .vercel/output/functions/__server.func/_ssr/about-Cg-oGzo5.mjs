import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { o as motion } from "../_libs/framer-motion.mjs";
import { E as timeline, a as RevealText, c as StatCounter, o as SectionHeading, r as MagneticButton, t as Eyebrow, v as interior_default, w as stats, y as landscape_default } from "./site-Cuda1iA-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-Cg-oGzo5.js
var import_jsx_runtime = require_jsx_runtime();
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative overflow-hidden bg-primary text-primary-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-lux py-28 md:py-40",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "About Quantumrise" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealText, {
						as: "h1",
						className: "max-w-4xl font-display text-5xl leading-[1.05] md:text-7xl",
						children: "We develop land the way old families used to plant trees."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 max-w-2xl text-primary-foreground/80 md:text-lg",
						children: "Slowly, with a view of the second generation. Quantumrise Infra was founded in 2011 with a single plotted community outside Coimbatore. Since then we've delivered twenty-two projects across four southern states — always plotted, always low-density, always finished before we sell the next."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-lux py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-10 md:grid-cols-4",
				children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCounter, { ...s }, s.label))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-lux py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-16 md:grid-cols-[1fr_1.2fr] md:items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Studio",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"A house style that",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "italic text-secondary",
							children: "refuses trend."
						})
					] }),
					intro: "Our work is designed to look correct in 2045 — not just correct in 2025. We work with a small circle of landscape and interior collaborators. We turn down two out of every three land opportunities."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: landscape_default,
						alt: "",
						loading: "lazy",
						className: "aspect-[4/5] w-full rounded-3xl object-cover"
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-primary py-24 text-primary-foreground md:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-lux",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Timeline",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Thirteen quiet years." })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 space-y-2",
					children: timeline.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							x: -20
						},
						whileInView: {
							opacity: 1,
							x: 0
						},
						viewport: {
							once: true,
							margin: "-80px"
						},
						transition: {
							duration: .7,
							delay: i * .08
						},
						className: "grid gap-4 border-b border-primary-foreground/10 py-8 md:grid-cols-[120px_1fr_2fr] md:items-baseline",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-3xl text-secondary",
								children: t.year
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-xl",
								children: t.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm text-primary-foreground/70",
								children: t.body
							})
						]
					}, t.year))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-lux py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 rounded-3xl bg-card p-10 md:grid-cols-2 md:p-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Meet",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"Come by our",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "italic text-secondary",
							children: "sales gallery."
						})
					] }),
					intro: "Twelve minutes from the airport. Espresso, master plan on the wall, and no pressure to make up your mind."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
						to: "/contact",
						variant: "gold",
						children: "Book your visit"
					})
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: interior_default,
					alt: "",
					loading: "lazy",
					className: "aspect-[4/3] w-full rounded-2xl object-cover"
				})]
			})
		})
	] });
}
//#endregion
export { About as component };
