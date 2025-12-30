import { ArrowRight, Heart, Target, Lightbulb, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Our Mission and Story | WillTrust",
  description:
    "Learn about WillTrust's mission to make high-quality estate planning accessible, affordable, and actionable for everyone. Founded by seasoned estate attorneys.",
  alternates: {
    canonical: "https://willtrust.vercel.app/about",
  },
  openGraph: {
    title: "About Us | Our Mission and Story | WillTrust",
    description: "Learn about WillTrust's mission to make high-quality estate planning accessible and affordable.",
    type: "website",
    url: "https://willtrust.vercel.app/about",
    images: ["/og-about.jpg"],
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Our Story</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-normal text-foreground leading-[1.1] mb-8">
            Protecting Your Legacy with Compassion and Precision
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            At Willtrust.co, we believe that a Will or a Trust is more than just a legal document—it is an act of love
            for those you leave behind.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-foreground">Bridging the Gap in Estate Planning</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Willtrust.co was founded in 2018 on a simple but powerful observation: for too many people, estate
              planning feels like an intimidating maze of jargon, high costs, and emotional hurdles. Our founders,
              seasoned estate attorneys with over 25 years of combined experience, saw firsthand how families struggled
              during their most vulnerable moments because their loved ones&apos; wishes hadn&apos;t been clearly
              documented or legally secured.
            </p>
            <p>
              They set out to build a platform that humanizes the law. We moved away from the &quot;cold and
              robotic&quot; approach of traditional law and toward a service that prioritizes the client&apos;s peace of
              mind. Since our inception, we have helped thousands of families across the United States secure their
              futures.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
            <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Target className="h-10 w-10 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-serif mb-6 text-foreground">Our Mission</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                To make high-quality legal advice regarding Wills and Trusts accessible, affordable, and actionable for
                every American adult.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-border bg-white">
              <h3 className="font-serif text-xl mb-4 text-foreground">Estate Planning is for Everyone</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                It&apos;s not just for the wealthy; it&apos;s for anyone who wants to protect their family and their
                hard-earned assets.
              </p>
            </Card>
            <Card className="p-8 border-border bg-white">
              <h3 className="font-serif text-xl mb-4 text-foreground">Knowledge is Power</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                We don&apos;t just &quot;do the work&quot;—we educate our clients so they understand why a specific
                structure is right for them.
              </p>
            </Card>
            <Card className="p-8 border-border bg-white">
              <h3 className="font-serif text-xl mb-4 text-foreground">Precision Matters</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                In the world of probate and asset protection, a single missing signature can change everything. We
                provide meticulous attention.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-16 text-foreground">What Sets Us Apart</h2>
          <div className="space-y-12">
            <div className="flex gap-6">
              <Award className="h-10 w-10 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-serif mb-4 text-foreground">Expertise You Can Trust</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We are not a &quot;form factory.&quot; Our advice is crafted by experienced legal professionals who
                  understand the nuances of state-specific laws. We stay at the forefront of US tax codes and probate
                  regulations.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <Heart className="h-10 w-10 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-serif mb-4 text-foreground">A Client-Centric Approach</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We listen first. Every family has a unique dynamic—whether it&apos;s providing for a special-needs
                  child, protecting a family business, or managing a blended family. We believe in tailored strategies.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <Lightbulb className="h-10 w-10 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-serif mb-4 text-foreground">Transparent and Accessible</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We&apos;ve removed the &quot;black box&quot; of legal fees. Our services are provided with clear,
                  upfront pricing so you can focus on making the right decisions for your family without surprise bills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-24 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl sm:text-5xl mb-8">Estate Planning is the Greatest Gift</h2>
          <p className="text-xl text-primary-foreground/80 mb-12">
            It is the gift of certainty in a time of grief and the gift of protection in a time of uncertainty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 px-10 h-14 rounded-md w-full sm:w-auto"
              >
                Start Your Plan <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-10 h-14 rounded-md bg-transparent w-full sm:w-auto"
              >
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
