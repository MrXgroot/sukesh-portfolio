export function Marquee({ items }) {
  const duplicated = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-line bg-white/[0.025] py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />
      <div className="flex w-max animate-marquee gap-3">
        {duplicated.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="rounded-full border border-line bg-white/[0.04] px-4 py-2 text-sm font-medium text-mist"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
