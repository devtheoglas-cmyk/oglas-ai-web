import Link from "next/link";

type BrandMarkProps = {
  tone?: "light" | "dark";
};

export function BrandMark({ tone = "light" }: BrandMarkProps) {
  const wordmarkColor = tone === "dark" ? "text-white" : "text-onyx";
  const descriptorColor = tone === "dark" ? "text-white/55" : "text-steel";

  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Oglas AI home">
      <span className="grid h-10 w-10 place-items-center rounded-lg bg-onyx">
        <span className="h-4 w-4 rounded-full border-[4px] border-champagne" />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`text-base font-semibold ${wordmarkColor}`}>Oglas AI</span>
        <span className={`mt-1 text-[11px] uppercase ${descriptorColor}`}>
          Custom Software + Practical AI
        </span>
      </span>
    </Link>
  );
}
