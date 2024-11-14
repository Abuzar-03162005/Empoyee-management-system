/* eslint-disable no-unused-vars */
import React from "react";
import EmployeeHeader from "../Other/EmployeeHeader";
import ShowTaskNumbers from "../Other/ShowTaskNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = () => {
  return (
    <div className="p-10 bg-[#1c1c1c] h-screen flex-col gap-x-8">
      {/* header for the employee dashboard */}
      <EmployeeHeader />
      {/* Tasks content */}
      <ShowTaskNumbers />
      {/* Task List {{CARDS}} */}
      <TaskList />
    </div>
  );
};

export default EmployeeDashboard;
