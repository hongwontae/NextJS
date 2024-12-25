import Link from "next/link";
export default function Home() {
  console.log("Home");

  return (
    <>
      <h1 className="text-center text-4xl p-4">HomePage</h1>
      <div className="grid grid-cols-4 grid-rows-2">
        <Link href={"/about"} className="col-span-2 text-center text-3xl">About</Link>
        <Link href={"/blog"} className="col-span-2 text-center text-3xl">blog</Link>
      </div>
    </>
  );
}
