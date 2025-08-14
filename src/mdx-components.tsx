// This file is required to use MDX in `app` directory.
export function useMDXComponents(
  components: Record<string, React.ComponentType<unknown>>
): Record<string, React.ComponentType<unknown>> {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: (props: unknown) => (
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-100 md:text-center sm:text-4xl">
        {(props as React.HTMLAttributes<HTMLHeadingElement>).children}
      </h1>
    ),
    h2: (props: unknown) => (
      <h2 className="text-zinc-50">
        {(props as React.HTMLAttributes<HTMLHeadingElement>).children}
      </h2>
    ),
    ...components,
  };
}
