import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
const HeaderNavcontext = createContext();

export const HeaderNavProvider = ({ children }) => {
  const [Men, setMen] = useState({
    Clothings: [],
    Footwear: [],
    Accessories: [],
    PreciousJewellery: [],
    Innerwear: [],
    Fetured: [],
  });
  const [Women, setWomen] = useState({
    ETHNICWEAR: [],
    Clothings: [],
    Footwear: [],
    Accessories: [],
    Jewellery: [],
    Innerwear: [],
  });
  const [Kids, setKids] = useState({
    BOYS: [],
    GIRLS: [],
    TOYS_AND_BABYCARE: [],
    FEATURED: [],
  });
  const [Beauty, setBeauty] = useState({
    Makeup: [],
    Hair_Care: [],
    Fragrances: [],
    Bath_Body: [],
    Men_Grooming: [],
    Featured_Brands: [],
  });
  const [Kitchen, setKitchen] = useState({
    Kitchen: [],
    Dining: [],
    Home_Decor: [],
    Festive_Gifts: [],
    Bath: [],
  });
  const [category, setcategory] = useState([]);
  const reqhandler = async () => {
    try {
      const res1 = await axios.get(
        "http://localhost:3000/app/api/category/getallwithChildSubCategory/66d96054639a01b5698c4439"
      );
      const res2 = await axios.get(
        "http://localhost:3000/app/api/category/getallwithChildSubCategory/66d96060639a01b5698c443d"
      );
      const res3 = await axios.get(
        "http://localhost:3000/app/api/category/getallwithChildSubCategory/66d96066639a01b5698c4441"
      );
      const res4 = await axios.get(
        "http://localhost:3000/app/api/category/getallwithChildSubCategory/66e9c55fb51477ee939cc297"
      );
      const res5 = await axios.get(
        "http://localhost:3000/app/api/category/getallwithChildSubCategory/66e9d3b4b51477ee939cc5df"
      );

      setMen({
        Clothings: res1?.data?.data[0],
        Footwear: res1?.data?.data[1],
        Accessories: res1?.data?.data[2],
        PreciousJewellery: res1?.data?.data[3],
        Innerwear: res1?.data?.data[4],
        Fetured: res1?.data?.data[5],
      });
      setWomen({
        ETHNICWEAR: res2?.data?.data[0],
        Jewellery: res2?.data?.data[1],
        Innerwear: res2?.data?.data[2],
        Accessories: res2?.data?.data[3],
        Footwear: res2?.data?.data[4],
        Clothings: res2?.data?.data[5],
      });
      setKids({
        GIRLS: res3?.data?.data[0],
        TOYS_AND_BABYCARE: res3?.data?.data[1],
        FEATURED: res3?.data?.data[2],
        BOYS: res3?.data?.data[3],
      });
      setBeauty({
        Makeup: res4?.data?.data[0],
        Hair_Care: res4?.data?.data[1],
        Fragrances: res4?.data?.data[2],
        Bath_Body: res4?.data?.data[3],
        Men_Grooming: res4?.data?.data[4],
        Featured_Brands: res4?.data?.data[5],
      });
      setKitchen({
        Kitchen: res5?.data?.data[0],
        Dining: res5?.data?.data[1],
        Home_Decor: res5?.data?.data[2],
        Festive_Gifts: res5?.data?.data[3],
        Bath: res5?.data?.data[4],
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    reqhandler();
    console.log(Kids);
  }, []);

  return (
    <HeaderNavcontext.Provider
      value={{
        Men,
        setMen,
        Women,
        setWomen,
        Kids,
        setKids,
        Beauty,
        setBeauty,
        Kitchen,
        setKitchen,
      }}
    >
      {children}
    </HeaderNavcontext.Provider>
  );
};

export const UseHeaderNav = () => {
  return useContext(HeaderNavcontext);
};
