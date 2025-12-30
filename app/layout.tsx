import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Playfair_Display } from "next/font/google"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://willtrust.vercel.app"),
  title: {
    default: "Trust and Will: The Difference Between a Trust and Will | WillTrust",
    template: "%s | WillTrust",
  },
  description:
    "Understand the key differences between Trusts and Wills. Expert estate planning guidance on living trusts, last wills, probate avoidance, and protecting your legacy for your loved ones.",
  keywords: [
    "trust vs will",
    "difference between trust and will",
    "estate planning",
    "living trust",
    "last will and testament",
    "probate",
    "revocable trust",
    "avoid probate",
    "estate attorney",
    "inheritance planning",
    "trust fund",
    "will and testament",
    "estate administration",
  ],
  authors: [{ name: "WillTrust" }],
  creator: "WillTrust",
  publisher: "WillTrust",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://willtrust.vercel.app",
    siteName: "WillTrust",
    title: "Trust and Will: The Difference Between a Trust and Will",
    description:
      "Expert estate planning guidance on living trusts, last wills, probate avoidance, and protecting your legacy for your loved ones.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WillTrust - Estate Planning Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trust and Will: The Difference Between a Trust and Will",
    description:
      "Expert estate planning guidance on living trusts, last wills, probate avoidance, and protecting your legacy.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geist.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
