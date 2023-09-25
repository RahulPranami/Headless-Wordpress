import { client } from "@/lib/apollo";
import {
  GET_POSTS,
  GET_MENU_ITEMS,
  GET_SITE_INFO,
  GET_END_CURSOR,
} from "@/lib/queries";
import PostCard from "./PostCard";
import PageNavigation from "./PageNavigation";

export default async function Posts({ pageNo = 1 }) {
  const page = parseInt(pageNo);
  const postsPerPage = parseInt(process.env.POSTS_PER_PAGE);
  const postsCount = parseInt(
    pageNo !== 1 ? pageNo * postsPerPage : postsPerPage
  );
  let endCursor = "";

  if (1 !== pageNo) {
    const endCursorRes = await client.query({
      query: GET_END_CURSOR,
      variables: {
        first: postsCount,
      },
    });
    endCursor = endCursorRes?.data?.posts?.pageInfo?.endCursor;
  }

  const response = await client.query({
    query: GET_POSTS,
    variables: {
      after: endCursor,
      first: parseInt(postsPerPage),
    },
  });

  const posts = response?.data?.posts?.nodes;
  const { hasPreviousPage, hasNextPage } = response?.data?.posts?.pageInfo;

  return (
    <>
      <div className="mb-32 grid text-center lg:max-w-8xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {posts.map((post) => {
          return <PostCard key={post.id} {...post} />;
        })}
      </div>
      <PageNavigation
        page={page}
        hasNext={hasNextPage}
        hasPrev={hasPreviousPage}
      />
    </>
  );
}
