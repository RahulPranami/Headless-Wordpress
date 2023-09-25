import Header from "@/components/Header";
import Image from "next/image";
import { client } from "@/lib/apollo";
import { GET_SITE_INFO } from "@/lib/queries";
import he from "he";
import Posts from "@/components/Posts";

export async function generateMetadata({ params }) {
  const siteData = await client.query({
    query: GET_SITE_INFO,
  });

  const siteInfo = siteData?.data?.generalSettings;
  return {
    title: he.decode(siteInfo.title),
    description: he.decode(siteInfo.description),
  };
}

export default function Home() {
  return (
    <>
      <main className="p-24">
        <Posts />
      </main>
    </>
  );
}
