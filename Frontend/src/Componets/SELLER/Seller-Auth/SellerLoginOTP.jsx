import React, { useState } from "react";
import { UsePopUp } from "../../../Context/PoPup.context";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { motion } from "framer-motion";
import axios from "axios";
export default function SellerLoginOTP() {
  const { Successmsg, Errormsg } = UsePopUp();
  const naviget = useNavigate();
  const [data, setdata] = useState({ Email: "" });
  axios.defaults.withCredentials = true;

  // Functions
  const reqhandler = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/app/api/seller/seller_login_otp",
        {
          ShopEmail: data?.Email,
        }
      );

      console.log(res);
      if (res?.data?.success) {
        Successmsg("OTP send Successfully");
        naviget(`/SellerPanel/SellerloginOTPCheck/${data.Email}`);
      }
    } catch (error) {
      console.log(error);

      Errormsg(error?.response?.data?.msg);
    }
  };
  return (
    <>
      <div className="lg:pt-[9.5vh] md:pt-[8vh] flex items-center justify-center min-h-screen bg-cover bg-center relative bg-sellerloginimg">
        <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>{" "}
        {/* Dark overlay */}
        <div className="  relative z-10  bg-opacity-60 backdrop-blur-lg p-8 rounded-lg shadow-lg  ">
          {" "}
          {/* Blur effect */}
          <div className=" flex flex-col justify-center items-center h-full  ">
            <div className="w-[80vw] sm:w-[60vw] md:w-[50vw] lg:w-auto xl:w-auto h-auto pb-[7vw] pt-[4vw] px-[2vw]  md:px-[8.5vw] lg:px-[8vw] xl:pb-[8.5vw] xl:pt-[4vw] rounded-2xl border-[3px] flex flex-col justify-center items-center  ">
              <h2 className="text-white font-serif text-xl sm:text-2xl">
                SELLER LOGIN
              </h2>
              {/* Email */}
              <input
                name="Email"
                value={data.Email}
                onChange={(e) => setdata({ Email: e.target.value })}
                type="email"
                placeholder="Your Email ..."
                className=" mt-5 md:mt-8 w-[80%] sm:w-[31vw] md:w-[24vw] lg:w-[22vw]  xl:w-[20vw] py-3 rounded-xl px-3 text-lg text-black  font-serif outline-none bg-gray-100 border-2   placeholder:text-black "
              />
              {/* OTP */}
              <input
                type="number"
                placeholder="OTP ..."
                disabled={true}
                className=" mt-7 w-[80%] sm:w-[31vw]  md:w-[24vw] lg:w-[22vw] xl:w-[20vw] py-3 rounded-xl px-3 text-lg text-black  font-serif outline-none bg-gray-100 border-2 placeholder:text-black  "
              />

              {/* Button */}
              <button
                onClick={reqhandler}
                disabled={data.Email == "" ? true : false}
                className={`
                 mt-6 py-2 sm:w-[13vw] md:w-[10vw]  rounded-xl px-3 text-lg text-black bg-gray-100 font-serif   border-2 ${
                   data.Email == ""
                     ? "bg-gray-100 text-black"
                     : "bg-slate-950 text-white hover:bg-green-500"
                 }`}
              >
                SENT OTP
              </button>
              <div className="mt-7 w-full flex justify-between ">
                <motion.div
                  whileHover={{
                    scale: 1.1,
                  }}
                  className="flex items-center text-white "
                >
                  {" "}
                  <IoIosArrowRoundBack className="text-lg" />
                  <Link
                    to={"/SellerPanel"}
                    className="text-sm md:text-lg  font-semibold  "
                  >
                    Back
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{
                    scale: 1.1,
                  }}
                >
                  <Link
                    to={"/sellerpanel/SellerSignup"}
                    className="text-white font-semibold  xl:pl-4 "
                  >
                    create new account ...
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
