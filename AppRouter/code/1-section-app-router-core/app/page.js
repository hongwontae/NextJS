import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="text-4xl text-red-200 text-center mt-6">HomePage</div>
      <Link href={'/dynamic/3'}>Dynamic-3</Link>
    </>
  );
}
