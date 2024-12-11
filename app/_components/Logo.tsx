import React from "react";
import Image from "next/image";
import { ILogoProps } from "../_types/logo.types";
import "./logo.css";

export default function Logo({ src, alt, height, width }: ILogoProps) {
  return (
    <div className="logo-container">
      <Image src={src} alt={alt} height={height} width={width} />
    </div>
  );
}
