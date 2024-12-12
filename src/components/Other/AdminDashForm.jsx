/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider";

// AdminDashForm component to handle task assignment
const AdminDashForm = () => {
  // State variables to store task details
  const [title, setTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  // Get user data from AuthContext
  const userData = useContext(AuthContext);
  // Function to handle form submission
  const submitHandler = (e) => {
    // Prevent default form submission behavior
    e.preventDefault();
    // Create a new task object with task details
    const newTask = {
      active: false,
      newTask: true,
      failed: false,
      completed: false,
      title,
      taskDate,
      assignTo,
      category,
      description,
    };
    // Find the employee to assign the task to
    const data = userData.employees;
    console.log(data);
    const employee = data.find((elem) => elem.firstName === assignTo);
    // Check if the employee exists
    if (employee) {
      // Assign the task to the employee
      employee.tasks.push(newTask);
      console.log(employee);
      // Display a success toast notification
      toast.success(`Task Assigned Successfully to ${employee.firstName}`, {
        duration: 4000,
        style: {
          fontFamily: "revert",
          fontWeight: "500",
        },
      });
      // Clear the form fields
      setTitle("");
      setTaskDate("");
      setAssignTo("");
      setCategory("");
      setDescription("");
    } else {
      // Display an error toast notification if the employee does not exist
      toast.error("Please Correct The Employee Name", {
        duration: 4000,
        style: {
          fontWeight: "600",
        },
      });
    }
  };
  return (
    <div className="p-5 bg-[#1c1c1c] rounded-2xl mt-7">
      <Toaster />
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex justify-between items-start"
      >
        {/* creating 2 divs for the design */}
        {/* div number 1 contains the inputs fields */}
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5 font-medium">
              Task Title
            </h3>
            <input
              // required
              className="text-white bg-transparent w-4/5 rounded-lg outline-none px-1 py-2 border-[2px] border-stone-600 mb-5"
              type="text"
              placeholder="Make a UI for the dashboard"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5 font-medium">Date</h3>
            <input
              // required
              className="text-white bg-transparent w-4/5 rounded-lg outline-none px-1 py-2 border-[2px] border-stone-600 mb-5"
              type="date"
              onChange={(e) => setTaskDate(e.target.value)}
              value={taskDate}
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5 font-medium">
              Assign To
            </h3>
            <input
              // required
              className="text-white bg-transparent w-4/5 rounded-lg outline-none px-1 py-2 border-[2px] border-stone-600 mb-5"
              type="text"
              placeholder="Employee Name"
              onChange={(e) => setAssignTo(e.target.value)}
              value={assignTo}
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5 font-medium">
              Category
            </h3>
            <input
              // required
              className="text-white bg-transparent w-4/5 rounded-lg outline-none px-1 py-2 border-[2px] border-stone-600 mb-5"
              type="text"
              placeholder="Design , Dev , etc."
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            />
          </div>
        </div>
        {/* div no 2 contains the description field and button for a better UI experience */}
        <div className="flex flex-col justify-start w-1/2">
          <h3 className="text-sm text-gray-300 mb-0.5 font-medium">
            Description
          </h3>
          <textarea
            className="w-full h-60 text-base py-2 px-4 rounded-lg outline-none bg-transparent border-[2px] border-stone-600 "
            name=""
            id=""
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
          <button className="bg-green-800 py-2 rounded-lg mt-4 hover:drop-shadow-[0_0_10px_rgba(0,170,22,0.7)] transition-all duration-100">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminDashForm;

// ANOTHER METHODE TO ASSIGN THE TASK TO THE EMPLOYEE IS BY USING THE SELECT TAG INSTEAD OF INPUT TAG
// data.forEach((elem) => {
//   if (assignTo == elem.firstName) {
//     elem.tasks.push(newTask);
//     // console.log(elem);
//     // setting the form empty after the submittion of data
//     setTitle("");
//     setTaskDate("");
//     setAssignTo("");
//     setCategory("");
//     setDescription("");
//     toast.success(`Task Assigned Successfully to ${elem.firstName}`, {
//       duration: 4000,
//       style: {
//         fontFamily: "revert",
//         fontWeight: "500",
//       },
//     });
//   }
// });
