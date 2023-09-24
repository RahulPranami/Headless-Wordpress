import { client } from "@/lib/apollo";
import { GET_POSTS, GET_MENU_ITEMS, GET_SITE_INFO } from "@/lib/queries";
import PostCard from "./PostCard";

export default async function Posts() {
  const response = await client.query({
    query: GET_POSTS,
  });
  //   const { title, content, excerpt, uri, date } = response?.data?.posts?.nodes;
  const posts = response?.data?.posts?.nodes;

  //   const pageInfo = response?.data?.posts?.pageInfo;
  const { hasPreviousPage, hasNextPage } = response?.data?.posts?.pageInfo;

  return (
    <>
      <div className="mb-32 grid text-center lg:max-w-8xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {posts.map((post) => {
          return <PostCard key={post.id} {...post} />;
        })}
      </div>
      <div className="w-full px-4 flex items-center justify-between pt-20">
        {/* {hasPreviousPage && ( */}
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <a href={`/page/2`} className="mb-3 text-2xl font-semibold">
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              &lt;-
            </span>
            {"   "}
            Previous Page
          </a>
        </div>
        {/* )} */}
        {/* {hasNextPage && ( */}
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <a href={`/page/2`} className="mb-3 text-2xl font-semibold">
            Next Page
            {"   "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </a>
        </div>

        {/* )} */}
      </div>

      {/* <PageNavigation>

      </PageNavigation> */}
    </>
  );
}
