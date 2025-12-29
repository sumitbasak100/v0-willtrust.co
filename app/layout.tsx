import type React from "react"
import type { Metadata } from "next"
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
  title: "WillTrust | Professional Estate Planning Solutions",
  description: "Secure your legacy with clarity and compassion. Expert guidance on Wills, Trusts, and Probate.",
  keywords: ["estate planning", "will", "trust", "probate", "living trust", "estate attorney", "inheritance planning"],
  authors: [{ name: "WillTrust" }],
  generator: "v0.app",
  openGraph: {
    title: "WillTrust | Professional Estate Planning Solutions",
    description: "Secure your legacy with clarity and compassion. Expert guidance on Wills, Trusts, and Probate.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "WillTrust | Professional Estate Planning Solutions",
    description: "Secure your legacy with clarity and compassion. Expert guidance on Wills, Trusts, and Probate.",
  },
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
