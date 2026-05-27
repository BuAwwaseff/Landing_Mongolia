import { Fragment } from "react";
import type { Metadata } from "next";
import { MarketPageShell } from "@/components/layout/MarketPageShell";
import { BenefitsSection } from "@/components/sections/partnership/BenefitsSection";
import { PartnershipFinalCta } from "@/components/sections/partnership/PartnershipFinalCta";
import { PartnershipHero } from "@/components/sections/partnership/PartnershipHero";
import { PathsSection } from "@/components/sections/partnership/PathsSection";
import { StepsSection } from "@/components/sections/partnership/StepsSection";
import { ToolsSection } from "@/components/sections/partnership/ToolsSection";
import { mongoliaGlobals } from "@/config/mongolia.globals";
import { mongoliaContent } from "@/content/markets/mongolia";
import { getMongoliaContent } from "@/content/markets/mongolia";
import { resolveLocale } from "@/lib/locale";

export const metadata: Metadata = {
  title: mongoliaContent.en.seo.partnershipTitle,
  description: mongoliaContent.en.seo.partnershipDescription,
};

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

export default async function PartnershipPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const locale = resolveLocale(params.lang);
  const copy = getMongoliaContent(locale);

  const sections = {
    hero: <PartnershipHero content={copy.partnership.hero} />,
    benefits: <BenefitsSection content={copy.partnership.benefits} />,
    steps: <StepsSection content={copy.partnership.steps} />,
    paths: <PathsSection content={copy.partnership.paths} locale={locale} />,
    tools: <ToolsSection content={copy.partnership.tools} />,
    finalCta: <PartnershipFinalCta content={copy.partnership.finalCta} />,
  };

  return (
    <MarketPageShell locale={locale} page="partnership">
      {mongoliaGlobals.pages.partnership.enabledSections.map((section) => (
        <Fragment key={section}>{sections[section]}</Fragment>
      ))}
    </MarketPageShell>
  );
}
