// import React, { useState } from "react";

// const Register = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = () => {
//     // Call API to register user
//     console.log("User registered", { username, password });
//   };

//   return (
//     <div>
//       <h2>Register</h2>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleSubmit}>Register</button>
//     </div>
//   );
// };

// export default Register;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("User");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log({ email, password, role });
    try {
      await api.post("/auth/register", { email, password, role });
      navigate("/login");
    } catch (error) {
      alert("Registration failed: " + error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-[#1c1c1c] p-8 rounded-lg shadow-lg max-w-md w-full">
    <h2 className="text-3xl font-semibold text-center text-white mb-6">Register</h2>
    
    <form onSubmit={handleRegister}>

    <div className="mb-4">
      <label className="block text-white-800 text-sm font-medium mb-2">Email</label>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-3 border bg-transparent border-gray-300 text-white rounded-lg focus:outline-none focus:border-gray-500"
      />
    </div>
  
    <div className="mb-4">
      <label className="block text-white-800 text-sm font-medium mb-2">Password</label>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-3 border bg-transparent border-gray-300 text-white rounded-lg focus:outline-none focus:border-gray-500"
      />
    </div>
  
    <div className="mb-4">
      <label className="block text-gray-300 text-sm font-medium mb-2">Role</label>
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none"
      >
        <option value="User">User</option>
        <option value="Moderator">Moderator</option>
        <option value="Admin">Admin</option>
      </select>
    </div>
  
    <button
      type="submit"
      className="w-full bg-black text-white font-semibold py-3 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 transition duration-200"
    >
      Register
    </button>
  </form>
  </div>
</div>

    // <form onSubmit={handleRegister}>
    //   <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
    //   <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
    //   <select value={role} onChange={(e) => setRole(e.target.value)}>
    //     <option value="User">User</option>
    //     <option value="Moderator">Moderator</option>
    //     <option value="Admin">Admin</option>
    //   </select>
    //   <button type="submit">Register</button>
    // </form>
  );
};

export default Register;

