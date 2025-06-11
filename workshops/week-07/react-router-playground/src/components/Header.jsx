import { NavLink, Link } from "react-router";

export const Header = ({ username }) => {
  return (
    <>
      <h1>Headers</h1>
      <nav>
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "active-links" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) => (isActive ? "active-links" : "")}
        >
          About
        </NavLink>
        <NavLink
          to={"contact"}
          className={({ isActive }) => (isActive ? "active-links" : "")}
        >
          Contact
        </NavLink>
        <Link to={`/userprofile/${username}`}>My Profile</Link>
        <NavLink
          to={"form"}
          className={({ isActive }) => (isActive ? "active-links" : "")}
        >
          Form
        </NavLink>
        <NavLink
          to={"dryform"}
          className={({ isActive }) => (isActive ? "active-links" : "")}
        >
          Dry Form
        </NavLink>
      </nav>
    </>
  );
};
