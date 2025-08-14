"use client";
import Image from "next/image";
import * as React from "react";

// function clsx(...args: (string | undefined | null | false)[]) {
//   return args.filter(Boolean).join(" ");
// }
// const components = {
//   h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
//     <h1
//       className={clsx(
//         "mt-2 scroll-m-20 text-4xl font-bold tracking-tight",
//         className
//       )}
//       {...props}
//     />
//   ),
//   h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
//     <h2
//       className={clsx(
//         "mt-10 scroll-m-20 border-b border-b-zinc-800 pb-1 text-3xl font-semibold tracking-tight first:mt-0",
//         className
//       )}
//       {...props}
//     />
//   ),
//   h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
//     <h3
//       className={clsx(
//         "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
//         className
//       )}
//       {...props}
//     />
//   ),
//   h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
//     <h4
//       className={clsx(
//         "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
//         className
//       )}
//       {...props}
//     />
//   ),
//   h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
//     <h5
//       className={clsx(
//         "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
//         className
//       )}
//       {...props}
//     />
//   ),
//   h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
//     <h6
//       className={clsx(
//         "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
//         className
//       )}
//       {...props}
//     />
//   ),
//   a: ({
//     className,
//     ...props
//   }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
//     <a
//       className={clsx(
//         "font-medium text-zinc-900 underline underline-offset-4",
//         className
//       )}
//       {...props}
//     />
//   ),
//   p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
//     <p
//       className={clsx("leading-7 [&:not(:first-child)]:mt-6", className)}
//       {...props}
//     />
//   ),
//   ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
//     <ul className={clsx("my-6 ml-6 list-disc", className)} {...props} />
//   ),
//   ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
//     <ol className={clsx("my-6 ml-6 list-decimal", className)} {...props} />
//   ),
//   li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
//     <li className={clsx("mt-2", className)} {...props} />
//   ),
//   blockquote: ({
//     className,
//     ...props
//   }: React.HTMLAttributes<HTMLQuoteElement>) => (
//     <blockquote
//       className={clsx(
//         "mt-6 border-l-2 border-zinc-300 pl-6 italic text-zinc-800 [&>*]:text-zinc-600",
//         className
//       )}
//       {...props}
//     />
//   ),
//   img: ({
//     className,
//     alt,
//     ...props
//   }: React.ImgHTMLAttributes<HTMLImageElement>) => (
//     // eslint-disable-next-line @next/next/no-img-element
//     <img
//       className={clsx("rounded-md border border-zinc-200", className)}
//       alt={alt}
//       {...props}
//     />
//   ),
//   hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
//     <hr className="my-4 border-zinc-200 md:my-8" {...props} />
//   ),
//   table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
//     <div className="w-full my-6 overflow-y-auto">
//       <table className={clsx("w-full", className)} {...props} />
//     </div>
//   ),
//   tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
//     <tr
//       className={clsx(
//         "m-0 border-t border-zinc-300 p-0 even:bg-zinc-100",
//         className
//       )}
//       {...props}
//     />
//   ),
//   th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
//     <th
//       className={clsx(
//         "border border-zinc-200 px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
//         className
//       )}
//       {...props}
//     />
//   ),
//   td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
//     <td
//       className={clsx(
//         "border border-zinc-200 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
//         className
//       )}
//       {...props}
//     />
//   ),
//   pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
//     <pre
//       className={clsx(
//         "mt-6 mb-4 overflow-x-auto rounded-lg bg-zinc-900 py-4",
//         className
//       )}
//       {...props}
//     />
//   ),
//   code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
//     <code
//       className={clsx(
//         "relative rounded border bg-zinc-300 bg-opacity-25 py-[0.2rem] px-[0.3rem] font-mono text-sm text-zinc-600",
//         className
//       )}
//       {...props}
//     />
//   ),
//   Image,
// };

interface MdxProps {
  code: string;
  rawContent: string;
}

