import {Article, getArticleData} from "@/utils/mdx";

export default async function Page() {
    const articles: Article[] = await getArticleData();

    return (
        <main className={"flex min-h-screen flex-col items-center justify-between p-24"}>
            <h1 className={"relative flex place-items-center text-5xl font-sans font-bold"}>
                Blog
            </h1>
            <div>
                {articles.map((article) => {
                    return (
                        <div key={`article-${article.slug}`}>
                            <h3 className={"text-2xl"}>
                                {article.title}
                            </h3>
                            <p>{article.excerpt}</p>
                        </div>
                    )
                })}
            </div>
        </main>
    )
}