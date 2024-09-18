import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { UseAuth } from "../../Context/Auth.context";
import { UsePopUp } from "../../Context/PoPup.context";
import Cookies from "js-cookie";

import axios from "axios";
export default function SellerPanel() {
  axios.defaults.withCredentials = true;

  const { SellerAuth, setSellerAuth } = UseAuth();
  const { Successmsg, Errormsg } = UsePopUp();

  // const navigate = Navigate();
  const [data, setdata] = useState([]);
  const logouthandler = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/app/api/seller/seller_logout"
      );
      if (res?.data?.success) {
        localStorage.removeItem("seller");
        setSellerAuth({ ...SellerAuth, seller: {} });
        Successmsg("Seller LogOut Successfully");
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const token = Cookies.get("SellerToken");
    console.log("token");

    console.log(token);

    if (!token) {
      localStorage.removeItem("seller");
      setSellerAuth({ ...SellerAuth, seller: {} });
    }

    const res = localStorage.getItem("seller");
    setdata(JSON.parse(res));
    console.log(data);
  }, [setdata, setSellerAuth]);
  return (
    <>
      <div className="lg:pt-[11vh] md:pt-[7vh]">
        <div className=" border-t-2  w-full  min-h-[100vh] flex flex-col   ">
          {/* First div */}
          {
            <div className=" w-full flex  h-[10vh]  justify-end items-center pr-5 ">
              {data?.success ? (
                <>
                  <button
                    onClick={logouthandler}
                    className="bg-sky-400 mr-2 px-7 font-serif text-lg  py-2 h-[60%] hover:bg-sky-500 hover:rounded-md"
                  >
                    LogOut
                  </button>

                  <Link
                    to={"/sellerpanel/Auth"}
                    className="bg-green-400 px-7 flex items-center font-serif text-lg  py-2 h-[60%] hover:bg-green-500 hover:rounded-md"
                  >
                    DashBoard
                  </Link>
                </>
              ) : (
                <>
                  {" "}
                  <Link
                    to={"/SellerPanel/SellerloginOTP"}
                    className="bg-sky-400 mr-2 px-7 font-serif text-lg  py-2 h-[60%] hover:bg-sky-500 hover:rounded-md"
                  >
                    Login
                  </Link>
                  <Link
                    to={"/SellerPanel/SellerSignup"}
                    className="bg-sky-400 px-7  font-serif text-lg  py-2 h-[60%] hover:bg-sky-500 hover:rounded-md"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          }
          {/* Second div */}

          <div className="flex justify-around">
            {" "}
            <div className="w-[45vw] mr-2  sm:w-[45vw] sm:mr-2  md:w-[60vw] md:mr-2  lg:w-[50vw] min-h-[80vh]   flex flex-col justify-center items-center  ">
              <h2 className=" text-xl px-2 py-1 sm:text-3xl sm:px-5 sm:py-2 md:text-4xl md:px-5 lg:text-5xl lg:px-5 lg:py-6 text-center  md:py-7 shadow-md shadow-black  font-serif bg-sky-400 ">
                Become a TRENDZ Seller{" "}
              </h2>
              <h2 className="text-lg py-2  px-1 sm:text-2xl sm:py-5  sm:px-2 md:text-4xl md:py-7 md:px-5 lg:text-4xl lg:py-5  lg:px-4 text-center mt-[1px] shadow-xl shadow-slate-600   font-serif bg-sky-400 ">
                and sell to 50 Crore+ customers
              </h2>
            </div>
            {/* THird div */}
            <div className="w-[45vw] sm:w-[45vw]  md:w-[40vw] lg:w-[40vw] min-h-[80vh]   	">
              {" "}
              <img
                src="public/dashboardimg2.jpeg"
                alt=""
                className="h-[100%] object-contain md:object-contain lg:object-contain 	"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
