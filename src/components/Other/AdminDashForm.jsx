import React from "react";
import { useState } from "react";

const AdminDashForm = () => {
  const [title, setTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState(""); 
  const [task, setTask] = useState([]); 

  const submitHandler = (e) => {
    e.preventDefault();
    setTitle("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
    setDescription("");

    // console.log(title)
    // console.log(taskDate)
    // console.log(assignTo)
    // console.log(category)
    // console.log(description)
  };
  return (
    <div className="p-5 bg-[#1c1c1c] rounded-2xl mt-7">
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
              required
              className="text-white bg-transparent w-4/5 rounded-lg outline-none px-1 py-2 border-[2px] border-gray-500 mb-5"
              type="text"
              placeholder="Make a UI for the dashboard"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5 font-medium">Date</h3>
            <input
              required
              className="text-white bg-transparent w-4/5 rounded-lg outline-none px-1 py-2 border-[2px] border-gray-500 mb-5"
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
              required
              className="text-white bg-transparent w-4/5 rounded-lg outline-none px-1 py-2 border-[2px] border-gray-500 mb-5"
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
              required
              className="text-white bg-transparent w-4/5 rounded-lg outline-none px-1 py-2 border-[2px] border-gray-500 mb-5"
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
            className="w-full h-60 text-base py-2 px-4 rounded-lg outline-none bg-transparent border-[2px] border-gray-500 "
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
