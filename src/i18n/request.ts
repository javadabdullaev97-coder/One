import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import uzStore from "../../messages/uz.store.json";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

  const base = (await import(`../../messages/${locale}.json`)).default;

  return {
    locale,
    messages: locale === "uz" ? { ...base, ...uzStore } : base,
  };
});
