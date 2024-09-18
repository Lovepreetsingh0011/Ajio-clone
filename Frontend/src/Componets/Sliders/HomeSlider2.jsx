import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export const HomeSlider2 = () => {
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
  const arr = [
    { id: 1, img: "./public/HomeSli2/h_s1.avif" },
    { id: 2, img: "./public/HomeSli2/h_s2.avif" },
    { id: 3, img: "./public/HomeSli2/h_s3.avif" },
  ];
  const arr2 = [
    { id: 1, img: "./public/HomeSli2/h2-1.png" },
    { id: 2, img: "./public/HomeSli2/h2-2.png" },
    { id: 3, img: "./public/HomeSli2/h2-3.png" },
  ];
  return (
    <>
      <Carousel
        responsive={responsive}
        className="mt-2 xl:mt5 lg:mt-4"
        autoPlay={true}
        infinite={true}
      >
        {arr.map((value) => {
          return (
            <img
              src={value.img}
              alt=""
              key={value.id}
              className="w-[97vw] h-auto sm:w-[97vw] sm:h-auto lg:h-auto m-auto hover:w-[100vw] duration-500 md:w-[98vw]"
            />
          );
        })}
      </Carousel>
      {/* ********************************************* */}
      <div>
        <img
          src="./public/HomeSli2/h2-top-img.webp"
          className="mt-1 xl:mt5 lg:mt-4  w-[97vw] h-auto sm:w-[97vw] sm:h-auto lg:h-auto m-auto hover:w-[100vw] duration-500 md:w-[98vw]"
          alt=""
        />
      </div>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        showDots={true}
        className="mt-1 xl:mt5 lg:mt-4 "
      >
        {arr2.map((value) => {
          return (
            <img
              src={value.img}
              alt=""
              key={value.id}
              className=" w-[100vw]  h-auto lg:object-fill lg:h-auto lg:w-[100vw]  md:object-contain md:h-auto md:pt-0 sm:h-auto"
            />
          );
        })}
      </Carousel>
    </>
  );
};
