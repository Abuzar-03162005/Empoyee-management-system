/* eslint-disable no-unused-vars */
import React from "react";

const TaskList = ({data}) => {
  return (
    <div
      id="TaskList"
      className="flex justify-start items-center overflow-x-auto gap-5 flex-nowrap h-[59%] w-full mt-7 py-4"
    >
      {/* Single Card  */}
      <div className="singleEmployeeCard flex-shrink-0 p-5 h-full w-[24%] bg-yellow-600 rounded-xl overflow-auto">
        
        {/*--------------- Priority ___AND___ Date ---------------*/}
        
        <div className="flex justify-between items-center">
          <h2 className="px-3 py-1 bg-red-700 rounded-md font-medium">High</h2>
          <h4 className="text-black font-semibold">20 Feb 2023</h4>
        </div>
        
        {/*--------------- Title ___AND___ Description ----------------*/}
        
        <div className=" flex flex-col justify-center gap-5 items-start mt-4 ">
          <h2 className="text-2xl font-bold">
            <span className="font-bold font-serif text-black">Task : </span>
            Complete The Project
          </h2>
          <div>
            <p id="para" className="text-[1.09rem]">
              <span className="font-bold font-serif text-xl text-black">
                Discription :{" "}
              </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              aspernatur corrupti reiciendis autem iure error sequi laborum?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
