async function delay(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

export default async function SlowComponent() {
  await delay(5000);
  return (
    <>
      <h1 className="text-amber-600">This is slow on purpose</h1>
      <h2 className="text-amber-600">Sloooooow</h2>
    </>
  );
}
