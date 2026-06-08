import { cn } from "@/lib/cn";

type PageBackgroundProps = {
  page: "home" | "partnership" | "faq";
};

export function PageBackground({ page }: PageBackgroundProps) {
  return (
    <div aria-hidden className={cn("page-background", `page-background--${page}`)}>
      <div className="page-background__base" />
      <div className="page-background__glow page-background__glow--top" />
      <div className="page-background__glow page-background__glow--side" />
      <div className="page-background__glow page-background__glow--gold" />
      <div className="page-background__steppe" />
      <div className="page-background__soyombo" />
      <div className="page-background__grid" />
      <div className="page-background__vignette" />
    </div>
  );
}
