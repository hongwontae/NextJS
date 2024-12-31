import { DummyData } from "@/data/DummyData";
import Link from "next/link";

function NewsPage() {
  return (
    <>
    <div className="text-center text-red-500 text-3xl font-bold mt-2">News-Home</div>
      <div className="grid grid-rows-auto grid-cols-3 gap-4 ml-14 mr-14 mt-10">
        {DummyData.map((ele) => {
          return (
            <div className="border-[1px] rounded-lg h-[4rem] p-2">
              <Link key={ele.id} href={`/news/${ele.id}`}>
                {ele.title}
              </Link>
              ;
            </div>
          );
        })}
      </div>
    </>
  );
}

export default NewsPage;
