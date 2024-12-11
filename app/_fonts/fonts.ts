import localFont from "next/font/local";

const ruda = localFont({
  src: "./Ruda/Ruda-VariableFont_wght.ttf",
  variable: "--font-ruda",
  display: "swap",
});

const specialElite = localFont({
  src: "./Special_Elite/SpecialElite-Regular.ttf",
  variable: "--font-special-elite",
  weight: "400",
  display: "swap",
});

export { ruda, specialElite };
