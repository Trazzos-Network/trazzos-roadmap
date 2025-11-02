import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Trazzos - Estrategia de Implementación",
  description: "Blockchain + IA para Mantenimiento Predictivo Industrial",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="es" className="dark">
      <body
        suppressHydrationWarning
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}
      >
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
