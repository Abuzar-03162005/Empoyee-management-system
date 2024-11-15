import React from "react";

const AllTasks = () => {
  return (
    <div className="alltasks bg-[#1c1c1c] px-5 pb-5 mt-5 rounded-lg h-80 overflow-auto">
      <div className="flex justify-between items-center py-8 px-1  sticky top-0 bg-[#1c1c1c] h-10 text-xl font-semibold">
        <h3 className="text-start"> EMPLOYEE 👩🏻‍💻</h3>
        <h3 className="">TASK ⚒️ </h3>
        <h3 className="text-end flex gap-2">
          STATUS
          <img
            src="/updates.png"
            className="imageStatus"
            alt="img"
            width={28}
            height={20}
          />
        </h3>
      </div>
      <div>
        <div className="flex justify-between bg-red-800 px-4 py-2 rounded-lg mb-2">
          <h2>John</h2>
          <h2>Make Some Changes In UI</h2>
          <h3>Status</h3>
        </div>
        <div className="flex justify-between bg-blue-800 px-4 py-2 rounded-lg mb-2">
          <h2>John</h2>
          <h2>Make Some Changes In UI</h2>
          <h3>Status</h3>
        </div>
        <div className="flex justify-between bg-yellow-800 px-4 py-2 rounded-lg mb-2">
          <h2>John</h2>
          <h2>Make Some Changes In UI</h2>
          <h3>Status</h3>
        </div>
        <div className="flex justify-between bg-green-800 px-4 py-2 rounded-lg mb-2">
          <h2>John</h2>
          <h2>Make Some Changes In UI</h2>
          <h3>Status</h3>
        </div>
        <div className="flex justify-between bg-purple-800 px-4 py-2 rounded-lg mb-2">
          <h2>John</h2>
          <h2>Make Some Changes In UI</h2>
          <h3>Status</h3>
        </div>
        <div className="flex justify-between bg-orange-800 px-4 py-2 rounded-lg mb-2">
          <h2>John</h2>
          <h2>Make Some Changes In UI</h2>
          <h3>Status</h3>
        </div>
        <div className="flex justify-between bg-pink-800 px-4 py-2 rounded-lg mb-2">
          <h2>John</h2>
          <h2>Make Some Changes In UI</h2>
          <h3>Status</h3>
        </div>
        <div className="flex justify-between bg-gray-800 px-4 py-2 rounded-lg mb-2">
          <h2>John</h2>
          <h2>Make Some Changes In UI</h2>
          <h3>Status</h3>
        </div>
        <div className="flex justify-between bg-emerald-800 px-4 py-2 rounded-lg mb-2">
          <h2>John</h2>
          <h2>Make Some Changes In UI</h2>
          <h3>Status</h3>
        </div>
      </div>
    </div>
  );
};

export default AllTasks;
