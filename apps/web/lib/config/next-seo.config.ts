import { DefaultSeoProps } from "next-seo";

export const seoConfig = {
  headSeo: {
    siteName: "Inspirers.co",
  },
  defaultNextSeo: {
    twitter: {
      handle: "@inspirershq",
      site: "@inspirers",
      cardType: "summary_large_image",
    },
  },
} as const;
