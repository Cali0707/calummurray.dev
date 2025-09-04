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
    <article className="p-4 md:p-20 lg:px-56 max-w-[1800px]">
      <div className="flex flex-col place-content-center text-center md:mx-32 gap-5 mb-8">
        <h1 className="text-2xl md:text-5xl">{meta.title}</h1>
        <div className="block">
          <address className="not-italic flex flex-row justify-center gap-2">
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
        <div className="block">
          <time dateTime={meta.publishDate}>
            {dayjs(meta.publishDate).format("LL")}
          </time>
          {` | ${views} views`}
        </div>
      </div>
      <div className="mt-4 flex flex-col space-y-4">{children}</div>
      <ReportView slug={meta.slug} />
    </article>
  );
}
