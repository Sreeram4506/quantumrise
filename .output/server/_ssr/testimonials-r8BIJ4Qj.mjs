import { o as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as RevealText, n as GlassCard, t as Eyebrow, y as testimonials } from "./site-H_PIM-QR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/testimonials-r8BIJ4Qj.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-lux pt-24 pb-16 md:pt-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Owners" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealText, {
			as: "h1",
			className: "max-w-4xl font-display text-5xl leading-[1.05] text-primary md:text-7xl",
			children: "Kind words from the first residents."
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-lux pb-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 md:grid-cols-2",
			children: testimonials.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					y: 30
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-80px"
				},
				transition: {
					duration: .8,
					delay: i * .1
				},
				className: i === 0 ? "md:col-span-2" : "",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassCard, {
					className: "h-full border border-border/60 bg-card/70 md:p-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-8 md:flex-row md:items-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: t.photo,
							alt: "",
							loading: "lazy",
							className: "h-24 w-24 shrink-0 rounded-full object-cover md:h-32 md:w-32"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-2xl leading-snug text-primary md:text-3xl",
							children: [
								"“",
								t.quote,
								"”"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-medium text-primary",
								children: t.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase tracking-[0.2em] text-muted-foreground",
								children: t.role
							})]
						})] })]
					})
				})
			}, t.name))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-16 flex flex-wrap items-center justify-between gap-6 rounded-3xl bg-primary p-10 text-primary-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[10px] uppercase tracking-[0.28em] text-secondary",
				children: "Google reviews"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex items-baseline gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-6xl",
					children: "4.9"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm text-primary-foreground/70",
					children: "/ 5 · from 218 verified reviews"
				})]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-3xl text-secondary",
				children: "★ ★ ★ ★ ★"
			})]
		})]
	})] });
}
//#endregion
export { Page as component };
