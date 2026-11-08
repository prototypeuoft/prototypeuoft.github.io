import type { Metadata } from "next";
import { Instrument_Serif, VT323 } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const instrument = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument",
});
const vt323 = VT323({ weight: "400", subsets: ["latin"], variable: "--font-vt323" });

export const metadata: Metadata = {
  title: "Prototype · UTSC",
  description:
    "Prototype is a UTSC club for Product Research & Optimized Tech Organization.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${instrument.variable} ${vt323.variable}`}>
      <body className="font-serif">
        <Nav />
        {children}
      </body>
    </html>
  );
}