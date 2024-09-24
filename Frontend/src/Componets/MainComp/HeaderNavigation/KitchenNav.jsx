import React, { useEffect, useState } from "react";
import { UseHeaderNav } from "../../../Context/HeaderNav.context";
import { Link } from "react-router-dom";
export const KitchenNav = () => {
  const { Kitchen } = UseHeaderNav();

  return (
    <>
      <div className=" absolute z-10 w-[88vw]  h-auto pb-16 bg-white  left-[3.5%] ">
        <div className="w-[100vw] h-[6.5vh] bg-gray-50 box-border border-t-[0.3px] flex items-center ">
          <h2 className="ml-[8vw] text-2xl font-thin text-gray-700">
            CATEGORIES
          </h2>
        </div>
        <div className="pt-4 w-[100%] h-full  flex box-border border-t-[0.3px] ">
          {/* First div */}
          <div className="h-full w-[22%]  ">
            <div className="w-full flex flex-col  pl-3  text-black font-serif">
              <h3 className="">CLOTHINGS</h3>
              <h3 className="pt-3">FOOTWEAR</h3>
              <h3 className="pt-3">ACCESROIES</h3>
              <h3 className="pt-4">ALL THATS NEW</h3>
              <div className="w-full flex flex-col pt-3 text-gray-600">
                <p className="pt-[1.5]">clothings</p>
                <p className="pt-[1.5]">footwear</p>
                <p className="pt-[1.5]">accessories</p>
              </div>
              <h2 className="pt-5">
                GROMING <span className="text-sm">🆕</span>
              </h2>
            </div>
          </div>
          {/* Second div */}
          <div className="h-full  w-[24%] ">
            {/* KITCHEN */}
            <div className=" flex flex-col  ">
              <h2 className="font-black mb-3">KITCHEN</h2>
              {Kitchen?.Kitchen?.SubCategory?.map((value) => {
                return (
                  <Link
                    key={value.id}
                    className="pt-[0.5] mr-auto text-gray-500 hover:border-b-[1.5px] hover:border-gray-400  "
                  >
                    {value.Name}
                  </Link>
                );
              })}
            </div>
            {/* DINING */}
            <div className="w-full flex flex-col mt-3 ">
              <h2 className="font-black mb-2"> DINING</h2>
              {Kitchen?.Dining?.SubCategory?.map((value) => {
                return (
                  <Link
                    key={value.id}
                    className="pt-[0.5] mr-auto text-gray-500 hover:border-b-[1.5px] hover:border-gray-400"
                  >
                    {value.Name}
                  </Link>
                );
              })}
            </div>
          </div>
          {/* Third div */}
          <div className="h-full w-[25%]">
            {/* HOME DECOR */}
            <div className="w-full flex flex-col  ">
              <h2 className="font-black mb-3">HOME DECOR</h2>
              {Kitchen?.Home_Decor?.SubCategory?.map((value) => {
                return (
                  <Link
                    key={value.id}
                    className="pt-[0.5] mr-auto text-gray-500 hover:border-b-[1.5px] hover:border-gray-400"
                  >
                    {value.Name}
                  </Link>
                );
              })}
            </div>
            {/* FESTIVE GIFTS */}
            <div className="w-full flex flex-col mt-3 ">
              <h2 className="font-black mb-2"> FESTIVE GIFTS</h2>
              {Kitchen?.Festive_Gifts?.SubCategory?.map((value) => {
                return (
                  <Link
                    key={value.id}
                    className="pt-[0.5] mr-auto text-gray-500 hover:border-b-[1.5px] hover:border-gray-400"
                  >
                    {value.Name}
                  </Link>
                );
              })}
            </div>
          </div>
          {/* fourth div */}
          <div className="h-full w-[25%] ">
            {/* BATH */}
            <div className="w-full flex flex-col  ">
              <h2 className="font-black mb-3">BATH</h2>
              {Kitchen?.Bath?.SubCategory?.map((value) => {
                return (
                  <Link
                    key={value.id}
                    className="pt-[0.5] mr-auto text-gray-500 hover:border-b-[1.5px] hover:border-gray-400"
                  >
                    {value.Name}
                  </Link>
                );
              })}
            </div>
            {/* Westen wear */}
            {/* <div className="w-full flex flex-col mt-3 ">
              <h2 className="font-black mb-3">WESTERN WEAR</h2>
              {Women?.Clothings?.SubCategory?.map((value) => {
                return (
                  <Link
                    key={value.id}
                    className="pt-[0.5] mr-auto text-gray-500 hover:border-b-[1.5px] hover:border-gray-400"
                  >
                    {value.Name}
                  </Link>
                );
              })}
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
