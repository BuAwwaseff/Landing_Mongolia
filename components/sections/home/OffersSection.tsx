import { CTAButton } from "@/components/ui/CTAButton";
import { MotionCluster } from "@/components/ui/MotionCluster";
import { SafeImage } from "@/components/ui/SafeImage";
import { SectionIntro } from "@/components/ui/SectionIntro";
import type { MongoliaLocale } from "@/config/mongolia.globals";
import { getLocalizedImageAsset } from "@/content/mongolia-image-slots";
import type { LocaleContent } from "@/content/markets/mongolia";

const rewardCarouselItems = [
  "200% Bonus",
  "Free spins",
  "Free bets",
  "Competitions",
] as const;

type OffersSectionProps = {
  content: LocaleContent["home"]["offers"];
  locale: MongoliaLocale;
};

export function OffersSection({ content, locale }: OffersSectionProps) {
  const rewardGroups = Array.from({ length: 3 }, (_, groupIndex) => ({
    id: groupIndex,
    items: rewardCarouselItems,
  }));
  const rewardSequences = [
    { id: 0, ariaHidden: false },
    { id: 1, ariaHidden: true },
  ] as const;

  return (
    <section className="section-shell" id="offers">
      <div className="shell-container">
        <MotionCluster variant="scale">
          <SectionIntro
            body={content.body}
            eyebrow={content.eyebrow}
            title={content.title}
          />
          <div className="offer-grid">
            {content.cards.map((card) => {
              const image = getLocalizedImageAsset(card.imageSlotId, locale);

              return (
                <article
                  className="media-card surface-panel offer-card"
                  data-motion-item
                  key={card.title}
                >
                  <SafeImage
                    alt={image.alt}
                    className="offer-card__media"
                    imageClassName="offer-card__image"
                    ratio={image.ratio}
                    src={image.src}
                  />
                  <div className="media-card__body">
                    <h3 className="type-card-title">{card.title}</h3>
                    <p className="type-body text-pretty">{card.body}</p>
                    {card.cta ? (
                      <CTAButton
                        className="mt-1 self-start"
                        href={card.cta.href}
                        label={card.cta.label}
                        variant={card.cta.variant}
                      />
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
          <div className="surface-panel reward-strip" data-motion-item>
            <div className="reward-strip__track">
              {rewardSequences.map((sequence) => (
                <div
                  aria-hidden={sequence.ariaHidden}
                  className="reward-strip__sequence"
                  key={sequence.id}
                >
                  {rewardGroups.map((group) => (
                    <div className="reward-strip__group" key={`${sequence.id}-${group.id}`}>
                      {group.items.map((item, itemIndex) => (
                        <span
                          className="reward-strip__item"
                          key={`${sequence.id}-${group.id}-${itemIndex}-${item}`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </MotionCluster>
      </div>
    </section>
  );
}
