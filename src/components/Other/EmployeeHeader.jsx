/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const EmployeeHeader = ({data}) => {
  return (
    <div className="flex justify-between items-end text-xl">
      <h2 className="font-light tracking-[0.4rem]">
        Hello!
        <br />
        <span className="font-semibold text-5xl tracking-normal">
          {data.firstName}👋🏻
        </span>
      </h2>
      <button className="  px-3 py-1 bg-red-800 font-medium text-center rounded-md border-2 border-red-700 drop-shadow-[0_0_10px_rgba(220,38,38,1)] hover:bg-red-600 hover:drop-shadow-[0_0_30px_rgba(220,38,38,1)] transition-all duration-200">
        Log-Out
      </button>
    </div>
  );
};

export default EmployeeHeader;
