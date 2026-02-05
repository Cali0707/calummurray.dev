import rehypePrettyCode from "rehype-pretty-code";
import rehypeUnwrapImages from "rehype-unwrap-images";
import createMDX from "@next/mdx";

const options = {
  keepBackground: true,
  defaultLang: "bash",
  theme: {
    dark: "github-dark-dimmed",
    light: "github-light",
  },
};

const withMDX = createMDX({
  extensions: /\.mdx?$/,
  options: {
    rehypePlugins: [rehypeUnwrapImages, [rehypePrettyCode, options]],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
};

export default withMDX(nextConfig);
