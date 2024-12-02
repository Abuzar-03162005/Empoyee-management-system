/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const ShowTaskNumbers = ({data}) => {
  return (
    <>
      <div className="flex justify-between w-full gap-4 mt-14">
        <div className="w-[45%] bg-blue-600 px-10 py-6 rounded-xl">
          <h2 className="text-5xl font-bold">{data.taskCounts.newTask}</h2>
          <h3 className="text-2xl font-semibold">New Task</h3>
        </div>
        <div className="w-[45%] bg-green-600 px-10 py-6 rounded-xl">
          <h2 className="text-5xl font-bold">{data.taskCounts.completed}</h2>
          <h3 className="text-2xl font-semibold">Completed</h3>
        </div>
        <div className="w-[45%] bg-yellow-600 px-10 py-6 rounded-xl">
          <h2 className="text-5xl font-bold">{data.taskCounts.active}</h2>
          <h3 className="text-2xl font-semibold">Accepted</h3>
        </div>
        <div className="w-[45%] bg-red-700 px-10 py-6 rounded-xl">
          <h2 className="text-5xl font-bold">{data.taskCounts.failed}</h2>
          <h3 className="text-2xl font-semibold">Failed</h3>
        </div>
      </div>
    </>
  );
};

export default ShowTaskNumbers;
