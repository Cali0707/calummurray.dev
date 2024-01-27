import React, { ReactElement } from "react";

type FooterElementProps = {
  title: string;
  description: string;
  href: string;
  newPage?: boolean;
};
export function FooterComponent({
  title,
  description,
  href,
  newPage,
}: FooterElementProps): ReactElement {
  return (
    <a
      href={href}
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    {...newPage ? {target: "_blank"} : {}}
      rel="noopener noreferrer"
    >
      <h2 className={`mb-3 text-2xl font-semibold`}>
        {title + " "}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{description}</p>
    </a>
  );
}

type FooterProps = {
  elements: FooterElementProps[];
};
export function Footer({ elements }: FooterProps): ReactElement {
  return (
    <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-5 lg:text-left p-12 md:p-24">
      {elements.map((element) => (
        <FooterComponent key={element.title} {...element} />
      ))}
    </div>
  );
}
