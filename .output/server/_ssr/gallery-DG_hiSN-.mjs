import { a as __toESM } from "../_runtime.mjs";
import { o as motion, s as AnimatePresence } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as RevealText, m as galleryImages, t as Eyebrow } from "./site-H_PIM-QR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-DG_hiSN-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Gallery() {
	const [open, setOpen] = (0, import_react.useState)(null);
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
			className: "container-lux pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				layout: true,
				className: "columns-1 gap-4 sm:columns-2 md:columns-3 xl:columns-4",
				children: galleryImages.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
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
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: g.src,
							alt: g.alt,
							loading: "lazy",
							className: "w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105",
							style: { aspectRatio: `${1e3 / (g.height || 1)}` }
						})
					})
				}, g.src))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open !== null && galleryImages[open] && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
				src: galleryImages[open].src,
				alt: galleryImages[open].alt,
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
