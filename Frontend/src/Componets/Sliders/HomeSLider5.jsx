import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const HomeSLider5 = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4,
    },
  };
  const arr1 = [
    { img: "./public/HomeSli5/h5-1.avif", id: 1 },
    { img: "./public/HomeSli5/h5-2.avif", id: 2 },
    { img: "./public/HomeSli5/h5-3.avif", id: 3 },
    { img: "./public/HomeSli5/h5-4.avif", id: 4 },
    { img: "./public/HomeSli5/h5-5.avif", id: 5 },
    { img: "./public/HomeSli5/h5-6.avif", id: 6 },
    { img: "./public/HomeSli5/h5-7.avif", id: 7 },
    { img: "./public/HomeSli5/h5-8.avif", id: 8 },
  ];
  return (
    <>
      <Carousel
        responsive={responsive}
        className="mb-3"
        autoPlay={true}
        // infinite={true}
      >
        {arr1.map((value) => {
          return (
            <img
              src={value.img}
              alt=""
              key={value.id}
              className=" w-[25vw] h-auto   sm:w-[33vw]  md:w-[33vw] lg:w-[25vw]  lg:min-h-[55vh]  hover:scale-105 duration-1000  "
            />
          );
        })}
      </Carousel>
    </>
  );
};
