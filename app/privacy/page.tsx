import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      {/* <CHANGE> Added hero section to match educational pages */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-primary inline-flex items-center gap-2 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
          <div className="mb-8">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">Legal</p>
            <h1 className="font-serif text-4xl sm:text-5xl font-normal text-foreground mb-4 text-balance">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              How we collect, use, and protect your personal information
            </p>
          </div>
        </div>
      </section>

      {/* <CHANGE> Updated content area to match educational pages styling */}
      <article className="py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-sm text-muted-foreground mb-8">Last updated: December 28, 2025</p>
            
            <p className="text-muted-foreground leading-relaxed mb-12">
              At WillTrust, we take your privacy seriously. This policy describes how we collect, use, and handle your
              information when you use our website and services.
            </p>

            <div className="mb-12">
              <h2 className="font-serif text-3xl font-normal text-foreground mb-6">Information Collection</h2>
              <p className="text-muted-foreground leading-relaxed">
                We collect information you provide directly to us, such as when you create an account, fill out a form,
                or communicate with us. This may include your name, email address, and any legal information you share
                for estate planning purposes.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-3xl font-normal text-foreground mb-6">Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement a variety of security measures to maintain the safety of your personal information. Your
                sensitive legal data is encrypted and stored in secure environments.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-3xl font-normal text-foreground mb-6">Third Parties</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell, trade, or otherwise transfer your personally identifiable information to outside
                parties without your consent, except as required by law.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-3xl font-normal text-foreground mb-6">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                You have the right to access, correct, or delete your personal information at any time. If you have any
                questions about our privacy practices, please contact us.
              </p>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
