import localFont from "next/font/local";

const source = localFont({
  src: "./Source_Code_Pro/SourceCodePro-VariableFont_wght.ttf",
  variable: "--source-code-pro",
  display: "swap",
});

const spaceGrotesk = localFont({
  src: "./Space_Grotesk/SpaceGrotesk-VariableFont_wght.ttf",
  variable: "--space-grotesk",
  display: "swap",
});

export { source, spaceGrotesk };
