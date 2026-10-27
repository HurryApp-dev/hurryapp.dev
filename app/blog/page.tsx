import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Blog from "@/views/Blog";
import { listarPosts } from "@/lib/blogFs";

export const metadata: Metadata = {
  title: "Blog — HurryApp",
  description: "Textos da equipe HurryApp sobre apps, No-code, automação e IA.",
  alternates: { canonical: "/blog" },
  openGraph: { url: "https://www.hurryapp.dev/blog" },
};

export default function Page() {
  const posts = listarPosts();
  // Sem post visível o menu não mostra o Blog; a página também não existe.
  if (posts.length === 0) notFound();
  return <Blog posts={posts} />;
}
