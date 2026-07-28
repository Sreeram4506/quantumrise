globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/greenlands.jpeg": {
		"type": "image/jpeg",
		"etag": "\"2b67e-yHKgfO62V7K/7FMawq1zyNLQf7I\"",
		"mtime": "2026-07-27T17:23:39.656Z",
		"size": 177790,
		"path": "../public/greenlands.jpeg"
	},
	"/greenlands.jfif": {
		"type": "image/pjpeg",
		"etag": "\"2b67e-yHKgfO62V7K/7FMawq1zyNLQf7I\"",
		"mtime": "2026-07-27T17:22:22.937Z",
		"size": 177790,
		"path": "../public/greenlands.jfif"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"17-ZZkCVrbr4BSdjt/K43J0tq8+Qq4\"",
		"mtime": "2026-07-20T08:21:02.485Z",
		"size": 23,
		"path": "../public/robots.txt"
	},
	"/logo.png": {
		"type": "image/png",
		"etag": "\"8528-ysA+cf0rnohucH2WV81fQjzyXWg\"",
		"mtime": "2026-07-27T11:53:40.080Z",
		"size": 34088,
		"path": "../public/logo.png"
	},
	"/WhatsApp Image 2026-07-20 at 2.30.33 PM.jpeg": {
		"type": "image/jpeg",
		"etag": "\"3d475-R4ziZklL/jvZ4dTWbWxhCO1UN3s\"",
		"mtime": "2026-07-20T09:00:49.908Z",
		"size": 250997,
		"path": "../public/WhatsApp Image 2026-07-20 at 2.30.33 PM.jpeg"
	},
	"/WhatsApp Image 2026-07-20 at 2.30.34 PM.jpeg": {
		"type": "image/jpeg",
		"etag": "\"4978c-EMZqvZW0wmRKnMg/Ss4fJBGuZwk\"",
		"mtime": "2026-07-20T09:00:56.756Z",
		"size": 300940,
		"path": "../public/WhatsApp Image 2026-07-20 at 2.30.34 PM.jpeg"
	},
	"/WhatsApp Image 2026-07-20 at 2.30.35 PM (1).jpeg": {
		"type": "image/jpeg",
		"etag": "\"5593e-VP0e/tnPWae1WL6pMq5WQDMUtlM\"",
		"mtime": "2026-07-20T09:01:08.373Z",
		"size": 350526,
		"path": "../public/WhatsApp Image 2026-07-20 at 2.30.35 PM (1).jpeg"
	},
	"/WhatsApp Image 2026-07-20 at 2.30.35 PM.jpeg": {
		"type": "image/jpeg",
		"etag": "\"5010f-Di//PyUF4io5+BgdtveI5ENDkps\"",
		"mtime": "2026-07-20T09:01:02.461Z",
		"size": 327951,
		"path": "../public/WhatsApp Image 2026-07-20 at 2.30.35 PM.jpeg"
	},
	"/WhatsApp Image 2026-07-20 at 2.30.36 PM.jpeg": {
		"type": "image/jpeg",
		"etag": "\"50db6-geZemYJhmHDe36mA8Ikv/wnAsyw\"",
		"mtime": "2026-07-20T09:01:14.854Z",
		"size": 331190,
		"path": "../public/WhatsApp Image 2026-07-20 at 2.30.36 PM.jpeg"
	},
	"/assets/about-Btn9c4aL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d9d-pHJtfOppMuZ22FmrUOF/95Fx4Uw\"",
		"mtime": "2026-07-28T06:38:13.221Z",
		"size": 3485,
		"path": "../public/assets/about-Btn9c4aL.js"
	},
	"/assets/blog.index-CZyqoHQW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"650-pb1HvWHck37ZDxE2VsioXbrNXH8\"",
		"mtime": "2026-07-28T06:38:13.232Z",
		"size": 1616,
		"path": "../public/assets/blog.index-CZyqoHQW.js"
	},
	"/assets/contact-B80PAJSr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11ab-nCV0QBvA35K3Rf17527v/17Jf4M\"",
		"mtime": "2026-07-28T06:38:13.233Z",
		"size": 4523,
		"path": "../public/assets/contact-B80PAJSr.js"
	},
	"/assets/blog._slug-BMDYxLF5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d5e-uP+HMBkRtCUDF0XPVX5Pe1OgOEg\"",
		"mtime": "2026-07-28T06:38:13.224Z",
		"size": 3422,
		"path": "../public/assets/blog._slug-BMDYxLF5.js"
	},
	"/assets/enquiry-modal-CtTas-d2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"170a-0OLIm/cQtGFWFIbj5RFlgRxp0Zo\"",
		"mtime": "2026-07-28T06:38:13.234Z",
		"size": 5898,
		"path": "../public/assets/enquiry-modal-CtTas-d2.js"
	},
	"/WhatsApp Image 2026-07-20 at 2.30.38 PM (1).jpeg": {
		"type": "image/jpeg",
		"etag": "\"5c432-KKjcYNlnPK1OtG7ibRBOiD2cznU\"",
		"mtime": "2026-07-20T09:01:38.198Z",
		"size": 377906,
		"path": "../public/WhatsApp Image 2026-07-20 at 2.30.38 PM (1).jpeg"
	},
	"/assets/blog._slug-Bmj3p6-1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"169-vqyfXfEbo7aJnaP8p5AXupYKCG4\"",
		"mtime": "2026-07-28T06:38:13.231Z",
		"size": 361,
		"path": "../public/assets/blog._slug-Bmj3p6-1.js"
	},
	"/assets/gallery-95dE363-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"76b-UNxiV0+CC5jS5ZbIyrj9mf9j8Tw\"",
		"mtime": "2026-07-28T06:38:13.238Z",
		"size": 1899,
		"path": "../public/assets/gallery-95dE363-.js"
	},
	"/assets/clubhouse-ChdM46rx.jpg": {
		"type": "image/jpeg",
		"etag": "\"196d4-NsrD6/mafMIfGO2eMdjBc09zjkg\"",
		"mtime": "2026-07-28T06:38:13.258Z",
		"size": 104148,
		"path": "../public/assets/clubhouse-ChdM46rx.jpg"
	},
	"/assets/faq-BP7MNCJv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"79f-qreM7K8wI8O+PCN0VqnrBzbBt18\"",
		"mtime": "2026-07-28T06:38:13.237Z",
		"size": 1951,
		"path": "../public/assets/faq-BP7MNCJv.js"
	},
	"/WhatsApp Image 2026-07-20 at 2.30.37 PM.jpeg": {
		"type": "image/jpeg",
		"etag": "\"53704-DrGYNS7flpfetcK+CBD7ilCfI9c\"",
		"mtime": "2026-07-20T09:01:19.823Z",
		"size": 341764,
		"path": "../public/WhatsApp Image 2026-07-20 at 2.30.37 PM.jpeg"
	},
	"/WhatsApp Image 2026-07-20 at 2.30.38 PM.jpeg": {
		"type": "image/jpeg",
		"etag": "\"700df-VoVrL9wbai+Cak9yE+PqlGyiaao\"",
		"mtime": "2026-07-20T09:01:32.295Z",
		"size": 458975,
		"path": "../public/WhatsApp Image 2026-07-20 at 2.30.38 PM.jpeg"
	},
	"/assets/aerial-forest-CPUx8o0m.jpg": {
		"type": "image/jpeg",
		"etag": "\"5d293-uGDpOx/zdbwQVShDSzS2sC1D8TY\"",
		"mtime": "2026-07-28T06:38:13.256Z",
		"size": 381587,
		"path": "../public/assets/aerial-forest-CPUx8o0m.jpg"
	},
	"/WhatsApp Image 2026-07-20 at 2.30.37 PM (1).jpeg": {
		"type": "image/jpeg",
		"etag": "\"8125e-Ia43Bodw0fToqmAMEZVorCaeFS0\"",
		"mtime": "2026-07-20T09:01:25.132Z",
		"size": 528990,
		"path": "../public/WhatsApp Image 2026-07-20 at 2.30.37 PM (1).jpeg"
	},
	"/assets/gym-BTDvSVNo.jpg": {
		"type": "image/jpeg",
		"etag": "\"2db06-7g5kViILZvkbTu76qLuHjhV26hc\"",
		"mtime": "2026-07-28T06:38:13.259Z",
		"size": 187142,
		"path": "../public/assets/gym-BTDvSVNo.jpg"
	},
	"/assets/interior-BxwcZTvu.jpg": {
		"type": "image/jpeg",
		"etag": "\"2d061-LY+sDxsi1OB/s7ZbuZ5LUFf7Y3c\"",
		"mtime": "2026-07-28T06:38:13.263Z",
		"size": 184417,
		"path": "../public/assets/interior-BxwcZTvu.jpg"
	},
	"/assets/index-xt-aBnw8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4d869-0C1YNLKfHFanQG6egefY4QYQLYk\"",
		"mtime": "2026-07-28T06:38:13.219Z",
		"size": 317545,
		"path": "../public/assets/index-xt-aBnw8.js"
	},
	"/assets/hero-aerial-CFuexqZR.jpg": {
		"type": "image/jpeg",
		"etag": "\"5875d-zCieMiNFg5gtBzZKQUd0CTINCPg\"",
		"mtime": "2026-07-28T06:38:13.261Z",
		"size": 362333,
		"path": "../public/assets/hero-aerial-CFuexqZR.jpg"
	},
	"/assets/jogging-DDkkhMFG.jpg": {
		"type": "image/jpeg",
		"etag": "\"39516-UVdIlCW+g3RIQK/wKAjKLc9ZKvc\"",
		"mtime": "2026-07-28T06:38:13.264Z",
		"size": 234774,
		"path": "../public/assets/jogging-DDkkhMFG.jpg"
	},
	"/assets/kids-BoBmz3Eh.jpg": {
		"type": "image/jpeg",
		"etag": "\"456cb-4AhUuAlOKeebE4lEC3nZUtTYWGA\"",
		"mtime": "2026-07-28T06:38:13.266Z",
		"size": 284363,
		"path": "../public/assets/kids-BoBmz3Eh.jpg"
	},
	"/assets/landscape-Dp9MiTDE.jpg": {
		"type": "image/jpeg",
		"etag": "\"68269-Uxny8zI2rhIiOUdrWEYho21vTe4\"",
		"mtime": "2026-07-28T06:38:13.267Z",
		"size": 426601,
		"path": "../public/assets/landscape-Dp9MiTDE.jpg"
	},
	"/assets/location-Y56FPgXM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b7a-EG0oqugbEUBc5HbwR/BARrw5ubo\"",
		"mtime": "2026-07-28T06:38:13.241Z",
		"size": 2938,
		"path": "../public/assets/location-Y56FPgXM.js"
	},
	"/assets/link-BroVZncT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8aab-BDDyRi0xKbzjvx31qX1k7C7cGbw\"",
		"mtime": "2026-07-28T06:38:13.240Z",
		"size": 35499,
		"path": "../public/assets/link-BroVZncT.js"
	},
	"/assets/master-plan-CldkI3ns.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1be-N71EhYwZdwaNISseM1wS+dQ90IE\"",
		"mtime": "2026-07-28T06:38:13.242Z",
		"size": 446,
		"path": "../public/assets/master-plan-CldkI3ns.js"
	},
	"/assets/master-plan-showcase-rRavGlia.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2b49-9KidYo77nJEKJ2jUkiCzGzObawo\"",
		"mtime": "2026-07-28T06:38:13.244Z",
		"size": 11081,
		"path": "../public/assets/master-plan-showcase-rRavGlia.js"
	},
	"/assets/masterplan-23WDnVkJ.jpg": {
		"type": "image/jpeg",
		"etag": "\"24649-SAJct8ORV9qIUKO3HSDgnCY08ds\"",
		"mtime": "2026-07-28T06:38:13.267Z",
		"size": 149065,
		"path": "../public/assets/masterplan-23WDnVkJ.jpg"
	},
	"/assets/privacy-mV3FtzX7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"852-6Zr87+Rshl8Bc8C+Ns7rgpmraT0\"",
		"mtime": "2026-07-28T06:38:13.246Z",
		"size": 2130,
		"path": "../public/assets/privacy-mV3FtzX7.js"
	},
	"/assets/project-D41HtdTV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1af1-mqtwZyf2MZJs88KZHzcqJNpuKYY\"",
		"mtime": "2026-07-28T06:38:13.247Z",
		"size": 6897,
		"path": "../public/assets/project-D41HtdTV.js"
	},
	"/assets/routes-KywaVLLM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"245c-vB61d+VPvfIibAYz18rJFA896rQ\"",
		"mtime": "2026-07-28T06:38:13.248Z",
		"size": 9308,
		"path": "../public/assets/routes-KywaVLLM.js"
	},
	"/assets/plot-DpA_UyBf.jpg": {
		"type": "image/jpeg",
		"etag": "\"3e147-eaf4oPl+bNHVQ/PG1TU2M2jvWnk\"",
		"mtime": "2026-07-28T06:38:13.269Z",
		"size": 254279,
		"path": "../public/assets/plot-DpA_UyBf.jpg"
	},
	"/assets/styles-BF216kfO.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1788a-WjkC1ebwHjqPlc+rWm9xLnF8w4c\"",
		"mtime": "2026-07-28T06:38:13.275Z",
		"size": 96394,
		"path": "../public/assets/styles-BF216kfO.css"
	},
	"/assets/terms-DOC741gv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5d0-ZuMupzsXsa8MIAZStDLRDuuR5nE\"",
		"mtime": "2026-07-28T06:38:13.251Z",
		"size": 1488,
		"path": "../public/assets/terms-DOC741gv.js"
	},
	"/assets/site-BT8TpYct.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"33016-IrTQxpUl5tNh5rCD5PzW8JdWwTk\"",
		"mtime": "2026-07-28T06:38:13.250Z",
		"size": 208918,
		"path": "../public/assets/site-BT8TpYct.js"
	},
	"/assets/testimonial-1-fn9hzzvI.jpg": {
		"type": "image/jpeg",
		"etag": "\"13f10-xQNUvRHfw+Kxb0BTFxDkwV7VPME\"",
		"mtime": "2026-07-28T06:38:13.278Z",
		"size": 81680,
		"path": "../public/assets/testimonial-1-fn9hzzvI.jpg"
	},
	"/assets/sports-CSayOgxF.jpg": {
		"type": "image/jpeg",
		"etag": "\"29f67-Dbj58Pghy+lNDpozCTyPo+LGY5g\"",
		"mtime": "2026-07-28T06:38:13.274Z",
		"size": 171879,
		"path": "../public/assets/sports-CSayOgxF.jpg"
	},
	"/assets/testimonial-2-ZND_ZC-l.jpg": {
		"type": "image/jpeg",
		"etag": "\"e9e9-Ps47NBTfmp+cR7QjrY1qX52fD4s\"",
		"mtime": "2026-07-28T06:38:13.279Z",
		"size": 59881,
		"path": "../public/assets/testimonial-2-ZND_ZC-l.jpg"
	},
	"/assets/pool-BsYjNEeD.jpg": {
		"type": "image/jpeg",
		"etag": "\"21110-uPU2IGT0r7zVdli8OkRs2lOJqP4\"",
		"mtime": "2026-07-28T06:38:13.272Z",
		"size": 135440,
		"path": "../public/assets/pool-BsYjNEeD.jpg"
	},
	"/assets/yoga-DDAYYQl7.jpg": {
		"type": "image/jpeg",
		"etag": "\"2a5bf-CUySiILupq5ex+iulKLDmTa5RYU\"",
		"mtime": "2026-07-28T06:38:13.281Z",
		"size": 173503,
		"path": "../public/assets/yoga-DDAYYQl7.jpg"
	},
	"/assets/testimonial-3-j-jXDEzo.jpg": {
		"type": "image/jpeg",
		"etag": "\"da19-dWBx7DZRpKoSQbIQfFtKM21rcf4\"",
		"mtime": "2026-07-28T06:38:13.280Z",
		"size": 55833,
		"path": "../public/assets/testimonial-3-j-jXDEzo.jpg"
	},
	"/assets/whatsapp-CnC-halD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ec0b-NmwfP0qM/OlE75ctOThv4IXTvUM\"",
		"mtime": "2026-07-28T06:38:13.254Z",
		"size": 60427,
		"path": "../public/assets/whatsapp-CnC-halD.js"
	},
	"/assets/testimonials-BypB8O48.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"844-53rjDhXzm4qioiZXM5W/BBsa6jE\"",
		"mtime": "2026-07-28T06:38:13.252Z",
		"size": 2116,
		"path": "../public/assets/testimonials-BypB8O48.js"
	},
	"/Green Garden.pdf": {
		"type": "application/pdf",
		"etag": "\"6d7918-1iSs+Xra0ukTFWOvfYIc9ZJp0fs\"",
		"mtime": "2026-07-27T17:32:34.633Z",
		"size": 7174424,
		"path": "../public/Green Garden.pdf"
	},
	"/Green Garden Walkthrough.mp4": {
		"type": "video/mp4",
		"etag": "\"17853f3-kJYdu7Hn+TZVgUaet4SGpQb5QHo\"",
		"mtime": "2026-07-27T18:54:54.626Z",
		"size": 24663027,
		"path": "../public/Green Garden Walkthrough.mp4"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_smyEWD = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_smyEWD
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
