import { DUMMY_NEWS } from "@/DUMMY-DATA";
import { notFound } from "next/navigation";

function ImagePage({ params }) {
  const image = params.slug;

  const currentItem = DUMMY_NEWS.find((ele) => {
    return ele.slug === image;
  });

  if (!currentItem) {
    notFound();
  }

  return (
    <>
      <div className="fullscreen-iamge">
        <img src={`/images/news/${currentItem.image}`}></img>
      </div>
    </>
  );
}

export default ImagePage;
