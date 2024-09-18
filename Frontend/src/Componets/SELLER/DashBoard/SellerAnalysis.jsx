import React from "react";
import { IoMdAnalytics } from "react-icons/io";
import { FaBorderAll } from "react-icons/fa";
import { SiVirustotal } from "react-icons/si";
import { MdOutlineCollections } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import { FaUserAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { IoSettings } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";

export const SellerAnalysis = () => {
  return (
    <>
      <div className="   w-full flex flex-col h-auto pt-8 ">
        {/* First Div */}

        <div className="w-full h-[25vh]  flex justify-between items-center text-black ">
          <div className="flex flex-col w-auto   ml-7 ">
            <h2 className="text-5xl font-serif">Dashboard</h2>
            <p className="pt-1">Whole Data About Your Bussiness Here</p>
          </div>
          <div className="mr-7">
            <button className="px-3 py-2 bg-green-600 text-gray-50 rounded-lg">
              Add Product
            </button>
          </div>
        </div>
        {/* Second Div */}
        <div className="h-auto w-full mt-6 pl-2 pr-2 flex justify-around items-center">
          {/* Product Revenue */}
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.7 },
            }}
            whileTap={{ scale: 0.9 }}
            className="bg-slate-200 py-3 shadow-gray-500 shadow-xl w-[30%] flex justify-center items-center text-black "
          >
            <IoMdAnalytics className="text-5xl mr-6  sm:text-3xl sm:mr-2  md:text-4xl md:mr-3 lg:mr-6 lg:text-5xl text-gray-900 " />
            <div>
              <h3 className="text-lg font-serif text-gray-700">Revenue</h3>
              <h2 className="text-2xl sm:text-xl md:text-xl lg:text-2xl font-semibold">
                $34334.43
              </h2>
            </div>
          </motion.div>
          {/* Product order */}
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.7 },
            }}
            whileTap={{ scale: 0.9 }}
            className="bg-slate-200 py-3 shadow-gray-500 shadow-xl w-[30%] flex justify-center items-center text-black  "
          >
            <FaBorderAll className="text-5xl mr-6 md:text-4xl md:mr-3 lg:mr-6 lg:text-5xl text-gray-900 " />
            <div>
              <h3 className="text-lg font-serif text-gray-700">Order</h3>
              <h2 className="text-2xl md:text-xl lg:text-2xl font-semibold">
                $34334.43
              </h2>
            </div>
          </motion.div>
          {/* Total Product  */}
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.7 },
            }}
            whileTap={{ scale: 0.9 }}
            className="bg-slate-200 py-3 shadow-gray-500 shadow-xl w-[30%] flex justify-center items-center text-black  "
          >
            <SiVirustotal className="text-5xl mr-6 md:text-4xl md:mr-3 lg:mr-6 lg:text-5xl text-gray-900 " />
            <div>
              <h3 className="text-lg font-serif text-gray-700">Sale Product</h3>
              <h2 className="text-2xl md:text-xl lg:text-2xl font-semibold">
                $34334.43
              </h2>
            </div>
          </motion.div>
        </div>
        {/* Third Div */}
        <div className="h-auto w-full mt-20 pl-2 pr-2 flex justify-around items-center">
          {/* All Product */}
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.7 },
            }}
            whileTap={{ scale: 0.9 }}
            className="bg-slate-200 py-3 shadow-gray-500 shadow-xl w-[30%] flex justify-center items-center text-black "
          >
            <MdOutlineCollections className="text-5xl mr-6 md:text-4xl md:mr-3 lg:mr-6 lg:text-5xl text-gray-900 " />
            <div>
              <h3 className="text-lg font-serif text-gray-700">All Products</h3>
              <h2 className="text-2xl md:text-xl lg:text-2xl font-semibold">
                $34334.43
              </h2>
            </div>
          </motion.div>
          {/* Account details */}
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.7 },
            }}
            whileTap={{ scale: 0.9 }}
            className="bg-slate-200 py-3 shadow-gray-500 shadow-xl w-[30%] flex justify-center items-center text-black  "
          >
            <FaUserAlt className="text-5xl mr-6 md:text-4xl md:mr-3 lg:mr-6 lg:text-5xl text-gray-900 " />
            <div>
              <h3 className="text-xl py-3 font-serif text-gray-700">Account</h3>
            </div>
          </motion.div>
          {/* Update Details  */}
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.7 },
            }}
            whileTap={{ scale: 0.9 }}
            className="bg-slate-200 py-3 shadow-gray-500 shadow-xl w-[30%] flex justify-center items-center text-black "
          >
            <GrUpdate className="text-5xl mr-6 md:text-4xl md:mr-3 lg:mr-6 lg:text-5xl text-gray-900 " />
            <div>
              <h3 className="text-xl py-3 font-serif text-gray-700">
                Update Details
              </h3>
            </div>
          </motion.div>
        </div>
        {/* Fourth Div */}
        <div className="h-auto w-full mt-20 mb-20 pl-2 pr-2 flex justify-around items-center">
          {/* All Product */}
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.7 },
            }}
            whileTap={{ scale: 0.9 }}
            className="bg-slate-200 py-3 shadow-gray-500 shadow-xl w-[30%] flex justify-center items-center text-black  "
          >
            <IoSettings className="text-5xl mr-6 md:text-4xl md:mr-3 lg:mr-6 lg:text-5xl text-gray-900 " />
            <div>
              <h3 className="text-lg font-serif text-gray-700">Settings</h3>
              {/* <h2 className="text-2xl font-semibold">$34334.43</h2> */}
            </div>
          </motion.div>
          {/* Account details */}
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.7 },
            }}
            whileTap={{ scale: 0.9 }}
            className="bg-slate-200 py-3 shadow-gray-500 shadow-xl w-[30%] flex justify-center items-center text-black "
          >
            <MdOutlineMessage className="text-5xl mr-6 md:text-4xl md:mr-3 lg:mr-6 lg:text-5xl text-gray-900 " />
            <div>
              <h3 className="text-xl py-3 font-serif text-gray-700">
                Messages Box
              </h3>
            </div>
          </motion.div>
          {/* Update Details  */}
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.7 },
            }}
            whileTap={{ scale: 0.9 }}
            className="bg-slate-200 py-3 shadow-gray-500 shadow-xl w-[30%] flex justify-center items-center text-black "
          >
            <GrUpdate className="text-5xl mr-6 md:text-4xl md:mr-3 lg:mr-6 lg:text-5xl text-gray-900 " />
            <div>
              <h3 className="text-xl py-3 font-serif text-gray-700">
                Update Details
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};
