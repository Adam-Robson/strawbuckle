import localFont from "next/font/local";

const sofia = localFont({
  src: "./Sofia_Sans_Semi_Condensed/SofiaSansSemiCondensed-VariableFont_wght.ttf",
  variable: "--font-sofia",
});

const sofia_italic = localFont({
  src: "./Sofia_Sans_Semi_Condensed/SofiaSansSemiCondensed-Italic-VariableFont_wght.ttf",
  variable: "--font-sofia-italic",
});

const specialElite = localFont({
  src: "./Special_Elite/SpecialElite-Regular.ttf",
  variable: "--font-special-elite",
});

export { sofia, sofia_italic, specialElite };
