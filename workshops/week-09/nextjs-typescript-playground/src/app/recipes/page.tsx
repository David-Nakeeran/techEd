import Image from "next/image";
import { recipeType } from "@/types/dataTypes";

export default async function Recipes() {
  const response = await fetch(`https://dummyjson.com/recipes`);
  const data = await response.json();

  const wrangledData = data.recipes;

  const recipeElements = wrangledData.map((element: recipeType) => {
    return (
      <div key={element.id}>
        <h2>{element.name}</h2>
        <p>{element.cuisine}</p>
        <Image
          src={element.image}
          alt={element.name}
          width={200}
          height={300}
        />
        <p>{element.rating}</p>
      </div>
    );
  });

  return (
    <>
      <h1> Recipes page</h1>
      {recipeElements}
    </>
  );
}
