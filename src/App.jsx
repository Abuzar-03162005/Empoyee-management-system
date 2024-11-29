import { useContext, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  // handling the login page
  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser("admin"); // set the user to admin
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => email === e.email && password === e.password
      ); // find the employee in the employees array
      if (employee) {
        setUser("employee"); // change to employee
        setLoggedInUserData(employee); // set the logged in user data to get the employee data
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee" })
        );
      }
    } else {
      console.log("working");
    }
  };

  return (
    <>
      {/* doing the conditional rendering based on the user state */}
      {!user.role ? (
        <Login handleLogin={handleLogin} />
      ) : user.role == "admin" ? (
        <AdminDashboard />
      ) : user.role == "employee" ? (
        <EmployeeDashboard employeeData={loggedInUserData} />
      ) : (
        ""
      )}
    </>
  );
};

export default App;
