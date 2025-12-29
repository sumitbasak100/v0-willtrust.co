import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function TermsPage() {
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
              Terms & Conditions
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Please read these terms carefully before using our services
            </p>
          </div>
        </div>
      </section>

      {/* <CHANGE> Updated content area to match educational pages styling */}
      <article className="py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-12">
              Welcome to Willtrust.co. By accessing our website, you agree to these terms.
            </p>

            <div className="mb-12">
              <h2 className="font-serif text-3xl font-normal text-foreground mb-6">Educational Purposes Only</h2>
              <p className="text-muted-foreground leading-relaxed">
                The content provided on this website is for educational and informational purposes only. It does not
                constitute legal, financial, or tax advice. Use of our platform does not create an attorney-client
                relationship.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-3xl font-normal text-foreground mb-6">User Responsibility</h2>
              <p className="text-muted-foreground leading-relaxed">
                You are responsible for ensuring that any information you provide is accurate and complete. Estate
                planning documents require careful consideration of individual circumstances.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-3xl font-normal text-foreground mb-6">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                WillTrust shall not be liable for any damages arising out of or in connection with the use of our
                website or services. We strongly recommend consulting with a qualified attorney for personalized legal
                advice.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-3xl font-normal text-foreground mb-6">Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these terms at any time. Continued use of our website after changes
                constitutes acceptance of the modified terms.
              </p>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
