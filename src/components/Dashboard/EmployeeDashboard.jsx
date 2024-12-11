/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import EmployeeHeader from "../Other/EmployeeHeader";
import ShowTaskNumbers from "../Other/ShowTaskNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = (props) => { 
  return (
    <div className="p-10 bg-[#1c1c1c] h-screen flex-col gap-x-8">
      {/* header for the employee dashboard */}
      <EmployeeHeader data={props.employeeData}  changeUser = {props.changeUser}/>
      {/* Tasks content */}
      <ShowTaskNumbers data={props.employeeData} />
      {/* Task List {{CARDS}} */}
      <TaskList data={props.employeeData} />
    </div>
  );
};

export default EmployeeDashboard;
