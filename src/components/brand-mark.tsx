import Image from "next/image";
import Link from "next/link";

type BrandMarkProps = {
  tone?: "light" | "dark";
};

export function BrandMark({ tone: _tone = "light" }: BrandMarkProps) {
  void _tone;
  return (
    <Link
      href="/"
      className="inline-flex items-center"
      aria-label="Oglas AI home"
    >
      <Image
        src="/oglas-logo.png"
        alt="Oglas AI"
        width={746}
        height={289}
        priority
        className="h-10 w-auto rounded-md"
      />
    </Link>
  );
}
