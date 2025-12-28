import { ArrowRight, Shield, CheckCircle2, FileText, Users, Clock, Eye, Heart, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      {/* Standardized hero heading size and corrected branding */}
      <section className="bg-background py-16 lg:py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <div className="mb-6 inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary uppercase tracking-widest">
                Estate Planning Made Simple
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-foreground leading-[1.1] mb-8">
                Trust and Will: Understanding the Key Differences
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl">
                Protect your assets, provide for your loved ones, and ensure your wishes are carried out effectively
                with proper estate planning guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
                  Start Planning Today <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/5 bg-transparent"
                >
                  Learn More
                </Button>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Free consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Expert guidance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Secure & confidential</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative h-[400px] lg:h-[550px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/warm-family-gathering-dinner-table.jpg"
                alt="Happy family sharing a meal"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Trusted by</p>
                  <p className="text-lg font-serif font-bold text-primary">100,000+ families</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Will Column */}
            <div id="will" className="space-y-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Foundation of Planning</p>
                <h2 className="font-serif text-4xl sm:text-5xl mb-6">What Is a Will?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A Will, formally called a Last Will and Testament, is an ambulatory legal document that states how a
                  person&apos;s assets should be distributed after their death. It provides clarity and legal authority
                  for families.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <Card className="p-5 border-border shadow-none hover:border-primary transition-colors">
                  <FileText className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-serif font-bold mb-1">Asset Distribution</h3>
                  <p className="text-xs text-muted-foreground">Clearly states how your assets should be shared.</p>
                </Card>
                <Card className="p-5 border-border shadow-none hover:border-primary transition-colors">
                  <Users className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-serif font-bold mb-1">Guardian Designation</h3>
                  <p className="text-xs text-muted-foreground">Name guardians for minor children or dependents.</p>
                </Card>
                <Card className="p-5 border-border shadow-none hover:border-primary transition-colors">
                  <Shield className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-serif font-bold mb-1">Executor Appointment</h3>
                  <p className="text-xs text-muted-foreground">Designate a person to manage your final estate.</p>
                </Card>
                <Card className="p-5 border-border shadow-none hover:border-primary transition-colors">
                  <Clock className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-serif font-bold mb-1">Probate Process</h3>
                  <p className="text-xs text-muted-foreground">Goes through court-supervised validation after death.</p>
                </Card>
              </div>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5 bg-transparent"
                asChild
              >
                <Link href="/what-is-a-will">Learn more about Wills</Link>
              </Button>
            </div>

            {/* Trust Column */}
            <div id="trust" className="space-y-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Advanced Protection</p>
                <h2 className="font-serif text-4xl sm:text-5xl mb-6">What Is a Trust?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A Trust is a legal arrangement where assets are placed under the control of a trustee for the benefit
                  of beneficiaries. It can take effect during your lifetime and avoid probate.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <Card className="p-5 border-border shadow-none hover:border-accent transition-colors">
                  <Clock className="h-8 w-8 text-accent mb-3" />
                  <h3 className="font-serif font-bold mb-1">Avoids Probate</h3>
                  <p className="text-xs text-muted-foreground">
                    Assets transfer directly to beneficiaries without court.
                  </p>
                </Card>
                <Card className="p-5 border-border shadow-none hover:border-accent transition-colors">
                  <Eye className="h-8 w-8 text-accent mb-3" />
                  <h3 className="font-serif font-bold mb-1">Privacy Protection</h3>
                  <p className="text-xs text-muted-foreground">
                    Remains private and doesn&apos;t become part of public record.
                  </p>
                </Card>
                <Card className="p-5 border-border shadow-none hover:border-accent transition-colors">
                  <Heart className="h-8 w-8 text-accent mb-3" />
                  <h3 className="font-serif font-bold mb-1">Incapacity Planning</h3>
                  <p className="text-xs text-muted-foreground">
                    Manage affairs immediately if you become unable to do so.
                  </p>
                </Card>
                <Card className="p-5 border-border shadow-none hover:border-accent transition-colors">
                  <Lock className="h-8 w-8 text-accent mb-3" />
                  <h3 className="font-serif font-bold mb-1">Asset Control</h3>
                  <p className="text-xs text-muted-foreground">
                    Specify how and when beneficiaries receive inheritance.
                  </p>
                </Card>
              </div>
              <Button variant="outline" className="border-accent text-accent hover:bg-accent/5 bg-transparent" asChild>
                <Link href="/what-is-a-trust">Read our guide on Trusts</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-muted mb-4">Side by Side</p>
            <h2 className="font-serif text-3xl sm:text-4xl mb-4">Trust vs. Will: Key Differences</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Understanding these differences helps you make informed decisions about your estate planning strategy.
            </p>
          </div>
          <Card className="overflow-hidden border-border shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-6 py-4 font-serif text-lg">Feature</th>
                    <th className="px-6 py-4 font-serif text-lg text-center">Will</th>
                    <th className="px-6 py-4 font-serif text-lg text-center">Trust</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { f: "When it takes effect", w: "Only after death", t: "During lifetime & after death" },
                    { f: "Probate required", w: "✓", t: "✗" },
                    { f: "Privacy", w: "Public record", t: "Private" },
                    { f: "Incapacity protection", w: "✗", t: "✓" },
                    { f: "Asset distribution control", w: "Immediate, outright", t: "Gradual, conditional" },
                    { f: "Names guardians for children", w: "✓", t: "✗" },
                    { f: "Avoids probate costs", w: "✗", t: "✓" },
                    { f: "Time to distribute assets", w: "Months to years", t: "Weeks to months" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-white/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-foreground">{row.f}</td>
                      <td className="px-6 py-4 text-center text-muted-foreground">{row.w}</td>
                      <td className="px-6 py-4 text-center text-muted-foreground">{row.t}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
          <div className="mt-10 text-center">
            <Button variant="link" className="text-primary font-bold" asChild>
              <Link href="/examples">View real-life examples →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Checklist Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-muted mb-4">Executor Roadmap</p>
            <h2 className="font-serif text-4xl mb-4">Estate Planning Checklist</h2>
            <p className="text-muted-foreground">
              Follow these essential steps from our legal guide to ensure your legacy is secure.
            </p>
          </div>
          <Card className="p-8 lg:p-12 bg-background border-border shadow-sm">
            <div className="space-y-8">
              {[
                "Inventory your assets: Identify real estate, bank accounts, and digital assets.",
                "Choose your roles: Name a trusted Executor and a Successor Trustee.",
                "Designate guardians: Essential for families with minor children.",
                "Coordinate with beneficiaries: Ensure your Will and Trust work in harmony.",
                "Update titles: Transfer property into your Living Trust (funding).",
                "Periodic Review: Update your plan after major life events (marriage, birth, divorce).",
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </div>
                  <p className="text-foreground leading-relaxed text-lg">{step}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-background">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-muted mb-4">Common Questions</p>
            <h2 className="font-serif text-4xl mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Get answers to the most common questions about Trusts and Wills.</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: "What is the difference between a Trust and a Will?",
                a: "A Trust is a legal arrangement that manages assets during and after your life, avoiding probate. A Will only takes effect after death and typically requires probate court oversight.",
              },
              {
                q: "Do I need both a Trust and a Will?",
                a: "Many people use both. A 'Pour-Over Will' acts as a backup to catch any assets not placed in your Trust, while also allowing you to name guardians for minor children.",
              },
              {
                q: "Which is better: a Will or a Trust?",
                a: "There's no one-size-fits-all answer. Wills are often simpler for straightforward estates, while Trusts offer more control, privacy, and probate avoidance for complex situations.",
              },
              {
                q: "What happens if I die without a Will or Trust?",
                a: "Your estate will be subject to state 'intestacy' laws. The court will determine distribution according to bloodline formulas, which may not align with your actual wishes.",
              },
              {
                q: "How long does a Trust take to settle?",
                a: "Unlike probate which can take months or years, Trust assets can often be distributed in weeks since no court intervention is required.",
              },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-white px-6 rounded-lg border-border">
                <AccordionTrigger className="text-left font-serif text-lg py-6 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-12 text-center">
            <Button variant="outline" className="border-primary text-primary bg-transparent" asChild>
              <Link href="/faq">View all FAQs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/10 -skew-x-12 transform translate-x-1/2" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl mb-8 leading-tight">
            Ready to Secure Your Legacy?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-12 leading-relaxed">
            The difference between a Trust and Will is not just a technicality—it profoundly impacts your family&apos;s
            future. Take the first step today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg px-10 h-16 rounded-md shadow-2xl"
            >
              Start Your Estate Plan <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-lg px-10 h-16 rounded-md bg-transparent"
            >
              Schedule Consultation
            </Button>
          </div>
          <div className="mt-16 flex flex-wrap justify-center gap-10 text-primary-foreground/60">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span>Free Initial Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              <span>Attorney Reviewed Documents</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="h-5 w-5" />
              <span>100% Secure & Private</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
