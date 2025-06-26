import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h1>The page you were looking for doesn&apos;t exist</h1>
      <Link href={"/"}>Go Home</Link>
    </>
  );
}
