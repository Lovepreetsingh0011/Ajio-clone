import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export const HomeSlider3 = () => {
  const arr = [
    { img: "./public/HomeSli3/h3-1.avif", id: 1 },
    { img: "./public/HomeSli3/h3-2.avif", id: 2 },
    { img: "./public/HomeSli3/h3-3.avif", id: 3 },
    { img: "./public/HomeSli3/h3-4.avif", id: 4 },
    { img: "./public/HomeSli3/h3-5.avif", id: 5 },
    { img: "./public/HomeSli3/h3-6.jpg", id: 6 },
    { img: "./public/HomeSli3/h3-7.avif", id: 7 },
    { img: "./public/HomeSli3/h3-8.avif", id: 8 },
  ];
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
  return (
    <>
      <div>
        <img
          src="./public/HomeSli3/h3-top-img.avif"
          alt=""
          className="w-[97vw] h-auto sm:w-[97vw] lg:w-[97vw] sm:h-auto lg:h-auto m-auto hover:w-[100vw] duration-1000 md:w-[98vw]"
        />
      </div>
      <Carousel
        responsive={responsive}
        className="mb-3"
        autoPlay={true}
        // infinite={true}
      >
        {arr.map((value) => {
          return (
            <img
              src={value.img}
              alt=""
              key={value.id}
              className=" w-[25vw]  sm:w-[33vw]  md:w-[33vw] lg:w-[25vw]  lg:min-h-[70vh] xl:h-auto  hover:scale-105 duration-1000  "
            />
          );
        })}
      </Carousel>
    </>
  );
};
