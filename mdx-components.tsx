import type { MDXComponents } from "mdx/types";

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
    ...components,
  };
}
