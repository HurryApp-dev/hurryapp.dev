"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";
import { formatarData, type Post } from "@/lib/blog";

// O corpo do post (MDX) chega pronto do servidor em `children`.
const BlogPost = ({ post, children }: { post: Post; children: ReactNode }) => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <article className="max-w-[44rem] mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              {t("blog.back")}
            </Link>

            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">{post.title}</h1>
              <p className="text-sm text-muted-foreground">
                {t("blog.publishedOn")} <time dateTime={post.date}>{formatarData(post.date)}</time>
                {" · "}
                {t("blog.by")} {post.author}
                {post.draft && (
                  <span className="ml-2 rounded bg-accent/30 px-1.5 py-0.5 text-accent-foreground">
                    {t("blog.draft")}
                  </span>
                )}
              </p>
              {post.tags.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <li key={tag} className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
              {post.cover && <img src={post.cover} alt="" className="mt-6 w-full rounded-xl" />}
            </header>

            {/* prose-base no celular (16px) e prose-lg a partir de md; max-w-none porque a largura é do artigo */}
            <div className="prose prose-base md:prose-lg max-w-none break-words prose-pre:overflow-x-auto prose-img:mx-auto">
              {children}
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
