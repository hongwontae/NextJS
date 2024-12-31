import Rocket from "@/image/rocket.png";
import Image from "next/image";

const DATA = [
  {
    id: 1,
    title: "Hello AND Fail",
  },
  {
    id: 2,
    title: "Looser sailter",
  },
  {
    id: 3,
    title: "Whose that",
  },
];

function About() {
  return (
    <>
      <h1 className="text-center text-4xl mt-10 mb-5">About Page</h1>
      <div className="flex justify-center">
        {/* Image 컴포넌트에 width과 height이 존재하지 않으면 원래 사진의 width과 height으로 크기가 결정 */}
        <Image src={Rocket} alt="Rocket Image" width={100} height={100}></Image>
      </div>

      <div className="grid grid-cols-3 text-center mt-10 text-[1.5rem] text-red-500">
        {DATA.map((ele) => {
          return <div key={ele.id}>{ele.title}</div>;
        })}
      </div>
    </>
  );
}

export default About;
