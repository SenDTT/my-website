import { useEffect } from "react";

interface SeoProps {
  title: string;
  description?: string;
  keywords?: string;
  author?: string;
  url?: string;
  image?: string;
}

export default function Seo({
  title,
  description = "",
  keywords = "",
  author = "Sen Doan",
  url = window.location.href,
  image = "",
}: SeoProps) {
  useEffect(() => {
    const setMeta = (name: string, content: string) => {
      if (!content) return;
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    const setOG = (property: string, content: string) => {
      if (!content) return;
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    const setLink = (rel: string, href: string) => {
      let tag = document.querySelector(`link[rel="${rel}"]`);
      if (!tag) {
        tag = document.createElement("link");
        tag.setAttribute("rel", rel);
        document.head.appendChild(tag);
      }
      tag.setAttribute("href", href);
    };

    document.title = title;
    setMeta("description", description);
    setMeta("keywords", keywords);
    setMeta("author", author);
    setLink("canonical", url);

    // Open Graph (Facebook, LinkedIn)
    setOG("og:title", title);
    setOG("og:description", description);
    setOG("og:url", url);
    setOG("og:type", "website");
    setOG("og:image", image);

    // Twitter Card
    setMeta("twitter:card", image ? "summary_large_image" : "summary");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    if (image) setMeta("twitter:image", image);
  }, [title, description, keywords, author, url, image]);

  return null;
}
