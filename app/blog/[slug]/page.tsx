import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPost from "@/views/BlogPost";
import { acharPost, listarPosts, SITE } from "@/lib/blogFs";

// Slug que não saiu de generateStaticParams (inclusive draft em produção) dá 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return listarPosts().map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = acharPost(slug);
  if (!post) return {};
  const url = `${SITE}/blog/${slug}`;
  return {
    title: `${post.title} — HurryApp`,
    description: post.description,
    authors: [{ name: post.author }],
    alternates: { canonical: url },
    // Draft só existe em `next dev`; não indexar mesmo assim.
    robots: post.draft ? { index: false, follow: false } : undefined,
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: [post.cover ? `${SITE}${post.cover}` : `${SITE}/og-image.png`],
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.description },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const post = acharPost(slug);
  if (!post) notFound();

  const { default: Conteudo } = await import(`../../../content/blog/${slug}.mdx`);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "pt-BR",
    image: post.cover ? `${SITE}${post.cover}` : `${SITE}/og-image.png`,
    keywords: post.tags.join(", ") || undefined,
    mainEntityOfPage: `${SITE}/blog/${slug}`,
    author: { "@type": "Person", name: post.author },
    publisher: { "@id": `${SITE}/#organization` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "<") }}
      />
      <BlogPost post={post}>
        <Conteudo />
      </BlogPost>
    </>
  );
}
