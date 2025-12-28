import { Shield, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="font-serif text-xl font-bold text-primary">WillTrust</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/what-is-a-will" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Wills
            </Link>
            <Link href="/what-is-a-trust" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Trusts
            </Link>
            <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-primary">
              About
            </Link>
          </nav>
          <Button asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </header>

      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h1 className="font-serif text-5xl mb-6">Let&apos;s Start a Conversation</h1>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                Have questions about estate planning? Our team of specialists is here to help you navigate the process
                with clarity and compassion.
              </p>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-full h-fit">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl mb-1">Email Us</h3>
                    <p className="text-muted-foreground">info@willtrust.co</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-full h-fit">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl mb-1">Call Us</h3>
                    <p className="text-muted-foreground">1-800-WILL-TRUST</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-full h-fit">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl mb-1">Visit Us</h3>
                    <p className="text-muted-foreground">
                      123 Legacy Lane, Suite 100
                      <br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8 lg:p-12 shadow-2xl border-border">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input placeholder="Jane" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <Input type="email" placeholder="jane@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Inquiry Type</label>
                  <select className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                    <option>General Inquiry</option>
                    <option>Wills</option>
                    <option>Trusts</option>
                    <option>Probate Assistance</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea placeholder="How can we help you?" className="min-h-[150px]" />
                </div>
                <Button className="w-full h-12 bg-primary text-white text-lg">Send Message</Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-footer text-footer-foreground py-10">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="text-sm text-footer-foreground/60">© 2025 WillTrust. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
