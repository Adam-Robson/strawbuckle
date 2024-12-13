import localFont from "next/font/local";

const fira = localFont({
  src: "./Fira_Code/FiraCode-VariableFont_wght.ttf",
  variable: "--fira-code",
  display: "swap",
});

const spaceGrotesk = localFont({
  src: "./Space_Grotesk/SpaceGrotesk-VariableFont_wght.ttf",
  variable: "--space-grotesk",
  display: "swap",
});

export { fira, spaceGrotesk };
