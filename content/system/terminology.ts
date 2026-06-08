import type { MongoliaLocale } from "@/config/mongolia.globals";
import { repairMojibake } from "@/lib/repair-mojibake";

const rawTerminology: Record<
  MongoliaLocale,
  {
    partnership: string;
    partner: string;
    agent: string;
    tools: string;
    support: string;
    onboarding: string;
    rewards: string;
  }
> = {
  en: {
    partnership: "Partnership",
    partner: "Partner",
    agent: "Agent",
    tools: "Tools",
    support: "Support",
    onboarding: "Onboarding",
    rewards: "Rewards",
  },
  mn: {
    partnership: "Түншлэл",
    partner: "Түнш",
    agent: "Агент",
    tools: "Хэрэгсэл",
    support: "Тусламж",
    onboarding: "Эхлэх алхам",
    rewards: "Урамшуулал",
  },
};

export const terminology = {
  ...rawTerminology,
  mn: repairMojibake(rawTerminology.mn),
};
