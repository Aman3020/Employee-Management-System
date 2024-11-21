import React from "react";

const TaskListNumbers = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-4">
      {/* New Task */}
      <div className="rounded-xl py-6 px-9 bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg transform hover:scale-105 transition-all duration-300">
        <h2 className="text-4xl font-bold text-white">{data.taskCounts.newTask}</h2>
        <h3 className="text-lg mt-2 font-medium text-white">New Task</h3>
      </div>
      
      {/* Completed Task */}
      <div className="rounded-xl py-6 px-9 bg-gradient-to-r from-green-500 to-green-700 shadow-lg transform hover:scale-105 transition-all duration-300">
        <h2 className="text-4xl font-bold text-white">{data.taskCounts.completed}</h2>
        <h3 className="text-lg mt-2 font-medium text-white">Completed Task</h3>
      </div>
      
      {/* Accepted Task */}
      <div className="rounded-xl py-6 px-9 bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-lg transform hover:scale-105 transition-all duration-300">
        <h2 className="text-4xl font-bold text-black">{data.taskCounts.active}</h2>
        <h3 className="text-lg mt-2 font-medium text-black">Accepted Task</h3>
      </div>
      
      {/* Failed Task */}
      <div className="rounded-xl py-6 px-9 bg-gradient-to-r from-red-500 to-red-700 shadow-lg transform hover:scale-105 transition-all duration-300">
        <h2 className="text-4xl font-bold text-white">{data.taskCounts.failed}</h2>
        <h3 className="text-lg mt-2 font-medium text-white">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
