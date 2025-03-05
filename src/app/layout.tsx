import type { Metadata } from "next";
import {
  Inter_Tight,
  Barlow_Condensed,
  Barlow_Semi_Condensed,
} from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/context/ModalContext";
import { APP_NAME, APP_DESCRIPTION, SERVER_URL } from "@/lib/constants";

const interTight = Inter_Tight({
  variable: "--interTight",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--barlowCondensed",
  subsets: ["latin"],
  weight: ["100", "400", "500", "600", "700", "800"],
});

const barlowSemiCondensed = Barlow_Semi_Condensed({
  variable: "--barlowSemiCondensed",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: {
    template: `%s | Thunder Trails`,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${interTight.variable} ${barlowCondensed.variable} ${barlowSemiCondensed.variable}`}
      >
        <ModalProvider>{children}</ModalProvider>
      </body>
    </html>
  );
}
