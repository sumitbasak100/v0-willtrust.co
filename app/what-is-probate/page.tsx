import { ArrowRight, Shield, FileText, Scale, Clock, DollarSign, Eye, CheckCircle2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function WhatIsProbatePage() {
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
              What is Probate?
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Understanding the court-supervised process of settling an estate in the United States
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-12">
              In the American legal system, <strong>Probate</strong> is the formal, court-supervised process of
              identifying a deceased person&apos;s assets, paying off their remaining debts and taxes, and distributing
              the balance of the estate to the rightful heirs. While many people view probate with a sense of dread, it
              serves a critical legal function: it provides a clear, documented transfer of ownership.
            </p>

            {/* Section 1 - How Probate Works */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-normal text-[#1a1a1a] mb-6">1. How the Probate Process Works</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                While the specific rules vary by state, the general sequence of events in a US probate court typically
                follows a standardized path:
              </p>

              <div className="space-y-6 mb-8">
                <Card className="p-6 border-l-4 border-l-[#2d5f4e] bg-white">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#2d5f4e] text-white flex items-center justify-center font-medium">
                      1
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-medium text-[#1a1a1a] mb-2">Filing the Petition</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        The process begins when someone files a petition with the probate court in the county where the
                        deceased lived. They must submit the original Will and a certified copy of the death
                        certificate.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-l-[#2d5f4e] bg-white">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#2d5f4e] text-white flex items-center justify-center font-medium">
                      2
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-medium text-[#1a1a1a] mb-2">
                        Appointment of a Representative
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        The court formally appoints the <strong>Executor</strong> (if there&apos;s a will) or{" "}
                        <strong>Administrator</strong> (if there&apos;s no will). They receive "Letters Testamentary" or
                        "Letters of Administration," which act as legal authority to manage the estate.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-l-[#2d5f4e] bg-white">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#2d5f4e] text-white flex items-center justify-center font-medium">
                      3
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-medium text-[#1a1a1a] mb-2">
                        Notifying Creditors and Heirs
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        The representative must legally notify all potential heirs and known creditors. In most states,
                        they must also publish a notice in a local newspaper to alert unknown creditors.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-l-[#2d5f4e] bg-white">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#2d5f4e] text-white flex items-center justify-center font-medium">
                      4
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-medium text-[#1a1a1a] mb-2">Inventory and Appraisal</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        The representative must gather and value everything the deceased owned, including real estate,
                        bank accounts, stocks, jewelry, and business interests.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-l-[#2d5f4e] bg-white">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#2d5f4e] text-white flex items-center justify-center font-medium">
                      5
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-medium text-[#1a1a1a] mb-2">Paying Debts and Taxes</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Before heirs get anything, the estate must pay funeral expenses, valid creditor claims, final
                        income taxes, and estate taxes (if applicable).
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-l-[#2d5f4e] bg-white">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#2d5f4e] text-white flex items-center justify-center font-medium">
                      6
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-medium text-[#1a1a1a] mb-2">
                        Final Distribution and Closing
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Once all debts are paid, the representative petitions the court for permission to distribute the
                        remaining assets to beneficiaries. Once approved, the estate is officially closed.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Section 2 - Why Avoid Probate */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-normal text-[#1a1a1a] mb-6">
                2. Why Do People Want to Avoid Probate?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                If probate is designed to help, why is "probate avoidance" such a popular topic in estate planning?
                There are three primary reasons:
              </p>

              <div className="grid gap-6 md:grid-cols-3 mb-8">
                <Card className="p-6 border-[#e8e3dc] hover:shadow-md transition-shadow">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#f5f2ed] mb-4">
                    <DollarSign className="h-6 w-6 text-[#2d5f4e]" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#1a1a1a] mb-3">Cost</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Between court filing fees, attorney fees, executor commissions, and appraisal costs, probate can
                    easily consume 3% to 7% of the total estate value.
                  </p>
                </Card>

                <Card className="p-6 border-[#e8e3dc] hover:shadow-md transition-shadow">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#f5f2ed] mb-4">
                    <Clock className="h-6 w-6 text-[#2d5f4e]" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#1a1a1a] mb-3">Time</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    It is rare for probate to close in less than six months. If the estate is complex or contested, it
                    can drag on for years, leaving heirs without access to their inheritance.
                  </p>
                </Card>

                <Card className="p-6 border-[#e8e3dc] hover:shadow-md transition-shadow">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#f5f2ed] mb-4">
                    <Eye className="h-6 w-6 text-[#2d5f4e]" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#1a1a1a] mb-3">Privacy</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Probate is a public process. Once a will is filed, anyone can go to the courthouse to see your
                    assets, debts, and who is getting what.
                  </p>
                </Card>
              </div>
            </div>

            {/* Section 3 - Probate vs Non-Probate Assets */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-normal text-[#1a1a1a] mb-6">
                3. Probate Assets vs. Non-Probate Assets
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Not everything you own goes through probate. In fact, many modern financial tools are designed to
                "bypass" the court entirely.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#2d5f4e] text-white">
                      <th className="text-left p-4 font-serif font-medium">Asset Type</th>
                      <th className="text-left p-4 font-serif font-medium">Goes Through Probate?</th>
                      <th className="text-left p-4 font-serif font-medium">Why?</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        asset: "Solely Owned Property",
                        probate: "Yes",
                        why: "No one else has a legal right to it; the court must transfer title.",
                      },
                      {
                        asset: "Joint Tenancy Property",
                        probate: "No",
                        why: "It passes automatically to the surviving co-owner.",
                      },
                      {
                        asset: "Living Trust Assets",
                        probate: "No",
                        why: "The trust (not the person) owns the assets.",
                      },
                      { asset: "Life Insurance", probate: "No", why: "It pays directly to a named beneficiary." },
                      {
                        asset: "Retirement (401k/IRA)",
                        probate: "No",
                        why: "It pays directly to a named beneficiary.",
                      },
                      {
                        asset: "Payable-on-Death Accounts",
                        probate: "No",
                        why: "The bank contract transfers the funds automatically at death.",
                      },
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-[#faf9f7]" : "bg-white"}>
                        <td className="p-4 border-b border-[#e8e3dc] font-medium text-[#1a1a1a]">{row.asset}</td>
                        <td className="p-4 border-b border-[#e8e3dc] text-[#6b6658] text-sm">
                          {row.probate === "Yes" ? (
                            <span className="inline-flex items-center gap-1 text-[#d4a72c] font-medium">
                              <AlertCircle className="h-4 w-4" />
                              Yes
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-[#2d5f4e] font-medium">
                              <CheckCircle2 className="h-4 w-4" />
                              No
                            </span>
                          )}
                        </td>
                        <td className="p-4 border-b border-[#e8e3dc] text-[#6b6658] text-sm">{row.why}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 4 - No Will (Intestacy) */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-normal text-[#1a1a1a] mb-6">
                4. What Happens If There Is No Will?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                When someone dies without a will, it is called <strong>Intestacy</strong>. The probate process still
                happens, but instead of following your instructions, the court follows{" "}
                <strong>State Intestacy Laws</strong>.
              </p>

              <Card className="p-6 border-l-4 border-l-[#d4a72c] bg-[#fffef8] mb-6">
                <h3 className="font-serif text-lg font-medium text-[#1a1a1a] mb-3">
                  These laws serve as a "default" distribution plan:
                </h3>
                <ul className="space-y-2 text-sm text-[#6b6658]">
                  <li className="flex gap-2">
                    <span className="text-[#d4a72c]">•</span>
                    <span>Assets usually go to the spouse first, then children, then parents, then siblings</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#d4a72c]">•</span>
                    <span>
                      The court will not consider your preferences for friends, charities, or unmarried partners
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#d4a72c]">•</span>
                    <span>
                      Your family home or heirlooms might be sold to split the cash evenly among heirs, even if you
                      wanted a specific person to keep them
                    </span>
                  </li>
                </ul>
              </Card>

              <div className="bg-[#f5f2ed] p-6 rounded-lg">
                <p className="text-sm text-[#6b6658] mb-3">
                  <strong className="text-[#1a1a1a]">Learn More:</strong>
                </p>
                <Link
                  href="/"
                  className="text-[#2d5f4e] hover:text-[#234739] font-medium inline-flex items-center gap-2"
                >
                  To understand the role of Probate in differentiating between a Trust and Will, read this article
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Section 5 - Small Estate Affidavit */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-normal text-[#1a1a1a] mb-6">
                5. Simplified Probate: The Small Estate Affidavit
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Recognizing that the full probate process can be overkill for small estates, most US states offer a
                "shortcut."
              </p>

              <Card className="p-6 border-[#2d5f4e] bg-white mb-6">
                <h3 className="font-serif text-lg font-medium text-[#1a1a1a] mb-3">Small Estate Affidavit</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  If the total value of the estate is below a certain threshold (which varies wildly from $10,000 to
                  over $150,000 depending on the state), heirs can often use a Small Estate Affidavit to collect assets
                  without ever stepping into a courtroom.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  This simplified process can save significant time and money for smaller estates.
                </p>
              </Card>
            </div>

            {/* Section 6 - Executor Checklist */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-normal text-[#1a1a1a] mb-6">
                Executor Checklist: Essential Steps
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Acting as an <strong>Executor</strong> (also known as a Personal Representative) is a significant
                responsibility. Here is a comprehensive checklist of the documents, information, and initial steps
                required:
              </p>

              <div className="space-y-8">
                {/* Immediate Discovery Phase */}
                <div>
                  <h3 className="font-serif text-xl font-medium text-[#1a1a1a] mb-4">
                    1. Immediate Discovery Phase (Days 1–10)
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Certified Death Certificates: Request 10–15 copies from the funeral home",
                      "The Original Will and Codicils: Check home safes, safety deposit boxes, or contact the attorney",
                      "Trust Documents: Determine which assets are Trust assets vs. Probate assets",
                      "Final Instructions or Letter of Direction: Look for non-binding letters with funeral wishes",
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-3 p-3 bg-[#faf9f7] rounded-lg">
                        <CheckCircle2 className="h-5 w-5 text-[#2d5f4e] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Filing & Appointment Phase */}
                <div>
                  <h3 className="font-serif text-xl font-medium text-[#1a1a1a] mb-4">2. Filing & Appointment Phase</h3>
                  <div className="space-y-3">
                    {[
                      "Petition for Probate: The formal application to the court to open the estate",
                      "List of Heirs and Beneficiaries: Gather full names, addresses, and relationships",
                      "Letters Testamentary: The document issued by the court granting legal authority",
                      "EIN (Employer Identification Number): Apply via the IRS for the estate",
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-3 p-3 bg-[#faf9f7] rounded-lg">
                        <CheckCircle2 className="h-5 w-5 text-[#2d5f4e] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Asset & Liability Inventory */}
                <div>
                  <h3 className="font-serif text-xl font-medium text-[#1a1a1a] mb-4">3. Asset & Liability Inventory</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-[#2d5f4e] text-white">
                          <th className="text-left p-3 font-serif font-medium text-sm">Category</th>
                          <th className="text-left p-3 font-serif font-medium text-sm">Documents to Gather</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { cat: "Real Estate", docs: "Deeds, property tax bills, mortgage statements" },
                          { cat: "Financials", docs: "Bank statements, brokerage/investment account statements" },
                          { cat: "Retirement", docs: "401(k), IRA, pension documents (check beneficiaries)" },
                          { cat: "Vehicles", docs: "Titles and registrations for cars, boats, or RVs" },
                          {
                            cat: "Personal Property",
                            docs: "Inventory of jewelry, art, collectibles (may need appraisal)",
                          },
                          {
                            cat: "Business Interests",
                            docs: "Partnership agreements, stock certificates, LLC documents",
                          },
                          {
                            cat: "Debts",
                            docs: "Credit card statements, medical bills, utility bills, personal loans",
                          },
                        ].map((row, idx) => (
                          <tr key={idx} className={idx % 2 === 0 ? "bg-[#faf9f7]" : "bg-white"}>
                            <td className="p-3 border-b border-[#e8e3dc] font-medium text-[#1a1a1a] text-sm">
                              {row.cat}
                            </td>
                            <td className="p-3 border-b border-[#e8e3dc] text-[#6b6658] text-sm">{row.docs}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Administrative & Tax Tasks */}
                <div>
                  <h3 className="font-serif text-xl font-medium text-[#1a1a1a] mb-4">4. Administrative & Tax Tasks</h3>
                  <div className="space-y-3">
                    {[
                      "Estate Bank Account: Open a dedicated account using the EIN",
                      "Notice to Creditors: Publish a notice in local newspaper and send direct notices",
                      "Life Insurance Claims: Contact insurance companies to initiate payout process",
                      "Final Form 1040: For income earned by the deceased up until death",
                      "Form 1041: For income earned by the estate while being settled",
                      "Form 706: Only if the estate exceeds federal limits (approx. $13.99M in 2025)",
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-3 p-3 bg-[#faf9f7] rounded-lg">
                        <CheckCircle2 className="h-5 w-5 text-[#2d5f4e] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Final Distribution & Closing */}
                <div>
                  <h3 className="font-serif text-xl font-medium text-[#1a1a1a] mb-4">
                    5. Final Distribution & Closing
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Final Accounting: A detailed report to the court showing all income and expenses",
                      "Receipts and Releases: Have heirs sign receipts acknowledging their distribution",
                      "Petition for Discharge: The final filing that tells the court your job is done",
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-3 p-3 bg-[#faf9f7] rounded-lg">
                        <CheckCircle2 className="h-5 w-5 text-[#2d5f4e] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-normal text-[#1a1a1a] mb-6">Conclusion</h2>
              <p className="text-muted-foreground leading-relaxed">
                Probate is the "administrative engine" of estate law. While it ensures that a deceased person&apos;s
                affairs are legally resolved and their debts are cleared, its public nature and high costs lead many to
                seek alternatives like Living Trusts. Understanding which of your assets will trigger probate—and which
                will not—is the first step in effective estate planning.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 bg-[#2d5f4e] rounded-2xl p-8 text-center">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-white mb-4">
              Avoid Probate with Proper Planning
            </h2>
            <p className="text-[#c4dcd3] mb-6 max-w-2xl mx-auto">
              Learn how to protect your family from the costs and delays of probate. Start your estate planning today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="bg-white text-[#2d5f4e] hover:bg-[#f5f2ed]">
                Start Your Estate Plan
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-[#234739] bg-transparent">
                Schedule Consultation
              </Button>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-16">
            <h2 className="font-serif text-2xl font-normal text-[#1a1a1a] mb-6">Related Articles</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Link href="/what-is-a-will" className="group">
                <Card className="p-6 border-[#e8e3dc] hover:shadow-lg transition-all h-full">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#f5f2ed] mb-4">
                    <FileText className="h-6 w-6 text-[#2d5f4e]" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#1a1a1a] mb-2 group-hover:text-[#2d5f4e]">
                    What is a Will?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Learn about wills and how they form the foundation of estate planning.
                  </p>
                  <span className="text-sm text-[#2d5f4e] font-medium inline-flex items-center gap-1">
                    Read More <ArrowRight className="h-4 w-4" />
                  </span>
                </Card>
              </Link>

              <Link href="/what-is-a-trust" className="group">
                <Card className="p-6 border-[#e8e3dc] hover:shadow-lg transition-all h-full">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#f5f2ed] mb-4">
                    <Shield className="h-6 w-6 text-[#2d5f4e]" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#1a1a1a] mb-2 group-hover:text-[#2d5f4e]">
                    What is a Trust?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Discover how trusts can protect your assets and avoid probate entirely.
                  </p>
                  <span className="text-sm text-[#2d5f4e] font-medium inline-flex items-center gap-1">
                    Read More <ArrowRight className="h-4 w-4" />
                  </span>
                </Card>
              </Link>

              <Link href="/" className="group">
                <Card className="p-6 border-[#e8e3dc] hover:shadow-lg transition-all h-full">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#f5f2ed] mb-4">
                    <Scale className="h-6 w-6 text-[#2d5f4e]" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#1a1a1a] mb-2 group-hover:text-[#2d5f4e]">
                    Trust vs Will
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Compare the key differences between trusts and wills to find the right solution.
                  </p>
                  <span className="text-sm text-[#2d5f4e] font-medium inline-flex items-center gap-1">
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
