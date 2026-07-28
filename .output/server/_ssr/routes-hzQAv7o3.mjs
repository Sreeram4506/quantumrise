import { a as __toESM } from "../_runtime.mjs";
import { a as useScroll, o as motion, r as useTransform } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as RevealText, f as brand, l as TiltCard, o as SectionHeading, r as MagneticButton, t as Eyebrow, x as usps } from "./site-H_PIM-QR.mjs";
import { t as EnquiryModal } from "./enquiry-modal-BvYEwGnJ.mjs";
import { t as MasterPlanShowcase } from "./master-plan-showcase-Cyspeoq9.mjs";
import { t as hero_aerial_default } from "./hero-aerial-CGNGeLS0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-hzQAv7o3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const [enquiryOpen, setEnquiryOpen] = (0, import_react.useState)(false);
	const [enquiryContext, setEnquiryContext] = (0, import_react.useState)("");
	const [enquiryTitle, setEnquiryTitle] = (0, import_react.useState)("Interested in this project?");
	const openEnquiry = (context, title = "Interested in this project?") => {
		setEnquiryContext(context);
		setEnquiryTitle(title);
		setEnquiryOpen(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryStrip, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyUs, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectsTeaser, { openEnquiry }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MasterPlanShowcase, { onPrimaryAction: () => openEnquiry("Brochure download - Master Plan", "Download the Master Plan Brochure") }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClosingCTA, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnquiryModal, {
			open: enquiryOpen,
			onClose: () => setEnquiryOpen(false),
			title: enquiryTitle,
			context: enquiryContext
		})
	] });
}
function Hero() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
	const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
	const opacity = useTransform(scrollYProgress, [0, .9], [1, 0]);
	const downloadBrochure = () => {
		const link = document.createElement("a");
		link.href = "/Green%20Garden.pdf";
		link.download = "Green Garden.pdf";
		document.body.appendChild(link);
		link.click();
		link.remove();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref,
		className: "relative -mt-16 h-[100svh] min-h-[640px] overflow-hidden md:-mt-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				style: {
					y,
					scale
				},
				className: "absolute inset-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_aerial_default,
					alt: "",
					className: "h-full w-full object-cover",
					fetchPriority: "high",
					width: 1920,
					height: 1280
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/20 to-primary/70" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(120%_60%_at_50%_120%,rgba(18,48,38,0.9),transparent)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				style: { opacity },
				className: "container-lux relative z-10 flex h-full flex-col justify-end pb-24 md:pb-32",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealText, {
						as: "h1",
						className: "max-w-5xl font-display text-[42px] leading-[1.02] tracking-tight text-primary-foreground md:text-[92px]",
						children: "A quiet estate for a considered life."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 16
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .8,
							delay: .9
						},
						className: "mt-6 max-w-lg text-base leading-relaxed text-primary-foreground/85 md:text-lg",
						children: "One hundred and twenty acres of forest, land and clubhouse — plotted for families who value quiet more than address."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 16
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .8,
							delay: 1.05
						},
						className: "mt-10 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
							variant: "gold",
							onClick: downloadBrochure,
							children: "Download brochure"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
							to: "/contact",
							variant: "ghost",
							className: "border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary",
							children: "Schedule a visit"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-x-0 bottom-4 z-10 flex justify-center md:bottom-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					animate: { y: [
						0,
						8,
						0
					] },
					transition: {
						repeat: Infinity,
						duration: 2,
						ease: "easeInOut"
					},
					className: "text-[10px] uppercase tracking-[0.35em] text-primary-foreground/70",
					children: "Scroll"
				})
			})
		]
	});
}
function StoryStrip() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-border/60 bg-background py-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-lux flex flex-wrap items-center justify-between gap-6 text-xs uppercase tracking-[0.28em] text-muted-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "DTCP Approved" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden md:inline",
					children: "RERA · PRM/KA/RERA/1251/446"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Studio Yardstick · Landscape" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden md:inline",
					children: "Technogym · Wellness"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Possession · Q4 2027" })
			]
		})
	});
}
function WhyUs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-primary py-28 text-primary-foreground md:py-40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-lux",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Why Greenlands",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Six reasons this address will",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
						className: "italic text-secondary",
						children: "age well."
					})
				] }),
				eyebrowClassName: "text-secondary",
				titleClassName: "text-secondary"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3",
				children: usps.map((u, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
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
						delay: i * .06
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltCard, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group h-full rounded-3xl border border-primary-foreground/10 bg-primary-foreground/5 p-8 transition-all duration-500 hover:border-secondary/40 hover:bg-primary-foreground/10 hover:shadow-[0_20px_60px_-20px_rgba(200,168,93,0.35)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-12 w-12 items-center justify-center rounded-2xl border border-secondary/40 text-secondary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-lg",
									children: String(i + 1).padStart(2, "0")
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 font-display text-2xl",
								children: u.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-primary-foreground/70",
								children: u.body
							})
						]
					}) })
				}, u.title))
			})]
		})
	});
}
function ProjectsTeaser({ openEnquiry }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-lux py-28 md:py-40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Our Projects",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				"Discover our",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
					className: "italic text-secondary",
					children: "signature communities."
				})
			] }),
			intro: "Each project by Quantumrise Infra is thoughtfully planned — blending location, amenity and long-term value into a single address."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-16 flex justify-center",
			children: [{
				title: "Greenlands",
				tag: "Flagship Estate",
				description: "120-acre gated villa community with 42,000 sq.ft clubhouse, forest trails, and 180 villa plots. DTCP approved, RERA registered.",
				image: "/greenlands.jpeg",
				stats: [
					{
						value: "120",
						label: "Acres"
					},
					{
						value: "180+",
						label: "Plots"
					},
					{
						value: "42K",
						label: "Clubhouse"
					}
				]
			}].map((project, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					y: 32
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
					delay: i * .12
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => openEnquiry(project.title),
					className: "group block h-full w-full text-left",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative h-full overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:border-secondary/30 hover:shadow-[0_24px_80px_-24px_rgba(200,168,93,0.25)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative h-64 overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: project.image,
									alt: project.title,
									className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105",
									loading: "lazy"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute bottom-4 left-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "inline-block rounded-full bg-secondary px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-primary",
										children: project.tag
									})
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl text-primary transition-colors duration-300 group-hover:text-secondary",
									children: project.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted-foreground",
									children: project.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 grid grid-cols-3 gap-4 border-t border-border pt-6",
									children: project.stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-display text-xl text-primary md:text-2xl",
											children: s.value
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-0.5 text-[9px] uppercase tracking-[0.25em] text-muted-foreground",
											children: s.label
										})]
									}, s.label))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-secondary opacity-0 transition-all duration-300 group-hover:opacity-100",
									children: ["Enquire now", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-block transition-transform duration-300 group-hover:translate-x-1",
										children: "→"
									})]
								})
							]
						})]
					})
				})
			}, project.title))
		})]
	});
}
function ClosingCTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-lux py-28 md:py-40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden rounded-[36px] bg-primary p-10 text-primary-foreground md:p-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-20 -top-20 h-96 w-96 rounded-full bg-secondary/30 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 grid gap-10 md:grid-cols-[1.6fr_1fr] md:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
					className: "text-secondary",
					children: "Reserve a visit"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealText, {
					as: "h2",
					className: "font-display text-4xl leading-[1.05] text-secondary md:text-6xl",
					children: "Tour the estate before the site is fenced off."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:max-w-sm md:justify-self-end",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-primary-foreground/75",
							children: "Private site tours are available Thursday through Sunday. We'll arrange transport from your side of the city."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
								to: "/contact",
								variant: "gold",
								children: "Book your visit"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-primary-foreground/80 hover:text-secondary",
								children: "Request details →"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 text-xs text-primary-foreground/60",
							children: ["Or call ", brand.phone]
						})
					]
				})]
			})]
		})
	});
}
//#endregion
export { Home as component };
