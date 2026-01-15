import { Link } from "react-router-dom";
import type { Components } from "react-markdown";

export const MarkdownComponents: Components = {
  h1: ({ children }) => (
    <h1 className="text-3xl font-bold text-[#e1d3b6] my-4">{children}</h1>
  ),

  h2: ({ children }) => (
    <h2 className="text-2xl font-semibold text-[#e1d3b6] my-3">{children}</h2>
  ),

  p: ({ children }) => <p className="mb-4">{children}</p>,

  ul: ({ children }) => <ul className="list-disc ml-6 mb-4">{children}</ul>,

  ol: ({ children }) => <ol className="list-decimal ml-6 mb-4">{children}</ol>,

  li: ({ children }) => <li className="mb-1">{children}</li>,

  img: ({ src, alt }) => (
    <figure className="my-6 max-w-9/12 h-80 mx-auto">
      <img
        src={src ?? ""}
        alt={alt ?? ""}
        className="rounded-lg shadow-md w-full h-full object-cover"
      />
      {alt && (
        <figcaption className="text-sm text-gray-400 text-center mt-2">
          {alt}
        </figcaption>
      )}
    </figure>
  ),

  a: ({ href, children }) =>
    href && (href.startsWith("/") || !href.startsWith("http")) ? (
      <Link to={href} className="text-blue-500 underline">
        {children}
      </Link>
    ) : (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline"
      >
        {children}
      </a>
    ),
};
