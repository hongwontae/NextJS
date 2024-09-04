"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function MainNavigation() {
  const pathname = usePathname();

  return (
    <>
      <nav className="flex justify-center gap-4 font-bold text-2xl list-none">
        <li>
          <Link href="/" className={pathname === "/" ? "text-red-400" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/view"
            className={pathname === "/view" ? "text-red-400" : ""}
          >
            Image-View
          </Link>
        </li>
        <li>
          <Link
            href={`/blog/1`}
            className={pathname === "/blog/1" ? "text-red-400" : ""}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            href={`/parallel`}
            className={pathname === "/parallel" ? "text-red-400" : ""}
          >
            Parallel
          </Link>
        </li>
        <li>
          <Link
            href={`/news`}
            className={pathname === "/news" ? "text-red-400" : ""}
          >
            Intercepting Route
          </Link>
        </li>
        <li>
          <Link
            href={`/test`}
            className={pathname === "/test" ? "text-red-400" : ""}
          >
            llll
          </Link>
        </li>
        <li>
          <Link
            href={`/api-test`}
            className={pathname === "/api-test" ? "text-red-400" : ""}
          >
            test-api
          </Link>
        </li>
      </nav>
    </>
  );
}

export default MainNavigation;
