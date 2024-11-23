import { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";

const App = () => {
  const [user, setUser] = useState(null);

  // handling the login page
  const hanldeLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin")
      console.log("this is admin");
    } else if (email == "user@me.com" && password == "123") {
      setUser("employee")
      console.log("this is user");  
    } else {
      alert("Invalid Cridentials❗");
    }
  };
  return (
    <>
      {!user ? <Login handleLogin={hanldeLogin} /> : ""}
      {user == "admin" ? <AdminDashboard /> : ""}
      {user == "employee" ? <EmployeeDashboard /> : ""}
    </>
  );
};

export default App;
