import { Suspense } from "react";
import { IBackgroundProps } from "@/_types/background.types";
import Image from "next/image";
import "./background.css";

export default function Background({
  src,
  alt,
  height,
  width,
  overlay = "transparent",
  children,
}: IBackgroundProps) {
  return (
    <Suspense fallback={null}>
      <div className="background-container">
        <Image
          src={src}
          alt={alt}
          height={height}
          width={width}
          objectFit="cover"
        />
        {overlay && (
          <div
            className="background-overlay"
            style={{ backgroundColor: overlay }}
          />
        )}
        {children}
      </div>
    </Suspense>
  );
}
