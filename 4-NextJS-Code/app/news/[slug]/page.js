import { DUMMY_NEWS } from "@/DUMMY-DATA";
import Link from "next/link";
import { notFound } from "next/navigation";

function DynamicNewsPage({ params }) {
  const newsSlug = params.slug;
  const correctData = DUMMY_NEWS.find((ele) => {
    return ele.slug === newsSlug;
  });
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
