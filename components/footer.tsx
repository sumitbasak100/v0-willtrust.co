import Link from "next/link"
import { Logo } from "@/components/logo"

export function Footer() {
  return (
    <footer className="bg-footer text-footer-foreground pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group cursor-pointer">
              <Logo className="text-white" />
            </Link>
            <p className="text-footer-foreground/60 leading-relaxed mb-6 text-sm">
              Helping families protect their legacy with comprehensive, compassion-led estate planning solutions.
            </p>
            <p className="text-xs">© 2025 Willtrust.co. All rights reserved.</p>
          </div>
          <div>
            <h3 className="text-white font-serif text-xl mb-6">Planning Guide</h3>
            <ul className="space-y-4 text-sm text-footer-foreground/60">
              <li>
                <Link href="/what-is-a-will" className="hover:text-accent transition-colors cursor-pointer">
                  What is a Will?
                </Link>
              </li>
              <li>
                <Link href="/what-is-a-trust" className="hover:text-accent transition-colors cursor-pointer">
                  What is a Trust?
                </Link>
              </li>
              <li>
                <Link href="/what-is-probate" className="hover:text-accent transition-colors cursor-pointer">
                  What is Probate?
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-serif text-xl mb-6">Resources</h3>
            <ul className="space-y-4 text-sm text-footer-foreground/60">
              <li>
                <Link href="/examples" className="hover:text-accent transition-colors cursor-pointer">
                  Real-World Examples
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-accent transition-colors cursor-pointer">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors cursor-pointer">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-serif text-xl mb-6">Company</h3>
            <ul className="space-y-4 text-sm text-footer-foreground/60">
              <li>
                <Link href="/about" className="hover:text-accent transition-colors cursor-pointer">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-accent transition-colors cursor-pointer">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-accent transition-colors cursor-pointer">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-xs text-footer-foreground/40 italic">
            Disclaimer: This information is for educational purposes only and does not constitute legal advice.
          </p>
        </div>
      </div>
    </footer>
  )
}
