import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { motion } from "framer-motion";
import axios from "axios";
import { UsePopUp } from "../../Context/PoPup.context";
import { UseAuth } from "../../Context/Auth.context";

export const OTPcheck = () => {
  const { Email } = useParams();
  const [data, setdata] = useState({ OTP: "" });
  const { Successmsg, Errormsg } = UsePopUp();
  const { Auth, setAuth } = UseAuth();
  const navigate = useNavigate();

  // Functions
  axios.defaults.withCredentials = true;
  const reqhandler = async () => {
    try {
      const res = await axios.post("http://localhost:3000/app/api/auth/login", {
        Email: Email,
        OTP: data?.OTP,
      });

      console.log(res);
      if (res?.data?.success) {
        Successmsg("Login Successfully");
        setAuth({ ...Auth, user: res?.data?.user });
        localStorage.setItem("user", JSON.stringify(res?.data?.user));
        if (res?.data?.success) {
          navigate("/");
        }
      }
    } catch (error) {
      console.log(error);
      Errormsg(error.response.data.msg);
    }
  };
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-cover bg-center relative bg-signin">
        <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>{" "}
        {/* Dark overlay */}
        <div className="relative z-10  bg-opacity-60 backdrop-blur-lg p-8 rounded-lg shadow-lg ">
          {" "}
          {/* Blur effect */}
          <div className="flex flex-col justify-center items-center h-full  ">
            <div className="w-[80vw] sm:w-[60vw] md:w-[50vw] lg:w-auto xl:w-auto h-auto pb-[7vw] pt-[4vw] px-[2vw]  md:px-[8.5vw] lg:px-[8vw] xl:pb-[9vw] xl:pt-[4vw] rounded-2xl border-[3px] flex flex-col justify-center items-center  ">
              <h2 className="text-white font-serif text-xl sm:text-2xl">
                OTP Verification
              </h2>
              <input
                type="email"
                placeholder={Email}
                disabled={true}
                className=" mt-5 md:mt-8 w-[80%] sm:w-[31vw] md:w-[24vw] lg:w-[22vw]  xl:w-[20vw] py-3 rounded-xl px-3 text-lg text-black  font-serif outline-none bg-gray-100 border-2   placeholder:text-black "
              />
              <input
                type="number"
                name="OTP"
                value={data.value}
                onChange={(e) => setdata({ OTP: e.target.value })}
                placeholder="Enter OTP ..."
                className="  mt-7 w-[80%] sm:w-[31vw]  md:w-[24vw] lg:w-[22vw] xl:w-[20vw] py-3 rounded-xl px-3 text-lg text-black  font-serif outline-none bg-gray-100 border-2 placeholder:text-black"
              />
              <button
                onClick={reqhandler}
                disabled={data.OTP == "" ? true : false}
                className="mt-6 py-2 sm:w-[13vw] md:w-[10vw]  rounded-xl px-3 text-lg text-gray-100 bg-green-600 font-serif  "
              >
                Login
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
                    to={"/Login"}
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
                    to={"/signin"}
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
};
