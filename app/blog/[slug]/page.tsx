import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react"

async function getPost(slug: string) {
  try {
    const res = await fetch(
      `https://blog.willtrust.co/wp-json/wp/v2/posts?slug=${slug}&_embed`,
      { cache: "no-store" }
    )
    if (!res.ok) throw new Error("Failed to fetch post")
    const posts = await res.json()
    return posts[0] || null
  } catch (error) {
    console.error("Error fetching post:", error)
    return null
  }
}

async function getRelatedPosts(currentPostId: number) {
  try {
    const res = await fetch(
      `https://blog.willtrust.co/wp-json/wp/v2/posts?per_page=3&exclude=${currentPostId}&_embed`,
      { cache: "no-store" }
    )
    if (!res.ok) throw new Error("Failed to fetch related posts")
    return res.json()
  } catch (error) {
    console.error("Error fetching related posts:", error)
    return []
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug)

  if (!post) {
    return {
      title: "Post Not Found | WillTrust",
    }
  }

  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url

  return {
    title: `${post.title.rendered} | WillTrust Blog`,
    description: post.excerpt.rendered.replace(/<[^>]*>/g, "").substring(0, 160),
    alternates: {
      canonical: `https://willtrust.vercel.app/blog/${params.slug}`,
    },
    openGraph: {
      title: post.title.rendered,
      description: post.excerpt.rendered.replace(/<[^>]*>/g, "").substring(0, 160),
      type: "article",
      url: `https://willtrust.vercel.app/blog/${params.slug}`,
      images: featuredImage ? [featuredImage] : [],
      publishedTime: post.date,
      modifiedTime: post.modified,
    },
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

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = await getRelatedPosts(post.id)
  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url
  const readingTime = calculateReadingTime(post.content.rendered)

  return (
    <main className="min-h-screen">
      <Header />

      {/* Article Header */}
      <article className="py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>

          <div className="mb-8">
            <h1
              className="font-serif text-4xl sm:text-5xl font-normal text-foreground mb-4"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{readingTime} min read</span>
              </div>
            </div>
          </div>

          {featuredImage && (
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden mb-12">
              <Image src={featuredImage} alt={post.title.rendered} fill className="object-cover" />
            </div>
          )}

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-normal prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-normal text-foreground mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {relatedPosts.map((relatedPost: any) => {
                const relatedImage =
                  relatedPost._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.svg"

                return (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`} className="group">
                    <Card className="overflow-hidden border-border hover:shadow-lg transition-all h-full flex flex-col">
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={relatedImage}
                          alt={relatedPost.title.rendered}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h3
                          className="font-serif text-lg font-medium text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2"
                          dangerouslySetInnerHTML={{ __html: relatedPost.title.rendered }}
                        />
                        <div
                          className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow"
                          dangerouslySetInnerHTML={{ __html: relatedPost.excerpt.rendered }}
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
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-primary py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl mb-6">Ready to Start Your Estate Plan?</h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Get expert guidance and secure your family's future today.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-10 h-14 rounded-md">
              Contact Us Today <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
