import { a as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as nearby, a as RevealText, g as landscape_default, i as Parallax, o as SectionHeading, r as MagneticButton, t as Eyebrow, u as aerial_forest_default } from "./site-H_PIM-QR.mjs";
import { t as EnquiryModal } from "./enquiry-modal-BvYEwGnJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/project-DCI4boh6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var plot_default = "/assets/plot-DpA_UyBf.jpg";
var specs = [
	{
		k: "Project",
		v: "Greenlands"
	},
	{
		k: "Developer",
		v: "Quantumrise Infra"
	},
	{
		k: "Type",
		v: "Plotted villa community"
	},
	{
		k: "Setting",
		v: "Low-density residential"
	},
	{
		k: "Planning",
		v: "Tree-lined avenues & parks"
	},
	{
		k: "Roads",
		v: "Well-lit internal roads"
	},
	{
		k: "Utilities",
		v: "Water, power & drainage ready"
	},
	{
		k: "Open space",
		v: "64% open & recreational area"
	},
	{
		k: "Status",
		v: "Construction underway — Possession Q4 2027"
	},
	{
		k: "Visits",
		v: "Thu–Sun, 10am–7pm"
	}
];
function Project() {
	const [enquiryOpen, setEnquiryOpen] = (0, import_react.useState)(false);
	const [enquiryContext, setEnquiryContext] = (0, import_react.useState)("");
	const openEnquiry = (context) => {
		setEnquiryContext(context);
		setEnquiryOpen(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative h-[70svh] min-h-[520px] overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: aerial_forest_default,
					alt: "",
					className: "absolute inset-0 h-full w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-primary/50 to-primary/80" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-lux relative z-10 flex h-full flex-col justify-end pb-16 text-primary-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Greenlands" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealText, {
							as: "h1",
							className: "max-w-3xl font-display text-5xl leading-[1.05] md:text-7xl",
							children: "A greener address, planned for everyday calm."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
								variant: "gold",
								onClick: () => openEnquiry("Greenlands"),
								children: "Enquire now"
							})
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-lux py-20 md:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Walkthrough",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"See Greenlands",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "italic text-secondary",
							children: "in motion."
						})
					] }),
					intro: "This walkthrough gives a quick sense of the site, the setting and the overall Greenlands experience before you visit in person."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-3xl border border-border bg-card shadow-[0_18px_60px_rgba(19,31,38,0.12)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("video", {
						controls: true,
						playsInline: true,
						preload: "metadata",
						className: "block h-full w-full bg-black object-cover",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
							src: "/Green%20Garden%20Walkthrough.mp4",
							type: "video/mp4"
						}), "Your browser does not support the video tag."]
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-lux py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 md:grid-cols-[1fr_1.2fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Project profile",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"Greenlands at",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "italic text-secondary",
							children: "a glance."
						})
					] }),
					intro: "Greenlands is our flagship plotted residential community with a quieter planning language: usable land, clear internal movement and pockets of green space around daily life."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 divide-y divide-border rounded-3xl border border-border bg-card",
					children: specs.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline justify-between gap-8 px-6 py-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-[0.25em] text-muted-foreground",
							children: s.k
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-xl text-primary md:text-2xl",
							children: s.v
						})]
					}, s.k))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
					variant: "gold",
					onClick: () => openEnquiry("Greenlands — Project Profile"),
					children: "Get pricing & availability"
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-primary py-28 text-primary-foreground md:py-40",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-lux grid gap-14 md:grid-cols-2 md:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Planning intent",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"Green space that",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "italic text-secondary",
							children: "feels usable."
						})
					] }),
					intro: "Greenlands focuses on the essentials buyers look for first: a clear residential layout, comfortable streets and a landscape-led setting."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Parallax, {
					offset: 60,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: landscape_default,
						alt: "",
						loading: "lazy",
						className: "aspect-[4/5] rounded-3xl object-cover"
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-lux py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: plot_default,
					alt: "",
					loading: "lazy",
					className: "aspect-[4/3] w-full rounded-3xl object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "The plots",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"Land for a",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "italic text-secondary",
							children: "future home."
						})
					] }),
					intro: "Each plot at Greenlands is designed for your future home — with clear titles, underground utilities and a community design charter that protects your investment."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
						variant: "primary",
						onClick: () => openEnquiry("Greenlands — Plots"),
						children: "Check plot availability"
					})
				})] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-lux pb-28 md:pb-40",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Location",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"Connected to what",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "italic text-secondary",
							children: "matters nearby."
						})
					] }),
					intro: "The map gives buyers a quick sense of the project setting, while the nearby list keeps daily conveniences, work hubs and leisure points easy to scan."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
						variant: "gold",
						onClick: () => openEnquiry("Greenlands — Location"),
						children: "Enquire about this location"
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 lg:grid-cols-[1.35fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-3xl border border-border bg-primary/5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: "Greenlands location map",
						width: "100%",
						height: "560",
						loading: "lazy",
						className: "block h-[420px] w-full md:h-[560px]",
						src: "https://www.openstreetmap.org/export/embed.html?bbox=77.85%2C12.93%2C78.02%2C13.08&layer=mapnik"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid content-start gap-3",
					children: nearby.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => openEnquiry(`Greenlands — ${item.name} (${item.category})`),
						className: "flex w-full items-center justify-between gap-4 rounded-2xl border border-border bg-card p-5 text-left transition-all hover:border-secondary/40 hover:shadow-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] uppercase tracking-[0.28em] text-muted-foreground",
							children: item.category
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-lg text-primary",
							children: item.name
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "shrink-0 rounded-full bg-primary px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground",
							children: item.time
						})]
					}, item.name))
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnquiryModal, {
			open: enquiryOpen,
			onClose: () => setEnquiryOpen(false),
			title: "Interested in Greenlands?",
			context: enquiryContext
		})
	] });
}
//#endregion
export { Project as component };
