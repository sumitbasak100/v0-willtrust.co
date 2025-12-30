import type { Metadata } from "next"
import { HomeClient } from "@/components/home-client"

export const metadata: Metadata = {
  title: "Trust and Will: The Difference Between a Trust and Will | WillTrust",
  description:
    "Protect your assets and provide for your loved ones. Compare Wills and Trusts, learn about probate, and start your estate planning with our expert guides.",
  alternates: {
    canonical: "https://willtrust.vercel.app",
  },
}

export default function HomePage() {
  return <HomeClient />
}
