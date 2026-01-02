import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { ArrowRight, Calendar, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Estate Planning Blog & Resources | WillTrust",
  description:
    "Expert insights, guides, and tips on estate planning, wills, trusts, and protecting your legacy. Stay informed with our latest articles.",
  alternates: {
    canonical: "https://willtrust.vercel.app/blog",
  },
  openGraph: {
    title: "Estate Planning Blog & Resources | WillTrust",
    description: "Expert insights and guides on estate planning, wills, and trusts.",
    type: "website",
    url: "https://willtrust.vercel.app/blog",
  },
}

// ✅ Cache for 30 minutes - blog listing doesn't need to be super fresh
export const revalidate = 1800 // Revalidate every 30 minutes

async function getPosts() {
  try {
    const res = await fetch("https://blog.willtrust.co/wp-json/wp/v2/posts?per_page=100&_embed", {
      // ✅ Cache for 30 minutes
      next: { revalidate: 1800 }
    })
    if (!res.ok) throw new Error("Failed to fetch posts")
    return res.json()
  } catch (error) {
    console.error("Error fetching posts:", error)
    return []
  }
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

function calculateReadingTime(content: string) {
  const wordsPerMinute = 200
  const textContent = content.replace(/<[^>]*>/g, "")
  const wordCount = textContent.split(/\s+/).length
  const minutes = Math.ceil(wordCount / wordsPerMinute)
  return minutes
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
              Resources & Insights
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl font-normal text-foreground mb-4">
              Estate Planning Blog
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Expert guidance, tips, and insights to help you navigate estate planning with confidence
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No blog posts available at the moment.</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post: any) => {
                const featuredImage =
                  post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.svg"
                const readingTime = calculateReadingTime(post.content.rendered)

                return (
                  <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                    <Card className="overflow-hidden border-border hover:shadow-lg transition-all h-full flex flex-col">
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={featuredImage}
                          alt={post.title.rendered}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{formatDate(post.date)}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{readingTime} min read</span>
                          </div>
                        </div>
                        <h2
                          className="font-serif text-xl font-medium text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2"
                          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                        />
                        <div
                          className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-grow"
                          dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                        />
                        <div className="flex items-center text-primary font-medium text-sm mt-auto">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Card>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
