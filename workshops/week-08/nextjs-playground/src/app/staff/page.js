import Link from "next/link";

// export default function StaffPage() {
//   return (
//     <>
//       <h1>This is the Staff Page</h1>
//       <ol>
//         <li>
//           <Link href={"/staff/manny"}>Manny</Link>
//         </li>
//         <li>
//           <Link href={"/staff/joe"}>Joe</Link>
//         </li>
//       </ol>
//     </>
//   );
// }

export default async function StaffPage({ searchParams }) {
  const queryString = await searchParams;
  const response = await fetch(`https://dummyjson.com/users`);
  const data = await response.json();
  const wrangleData = data.users;

  if (queryString.sort === "asc") {
    wrangleData.sort((a, b) => {
      return a.firstName.localeCompare(b.firstName);
    });
  } else if (queryString.sort === "desc") {
    wrangleData.sort((a, b) => {
      return b.firstName.localeCompare(a.firstName);
    });
  }

  const elements = wrangleData.map((element) => {
    return (
      <div key={element.id}>
        <Link href={`/staff/${element.id}`}>
          {element.firstName} {element.lastName}
        </Link>
      </div>
    );
  });

  return (
    <>
      <Link href={`/staff?sort=asc`}>Sort Asc</Link>
      <Link href={`/staff?sort=desc`}>Sort Desc</Link>
      <Link href={`/staff`}>Reset</Link>
      <h1>This is the Staff Page</h1>
      {elements}
    </>
  );
}
