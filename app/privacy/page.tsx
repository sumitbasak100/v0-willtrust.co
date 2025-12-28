import { Shield } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="font-serif text-xl font-bold text-primary">WillTrust</span>
          </Link>
          <Button variant="ghost" asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </header>
      <div className="mx-auto max-w-3xl px-4 py-16 lg:py-24">
        <h1 className="font-serif text-4xl mb-8">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none text-muted-foreground space-y-6">
          <p>Last updated: December 28, 2025</p>
          <p>
            At WillTrust, we take your privacy seriously. This policy describes how we collect, use, and handle your
            information when you use our website and services.
          </p>
          <h2 className="text-foreground font-serif text-2xl mt-8">Information Collection</h2>
          <p>
            We collect information you provide directly to us, such as when you create an account, fill out a form, or
            communicate with us. This may include your name, email address, and any legal information you share for
            estate planning purposes.
          </p>
          <h2 className="text-foreground font-serif text-2xl mt-8">Security</h2>
          <p>
            We implement a variety of security measures to maintain the safety of your personal information. Your
            sensitive legal data is encrypted and stored in secure environments.
          </p>
          <h2 className="text-foreground font-serif text-2xl mt-8">Third Parties</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties
            without your consent, except as required by law.
          </p>
        </div>
      </div>
    </main>
  )
}
