import Link from "next/link";
import headerStyles from "@/components/header.module.css";

export default function Header() {
  return (
    <>
      <h1>This is a Header</h1>
      <nav className={headerStyles.nav}>
        <Link href={"/"} className={headerStyles.link}>
          Home
        </Link>
        <Link href={"/about"} className={headerStyles.link}>
          About
        </Link>
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
    </>
  );
}
