import { Link } from "react-router";

export const NotFound = () => {
  return (
    <>
      <h1>Page not found</h1>
      <Link to={"/"}>Home</Link>
    </>
  );
};
