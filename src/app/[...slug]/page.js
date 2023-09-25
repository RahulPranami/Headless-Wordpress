import Image from "next/image";
import { client } from "@/lib/apollo";
import { GET_PAGE_BY_SLUG, GET_PAGE_DATA } from "@/lib/queries";
import Header from "@/components/Header";

export async function generateMetadata({ params }) {
  const slug = Array.isArray(params.slug)
    ? "/" + params.slug.join("/")
    : params.slug;

  const response = await client.query({
    query: GET_PAGE_DATA,
    variables: {
      id: slug,
    },
  });
  const siteInfo = response?.data?.page;
  console.log(siteInfo);
  // if (siteInfo.title == null) {
  //   return;
  // }
  // return {
  //   title: title,
  // };
}

export default async function Page({ params }) {
  const slug = Array.isArray(params.slug)
    ? "/" + params.slug.join("/")
    : params.slug;

  // const response = await client.query({
  //   query: GET_PAGE_BY_SLUG,
  //   variables: {
  //     slug: slug,
  //   },
  // });

  const response = await client.query({
    query: GET_PAGE_DATA,
    variables: {
      id: slug,
    },
  });

  // const pageDetails = response?.data?.page;
  const { title, content, featuredImage, modifiedGmt } = response?.data?.page;
  // const pageData = response?.data?.page;
  // console.log(pageData);
  // const { title, content, featuredImage, modifiedGmt } = pageData;

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <h2 className="text-xl text-center pb-10">{title}</h2>

          <article dangerouslySetInnerHTML={{ __html: content }}></article>
        </div>
      </main>
    </>
  );
}
