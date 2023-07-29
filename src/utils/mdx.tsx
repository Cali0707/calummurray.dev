import path from 'path';
import fs from 'fs/promises';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const articlesPath = path.join(process.cwd(), 'blog/articles');

export async function getArticleData() {
    const articles = await fs.readdir(articlesPath);
    return await articles.reduce(async (accumulator, articleSlug) => {
        const fileContents = await fs.readFile(path.join(articlesPath, articleSlug));
        const {data, content} = matter(fileContents);
        return [
            {
                ...data,
                slug: data.externalLink ? null : articleSlug.replace('.mdx', ''),
                readingTime: readingTime(content).text,
            }
        ]
    }, Promise.resolve([{}]));
}


// general idea: get all files, then process gray matter and return in object