import React from "react";
import { SellerSideBar } from "./SellerSideBar";
import { Link } from "react-router-dom";
import { SellerAnalysis } from "./SellerAnalysis";

export const SellerDashboard = () => {
  return (
    <>
      <div className="container mx-auto p-8 lg:pt-[10vh] md:pt-[8vh] bg-slate-50 flex flex-col q-[100vw] h-auto    text-white">
        <div className="mt-5">
          <SellerAnalysis />
        </div>{" "}
      </div>
    </>
  );
};
