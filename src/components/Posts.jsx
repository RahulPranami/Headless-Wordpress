import { client } from "@/lib/apollo";
import { GET_POSTS, GET_MENU_ITEMS, GET_SITE_INFO } from "@/lib/queries";

export default async function Posts() {
  const response = await client.query({
    query: GET_POSTS,
  });
  const posts = response?.data?.posts?.nodes;

  return (
    <div>
      <div></div>
    </div>
  );
}
