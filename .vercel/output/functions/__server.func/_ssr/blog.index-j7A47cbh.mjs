import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as motion } from "../_libs/framer-motion.mjs";
import { a as RevealText, d as blogPosts, t as Eyebrow } from "./site-Cuda1iA-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog.index-j7A47cbh.js
var import_jsx_runtime = require_jsx_runtime();
function BlogIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-lux pt-24 pb-10 md:pt-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Journal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealText, {
			as: "h1",
			className: "max-w-3xl font-display text-5xl leading-[1.05] text-primary md:text-7xl",
			children: "Notes on land, design and living."
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-lux pb-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-8 md:grid-cols-2 lg:grid-cols-3",
			children: blogPosts.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.article, {
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
					margin: "-80px"
				},
				transition: {
					duration: .7,
					delay: i * .08
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/blog/$slug",
					params: { slug: p.slug },
					className: "group block",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-3xl bg-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.cover,
								alt: p.title,
								loading: "lazy",
								className: "aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-muted px-3 py-1",
								children: p.tag
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.read })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-2xl leading-tight text-primary transition-colors group-hover:text-primary/80 md:text-3xl",
							children: p.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted-foreground",
							children: p.excerpt
						})
					]
				})
			}, p.slug))
		})
	})] });
}
//#endregion
export { BlogIndex as component };
