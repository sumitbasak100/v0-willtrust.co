import { ArrowRight, Shield, FileText, Users, Clock, CheckCircle2, Scale, Baby } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function WhatIsAWillPage() {
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
              <Link href="/what-is-a-will" className="text-sm text-primary font-bold transition-colors">
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
              <Link href="/examples" className="text-sm text-muted-foreground hover:text-primary transition-colors">
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
              Estate Planning Guide
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl font-normal text-[#1a1a1a] mb-4 text-balance">
              What is a Will?
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A comprehensive guide to understanding Last Will and Testament in the United States
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-8">
              In the United States, a <strong>Will</strong>—formally known as a <strong>Last Will and Testament</strong>
              —is a foundational legal document that serves as the blueprint for your final legacy. While it is often
              associated with the wealthy or the elderly, it is actually one of the most vital tools for any adult,
              regardless of their net worth.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-12">
              A will ensures that your assets are distributed according to your wishes, your minor children are cared
              for by people you trust, and your estate is settled with minimal conflict. Without one, the state takes
              the reins, applying a "one-size-fits-all" formula to your life&apos;s work.
            </p>

            {/* Section 1 */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-normal text-[#1a1a1a] mb-6">1. What Exactly is a Will?</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At its core, a will is a written declaration of how you want your property (your <strong>estate</strong>
                ) to be handled after you pass away. It is "ambulatory," meaning it has no legal effect until the moment
                of death and can be changed or revoked at any time while the creator (the <strong>testator</strong>) is
                still alive and mentally competent.
              </p>

              <Card className="p-6 border-border bg-background mb-6">
                <h3 className="font-serif text-xl font-medium text-[#1a1a1a] mb-4">Key Terminology</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    <strong className="text-[#1a1a1a]">Testator:</strong> The person who makes the will.
                  </p>
                  <p>
                    <strong className="text-[#1a1a1a]">Beneficiaries:</strong> The people, charities, or organizations
                    that receive assets.
                  </p>
                  <p>
                    <strong className="text-[#1a1a1a]">Executor (or Personal Representative):</strong> The person you
                    appoint to carry out the instructions in the will.
                  </p>
                  <p>
                    <strong className="text-[#1a1a1a]">Probate:</strong> The court-supervised process of authenticating
                    the will and distributing assets.
                  </p>
                  <p>
                    <strong className="text-[#1a1a1a]">Intestate:</strong> The status of a person who dies without a
                    valid will.
                  </p>
                </div>
              </Card>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-normal text-[#1a1a1a] mb-6">2. The Core Components of a Will</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                A comprehensive will does more than just give away money. In the US, it typically addresses four major
                areas:
              </p>

              <div className="grid gap-6 md:grid-cols-2 mb-8">
                <Card className="p-6 border-border hover:shadow-md transition-shadow">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-background mb-4">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#1a1a1a] mb-3">Asset Distribution</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    You can make specific bequests or general bequests. Anything not specifically mentioned falls into
                    the residuary estate.
                  </p>
                </Card>

                <Card className="p-6 border-border hover:shadow-md transition-shadow">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-background mb-4">
                    <Baby className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#1a1a1a] mb-3">Guardianship for Minors</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    For parents, this is arguably the most important section. Nominate a legal guardian to raise your
                    children if both parents are gone.
                  </p>
                </Card>

                <Card className="p-6 border-border hover:shadow-md transition-shadow">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-background mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#1a1a1a] mb-3">Appointment of an Executor</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The executor is responsible for filing the will, notifying creditors, paying debts/taxes, and
                    distributing remaining assets.
                  </p>
                </Card>

                <Card className="p-6 border-border hover:shadow-md transition-shadow">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-background mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#1a1a1a] mb-3">Digital Assets & Final Wishes</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Modern wills include provisions for digital assets and instructions for funeral arrangements or
                    organ donation.
                  </p>
                </Card>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-normal text-[#1a1a1a] mb-6">
                3. Legal Requirements: How to Make it Valid
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Wills are governed by <strong>state law</strong>, not federal law. However, most states require the
                following "formal execution" steps:
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    number: "1",
                    title: "Capacity",
                    desc: "The testator must be at least 18 years old and of 'sound mind.'",
                  },
                  {
                    number: "2",
                    title: "Written Form",
                    desc: "The vast majority require a physical or typed document.",
                  },
                  {
                    number: "3",
                    title: "Signature",
                    desc: "The testator must sign the will, usually at the very end.",
                  },
                  {
                    number: "4",
                    title: "Witnesses",
                    desc: "Most states require at least two 'disinterested' witnesses.",
                  },
                  {
                    number: "5",
                    title: "Notarization",
                    desc: "Optional but recommended. A Self-Proving Affidavit can speed up probate.",
                  },
                ].map((item) => (
                  <div key={item.number} className="flex gap-4 p-4 bg-background rounded-lg">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-medium text-sm">
                      {item.number}
                    </div>
                    <div>
                      <h4 className="font-medium text-[#1a1a1a] mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 4 - Types of Wills */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-normal text-[#1a1a1a] mb-6">4. Types of Wills in the US</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Depending on your family structure and the complexity of your finances, you might choose one of several
                types:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="text-left p-4 font-serif font-medium">Type of Will</th>
                      <th className="text-left p-4 font-serif font-medium">Description</th>
                      <th className="text-left p-4 font-serif font-medium">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        type: "Simple Will",
                        desc: "A basic document outlining asset distribution and guardians.",
                        best: "Individuals with straightforward estates.",
                      },
                      {
                        type: "Testamentary Trust Will",
                        desc: "Creates a trust that triggers after death.",
                        best: "Parents of young children or those with 'spendthrift' heirs.",
                      },
                      {
                        type: "Joint/Mirror Will",
                        desc: "Two separate but identical wills for couples.",
                        best: "Married couples with shared goals.",
                      },
                      {
                        type: "Holographic Will",
                        desc: "A handwritten and signed will that has no witnesses.",
                        best: "Accepted in only about half of US states; prone to legal challenges.",
                      },
                      {
                        type: "Pour-Over Will",
                        desc: "Used alongside a Living Trust to 'catch' assets.",
                        best: "People using a Trust-based estate plan.",
                      },
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-background" : "bg-white"}>
                        <td className="p-4 border-b border-border font-medium text-[#1a1a1a]">{row.type}</td>
                        <td className="p-4 border-b border-border text-muted-foreground text-sm">{row.desc}</td>
                        <td className="p-4 border-b border-border text-muted-foreground text-sm">{row.best}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 5 - Intestacy */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-normal text-[#1a1a1a] mb-6">
                5. What Happens If You Don&apos;t Have a Will? (Intestacy)
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                If you die without a will, you are said to have died <strong>intestate</strong>. In this scenario, the
                probate court follows your state&apos;s <strong>Intestacy Succession Laws</strong>.
              </p>

              <Card className="p-6 border-[#d4a72c] bg-[#fffef8] mb-6">
                <h3 className="font-serif text-xl font-medium text-[#1a1a1a] mb-4">
                  What Intestacy Laws Don&apos;t Account For:
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-[#d4a72c]">•</span>
                    <span>
                      <strong>Unmarried partners:</strong> No matter how long you lived together, an unmarried partner
                      usually inherits nothing.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#d4a72c]">•</span>
                    <span>
                      <strong>Friends or Charities:</strong> The state will never give your money to a friend or a
                      cause.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#d4a72c]">•</span>
                    <span>
                      <strong>Stepchildren:</strong> Unless they were legally adopted, stepchildren are often excluded.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#d4a72c]">•</span>
                    <span>
                      <strong>Specific Items:</strong> The state might order your family home or heirlooms to be sold.
                    </span>
                  </li>
                </ul>
              </Card>
            </div>

            {/* Section 6 - Probate Process */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-normal text-[#1a1a1a] mb-6">
                6. The Probate Process: A Brief Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every will (unless it is a very small estate) must go through <strong>Probate</strong>. This is the
                legal "proving" of the will.
              </p>

              <Card className="p-6 border-border bg-white mb-6">
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">The process typically involves:</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Filing the petition with the court</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Notifying heirs and creditors</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Appraising assets and paying off debts</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Final distribution to beneficiaries</span>
                  </li>
                </ul>
              </Card>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Many people fear probate because it is a <strong>public record</strong> and can take anywhere from six
                months to two years to complete.
              </p>

              <div className="bg-background p-6 rounded-lg">
                <p className="text-sm text-muted-foreground mb-3">
                  <strong className="text-[#1a1a1a]">Learn More:</strong>
                </p>
                <Link
                  href="/what-is-probate"
                  className="text-primary hover:text-primary/90 font-medium inline-flex items-center gap-2"
                >
                  Read this article to understand the Probate process in detail
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Section 7 - Will vs Trust */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-normal text-[#1a1a1a] mb-6">
                7. Will vs. Trust: Which Do You Need?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A common misconception is that a will and a trust are the same. They are both estate planning tools, but
                they work differently:
              </p>

              <div className="grid gap-6 md:grid-cols-2 mb-6">
                <Card className="p-6 border-border bg-white">
                  <h3 className="font-serif text-lg font-medium text-[#1a1a1a] mb-3">A Will</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>Simple and inexpensive to create</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#d4a72c]">✗</span>
                      <span>Must go through probate (public and slow)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#2d5f4e]">•</span>
                      <span>Only takes effect after death</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 border-border bg-white">
                  <h3 className="font-serif text-lg font-medium text-[#1a1a1a] mb-3">A Living Trust</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-[#d4a72c]">✗</span>
                      <span>More complex and expensive to set up</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>Avoids probate (private and fast)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>Takes effect immediately</span>
                    </li>
                  </ul>
                </Card>
              </div>

              <div className="bg-background p-6 rounded-lg">
                <p className="text-sm text-muted-foreground mb-3">
                  <strong className="text-[#1a1a1a]">Recommendation:</strong> Most experts recommend a Will as the
                  absolute bare minimum for every adult, while a Trust is an "upgrade" for those looking for privacy,
                  probate avoidance, or management of out-of-state property.
                </p>
                <Link
                  href="/"
                  className="text-primary hover:text-primary/90 font-medium inline-flex items-center gap-2"
                >
                  The role of Trust and Will are explained in detail in this article
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Section 8 - Common Pitfalls */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-normal text-[#1a1a1a] mb-6">8. Common Pitfalls to Avoid</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Even with a will, things can go wrong. Avoid these common mistakes:
              </p>

              <div className="space-y-4">
                <Card className="p-6 border-l-4 border-l-[#d4a72c] bg-[#fffef8]">
                  <h4 className="font-medium text-[#1a1a1a] mb-2">Forgetting Beneficiary Designations</h4>
                  <p className="text-sm text-muted-foreground">
                    Life insurance, 401(k)s, and "Transfer on Death" (TOD) bank accounts bypass the will entirely.
                  </p>
                </Card>

                <Card className="p-6 border-l-4 border-l-[#d4a72c] bg-[#fffef8]">
                  <h4 className="font-medium text-[#1a1a1a] mb-2">Not Updating After Life Events</h4>
                  <p className="text-sm text-muted-foreground">
                    Divorce, marriage, the birth of a child, or moving to a new state are all reasons to review and
                    update your will.
                  </p>
                </Card>

                <Card className="p-6 border-l-4 border-l-[#d4a72c] bg-[#fffef8]">
                  <h4 className="font-medium text-[#1a1a1a] mb-2">Poor Storage</h4>
                  <p className="text-sm text-muted-foreground">
                    Store it in a fireproof safe or with your attorney, and make sure your executor knows where it is.
                  </p>
                </Card>
              </div>
            </div>

            {/* Conclusion */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-normal text-[#1a1a1a] mb-6">Conclusion</h2>
              <p className="text-muted-foreground leading-relaxed">
                A will is your final voice. It provides clarity in a time of grief, protects your children&apos;s
                future, and ensures that your hard-earned assets go to the people and causes you care about most.
                Whether you use a template or hire a specialized estate attorney, the most important step is simply to{" "}
                <strong>get it done</strong>.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 bg-primary rounded-2xl p-8 text-center">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-white mb-4">Ready to Create Your Will?</h2>
            <p className="text-[#c4dcd3] mb-6 max-w-2xl mx-auto">
              Take the first step toward comprehensive estate planning today. Protect your family&apos;s future with a
              legally sound will.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-background">
                Start Your Estate Plan
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-primary/90 bg-transparent"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-16">
            <h2 className="font-serif text-2xl font-normal text-[#1a1a1a] mb-6">Related Articles</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Link href="/what-is-a-trust" className="group">
                <Card className="p-6 border-border hover:shadow-lg transition-all h-full">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-background mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#1a1a1a] mb-2 group-hover:text-primary">
                    What is a Trust?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Learn about trusts and how they can protect your assets and avoid probate.
                  </p>
                  <span className="text-sm text-primary font-medium inline-flex items-center gap-1">
                    Read More <ArrowRight className="h-4 w-4" />
                  </span>
                </Card>
              </Link>

              <Link href="/what-is-probate" className="group">
                <Card className="p-6 border-border hover:shadow-lg transition-all h-full">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-background mb-4">
                    <Scale className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#1a1a1a] mb-2 group-hover:text-primary">
                    What is Probate?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Understand the probate process and learn how to avoid its costs and delays.
                  </p>
                  <span className="text-sm text-primary font-medium inline-flex items-center gap-1">
                    Read More <ArrowRight className="h-4 w-4" />
                  </span>
                </Card>
              </Link>

              <Link href="/" className="group">
                <Card className="p-6 border-border hover:shadow-lg transition-all h-full">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-background mb-4">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#1a1a1a] mb-2 group-hover:text-primary">
                    Trust vs Will
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Compare the key differences between trusts and wills to find the right solution.
                  </p>
                  <span className="text-sm text-primary font-medium inline-flex items-center gap-1">
                    Read More <ArrowRight className="h-4 w-4" />
                  </span>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-[#1e3d33] py-12 lg:py-16 text-[#c4dcd3]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-12">
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Shield className="h-5 w-5 text-[#d4a72c]" />
                <span className="font-serif text-lg font-medium text-white">WillTrust</span>
              </Link>
              <p className="text-sm leading-relaxed mb-4">
                Helping families protect their legacy with comprehensive estate planning solutions.
              </p>
              <p className="text-xs text-[#8a9e96]">© 2025 WillTrust. All rights reserved.</p>
            </div>

            <div>
              <h3 className="font-serif text-base font-medium text-white mb-4">Estate Planning</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/what-is-a-will" className="hover:text-white transition-colors">
                    What is a Will?
                  </Link>
                </li>
                <li>
                  <Link href="/what-is-a-trust" className="hover:text-white transition-colors">
                    What is a Trust?
                  </Link>
                </li>
                <li>
                  <Link href="/what-is-probate" className="hover:text-white transition-colors">
                    Probate
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-base font-medium text-white mb-4">Resources</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Estate Planning Guide
                  </Link>
                </li>
                <li>
                  <Link href="/#faq" className="hover:text-white transition-colors">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-base font-medium text-white mb-4">Company</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary pt-8 text-xs text-[#8a9e96] text-center">
            <p>This information is for educational purposes only and does not constitute legal advice.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
