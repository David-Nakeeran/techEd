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

export default async function StaffPage() {
  const response = await fetch(`https://dummyjson.com/users`);
  const data = await response.json();
  const wrangleData = data.users;

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
      <h1>This is the Staff Page</h1>
      {elements}
    </>
  );
}
