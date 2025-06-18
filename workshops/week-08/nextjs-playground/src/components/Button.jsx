// This is a client component as it had an event and state

"use client";

import { useState } from "react";

export default function Button() {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <>
      <button onClick={handleClick}>Click me</button>
      <p>{likes}</p>
    </>
  );
}
