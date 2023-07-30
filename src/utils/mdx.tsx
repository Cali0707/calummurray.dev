import path from 'path';
import fs from 'fs/promises';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import dayjs, {Dayjs} from "dayjs";

export type Author = {
    name: string,
    link: string,
}

export type ArticleMetaData = {
    title: string,
    publishDate: string,
    coverImage: string,
    externalLink: string,
    coAuthors: Author[],
}

export type Article = {
    title: string,
    publishDate: Dayjs,
    coverImage: string,
    externalLink: string,
    coAuthors: Author[],
    readingTime: string,
    excerpt: string,
    content: string
    slug: string,
}

const articlesPath = path.join(process.cwd(), 'src/blog/articles');

export async function getArticleData(): Promise<Article[]> {
    const articles = await fs.readdir(articlesPath);
    return await Promise.all(articles.map(async (articleSlug: string) => {
        const fileContents = await fs.readFile(path.join(articlesPath, articleSlug));
        const {data, content, excerpt} = matter(fileContents, { excerpt: true });
        const articleData = data as ArticleMetaData;
        return {
            ...articleData,
            slug: articleSlug.replace('.mdx', ''),
            content,
            excerpt,
            readingTime: readingTime(content).text,
            publishDate: dayjs(articleData.publishDate),
        } as Article
    }));
}


// general idea: get all files, then process gray matter and return in object