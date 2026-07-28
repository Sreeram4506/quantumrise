//#region node_modules/.nitro/vite/services/ssr/assets/whatsapp-DL1OTT2C.js
function normalizeWhatsAppNumber(phone) {
	return phone.replace(/\D/g, "");
}
function buildWhatsAppUrl(phone, message) {
	return `https://wa.me/${normalizeWhatsAppNumber(phone)}?text=${encodeURIComponent(message)}`;
}
function joinWhatsAppLines(lines) {
	return lines.filter(Boolean).join("\n");
}
//#endregion
export { joinWhatsAppLines as n, buildWhatsAppUrl as t };
