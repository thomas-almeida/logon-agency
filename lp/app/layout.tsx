import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agência Logon - Ideias Que Conectam",
  description: "Somos a Logon, uma agência que une estratégia, design e tecnologia para dar voz à sua marca",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Agência Logon - Ideias Que Conectam",
    description: "Somos a Logon, uma agência que une estratégia, design e tecnologia para dar voz à sua marca",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Agência Logon Logo",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
      >
        {children}
      </body>
    </html>
  );
}
