/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTasks = () => {
  const userdata = useContext(AuthContext);
  return (
    <div className="alltasks bg-[#1c1c1c] px-5 pb-5 mt-5 mb-5 rounded-lg max-h-96 overflow-auto">
      <div className="flex justify-between items-center py-8 px-1 sticky top-0 bg-[#1c1c1c] h-10 text-xl font-semibold">
        <h3 className="flex gap-2 w-[33%] text-start text-xl text-yellow-500">
          EMPLOYEE
          <img
            src="/employee.png"
            className="imageStatus"
            alt="img"
            width={27}
            height={20}
          />
        </h3>
        <h3 className="text-center flex justify-center gap-2 w-[33%] text-orange-600">
          NEW TASK
          <img
            src="/Task.png"
            className="imageStatus"
            alt="img"
            width={27}
            height={10}
          />
        </h3>
        <h3 className="text-center flex justify-center gap-2 w-[33%] text-green-500">
          ACTIVE
          <img
            src="/Active.png"
            className="imageStatus"
            alt="img"
            width={28}
            height={20}
          />
        </h3>
        <h3 className="text-center flex justify-center gap-2 w-[33%] text-blue-500">
          COMPLETED
          <img
            src="/completed.png"
            className="imageStatus"
            alt="img"
            width={28}
            height={20}
          />
        </h3>
        <h3 className="text-end flex justify-end gap-2 w-[33%] text-red-500">
          FAILED
          <img
            src="/failed.png"
            className="imageStatus"
            alt="img"
            width={28}
            height={20}
          />
        </h3>
      </div>
      <div className="*:text-[17px] *:font-semibold">
        {userdata.employees.map((elem, idx) => {
          return (
            <div className="flex justify-between border-2 border-stone-700 px-4 py-2 rounded-lg mb-2" key={idx}>
              <h2 className="w-[33%] text-start">{elem.firstName}</h2>
              <h2 className="w-[33%] text-center pr-4">
                {elem.taskCounts.newTask}
              </h2>
              <h3 className="w-[33%] text-center">{elem.taskCounts.active}</h3>
              <h3 className="w-[33%] text-center">
                {elem.taskCounts.completed}
              </h3>
              <h3 className="w-[33%] text-end">{elem.taskCounts.failed}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTasks;
