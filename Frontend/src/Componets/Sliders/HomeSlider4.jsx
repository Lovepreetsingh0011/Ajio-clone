import React from "react";

export const HomeSlider4 = () => {
  const arr = [
    { img: "./public/HomeSli4/h4-1.avif", id: 1 },
    { img: "./public/HomeSli4/h4-2.avif", id: 2 },
    { img: "./public/HomeSli4/h4-3.avif", id: 3 },
  ];
  const arr2 = [
    { img: "./public/HomeSli4/h4-4.avif", id: 1 },
    { img: "./public/HomeSli4/h4-5.avif", id: 2 },
    { img: "./public/HomeSli4/h4-6.jpg", id: 3 },
  ];
  return (
    <>
      <div className="mb-6">
        <div className="grid grid-cols-3 justify-items-center">
          <div className=" ">
            <img
              src="./public/HomeSli4/h4-1.avif"
              alt=""
              className="  h-auto w-[33vw] md:h-auto lg:h-[75vh] xl:h-[80vh] 2xl:h-auto hover:scale-105 duration-1000"
            />
          </div>
          <div className="">
            <img
              src="./public/HomeSli4/h4-2.avif"
              alt=""
              className="  h-auto w-[33vw] md:h-auto lg:h-[75vh] xl:h-[80vh] 2xl:h-auto hover:scale-105 duration-1000"
            />
          </div>
          <div className="">
            <img
              src="./public/HomeSli4/h4-3.avif"
              alt=""
              className="  h-auto w-[33vw] md:h-auto lg:h-[75vh] xl:h-[80vh] 2xl:h-auto hover:scale-105 duration-1000"
            />
          </div>
          <div className="">
            <img
              src="./public/HomeSli4/h4-4.avif"
              alt=""
              className="  h-auto w-[33vw] md:h-auto lg:h-[75vh] xl:h-[80vh] 2xl:h-auto hover:scale-105 duration-1000"
            />
          </div>{" "}
          <div className="">
            <img
              src="./public/HomeSli4/h4-5.avif"
              alt=""
              className="  h-auto w-[33vw] md:h-auto lg:h-[75vh] xl:h-[80vh] 2xl:h-auto hover:scale-105 duration-1000"
            />
          </div>{" "}
          <div className="">
            <img
              src="./public/HomeSli4/h4-6.avif"
              alt=""
              className="  h-auto w-[33vw] md:h-auto lg:h-[75vh] xl:h-[80vh] 2xl:h-auto hover:scale-105 duration-1000"
            />
          </div>
        </div>

        {/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */}
      </div>
    </>
  );
};
