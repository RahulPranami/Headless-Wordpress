import Image from "next/image";
// import Post from "@/components/post";
import { client } from "@/lib/apollo";
import { gql } from "@apollo/client";

export default async function Post({ params }) {
  const GET_POST = gql`
    query GetPost($id: ID!) {
      post(id: $id, idType: URI) {
        title
        content
        date
        uri
        author {
          node {
            firstName
            lastName
            name
          }
        }
      }
    }
  `;

  const response = await client.query({
    query: GET_POST,
    variables: {
      id: params.slug,
    },
  });
  const post = response?.data?.post;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <div className="siteHeader">
          <h1 className="title">{post.title}</h1>
          <p>
            ✍️ &nbsp;&nbsp;
            {`${post.author.node.name}`} | 🗓️ &nbsp;&nbsp;
            {new Date(post.date).toLocaleDateString()}
          </p>
        </div>
        <article dangerouslySetInnerHTML={{ __html: post.content }}></article>
      </div>
    </main>
  );
}
