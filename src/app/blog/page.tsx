import {Article, getArticleData} from "@/utils/mdx";
import Link from "next/link";

export default async function Page() {
    const articles: Article[] = await getArticleData();

    return (
        <main className={"flex min-h-screen flex-col items-center justify-start p-24"}>
            <h1 className={"relative flex place-items-center text-5xl font-sans font-bold"}>
                Blog
            </h1>
            <div className={"mb-32 grid text-left lg:mb-0 mt-20 gap-8"}>
                {articles.map((article) => {
                    return (
                        <Link
                            href={article.externalLink ?? `/blog/${article.slug}`}
                            key={`article-${article.slug}`}
                            className={"group rounded-lg border border-transparent px-5 py-5 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"}
                        >
                            <h3 className={"text-2xl"}>
                                {article.title}
                            </h3>
                            <p className={"text-gray-600 text-sm"}>
                                Authored by Calum Murray{article.coAuthors ? `, ${article.coAuthors.map(a => a.name).join(', ')} ` : ' '}
                                on&nbsp;
                                {article.publishDate.format("MMMM DD, YYYY")}
                                .&nbsp;
                                {!article.externalLink && `${article.readingTime}.`}
                            </p>
                            <p>{article.excerpt}</p>
                        </Link>
                    )
                })}
            </div>
        </main>
    )
}