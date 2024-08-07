import ModalBackDrop from "@/components/ModalBackdrop";
import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";

async function InterceptImagePage({ params }) {
  const image = params.slug;

  const currentItem = await getNewsItem(image);

  if (!currentItem) {
    notFound();
  }

  return (
    <>
      <ModalBackDrop></ModalBackDrop>

      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${currentItem.image}`}></img>
        </div>
      </dialog>
    </>
  );
}

export default InterceptImagePage;
