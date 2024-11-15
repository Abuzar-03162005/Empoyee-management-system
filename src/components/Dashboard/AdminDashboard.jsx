import React from "react";
import Header from "../Other/EmployeeHeader";
import AdminDashForm from "../Other/AdminDashForm";
import AllTasks from "../Other/AllTasks";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-10">
      {/* HEADER */}
      <Header />
      {/* FORM TO ASSIGN TASK */}
      <AdminDashForm />
      {/* Tasks Given To Employees*/}
      <AllTasks />
    </div>
  );
};

export default AdminDashboard;
