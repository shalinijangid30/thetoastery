import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  return (
    <footer className="bg-ink text-cream mt-auto">
      <div className="mx-auto max-w-6xl px-6 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <p className="text-lg lowercase font-semibold">the toastery</p>
          <p className="text-sm text-cream/60 mt-1">{t("tagline")}</p>
        </div>

        <nav className="flex flex-wrap gap-4 text-sm lowercase text-cream/80">
          <Link href="/menu" className="hover:text-butter">{nav("menu")}</Link>
          <Link href="/story" className="hover:text-butter">{nav("story")}</Link>
          <Link href="/location" className="hover:text-butter">{nav("location")}</Link>
          <Link href="/enquire" className="hover:text-butter">{nav("enquire")}</Link>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-butter"
          >
            instagram
          </a>
        </nav>
      </div>
      <div className="border-t border-cream/10 py-4 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} the toastery. {t("rights")}
      </div>
    </footer>
  );
}
