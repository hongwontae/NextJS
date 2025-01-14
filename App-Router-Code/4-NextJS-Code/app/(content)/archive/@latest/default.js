import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";

async function DefaultLatestPage() {
  const latestNews = await getLatestNews();

  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews}></NewsList>
    </>
  );
}

export default DefaultLatestPage;
