import { db } from "@/utils/dbConnection";
import Pop from "@/components/Pop";
export default async function RollercoasterPage() {
  async function dataFetch() {
    try {
      const query = await db.query(`SELECT * FROM rollercoasters`);
      return query.rows;
    } catch (error) {
      console.error(error);
    }
  }

  const data = (await dataFetch()) || [];

  const rollercoasterElements = data.map((elements) => {
    return (
      <div key={elements.id}>
        <h1>{elements.name}</h1>
      </div>
    );
  });

  return (
    <>
      <h1 className="text-blue-500 p-[0.25em]">
        This is the rollercoatsers page
      </h1>
      {rollercoasterElements}
      <Pop />
    </>
  );
}
