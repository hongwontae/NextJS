import { getNewsItem } from "@/lib/news";
import Link from "next/link";
import { notFound } from "next/navigation";

async function DynamicNewsPage({ params }) {
  const newsSlug = params.slug;

  const correctData = await getNewsItem(newsSlug);

  if (!correctData) {
    notFound();
  }

  return (
    <>
      <article className="news-article">
        <header>
          <Link href={`/news/${correctData.slug}/image`}>
            <img
              src={`/images/news/${correctData.image}`}
              alt={correctData.title}
            ></img>
          </Link>

          <h1>{correctData.title}</h1>
          <time dateTime={correctData.date}>{correctData.date}</time>
        </header>
        <p>{correctData.content}</p>
      </article>
    </>
  );
}

export default DynamicNewsPage;
