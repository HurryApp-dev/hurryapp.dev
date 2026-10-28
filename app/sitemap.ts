import type { MetadataRoute } from "next";
import { listarPosts, SITE } from "@/lib/blogFs";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = listarPosts().filter((p) => !p.draft);
  return [
    { url: `${SITE}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE}/servicos`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/contato`, changeFrequency: "monthly", priority: 0.6 },
    // /blog só existe (e só entra no sitemap) com ao menos um post publicado.
    ...(posts.length > 0
      ? [
          { url: `${SITE}/blog`, lastModified: posts[0].date, changeFrequency: "weekly" as const, priority: 0.7 },
          ...posts.map((p) => ({
            url: `${SITE}/blog/${p.slug}`,
            lastModified: p.date,
            changeFrequency: "monthly" as const,
            priority: 0.5,
          })),
        ]
      : []),
  ];
}
