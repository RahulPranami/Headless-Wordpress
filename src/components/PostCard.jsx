import React from "react";

export default function PostCard({ title, content, excerpt, uri, date }) {
  return (
    <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
      <a
        href={`/post${uri}`}
        className=""
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          {title}
          {"   "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
      </a>
      <div
        className={`m-0 text-sm opacity-50`}
        dangerouslySetInnerHTML={{ __html: excerpt }}
      ></div>
    </div>
  );
}
