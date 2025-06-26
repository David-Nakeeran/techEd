"use client";
import Link from "next/link";
import { useEffect } from "react";

// Error page runs in the client
export default function GlobalErrorPage({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <>
      <h1>I am an Error page!</h1>
      <p>{error.message}</p>
      <Link href={"/"}>Go home</Link>
      <button onClick={() => reset()}>Try Again</button>
    </>
  );
}
