import { ArticleMetaData } from "@/utils/mdx";
import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { ReportView } from "./view";
import { kv } from "@vercel/kv";
import { cache } from "react";

dayjs.extend(localizedFormat);

export const revalidate = 60;

export const getViews = cache(async (slug: string, defaultViews: number = 0) => {
  // Check if KV environment variables are available
  if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) {
    return defaultViews;
  }
  
  try {
    const item = (await kv.get<number>(`pageviews:projects:${slug}`)) ?? defaultViews;
    return item;
  } catch (error) {
    console.error('Failed to get views from KV:', error);
    return defaultViews;
  }
});

export default async function BlogLayout({
  children,
  meta,
}: {
  children: React.ReactNode;
  meta: ArticleMetaData;
}) {
  const views = await getViews(meta.slug, meta.defaultViews ?? 0);
  return (
    <article className="w-full px-4 py-8 sm:px-6 md:px-12 lg:px-20 xl:px-32 max-w-[1200px] mx-auto overflow-hidden">
      <div className="flex flex-col place-content-center text-center max-w-3xl mx-auto gap-4 sm:gap-5 mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
          {meta.title}
        </h1>
        <div className="block">
          <address className="not-italic flex flex-row justify-center items-center gap-2">
            <Image
              src="/calum.webp"
              width={32}
              height={32}
              className="rounded-full"
              alt="profile photo of Calum"
            />{" "}
            <Link rel="author" href="/">
              Calum Murray
            </Link>
          </address>
        </div>
        <div className="block text-sm sm:text-base">
          <time dateTime={meta.publishDate}>
            {dayjs(meta.publishDate).format("LL")}
          </time>
          {` | ${views} views`}
        </div>
      </div>
      <div className="mt-4 flex flex-col space-y-4 sm:space-y-6">{children}</div>
      <ReportView slug={meta.slug} />
    </article>
  );
}
