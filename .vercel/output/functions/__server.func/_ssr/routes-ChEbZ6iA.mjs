import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as useScroll, o as motion, r as useTransform } from "../_libs/framer-motion.mjs";
import { D as usps, T as testimonials, _ as heroStats, a as RevealText, c as StatCounter, f as brand, i as Parallax, l as TiltCard, n as GlassCard, o as SectionHeading, p as clubhouse_default, r as MagneticButton, t as Eyebrow, u as aerial_forest_default, v as interior_default, w as stats, x as plot_default } from "./site-Cuda1iA-.mjs";
import { t as EnquiryModal } from "./enquiry-modal-Ck6LNQU1.mjs";
import { t as masterplan_default } from "./masterplan-Bj3lfwqN.mjs";
import { t as hero_aerial_default } from "./hero-aerial-CGNGeLS0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-ChEbZ6iA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const [enquiryOpen, setEnquiryOpen] = (0, import_react.useState)(false);
	const [enquiryContext, setEnquiryContext] = (0, import_react.useState)("");
	const openEnquiry = (context) => {
		setEnquiryContext(context);
		setEnquiryOpen(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryStrip, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyUs, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectsTeaser, { openEnquiry }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MasterPlanTeaser, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestimonialsPreview, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClosingCTA, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnquiryModal, {
			open: enquiryOpen,
			onClose: () => setEnquiryOpen(false),
			title: "Interested in this project?",
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
							to: "/project",
							variant: "gold",
							children: "Explore the estate"
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
				className: "pointer-events-none absolute inset-x-0 bottom-0 z-10 hidden md:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container-lux pb-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 24
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: 1,
							delay: 1.4
						},
						className: "pointer-events-auto ml-auto grid max-w-md grid-cols-4 rounded-2xl border border-white/15 bg-white/10 p-1 backdrop-blur-xl",
						children: heroStats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-r border-white/10 px-3 py-3 text-center last:border-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-2xl text-secondary",
								children: s.value
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 text-[9px] uppercase tracking-[0.2em] text-primary-foreground/70",
								children: s.label
							})]
						}, s.label))
					})
				})
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
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-lux relative py-28 md:py-40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-16 md:grid-cols-2 md:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Parallax, {
				offset: 60,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative overflow-hidden rounded-3xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: interior_default,
						alt: "A villa interior at Quantumrise Infra",
						className: "aspect-[4/5] w-full object-cover",
						loading: "lazy",
						width: 1400,
						height: 1e3
					})
				})
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "The estate",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"Land as the last",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "italic text-secondary",
							children: "luxury."
						})
					] }),
					intro: "Quantumrise Infra is our most considered work — a low-density plotted community drawn around what already exists. Existing tree lines are protected. Water follows the natural fall. The clubhouse is placed where the site's best long-view happens to be."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid grid-cols-2 gap-8 md:grid-cols-4",
					children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCounter, {
						value: s.value,
						suffix: s.suffix,
						label: s.label
					}, s.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
						to: "/about",
						variant: "ghost",
						children: "Our story"
					})
				})
			] })]
		})
	});
}
function WhyUs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-primary py-28 text-primary-foreground md:py-40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-lux",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Why Quantumrise Infra",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Six reasons this address will",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
						className: "italic text-secondary",
						children: "age well."
					})
				] })
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
			className: "mt-16 grid gap-8 md:grid-cols-3",
			children: [
				{
					title: "The Haven Estate",
					tag: "Flagship Estate",
					description: "120-acre gated villa community with 42,000 sq.ft clubhouse, forest trails, and 180 villa plots. DTCP approved, RERA registered.",
					image: clubhouse_default,
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
				},
				{
					title: "Forest Reserve",
					tag: "Boutique Enclave",
					description: "An intimate collection of 24 premium villas nestled within a private forest reserve. Designed for those who seek absolute privacy.",
					image: aerial_forest_default,
					stats: [
						{
							value: "24",
							label: "Villas"
						},
						{
							value: "18",
							label: "Acres"
						},
						{
							value: "2026",
							label: "Possession"
						}
					]
				},
				{
					title: "Lakeview Enclave",
					tag: "Premium Plots",
					description: "Sprawling lakefront plots with uninterrupted water views. A curated community for families who value space, serenity and nature.",
					image: plot_default,
					stats: [
						{
							value: "60",
							label: "Acres"
						},
						{
							value: "85",
							label: "Plots"
						},
						{
							value: "2027",
							label: "Possession"
						}
					]
				}
			].map((project, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
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
function MasterPlanTeaser() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative overflow-hidden bg-primary text-primary-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-lux grid gap-16 py-28 md:grid-cols-2 md:items-center md:py-40",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "The master plan",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"Drawn around what",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "italic text-secondary",
							children: "already exists."
						})
					] }),
					intro: "180 villa plots on 120 acres — the lowest density among comparable projects in North Bangalore. Every road follows the contour. Every tree above 12 inches was mapped before we drew a line."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid grid-cols-3 gap-4 text-primary-foreground/80",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-3xl text-secondary",
							children: "64%"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-[10px] uppercase tracking-[0.25em]",
							children: "Open space"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-3xl text-secondary",
							children: "180"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-[10px] uppercase tracking-[0.25em]",
							children: "Villa plots"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-3xl text-secondary",
							children: "14"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-[10px] uppercase tracking-[0.25em]",
							children: "Amenities"
						})] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
						to: "/master-plan",
						variant: "gold",
						children: "See the plan"
					})
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Parallax, {
				offset: 40,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative rounded-3xl border border-primary-foreground/15 bg-primary-foreground/5 p-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: masterplan_default,
						alt: "Master plan",
						className: "aspect-square w-full rounded-2xl object-cover",
						loading: "lazy"
					})
				})
			})]
		})
	});
}
function TestimonialsPreview() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-lux py-28 md:py-40",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Owners",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Kind words from the",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
						className: "italic text-secondary",
						children: "first residents."
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid gap-6 md:grid-cols-3",
				children: testimonials.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
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
						delay: i * .1
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
						className: "h-full border border-border/60 bg-card/60",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-xl leading-snug text-primary md:text-2xl",
							children: [
								"“",
								t.quote.slice(0, 140),
								"…”"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: t.photo,
								alt: "",
								className: "h-12 w-12 rounded-full object-cover",
								loading: "lazy"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-medium text-primary",
								children: t.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-muted-foreground",
								children: t.role
							})] })]
						})]
					})
				}, t.name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
					to: "/testimonials",
					variant: "ghost",
					children: "All owner stories"
				})
			})
		]
	});
}
function ClosingCTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-lux pb-28 md:pb-40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden rounded-[36px] bg-primary p-10 text-primary-foreground md:p-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-20 -top-20 h-96 w-96 rounded-full bg-secondary/30 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 grid gap-10 md:grid-cols-[1.6fr_1fr] md:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Reserve a visit" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealText, {
					as: "h2",
					className: "font-display text-4xl leading-[1.05] md:text-6xl",
					children: "Tour the estate before the site is fenced off."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
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
							to: "/pricing",
							className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-primary-foreground/80 hover:text-secondary",
							children: "See pricing →"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 text-xs text-primary-foreground/60",
						children: ["Or call ", brand.phone]
					})
				] })]
			})]
		})
	});
}
//#endregion
export { Home as component };
