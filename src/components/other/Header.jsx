import React from "react";

const Header = (props) => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const username =
    loggedInUser?.role === "employee"
      ? loggedInUser?.data?.firstName
      : "Admin";

  const logOutUser = () => {
    localStorage.removeItem("loggedInUser");
    props.changeUser("");
  };

  return (
    <div className="flex flex-col sm:flex-row items-center sm:justify-between p-5 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-lg">
      {/* Greeting Section */}
      <div className="text-center sm:text-left mb-4 sm:mb-0">
        <h1 className="text-lg sm:text-2xl md:text-3xl font-medium text-white">
          Welcome Back,
        </h1>
        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white">
          {username} 👋
        </h2>
      </div>

      {/* Beta Version Tag and Logout Button */}
      <div className="flex flex-col items-center sm:items-end">
        <span className="bg-yellow-300 text-yellow-900 font-bold text-xs sm:text-sm px-3 py-1 rounded-full mb-2">
          Beta Version
        </span>
        <button
          onClick={logOutUser}
          className="bg-red-600 hover:bg-red-700 text-white font-medium text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Header;
