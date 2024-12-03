/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  // console.log(data);
  return (
    <div
      id="TaskList"
      className="flex justify-start items-center overflow-x-auto gap-5 flex-nowrap h-[59%] w-full mt-7 py-4"
    >
      {data.tasks.map((elem) => {
        if (elem.active) {
          return <AcceptTask key={elem.id} />;
        }
        if (elem.completed) {
          return <CompleteTask key={elem.id} />;
        }
        if (elem.newTask) {
          return <NewTask key={elem.id} />;
        }
        if (elem.failed) {
          return <FailedTask key={elem.id} />;
        }
      })}
    </div>
  );
};

export default TaskList;
