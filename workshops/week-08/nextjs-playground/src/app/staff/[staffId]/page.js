import Link from "next/link";

export async function generateMetadata({ params, searchParams }, parent) {
  const staffIdParams = await params.staffId;
  // load the post
  const res = await fetch(`https://dummyjson.com/users/${staffIdParams}`);
  const data = await res.json();
  return {
    title: data.firstName,
  };
}

export default async function StaffIdPage({ params }) {
  const staffIdParams = await params.staffId;

  const response = await fetch(`https://dummyjson.com/users/${staffIdParams}`);
  const data = await response.json();

  return (
    <>
      <h1>This is the Username Page</h1>
      <h2>{`This is ${staffIdParams}'s Page`}</h2>
      <p>Staff name: {data.firstName}</p>
      <p>email: {data.email}</p>
      <Link href={`/staff`}>Go Back</Link>
    </>
  );
}
