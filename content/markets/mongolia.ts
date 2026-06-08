import type { NavKey, MongoliaLocale } from "@/config/mongolia.globals";
import { terminology } from "@/content/system/terminology";
import type { ImageSlotId } from "@/content/mongolia-image-slots";
import { repairMojibake } from "@/lib/repair-mojibake";

type Cta = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
};

type Metric = {
  value: string;
  label: string;
};

type Highlight = {
  title: string;
  body: string;
};

type MediaCard = {
  title: string;
  body: string;
  badge: string;
  imageSlotId: ImageSlotId;
  cta?: Cta;
};

type RouteCard = {
  title: string;
  body: string;
  bullets: string[];
  ctas: Cta[];
  imageSlotId: ImageSlotId;
};

const placeholderContactHrefs = {
  email: "mailto:PAYPARTNERS-MIDDLEAST@MELBET.COM",
  telegram: "https://t.me/TeamCash_Mongolia",
} as const;

export const playerAccessHref =
  "https://refpa3665.com/L?tag=d_4092175m_66329c_MLBMongolia26";

type FaqItem = {
  question: string;
  answer: string;
};

export type LocaleContent = {
  seo: {
    homeTitle: string;
    homeDescription: string;
    partnershipTitle: string;
    partnershipDescription: string;
    faqTitle: string;
    faqDescription: string;
  };
  nav: Record<NavKey, string>;
  chrome: {
    headerCta: Cta;
    localeLabel: string;
  };
  home: {
    hero: {
      eyebrow: string;
      title: string;
      body: string;
      primaryCta: Cta;
      secondaryCta: Cta;
      highlights: Highlight[];
      metrics: Metric[];
      imageSlotId: ImageSlotId;
    };
    games: {
      eyebrow: string;
      title: string;
      body: string;
      cards: MediaCard[];
      sideNotes: string[];
    };
    sports: {
      eyebrow: string;
      title: string;
      body: string;
      leadCard: MediaCard;
      supportCard: MediaCard;
      sportsList: string[];
      metrics: Metric[];
    };
    offers: {
      eyebrow: string;
      title: string;
      body: string;
      cards: MediaCard[];
      rewardStrip: string[];
    };
    finalCta: {
      eyebrow: string;
      title: string;
      body: string;
      primaryCta: Cta;
      secondaryCta: Cta;
      imageSlotId: ImageSlotId;
      checklist: string[];
    };
  };
  partnership: {
    hero: {
      eyebrow: string;
      title: string;
      body: string;
      primaryCta: Cta;
      secondaryCta: Cta;
      metrics: Metric[];
      imageSlotId: ImageSlotId;
    };
    benefits: {
      eyebrow: string;
      title: string;
      body: string;
      imageSlotId: ImageSlotId;
      cards: Highlight[];
    };
    steps: {
      eyebrow: string;
      title: string;
      body: string;
      items: Highlight[];
    };
    paths: {
      eyebrow: string;
      title: string;
      body: string;
      routes: RouteCard[];
    };
    tools: {
      eyebrow: string;
      title: string;
      body: string;
      imageSlotId: ImageSlotId;
      toolPoints: string[];
      metrics: Metric[];
    };
    finalCta: {
      eyebrow: string;
      title: string;
      body: string;
      primaryCta: Cta;
      secondaryCta: Cta;
      imageSlotId: ImageSlotId;
      checklist: string[];
    };
  };
  faq: {
    intro: {
      eyebrow: string;
      title: string;
      body: string;
      imageSlotId: ImageSlotId;
    };
    playerTitle: string;
    partnershipTitle: string;
    playerItems: FaqItem[];
    partnershipItems: FaqItem[];
    support: {
      eyebrow: string;
      title: string;
      body: string;
      primaryCta: Cta;
      secondaryCta: Cta;
    };
  };
  footer: {
    brandLine: string;
    homeTitle: string;
    homeLinks: Cta[];
    partnershipTitle: string;
    partnershipLinks: Cta[];
    supportTitle: string;
    supportLinks: Cta[];
    contactTitle: string;
    contactLinks: Cta[];
    legal: string;
  };
};

