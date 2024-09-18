import React, { useEffect, useState } from "react";
import { HomeSLider } from "../Sliders/HomeSLider1";
import { HomeSlider2 } from "../Sliders/HomeSlider2";
import { HomeSlider3 } from "../Sliders/HomeSlider3";
import { HomeSlider4 } from "../Sliders/HomeSlider4";
import { HomeSLider5 } from "../Sliders/HomeSLider5";
import { HomeSLider6 } from "../Sliders/HomeSlider6";
import axios from "axios";

export const Home = () => {
  return (
    <>
      <HomeSLider />
      <HomeSlider2 />
      <HomeSlider3 />
      <HomeSlider4 />
      <HomeSLider5 />
      <HomeSLider6 />
    </>
  );
};
