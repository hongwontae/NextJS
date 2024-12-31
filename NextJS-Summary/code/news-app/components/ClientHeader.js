"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function ClientHeader({ href, children }) {
  const path = usePathname();

  return (
    <>
      <li className="rounded-lg text-[1.5rem]">
        <Link
          href={href}
          className={`${path.startsWith(href) ? "bg-red-200" : undefined}`}
        >
          {children}
        </Link>
      </li>
    </>
  );
}

export default ClientHeader;
