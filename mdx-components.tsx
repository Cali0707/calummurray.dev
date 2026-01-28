import type { MDXComponents } from "mdx/types";

type Reference = {
  authors: string;
  title: string;
  venue?: string;
  year: string | number;
  url?: string;
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="text-2xl">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl">{children}</h3>,
    ol: ({ children }) => (
      <ol className="list-decimal list-outside flex flex-col gap-4 pl-4">
        {children}
      </ol>
    ),
    code: ({ children, className, ...props }) => (
      <code className={`${className} p-1 rounded-lg`} {...props}>
        {children}
      </code>
    ),
    pre: ({ children, className, ...props }) => (
      <pre className={`${className} p-2 overflow-scroll rounded-lg`} {...props}>
        {children}
      </pre>
    ),
    a: ({ children, ...props }) => (
      <a
        {...props}
        className="text-cyan-900 hover:text-cyan-600 dark:text-cyan-400 hover:dark:text-cyan-300 underline"
      >
        {children}
      </a>
    ),
    Cite: ({ num }: { num: number }) => (
      <a
        href={`#ref-${num}`}
        className="text-cyan-900 hover:text-cyan-600 dark:text-cyan-400 hover:dark:text-cyan-300 underline text-sm align-super"
      >
        [{num}]
      </a>
    ),
    References: ({ references }: { references: Reference[] }) => (
      <ol className="list-decimal list-outside flex flex-col gap-2 pl-6 text-sm">
        {references.map((ref, index) => (
          <li key={index} id={`ref-${index + 1}`}>
            {ref.authors}. "{ref.title}."
            {ref.venue && <> <em>{ref.venue}</em>,</>} {ref.year}.
            {ref.url && (
              <>
                {" "}
                <a
                  href={ref.url}
                  className="text-cyan-900 hover:text-cyan-600 dark:text-cyan-400 hover:dark:text-cyan-300 underline"
                >
                  Link
                </a>
              </>
            )}
          </li>
        ))}
      </ol>
    ),
    ...components,
  };
}
