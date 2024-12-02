/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import EmployeeHeader from "../Other/EmployeeHeader";
import ShowTaskNumbers from "../Other/ShowTaskNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ employeeData }) => { 
  console.log(employeeData);
  return (
    <div className="p-10 bg-[#1c1c1c] h-screen flex-col gap-x-8">
      {/* header for the employee dashboard */}
      <EmployeeHeader data={employeeData} />
      {/* Tasks content */}
      <ShowTaskNumbers data={employeeData} />
      {/* Task List {{CARDS}} */}
      <TaskList data={employeeData} />
    </div>
  );
};

export default EmployeeDashboard;
