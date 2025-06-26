"use client";

import Link from "next/link";
import ActiveLink from "@/components/ActiveLink";
import headerStyles from "./header.module.css";

export default function HeaderNav() {
  return (
    <nav className={headerStyles.nav}>
      <Link href={"/"} className={headerStyles.link}>
        Home
      </Link>
      {/* <Link href={"/about"} className={headerStyles.link}>
          About
        </Link> */}
      <ActiveLink href="/about">About</ActiveLink>
      <Link href={"/staff"} className={headerStyles.link}>
        Staff
      </Link>
      <Link href={"/rollercoasters"} className={headerStyles.link}>
        Roller Coasters
      </Link>
      <Link href={"/new-rollercoaster"} className={headerStyles.link}>
        New Rollercoaster
      </Link>
    </nav>
  );
}
