import Link from "next/link";

function NewsList({ news }) {
  return (
    <>
      <ul className="news-list">
        {news.map((ele) => {
          return (
            <>
              <li key={ele.id}>
                <Link href={`/news/${ele.slug}`}>
                  <img src={`/images/news/${ele.image}`} alt={ele.title}></img>
                  <sapn>{ele.title}</sapn>
                </Link>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
}

export default NewsList;
