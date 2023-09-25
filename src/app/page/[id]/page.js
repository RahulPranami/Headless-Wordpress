import Image from "next/image";
import { client } from "@/lib/apollo";
import {
  GET_END_CURSOR,
  GET_PAGE_BY_SLUG,
  GET_PAGE_DATA,
  GET_POST,
} from "@/lib/queries";
import Header from "@/components/Header";
import Posts from "@/components/Posts";

export default async function Page({ params }) {
  const pageNo = params.id;
  const count = process.env.POSTS_PER_PAGE * pageNo;

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Posts pageNo={pageNo} />
      </main>
    </>
  );
}
