import Link from "next/link";

export default function Header() {
  return (
    <>
      <h1>This is a Header</h1>
      <nav>
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/staff"}>Staff</Link>
      </nav>
    </>
  );
}
