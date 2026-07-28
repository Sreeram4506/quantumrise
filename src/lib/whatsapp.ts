export function normalizeWhatsAppNumber(phone: string) {
  return phone.replace(/\D/g, "");
}

export function buildWhatsAppUrl(phone: string, message: string) {
  return `https://wa.me/${normalizeWhatsAppNumber(phone)}?text=${encodeURIComponent(message)}`;
}

export function joinWhatsAppLines(lines: Array<string | false | null | undefined>) {
  return lines.filter(Boolean).join("\n");
}
