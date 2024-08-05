import { DUMMY_NEWS } from "@/DUMMY-DATA";
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
          <img
            src={`/images/news/${correctData.image}`}
            alt={correctData.title}
          ></img>
          <h1>{correctData.title}</h1>
          <time dateTime={correctData.date}>{correctData.date}</time>
        </header>
        <p>{correctData.content}</p>
      </article>
    </>
  );
}

export default DynamicNewsPage;
