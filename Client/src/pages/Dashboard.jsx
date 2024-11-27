import React from "react";

const Dashboard = () => {
  return(
  <div className="min-h-screen flex items-center justify-center bg-black">
    <h1>Welcome, {user?.username}!</h1>
      {user?.role === "User" && <p>You have User privileges.</p>}
      {user?.role === "Admin" && <p>You have admin privileges.</p>}
      {user?.role === "Moderator" && <p>You can moderate content.</p>}
  </div>);
};

export default Dashboard;
