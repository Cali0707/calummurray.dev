import path from "path";
import fs from "fs/promises";
import dayjs, { Dayjs } from "dayjs";

export type Author = {
  name: string;
  link: string;
};

export type ArticleMetaData = {
  title: string;
  publishDate: string;
  coverImage: string;
  externalLink: string;
  excerpt: string;
  coAuthors: Author[];
  slug: string;
  defaultViews?: number;
};

export type Article = {
  title: string;
  publishDate: Dayjs;
  coverImage: string;
  externalLink: string;
  coAuthors: Author[];
  readingTime: string;
  excerpt: string;
  content: string;
  slug: string;
};

const articlesPath = path.join(process.cwd(), "src/app/blog");

export async function getArticleData(): Promise<Article[]> {
  const articlesRegex = new RegExp(".*mdx?$");
  const allFiles = await getFilesRecursive(articlesPath);
  const articles = allFiles.filter((f) => articlesRegex.test(f));

  const parsedArticles = await Promise.all(
    articles.map(async (articlePath: string) => {
      console.log(
        `${path.basename(path.dirname(articlePath))}/${path.basename(articlePath)}`,
      );
      const meta: ArticleMetaData = require(
        `@/app/blog/${path.basename(path.dirname(articlePath))}/${path.basename(articlePath)}`,
      ).meta;
      return {
        ...meta,
        slug: path.basename(path.dirname(articlePath)),
        coverImage: `/blog-images/${meta.coverImage}`,
        publishDate: dayjs(meta.publishDate),
      } as Article;
    }),
  );

  return parsedArticles.sort((a, b) => {
    if (a.publishDate.isBefore(b.publishDate)) {
      return 1;
    } else if (a.publishDate.isAfter(b.publishDate)) {
      return -1;
    } else {
      return -a.title.localeCompare(b.title);
    }
  });
}

export async function getFilesRecursive(directory: string): Promise<string[]> {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const result = path.resolve(directory, entry.name);
      return entry.isDirectory() ? getFilesRecursive(result) : result;
    }),
  );
  return files.flat();
}
