import { useParams } from "react-router";

export const Profile = () => {
  const params = useParams();
  return (
    <>
      <h1>User Profile: {params.username}</h1>
    </>
  );
};
