export default async function HomePage() {
  const response = await fetch(`http://localhost:3001/api/rollercoasters`);
  const data = await response.json();

  const rollercoasterElements = data.map((element) => {
    return (
      <div key={element.id}>
        <p>{element.name}</p>
      </div>
    );
  });
  return <>{rollercoasterElements}</>;
}
