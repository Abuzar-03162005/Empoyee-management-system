/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  // useEffect(() => {
  //   if (authData) {
  //     const loggedInUser = localStorage.getItem("loggedInUser");
  //     if (loggedInUser) {
  //       setUser(loggedInUser.role);
  //     }
  //   }
  // }, [authData]);

  // handling the login page
  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin"); // set the user to admin
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => email == e.email && password == e.password
      ); // find the employee in the employees array
      if (employee) {
        setUser("employee"); // change to employee
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee" })
        );
      }
    } else {
      // showing the error message for wrong credentials with toast
      toast("Invalid Credentials", {
        icon: "❌",
        style: {
          borderRadius: "3rem", // "10px"
          background: "#222", // "dark gray"
          color: "#fff", // "white
        },
      }); // toast
    }
  };
  console.log("use has been updated "); // log the user
  return (
    <>
      <Toaster /> {/* toaster for showing the toast */}
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
