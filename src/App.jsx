/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";
import { setLocalStorage } from "./utils/LocalStorage";
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  // handling the login page
  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser("admin"); // Set the user to admin
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => email === e.email && password === e.password
      ); // Find the employee in the employees array
      if (employee) {
        setUser("employee"); // Set the user to employee
        setLoggedInUserData(employee); // Set the logged-in user data
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      } else {
        toast.error("Invalid Credentials ☹️");
      }
    }
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userdata = JSON.parse(loggedInUser);
      setUser(userdata.role);
      setLoggedInUserData(userdata.data);
    }
  }, []);

  return (
    <>
      <Toaster />
      {/* doing the conditional rendering based on the user state */}
      {!user ? (
        <Login handleLogin={handleLogin}  />
      ) : user == "admin" ? (
        <AdminDashboard />
      ) : user == "employee" ? (
        <EmployeeDashboard employeeData={loggedInUserData} />
      ) : (
        ""
      )}
    </>
  );
};

export default App;
