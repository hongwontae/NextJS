import Link from "next/link";
import ClientHeader from "./ClientHeader";

function MainHeader() {
  return (
    <>
      <header className="p-4">
        <ul className="grid grid-rows-1 grid-cols-12 text-center gap-4">
         <ClientHeader href={'/'}>Home</ClientHeader>
         <ClientHeader href={'/news'}>News</ClientHeader>
         <ClientHeader href={'/archive'}>Archive</ClientHeader>
         <ClientHeader href={'/recommend'}>Recommend</ClientHeader>
         <ClientHeader href={'/test'}>Test</ClientHeader>
        </ul>
      </header>
    </>
  );
}

export default MainHeader;
