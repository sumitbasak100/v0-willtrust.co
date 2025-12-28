import { ArrowRight, Shield, Heart, GraduationCap, HomeIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ExamplesPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border bg-white sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-serif text-xl font-bold text-primary">WillTrust</span>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="/what-is-a-will"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                What is a Will?
              </Link>
              <Link
                href="/what-is-a-trust"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                What is a Trust?
              </Link>
              <Link
                href="/what-is-probate"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Probate
              </Link>
              <Link href="/examples" className="text-sm text-primary font-bold transition-colors">
                Examples
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/#faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                FAQs
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <Button size="sm" className="bg-primary text-white hover:bg-primary/90">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
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
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">
              Real-World Scenarios
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl font-normal text-[#1a1a1a] mb-4 text-balance">
              Trust and Will Examples
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Understanding the difference between a Trust and Will becomes clearer when considering real-life
              situations.
            </p>
          </div>
        </div>
      </section>

      {/* Examples Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Example 1 */}
          <div className="bg-background rounded-2xl p-8 md:p-10 shadow-sm border border-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-serif mb-3">Example 1: Probate Delays with a Will Alone</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Mr. Thompson had a modest estate including a home and several investment accounts. He relied solely on
                  a Will to distribute his assets to his two children. After his passing, the estate had to go through
                  probate, which lasted nearly a year. During this time, his children faced delays accessing funds
                  needed for living expenses and education.
                </p>
              </div>
            </div>
            <div className="md:pl-16">
              <div className="bg-white rounded-lg p-6 border border-primary/20">
                <p className="text-sm font-bold text-primary mb-2 uppercase tracking-wider">Key Takeaway:</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  This scenario demonstrates that while a Will fulfills the legal requirement of asset distribution, it
                  cannot prevent probate delays, which may cause financial and emotional stress for beneficiaries.
                </p>
              </div>
            </div>
          </div>

          {/* Example 2 */}
          <div className="bg-background rounded-2xl p-8 md:p-10 shadow-sm border border-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-serif mb-3">Example 2: Incapacity Planning with a Trust</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ms. Alvarez established a revocable living Trust and transferred her financial accounts and real
                  estate into it. She named herself as trustee and her daughter as successor trustee. When Ms. Alvarez
                  became incapacitated due to a medical condition, her daughter immediately assumed responsibility for
                  managing the Trust assets without court involvement.
                </p>
              </div>
            </div>
            <div className="md:pl-16">
              <div className="bg-white rounded-lg p-6 border border-primary/20">
                <p className="text-sm font-bold text-primary mb-2 uppercase tracking-wider">Key Takeaway:</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  This shows how a Trust not only distributes assets after death but also provides a seamless mechanism
                  for managing finances during incapacity—something a Will cannot do.
                </p>
              </div>
            </div>
          </div>

          {/* Example 3 */}
          <div className="bg-background rounded-2xl p-8 md:p-10 shadow-sm border border-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-serif mb-3">Example 3: Protecting Young Beneficiaries</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Mrs. Nguyen had a teenage son and wanted to ensure that her inheritance would be used responsibly. By
                  establishing a Trust, she could dictate that funds be used for education, healthcare, and living
                  expenses until her son reached a specified age. Had she relied solely on a Will, her son would have
                  received the entire inheritance outright, potentially putting the funds at risk.
                </p>
              </div>
            </div>
            <div className="md:pl-16">
              <div className="bg-white rounded-lg p-6 border border-primary/20">
                <p className="text-sm font-bold text-primary mb-2 uppercase tracking-wider">Key Takeaway:</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  This case emphasizes the enhanced control a Trust provides over asset distribution, allowing you to
                  protect younger heirs from their own financial inexperience.
                </p>
              </div>
            </div>
          </div>

          {/* Example 4 */}
          <div className="bg-background rounded-2xl p-8 md:p-10 shadow-sm border border-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <HomeIcon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-serif mb-3">Example 4: Avoiding Multi-State Probate</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Dr. Reynolds owned property in two different states. Initially, his estate plan consisted only of a
                  Will. After consultation with an estate planning attorney, he placed both properties into a Trust,
                  which allowed them to pass seamlessly to his beneficiaries without the need for probate in multiple
                  states.
                </p>
              </div>
            </div>
            <div className="md:pl-16">
              <div className="bg-white rounded-lg p-6 border border-primary/20">
                <p className="text-sm font-bold text-primary mb-2 uppercase tracking-wider">Key Takeaway:</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  This demonstrates how a Trust is particularly useful for clients with real estate or assets in more
                  than one jurisdiction, saving them from the cost of multiple probate court proceedings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-24 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl sm:text-5xl mb-8">Ready to Secure Your Legacy?</h2>
          <p className="text-xl text-primary-foreground/80 mb-12">
            The difference between a Trust and Will is not just a technicality—it profoundly impacts your family&apos;s
            future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-10 h-16 rounded-md">
              Start Your Estate Plan <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-10 h-16 rounded-md bg-transparent"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-footer text-footer-foreground pt-20 pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-6">
                <Shield className="h-8 w-8 text-accent" />
                <span className="font-serif text-2xl font-bold text-white">WillTrust</span>
              </Link>
              <p className="text-footer-foreground/60 leading-relaxed mb-6 text-sm">
                Helping families protect their legacy with comprehensive, compassion-led estate planning solutions.
              </p>
              <p className="text-xs">© 2025 WillTrust. All rights reserved.</p>
            </div>
            <div>
              <h3 className="text-white font-serif text-xl mb-6">Estate Planning</h3>
              <ul className="space-y-4 text-sm text-footer-foreground/60">
                <li>
                  <Link href="/what-is-a-will" className="hover:text-accent transition-colors">
                    What is a Will?
                  </Link>
                </li>
                <li>
                  <Link href="/what-is-a-trust" className="hover:text-accent transition-colors">
                    What is a Trust?
                  </Link>
                </li>
                <li>
                  <Link href="/what-is-probate" className="hover:text-accent transition-colors">
                    What is Probate?
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-serif text-xl mb-6">Resources</h3>
              <ul className="space-y-4 text-sm text-footer-foreground/60">
                <li>
                  <Link href="/examples" className="hover:text-accent transition-colors">
                    Real-World Examples
                  </Link>
                </li>
                <li>
                  <Link href="/#faq" className="hover:text-accent transition-colors">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-serif text-xl mb-6">Company</h3>
              <ul className="space-y-4 text-sm text-footer-foreground/60">
                <li>
                  <Link href="/about" className="hover:text-accent transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-accent transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
