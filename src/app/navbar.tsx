import Link from "next/link";
import Image from "next/image";
import { ReactElement } from "react";

import githubIcon from "../../public/github-mark.svg";
import linkedinIcon from "../../public/linkedin.svg";

export function Navbar(): ReactElement {
  return (
    <div className="bg-[#e4e4e4] dark:bg-neutral-800/50 text-black dark:text-white font-bold p-6 flex flex-row justify-between text-lg">
      <Link href="/">Calum Murray</Link>
      <div className="flex gap-12">
        <Link href="/">Home</Link>
        {/*<Link href="/projects">Projects</Link>*/}
        <Link href="/blog">Blog</Link>
        <div className="flex gap-4">
          <Link
            className="flex flex-col justify-center"
            href="https://github.com/Cali0707"
            target="_blank"
          >
            <Image
              className="h-4 w-fit dark:invert"
              priority
              src={githubIcon}
              alt="Check out my GitHub profile"
            />
          </Link>
          <Link
            className="flex flex-col justify-center"
            href="https://linkedin.com/in/calum-ra-murray"
            target="_blank"
          >
            <Image
              className="h-4 w-fit p-0 dark:invert"
              priority
              src={linkedinIcon}
              alt="Check out my LinkedIn profile"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
