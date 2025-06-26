import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import { auth, currentUser } from "@clerk/nextjs/server";
import HeaderNav from "./HeaderNav";

// import Link from "next/link";
// import headerStyles from "@/components/header.module.css";

export default async function Header() {
  const { userId } = await auth();
  const user = await currentUser();
  console.log(user);
  return (
    <>
      <h1>This is a Header</h1>
      <HeaderNav />
      {/* <nav className={headerStyles.nav}>
        <Link href={"/"} className={headerStyles.link}>
          Home
        </Link> */}
      {/* <Link href={"/about"} className={headerStyles.link}>
          About
        </Link> */}
      {/* <ActiveLink href="/about">About</ActiveLink>
        <Link href={"/staff"} className={headerStyles.link}>
          Staff
        </Link>
        <Link href={"/rollercoasters"} className={headerStyles.link}>
          Roller Coasters
        </Link>
        <Link href={"/new-rollercoaster"} className={headerStyles.link}>
          New Rollercoaster
        </Link>
      </nav> */}
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal" />
        <SignUpButton mode="modal" />
      </SignedOut>
    </>
  );
}
