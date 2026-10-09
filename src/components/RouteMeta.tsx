import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE_URL, fullTitle, metaFor } from "@/lib/seo";

const setTag = (selector: string, attr: "name" | "property", key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const RouteMeta = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const { meta, known } = metaFor(pathname);
    const title = fullTitle(meta.title, pathname === "/");
    const url = SITE_URL + (pathname === "/" ? "/" : pathname.replace(/\/+$/, ""));

    document.title = title;
    setTag('meta[name="description"]', "name", "description", meta.description);
    setTag('meta[property="og:title"]', "property", "og:title", title);
    setTag('meta[property="og:description"]', "property", "og:description", meta.description);
    setTag('meta[name="twitter:title"]', "name", "twitter:title", title);
    setTag('meta[name="twitter:description"]', "name", "twitter:description", meta.description);
    // An unknown path has no canonical page, and shouldn't be indexed.
    setTag('meta[name="robots"]', "name", "robots", known ? "index,follow" : "noindex");

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = known ? url : SITE_URL + "/";
    setTag('meta[property="og:url"]', "property", "og:url", canonical.href);
  }, [pathname]);

  return null;
};

export default RouteMeta;