// Enhanced function to convert markdown-like content to JSX with conditional rendering
function parseMarkdownContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;
  let currentListItems: React.ReactNode[] = [];
  let inList = false;

  // Helper function to flush current list
  const flushList = () => {
    if (currentListItems.length > 0) {
      elements.push(
        <div key={key++} className="mb-6">
          {currentListItems}
        </div>
      );
      currentListItems = [];
      inList = false;
    }
  };

  // Helper function to parse inline formatting (bold, links, etc.)
  const parseInlineFormatting = (text: string) => {
    const parts: React.ReactNode[] = [];
    let remaining = text;
    let partKey = 0;

    while (remaining.length > 0) {
      // Handle links
      const linkMatch = remaining.match(/\[([^\]]+)\]\(([^\)]+)\)/);
      if (linkMatch) {
        const beforeLink = remaining.substring(0, linkMatch.index!);
        if (beforeLink) {
          parts.push(beforeLink);
        }
        parts.push(
          <a
            key={partKey++}
            href={linkMatch[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            {linkMatch[1]}
          </a>
        );
        remaining = remaining.substring(linkMatch.index! + linkMatch[0].length);
        continue;
      }

      // Handle bold text
      const boldMatch = remaining.match(/\*\*([^\*]+)\*\*/);
      if (boldMatch) {
        const beforeBold = remaining.substring(0, boldMatch.index!);
        if (beforeBold) {
          parts.push(beforeBold);
        }
        parts.push(
          <strong key={partKey++} className="font-bold text-white">
            {boldMatch[1]}
          </strong>
        );
        remaining = remaining.substring(boldMatch.index! + boldMatch[0].length);
        continue;
      }

      // No more special formatting, add the rest
      parts.push(remaining);
      break;
    }

    return parts.length === 1 ? parts[0] : parts;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Skip frontmatter and empty lines
    if (!line || line === "---") {
      if (!inList && line === "") {
        elements.push(<div key={key++} className="mb-4" />);
      }
      continue;
    }

    // Images - only render if they exist
    if (line.startsWith("![")) {
      flushList();
      const match = line.match(/!\[([^\]]*)\]\(([^\)]+)\)/);
      if (match) {
        const [, alt, src] = match;
        elements.push(
          <div key={key++} className="mb-8">
            <Image
              src={src}
              alt={alt}
              width={800}
              height={600}
              className="w-full h-64 md:h-80 lg:h-96 object-contain rounded-lg border border-zinc-700"
              onError={(e) => {
                // Hide image if it fails to load
                (e.target as HTMLElement).style.display = "none";
              }}
            />
          </div>
        );
      }
      continue;
    }

    // Headers - only render if they exist
    if (line.startsWith("# ")) {
      flushList();
      const title = line.substring(2).trim();
      if (title) {
        elements.push(
          <h1
            key={key++}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-8 leading-tight"
          >
            {parseInlineFormatting(title)}
          </h1>
        );
      }
      continue;
    }

    if (line.startsWith("## ")) {
      flushList();
      const title = line.substring(3).trim();
      if (title) {
        elements.push(
          <h2
            key={key++}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 font-display mt-12"
          >
            {parseInlineFormatting(title)}
          </h2>
        );
      }
      continue;
    }

    if (line.startsWith("### ")) {
      flushList();
      const title = line.substring(4).trim();
      if (title) {
        elements.push(
          <h3
            key={key++}
            className="text-xl md:text-2xl font-bold text-white mb-4 mt-8"
          >
            {parseInlineFormatting(title)}
          </h3>
        );
      }
      continue;
    }

    // List items - group them together
    if (line.startsWith("- ")) {
      const listContent = line.substring(2).trim();
      if (listContent) {
        inList = true;
        currentListItems.push(
          <div key={key++} className="flex items-start gap-3 mb-3">
            <span className="text-zinc-400 mt-1 flex-shrink-0">•</span>
            <span className="text-zinc-300 leading-relaxed">
              {parseInlineFormatting(listContent)}
            </span>
          </div>
        );
      }
      continue;
    }

    // Regular paragraphs - only render if they have content
    if (
      !line.startsWith("---") &&
      !line.startsWith("*Built with") &&
      line.length > 0
    ) {
      flushList();
      elements.push(
        <p key={key++} className="text-lg text-zinc-300 mb-6 leading-relaxed">
          {parseInlineFormatting(line)}
        </p>
      );
    }
  }

  // Flush any remaining list items
  flushList();

  return elements;
}

export function Mdx({ rawContent }: MdxProps) {
  // Use the actual raw content from the project file
  const elements = parseMarkdownContent(rawContent);

  return (
    <div className="mdx">
      <div className="max-w-none text-white">{elements}</div>
    </div>
  );
}
