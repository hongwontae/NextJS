import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";

async function ImagePage({ params }) {
  const image = params.slug;

  const currentItem = await getNewsItem(image);
  if (!currentItem) {
    notFound();
  }

  console.log('Image Gerenral Page')

  return (
    <>
      <div className="fullscreen-iamge">
        <img src={`/images/news/${currentItem.image}`}></img>
      </div>
    </>
  );
}

export default ImagePage;
