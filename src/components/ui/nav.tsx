"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

export default function Nav() {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <Fragment>
      <Link className={`link ${pathname === "/" ? "active text-[#3c505c]" : ""}`} href="/">
        Main Page
      </Link>
      <Link className={`link ${pathname === "/skinsheet" ? "active text-[#3c505c]" : ""}`} href="/skinsheet">
        Skin Sheet
      </Link>
    </Fragment>
  );
}
