import { ArticleMetaData } from "@/utils/mdx";
import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(localizedFormat);

export default function BlogLayout({
  children,
  meta,
}: {
  children: React.ReactNode;
  meta: ArticleMetaData;
}) {
  return (
    <article className="p-20">
      <div className="flex flex-col place-content-center text-center mx-32 gap-5">
        <h1 className="text-5xl">{meta.title}</h1>
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
        </div>
      </div>
      {children}
    </article>
  );
}
