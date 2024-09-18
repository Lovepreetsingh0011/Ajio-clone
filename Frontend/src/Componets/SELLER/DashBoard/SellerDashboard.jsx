import React from "react";
import { SellerSideBar } from "./SellerSideBar";
import { Link } from "react-router-dom";
import { SellerAnalysis } from "./SellerAnalysis";

export const SellerDashboard = () => {
  return (
    <>
      <div className="flex  ">
        {/* First DIV */}
        <div className="none md:w-[20vw] ">
          <SellerSideBar />
        </div>
        {/* Second DIV */}
        <div className="lg:pt-[10vh] md:pt-[8vh] bg-slate-50 flex flex-col w-[100vw]   md:w-[80vw] h-[100vh]    text-white">
          <div className="mt-5">
            <SellerAnalysis />
          </div>{" "}
        </div>
      </div>
      ;{" "}
    </>
  );
};
