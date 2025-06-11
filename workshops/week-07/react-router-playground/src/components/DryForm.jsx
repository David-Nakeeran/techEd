import { useState } from "react";

export const DryForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Personal Details</legend>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleFormData}
            placeholder="Write your username.."
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleFormData}
            placeholder="enter email"
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleFormData}
            placeholder="Enter your password"
            required
          />
          <button type="submit">Submit</button>
        </fieldset>
      </form>
      <p>{formData.username}</p>
      <p>{formData.email}</p>
      <p>{formData.password}</p>
    </>
  );
};
