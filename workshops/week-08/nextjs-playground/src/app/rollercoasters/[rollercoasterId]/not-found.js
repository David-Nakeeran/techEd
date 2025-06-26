import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h1>Sorry I can&aspos;t find this rollercoaster</h1>
      <p>Go back to the main rollercoaster list</p>
      <Link href={"/rollercoasters"}>Rollercoaster List</Link>
    </>
  );
}
