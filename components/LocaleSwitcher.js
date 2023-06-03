import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

export default function LocaleSwitcher({ title }) {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;
  const otherLocales = locales.filter(locale => locale !== activeLocale);
  const { t } = useTranslation("home");

  return (
    <div>
      <p>{t("Locale")}:</p>
      <ul>
        {otherLocales.map(locale => {
          const { pathname, query, asPath } = router;
          return (
            <li key={locale}>
              <Link href={{ pathname, query }} as={asPath} locale={locale}>
                <a>
                  {locale === "en"
                    ? "English"
                    : locale === "fa"
                    ? "Farsi"
                    : null}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
