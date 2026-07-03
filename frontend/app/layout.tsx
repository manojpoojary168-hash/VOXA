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
  title: {
    default: "Voxa – AI Voice Studio",
    template: "%s | Voxa",
  },

  description:
    "Create studio-quality AI voiceovers in seconds. Choose from multiple expressive AI voices, preview them instantly, and generate natural speech with Voxa.",

  keywords: [
    "AI Voice",
    "Text to Speech",
    "Voice Generator",
    "AI Voice Studio",
    "Voiceover",
    "Speech Synthesis",
    "Kokoro",
    "Voxa",
  ],

  authors: [
    {
      name: "Manoj",
    },
  ],

  creator: "Manoj",

  publisher: "Voxa",

  applicationName: "Voxa",

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Voxa – AI Voice Studio",
    description:
      "Generate natural, expressive AI voiceovers in seconds using premium AI voices.",
    images: ["/og-image.png"],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Voxa – AI Voice Studio",
    description:
      "Generate natural AI voiceovers in seconds with Voxa.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black text-white">
        {children}
      </body>
    </html>
  );
}