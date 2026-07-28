import { a as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as EnquiryModal } from "./enquiry-modal-BvYEwGnJ.mjs";
import { t as MasterPlanShowcase } from "./master-plan-showcase-Cyspeoq9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/master-plan-Czeay9GC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function MasterPlanPage() {
	const [enquiryOpen, setEnquiryOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MasterPlanShowcase, { onPrimaryAction: () => setEnquiryOpen(true) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnquiryModal, {
		open: enquiryOpen,
		onClose: () => setEnquiryOpen(false),
		title: "Download the Master Plan Brochure",
		context: "Brochure download - Master Plan"
	})] });
}
//#endregion
export { MasterPlanPage as component };
