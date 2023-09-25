import React from "react";

export default function PageNavigation({ page, hasNext, hasPrev }) {
  if (page <= 1) {
    hasPrev = false;
  }
  return (
    // <div className="w-full px-4 flex items-center justify-between pt-10">
    <div className="w-full px-4 pt-10">
      {/* <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"> */}

      {/* <div class="relative h-24 w-24 bg-gray-400">
        <div class="absolute left-0 top-0 h-8 w-8 bg-gray-700"></div>
      </div> */}
      {hasPrev && (
        <a
          href={`/page/${page - 1}`}
          className="float-left group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <p className="mb-3 text-2xl font-semibold">
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              &lt;-
            </span>
            {"   "}
            Previous Page
          </p>
        </a>
      )}
      {/* </div> */}
      {/* <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"> */}

      {hasNext && (
        <a
          href={`/page/${page + 1}`}
          className="float-right group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <p className="mb-3 text-2xl font-semibold">
            Next Page
            {"   "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </p>
        </a>
      )}
      {/* </div> */}
    </div>
  );
}
