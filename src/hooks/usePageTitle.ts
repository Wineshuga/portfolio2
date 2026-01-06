import { useEffect } from "react";

const setLink = (rel: string, href: string) => {
  let link = document.querySelector(`link[rel="${rel}"]`);
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
};

export const usePageTitle = (title: string, excerpt?: string, slug?: string) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const setMeta = (attr: "name" | "property", key: string, content?: string) => {
      if (!content) return;
      const selector = `meta[${attr}="${key}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement | null;
      if (meta) {
        meta.setAttribute("content", content);
      } else {
        meta = document.createElement("meta");
        meta.setAttribute(attr, key);
        meta.setAttribute("content", content);
        document.head.appendChild(meta);
      }
    };

    setMeta("name", "description", excerpt);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", excerpt);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", excerpt);
    if (slug) {
      const url = `https://uzochukwuwinnie.netlify.app/blog/${slug}`;
      setMeta("property", "og:url", url);
      setLink("canonical", url);
    }
    return () => {
      document.title = previousTitle;
    };
  }, [title, excerpt, slug]);
};