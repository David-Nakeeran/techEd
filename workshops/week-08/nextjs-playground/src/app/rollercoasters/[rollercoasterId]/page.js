import { db } from "@/utils/dbConnection";
import { notFound } from "next/navigation";

export default async function RollercosterIdPage({ params }) {
  const idParams = await params.rollercoasterId;

  async function dataFetch() {
    "use server";
    try {
      const query = await db.query(
        `SELECT * FROM rollercoasters WHERE id = $1`,
        [idParams]
      );
      return query.rows;
    } catch (error) {
      console.error(error);
    }
  }

  const rollercoasterData = (await dataFetch()) || [];

  if (rollercoasterData.length === 0) {
    notFound();
  }

  const rollercoasterElements = rollercoasterData.map((elements) => {
    return (
      <div key={elements.id}>
        <h2>{elements.name}</h2>
        <p>{elements.height}</p>
        <p>{elements.country}</p>
      </div>
    );
  });

  return (
    <>
      <h1>Ths is the individual rollercoaster page</h1>
      {rollercoasterElements}
    </>
  );
}
