import React, { useEffect, useState } from "react";
import { SellerSideBar } from "./SellerSideBar";
import axios from "axios";

export const SellerAccount = () => {
  const [data, setdata] = useState();

  const reqhandler = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/app/api/seller/get_seller"
      );
      setdata(res?.data?.data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    reqhandler();
  }, []);
  return (
    <>
      <div className="flex lg:pt-[9.5vh] md:pt-[8vh] ">
        {/* First DIV */}
        <div className="none md:w-[20vw]">
          <SellerSideBar />
        </div>
        {/* Second DIV */}
        <div className=" bg-slate-950 flex flex-col w-[100vw]  md:w-[80vw] h-[100vh] rounded-md   text-white">
          <div className=" pt-12 px-9">
            <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm dark:border-gray-700">
              <dl className="-my-3 divide-y divide-gray-100 text-sm dark:divide-gray-700">
                <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 even:dark:bg-gray-800">
                  <dt className="font-medium text-gray-900 dark:text-white">
                    Role
                  </dt>
                  <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">
                    {data?.Role}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 even:dark:bg-gray-800">
                  <dt className="font-medium text-gray-900 dark:text-white">
                    ShopName
                  </dt>
                  <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">
                    {data?.ShopName}
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 even:dark:bg-gray-800">
                  <dt className="font-medium text-gray-900 dark:text-white">
                    OwnerName
                  </dt>
                  <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">
                    {data?.OwnerName}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 even:dark:bg-gray-800">
                  <dt className="font-medium text-gray-900 dark:text-white">
                    ShopEmail
                  </dt>
                  <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">
                    {data?.ShopEmail}{" "}
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 even:dark:bg-gray-800">
                  <dt className="font-medium text-gray-900 dark:text-white">
                    ShopType
                  </dt>
                  <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">
                    {data?.ShopType}{" "}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 even:dark:bg-gray-800">
                  <dt className="font-medium text-gray-900 dark:text-white">
                    PH Number
                  </dt>
                  <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">
                    {data?.Ph}{" "}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 mb-1 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 even:dark:bg-gray-800">
                  <dt className="font-medium text-gray-900 dark:text-white">
                    Address
                  </dt>
                  <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">
                    {data?.ShopLocation}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 mb-1 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 even:dark:bg-gray-800">
                  <dt className="font-medium text-gray-900 dark:text-white">
                    Full-Address
                  </dt>
                  <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">
                    {data?.ShopLocation} ,{data?.City}, {data?.State}
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 p-3 mb-1 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 even:dark:bg-gray-800">
                  <dt className="font-medium text-gray-900 dark:text-white">
                    Pin Code
                  </dt>
                  <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">
                    {data?.PinCode}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
