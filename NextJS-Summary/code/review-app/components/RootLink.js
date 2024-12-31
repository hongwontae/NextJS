"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function RootLink() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <>
      <div className="grid grid-cols-6 grid-rows-1 gap-8 ml-8 mr-8 mt-8 mb-8">
        <Link
          href={"/about"}
          className={`${
            pathname.startsWith("/about") ? "text-red-400" : null
          } col-span-2 text-center text-3xl border-[1px]`}
        >
          About
        </Link>
        <Link
          href={"/blog"}
          className={`${
            pathname.startsWith("/blog") ? "text-red-400" : null
          } col-span-2 text-center text-3xl border-[1px]`}
        >
          blog
        </Link>
        <Link
          href={"/form"}
          className={`${
            pathname.startsWith("/form") ? "text-red-400" : null
          } col-span-2 text-center text-3xl border-[1px]`}
        >Form</Link>
      </div>
    </>
  );
}

export default RootLink;
