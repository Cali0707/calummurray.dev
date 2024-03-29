import { Article, getArticleData } from "@/utils/mdx";
import Link from "next/link";
import Image from "next/image";

export default async function Page() {
  const articles: Article[] = await getArticleData();

  return (
    <main className={"flex flex-col items-center justify-start p-24"}>
      <h1
        className={
          "relative flex place-items-center text-5xl font-sans font-bold"
        }
      >
        Blog
      </h1>
      <div className={"mb-32 grid text-left lg:mb-0 mt-20 gap-8"}>
        {articles.map((article) => {
          return (
            <Link
              href={article.externalLink ?? `/blog/${article.slug}`}
              key={`article-${article.slug}`}
              className={
                "group rounded-lg border border-transparent px-5 py-5 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 "
              }
              {...(article.externalLink ? { target: "_blank" } : {})}
            >
              <div className="flex flex-auto gap-10">
                <div className="md:flex shrink-0 w-[160px] h-[160px] sm:hidden">
                  <Image
                    className="rounded-xl  "
                    src={article.coverImage}
                    alt=""
                    height={160}
                    width={160}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className={"text-2xl"}>{article.title}</h3>
                  <p className={"text-gray-600 text-sm dark:text-gray-300"}>
                    Authored by Calum Murray
                    {article.coAuthors
                      ? `, ${article.coAuthors.map((a) => a.name).join(", ")} `
                      : " "}
                    on&nbsp;
                    {article.publishDate.format("MMMM DD, YYYY")}
                    .&nbsp;
                  </p>
                  <p>{article.excerpt}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
