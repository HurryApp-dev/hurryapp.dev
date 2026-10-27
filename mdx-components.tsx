import type { MDXComponents } from "mdx/types";

// Exigido pelo @next/mdx no App Router. O visual do texto vem do
// @tailwindcss/typography (classe `prose` em app/blog/[slug]/page.tsx).
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return { ...components };
}
