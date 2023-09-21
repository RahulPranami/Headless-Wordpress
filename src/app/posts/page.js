import Image from "next/image";
import Post from "@/components/post";
import { client } from "@/lib/apollo";
import { gql } from "@apollo/client";

export default async function Posts() {
  const GET_POSTS = gql`
    query GetPosts {
      posts {
        nodes {
          title
          content
          uri
          date
        }
      }
    }
  `;

  const response = await client.query({
    query: GET_POSTS,
  });
  const posts = response?.data?.posts?.nodes;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {posts.map((post) => (
          <Post key={post.uri} post={post} />
        ))}
      </div>
    </main>
  );
}
