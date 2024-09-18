import React, { useEffect, useState } from "react";
import { UseHeaderNav } from "../../../Context/HeaderNav.context";
import { Link } from "react-router-dom";
export const KidsNav = () => {
  const { Kids } = UseHeaderNav();

  return (
    <>
      <div className=" absolute z-10 w-[85vw]  h-auto pb-16 bg-white  left-[3.5%] ">
        <div className="w-[100vw] h-[6.5vh] bg-gray-50 box-border border-t-[0.3px] flex items-center ">
          <h2 className="ml-[8vw] text-2xl font-thin text-gray-700">
            CATEGORIES
          </h2>
        </div>
        <div className="pt-4 w-[100%] h-full  flex box-border border-t-[0.3px] ">
          {/* First div */}
          <div className="h-full w-[23%]  ">
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
          <div className="h-full  w-[23%] ">
            {/*  BOYS */}
            <div className=" flex flex-col  ">
              <h2 className="font-black mb-3">BOYS</h2>
              {Kids?.BOYS?.SubCategory?.map((value) => {
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
            {/* Fetured */}
            <div className="w-full flex flex-col mt-3 ">
              <h2 className="font-black mb-2"> FETURED</h2>
              {Kids?.FEATURED?.SubCategory?.map((value) => {
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
          <div className="h-full w-[23%]">
            {/* Accessories */}
            <div className="w-full flex flex-col  ">
              <h2 className="font-black mb-3">GIRLS</h2>
              {Kids?.GIRLS?.SubCategory?.map((value) => {
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
            {/* Precious Jewellery */}
            <div className="w-full flex flex-col mt-3 ">
              <h2 className="font-black mb-2">TOYS AND BABYCARE</h2>
              {Kids?.TOYS_AND_BABYCARE?.SubCategory?.map((value) => {
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

            {/* <div className="w-full flex flex-col mt-3 ">
              <h2 className="font-black mb-2"> INNERWEAR</h2>
              {Men?.Innerwear?.SubCategory?.map((value) => {
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
            {/* <div className="h-full w-[30%] "> */}
            {/* FEATURED */}
            {/* <div className="w-full flex flex-col  ">
              <h2 className="font-black mb-3">FEATURED</h2>
              {Men?.Fetured?.SubCategory?.map((value) => {
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
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
