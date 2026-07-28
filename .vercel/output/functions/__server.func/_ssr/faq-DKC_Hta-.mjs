import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { o as motion, s as AnimatePresence } from "../_libs/framer-motion.mjs";
import { a as HiOutlinePlus } from "../_libs/react-icons.mjs";
import { a as RevealText, m as faqs, t as Eyebrow } from "./site-Cuda1iA-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-DKC_Hta-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Faq() {
	const [q, setQ] = (0, import_react.useState)("");
	const [open, setOpen] = (0, import_react.useState)(0);
	const filtered = (0, import_react.useMemo)(() => {
		const s = q.trim().toLowerCase();
		if (!s) return faqs;
		return faqs.filter((f) => f.q.toLowerCase().includes(s) || f.a.toLowerCase().includes(s));
	}, [q]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-lux pt-24 pb-10 md:pt-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "FAQ" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealText, {
			as: "h1",
			className: "max-w-3xl font-display text-5xl leading-[1.05] text-primary md:text-7xl",
			children: "Everything, in plain language."
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-lux pb-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			value: q,
			onChange: (e) => setQ(e.target.value),
			placeholder: "Search the FAQ…",
			"aria-label": "Search frequently asked questions",
			className: "mb-8 w-full rounded-full border border-border bg-card px-6 py-4 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-2",
			children: filtered.map((f, i) => {
				const isOpen = open === i;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 12
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .5,
						delay: i * .04
					},
					className: "overflow-hidden rounded-2xl border border-border bg-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setOpen(isOpen ? null : i),
						className: "flex w-full items-center justify-between gap-6 px-6 py-5 text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg text-primary md:text-xl",
							children: f.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							animate: { rotate: isOpen ? 45 : 0 },
							className: "text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiOutlinePlus, {})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						initial: false,
						children: isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								height: 0,
								opacity: 0
							},
							animate: {
								height: "auto",
								opacity: 1
							},
							exit: {
								height: 0,
								opacity: 0
							},
							transition: {
								duration: .35,
								ease: [
									.65,
									0,
									.35,
									1
								]
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "px-6 pb-6 text-sm leading-relaxed text-muted-foreground md:text-base",
								children: f.a
							})
						})
					})]
				}, f.q);
			})
		})]
	})] });
}
//#endregion
export { Faq as component };
