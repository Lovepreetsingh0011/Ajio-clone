import React, { useEffect, useState } from "react";
import { UseHeaderNav } from "../../../Context/HeaderNav.context";
import { Link, useNavigate } from "react-router-dom";
export const MenNav = ({ setMennav }) => {
  const { Men } = UseHeaderNav();
  const navigate = useNavigate();
  const clickhandler = (id, catid) => {
    navigate(`/GetAllBySubCat/${id}/${catid}`);
    setMennav(false);
  };
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
            {/* WESTERN WEAR */}
            <div className=" flex flex-col  ">
              <h2 className="font-black mb-3">WESTERN WEAR</h2>
              {Men?.Clothings?.SubCategory?.map((value) => {
                return (
                  <button
                    // to={`/GetAllBySubCat/${value?._id}`}
                    onClick={() => clickhandler(value._id, Men?.Clothings._id)}
                    key={value._id}
                    className="pt-[0.5] mr-auto text-gray-500 hover:border-b-[1.5px] hover:border-gray-400  "
                  >
                    {value.Name}
                  </button>
                );
              })}
            </div>
            {/* FOOTWEAR */}
            <div className="w-full flex flex-col mt-3 ">
              <h2 className="font-black mb-2"> FOOTWEAR</h2>
              {Men?.Footwear?.SubCategory?.map((value) => {
                return (
                  <button
                    key={value._id}
                    onClick={() => clickhandler(value._id, Men?.Footwear?._id)}
                    className="pt-[0.5] mr-auto text-gray-500 hover:border-b-[1.5px] hover:border-gray-400"
                  >
                    {value.Name}
                  </button>
                );
              })}
            </div>
          </div>
          {/* Third div */}
          <div className="h-full w-[23%]">
            {/* Accessories */}
            <div className="w-full flex flex-col  ">
              <h2 className="font-black mb-3">ACCESSORIES</h2>
              {Men?.Accessories?.SubCategory?.map((value) => {
                return (
                  <button
                    key={value._id}
                    onClick={() =>
                      clickhandler(value._id, Men?.Accessories._id)
                    }
                    className="pt-[0.5] mr-auto text-gray-500 hover:border-b-[1.5px] hover:border-gray-400"
                  >
                    {value.Name}
                  </button>
                );
              })}
            </div>
            {/* Precious Jewellery */}
            <div className="w-full flex flex-col mt-3 ">
              <h2 className="font-black mb-2"> PRECIOUS JEWELLERY</h2>
              {Men?.PreciousJewellery?.SubCategory?.map((value) => {
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
            {/* INNERWEAR */}
            <div className="w-full flex flex-col mt-3 ">
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
            </div>
          </div>
          {/* fourth div */}
          <div className="h-full w-[30%] ">
            {/* FEATURED */}
            <div className="w-full flex flex-col  ">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
