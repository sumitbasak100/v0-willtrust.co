import type { MetadataRoute } from "next"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://willtrust.co"

  // 1️⃣ Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/what-is-a-trust`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/what-is-a-will`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/what-is-probate`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/examples`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ]

  // 2️⃣ Fetch blog posts from WordPress
  const wpRes = await fetch(
    "https://blog.willtrust.co/wp-json/wp/v2/posts?per_page=100",
    { cache: "no-store" }
  )

  const posts = await wpRes.json()

  const blogPages: MetadataRoute.Sitemap = posts.map((post: any) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.modified,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  // 3️⃣ Combine everything
  return [...staticPages, ...blogPages]
}
