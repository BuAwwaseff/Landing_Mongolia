import { CTAButton } from "@/components/ui/CTAButton";
import { MotionCluster } from "@/components/ui/MotionCluster";
import { SafeImage } from "@/components/ui/SafeImage";
import { SectionIntro } from "@/components/ui/SectionIntro";
import type { MongoliaLocale } from "@/config/mongolia.globals";
import { getLocalizedImageAsset } from "@/content/mongolia-image-slots";
import { playerAccessHref } from "@/content/markets/mongolia";
import type { LocaleContent } from "@/content/markets/mongolia";

const gamesCardCtas = {
  "home-casino-discovery": {
    en: "Get casino access",
    mn: "\u041a\u0430\u0437\u0438\u043d\u043e\u0020\u043d\u044d\u044d\u0445",
  },
  "home-slots": {
    en: "Start slots",
    mn: "\u0421\u043b\u043e\u0442\u0020\u044d\u0445\u043b\u044d\u0445",
  },
  "home-live-games": {
    en: "Enter live tables",
    mn: "\u0410\u043c\u044c\u0434\u0020\u0448\u0438\u0440\u044d\u044d\u0020\u043d\u044d\u044d\u0445",
  },
} as const;

type GamesSectionProps = {
  content: LocaleContent["home"]["games"];
  locale: MongoliaLocale;
};

export function GamesSection({ content, locale }: GamesSectionProps) {
  return (
    <section className="section-shell" id="games">
      <div className="shell-container">
        <MotionCluster variant="up">
          <SectionIntro
            align="left"
            body={content.body}
            eyebrow={content.eyebrow}
            title={content.title}
          />
          <div className="card-grid card-grid--three">
            {content.cards.map((card) => {
              const image = getLocalizedImageAsset(card.imageSlotId, locale);
              const ctaLabel =
                card.imageSlotId in gamesCardCtas
                  ? gamesCardCtas[card.imageSlotId as keyof typeof gamesCardCtas][locale]
                  : locale === "mn"
                    ? "\u041d\u044d\u0432\u044d\u0445"
                    : "Get access";

              return (
                <article
                  className="media-card surface-panel"
                  data-motion-item
                  key={card.title}
                >
                  <SafeImage alt={image.alt} ratio={image.ratio} src={image.src} />
                  <div className="media-card__body">
                    <h3 className="type-card-title">{card.title}</h3>
                    <p className="type-body text-pretty">{card.body}</p>
                    <CTAButton
                      className="mt-1 self-start"
                      href={playerAccessHref}
                      label={ctaLabel}
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </MotionCluster>
      </div>
    </section>
  );
}
