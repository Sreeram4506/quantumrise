import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { o as motion, s as AnimatePresence } from "../_libs/framer-motion.mjs";
import { a as RevealText, g as galleryImages, h as galleryFilters, t as Eyebrow } from "./site-Cuda1iA-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-BTNOWYn6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Gallery() {
	const [filter, setFilter] = (0, import_react.useState)("All");
	const [open, setOpen] = (0, import_react.useState)(null);
	const visible = (0, import_react.useMemo)(() => filter === "All" ? galleryImages : galleryImages.filter((g) => g.category === filter), [filter]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-lux pt-24 pb-10 md:pt-32",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Gallery" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealText, {
				as: "h1",
				className: "max-w-4xl font-display text-5xl leading-[1.05] text-primary md:text-7xl",
				children: "A quiet portfolio of what Quantumrise Infra looks like."
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-lux pb-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: galleryFilters.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setFilter(f),
					className: `rounded-full border px-4 py-2 text-xs uppercase tracking-[0.22em] transition-all ${filter === f ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:border-primary/50"}`,
					children: f
				}, f))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-lux pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				layout: true,
				className: "columns-1 gap-4 sm:columns-2 md:columns-3 xl:columns-4",
				children: visible.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
					layout: true,
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .6,
						delay: i % 8 * .05
					},
					onClick: () => setOpen(i),
					className: "group mb-4 block w-full overflow-hidden rounded-2xl bg-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: g.src,
								alt: g.alt,
								loading: "lazy",
								className: "w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105",
								style: { aspectRatio: `${1e3 / (g.height || 1)}` }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent opacity-0 transition-opacity group-hover:opacity-100" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-x-0 bottom-0 translate-y-full p-4 text-xs text-primary-foreground transition-transform group-hover:translate-y-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-primary-foreground/15 px-2 py-1 backdrop-blur",
									children: g.category
								})
							})
						]
					})
				}, `${g.src}-${filter}`))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open !== null && visible[open] && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			onClick: () => setOpen(null),
			className: "fixed inset-0 z-[70] flex items-center justify-center bg-primary/95 p-6 backdrop-blur",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
				initial: {
					scale: .9,
					opacity: 0
				},
				animate: {
					scale: 1,
					opacity: 1
				},
				exit: {
					scale: .9,
					opacity: 0
				},
				src: visible[open].src,
				alt: visible[open].alt,
				className: "max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: (e) => {
					e.stopPropagation();
					setOpen(null);
				},
				"aria-label": "Close",
				className: "absolute right-6 top-6 rounded-full border border-primary-foreground/30 px-4 py-2 text-xs uppercase tracking-[0.2em] text-primary-foreground",
				children: "Close"
			})]
		}) })
	] });
}
//#endregion
export { Gallery as component };
