import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function BlogNotFound() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-6xl font-normal text-foreground mb-4">404</h1>
          <h2 className="font-serif text-3xl font-normal text-foreground mb-6">Post Not Found</h2>
          <p className="text-lg text-muted-foreground mb-8">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <Link href="/blog">
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  )
}
