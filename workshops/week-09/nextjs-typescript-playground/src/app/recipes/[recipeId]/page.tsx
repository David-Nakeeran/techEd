import { recipeType } from "@/types/dataTypes";
import Image from "next/image";
export default async function RecipeIdPage({
  params,
}: {
  params: Promise<{ recipeId: number }>;
}) {
  const { recipeId } = await params;

  const response = await fetch(`https://dummyjson.com/recipes/${recipeId}`);
  const data: recipeType = await response.json();

  return (
    <>
      <h1>This is the detail page</h1>
      <div key={data.id}>
        <h2>{data.name}</h2>
        <p>{data.cuisine}</p>
        <Image src={data.image} alt={data.name} width={200} height={300} />
        <p>{data.rating}</p>
      </div>
    </>
  );
}