const rawMongoliaContent: Record<MongoliaLocale, LocaleContent> = {
  en: {
    seo: {
      homeTitle: "Mongolia Premium Sports & Casino",
      homeDescription:
        "Fast player-facing Mongolia landing page for sports, football, casino discovery, live games, offers, and mobile support.",
      partnershipTitle: "Mongolia Partnership & Agent Routes",
      partnershipDescription:
        "Business-facing Mongolia page for partners and agents with clear routes, support tools, and onboarding steps.",
      faqTitle: "Mongolia FAQ",
      faqDescription:
        "Quick player and partnership answers for support, offers, routes, and next steps.",
    },
    nav: {
      home: "Home",
      games: "Games",
      sports: "Sports",
      offers: "Offers",
      partnership: terminology.en.partnership,
      faq: "FAQ",
      contact: "Contact",
    },
    chrome: {
      headerCta: {
        label: "Start now",
        href: "/#games",
      },
      localeLabel: "Language",
    },
    home: {
      hero: {
        eyebrow: "Mongolia Player Zone",
        title: "Start fast and move from football nights to live tables in one premium flow.",
        body: "Open the sports board, jump into slots, claim rewards when they fit you, and keep support close from the first tap.",
        primaryCta: {
          label: "Explore games",
          href: "/#games",
        },
        secondaryCta: {
          label: "See offers",
          href: "/#offers",
          variant: "secondary",
        },
        highlights: [
          {
            title: "Football first",
            body: "Keep match energy front and center with a fast route from kickoff to live boards.",
          },
          {
            title: "Casino without clutter",
            body: "Slots, tables, and live games stay easy to scan on mobile and desktop.",
          },
          {
            title: "Rewards when you want them",
            body: "Welcome offers, gift-led promos, and quick support stay close to the action.",
          },
        ],
        metrics: [
          { value: "24/7", label: "support rhythm" },
          { value: "4", label: "player zones" },
          { value: "1", label: "fast mobile flow" },
        ],
        imageSlotId: "home-hero-stage",
      },
      games: {
        eyebrow: "Casino discovery",
        title: "Pick the pace that fits your next session.",
        body: "Move from classic casino rooms to quick reels and live tables without losing the rhythm.",
        cards: [
          {
            title: "Casino floor",
            body: "Open the table-side atmosphere first and keep the experience polished from the first scroll.",
            badge: "Casino",
            imageSlotId: "home-casino-discovery",
          },
          {
            title: "Slots ready",
            body: "Bright reels, fast rounds, and a cleaner route when you want quick action.",
            badge: "Slots",
            imageSlotId: "home-slots",
          },
          {
            title: "Live tables",
            body: "Stay closer to real-time play with a sharper live-games mood and steady pacing.",
            badge: "Live",
            imageSlotId: "home-live-games",
          },
        ],
        sideNotes: [
          "Fast sign-up path",
          "Mobile-first navigation",
          "Sports and casino in one flow",
        ],
      },
      sports: {
        eyebrow: "Sports board",
        title: "Stay close to football, live boards, and every fast switch in between.",
        body: "Follow the main match pulse first, then move across the sports board without leaving the premium rhythm behind.",
        leadCard: {
          title: "Football nights",
          body: "Keep the biggest match moments up front with a stronger stage and cleaner focus.",
          badge: "Lead match",
          imageSlotId: "home-football",
        },
        supportCard: {
          title: "Live board energy",
          body: "Move quickly between active markets, fast updates, and the next moment worth watching.",
          badge: "Live board",
          imageSlotId: "home-live-match",
        },
        sportsList: ["Football", "Basketball", "Tennis", "Esports"],
        metrics: [
          { value: "4", label: "core sports lanes" },
          { value: "90'", label: "match-night focus" },
          { value: "1", label: "board-first route" },
        ],
      },
      offers: {
        eyebrow: "Rewards and gifts",
        title: "Keep your next reward close without turning the page into noise.",
        body: "Use welcome offers, gift-led promos, and support-led help when you want extra value around the session.",
        cards: [
          {
            title: "Welcome offers",
            body: "Start with an offer path that feels clear, quick, and easy to reach.",
            badge: "Welcome",
            imageSlotId: "home-welcome-offer",
            cta: {
              label: "claim 200$ bonus",
              href: playerAccessHref,
            },
          },
          {
            title: "Rewards and gifts",
            body: "Stay close to gift drops, loyalty moments, and extra reasons to keep the flow moving.",
            badge: "Rewards",
            imageSlotId: "home-gifts",
            cta: {
              label: "claim now",
              href: playerAccessHref,
            },
          },
        ],
        rewardStrip: [
          "Sports-led promos",
          "Gift moments",
          "Easy support when you need help",
        ],
      },
      finalCta: {
        eyebrow: "Ready to start",
        title: "Keep the next match, the next spin, and support in one place.",
        body: "Jump into games now or open the help route first if you want a cleaner start.",
        primaryCta: {
          label: "Open player flow",
          href: "/#games",
        },
        secondaryCta: {
          label: "Ask for support",
          href: "/faq#support",
          variant: "secondary",
        },
        imageSlotId: "home-final-cta",
        checklist: [
          "Football and live boards",
          "Slots and live tables",
          "Support route when you need it",
        ],
      },
    },
    partnership: {
      hero: {
        eyebrow: "Mongolia partnership desk",
        title: "Choose a route that fits your audience, your city, and the way you work.",
        body: "Promote with your own code or support players locally with a manager-backed setup, practical tools, and a clear next step.",
        primaryCta: {
          label: "View the routes",
          href: "/partnership#paths",
        },
        secondaryCta: {
          label: "Open support desk",
          href: "/faq#support",
          variant: "secondary",
        },
        metrics: [
          { value: "2", label: "main routes" },
          { value: "3", label: "start steps" },
          { value: "1", label: "manager contact lane" },
        ],
        imageSlotId: "partnership-hero",
      },
      benefits: {
        eyebrow: "Why work with us",
        title: "Keep the route practical, supported, and easy to scale step by step.",
        body: "The structure is built for promoters, community owners, and local operators who need clarity instead of noise.",
        imageSlotId: "partnership-benefits",
        cards: [
          {
            title: "Clear partner path",
            body: "Use your audience, private code, and campaign rhythm without guessing the next move.",
          },
          {
            title: "Local agent support",
            body: "Stay close to player needs with a route built around practical local handling and trust.",
          },
          {
            title: "Manager-backed help",
            body: "Keep communication short, direct, and focused on setup, tracking, and day-to-day momentum.",
          },
          {
            title: "Tools that stay usable",
            body: "Use materials, dashboards, and route guidance that support work instead of slowing it down.",
          },
        ],
      },
      steps: {
        eyebrow: "Start in three moves",
        title: "Pick the route, confirm the setup, and launch with a cleaner handoff.",
        body: "The first step should feel direct whether you bring an audience or handle local player support.",
        items: [
          {
            title: "Open the conversation",
            body: "Share how you want to work, the audience or city you cover, and the route that feels closest.",
          },
          {
            title: "Choose partner or agent",
            body: "Lock the practical model first so tools, expectations, and support stay aligned.",
          },
          {
            title: "Launch with guidance",
            body: "Start with a manager-backed handoff, basic materials, and a clear support lane.",
          },
        ],
      },
      paths: {
        eyebrow: "Choose your model",
        title: "Separate promotion work from local support so the next step stays clear.",
        body: "One route is built for audience growth and promo codes. The other is built for local handling, payment support, and player contact.",
        routes: [
          {
            title: terminology.en.partner,
            body: "Fit for creators, promoters, and community owners who want to grow with a private code, campaign materials, and a stronger audience path.",
            bullets: [
              "Private promo-code route",
              "Campaign support and materials",
              "Performance tracking with a manager",
            ],
            ctas: [
              {
                label: "Email",
                href: placeholderContactHrefs.email,
              },
              {
                label: "Telegram",
                href: placeholderContactHrefs.telegram,
                variant: "secondary",
              },
            ],
            imageSlotId: "partnership-partner-route",
          },
          {
            title: terminology.en.agent,
            body: "Fit for local operators who can support player handling, city-based communication, and practical payment workflows.",
            bullets: [
              "Local player support path",
              "Practical transaction handling",
              "Operational trust and manager follow-up",
            ],
            ctas: [
              {
                label: "Email",
                href: placeholderContactHrefs.email,
              },
              {
                label: "Telegram",
                href: placeholderContactHrefs.telegram,
                variant: "secondary",
              },
            ],
            imageSlotId: "partnership-agent-route",
          },
        ],
      },
      tools: {
        eyebrow: "Tools and support",
        title: "Use the setup that helps you track, promote, and stay organized.",
        body: "Keep dashboards, marketing materials, route guidance, and manager contact in one steady operating lane.",
        imageSlotId: "partnership-tools",
        toolPoints: [
          "Promo-code and campaign support",
          "Basic performance tracking",
          "Manager-led follow-up and route planning",
          "Materials built for mobile sharing",
        ],
        metrics: [
          { value: "24/7", label: "message window" },
          { value: "2", label: "work models" },
          { value: "1", label: "shared dashboard lane" },
        ],
      },
      finalCta: {
        eyebrow: "Open the next step",
        title: "Choose the route, contact the desk, and start with a clear handoff.",
        body: "If you already know your model, open the right channel now. If not, start the conversation first and pick the route with support.",
        primaryCta: {
          label: "Email",
          href: placeholderContactHrefs.email,
        },
        secondaryCta: {
          label: "Telegram",
          href: placeholderContactHrefs.telegram,
          variant: "secondary",
        },
        imageSlotId: "partnership-final-cta",
        checklist: [
          "Partner and agent routes stay separate",
          "Manager-backed onboarding",
          "Support, tools, and next-step clarity",
        ],
      },
    },
    faq: {
      intro: {
        eyebrow: "Quick answers",
        title: "Read the basics before you play or apply.",
        body: "The player path and the partnership path stay separate here, so you can move straight to the answers that match your goal.",
        imageSlotId: "faq-support",
      },
      playerTitle: "Player FAQ",
      partnershipTitle: "Partnership FAQ",
      playerItems: [
        {
          question: "How do I start?",
          answer:
            "Open the player flow, choose sports or casino first, and move into the section that fits your pace.",
        },
        {
          question: "What can I explore here?",
          answer:
            "Football-led sports action, casino discovery, slots, live games, and rewards built for quick scanning.",
        },
        {
          question: "Are sports and casino both available?",
          answer:
            "Yes. The page is built to move cleanly between sports, live boards, casino rooms, and slots.",
        },
        {
          question: "Do offers and rewards have a separate section?",
          answer:
            "Yes. Welcome offers, gift-led promos, and reward moments stay grouped in the offers area.",
        },
        {
          question: "Can I use it from mobile?",
          answer:
            "Yes. The main flow, cards, and final actions are built to stay readable and quick on smaller screens.",
        },
        {
          question: "Where do I go for help?",
          answer:
            "Open the support route from the final CTA or contact links when you want a cleaner start.",
        },
      ],
      partnershipItems: [
        {
          question: "Who can apply?",
          answer:
            "Creators, promoters, community owners, local operators, and anyone who fits the partner or agent route.",
        },
        {
          question: "What is the difference between partner and agent?",
          answer:
            "Partners focus on audience growth and promo-code promotion. Agents focus on local player support and practical transaction handling.",
        },
        {
          question: "What support is available?",
          answer:
            "You can start with manager-backed guidance, materials, route help, and a shared support lane.",
        },
        {
          question: "Can I track performance?",
          answer:
            "Yes. The partnership route is designed around tracking, practical feedback, and cleaner follow-up.",
        },
        {
          question: "How are deal terms handled?",
          answer:
            "Terms depend on route, volume, and how the setup is agreed with the manager.",
        },
        {
          question: "How do I open the process?",
          answer:
            "Use the route cards or the final partnership CTA to open the desk and start the conversation.",
        },
      ],
      support: {
        eyebrow: "Support desk",
        title: "Need a clearer route?",
        body: "Open the player support lane or contact the partnership desk if you already know what you want to start.",
        primaryCta: {
          label: "Email player support",
          href: "mailto:PAYPARTNERS-MIDDLEAST@MELBET.COM",
        },
        secondaryCta: {
          label: "Email partnership desk",
          href: "mailto:PAYPARTNERS-MIDDLEAST@MELBET.COM",
          variant: "secondary",
        },
      },
    },
    footer: {
      brandLine:
        "Sports, casino discovery, rewards, and support shaped into one premium Mongolia flow.",
      homeTitle: "Player flow",
      homeLinks: [
        { label: "Top stage", href: "/#top" },
        { label: "Games", href: "/#games" },
        { label: "Sports", href: "/#sports" },
        { label: "Offers", href: "/#offers" },
      ],
      partnershipTitle: terminology.en.partnership,
      partnershipLinks: [
        { label: "Hero", href: "/partnership#top" },
        { label: "Benefits", href: "/partnership#benefits" },
        { label: "Routes", href: "/partnership#paths" },
        { label: "Tools", href: "/partnership#tools" },
      ],
      supportTitle: "FAQ and support",
      supportLinks: [
        { label: "FAQ", href: "/faq" },
        { label: "Player help", href: "/faq#support" },
        { label: "Partnership help", href: "/partnership#final-cta" },
      ],
      contactTitle: "Contact",
      contactLinks: [
        {
          label: "Email",
          href: placeholderContactHrefs.email,
        },
        {
          label: "Telegram",
          href: placeholderContactHrefs.telegram,
        },
      ],
      legal: "Copyright © 2026. All rights reserved.",
    },
  },
  mn: {
    seo: {
      homeTitle: "ÐœÐ¾Ð½Ð³Ð¾Ð»Ñ‹Ð½ ÑÐ¿Ð¾Ñ€Ñ‚ Ð±Ð° ÐºÐ°Ð·Ð¸Ð½Ð¾Ð½Ñ‹ Ð¿Ñ€ÐµÐ¼Ð¸ÑƒÐ¼ Ñ…ÑƒÑƒÐ´Ð°Ñ",
      homeDescription:
        "Ð¡Ð¿Ð¾Ñ€Ñ‚, Ñ…Ó©Ð»Ð±Ó©Ð¼Ð±Ó©Ð³, ÐºÐ°Ð·Ð¸Ð½Ð¾, Ð°Ð¼ÑŒÐ´ Ñ‚Ð¾Ð³Ð»Ð¾Ð¾Ð¼, ÑƒÑ€Ð°Ð¼ÑˆÑƒÑƒÐ»Ð°Ð», Ð³Ð°Ñ€ ÑƒÑ‚Ð°ÑÐ½Ñ‹ Ð´ÑÐ¼Ð¶Ð»ÑÐ³Ñ‚ Ð·Ð¾Ñ€Ð¸ÑƒÐ»ÑÐ°Ð½ ÐœÐ¾Ð½Ð³Ð¾Ð»Ñ‹Ð½ Ñ‚Ð¾Ð³Ð»Ð¾Ð³Ñ‡Ð¸Ð¹Ð½ Ñ…ÑƒÑƒÐ´Ð°Ñ.",
      partnershipTitle: "ÐœÐ¾Ð½Ð³Ð¾Ð»Ñ‹Ð½ Ñ‚Ò¯Ð½ÑˆÐ»ÑÐ» Ð±Ð° Ð°Ð³ÐµÐ½Ñ‚Ñ‹Ð½ Ñ‡Ð¸Ð³Ð»ÑÐ»",
      partnershipDescription:
        "Ð¢Ò¯Ð½Ñˆ, Ð°Ð³ÐµÐ½Ñ‚, ÑÑƒÑ€Ñ‚Ð°Ð»Ñ‡Ð¸Ð»Ð³Ð°Ð°, Ð´ÑÐ¼Ð¶Ð»ÑÐ³, Ñ…ÑÑ€ÑÐ³ÑÑÐ», ÑÑ…Ð»ÑÑ… Ð°Ð»Ñ…Ð¼Ñ‹Ð³ Ñ‚Ó©Ð²Ð»Ó©Ñ€Ò¯Ò¯Ð»ÑÑÐ½ Ð±Ð¸Ð·Ð½ÐµÑÐ¸Ð¹Ð½ Ñ…ÑƒÑƒÐ´Ð°Ñ.",
      faqTitle: "ÐœÐ¾Ð½Ð³Ð¾Ð»Ñ‹Ð½ FAQ",
      faqDescription:
        "Ð¢Ð¾Ð³Ð»Ð¾Ð³Ñ‡ Ð±Ð¾Ð»Ð¾Ð½ Ñ‚Ò¯Ð½ÑˆÐ¸Ð¹Ð½ Ð½Ð¸Ð¹Ñ‚Ð»ÑÐ³ Ð°ÑÑƒÑƒÐ»Ñ‚Ð°Ð´ Ñ…ÑƒÑ€Ð´Ð°Ð½, ÑˆÑƒÑƒÐ´ Ñ…Ð°Ñ€Ð¸ÑƒÐ»Ð°Ñ… Ñ…ÑÑÑÐ³.",
    },
    nav: {
      home: "ÐÒ¯Ò¯Ñ€",
      games: "Ð¢Ð¾Ð³Ð»Ð¾Ð¾Ð¼",
      sports: "Ð¡Ð¿Ð¾Ñ€Ñ‚",
      offers: "Ð£Ñ€Ð°Ð¼ÑˆÑƒÑƒÐ»Ð°Ð»",
      partnership: terminology.mn.partnership,
      faq: "FAQ",
      contact: "Ð¥Ð¾Ð»Ð±Ð¾Ð¾ Ð±Ð°Ñ€Ð¸Ñ…",
    },
    chrome: {
      headerCta: {
        label: "ÐžÐ´Ð¾Ð¾ ÑÑ…ÑÐ»",
        href: "/#games",
      },
      localeLabel: "Ð¥ÑÐ»",
    },
    home: {
      hero: {
        eyebrow: "ÐœÐ¾Ð½Ð³Ð¾Ð» Ñ‚Ð¾Ð³Ð»Ð¾Ð³Ñ‡Ð´Ñ‹Ð½ Ð¾Ñ€Ð¾Ð½ Ð·Ð°Ð¹",
        title: "Ð¥Ó©Ð»Ð±Ó©Ð¼Ð±Ó©Ð³Ó©Ó©Ñ Ð°Ð¼ÑŒÐ´ ÑˆÐ¸Ñ€ÑÑ Ñ…Ò¯Ñ€Ñ‚ÑÐ» Ñ…ÑƒÑ€Ð´Ð°Ð½, Ð½ÑÐ³ Ñ…ÑÐ¼Ð½ÑÐ»Ñ‚ÑÐ¹ ÑƒÑ€ÑÐ³Ð°Ð»Ð°Ð°Ñ€ ÑÑ…ÑÐ».",
        body: "Ð¡Ð¿Ð¾Ñ€Ñ‚Ñ‹Ð½ ÑÐ°Ð¼Ð±Ð°Ñ€Ð°Ð° Ð½ÑÑÐ³ÑÑÐ´, ÑÐ»Ð¾Ñ‚ Ñ€ÑƒÑƒ Ð¾Ñ€Ð¶, Ñ‚Ð¾Ñ…Ð¸Ñ€ÑÐ¾Ð½ ÑƒÑ€Ð°Ð¼ÑˆÑƒÑƒÐ»Ð»Ð°Ð° Ð°Ð²Ñ‡, Ð´ÑÐ¼Ð¶Ð»ÑÐ³ÑÑ ÑÑ…Ð½Ð¸Ð¹ Ñ‚Ð¾Ð²ÑˆÐ¸Ð»Ñ‚Ð¾Ð¾Ñ Ð¾Ð¹Ñ€ Ð±Ð°Ð¹Ð»Ð³Ð°.",
        primaryCta: {
          label: "Ð¢Ð¾Ð³Ð»Ð¾Ð¾Ð¼ Ð½ÑÑÑ…",
          href: "/#games",
        },
        secondaryCta: {
          label: "Ð£Ñ€Ð°Ð¼ÑˆÑƒÑƒÐ»Ð°Ð» Ò¯Ð·ÑÑ…",
          href: "/#offers",
          variant: "secondary",
        },
        highlights: [
          {
            title: "Ð¥Ó©Ð»Ð±Ó©Ð¼Ð±Ó©Ð³ Ñ‚Ó©Ð²Ð´",
            body: "Ð¢Ð¾Ð¼ Ñ‚Ð¾Ð³Ð»Ð¾Ð»Ñ‚Ñ‹Ð½ Ñ…ÑÐ¼Ð½ÑÐ»Ð¸Ð¹Ð³ Ñ‚Ò¯Ñ€Ò¯Ò¯Ð½Ð´ Ð±Ð°Ð¹Ð»Ð³Ð°Ð¶, ÑÑ…Ð»ÑÐ»ÑÑÑ Ð°Ð¼ÑŒÐ´ ÑÐ°Ð¼Ð±Ð°Ñ€ Ñ€ÑƒÑƒ Ñ…ÑƒÑ€Ð´Ð°Ð½ ÑˆÐ¸Ð»Ð¶.",
          },
          {
            title: "Ð­Ð¼Ñ… Ñ†ÑÐ³Ñ†Ñ‚ÑÐ¹ ÐºÐ°Ð·Ð¸Ð½Ð¾",
            body: "Ð¡Ð»Ð¾Ñ‚, ÑˆÐ¸Ñ€ÑÑ, Ð°Ð¼ÑŒÐ´ Ñ‚Ð¾Ð³Ð»Ð¾Ð¾Ð¼ Ð³Ð°Ñ€ ÑƒÑ‚Ð°Ñ Ð±Ð¾Ð»Ð¾Ð½ desktop Ð´ÑÑÑ€ Ð¾Ð¹Ð»Ð³Ð¾Ð¼Ð¶Ñ‚Ð¾Ð¹ Ñ…ÑÐ²ÑÑÑ€ Ð±Ð°Ð¹Ð½Ð°.",
          },
          {
            title: "Ð¥ÑÑ€ÑÐ³Ñ‚ÑÐ¹ Ò¯ÐµÐ´ÑÑ ÑƒÑ€Ð°Ð¼ÑˆÑƒÑƒÐ»Ð°Ð»",
            body: "Ð£Ð³Ñ‚Ð°Ñ… ÑÐ°Ð½Ð°Ð», Ð±ÑÐ»ÑÐ³, Ð´ÑÐ¼Ð¶Ð»ÑÐ³ Ð±Ò¯Ð³Ð´ Ñ‚Ð¾Ð³Ð»Ð¾Ð»Ñ‚Ñ‹Ð½ Ñ…ÑÐ¼Ð½ÑÐ»Ð´ Ð¾Ð¹Ñ€ Ð±Ð°Ð¹Ð½Ð°.",
          },
        ],
        metrics: [
          { value: "24/7", label: "Ð´ÑÐ¼Ð¶Ð»ÑÐ³Ð¸Ð¹Ð½ Ñ…ÑÐ¼Ð½ÑÐ»" },
          { value: "4", label: "Ñ‚Ð¾Ð³Ð»Ð¾Ð³Ñ‡Ð¸Ð¹Ð½ Ò¯Ð½Ð´ÑÑÐ½ Ð±Ò¯Ñ" },
          { value: "1", label: "Ñ…ÑƒÑ€Ð´Ð°Ð½ mobile ÑƒÑ€ÑÐ³Ð°Ð»" },
        ],
        imageSlotId: "home-hero-stage",
      },
      games: {
        eyebrow: "ÐšÐ°Ð·Ð¸Ð½Ð¾ Ð½ÑÑÐ»Ñ‚",
        title: "Ð”Ð°Ñ€Ð°Ð°Ð³Ð¸Ð¹Ð½ ÑÐµÑˆÐ½Ð´ÑÑ Ñ‚Ð¾Ñ…Ð¸Ñ€Ð¾Ñ… Ñ…ÑÐ¼Ð½ÑÐ»Ð¸Ð¹Ð³ ÑÐ¾Ð½Ð³Ð¾.",
        body: "Ð¡Ð¾Ð½Ð³Ð¾Ð´Ð¾Ð³ ÐºÐ°Ð·Ð¸Ð½Ð¾ Ð¾Ñ€Ñ‡Ð½Ð¾Ð¾Ñ Ñ…ÑƒÑ€Ð´Ð°Ð½ ÑÐ»Ð¾Ñ‚, Ð°Ð¼ÑŒÐ´ ÑˆÐ¸Ñ€ÑÑ Ñ€Ò¯Ò¯ Ñ…ÑÐ¼Ð½ÑÐ»ÑÑ Ð°Ð»Ð´Ð°Ð»Ð³Ò¯Ð¹ ÑˆÐ¸Ð»Ð¶.",
        cards: [
          {
            title: "ÐšÐ°Ð·Ð¸Ð½Ð¾ Ñ‚Ð°Ð¹Ð·",
            body: "Ð¨Ð¸Ñ€ÑÑÐ½Ð¸Ð¹ ÑƒÑƒÑ€ Ð°Ð¼ÑŒÑÐ³Ð°Ð»Ð°Ð°Ñ ÑÑ…ÑÐ»Ð¶, ÑÑ…Ð½Ð¸Ð¹ scroll-Ð¾Ð¾ÑÐ¾Ð¾ Ð» Ñ†ÑÐ³Ñ†Ñ‚ÑÐ¹ Ð¼ÑÐ´Ñ€ÑÐ¼Ð¶ Ð°Ð².",
            badge: "ÐšÐ°Ð·Ð¸Ð½Ð¾",
            imageSlotId: "home-casino-discovery",
          },
          {
            title: "Ð¡Ð»Ð¾Ñ‚ Ð±ÑÐ»ÑÐ½",
            body: "Ð“ÑÑ€ÑÐ»Ñ‚ÑÑÐ½ Ñ…Ò¯Ñ€Ð´, Ñ…ÑƒÑ€Ð´Ð°Ð½ round, Ð±Ð¾Ð³Ð¸Ð½Ð¾ Ñ…ÑƒÐ³Ð°Ñ†Ð°Ð°Ð½Ñ‹ Ñ‚Ð¾Ð³Ð»Ð¾Ð»Ñ‚Ð¾Ð´ Ñ‚Ð¾Ñ…Ð¸Ñ€ÑÐ¾Ð½ ÑƒÑ€ÑÐ³Ð°Ð».",
            badge: "Ð¡Ð»Ð¾Ñ‚",
            imageSlotId: "home-slots",
          },
          {
            title: "ÐÐ¼ÑŒÐ´ ÑˆÐ¸Ñ€ÑÑ",
            body: "Ð‘Ð¾Ð´Ð¸Ñ‚ Ñ†Ð°Ð³Ð¸Ð¹Ð½ Ñ‚Ð¾Ð³Ð»Ð¾Ð»Ñ‚Ð¾Ð´ Ð¾Ð¹Ñ€ Ð±Ð°Ð¹Ð¶, Ð°Ð¼ÑŒÐ´ Ñ‚Ð¾Ð³Ð»Ð¾Ð¾Ð¼Ñ‹Ð½ Ð¸Ð»Ò¯Ò¯ Ð½ÑÐ³Ñ‚ Ñ…ÑÐ¼Ð½ÑÐ»Ð¸Ð¹Ð³ Ð¼ÑÐ´ÑÑ€.",
            badge: "Live",
            imageSlotId: "home-live-games",
          },
        ],
        sideNotes: [
          "Ð¥ÑƒÑ€Ð´Ð°Ð½ Ð±Ò¯Ñ€Ñ‚Ð³ÑÐ»",
          "Ð“Ð°Ñ€ ÑƒÑ‚ÑÐ°Ð½Ð´ ÑÑ…ÑÐ»Ð¶ Ñ‚Ð°Ð°Ñ€ÑƒÑƒÐ»ÑÐ°Ð½ ÑƒÑ€ÑÐ³Ð°Ð»",
          "Ð¡Ð¿Ð¾Ñ€Ñ‚ Ð±Ð° ÐºÐ°Ð·Ð¸Ð½Ð¾ Ð½ÑÐ³ Ð´Ð¾Ñ€",
        ],
      },
      sports: {
        eyebrow: "Ð¡Ð¿Ð¾Ñ€Ñ‚Ñ‹Ð½ ÑÐ°Ð¼Ð±Ð°Ñ€",
        title: "Ð¥Ó©Ð»Ð±Ó©Ð¼Ð±Ó©Ð³, live board, Ñ…ÑƒÑ€Ð´Ð°Ð½ ÑˆÐ¸Ð»Ð¶Ð¸Ð»Ñ‚ Ð±Ò¯Ñ…Ð½Ð¸Ð¹Ð³ Ð¾Ð¹Ñ€Ð¾Ð¾Ñ Ð´Ð°Ð³Ð°.",
        body: "Ð­Ñ…Ð»ÑÑÐ´ Ð³Ð¾Ð» Ñ‚Ð¾Ð³Ð»Ð¾Ð»Ñ‚Ñ‹Ð½ Ñ…ÑÐ¼Ð½ÑÐ»Ð¸Ð¹Ð³ Ð±Ð°Ñ€ÑŒÐ¶, Ð´Ð°Ñ€Ð°Ð° Ð½ÑŒ ÑÐ¿Ð¾Ñ€Ñ‚Ñ‹Ð½ ÑÐ°Ð¼Ð±Ð°Ñ€ Ð´Ð°ÑÐ°Ñ€ Ñ†ÑÐ²ÑÑ€Ñ…ÑÐ½ ÑˆÐ¸Ð»Ð¶.",
        leadCard: {
          title: "Ð¥Ó©Ð»Ð±Ó©Ð¼Ð±Ó©Ð³Ð¸Ð¹Ð½ Ò¯Ð´ÑÑˆ",
          body: "Ð¢Ð¾Ð³Ð»Ð¾Ð»Ñ‚Ñ‹Ð½ Ð¾Ñ€Ð³Ð¸Ð» Ð¼Ó©Ñ‡Ð¸Ð¹Ð³ Ð¸Ð»Ò¯Ò¯ Ñ…Ò¯Ñ‡Ñ‚ÑÐ¹ Ñ‚Ð°Ð¹Ð·, Ð¸Ð»Ò¯Ò¯ Ñ‚Ð¾Ð´ Ñ„Ð¾ÐºÑƒÑÐ¾Ð¾Ñ€ ÑƒÑ€Ð´ Ñ‚Ð°Ð»Ð´ Ð±Ð°Ð¹Ð»Ð³Ð°.",
          badge: "Ð“Ð¾Ð» Ñ‚Ð¾Ð³Ð»Ð¾Ð»Ñ‚",
          imageSlotId: "home-football",
        },
        supportCard: {
          title: "Live board ÑÑ€Ñ‡",
          body: "Ð˜Ð´ÑÐ²Ñ…Ñ‚ÑÐ¹ Ð·Ð°Ñ… Ð·ÑÑÐ», Ñ…ÑƒÑ€Ð´Ð°Ð½ ÑˆÐ¸Ð½ÑÑ‡Ð»ÑÐ»Ñ‚, Ð´Ð°Ñ€Ð°Ð°Ð³Ð¸Ð¹Ð½ Ð°Ð½Ñ…Ð°Ð°Ñ€Ð°Ñ… Ð¼Ó©Ñ‡Ò¯Ò¯Ð´Ð¸Ð¹Ð½ Ñ…Ð¾Ð¾Ñ€Ð¾Ð½Ð´ Ð°Ð¼Ð°Ñ€Ñ…Ð°Ð½ ÑˆÐ¸Ð»Ð¶.",
          badge: "Live board",
          imageSlotId: "home-live-match",
        },
        sportsList: ["Ð¥Ó©Ð»Ð±Ó©Ð¼Ð±Ó©Ð³", "Ð¡Ð°Ð³ÑÐ°Ð½ Ð±Ó©Ð¼Ð±Ó©Ð³", "Ð¢ÐµÐ½Ð½Ð¸Ñ", "Esports"],
        metrics: [
          { value: "4", label: "Ò¯Ð½Ð´ÑÑÐ½ ÑÐ¿Ð¾Ñ€Ñ‚Ñ‹Ð½ ÑˆÑƒÐ³Ð°Ð¼" },
          { value: "90'", label: "Ñ‚Ð¾Ð³Ð»Ð¾Ð»Ñ‚Ñ‹Ð½ Ñ‚Ó©Ð² Ñ…ÑÐ¼Ð½ÑÐ»" },
          { value: "1", label: "ÑÐ°Ð¼Ð±Ð°Ñ€Ñ‹Ð½ Ð³Ð¾Ð» Ð·Ð°Ð¼" },
        ],
      },
      offers: {
        eyebrow: "Ð¨Ð°Ð³Ð½Ð°Ð» Ð±Ð° Ð±ÑÐ»ÑÐ³",
        title: "Ð”Ð°Ñ€Ð°Ð°Ð³Ð¸Ð¹Ð½ ÑƒÑ€Ð°Ð¼ÑˆÑƒÑƒÐ»Ð»Ð°Ð° Ð¸Ð»Ò¯Ò¯Ð´ÑÐ» ÑˆÑƒÑƒÐ³Ð¸Ð°Ð½Ð³Ò¯Ð¹Ð³ÑÑÑ€ Ð¾Ð¹Ñ€ Ð±Ð°Ð¹Ð»Ð³Ð°.",
        body: "Ð£Ð³Ñ‚Ð°Ñ… ÑÐ°Ð½Ð°Ð», Ð±ÑÐ»Ð³Ð¸Ð¹Ð½ ÑƒÑ€Ð°Ð¼ÑˆÑƒÑƒÐ»Ð°Ð», Ð´ÑÐ¼Ð¶Ð»ÑÐ³Ñ‚ÑÐ¹ Ñ‚ÑƒÑÐ»Ð°Ð¼Ð¶Ð¸Ð¹Ð³ Ñ‚Ð¾Ð³Ð»Ð¾Ð»Ñ‚Ñ‹Ð½ ÑÐ²Ñ†Ñ‚Ð°Ð¹Ð³Ð°Ð° Ñ…Ð°Ð¼Ñ‚ Ð°ÑˆÐ¸Ð³Ð»Ð°.",
        cards: [
          {
            title: "Ð£Ð³Ñ‚Ð°Ñ… ÑÐ°Ð½Ð°Ð»",
            body: "Ð¥ÑƒÑ€Ð´Ð°Ð½ Ð½ÑÑÐ³Ð´Ð´ÑÐ³, Ð¾Ð¹Ð»Ð³Ð¾Ð¼Ð¶Ñ‚Ð¾Ð¹, ÑÑ…Ð½Ð¸Ð¹ Ð°Ð»Ñ…Ð°Ð¼Ð´ Ñ‚Ð¾Ñ…Ð¸Ñ€ÑÐ¾Ð½ ÑÐ°Ð½Ð°Ð»Ñ‹Ð½ ÑƒÑ€ÑÐ³Ð°Ð»Ð°Ð°Ñ€ ÑÑ…ÑÐ».",
            badge: "Welcome",
            imageSlotId: "home-welcome-offer",
            cta: {
              label: "claim 200$ bonus",
              href: playerAccessHref,
            },
          },
          {
            title: "Ð¨Ð°Ð³Ð½Ð°Ð» Ð±Ð° Ð±ÑÐ»ÑÐ³",
            body: "Ð‘ÑÐ»Ð³Ð¸Ð¹Ð½ Ð¼Ó©Ñ‡, loyalty ÑˆÐ°Ð³Ð½Ð°Ð», Ò¯Ñ€Ð³ÑÐ»Ð¶Ð»Ò¯Ò¯Ð»ÑÑ… Ð½ÑÐ¼ÑÐ»Ñ‚ ÑˆÐ°Ð»Ñ‚Ð³Ð°Ð°Ð½Ð°Ð° Ð¾Ð¹Ñ€ Ð±Ð°Ð¹Ð»Ð³Ð°.",
            badge: "Rewards",
            imageSlotId: "home-gifts",
            cta: {
              label: "claim now",
              href: playerAccessHref,
            },
          },
        ],
        rewardStrip: [
          "Ð¡Ð¿Ð¾Ñ€Ñ‚Ð¾Ð´ Ñ‚Ó©Ð²Ð»Ó©Ñ€ÑÓ©Ð½ promo",
          "Ð‘ÑÐ»Ð³Ð¸Ð¹Ð½ Ð¼Ó©Ñ‡Ò¯Ò¯Ð´",
          "Ð¥ÑÑ€ÑÐ³Ñ‚ÑÐ¹ Ò¯ÐµÐ´ÑÑ Ñ…ÑÐ»Ð±Ð°Ñ€ Ð´ÑÐ¼Ð¶Ð»ÑÐ³",
        ],
      },
      finalCta: {
        eyebrow: "Ð­Ñ…Ð»ÑÑ…ÑÐ´ Ð±ÑÐ»ÑÐ½ Ò¯Ò¯",
        title: "Ð”Ð°Ñ€Ð°Ð°Ð³Ð¸Ð¹Ð½ Ñ‚Ð¾Ð³Ð»Ð¾Ð»Ñ‚, Ð´Ð°Ñ€Ð°Ð°Ð³Ð¸Ð¹Ð½ spin, Ð´ÑÐ¼Ð¶Ð»ÑÐ³ÑÑ Ð½ÑÐ³ Ð´Ð¾Ñ€ Ð±Ð°Ð¹Ð»Ð³Ð°.",
        body: "ÐžÐ´Ð¾Ð¾ Ñ‚Ð¾Ð³Ð»Ð¾Ð¾Ð¼ Ñ€ÑƒÑƒ Ð¾Ñ€, ÑÑÐ²ÑÐ» Ð¸Ð»Ò¯Ò¯ Ñ†ÑÐ²ÑÑ€ ÑÑ…Ð»ÑÐ» Ñ…Ò¯ÑÐ²ÑÐ» ÑÑ…Ð»ÑÑÐ´ Ñ‚ÑƒÑÐ»Ð°Ð¼Ð¶Ð¸Ð¹Ð½ Ð·Ð°Ð¼Ð°Ð° Ð½ÑÑ.",
        primaryCta: {
          label: "Ð¢Ð¾Ð³Ð»Ð¾Ð³Ñ‡Ð¸Ð¹Ð½ ÑƒÑ€ÑÐ³Ð°Ð»Ñ‹Ð³ Ð½ÑÑÑ…",
          href: "/#games",
        },
        secondaryCta: {
          label: "Ð¢ÑƒÑÐ»Ð°Ð¼Ð¶ Ð°Ð²Ð°Ñ…",
          href: "/faq#support",
          variant: "secondary",
        },
        imageSlotId: "home-final-cta",
        checklist: [
          "Ð¥Ó©Ð»Ð±Ó©Ð¼Ð±Ó©Ð³ Ð±Ð° live board",
          "Ð¡Ð»Ð¾Ñ‚ Ð±Ð° Ð°Ð¼ÑŒÐ´ ÑˆÐ¸Ñ€ÑÑ",
          "Ð¥ÑÑ€ÑÐ³Ñ‚ÑÐ¹ Ò¯ÐµÐ´ÑÑ support route",
        ],
      },
    },
    partnership: {
      hero: {
        eyebrow: "ÐœÐ¾Ð½Ð³Ð¾Ð»Ñ‹Ð½ Ñ‚Ò¯Ð½ÑˆÐ»ÑÐ»Ð¸Ð¹Ð½ Ñ‚Ó©Ð²",
        title: "Ó¨Ó©Ñ€Ð¸Ð¹Ð½ Ð°ÑƒÐ´Ð¸Ñ‚Ð¾Ñ€Ð¸, Ñ…Ð¾Ñ‚, Ð°Ð¶Ð»Ñ‹Ð½ Ñ…ÑÐ² Ð¼Ð°ÑÐ³Ñ‚ Ñ‚Ð¾Ñ…Ð¸Ñ€Ð¾Ñ… Ð¼Ð°Ñ€ÑˆÑ€ÑƒÑ‚Ð°Ð° ÑÐ¾Ð½Ð³Ð¾.",
        body: "Ó¨Ó©Ñ€Ð¸Ð¹Ð½ ÐºÐ¾Ð´Ð¾Ð¾Ñ€ ÑÑƒÑ€Ñ‚Ð°Ð»Ñ‡Ð¸Ð», ÑÑÐ²ÑÐ» Ñ‚Ð¾Ð³Ð»Ð¾Ð³Ñ‡Ð´Ñ‹Ð³ Ð¾Ñ€Ð¾Ð½ Ð½ÑƒÑ‚Ð°Ð³Ñ‚ Ð´ÑÐ¼Ð¶Ð¸Ñ… manager-Ñ‚Ð°Ð¹, Ñ…ÑÑ€ÑÐ³ÑÑÐ»Ñ‚ÑÐ¹, Ñ‚Ð¾Ð´Ð¾Ñ€Ñ…Ð¾Ð¹ Ð°Ð»Ñ…Ð°Ð¼Ñ‚Ð°Ð¹ ÑÐ¸ÑÑ‚ÐµÐ¼ÑÑÑ€ ÑÑ…ÑÐ».",
        primaryCta: {
          label: "ÐœÐ°Ñ€ÑˆÑ€ÑƒÑ‚ Ò¯Ð·ÑÑ…",
          href: "/partnership#paths",
        },
        secondaryCta: {
          label: "Ð¢ÑƒÑÐ»Ð°Ð¼Ð¶Ð¸Ð¹Ð½ Ñ‚Ó©Ð² Ð½ÑÑÑ…",
          href: "/faq#support",
          variant: "secondary",
        },
        metrics: [
          { value: "2", label: "Ò¯Ð½Ð´ÑÑÐ½ Ð¼Ð°Ñ€ÑˆÑ€ÑƒÑ‚" },
          { value: "3", label: "ÑÑ…Ð»ÑÑ… Ð°Ð»Ñ…Ð°Ð¼" },
          { value: "1", label: "manager Ñ…Ð¾Ð»Ð±Ð¾Ð¾Ñ" },
        ],
        imageSlotId: "partnership-hero",
      },
      benefits: {
        eyebrow: "Ð¯Ð°Ð³Ð°Ð°Ð´ ÑÐ½Ñ Ð·Ð°Ð¼",
        title: "ÐœÐ°Ñ€ÑˆÑ€ÑƒÑ‚Ð°Ð° Ð¿Ñ€Ð°ÐºÑ‚Ð¸Ðº, Ð´ÑÐ¼Ð¶Ð»ÑÐ³Ñ‚ÑÐ¹, Ð°Ð»Ñ…Ð°Ð¼ Ð°Ð»Ñ…Ð¼Ð°Ð°Ñ€ Ó©ÑÓ©Ñ…Ó©Ó©Ñ€ Ð±Ð°Ð¹Ð»Ð³Ð°.",
        body: "Ð­Ð½Ñ Ð±Ò¯Ñ‚ÑÑ† Ð½ÑŒ ÑÑƒÑ€Ñ‚Ð°Ð»Ñ‡Ð»Ð°Ð³Ñ‡, community owner, Ð¾Ñ€Ð¾Ð½ Ð½ÑƒÑ‚Ð³Ð¸Ð¹Ð½ Ð¾Ð¿ÐµÑ€Ð°Ñ‚Ð¾Ñ€Ñ‚ ÑˆÑƒÑƒÐ³Ð¸Ð°Ð½ Ð±Ð¸Ñˆ Ñ‚Ð¾Ð´Ð¾Ñ€Ñ…Ð¾Ð¹ Ð·Ð°Ð¼ Ó©Ð³Ó©Ñ…Ó©Ó©Ñ€ Ñ…Ð¸Ð¹Ð³Ð´ÑÑÐ½.",
        imageSlotId: "partnership-benefits",
        cards: [
          {
            title: "Ð¢Ð¾Ð´Ð¾Ñ€Ñ…Ð¾Ð¹ partner path",
            body: "ÐÑƒÐ´Ð¸Ñ‚Ð¾Ñ€Ð¸, Ñ…ÑƒÐ²Ð¸Ð¹Ð½ ÐºÐ¾Ð´, campaign-Ñ‹Ð½ Ñ…ÑÐ¼Ð½ÑÐ»ÑÑ Ð´Ð°Ñ€Ð°Ð°Ð³Ð¸Ð¹Ð½ Ð°Ð»Ñ…Ð¼Ð°Ð° Ñ‚Ð°Ð°Ñ…Ð³Ò¯Ð¹Ð³ÑÑÑ€ Ð°ÑˆÐ¸Ð³Ð»Ð°.",
          },
          {
            title: "ÐžÑ€Ð¾Ð½ Ð½ÑƒÑ‚Ð³Ð¸Ð¹Ð½ agent support",
            body: "Ð¢Ð¾Ð³Ð»Ð¾Ð³Ñ‡Ð¸Ð¹Ð½ Ñ…ÑÑ€ÑÐ³Ñ†ÑÑÐ½Ð´ Ð¾Ð¹Ñ€, Ð¿Ñ€Ð°ÐºÑ‚Ð¸Ðº local handling Ð±Ð¾Ð»Ð¾Ð½ trust-Ð´ ÑÑƒÑƒÑ€Ð¸Ð»ÑÐ°Ð½ Ð·Ð°Ð¼Ð°Ð°Ñ€ Ð°Ð¶Ð¸Ð»Ð»Ð°.",
          },
          {
            title: "Manager-Ð¸Ð¹Ð½ ÑˆÑƒÑƒÐ´ Ð´ÑÐ¼Ð¶Ð»ÑÐ³",
            body: "Setup, tracking, Ó©Ð´Ó©Ñ€ Ñ‚ÑƒÑ‚Ð¼Ñ‹Ð½ Ñ…ÑÐ¼Ð½ÑÐ» Ð´ÑÑÑ€ Ð±Ð¾Ð³Ð¸Ð½Ð¾, ÑˆÑƒÑƒÐ´ Ñ…Ð°Ñ€Ð¸Ð»Ñ†Ð°Ð°Ñ‚Ð°Ð¹ Ð±Ð°Ð¹.",
          },
          {
            title: "ÐÑˆÐ¸Ð³Ð»Ð°Ñ…Ð°Ð´ Ð°Ð¼Ð°Ñ€ Ñ…ÑÑ€ÑÐ³ÑÑÐ»",
            body: "ÐœÐ°Ñ‚ÐµÑ€Ð¸Ð°Ð», dashboard, route guidance Ð½ÑŒ Ð°Ð¶Ð»Ñ‹Ð³ ÑƒÐ´Ð°Ð°ÑˆÑ€ÑƒÑƒÐ»Ð°Ñ…Ð³Ò¯Ð¹Ð³ÑÑÑ€ Ð´ÑÐ¼Ð¶Ð¸Ð½Ñ.",
          },
        ],
      },
      steps: {
        eyebrow: "Ð“ÑƒÑ€Ð²Ð°Ð½ Ð°Ð»Ñ…Ð¼Ð°Ð°Ñ€ ÑÑ…ÑÐ»",
        title: "ÐœÐ°Ñ€ÑˆÑ€ÑƒÑ‚Ð°Ð° ÑÐ¾Ð½Ð³Ð¾, setup-Ð°Ð° Ð±Ð°Ñ‚Ð°Ð»Ð³Ð°Ð°Ð¶ÑƒÑƒÐ», Ð´Ð°Ñ€Ð°Ð° Ð½ÑŒ Ñ†ÑÐ²ÑÑ€ handoff-Ð¾Ð¾Ñ€ ÑÑ…ÑÐ».",
        body: "ÐÑƒÐ´Ð¸Ñ‚Ð¾Ñ€Ð¸ Ð°Ð²Ñ‡Ð¸Ñ€Ð´Ð°Ð³ Ñ‡ Ð±Ð°Ð¹, local support Ñ…Ð¸Ð¹Ð´ÑÐ³ Ñ‡ Ð±Ð°Ð¹ ÑÑ…Ð½Ð¸Ð¹ Ð°Ð»Ñ…Ð°Ð¼ ÑˆÑƒÑƒÐ´ Ð¾Ð¹Ð»Ð³Ð¾Ð¼Ð¶Ñ‚Ð¾Ð¹ Ð±Ð°Ð¹Ñ… Ñ‘ÑÑ‚Ð¾Ð¹.",
        items: [
          {
            title: "Ð¯Ñ€Ð¸Ð°Ð³Ð°Ð° Ð½ÑÑ",
            body: "Ð¯Ð°Ð¶ Ð°Ð¶Ð¸Ð»Ð»Ð°Ñ…, ÑÐ¼Ð°Ñ€ Ð°ÑƒÐ´Ð¸Ñ‚Ð¾Ñ€Ð¸ ÑÑÐ²ÑÐ» Ñ…Ð¾Ñ‚ Ñ…Ð°Ð¼Ñ€Ð°Ñ…, Ð°Ð»ÑŒ Ð¼Ð°Ñ€ÑˆÑ€ÑƒÑ‚ Ð¾Ð¹Ñ€ ÑÐ°Ð½Ð°Ð³Ð´Ð°Ð¶ Ð±Ð°Ð¹Ð³Ð°Ð°Ð³Ð°Ð° Ñ…ÑƒÐ²Ð°Ð°Ð»Ñ†.",
          },
          {
            title: "Partner ÑÑÐ²ÑÐ» agent-Ð°Ð° ÑÐ¾Ð½Ð³Ð¾",
            body: "Ð­Ñ…Ð»ÑÑÐ´ practical model-Ð¾Ð¾ Ñ‚Ò¯Ð³Ð¶Ð¸Ð¶ Ð°Ð²ÑÐ½Ð°Ð°Ñ€ Ñ…ÑÑ€ÑÐ³ÑÑÐ», Ñ…Ò¯Ð»ÑÑÐ»Ñ‚, support Ð±Ò¯Ð³Ð´ Ð½ÑÐ³ ÑˆÑƒÐ³Ð°Ð¼Ð´ Ð¾Ñ€Ð½Ð¾.",
          },
          {
            title: "Ð§Ð¸Ð³Ð»Ò¯Ò¯Ð»ÑÐ³Ñ‚ÑÐ¹ launch Ñ…Ð¸Ð¹",
            body: "Manager-Ð¸Ð¹Ð½ handoff, ÑÑƒÑƒÑ€ÑŒ Ð¼Ð°Ñ‚ÐµÑ€Ð¸Ð°Ð», Ñ‚Ð¾Ð´Ð¾Ñ€Ñ…Ð¾Ð¹ support lane-Ñ‚Ð°Ð¹Ð³Ð°Ð°Ñ€ ÑÑ…ÑÐ».",
          },
        ],
      },
      paths: {
        eyebrow: "ÐœÐ¾Ð´ÐµÐ»Ð¾Ð¾ ÑÐ¾Ð½Ð³Ð¾",
        title: "Promotion Ð°Ð¶Ð»Ð°Ð° local support-Ð¾Ð¾Ñ ÑÐ°Ð»Ð³Ð°Ð¶, Ð´Ð°Ñ€Ð°Ð°Ð³Ð¸Ð¹Ð½ Ð°Ð»Ñ…Ð¼Ð°Ð° Ñ‚Ð¾Ð´Ð¾Ñ€Ñ…Ð¾Ð¹ Ð±Ð°Ð¹Ð»Ð³Ð°.",
        body: "ÐÑÐ³ Ð¼Ð°Ñ€ÑˆÑ€ÑƒÑ‚ Ð½ÑŒ Ð°ÑƒÐ´Ð¸Ñ‚Ð¾Ñ€Ð¸ Ó©ÑÐ³Ó©Ñ… Ð±Ð° promo code-Ð´, Ð½Ó©Ð³Ó©Ó© Ð½ÑŒ local handling, payment support, player contact-Ð´ Ð·Ð¾Ñ€Ð¸ÑƒÐ»Ð°Ð³Ð´ÑÐ°Ð½.",
        routes: [
          {
            title: terminology.mn.partner,
            body: "ÐÑƒÐ´Ð¸Ñ‚Ð¾Ñ€Ð¸, ÐºÐ¾Ð´, campaign material, growth path Ð°ÑˆÐ¸Ð³Ð»Ð°Ñ…Ñ‹Ð³ Ñ…Ò¯ÑÐ´ÑÐ³ creator, promoter, community owner-Ð´ Ð¸Ð»Ò¯Ò¯ Ñ‚Ð¾Ñ…Ð¸Ñ€Ð½Ð¾.",
            bullets: [
              "Ð¥ÑƒÐ²Ð¸Ð¹Ð½ promo code",
              "Campaign support Ð±Ð° Ð¼Ð°Ñ‚ÐµÑ€Ð¸Ð°Ð»",
              "Manager-Ñ‚Ð°Ð¹ performance tracking",
            ],
            ctas: [
              {
                label: "\u0418\u043c\u044d\u0439\u043b",
                href: placeholderContactHrefs.email,
              },
              {
                label: "Telegram",
                href: placeholderContactHrefs.telegram,
                variant: "secondary",
              },
            ],
            imageSlotId: "partnership-partner-route",
          },
          {
            title: terminology.mn.agent,
            body: "Ð¢Ð¾Ð³Ð»Ð¾Ð³Ñ‡Ð¸Ð¹Ð½ local support, Ñ…Ð¾Ñ‚Ñ‹Ð½ communication, practical payment workflow Ñ…Ð¸Ð¹Ð¶ Ñ‡Ð°Ð´Ð´Ð°Ð³ Ñ…Ò¯Ð¼Ò¯Ò¯ÑÑ‚ Ñ‚Ð¾Ñ…Ð¸Ñ€Ð½Ð¾.",
            bullets: [
              "Local player support route",
              "ÐŸÑ€Ð°ÐºÑ‚Ð¸Ðº transaction handling",
              "Operational trust Ð±Ð° manager follow-up",
            ],
            ctas: [
              {
                label: "\u0418\u043c\u044d\u0439\u043b",
                href: placeholderContactHrefs.email,
              },
              {
                label: "Telegram",
                href: placeholderContactHrefs.telegram,
                variant: "secondary",
              },
            ],
            imageSlotId: "partnership-agent-route",
          },
        ],
      },
      tools: {
        eyebrow: "Ð¥ÑÑ€ÑÐ³ÑÑÐ» Ð±Ð° Ð´ÑÐ¼Ð¶Ð»ÑÐ³",
        title: "Tracking, promotion, organization-Ð¾Ð¾ Ð´ÑÐ¼Ð¶Ð¸Ñ… setup Ð°ÑˆÐ¸Ð³Ð»Ð°.",
        body: "Dashboard, marketing material, route guidance, manager contact Ð±Ò¯Ð³Ð´ Ð½ÑÐ³ Ñ‚Ð¾Ð³Ñ‚Ð²Ð¾Ñ€Ñ‚Ð¾Ð¹ operating lane-Ð´ Ð±Ð°Ð¹Ð½Ð°.",
        imageSlotId: "partnership-tools",
        toolPoints: [
          "Promo code Ð±Ð° campaign support",
          "Ð¡ÑƒÑƒÑ€ÑŒ performance tracking",
          "Manager-led follow-up Ð±Ð° route planning",
          "Ð“Ð°Ñ€ ÑƒÑ‚ÑÐ°Ð°Ñ€ Ñ‚Ò¯Ð³ÑÑÑ…ÑÐ´ Ð±ÑÐ»ÑÐ½ Ð¼Ð°Ñ‚ÐµÑ€Ð¸Ð°Ð»",
        ],
        metrics: [
          { value: "24/7", label: "Ð¼ÐµÑÑÐµÐ¶Ð¸Ð¹Ð½ Ñ†Ð¾Ð½Ñ…" },
          { value: "2", label: "Ð°Ð¶Ð»Ñ‹Ð½ Ð¼Ð¾Ð´ÐµÐ»ÑŒ" },
          { value: "1", label: "dashboard lane" },
        ],
      },
      finalCta: {
        eyebrow: "Ð”Ð°Ñ€Ð°Ð°Ð³Ð¸Ð¹Ð½ Ð°Ð»Ñ…Ð¼Ð°Ð° Ð½ÑÑ",
        title: "ÐœÐ°Ñ€ÑˆÑ€ÑƒÑ‚Ð°Ð° ÑÐ¾Ð½Ð³Ð¾, Ñ‚Ó©Ð²Ñ‚ÑÐ¹ Ñ…Ð¾Ð»Ð±Ð¾Ð³Ð´, Ñ‚Ð¾Ð´Ð¾Ñ€Ñ…Ð¾Ð¹ handoff-Ð¾Ð¾Ñ€ ÑÑ…ÑÐ».",
        body: "ÐœÐ°Ñ€ÑˆÑ€ÑƒÑ‚Ð°Ð° Ð¼ÑÐ´ÑÐ¶ Ð±Ð°Ð¹Ð²Ð°Ð» ÑˆÑƒÑƒÐ´ Ð·Ó©Ð² ÑÑƒÐ²Ð³Ð°Ð° Ð½ÑÑ. Ð¥ÑÑ€ÑÐ² ÑÑ€Ð³ÑÐ»Ð·ÑÐ¶ Ð±Ð°Ð¹Ð²Ð°Ð» ÑÑ…Ð»ÑÑÐ´ ÑÑ€Ð¸Ð°Ð³Ð°Ð° ÑÑ…Ð»Ò¯Ò¯Ð»ÑÑÐ´ support-Ñ‚Ð¾Ð¹Ð³Ð¾Ð¾Ñ€ ÑÐ¾Ð½Ð³Ð¾Ð»Ñ‚Ð¾Ð¾ Ð±Ð°Ñ‚Ð°Ð»Ð³Ð°Ð°Ð¶ÑƒÑƒÐ».",
        primaryCta: {
          label: "\u0418\u043c\u044d\u0439\u043b",
          href: placeholderContactHrefs.email,
        },
        secondaryCta: {
          label: "Telegram",
          href: placeholderContactHrefs.telegram,
          variant: "secondary",
        },
        imageSlotId: "partnership-final-cta",
        checklist: [
          "Partner Ð±Ð° agent route Ñ‚ÑƒÑÐ´Ð°Ð°",
          "Manager-Ñ‚Ð°Ð¹ onboarding",
          "Support, tools, next-step clarity",
        ],
      },
    },
    faq: {
      intro: {
        eyebrow: "Ð¢Ð¾Ð²Ñ‡ Ñ…Ð°Ñ€Ð¸ÑƒÐ»Ñ‚",
        title: "Ð¢Ð¾Ð³Ð»Ð¾Ñ… ÑÑÐ²ÑÐ» Ñ…Ð°Ð¼Ñ‚Ñ€Ð°Ñ…Ñ‹Ð½ Ó©Ð¼Ð½Ó© ÑÑƒÑƒÑ€ÑŒ Ð¼ÑÐ´ÑÑÐ»Ð»ÑÑ ÑƒÐ½Ñˆ.",
        body: "Ð¢Ð¾Ð³Ð»Ð¾Ð³Ñ‡Ð¸Ð¹Ð½ Ð·Ð°Ð¼, Ñ‚Ò¯Ð½ÑˆÐ»ÑÐ»Ð¸Ð¹Ð½ Ð·Ð°Ð¼ Ñ…Ð¾Ñ‘Ñ€Ñ‹Ð³ ÑÐ½Ð´ Ñ‚ÑƒÑÐ°Ð´ Ð½ÑŒ Ð±Ð°Ð¹Ñ€ÑˆÑƒÑƒÐ»ÑÐ°Ð½ Ñ‚ÑƒÐ» Ð·Ð¾Ñ€Ð¸Ð»Ð³Ð¾Ð´Ð¾Ð¾ Ñ‚Ð¾Ñ…Ð¸Ñ€ÑÐ¾Ð½ Ñ…Ð°Ñ€Ð¸ÑƒÐ»Ñ‚ Ñ€ÑƒÑƒ ÑˆÑƒÑƒÐ´ Ð¾Ñ€Ð¶ Ð±Ð¾Ð»Ð½Ð¾.",
        imageSlotId: "faq-support",
      },
      playerTitle: "Ð¢Ð¾Ð³Ð»Ð¾Ð³Ñ‡Ð¸Ð¹Ð½ FAQ",
      partnershipTitle: "Ð¢Ò¯Ð½ÑˆÐ»ÑÐ»Ð¸Ð¹Ð½ FAQ",
      playerItems: [
        {
          question: "Ð¥ÑÑ€Ñ…ÑÐ½ ÑÑ…Ð»ÑÑ… Ð²Ñ?",
          answer:
            "Player flow-Ð¾Ð¾ Ð½ÑÑÐ³ÑÑÐ´ ÑÑ…Ð»ÑÑÐ´ ÑÐ¿Ð¾Ñ€Ñ‚ ÑÑÐ²ÑÐ» ÐºÐ°Ð·Ð¸Ð½Ð¾ ÑÐ¾Ð½Ð³Ð¾Ð¶, Ó©Ó©Ñ€Ð¸Ð¹Ð½ Ñ…ÑÐ¼Ð½ÑÐ»Ð´ Ñ‚Ð¾Ñ…Ð¸Ñ€ÑÐ¾Ð½ Ñ…ÑÑÑÐ³ Ñ€Ò¯Ò¯ Ð¾Ñ€.",
        },
        {
          question: "Ð­Ð½Ð´ ÑŽÑƒ Ò¯Ð·ÑÐ¶ Ð±Ð¾Ð»Ð¾Ñ… Ð²Ñ?",
          answer:
            "Ð¥Ó©Ð»Ð±Ó©Ð¼Ð±Ó©Ð³Ñ‚ Ñ‚Ó©Ð²Ð»Ó©Ñ€ÑÓ©Ð½ ÑÐ¿Ð¾Ñ€Ñ‚Ñ‹Ð½ action, ÐºÐ°Ð·Ð¸Ð½Ð¾, ÑÐ»Ð¾Ñ‚, Ð°Ð¼ÑŒÐ´ Ñ‚Ð¾Ð³Ð»Ð¾Ð¾Ð¼, ÑƒÑ€Ð°Ð¼ÑˆÑƒÑƒÐ»Ð»Ñ‹Ð³ Ñ…ÑƒÑ€Ð´Ð°Ð½ Ñ…Ð°Ñ€Ð°Ñ… Ð±Ò¯Ñ‚ÑÑ†Ñ‚ÑÐ¹.",
        },
        {
          question: "Ð¡Ð¿Ð¾Ñ€Ñ‚ Ð±Ð° ÐºÐ°Ð·Ð¸Ð½Ð¾ Ñ…Ð¾Ñ‘ÑƒÐ»Ð°Ð° Ð±Ð°Ð¹Ð½Ð° ÑƒÑƒ?",
          answer:
            "Ð¢Ð¸Ð¹Ð¼. Ð¡Ð¿Ð¾Ñ€Ñ‚, live board, ÐºÐ°Ð·Ð¸Ð½Ð¾, ÑÐ»Ð¾Ñ‚Ñ‹Ð½ Ñ…Ð¾Ð¾Ñ€Ð¾Ð½Ð´ Ñ†ÑÐ²ÑÑ€Ñ…ÑÐ½ ÑˆÐ¸Ð»Ð¶Ð¸Ñ…ÑÑÑ€ Ð±Ò¯Ñ‚ÑÑÐ³Ð´ÑÑÐ½.",
        },
        {
          question: "Ð£Ñ€Ð°Ð¼ÑˆÑƒÑƒÐ»Ð°Ð» Ñ‚ÑƒÑÐ´Ð°Ð° Ñ…ÑÑÑÐ³Ñ‚ÑÐ¹ ÑŽÑƒ?",
          answer:
            "Ð¢Ð¸Ð¹Ð¼. Welcome offer, Ð±ÑÐ»Ð³Ð¸Ð¹Ð½ promo, reward moment Ð±Ò¯Ð³Ð´ offers Ñ…ÑÑÑÐ³Ñ‚ Ñ‚Ó©Ð²Ð»Ó©Ñ€ÑÓ©Ð½.",
        },
        {
          question: "Ð“Ð°Ñ€ ÑƒÑ‚Ð°ÑÐ½Ð°Ð°Ñ Ð°ÑˆÐ¸Ð³Ð»Ð°Ð¶ Ð±Ð¾Ð»Ð¾Ñ… ÑƒÑƒ?",
          answer:
            "Ð¢Ð¸Ð¹Ð¼. Ò®Ð½Ð´ÑÑÐ½ ÑƒÑ€ÑÐ³Ð°Ð», ÐºÐ°Ñ€Ñ‚ÑƒÑƒÐ´, ÑÒ¯Ò¯Ð»Ð¸Ð¹Ð½ action-ÑƒÑƒÐ´Ñ‹Ð³ Ð¶Ð¸Ð¶Ð¸Ð³ Ð´ÑÐ»Ð³ÑÑ† Ð´ÑÑÑ€ Ñ‡ Ð¾Ð¹Ð»Ð³Ð¾Ð¼Ð¶Ñ‚Ð¾Ð¹ Ð±Ð°Ð¹Ñ…Ð°Ð°Ñ€ Ñ…Ð¸Ð¹ÑÑÐ½.",
        },
        {
          question: "Ð¢ÑƒÑÐ»Ð°Ð¼Ð¶ Ñ…Ð°Ð°Ð½Ð°Ð°Ñ Ð°Ð²Ð°Ñ… Ð²Ñ?",
          answer:
            "Final CTA ÑÑÐ²ÑÐ» contact link-Ò¯Ò¯Ð´ÑÑÑ€ support route-Ð¾Ð¾ Ð½ÑÑÐ³ÑÑÐ´ Ð¸Ð»Ò¯Ò¯ Ñ†ÑÐ²ÑÑ€ ÑÑ…Ð»ÑÐ» Ð°Ð²Ñ‡ Ð±Ð¾Ð»Ð½Ð¾.",
        },
      ],
      partnershipItems: [
        {
          question: "Ð¥ÑÐ½ Ñ…Ð°Ð¼Ñ€Ð°Ð³Ð´Ð°Ð¶ Ð±Ð¾Ð»Ð¾Ñ… Ð²Ñ?",
          answer:
            "Creator, promoter, community owner, local operator Ð±Ð¾Ð»Ð¾Ð½ partner ÑÑÐ²ÑÐ» agent route-Ð´ Ñ‚Ð¾Ñ…Ð¸Ñ€Ð¾Ñ… Ñ…Ò¯Ð¼Ò¯Ò¯Ñ Ñ…Ð°Ð¼Ñ€Ð°Ð³Ð´Ð°Ð¶ Ð±Ð¾Ð»Ð½Ð¾.",
        },
        {
          question: "Partner Ð±Ð° agent ÑÐ¼Ð°Ñ€ ÑÐ»Ð³Ð°Ð°Ñ‚Ð°Ð¹ Ð²Ñ?",
          answer:
            "Partner Ð½ÑŒ Ð°ÑƒÐ´Ð¸Ñ‚Ð¾Ñ€Ð¸ Ó©ÑÐ³Ó©Ñ…, promo code-Ð°Ð°Ñ€ ÑÑƒÑ€Ñ‚Ð°Ð»Ñ‡Ð»Ð°Ñ…Ð°Ð´ Ñ‚Ó©Ð²Ð»Ó©Ñ€Ð½Ó©. Agent Ð½ÑŒ local player support Ð±Ð¾Ð»Ð¾Ð½ practical transaction handling-Ð´ Ñ‚Ó©Ð²Ð»Ó©Ñ€Ð½Ó©.",
        },
        {
          question: "Ð¯Ð¼Ð°Ñ€ support Ð°Ð²Ð°Ñ… Ð²Ñ?",
          answer:
            "Manager-Ð¸Ð¹Ð½ guidance, Ð¼Ð°Ñ‚ÐµÑ€Ð¸Ð°Ð», route help, shared support lane-Ð°Ð°Ñ€ ÑÑ…ÑÐ»Ð¶ Ð±Ð¾Ð»Ð½Ð¾.",
        },
        {
          question: "Performance tracking Ñ…Ð¸Ð¹Ñ… Ð±Ð¾Ð»Ð¾Ð¼Ð¶Ñ‚Ð¾Ð¹ ÑŽÑƒ?",
          answer:
            "Ð¢Ð¸Ð¹Ð¼. Ð­Ð½Ñ route Ð½ÑŒ tracking, practical feedback, follow-up Ð´ÑÑÑ€ ÑÑƒÑƒÑ€Ð¸Ð»ÑÐ°Ð½.",
        },
        {
          question: "Deal terms ÑÐ°Ð¶ ÑˆÐ¸Ð¹Ð´ÑÐ³Ð´Ð´ÑÐ³ Ð²Ñ?",
          answer:
            "ÐÓ©Ñ…Ñ†Ó©Ð» Ð½ÑŒ route, Ñ…ÑÐ¼Ð¶ÑÑ, setup-Ð°Ð° manager-Ñ‚Ð°Ð¹ Ñ…ÑÑ€Ñ…ÑÐ½ Ñ‚Ð¾Ñ…Ð¸Ñ€ÑÐ½Ð¾Ð¾Ñ Ñ…Ð°Ð¼Ð°Ð°Ñ€Ð½Ð°.",
        },
        {
          question: "ÐŸÑ€Ð¾Ñ†ÐµÑÑÑ‹Ð³ ÑÐ°Ð¶ Ð½ÑÑÑ… Ð²Ñ?",
          answer:
            "Route cards ÑÑÐ²ÑÐ» partnership final CTA-Ð°Ð°Ñ€ Ð´Ð°Ð¼Ð¶Ð¸Ð½ Ñ‚Ó©Ð²Ñ‚ÑÐ¹ Ñ…Ð¾Ð»Ð±Ð¾Ð³Ð´Ð¾Ð¾Ð´ ÑÑ€Ð¸Ð°Ð³Ð°Ð° ÑÑ…ÑÐ».",
        },
      ],
      support: {
        eyebrow: "Ð¢ÑƒÑÐ»Ð°Ð¼Ð¶Ð¸Ð¹Ð½ Ñ‚Ó©Ð²",
        title: "Ð˜Ð»Ò¯Ò¯ Ñ‚Ð¾Ð´Ð¾Ñ€Ñ…Ð¾Ð¹ Ð¼Ð°Ñ€ÑˆÑ€ÑƒÑ‚ Ñ…ÑÑ€ÑÐ³Ñ‚ÑÐ¹ ÑŽÑƒ?",
        body: "Ð¢Ð¾Ð³Ð»Ð¾Ð³Ñ‡Ð¸Ð¹Ð½ support lane-Ð°Ð° Ð½ÑÑÑ… ÑÑÐ²ÑÐ» ÑÑ…Ð»ÑÑ… Ð·Ò¯Ð¹Ð»ÑÑ Ð¼ÑÐ´ÑÐ¶ Ð±Ð°Ð¹Ð²Ð°Ð» partnership desk-Ñ‚ÑÐ¹ ÑˆÑƒÑƒÐ´ Ñ…Ð¾Ð»Ð±Ð¾Ð³Ð´.",
        primaryCta: {
          label: "Ð¢Ð¾Ð³Ð»Ð¾Ð³Ñ‡Ð¸Ð¹Ð½ support Ð¸Ð¼ÑÐ¹Ð»",
          href: "mailto:PAYPARTNERS-MIDDLEAST@MELBET.COM",
        },
        secondaryCta: {
          label: "Ð¢Ò¯Ð½ÑˆÐ»ÑÐ»Ð¸Ð¹Ð½ desk Ð¸Ð¼ÑÐ¹Ð»",
          href: "mailto:PAYPARTNERS-MIDDLEAST@MELBET.COM",
          variant: "secondary",
        },
      },
    },
    footer: {
      brandLine:
        "Ð¡Ð¿Ð¾Ñ€Ñ‚, ÐºÐ°Ð·Ð¸Ð½Ð¾, ÑƒÑ€Ð°Ð¼ÑˆÑƒÑƒÐ»Ð°Ð», Ð´ÑÐ¼Ð¶Ð»ÑÐ³Ð¸Ð¹Ð³ ÐœÐ¾Ð½Ð³Ð¾Ð»Ñ‹Ð½ Ð½ÑÐ³ premium ÑƒÑ€ÑÐ³Ð°Ð»Ð´ Ð½ÑÐ³Ñ‚Ð³ÑÑÑÐ½ Ñ…ÑƒÑƒÐ´Ð°Ñ.",
      homeTitle: "Ð¢Ð¾Ð³Ð»Ð¾Ð³Ñ‡Ð¸Ð¹Ð½ ÑƒÑ€ÑÐ³Ð°Ð»",
      homeLinks: [
        { label: "Ð­Ñ…Ð½Ð¸Ð¹ Ñ‚Ð°Ð¹Ð·", href: "/#top" },
        { label: "Ð¢Ð¾Ð³Ð»Ð¾Ð¾Ð¼", href: "/#games" },
        { label: "Ð¡Ð¿Ð¾Ñ€Ñ‚", href: "/#sports" },
        { label: "Ð£Ñ€Ð°Ð¼ÑˆÑƒÑƒÐ»Ð°Ð»", href: "/#offers" },
      ],
      partnershipTitle: terminology.mn.partnership,
      partnershipLinks: [
        { label: "Hero", href: "/partnership#top" },
        { label: "Benefits", href: "/partnership#benefits" },
        { label: "Routes", href: "/partnership#paths" },
        { label: "Tools", href: "/partnership#tools" },
      ],
      supportTitle: "FAQ Ð±Ð° Ð´ÑÐ¼Ð¶Ð»ÑÐ³",
      supportLinks: [
        { label: "FAQ", href: "/faq" },
        { label: "Ð¢Ð¾Ð³Ð»Ð¾Ð³Ñ‡Ð¸Ð¹Ð½ help", href: "/faq#support" },
        { label: "Ð¢Ò¯Ð½ÑˆÐ»ÑÐ»Ð¸Ð¹Ð½ help", href: "/partnership#final-cta" },
      ],
      contactTitle: "Ð¥Ð¾Ð»Ð±Ð¾Ð¾ Ð±Ð°Ñ€Ð¸Ñ…",
      contactLinks: [
        {
          label: "\u0418\u043c\u044d\u0439\u043b",
          href: placeholderContactHrefs.email,
        },
        {
          label: "Telegram",
          href: placeholderContactHrefs.telegram,
        },
      ],
      legal:
        "Copyright \u00A9 2026. \u0411\u04af\u0445 \u044d\u0440\u0445 \u0445\u0443\u0443\u043b\u0438\u0430\u0440 \u0445\u0430\u043c\u0433\u0430\u0430\u043b\u0430\u0433\u0434\u0441\u0430\u043d.",
    },
  },
};

export const mongoliaContent: Record<MongoliaLocale, LocaleContent> = {
  ...rawMongoliaContent,
  mn: repairMojibake(rawMongoliaContent.mn),
};

export const getMongoliaContent = (locale: MongoliaLocale) =>
  mongoliaContent[locale];
