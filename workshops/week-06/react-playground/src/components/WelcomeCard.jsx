import React from "react";

export const WelcomeCard = ({ firstName, title }) => (
  <>
    <p>
      Welcome {title ? title : "you have no title yet"} {firstName}
    </p>
    <p>Hope you enjoy your stay!</p>
  </>
);
