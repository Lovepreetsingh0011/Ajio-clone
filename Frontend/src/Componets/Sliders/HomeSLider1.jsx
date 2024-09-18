import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";
import axios from "axios";
import { Link } from "react-router-dom";

export const HomeSLider = () => {
  const [data, setdata] = useState([]);
  const reqhandler = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/app/api/slider/get_slider_byname/Home Slider First"
      );
      console.log(res.data.data);
      setdata(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // const data = [
  //   { img: "h_s1.webp", id: 1 },
  //   { img: "h_s2.avif", id: 2 },
  //   { img: "h_s3.webp", id: 3 },
  //   { img: "h_s4.avif", id: 4 },
  //   { img: "h_s5.avif", id: 5 },
  // ];
  useEffect(() => {
    reqhandler();
  }, []);
  return (
    <>
      <div className=" lg:pt-[11vh] md:pt-[7vh]">
        <img
          src="h_img.gif"
          alt=""
          className=" w-[97vw] h-auto sm:w-[97vw] sm:h-auto lg:h-auto m-auto hover:w-[100vw] duration-500 md:w-[98vw]"
        />
      </div>
      {/* **************** */}

      <Carousel
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        className="pt-2"
      >
        {data.map((value) => {
          return (
            <Link to={value.Name} key={value._id}>
              <img
                src={value.Image}
                alt=""
                className={`${
                  value.id == 3 || value.id == 4 ? "px-0 " : ""
                } w-[100vw]  h-auto lg:object-fill lg:h-auto lg:w-[100vw]  md:object-contain md:h-auto md:pt-0 sm:h-auto`}
              />
            </Link>
          );
        })}
      </Carousel>
    </>
  );
};
