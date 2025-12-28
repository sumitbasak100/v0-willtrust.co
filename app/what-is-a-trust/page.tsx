import { ArrowRight, Shield, Lock, Users, Clock, CheckCircle2, Scale, TrendingUp, Heart, Banknote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function WhatIsATrustPage() {
  return (
    <main className="min-h-screen">
      <Header />
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
              What is a Trust?
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Understanding one of the most powerful and versatile financial tools in American estate planning
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-8">
              In the American legal system, a <strong>Trust</strong> is one of the most powerful and versatile financial
              tools available. While often stereotyped as a vehicle for "trust fund babies" or the ultra-wealthy, trusts
              are actually practical instruments used by millions of middle-class Americans to protect their families,
              avoid the costs of probate, and ensure their legacy is handled with precision.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-12">
              A trust is a fiduciary arrangement that allows a third party (the <strong>Trustee</strong>) to hold and
              manage assets on behalf of a beneficiary. Unlike a will, which only takes effect after death, a trust can
              be active during your lifetime and continue long after you are gone.
            </p>

            {/* Section 1 - The Three Key Roles */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-normal text-[#1a1a1a] mb-6">
                1. The Anatomy of a Trust: The Three Key Roles
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                To understand how a trust works, you must understand the three distinct roles defined in the document.
                In many cases, especially with "Living Trusts," one person may initially fill all three roles.
              </p>

              <div className="grid gap-6 md:grid-cols-3 mb-8">
                <Card className="p-6 border-border hover:shadow-md transition-shadow">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-background mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#1a1a1a] mb-3">The Grantor</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The person who creates the trust and provides the assets. The Grantor defines the rules of how the
                    trust will operate.
                  </p>
                </Card>

                <Card className="p-6 border-border hover:shadow-md transition-shadow">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-background mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#1a1a1a] mb-3">The Trustee</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The manager who has a fiduciary duty to manage the assets according to the Grantor&apos;s
                    instructions.
                  </p>
                </Card>

                <Card className="p-6 border-border hover:shadow-md transition-shadow">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-background mb-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#1a1a1a] mb-3">The Beneficiary</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The person (or group) for whom the trust was created. They have the right to enjoy the benefits of
                    the assets.
                  </p>
                </Card>
              </div>
            </div>

            {/* Section 2 - Revocable vs Irrevocable */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-normal text-[#1a1a1a] mb-6">
                2. Revocable vs. Irrevocable: The Great Divide
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Nearly every trust in the US falls into one of these two categories. Choosing between them is the most
                important decision a Grantor will make.
              </p>

              <div className="grid gap-6 md:grid-cols-2 mb-8">
                <Card className="p-6 border-primary border-2 bg-white">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary mb-4">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-[#1a1a1a] mb-4">Revocable Living Trusts (RLT)</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    This is the most common type of trust for individuals and families.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>
                        <strong>Flexibility:</strong> You can change the terms or dissolve it at any time
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>
                        <strong>Control:</strong> Usually, the Grantor is also the Trustee
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>
                        <strong>Primary Goal:</strong> Avoid probate
                      </span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 border-border bg-white">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-background mb-4">
                    <Lock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-[#1a1a1a] mb-4">Irrevocable Trusts</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Once signed, an irrevocable trust is "set in stone."
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>
                        <strong>Asset Protection:</strong> Shielded from your creditors
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>
                        <strong>Tax Benefits:</strong> Removed from your taxable estate
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>
                        <strong>Medicaid Planning:</strong> Preserve inheritance for children
                      </span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>

            {/* Section 3 - Specialized Types */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-normal text-[#1a1a1a] mb-6">3. Specialized Types of Trusts</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Beyond the basic categories, the US legal system allows for "niche" trusts designed to solve specific
                problems:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="text-left p-4 font-serif font-medium">Trust Type</th>
                      <th className="text-left p-4 font-serif font-medium">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        type: "Testamentary Trust",
                        purpose: "Created inside a Will. It only triggers after death and probate.",
                      },
                      {
                        type: "Special Needs Trust",
                        purpose:
                          "Provides for a disabled loved one without disqualifying them from government benefits like SSI or Medicaid.",
                      },
                      {
                        type: "Spendthrift Trust",
                        purpose:
                          "Prevents a beneficiary from selling their interest; protects money from poor spending habits or creditors.",
                      },
                      {
                        type: "Charitable Remainder Trust",
                        purpose: "Provides income to the Grantor for life, with remainder going to charity.",
                      },
                      {
                        type: "Crummey Trust",
                        purpose:
                          "Allows tax-free annual gifts to a trust while giving beneficiaries a short window to withdraw funds.",
                      },
                      {
                        type: "Generation-Skipping Trust",
                        purpose: "Passes assets to grandchildren to avoid a second round of estate taxes.",
                      },
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-background" : "bg-white"}>
                        <td className="p-4 border-b border-border font-medium text-[#1a1a1a]">{row.type}</td>
                        <td className="p-4 border-b border-border text-muted-foreground text-sm">{row.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 4 - Benefits */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-normal text-[#1a1a1a] mb-6">4. The Benefits of Having a Trust</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Why do people go through the expense of setting up a trust instead of just writing a simple will?
              </p>

              <div className="grid gap-6 md:grid-cols-2 mb-8">
                <Card className="p-6 border-border hover:shadow-md transition-shadow">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-background mb-4">
                    <Scale className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#1a1a1a] mb-3">Bypassing Probate Court</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A trust operates privately. Your heirs can often access funds within days, rather than waiting 6 to
                    18 months common in US probate courts.
                  </p>
                </Card>

                <Card className="p-6 border-border hover:shadow-md transition-shadow">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-background mb-4">
                    <Lock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#1a1a1a] mb-3">Privacy</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    When a Will is probated, it becomes a public record. A Trust is a private contract. Your neighbors
                    will never know the details of your estate.
                  </p>
                </Card>

                <Card className="p-6 border-border hover:shadow-md transition-shadow">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-background mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#1a1a1a] mb-3">Continuous Management</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    If you become incapacitated, a Successor Trustee can step in and manage your affairs without your
                    family going to court.
                  </p>
                </Card>

                <Card className="p-6 border-border hover:shadow-md transition-shadow">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-background mb-4">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#1a1a1a] mb-3">&quot;Dead Hand&quot; Control</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Instead of giving a 21-year-old a $500,000 inheritance all at once, you can stipulate they receive
                    it in stages or when they meet certain conditions.
                  </p>
                </Card>
              </div>
            </div>

            {/* Section 5 - Funding Process */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-normal text-[#1a1a1a] mb-6">
                5. The Funding Process: The Missing Step
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The biggest mistake Americans make is creating a trust but failing to <strong>"fund"</strong> it.
              </p>

              <Card className="p-6 border-l-4 border-l-primary bg-[#fffef8] mb-6">
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-[#1a1a1a]">Think of a trust like a safe.</strong> The lawyer builds the safe
                  and gives you the key (the trust document). However, if you don&apos;t put your jewelry and cash
                  inside the safe, the safe is useless.
                </p>
                <p className="text-sm font-medium text-[#1a1a1a] mb-2">Funding involves:</p>
                <ul className="space-y-2 text-sm text-muted-foreground mt-3">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Deeding your real estate to the trust</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Changing ownership of bank and brokerage accounts to the trust name</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Updating beneficiary designations on life insurance or retirement accounts</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 border-primary border-2 bg-white">
                <p className="text-sm font-medium text-[#1a1a1a] mb-2">⚠️ Important Warning</p>
                <p className="text-sm text-muted-foreground">
                  Assets left outside of the trust at the time of death may still have to go through probate.
                </p>
              </Card>
            </div>

            {/* Section 6 - Taxation */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-normal text-[#1a1a1a] mb-6">6. Taxation of Trusts</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">The IRS views trusts in two ways:</p>

              <div className="grid gap-6 md:grid-cols-2 mb-8">
                <Card className="p-6 border-border bg-white">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-background mb-4">
                    <Banknote className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#1a1a1a] mb-3">Grantor Trusts</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">Most Revocable Trusts</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    These are "ignored" for tax purposes. You report the income on your personal 1040 tax return using
                    your own Social Security number.
                  </p>
                </Card>

                <Card className="p-6 border-border bg-white">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-background mb-4">
                    <Banknote className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#1a1a1a] mb-3">Non-Grantor Trusts</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">Most Irrevocable Trusts</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    These are separate legal entities with their own Tax ID numbers. They file a Form 1041 and reach the
                    highest tax brackets at much lower income levels.
                  </p>
                </Card>
              </div>
            </div>

            {/* Section 7 - How to Create */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-normal text-[#1a1a1a] mb-6">7. How to Create a Trust</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                While there are DIY online forms, US trust law is governed by individual states. A mistake in the
                "boilerplate" language can lead to unintended tax consequences or a trust that is easily overturned in
                court.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    number: "1",
                    title: "Defining Goals",
                    desc: "Do you want to avoid probate, protect assets from creditors, or minimize taxes?",
                  },
                  {
                    number: "2",
                    title: "Choosing a Trustee",
                    desc: "Will it be a family member, a professional trust company, or a bank?",
                  },
                  {
                    number: "3",
                    title: "Drafting the Document",
                    desc: "Outlining the distribution rules and 'powers' of the trustee.",
                  },
                  {
                    number: "4",
                    title: "Formal Execution",
                    desc: "Signing in front of a notary (and often witnesses).",
                  },
                  { number: "5", title: "Funding", desc: "Transferring your assets into the trust's name." },
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

            {/* Comparison Table */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-normal text-[#1a1a1a] mb-6">
                Revocable vs. Irrevocable Trusts: Side-by-Side Comparison
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="text-left p-4 font-serif font-medium">Feature</th>
                      <th className="text-left p-4 font-serif font-medium">Revocable Living Trust</th>
                      <th className="text-left p-4 font-serif font-medium">Irrevocable Trust</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        feature: "Flexibility",
                        revocable: "High. Can change or dissolve anytime.",
                        irrevocable: "Low. Generally permanent.",
                      },
                      {
                        feature: "Control",
                        revocable: "Total. Grantor usually acts as Trustee.",
                        irrevocable: "Relinquished. Independent Trustee required.",
                      },
                      {
                        feature: "Probate Avoidance",
                        revocable: "Yes. Assets pass directly to heirs.",
                        irrevocable: "Yes. Assets outside personal estate.",
                      },
                      {
                        feature: "Asset Protection",
                        revocable: "None. Reachable by creditors.",
                        irrevocable: "Strong. Generally shielded from creditors.",
                      },
                      {
                        feature: "Estate Taxes",
                        revocable: "None. Assets included in taxable estate.",
                        irrevocable: "Yes. Assets removed from estate.",
                      },
                      {
                        feature: "Income Taxes",
                        revocable: "Grantor-based. Reported on personal 1040.",
                        irrevocable: "Trust-based. Files own return (Form 1041).",
                      },
                      {
                        feature: "Medicaid Eligibility",
                        revocable: "Countable. Assets prevent qualifying.",
                        irrevocable: "Exempt if set up correctly.",
                      },
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-background" : "bg-white"}>
                        <td className="p-4 border-b border-border font-medium text-[#1a1a1a]">{row.feature}</td>
                        <td className="p-4 border-b border-border text-muted-foreground text-sm">{row.revocable}</td>
                        <td className="p-4 border-b border-border text-muted-foreground text-sm">{row.irrevocable}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Decision Guide */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-normal text-[#1a1a1a] mb-6">
                Choosing the Right Tool for Your Goals
              </h2>

              <div className="grid gap-6 md:grid-cols-2 mb-6">
                <Card className="p-6 border-primary border-2 bg-white">
                  <h3 className="font-serif text-xl font-medium text-[#1a1a1a] mb-4">
                    When to Choose a Revocable Living Trust
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    The Revocable Living Trust is the "gold standard" for the average American family. Choose this if:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Avoiding the cost and time of Probate</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Ensuring privacy</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Incapacity planning</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Maintaining 100% control until death</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 border-border bg-white">
                  <h3 className="font-serif text-xl font-medium text-[#1a1a1a] mb-4">
                    When to Choose an Irrevocable Trust
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Irrevocable trusts are specialized tools. Consider one if you:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Are at high risk for lawsuits</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Have an estate exceeding federal exemption</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Need to qualify for Medicaid</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Have a Special Needs child</span>
                    </li>
                  </ul>
                </Card>
              </div>

              <div className="bg-background p-6 rounded-lg">
                <p className="text-sm text-muted-foreground mb-3">
                  <strong className="text-[#1a1a1a]">Important Note:</strong> A Revocable Trust automatically becomes
                  Irrevocable the moment the Grantor dies. At that point, the successor trustee takes over, and the
                  rules you wrote become permanent.
                </p>
                <Link
                  href="/"
                  className="text-primary hover:text-primary/90 font-medium inline-flex items-center gap-2"
                >
                  The role of Trust in inheritance is explained in detail in this article
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Conclusion */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-normal text-[#1a1a1a] mb-6">Conclusion</h2>
              <p className="text-muted-foreground leading-relaxed">
                A trust is not a "set it and forget it" document; it is a living part of your financial life. It offers
                a level of protection and customization that a Will simply cannot match. By separating the legal control
                of your assets from the enjoyment of them, you create a structure that can support your family for
                generations.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 bg-primary rounded-2xl p-8 text-center">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-white mb-4">Ready to Create Your Trust?</h2>
            <p className="text-[#c4dcd3] mb-6 max-w-2xl mx-auto">
              Protect your assets and secure your family&apos;s future with a professionally crafted trust that meets
              your unique needs.
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
              <Link href="/what-is-a-will" className="group">
                <Card className="p-6 border-border hover:shadow-lg transition-all h-full">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-background mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#1a1a1a] mb-2 group-hover:text-primary">
                    What is a Will?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Learn about wills and how they form the foundation of estate planning.
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
                    <Scale className="h-6 w-6 text-primary" />
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

      <Footer />
    </main>
  )
}
