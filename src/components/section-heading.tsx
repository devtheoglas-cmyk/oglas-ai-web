type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  summary?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  summary,
  align = "left",
  tone = "light",
}: SectionHeadingProps) {
  const titleClass = tone === "dark" ? "text-white" : "text-onyx";
  const summaryClass = tone === "dark" ? "text-white/65" : "text-steel";
  const eyebrowClass = tone === "dark" ? "text-emerald-light" : "text-emerald";

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className={`mb-4 text-xs font-semibold uppercase ${eyebrowClass}`}>{eyebrow}</p>
      ) : null}
      <h2 className={`text-3xl font-semibold leading-tight md:text-5xl ${titleClass}`}>
        {title}
      </h2>
      {summary ? (
        <p className={`mt-5 text-base leading-8 md:text-lg ${summaryClass}`}>{summary}</p>
      ) : null}
    </div>
  );
}
