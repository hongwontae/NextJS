import Link from "next/link";
import { DUMMY_NEWS } from "@/DUMMY-DATA";
import NewsList from "@/components/news-list";

function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <NewsList news={DUMMY_NEWS}></NewsList>
     
    </>
  );
}

export default NewsPage;
