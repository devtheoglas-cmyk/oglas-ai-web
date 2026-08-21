"use client";

import type { CSSProperties, DragEvent, MouseEvent } from "react";

type BgImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fill?: boolean;
  style?: CSSProperties;
};

const preventDefault = (e: MouseEvent | DragEvent) => e.preventDefault();

export function BgImage({
  src,
  alt,
  width,
  height,
  className,
  fill,
  style,
}: BgImageProps) {
  const computed: CSSProperties = {
    backgroundImage: `url("${src.replace(/"/g, '\\"')}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    userSelect: "none",
    WebkitUserSelect: "none",
    ...(fill
      ? { position: "absolute", inset: 0 }
      : width && height
        ? { aspectRatio: `${width} / ${height}` }
        : null),
    ...style,
  };

  return (
    <div
      role="img"
      aria-label={alt}
      className={className}
      style={computed}
      onContextMenu={preventDefault}
      onDragStart={preventDefault}
    />
  );
}
