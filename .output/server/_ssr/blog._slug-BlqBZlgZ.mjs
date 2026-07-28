import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-BlqBZlgZ.js
var import_jsx_runtime = require_jsx_runtime();
var SplitNotFoundComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "container-lux py-40 text-center",
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		className: "font-display text-4xl text-primary",
		children: "Post not found."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/blog",
		className: "mt-6 inline-block text-primary underline",
		children: "Back to journal"
	})]
});
//#endregion
export { SplitNotFoundComponent as notFoundComponent };
