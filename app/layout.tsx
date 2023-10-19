import { Header } from "@/components/Header/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer/Footer";
import SectionContainer from "@/components/SectionContainer/SectionContainer";

export const metadata: Metadata = {
  title: "Amar Doekhie",
  description: "Portfolio of Amar Doekhie",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white/90 text-black antialiased dark:bg-[#1B1B1B] dark:text-white transition-colors duration-200">
        <SectionContainer>
          <div className="flex h-screen flex-col justify-between font-sans">
            <Header />
            <main className="mb-auto">{children}</main>
            <Footer />
          </div>
        </SectionContainer>
      </body>
    </html>
  );
}
