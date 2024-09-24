import React, { useEffect, useState } from "react";
import { FaBagShopping } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { motion, AnimatePresence, delay } from "framer-motion";
import { BiSolidCategory } from "react-icons/bi";
import { ImCancelCircle } from "react-icons/im";
import { Link } from "react-router-dom";
import { UseAuth } from "../../Context/Auth.context";
import axios from "axios";
import { MenNav } from "./HeaderNavigation/MenNav";
import { WomenNav } from "./HeaderNavigation/WomenNav";
import Cookies from "js-cookie";
import { KidsNav } from "./HeaderNavigation/KidsNav";
import { BeautyNav } from "./HeaderNavigation/BeautyNav";
import { KitchenNav } from "./HeaderNavigation/KitchenNav";

export const Header = () => {
  axios.defaults.withCredentials = true;

  const [show, setshow] = useState(false);
  const [user_det, setuser_det] = useState(false);
  const [Mennav, setMennav] = useState(false);
  const [Womennav, setWomennav] = useState(false);
  const [Kidsnav, setKidsnav] = useState(false);
  const [Beautynav, setBeautynav] = useState(false);
  const [Kitchennav, setKitchennav] = useState(false);

  const [bag_det, setbag_det] = useState(false);
  const { Auth, setAuth, SellerAuth, setSellerAuth } = UseAuth();

  // Functions
  const logouthandler = async () => {
    try {
      const res = await axios.get("http://localhost:3000/app/api/auth/logout");
      if (res?.data?.success) {
        localStorage.removeItem("user");
        setAuth({ ...Auth, user: {} });
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const token = Cookies.get("Token");
    const token2 = Cookies.get("SellerToken");

    if (!token) {
      localStorage.removeItem("user");
      setAuth({ ...Auth, user: {} });
    }
    if (!token2) {
      localStorage.removeItem("seller");
      setSellerAuth({ ...SellerAuth, seller: {} });
    }
  }, []);
  return (
    <>
      <header className=" fixed  z-30  bg-white  w-full   lg:h-[9.5vh] md:h-[7vh] hidden md:visible md:flex justify-between items-center    ">
        <div className=" w-[25%] md:w-[20%] h-full flex justify-center items-center">
          <h2 className="font-serif text-3xl">TRENDZ</h2>
        </div>

        {/* Second */}
        <div className="  w-[40%] md:w-[45%] h-full lg:pr-12 md:pr-0 flex justify-center items-center">
          <ul className="w-full h-full pb-1.5  flex justify-evenly md:justify-around items-end font-serif  ">
            {/* Men */}
            <li
              onMouseEnter={() => setMennav(true)}
              onMouseLeave={() => setMennav(false)}
              className=" hover:border-b-[1.5px] hover:border-black  "
            >
              <Link to={"#"}>Men</Link>
              {Mennav ? (
                <>
                  <MenNav
                    onMouseEnter={() => setMennav(true)}
                    onMouseLeave={() => setMennav(false)}
                    setMennav={setMennav}
                  />
                </>
              ) : (
                <></>
              )}
            </li>
            {/* Women */}

            <li
              onMouseEnter={() => setWomennav(true)}
              onMouseLeave={() => setWomennav(false)}
              className=" hover:border-b-[1.5px] hover:border-black  "
            >
              <Link href={"#"}>Women</Link>
              {Womennav ? (
                <>
                  <WomenNav
                    onMouseEnter={() => setWomennav(true)}
                    onMouseLeave={() => setWomennav(false)}
                  />
                </>
              ) : (
                <></>
              )}
            </li>

            {/* Kids */}
            <li
              onMouseEnter={() => setKidsnav(true)}
              onMouseLeave={() => setKidsnav(false)}
              className=" hover:border-b-[1.5px] hover:border-black  "
            >
              <Link to={"#"}>Kids</Link>
              {Kidsnav ? (
                <>
                  <KidsNav
                    onMouseEnter={() => setKidsnav(true)}
                    onMouseLeave={() => setKidsnav(false)}
                  />
                </>
              ) : (
                <></>
              )}
            </li>
            {/* Beauty */}
            <li
              onMouseEnter={() => setBeautynav(true)}
              onMouseLeave={() => setBeautynav(false)}
              className=" hover:border-b-[1.5px] hover:border-black  "
            >
              <Link to={"#"}>Beauty</Link>
              {Beautynav ? (
                <>
                  <BeautyNav
                    onMouseEnter={() => setBeautynav(true)}
                    onMouseLeave={() => setBeautynav(false)}
                  />
                </>
              ) : (
                <></>
              )}
            </li>
            {/* HOME AND KITCHEN */}
            <li
              onMouseEnter={() => setKitchennav(true)}
              onMouseLeave={() => setKitchennav(false)}
              className=" hover:border-b-[1.5px] hover:border-black  "
            >
              <Link to={"#"}>HOME & KITCHEN</Link>
              {Kitchennav ? (
                <>
                  <KitchenNav
                    onMouseEnter={() => setKitchennav(true)}
                    onMouseLeave={() => setKitchennav(false)}
                  />
                </>
              ) : (
                <></>
              )}
            </li>
          </ul>
        </div>
        {/* Third */}
        <div className=" w-[30%] h-full  pb-1.5   flex  justify-evenly items-end font-serif">
          {/* Search button */}

          <div className="bg-gray-200 w-[48%]  py-[4px] md:py-[2px] px-1.5 md:text-sm border-[0.2px]  flex items-center border-gray-500 rounded-xl">
            <input
              type="search"
              placeholder="Search"
              className="bg-gray-200 w-[80%]   outline-none "
            />
            <button className="w-[20%] flex justify-center hover:text-xl">
              <IoIosSearch />
            </button>
          </div>
          {/* User button */}
          <motion.button
            onMouseEnter={() => setuser_det(true)}
            onMouseLeave={() => setuser_det(false)}
            // onHoverEnd={() => setuser_det(false)}
            className={`  bg-slate-800 rounded-2xl relative lg:left-2.5 md:left-1`}
          >
            <FaRegUserCircle
              FaBagShopping
              className=" text-lg md:text-base font-bold  p-1.5 text-white box-content"
            />
          </motion.button>
          {/* Onhover */}
          {user_det ? (
            <div
              onMouseEnter={() => setuser_det(true)}
              onMouseLeave={() => setuser_det(false)}
              className=" absolute z-10  top-[9vh] right-[2%] w-[20vw] h-auto  bg-gray-100       "
            >
              <div className="flex  w-full flex-col items-center">
                {!Auth?.user?.success ? (
                  <>
                    <Link
                      className="w-[60%] py-2 h-auto mt-5 border-2 text-hed border-hed text-center"
                      to={"/Login"}
                    >
                      Log In
                    </Link>
                    <p className="w-[70%] py-2 mt-2 mb-2 text-sm  text-center">
                      To add or view item(s) Please Login first
                    </p>
                  </>
                ) : (
                  <>
                    <button
                      onClick={logouthandler}
                      className="w-[60%] py-2 mt-5 border-2 text-hed border-hed text-center"
                    >
                      Log Out
                    </button>
                    <p className="w-[70%] py-2 mt-2 mb-2 text-sm  text-center">
                      To Logout click The Logout button
                    </p>
                  </>
                )}
              </div>
            </div>
          ) : (
            <></>
          )}
          {/* Wishlist button */}

          <motion.button
            whileHover={{
              scale: 1.2,
              transition: {
                duration: 0.4,
              },
            }}
            className="bg-slate-800 rounded-2xl  "
          >
            <IoMdHeartEmpty className=" text-lg md:text-base font-bold  p-1.5 text-white box-content" />
          </motion.button>
          {/* Bag button */}

          <motion.button
            onMouseEnter={() => setbag_det(true)}
            onMouseLeave={() => setbag_det(false)}
            className="bg-slate-800 rounded-2xl relative lg:right-2.5 md:right-1"
          >
            <FaBagShopping className=" text-lg md:text-base  p-1.5 text-white box-content" />
          </motion.button>
          {bag_det ? (
            <>
              <div
                onMouseEnter={() => setbag_det(true)}
                onMouseLeave={() => setbag_det(false)}
                className="absolute z-10  top-[9vh] right-[2%] w-[20vw] h-auto  bg-gray-100"
              >
                <div className="flex w-full flex-col items-cente text-gray-700">
                  <div className=" text-center">
                    <p className="mt-4">Your Bag Is Empty </p>
                    <p className="mb-4">Start Filling It Up!</p>
                  </div>
                  <hr className="w-full bg-gray-400 p-[0.2px]" />
                  <div className=" text-center text-xs ">
                    <p className="">
                      Free Shipping & Returns | 100% Handpicked |
                    </p>
                    <p className="mb-4"> Assured Quality </p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </header>

      {/* Mobile Screen %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */}
      <header className="w-full h-[5vh] md:hidden border-b-2  flex justify-between items-center">
        <div className="w-[30%] h-full pl-3  flex justify-start items-center">
          <h2 className="font-serif  text-[5vw] ">TRENDZ</h2>
        </div>

        {/* Second div */}
        <div className="ml-3 w-[55%] h-full  flex justify-start items-center">
          <div className="w-[72%] rounded-xl py-[4.5px] px-[4px] bg-slate-200 flex justify-center items-center">
            <input
              type="text"
              placeholder="Search"
              className="w-[80%] px-2 outline-none bg-slate-200"
            />
            <button className="w-[20%] flex justify-center hover:text-xl">
              <IoIosSearch />
            </button>
          </div>

          {/* Third Div */}
        </div>
        <div className="w-[15%] pr-5 h-full  flex justify-end  items-center">
          <div>
            {!show ? (
              <BiSolidCategory
                className="text-4xl"
                onClick={() => setshow(!show)}
              />
            ) : (
              <ImCancelCircle
                className="text-4xl"
                onClick={() => setshow(!show)}
              />
            )}
          </div>
          {/*Side Screen */}

          <div
            className={`${
              show ? "vissible" : "hidden"
            } w-[35vw] absolute h-[100vh] top-[5vh] right-0 bg-black`}
          ></div>
        </div>
      </header>
    </>
  );
};

{
  /* <div className="flex w-full flex-col items-center">
{login ? (
  <>
    <Link
      className="w-[60%] py-2 mt-5 border-2 text-hed border-hed text-center"
      to={"#"}
    >
      Log In
    </Link>
    <p className="w-[70%] py-2 mt-2 mb-2 text-sm  text-center">
      To add or view item(s) Please Login first
    </p>
  </>
) : (
  <>
    <Link
      className="w-[60%] py-2 mt-5 border-2 text-hed border-hed text-center"
      to={"#"}
    >
      Log Out
    </Link>
    <p className="w-[70%] py-2 mt-2 mb-2 text-sm  text-center">
      To Logout click The Logout button
    </p>
  </>
)}
</div> */
}
