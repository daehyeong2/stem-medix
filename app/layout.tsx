import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const NotoKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "200", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    template: "%s - Stem Medix",
    default: "Stem Medix",
  },
  description:
    "Stem Medix는 줄기세포 치료제 개발, 줄기세포 맞춤형 배양배지 산업, 플랫폼 기술 제공을 기반으로 하는 회사입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(NotoKR.className)}>
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}
