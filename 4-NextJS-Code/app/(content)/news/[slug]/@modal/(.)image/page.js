'use client';
import { DUMMY_NEWS } from "@/DUMMY-DATA";
import { notFound, useRouter } from "next/navigation";

function InterceptImagePage({ params }) {

  const router = useRouter();
  

  const image = params.slug;

  const currentItem = DUMMY_NEWS.find((ele) => {
    return ele.slug === image;
  });

  if (!currentItem) {
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop" onClick={router.back}>
        <dialog className="modal" open>
          <div className="fullscreen-image">
            <img src={`/images/news/${currentItem.image}`}></img>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default InterceptImagePage;
