// Server component "/new-rollercoaster"
import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function NewRollercoasterPage() {
  async function handleSubmit(formData) {
    // We need to tell Next to run this function in the server
    "use server";
    // collect the form data and insert it into the db
    formData = {
      name: formData.get("name"),
      height: formData.get("height"),
      country: formData.get("country"),
    };

    // insert the data into the database
    await db.query(
      `INSERT INTO rollercoasters (name, height, country) Values($1, $2, $3)`,
      [formData.name, formData.height, formData.country]
    );

    // when we submit new data into the table, we need to revalidate the cache
    revalidatePath("/rollercoasters");
    // we can also redirect the user to the rollercoasters page, so they see the new data there
    redirect("/rollercoasters");
  }

  return (
    <>
      <h1>This is the form page</h1>
      <form action={handleSubmit}>
        <fieldset>
          <legend>Rollercoasters&apos;s Form</legend>
          <label htmlFor="name">Rollercoaster Name:</label>
          <input
            name="name"
            type="text"
            placeholder="Enter name of rollercoaster"
            required
          ></input>
          <label htmlFor="height">Rollercoaster Height:</label>
          <input
            name="height"
            type="number"
            placeholder="Enter height requirement"
            min={0}
            required
          ></input>
          <label htmlFor="country">Rollercoaster Country:</label>
          <input
            name="country"
            type="text"
            placeholder="Enter Country"
            required
          ></input>
        </fieldset>
        <button type="submit">Submit Rollercoaster</button>
      </form>
    </>
  );
}
