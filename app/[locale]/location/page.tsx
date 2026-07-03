import { getTranslations, setRequestLocale } from "next-intl/server";
import { WoodFrame } from "@/components/wood-frame";
import { siteConfig } from "@/lib/site-config";

type HourRow = { day: string; time: string };

export default async function LocationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("location");
  const hours = t.raw("hours") as HourRow[];

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <h1 className="text-4xl font-bold text-center">{t("title")}</h1>

      <div className="grid md:grid-cols-2 gap-10 mt-12 items-start">
        <WoodFrame className="aspect-video">
          <iframe
            src={siteConfig.mapsEmbedUrl}
            className="w-full h-full border-0"
            loading="lazy"
            title="map"
          />
        </WoodFrame>

        <div className="space-y-8">
          <div>
            <h2 className="font-semibold text-wood-dark">{t("title")}</h2>
            <p className="mt-1 text-ink/70">{t("address")}</p>
            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-sm underline text-wood-dark"
            >
              {t("directions")}
            </a>
          </div>

          <div>
            <h2 className="font-semibold text-wood-dark">{t("hoursTitle")}</h2>
            <ul className="mt-2 space-y-1">
              {hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4 text-ink/70">
                  <span>{h.day}</span>
                  <span className="font-medium text-ink">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
