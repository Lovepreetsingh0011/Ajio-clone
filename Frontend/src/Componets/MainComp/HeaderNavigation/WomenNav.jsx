import React, { useEffect, useState } from "react";
import { UseHeaderNav } from "../../../Context/HeaderNav.context";
import { Link } from "react-router-dom";
export const WomenNav = () => {
  const { Women } = UseHeaderNav();

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
            {/* ETHNIC WEAR */}
            <div className=" flex flex-col  ">
              <h2 className="font-black mb-3">ETHNIC WEAR</h2>
              {Women?.ETHNICWEAR?.SubCategory?.map((value) => {
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
            {/* JEWELLERY */}
            <div className="w-full flex flex-col mt-3 ">
              <h2 className="font-black mb-2"> JEWELLERY</h2>
              {Women?.Jewellery?.SubCategory?.map((value) => {
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
            {/* LINGERIE & INNERWEAR */}
            <div className="w-full flex flex-col  ">
              <h2 className="font-black mb-3">LINGERIE & INNERWEAR</h2>
              {Women?.Innerwear?.SubCategory?.map((value) => {
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
            {/* ACCESSORIES */}
            <div className="w-full flex flex-col mt-3 ">
              <h2 className="font-black mb-2"> ACCESSORIES</h2>
              {Women?.Accessories?.SubCategory?.map((value) => {
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
            {/* Footwear */}
            <div className="w-full flex flex-col  ">
              <h2 className="font-black mb-3">FOOTWEAR</h2>
              {Women?.Footwear?.SubCategory?.map((value) => {
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
            <div className="w-full flex flex-col mt-3 ">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
