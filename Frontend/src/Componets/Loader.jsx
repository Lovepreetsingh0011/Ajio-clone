import React from "react";

export const Loader = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="flex space-x-2">
          <div className="w-4 h-10 bg-blue-500 animate-pulse"></div>
          <div className="w-4 h-10 bg-blue-500 animate-pulse delay-100"></div>
          <div className="w-4 h-10 bg-blue-500 animate-pulse delay-200"></div>
        </div>
      </div>
    </>
  );
};
