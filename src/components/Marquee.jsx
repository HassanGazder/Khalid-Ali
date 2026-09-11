import { MARQUEE_ITEMS } from "@/data/portfolio";

const Row = () => (
  <div className="flex shrink-0 items-center">
    {MARQUEE_ITEMS.map((item) => (
      <span key={item} className="flex items-center">
        <span className="px-6 font-mono text-xs uppercase tracking-[0.3em] text-gold">
          {item}
        </span>
        <span className="text-[10px] text-crimson">◆</span>
      </span>
    ))}
  </div>
);

export default function Marquee() {
  return (
    <div
      data-testid="marquee-strip"
      className="overflow-hidden border-y border-white/10 bg-coal py-4"
      aria-hidden="true"
    >
      <div className="marquee-track">
        <Row />
        <Row />
      </div>
    </div>
  );
}
