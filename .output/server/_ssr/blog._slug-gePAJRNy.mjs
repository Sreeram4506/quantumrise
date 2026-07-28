import { j as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as blogPosts } from "./site-H_PIM-QR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-gePAJRNy.js
var $$splitNotFoundComponentImporter = () => import("./blog._slug-BlqBZlgZ.mjs");
var $$splitComponentImporter = () => import("./blog._slug-CGOBYJl7.mjs");
var Route = createFileRoute("/blog/$slug")({
	loader: ({ params }) => {
		const post = blogPosts.find((p) => p.slug === params.slug);
		if (!post) throw notFound();
		return { post };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Not found" }, {
			name: "robots",
			content: "noindex"
		}] };
		const p = loaderData.post;
		return {
			meta: [
				{ title: `${p.title} — Quantumrise Infra Journal` },
				{
					name: "description",
					content: p.excerpt
				},
				{
					property: "og:title",
					content: p.title
				},
				{
					property: "og:description",
					content: p.excerpt
				},
				{
					property: "og:type",
					content: "article"
				},
				{
					property: "og:image",
					content: p.cover
				}
			],
			links: [{
				rel: "canonical",
				href: `/blog/${p.slug}`
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
//#endregion
export { Route as t };
