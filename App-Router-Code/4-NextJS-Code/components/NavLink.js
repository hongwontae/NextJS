'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ href, children }) {
  const pathName = usePathname();

  return (
    <>
      <Link className={pathName.startsWith(href) ? "active" : undefined} href={href}>
        {children}
      </Link>
    </>
  );
}

export default NavLink;
