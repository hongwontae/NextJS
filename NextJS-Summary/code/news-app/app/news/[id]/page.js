import { DummyData } from "@/data/DummyData";
import { notFound } from "next/navigation";

function NewsDetailPage({ params }) {

  const rightData = DummyData.find((ele) => {
    return ele.id == params.id;
  });

  if(!rightData){
    notFound(); 
  }

  return (
    <>
      <div className="grid grid-cols-1 grid-rows-3 h-64 items-center">
        <div className="text-center">News - {rightData.title}</div>
        <div className="text-center row-span-2 mr-20 ml-20">{rightData.desc}</div>
      </div>
    </>
  );
}

export default NewsDetailPage;
