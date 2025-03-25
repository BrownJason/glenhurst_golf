"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

class NavProps {
  date: string | undefined;
}

export default function Nav({ date }: NavProps) {
  const pathname = usePathname();

  console.log(date);

  return (
    <Fragment>
      <Link className={`link ${pathname === "/" ? "active text-[#3c505c]" : ""}`} href="/">
        Main Page
      </Link>
      <Link className={`link ${pathname === "/earnings" ? "active text-[#3c505c]" : ""}`} href="/earnings">
        Weekly/YTD Earnings
      </Link>
      <Link className={`link ${pathname.includes("skinsheet") ? "active text-[#3c505c]" : ""}`} href={"/skinsheet?week=" + date}>
        Skin Sheet
      </Link>
    </Fragment>
  );
}
