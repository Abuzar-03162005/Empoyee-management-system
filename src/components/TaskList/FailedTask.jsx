/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const FailedTask = ({data}) => {
  return (
    <div className="singleEmployeeCard flex-shrink-0 p-5 h-full w-[24%] bg-yellow-600 rounded-xl overflow-auto">
      {/*--------------- Priority ___AND___ Date ---------------*/}

      <div className="flex justify-between items-center">
        <h2 className="px-3 py-1 bg-[#1c1c1c] rounded-md font-medium">{data.category}</h2>
        <h4 className="text-[#1c1c1c]  font-semibold">{data.TaskDate}</h4>
      </div>

      {/*--------------- Title ___AND___ Description ----------------*/}

      <div className=" flex flex-col justify-center gap-5 items-start mt-4 ">
        <h2 className="text-2xl font-bold">
          {data.taskTitle}
        </h2>
        <div>
          <p id="para" className="text-[1.09rem]">
            {data.taskDescription}
          </p>
        </div>
        <div className="flex flex-col justify-center items-stretch gap-2 w-full">
          <button className="bg-red-800 px-2 py-1 rounded-md">Failed</button>
        </div>
      </div>
    </div>
  );
};

export default FailedTask;
