import { Link, Outlet } from "react-router";
import { UserOrders } from "../components/UserOrders";

export const UserProfile = () => {
  return (
    <>
      <h1>Profile page</h1>
      <Outlet />
    </>
  );
};
