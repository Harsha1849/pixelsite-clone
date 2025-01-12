import React from "react";
import "../components/UserDetailsPage.css";

const UserDetailsPage = () => {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1 123-456-7890",
    address: "123 Main Street, Springfield",
  };

  return (
    <div className="user-details-page">
      <h1>User Details</h1>
      <ul>
        <li><strong>Name:</strong> {user.name}</li>
        <li><strong>Email:</strong> {user.email}</li>
        <li><strong>Phone:</strong> {user.phone}</li>
        <li><strong>Address:</strong> {user.address}</li>
      </ul>
    </div>
  );
};

export default UserDetailsPage;
