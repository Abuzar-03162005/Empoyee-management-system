/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../Other/AdminHeader";
import AdminDashForm from "../Other/AdminDashForm";
import AllTasks from "../Other/AllTasks";

const AdminDashboard = (props) => {
  return (
    <div className="h-screen w-full p-10">
      {/* HEADER */}
      <Header changeUser = {props.changeUser}/>
      {/* FORM TO ASSIGN TASK */}
      <AdminDashForm />
      {/* Tasks Given To Employees*/}
      <AllTasks />
    </div>
  );
};

export default AdminDashboard;
