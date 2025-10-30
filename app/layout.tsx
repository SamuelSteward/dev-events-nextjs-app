import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono } from "next/font/google";
import "./globals.css";
import LightRays from '@/components/LightRays';
import Navbar from "@/components/Navbar";

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevEvents",
  description: "The Hub for Every Dev Event",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${schibstedGrotesk.variable} ${martianMono.variable} min-h-screen antialiased`}
      >
        <Navbar/>
        <div className="absolute z-[-1] top-0 inset-0 min-h-screen">
          <LightRays
            raysOrigin="top-center-offset"
            raysColor="#4ca3dd"
            raysSpeed={0.5}
            lightSpread={0.5}
            rayLength={1.9}
            followMouse={true}
            mouseInfluence={0.3}
            noiseAmount={0}
            distortion={0.01}
            className="custom-rays"
          />
        </div>
        
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
