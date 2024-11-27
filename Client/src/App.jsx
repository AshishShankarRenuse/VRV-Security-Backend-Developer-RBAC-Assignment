// import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import { AuthProvider } from "./context/AuthContext";
// import Routes from "./routes";

// const App = () => {
//   return (
//     <Router>
//       <AuthProvider>
//         <Routes />
//       </AuthProvider>
//     </Router>
//   );
// };

// export default App;


import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
};

export default App;
