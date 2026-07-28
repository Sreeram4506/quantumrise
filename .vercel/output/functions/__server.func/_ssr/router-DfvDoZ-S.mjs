import { n as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as blogPosts, f as brand, m as faqs, s as SiteChrome, u as aerial_forest_default } from "./site-Cuda1iA-.mjs";
import { t as Route$16 } from "./blog._slug-CTLGJsv9.mjs";
import { t as hero_aerial_default } from "./hero-aerial-CGNGeLS0.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DfvDoZ-S.js
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-V8IotKkS.css";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display text-[128px] leading-none tracking-tight text-primary",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 font-display text-2xl text-primary",
					children: "The path is untended."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: "The page you were looking for has drifted off the master plan."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-xs font-medium uppercase tracking-[0.22em] text-primary-foreground hover:opacity-90",
						children: "Return home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-2xl text-primary",
					children: "Something is out of place."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Please try again or return to the entrance."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-xs font-medium uppercase tracking-[0.22em] text-primary-foreground hover:opacity-90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-full border border-input bg-background px-5 py-2.5 text-xs font-medium uppercase tracking-[0.22em] text-foreground hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$15 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				name: "theme-color",
				content: "#123026"
			},
			{ title: `${brand.name} — Luxury villa plots in North Bangalore` },
			{
				name: "description",
				content: "A 120-acre gated villa community by Quantumrise Infra. DTCP approved, RERA registered plots from 1,500 to 4,800 sq.ft with a 42,000 sq.ft clubhouse."
			},
			{
				name: "author",
				content: "Quantumrise Infra"
			},
			{
				property: "og:site_name",
				content: brand.name
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "RealEstateAgent",
				name: brand.name,
				description: "A 120-acre gated villa plotted community in North Bangalore by Quantumrise Infra.",
				telephone: brand.phone,
				email: brand.email,
				address: {
					"@type": "PostalAddress",
					streetAddress: brand.address,
					addressLocality: "Bangalore",
					addressRegion: "Karnataka",
					addressCountry: "IN"
				}
			})
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$15.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteChrome, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) })
	});
}
var $$splitComponentImporter$13 = () => import("./routes-ChEbZ6iA.mjs");
var Route$14 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Quantumrise Infra — Luxury villa plots in North Bangalore" },
			{
				name: "description",
				content: "A 120-acre gated villa community in North Bangalore. DTCP approved plots from 1,500–4,800 sq.ft with a 42,000 sq.ft clubhouse. Possession 2027."
			},
			{
				property: "og:title",
				content: "Quantumrise Infra — A quiet estate for a considered life"
			},
			{
				property: "og:description",
				content: "Villa plots crafted for a considered life. 120 acres, 42k sq.ft clubhouse, RERA approved."
			},
			{
				property: "og:image",
				content: hero_aerial_default
			},
			{
				name: "twitter:image",
				content: hero_aerial_default
			}
		],
		links: [{
			rel: "preload",
			as: "image",
			href: hero_aerial_default,
			fetchpriority: "high"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./about-Cg-oGzo5.mjs");
var Route$13 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About Quantumrise Infra — Thirteen years of considered land" },
			{
				name: "description",
				content: "Quantumrise Infra has been developing thoughtful plotted communities across South India since 2011. Meet the studio behind the vision."
			},
			{
				property: "og:title",
				content: "About Quantumrise Infra"
			},
			{
				property: "og:description",
				content: "13 years, 22 projects, 2,400 families. The studio behind the vision."
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./contact-Dfn29N9Z.mjs");
var Route$12 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Book a site visit | Quantumrise Infra" },
			{
				name: "description",
				content: "Book a private tour of Quantumrise Infra. Thursday to Sunday. Transport arranged from your side of the city."
			},
			{
				property: "og:title",
				content: "Contact · Quantumrise Infra"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./faq-DKC_Hta-.mjs");
var Route$11 = createFileRoute("/faq")({
	head: () => ({
		meta: [
			{ title: "FAQ — Common questions | Quantumrise Infra" },
			{
				name: "description",
				content: "Everything buyers ask about Quantumrise Infra — approvals, payment plans, construction and possession."
			},
			{
				property: "og:title",
				content: "Quantumrise Infra — FAQ"
			}
		],
		links: [{
			rel: "canonical",
			href: "/faq"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: faqs.map((f) => ({
					"@type": "Question",
					name: f.q,
					acceptedAnswer: {
						"@type": "Answer",
						text: f.a
					}
				}))
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./gallery-BTNOWYn6.mjs");
var Route$10 = createFileRoute("/gallery")({
	head: () => ({
		meta: [
			{ title: "Gallery — Renders and moments from Quantumrise Infra" },
			{
				name: "description",
				content: "Clubhouse, amenities, landscape, interiors, aerial views and villa plots at Quantumrise Infra."
			},
			{
				property: "og:title",
				content: "Quantumrise Infra Gallery"
			}
		],
		links: [{
			rel: "canonical",
			href: "/gallery"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./investment-C5Q_YpM6.mjs");
var Route$9 = createFileRoute("/investment")({
	head: () => ({
		meta: [
			{ title: "Investment — 14% CAGR land appreciation | Quantumrise Infra" },
			{
				name: "description",
				content: "The investment case for a Quantumrise Infra plot: appreciation, rental yield, and the North Bangalore corridor thesis."
			},
			{
				property: "og:title",
				content: "Investment case for Quantumrise Infra"
			}
		],
		links: [{
			rel: "canonical",
			href: "/investment"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./location-CsxWAuWR.mjs");
var Route$8 = createFileRoute("/location")({
	head: () => ({
		meta: [
			{ title: "Location — 20 minutes from the airport | Quantumrise Infra" },
			{
				name: "description",
				content: "Off Nelamangala–Devanahalli Road, North Bangalore. 22 minutes to Kempegowda Airport, 38 minutes to Manyata Tech Park."
			},
			{
				property: "og:title",
				content: "Quantumrise Infra — Location"
			}
		],
		links: [{
			rel: "canonical",
			href: "/location"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./master-plan-BHiWLpGX.mjs");
var Route$7 = createFileRoute("/master-plan")({
	head: () => ({
		meta: [
			{ title: "Master Plan — Interactive layout | Quantumrise Infra" },
			{
				name: "description",
				content: "Explore the Quantumrise Infra master plan. 180 villa plots on 120 acres, 64% open space, 14 amenities."
			},
			{
				property: "og:title",
				content: "Quantumrise Infra Master Plan"
			}
		],
		links: [{
			rel: "canonical",
			href: "/master-plan"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./pricing-Bl0bvzKH.mjs");
var Route$6 = createFileRoute("/pricing")({
	head: () => ({
		meta: [
			{ title: "Pricing — Villa plots from ₹1.24 Cr | Quantumrise Infra" },
			{
				name: "description",
				content: "Villa plots at Quantumrise Infra from ₹1.24 Cr. EMI from ₹98,000. Compact, Signature, Estate and Legacy sizes."
			},
			{
				property: "og:title",
				content: "Quantumrise Infra — Pricing"
			}
		],
		links: [{
			rel: "canonical",
			href: "/pricing"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./privacy-CABVPQeZ.mjs");
var Route$5 = createFileRoute("/privacy")({
	head: () => ({
		meta: [
			{ title: "Privacy Policy | Quantumrise Infra" },
			{
				name: "description",
				content: "How Quantumrise Infra collects, uses and protects your information."
			},
			{
				property: "og:title",
				content: "Privacy · Quantumrise Infra"
			},
			{
				name: "robots",
				content: "index,follow"
			}
		],
		links: [{
			rel: "canonical",
			href: "/privacy"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./project-C0BLRO2T.mjs");
var Route$4 = createFileRoute("/project")({
	head: () => ({
		meta: [
			{ title: "The Haven Estate — Project Overview | Quantumrise Infra" },
			{
				name: "description",
				content: "Explore The Haven Estate, a premium plotted villa community in North Bangalore by Quantumrise Infra."
			},
			{
				property: "og:title",
				content: "The Haven Estate — Project Overview"
			},
			{
				property: "og:image",
				content: aerial_forest_default
			}
		],
		links: [{
			rel: "canonical",
			href: "/project"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var BASE_URL = "";
var Route$3 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...[...[
			{
				path: "/",
				changefreq: "weekly",
				priority: "1.0"
			},
			{
				path: "/about",
				changefreq: "monthly",
				priority: "0.8"
			},
			{
				path: "/project",
				changefreq: "monthly",
				priority: "0.9"
			},
			{
				path: "/master-plan",
				changefreq: "monthly",
				priority: "0.8"
			},
			{
				path: "/gallery",
				changefreq: "monthly",
				priority: "0.7"
			},
			{
				path: "/location",
				changefreq: "monthly",
				priority: "0.8"
			},
			{
				path: "/investment",
				changefreq: "monthly",
				priority: "0.8"
			},
			{
				path: "/pricing",
				changefreq: "weekly",
				priority: "0.9"
			},
			{
				path: "/testimonials",
				changefreq: "monthly",
				priority: "0.6"
			},
			{
				path: "/faq",
				changefreq: "monthly",
				priority: "0.6"
			},
			{
				path: "/contact",
				changefreq: "monthly",
				priority: "0.7"
			},
			{
				path: "/blog",
				changefreq: "weekly",
				priority: "0.7"
			},
			{
				path: "/privacy",
				changefreq: "yearly",
				priority: "0.3"
			},
			{
				path: "/terms",
				changefreq: "yearly",
				priority: "0.3"
			}
		], ...blogPosts.map((p) => ({
			path: `/blog/${p.slug}`,
			changefreq: "monthly",
			priority: "0.6"
		}))].map((e) => `  <url><loc>${BASE_URL}${e.path}</loc>${e.changefreq ? `<changefreq>${e.changefreq}</changefreq>` : ""}${e.priority ? `<priority>${e.priority}</priority>` : ""}</url>`),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$2 = () => import("./terms-Du6ZcFBW.mjs");
var Route$2 = createFileRoute("/terms")({
	head: () => ({
		meta: [
			{ title: "Terms of Use | Quantumrise Infra" },
			{
				name: "description",
				content: "Terms governing your use of quantumriseinfra.com."
			},
			{
				property: "og:title",
				content: "Terms · Quantumrise Infra"
			}
		],
		links: [{
			rel: "canonical",
			href: "/terms"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./testimonials-3orNQs2o.mjs");
var Route$1 = createFileRoute("/testimonials")({
	head: () => ({
		meta: [
			{ title: "Owner stories | Quantumrise Infra" },
			{
				name: "description",
				content: "What early residents say about buying at Quantumrise Infra."
			},
			{
				property: "og:title",
				content: "Owner stories · Quantumrise Infra"
			}
		],
		links: [{
			rel: "canonical",
			href: "/testimonials"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./blog.index-j7A47cbh.mjs");
var Route = createFileRoute("/blog/")({
	head: () => ({
		meta: [
			{ title: "Journal — Notes on land, design and living | Quantumrise Infra" },
			{
				name: "description",
				content: "Essays on North Bangalore's land thesis, the Quantumrise Infra master plan, and low-density living."
			},
			{
				property: "og:title",
				content: "Journal · Quantumrise Infra"
			}
		],
		links: [{
			rel: "canonical",
			href: "/blog"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$14.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$15
});
var AboutRoute = Route$13.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$15
});
var ContactRoute = Route$12.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$15
});
var FaqRoute = Route$11.update({
	id: "/faq",
	path: "/faq",
	getParentRoute: () => Route$15
});
var GalleryRoute = Route$10.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$15
});
var InvestmentRoute = Route$9.update({
	id: "/investment",
	path: "/investment",
	getParentRoute: () => Route$15
});
var LocationRoute = Route$8.update({
	id: "/location",
	path: "/location",
	getParentRoute: () => Route$15
});
var MasterPlanRoute = Route$7.update({
	id: "/master-plan",
	path: "/master-plan",
	getParentRoute: () => Route$15
});
var PricingRoute = Route$6.update({
	id: "/pricing",
	path: "/pricing",
	getParentRoute: () => Route$15
});
var PrivacyRoute = Route$5.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$15
});
var ProjectRoute = Route$4.update({
	id: "/project",
	path: "/project",
	getParentRoute: () => Route$15
});
var SitemapDotxmlRoute = Route$3.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$15
});
var TermsRoute = Route$2.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$15
});
var TestimonialsRoute = Route$1.update({
	id: "/testimonials",
	path: "/testimonials",
	getParentRoute: () => Route$15
});
var BlogIndexRoute = Route.update({
	id: "/blog/",
	path: "/blog/",
	getParentRoute: () => Route$15
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ContactRoute,
	FaqRoute,
	GalleryRoute,
	InvestmentRoute,
	LocationRoute,
	MasterPlanRoute,
	PricingRoute,
	PrivacyRoute,
	ProjectRoute,
	SitemapDotxmlRoute,
	TermsRoute,
	TestimonialsRoute,
	BlogSlugRoute: Route$16.update({
		id: "/blog/$slug",
		path: "/blog/$slug",
		getParentRoute: () => Route$15
	}),
	BlogIndexRoute
};
var routeTree = Route$15._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
