import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { motion } from "framer-motion";
import axios from "axios";
import { UsePopUp } from "../../Context/PoPup.context";

export const SignUp = () => {
  // Initilizations
  const { Successmsg, Errormsg } = UsePopUp();

  const [data, setdata] = useState({
    Name: "",
    Email: "",
    Ph: "",
    Gender: "",
    Address: "",
  });
  const navigate = useNavigate();
  // Funtions  &&&&&&&&&&&&&&&&&&&

  const inputhandler = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  // Reqhandler
  const reqhandler = async (e) => {
    try {
      e.preventDefault();

      const res = await axios.post(
        "http://localhost:3000/app/api/auth/register",
        {
          Name: data?.Name,
          Email: data?.Email,
          Ph: data?.Ph,
          Address: data?.Address,
          Gender: data?.Gender,
        }
      );
      if (res?.data?.success) {
        Successmsg(" Created Successfully");
        navigate("/Login");
      }
      console.log(res);
    } catch (error) {
      console.log(error);
      console.log(error.response?.data.msg);
      Errormsg(error?.response?.data?.msg);
    }
  };
  useEffect(() => {}, []);
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-cover bg-center relative bg-signin ">
        {/* Background Blur */}
        <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>

        {/* Sign-Up Form */}
        <div className="my-[15vh] w-[80vw] sm:w-[60vw] md:w-[50vw] lg:w-auto xl:w-auto pb-[7vw] pt-[4vw] px-[2vw]  md:px-[8.5vw] lg:px-[8vw] xl:pb-[9vw] xl:pt-[4vw] h-auto relative z-10 bg-white bg-opacity-60 backdrop-blur-lg p-8 rounded-lg shadow-lg  ">
          <h2 className="text-black font-serif text-xl sm:text-2xl text-center">
            Sign Up
          </h2>
          {/* Form start */}
          <form
            onSubmit={reqhandler}
            className="w-full flex flex-col items-center "
          >
            {/* Name */}
            <input
              type="text"
              value={data.Name}
              onChange={inputhandler}
              required
              name="Name"
              placeholder=" Name ..."
              className=" mt-10 md:mt-14 w-[80%] sm:w-[31vw] md:w-[24vw] lg:w-[22vw]  xl:w-[20vw] py-3 rounded-xl px-3 text-lg text-gray-900 font-mono placeholder:text-gray-700  outline-none  border-2 bg-white placeholder:font-serif   "
            />{" "}
            {/* Email */}
            <input
              type="email"
              value={data.Email}
              required
              onChange={inputhandler}
              name="Email"
              placeholder="Your Email ..."
              className=" mt-3 md:mt-5 w-[80%] sm:w-[31vw] md:w-[24vw] lg:w-[22vw]  xl:w-[20vw] py-3 rounded-xl px-3 text-lg text-gray-900 font-mono placeholder:text-gray-700  outline-none  border-2 bg-white placeholder:font-serif  "
            />{" "}
            {/* Ph number */}
            <input
              type="number"
              value={data.Ph}
              required
              onChange={inputhandler}
              name="Ph"
              placeholder="PH Number"
              className=" mt-3 md:mt-5 w-[80%] sm:w-[31vw] md:w-[24vw] lg:w-[22vw]  xl:w-[20vw] py-3 rounded-xl px-3 text-lg text-gray-900 font-mono placeholder:text-gray-700  outline-none  border-2 bg-white    "
            />{" "}
            {/* Password */}
            {/* Gender */}
            <div className=" mt-2 md:mt-3 w-[80%] sm:w-[31vw] md:w-[24vw] lg:w-[22vw]  xl:w-[20vw] py-3  px-3  font-serif ">
              <span className="font-serif">Male</span>{" "}
              <input
                type="radio"
                required
                name="Gender"
                value={"Male"}
                onChange={inputhandler}
              />
              <span className="ml-4">Female</span>{" "}
              <input
                type="radio"
                required
                value={"Female"}
                onChange={inputhandler}
                name="Gender"
              />
            </div>
            {/* address */}
            <textarea
              value={data.Address}
              required
              onChange={inputhandler}
              name="Address"
              placeholder="Your Address"
              id=""
              className="mt-3 md:mt-0 w-[80%] sm:w-[31vw] md:w-[24vw] lg:w-[22vw]  xl:w-[20vw] py-3 rounded-xl px-3 text-lg text-gray-900 font-serif placeholder:text-gray-700  outline-none  border-2 bg-white"
            ></textarea>
            <button
              type="submit"
              className="mt-3 md:mt-5 w-[50%] sm:w-[17vw] md:w-[17vw] lg:w-[12vw]  xl:w-[10vw] py-3 rounded-xl px-3 text-lg text-white font-serif placeholder:text-gray-700  outline-none  border-2 bg-gray-900"
            >
              Submit
            </button>
          </form>
          <div className="mt-6 w-full flex justify-around font-serif text-gray-900">
            <div className="flex items-center">
              <IoIosArrowRoundBack />
              <Link to={"/"}>Home</Link>
            </div>

            <Link to={"/login"}>Already have an account</Link>
          </div>
        </div>
      </div>
    </>
  );
};
