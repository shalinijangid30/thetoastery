export const siteConfig = {
  name: "The Toastery",
  whatsappNumber: "97451313151", // TODO: confirm/replace with real number
  email: "hello@thetoastery.qa", // TODO: replace with real business email
  instagram: "https://instagram.com/thetoastery.qa", // TODO: confirm handle
  mapsUrl: "https://maps.google.com/?q=Msheireb+Downtown+Doha",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Msheireb+Downtown+Doha&output=embed",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}

export function mailtoLink(params: {
  subject: string;
  body: string;
}) {
  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    params.subject
  )}&body=${encodeURIComponent(params.body)}`;
}
