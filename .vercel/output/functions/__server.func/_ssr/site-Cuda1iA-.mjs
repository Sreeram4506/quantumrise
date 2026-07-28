import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as useScroll, i as useMotionValue, n as useSpring, o as motion, r as useTransform, s as AnimatePresence, t as useInView } from "../_libs/framer-motion.mjs";
import { t as Lenis } from "../_libs/lenis.mjs";
import { i as HiOutlinePhone, n as HiOutlineArrowUp, r as HiOutlineArrowUpRight, t as FaWhatsapp } from "../_libs/react-icons.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-Cuda1iA-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var clubhouse_default = "/assets/clubhouse-ChdM46rx.jpg";
var pool_default = "/assets/pool-BsYjNEeD.jpg";
var gym_default = "/assets/gym-BTDvSVNo.jpg";
var jogging_default = "/assets/jogging-DDkkhMFG.jpg";
var kids_default = "/assets/kids-BoBmz3Eh.jpg";
var yoga_default = "/assets/yoga-DDAYYQl7.jpg";
var sports_default = "/assets/sports-CSayOgxF.jpg";
var landscape_default = "/assets/landscape-Dp9MiTDE.jpg";
var plot_default = "/assets/plot-DpA_UyBf.jpg";
var interior_default = "/assets/interior-BxwcZTvu.jpg";
var aerial_forest_default = "/assets/aerial-forest-CPUx8o0m.jpg";
var testimonial_1_default = "/assets/testimonial-1-fn9hzzvI.jpg";
var testimonial_2_default = "/assets/testimonial-2-ZND_ZC-l.jpg";
var testimonial_3_default = "/assets/testimonial-3-j-jXDEzo.jpg";
var brand = {
	name: "Quantumrise Infra",
	tagline: "Villa plots crafted for a considered life.",
	short: "Quantumrise",
	phone: "+91 90000 00000",
	whatsapp: "+919000000000",
	email: "hello@quantumriseinfra.com",
	address: "Off Nelamangala–Devanahalli Road, North Bangalore",
	locality: "Bangalore North"
};
var nav = [
	{
		label: "Projects",
		to: "/project"
	},
	{
		label: "Master Plan",
		to: "/master-plan"
	},
	{
		label: "Gallery",
		to: "/gallery"
	},
	{
		label: "Location",
		to: "/location"
	},
	{
		label: "Investment",
		to: "/investment"
	},
	{
		label: "Pricing",
		to: "/pricing"
	},
	{
		label: "About",
		to: "/about"
	}
];
var heroStats = [
	{
		value: "120+",
		label: "Acres"
	},
	{
		value: "42k",
		label: "Sq.ft Clubhouse"
	},
	{
		value: "180+",
		label: "Villa Plots"
	},
	{
		value: "2027",
		label: "Possession"
	}
];
var usps = [
	{
		title: "Infrastructure",
		body: "Underground utilities, granite kerbs, tree-lined avenues and rain-water harvesting across every plot.",
		icon: "grid"
	},
	{
		title: "Location",
		body: "20 minutes from Kempegowda Airport and the emerging North Bangalore business district.",
		icon: "map"
	},
	{
		title: "Investment",
		body: "Prime North Bangalore land with a five-year price appreciation curve consistently above 14% CAGR.",
		icon: "trend"
	},
	{
		title: "Amenities",
		body: "A 42,000 sq.ft clubhouse, forest walking trails, sports arena, yoga deck and family pool.",
		icon: "spark"
	},
	{
		title: "Legal Clarity",
		body: "DTCP approved layout, single-title conveyance, RERA-registered with clean sub-registrar records.",
		icon: "shield"
	},
	{
		title: "Future Growth",
		body: "Adjacent to the proposed Peripheral Ring Road corridor and Devanahalli aerospace SEZ.",
		icon: "compass"
	}
];
var galleryImages = [
	{
		src: clubhouse_default,
		alt: "Clubhouse at dusk",
		category: "Clubhouse",
		height: 720
	},
	{
		src: pool_default,
		alt: "Infinity pool",
		category: "Amenities",
		height: 900
	},
	{
		src: landscape_default,
		alt: "Landscaped walkway",
		category: "Landscape",
		height: 640
	},
	{
		src: aerial_forest_default,
		alt: "Forest aerial",
		category: "Aerial",
		height: 1e3
	},
	{
		src: interior_default,
		alt: "Villa interior",
		category: "Interiors",
		height: 800
	},
	{
		src: plot_default,
		alt: "Villa plot",
		category: "Plots",
		height: 620
	},
	{
		src: gym_default,
		alt: "Wellness gym",
		category: "Amenities",
		height: 720
	},
	{
		src: yoga_default,
		alt: "Yoga deck",
		category: "Amenities",
		height: 860
	},
	{
		src: kids_default,
		alt: "Kids village",
		category: "Amenities",
		height: 640
	},
	{
		src: sports_default,
		alt: "Sports arena",
		category: "Amenities",
		height: 720
	},
	{
		src: jogging_default,
		alt: "Jogging trail",
		category: "Landscape",
		height: 820
	}
];
var galleryFilters = [
	"All",
	"Clubhouse",
	"Amenities",
	"Landscape",
	"Interiors",
	"Plots",
	"Aerial"
];
var testimonials = [
	{
		name: "Ravi & Kavitha Menon",
		role: "Bought a 3200 sq.ft plot",
		quote: "Quantumrise Infra feels less like a project and more like a private forest we happen to own an address in. Every detail — from the way the trees frame the entrance to the finish of the kerbstones — is considered.",
		photo: testimonial_1_default
	},
	{
		name: "Dr. Meera Ranganath",
		role: "Consultant, Manipal Hospitals",
		quote: "We looked at every marquee project in North Bangalore. Nothing else made land feel this luxurious. The clubhouse alone would justify the address.",
		photo: testimonial_2_default
	},
	{
		name: "Arvind Nair",
		role: "Angel investor",
		quote: "Approvals were transparent, the master plan is honest about density, and the investment case is quietly compelling. Rare combination.",
		photo: testimonial_3_default
	}
];
var timeline = [
	{
		year: "2011",
		title: "Founded",
		body: "Quantumrise Infra established with a single premium plotted community."
	},
	{
		year: "2016",
		title: "First 500 acres",
		body: "Delivered five gated villa communities across South India."
	},
	{
		year: "2021",
		title: "The Quantumrise vision",
		body: "Land acquired and master planned by Studio Yardstick."
	},
	{
		year: "2024",
		title: "Groundbreaking",
		body: "Infrastructure works and clubhouse foundations begin."
	},
	{
		year: "2027",
		title: "Possession",
		body: "Handover with full amenities operational."
	}
];
var stats = [
	{
		value: 13,
		suffix: "+",
		label: "Years crafting land"
	},
	{
		value: 2400,
		suffix: "+",
		label: "Happy families"
	},
	{
		value: 1800,
		suffix: "",
		label: "Acres developed"
	},
	{
		value: 22,
		suffix: "",
		label: "Projects delivered"
	}
];
var plots = [
	{
		size: "1500 sq.ft",
		price: "₹1.24 Cr",
		emi: "₹98,000",
		tag: "Compact"
	},
	{
		size: "2400 sq.ft",
		price: "₹1.95 Cr",
		emi: "₹1.54L",
		tag: "Signature",
		featured: true
	},
	{
		size: "3200 sq.ft",
		price: "₹2.64 Cr",
		emi: "₹2.08L",
		tag: "Estate"
	},
	{
		size: "4800 sq.ft",
		price: "₹3.92 Cr",
		emi: "₹3.09L",
		tag: "Legacy"
	}
];
var nearby = [
	{
		name: "Kempegowda International Airport",
		time: "22 min",
		category: "Airport"
	},
	{
		name: "Manyata Tech Park",
		time: "38 min",
		category: "IT Park"
	},
	{
		name: "Ryan International School",
		time: "12 min",
		category: "Schools"
	},
	{
		name: "Aster CMI Hospital",
		time: "24 min",
		category: "Hospitals"
	},
	{
		name: "Yelahanka Metro (proposed)",
		time: "9 min",
		category: "Metro"
	},
	{
		name: "Nandi Hills",
		time: "26 min",
		category: "Leisure"
	},
	{
		name: "Devanahalli Business Park",
		time: "18 min",
		category: "Business"
	},
	{
		name: "Esplanade One Mall",
		time: "16 min",
		category: "Retail"
	}
];
var roi = [
	{
		year: "2021",
		value: 100
	},
	{
		year: "2022",
		value: 118
	},
	{
		year: "2023",
		value: 138
	},
	{
		year: "2024",
		value: 162
	},
	{
		year: "2025",
		value: 189
	},
	{
		year: "2026",
		value: 222
	},
	{
		year: "2027",
		value: 264
	}
];
var faqs = [
	{
		q: "Is the project RERA registered?",
		a: "Yes. Quantumrise Infra is registered under Karnataka RERA (PRM/KA/RERA/1251/446/PR/240110/006712) with all statutory documentation available for review at our sales gallery."
	},
	{
		q: "What is included in the plot price?",
		a: "Land cost with fully-developed infrastructure — roads, drainage, water, power connection to plot, and access to the full clubhouse and amenities on possession."
	},
	{
		q: "Can I construct my own villa?",
		a: "Yes. You can appoint your own architect within the community design charter, or choose from three curated villa templates by our design partners."
	},
	{
		q: "What are the payment plans?",
		a: "Standard 20-40-40, construction-linked with our banking partners, or a discounted upfront plan. EMI options begin at ₹98,000."
	},
	{
		q: "When will the amenities be ready?",
		a: "Phase one clubhouse, pool and landscape trail are scheduled for late 2026. Sports arena and kids village complete in Q2 2027."
	},
	{
		q: "Are the plots freehold?",
		a: "Yes, single-title freehold conveyance under registered sale deed."
	}
];
var blogPosts = [
	{
		slug: "north-bangalore-thesis",
		title: "The North Bangalore land thesis, plainly told",
		excerpt: "Why every serious portfolio has begun rebalancing towards the airport corridor — and what to look for in a plotted community.",
		date: "2026-05-20",
		tag: "Investment",
		read: "6 min",
		cover: aerial_forest_default
	},
	{
		slug: "studio-yardstick-masterplan",
		title: "Inside the master plan with Studio Yardstick",
		excerpt: "A conversation with the landscape architects about density, biodiversity and the choreography of quiet.",
		date: "2026-04-08",
		tag: "Design",
		read: "9 min",
		cover: landscape_default
	},
	{
		slug: "living-with-forest",
		title: "Living with a forest at your doorstep",
		excerpt: "Notes from families who moved from Whitefield and Sadashivanagar into low-density villa communities.",
		date: "2026-03-14",
		tag: "Living",
		read: "5 min",
		cover: interior_default
	}
];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function SmoothScroll({ children }) {
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const lenis = new Lenis({
			duration: 1.4,
			smoothWheel: true,
			lerp: .09
		});
		let raf = 0;
		const tick = (t) => {
			lenis.raf(t);
			raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => {
			cancelAnimationFrame(raf);
			lenis.destroy();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var LoadingContext = (0, import_react.createContext)({ done: true });
function LoadingScreen({ children }) {
	const [done, setDone] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const t = setTimeout(() => setDone(true), 1800);
		return () => clearTimeout(t);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LoadingContext.Provider, {
		value: { done },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: !done && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: { opacity: 1 },
			exit: { opacity: 0 },
			transition: {
				duration: .8,
				ease: [
					.65,
					0,
					.35,
					1
				]
			},
			className: "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary text-primary-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					y: 12
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					delay: .2,
					duration: .7
				},
				className: "font-display text-4xl tracking-tight",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "gold-shimmer",
					children: brand.short
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 h-px w-56 overflow-hidden bg-primary-foreground/15",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "h-full bg-secondary",
					initial: { width: 0 },
					animate: { width: "100%" },
					transition: {
						duration: 1.6,
						ease: [
							.65,
							0,
							.35,
							1
						]
					}
				})
			})]
		}, "loader") }), children]
	});
}
function CursorFollower() {
	const x = useMotionValue(-100);
	const y = useMotionValue(-100);
	const sx = useSpring(x, {
		stiffness: 300,
		damping: 30,
		mass: .4
	});
	const sy = useSpring(y, {
		stiffness: 300,
		damping: 30,
		mass: .4
	});
	const [hover, setHover] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		if (window.matchMedia("(pointer: coarse)").matches) return;
		const onMove = (e) => {
			x.set(e.clientX);
			y.set(e.clientY);
			const el = e.target;
			setHover(!!el?.closest("a, button, [data-cursor='hover']"));
		};
		window.addEventListener("mousemove", onMove);
		return () => window.removeEventListener("mousemove", onMove);
	}, [x, y]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		"aria-hidden": true,
		className: "pointer-events-none fixed left-0 top-0 z-[90] hidden md:block",
		style: {
			x: sx,
			y: sy
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			animate: {
				scale: hover ? 1.8 : 1,
				opacity: hover ? .9 : .7
			},
			transition: {
				type: "spring",
				stiffness: 200,
				damping: 20
			},
			className: "-ml-3 -mt-3 h-6 w-6 rounded-full border border-secondary mix-blend-difference"
		})
	});
}
function Nav() {
	const [solid, setSolid] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => {
		const onScroll = () => setSolid(window.scrollY > 40);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.header, {
		initial: {
			y: -40,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		transition: {
			duration: .8,
			delay: .4,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: cn("fixed inset-x-0 top-0 z-50 transition-all duration-500", solid ? "border-b border-border/60 bg-background/80 backdrop-blur-xl" : "bg-transparent"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-lux flex h-16 items-center justify-between md:h-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "group flex items-baseline gap-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("font-display text-2xl md:text-[26px] tracking-tight transition-colors", solid ? "text-primary" : "text-primary"),
						children: "Quantumrise"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-7 lg:flex",
					children: nav.map((n) => {
						const active = pathname === n.to;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: n.to,
							className: cn("group relative text-sm font-medium tracking-wide transition-colors", active ? "text-primary" : "text-foreground/75 hover:text-primary"),
							children: [n.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute -bottom-1 left-0 h-px bg-secondary transition-all duration-500", active ? "w-full" : "w-0 group-hover:w-full") })]
						}, n.to);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						className: "hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground transition-transform hover:scale-[1.03]",
						children: ["Book Site Visit", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiOutlineArrowUpRight, { className: "text-secondary" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						"aria-label": open ? "Close menu" : "Open menu",
						onClick: () => setOpen((v) => !v),
						className: "relative flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/80 lg:hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute h-px w-4 bg-foreground transition-all duration-300", open ? "rotate-45" : "-translate-y-1") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute h-px w-4 bg-foreground transition-all duration-300", open ? "-rotate-45" : "translate-y-1") })]
					})]
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		transition: { duration: .4 },
		className: "fixed inset-0 z-40 bg-primary text-primary-foreground lg:hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-lux flex h-full flex-col justify-between pt-24 pb-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex flex-col gap-1",
				children: [{
					label: "Home",
					to: "/"
				}, ...nav].map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						delay: .1 + i * .05,
						duration: .5
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: n.to,
						className: "block border-b border-primary-foreground/10 py-4 font-display text-3xl tracking-tight",
						children: n.label
					})
				}, n.to))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hairline-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `tel:${brand.phone}`,
						className: "flex-1 rounded-full border border-primary-foreground/30 px-5 py-3 text-center text-sm",
						children: "Call us"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "flex-1 rounded-full bg-secondary px-5 py-3 text-center text-sm text-secondary-foreground",
						children: "Book visit"
					})]
				})]
			})]
		})
	}, "menu") })] });
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "mt-24 bg-primary text-primary-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-lux py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-4xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "gold-shimmer",
							children: brand.short
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-8 flex max-w-sm items-center gap-2 rounded-full border border-primary-foreground/20 p-1",
						onSubmit: (e) => e.preventDefault(),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "email",
							required: true,
							placeholder: "Email for the newsletter",
							className: "flex-1 bg-transparent px-4 py-2 text-sm placeholder:text-primary-foreground/50 focus:outline-none"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "rounded-full bg-secondary px-4 py-2 text-xs uppercase tracking-widest text-secondary-foreground",
							children: "Join"
						})]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-4 text-[10px] uppercase tracking-[0.3em] text-secondary",
						children: "Explore"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-2 text-sm text-primary-foreground/75",
						children: [nav.slice(0, 5).map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: n.to,
							className: "hover:text-secondary",
							children: n.label
						}) }, n.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/blog",
							className: "hover:text-secondary",
							children: "Journal"
						}) })]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-4 text-[10px] uppercase tracking-[0.3em] text-secondary",
						children: "Contact"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-2 text-sm text-primary-foreground/75",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: brand.address }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `tel:${brand.phone}`,
								children: brand.phone
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${brand.email}`,
								children: brand.email
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-4 text-[10px] uppercase tracking-[0.3em] text-secondary",
						children: "Legal"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-2 text-sm text-primary-foreground/75",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/privacy",
								className: "hover:text-secondary",
								children: "Privacy"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/terms",
								className: "hover:text-secondary",
								children: "Terms"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "RERA — PRM/KA/RERA/1251/446" })
						]
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 flex flex-col justify-between gap-3 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/50 md:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Quantumrise Infra"
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Renders are indicative. Actual finishes subject to design intent." })]
			})]
		})
	});
}
function FloatingActions() {
	const [show, setShow] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const on = () => setShow(window.scrollY > 600);
		on();
		window.addEventListener("scroll", on, { passive: true });
		return () => window.removeEventListener("scroll", on);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed right-4 bottom-24 z-40 hidden flex-col gap-3 md:right-6 md:bottom-8 md:flex",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: `https://wa.me/${brand.whatsapp.replace(/\D/g, "")}`,
				target: "_blank",
				rel: "noreferrer",
				"aria-label": "Chat on WhatsApp",
				className: "flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaWhatsapp, { className: "text-xl" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: `tel:${brand.phone}`,
				"aria-label": "Call sales",
				className: "flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiOutlinePhone, { className: "text-lg" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: show && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
				initial: {
					opacity: 0,
					scale: .7
				},
				animate: {
					opacity: 1,
					scale: 1
				},
				exit: {
					opacity: 0,
					scale: .7
				},
				"aria-label": "Back to top",
				onClick: () => window.scrollTo({
					top: 0,
					behavior: "smooth"
				}),
				className: "flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-lg transition-transform hover:scale-110",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiOutlineArrowUp, {})
			}) })
		]
	});
}
function MobileBottomBar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-x-0 bottom-0 z-40 md:hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass mx-3 mb-3 flex items-center gap-2 rounded-full border-border/60 p-1.5 shadow-lg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `tel:${brand.phone}`,
					className: "flex-1 rounded-full border border-border bg-background/60 px-3 py-2.5 text-center text-xs font-medium",
					children: "Call"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `https://wa.me/${brand.whatsapp.replace(/\D/g, "")}`,
					target: "_blank",
					rel: "noreferrer",
					className: "flex-1 rounded-full bg-[#25D366] px-3 py-2.5 text-center text-xs font-medium text-white",
					children: "WhatsApp"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					className: "flex-1 rounded-full bg-primary px-3 py-2.5 text-center text-xs font-medium text-primary-foreground",
					children: "Book Visit"
				})
			]
		})
	});
}
function Eyebrow({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-4 flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-secondary-foreground/80",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-secondary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children })]
	});
}
function SectionHeading({ eyebrow, title, intro, align = "left" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("max-w-2xl", align === "center" && "mx-auto text-center"),
		children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: eyebrow }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealText, {
				as: "h2",
				className: "font-display text-4xl leading-[1.1] text-primary md:text-6xl",
				children: title
			}),
			intro && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
				initial: {
					opacity: 0,
					y: 12
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
					delay: .15
				},
				className: "mt-6 text-base leading-relaxed text-muted-foreground md:text-lg",
				children: intro
			})
		]
	});
}
function RevealText({ as: Tag = "span", children, className, delay = 0 }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-80px"
	});
	const text = typeof children === "string" ? children : null;
	if (!text) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
			initial: {
				opacity: 0,
				y: 20
			},
			animate: inView ? {
				opacity: 1,
				y: 0
			} : {},
			transition: {
				duration: .9,
				ease: [
					.22,
					1,
					.36,
					1
				],
				delay
			},
			className: "inline-block",
			children
		})
	});
	const words = text.split(" ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		className,
		children: words.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "inline-block overflow-hidden pb-[0.1em]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
				initial: {
					y: "100%",
					opacity: 0,
					filter: "blur(8px)"
				},
				animate: inView ? {
					y: 0,
					opacity: 1,
					filter: "blur(0px)"
				} : {},
				transition: {
					duration: .9,
					ease: [
						.22,
						1,
						.36,
						1
					],
					delay: delay + i * .055
				},
				className: "inline-block",
				children: [w, i < words.length - 1 && "\xA0"]
			})
		}, i))
	});
}
function MagneticButton({ children, className, href, to, variant = "primary", onClick }) {
	const ref = (0, import_react.useRef)(null);
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const sx = useSpring(x, {
		stiffness: 200,
		damping: 15
	});
	const sy = useSpring(y, {
		stiffness: 200,
		damping: 15
	});
	const onMove = (e) => {
		const el = ref.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		x.set((e.clientX - (r.left + r.width / 2)) * .25);
		y.set((e.clientY - (r.top + r.height / 2)) * .25);
	};
	const onLeave = () => {
		x.set(0);
		y.set(0);
	};
	const base = cn("group relative inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-xs font-medium uppercase tracking-[0.22em] transition-colors", variant === "primary" && "bg-primary text-primary-foreground hover:bg-primary/90", variant === "ghost" && "border border-primary/25 text-primary hover:bg-primary hover:text-primary-foreground", variant === "gold" && "bg-secondary text-secondary-foreground hover:brightness-105", className);
	const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
		ref,
		style: {
			x: sx,
			y: sy
		},
		onMouseMove: onMove,
		onMouseLeave: onLeave,
		className: base,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiOutlineArrowUpRight, { className: "transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" })]
	});
	if (to) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		children: inner
	});
	if (href) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		onClick,
		children: inner
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		children: inner
	});
}
function GlassCard({ children, className, dark }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("rounded-3xl p-6 md:p-8", dark ? "glass-dark text-primary-foreground" : "glass", className),
		children
	});
}
function TiltCard({ children, className }) {
	const ref = (0, import_react.useRef)(null);
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const rx = useTransform(y, [-50, 50], [8, -8]);
	const ry = useTransform(x, [-50, 50], [-8, 8]);
	const onMove = (e) => {
		const el = ref.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		x.set(e.clientX - (r.left + r.width / 2));
		y.set(e.clientY - (r.top + r.height / 2));
	};
	const onLeave = () => {
		x.set(0);
		y.set(0);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		ref,
		onMouseMove: onMove,
		onMouseLeave: onLeave,
		style: {
			rotateX: rx,
			rotateY: ry,
			transformPerspective: 1e3
		},
		className: cn("group transition-shadow duration-500 will-change-transform", className),
		children
	});
}
function StatCounter({ value, suffix, label }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-80px"
	});
	const [n, setN] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		const start = performance.now();
		const dur = 1600;
		let raf = 0;
		const tick = (t) => {
			const p = Math.min(1, (t - start) / dur);
			const eased = 1 - Math.pow(1 - p, 3);
			setN(Math.round(value * eased));
			if (p < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [inView, value]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "font-display text-5xl leading-none tracking-tight text-primary md:text-6xl",
			children: [n.toLocaleString("en-IN"), suffix]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 text-xs uppercase tracking-[0.25em] text-muted-foreground",
			children: label
		})]
	});
}
function Parallax({ children, offset = 100, className }) {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: cn("overflow-hidden", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			style: { y },
			children
		})
	});
}
function ScrollProgress() {
	const { scrollYProgress } = useScroll();
	const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		style: { width },
		className: "fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-secondary"
	});
}
function PageTransition({ children }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
		mode: "wait",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				y: 12
			},
			animate: {
				opacity: 1,
				y: 0
			},
			exit: { opacity: 0 },
			transition: {
				duration: .5,
				ease: [
					.22,
					1,
					.36,
					1
				]
			},
			children
		}, pathname)
	});
}
function SiteChrome({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmoothScroll, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LoadingScreen, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgress, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CursorFollower, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			id: "main",
			className: "pt-16 md:pt-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTransition, { children })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingActions, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileBottomBar, {})
	] }) });
}
//#endregion
export { roi as C, usps as D, timeline as E, plots as S, testimonials as T, heroStats as _, RevealText as a, nearby as b, StatCounter as c, blogPosts as d, brand as f, galleryImages as g, galleryFilters as h, Parallax as i, TiltCard as l, faqs as m, GlassCard as n, SectionHeading as o, clubhouse_default as p, MagneticButton as r, SiteChrome as s, Eyebrow as t, aerial_forest_default as u, interior_default as v, stats as w, plot_default as x, landscape_default as y };
