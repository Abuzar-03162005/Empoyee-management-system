/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);
  // handling the login page 

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      console.log(user);
    } else if (authData && authData.employees.find((e)=> email == e.email && password == e.password)) {
      setUser("employee");
      console.log(user);
    } else {
      // showing the error message for wrong credentials with toast

      toast("Invalid Credentials", {
        icon: "❌",
        style: {
          borderRadius: "3rem",
          background: "#222",
          color: "#fff",
        },
      });
    }
  };

  return (
    <>
      <Toaster />

      {/* doing the conditional rendering based on the user state */}

      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user == "admin" ? (
        <AdminDashboard />
      ) : user == "employee" ? (
        <EmployeeDashboard />
      ) : (
        ""
      )}
    </>
  );
};

export default App;
