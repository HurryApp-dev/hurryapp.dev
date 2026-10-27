"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";
import { formatarData, type Post } from "@/lib/blog";

const Blog = ({ posts }: { posts: Post[] }) => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <header className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">{t("blog.title")}</h1>
            <p className="text-muted-foreground">{t("blog.subtitle")}</p>
          </header>

          <ul className="max-w-3xl mx-auto space-y-5">
            {posts.map((post) => (
              <li key={post.slug}>
                <article className="glass-card p-5 md:p-7 transition-colors hover:border-primary/50">
                  <p className="text-xs text-muted-foreground mb-2">
                    <time dateTime={post.date}>{formatarData(post.date)}</time>
                    {" · "}
                    {t("blog.by")} {post.author}
                    {post.draft && (
                      <span className="ml-2 rounded bg-accent/30 px-1.5 py-0.5 text-accent-foreground">
                        {t("blog.draft")}
                      </span>
                    )}
                  </p>
                  <h2 className="text-xl md:text-2xl font-semibold mb-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-muted-foreground">{post.description}</p>
                  {post.tags.length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <li key={tag} className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
