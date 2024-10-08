import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaBagShopping } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductSlug_M from "./ProductSlug_M";
import axios from "axios";
import { motion } from "framer-motion";

export const ProductSlug = () => {
  const { id } = useParams();
  const [product, setproduct] = useState([]);
  const reqhandler = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/app/api/product/get_single_product/${id}`
      );
      console.log(res);

      setproduct(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  const product_details = [
    { det: "  Belt loops", id: 1 },
    { det: "Insert pockets; back welt pockets", id: 2 },
    { det: "Slim Fit", id: 3 },
    { det: "Package contains: 1 chinos ", id: 4 },
    { det: " Product Code: 443026402026", id: 5 },
    { det: "About JOHN PLAYERS", id: 6 },
    { det: " Mid Rise", id: 8 },

    { det: " 98% cotton, 2% elastane", id: 7 },
  ];

  const product_info = [
    {
      id: 1,
      tag: "MRP",
      det: "Rs. 1,499.00 inclusive of all taxes(MRP changes as per size selection)",
    },
    {
      id: 2,
      tag: "Marketed By",
      det: "RELIANCE RETAIL LIMITED, SS Plaza, 74/2, Outer ring road, Jay Bheema Nagar, 29th Main Road, BTM 1st Stage, BTM Layout,Bengaluru - 560068",
    },
    {
      id: 3,
      tag: "Net Qty",
      det: "1 N",
    },
    {
      id: 4,
      tag: "Manufactured By",
      det: "RELIANCE RETAIL LIMITED, SS Plaza, 74/2, Outer ring road, Jay Bheema Nagar, 29th Main Road, BTM 1st Stage, BTM Layout,Bengaluru - 560068",
    },
    {
      id: 5,
      tag: "Country Of",
      det: "india",
    },
    {
      id: 6,
      tag: "Customer Care Address",
      det: "Tower-B, 7th Floor,IBC Knowledge Park,Bannerghatta Main Road,Bhavani Nagar, S.G. Palya,Bengaluru, Karnataka – 560029,Ph: 1800-889-9991,E-mail: customercare@ajio.com",
    },
  ];

  const similar_pro = [
    {
      id: 1,
      img: "./productimg/Similarpro/1.avif",
      pri: "222",
      name: "John player",
      subtitle: "Slim fit jeans new",
    },
    {
      id: 2,
      img: "./productimg/Similarpro/2.avif",
      pri: "222",
      name: "John player",
      subtitle: "Slim fit jeans new",
    },
    {
      id: 3,
      img: "./productimg/Similarpro/3.avif",
      pri: "222",
      name: "John player",
      subtitle: "Slim fit jeans new",
    },
    {
      id: 4,
      img: "./productimg/Similarpro/4.avif",
      pri: "222",
      name: "John player",
      subtitle: "Slim fit jeans new",
    },
    {
      id: 5,
      img: "./productimg/Similarpro/5.avif",
      pri: "222",
      name: "John player",
      subtitle: "Slim fit jeans new",
    },
    {
      id: 6,
      img: "./productimg/Similarpro/6.avif",
      pri: "222",
      name: "John player",
      subtitle: "Slim fit jeans new",
    },
  ];
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
  const Sim_pro_resposive = {
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
      items: 1,
    },
  };

  const [selectedImage, setSelectedImage] = useState(
    "your-product-image-1.jpg"
  );
  const images = [
    "your-product-image-1.jpg",
    "your-product-image-2.jpg",
    "your-product-image-3.jpg",
    "your-product-image-4.jpg",
    "your-product-image-5.jpg",
  ];
  useEffect(() => {
    reqhandler();
  }, []);
  return (
    <>
      <div className="min-h-screen bg-white text-gray-800">
        <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left - Vertical Image Carousel */}
          <div className="flex flex-col items-center space-y-4">
            {images.map((img, index) => (
              <motion.img
                key={index}
                src={img}
                alt={`Product ${index + 1}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer ${
                  selectedImage === img ? "border-2 border-blue-500" : "border"
                }`}
                onClick={() => setSelectedImage(img)}
                whileHover={{ scale: 1.05 }}
              />
            ))}
          </div>

          {/* Center - Main Product Image */}
          <div className="flex justify-center items-center relative">
            <motion.img
              src={selectedImage}
              alt="Selected Product"
              className="w-full max-w-lg object-cover rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <button className="absolute left-0 text-gray-600 hover:text-gray-900">
              {"<"}
            </button>
            <button className="absolute right-0 text-gray-600 hover:text-gray-900">
              {">"}
            </button>
          </div>

          {/* Right - Product Details */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">
              Nike Men Low-Top Lace-Up Shoes
            </h1>
            <div className="flex items-center space-x-2">
              <span className="text-green-600 font-semibold text-xl">4.1</span>
              <span className="text-sm text-gray-500">(340 Ratings)</span>
            </div>

            {/* Price Section */}
            <div className="text-3xl font-semibold">
              ₹3,823{" "}
              <span className="line-through text-gray-500 text-lg">₹4,295</span>
              <span className="text-green-600 ml-2">(11% OFF)</span>
            </div>

            {/* Offer Section */}
            <div className="bg-yellow-100 p-4 rounded-md">
              <p className="text-sm">
                <span className="font-semibold">Get it for ₹2865</span> with
                Code <span className="font-semibold">NEW1000</span>
              </p>
              <a href="#" className="text-blue-600 text-sm">
                View All Products &gt;
              </a>
            </div>

            {/* Color Options */}
            <div className="flex items-center space-x-2">
              <span className="font-semibold">Color:</span>
              <div className="w-8 h-8 bg-blue-500 rounded-full border"></div>
            </div>

            {/* Size Options */}
            <div className="space-x-2">
              <span className="font-semibold">Select Size (UK):</span>
              <button className="border p-2 rounded-lg focus:outline-none focus:ring">
                6
              </button>
              <button className="border p-2 rounded-lg focus:outline-none focus:ring">
                7
              </button>
              <button className="border p-2 rounded-lg focus:outline-none focus:ring">
                8
              </button>
              <button className="border p-2 rounded-lg focus:outline-none focus:ring">
                9
              </button>
              <button className="border p-2 rounded-lg focus:outline-none focus:ring">
                10
              </button>
            </div>

            <a href="#" className="text-blue-600 text-sm underline">
              Check Size Chart
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
{
  /* <div className="hidden md:visible md:flex w-[100%] h-auto mt-10 ">
        {/* first div */
}
// <div className="w-[20%] h-auto md:h-[35vh] lg:h-[50vh] xl:h-auto xl:justify-start box-border flex flex-col justify-start  items-center">
//   <img src={product?.Image} alt={product?.Name} className="w-[40%]" />
//   <img
//     src={product?.Image}
//     alt={product?.Name}
//     className="w-[40%] mt-3"
//   />
//   <img
//     src={product?.Image1}
//     alt={product?.Name}
//     className="w-[40%] mt-3"
//   />
//   <img
//     src={product?.Image2}
//     alt={product?.Name}
//     className="w-[40%] mt-3"
//   />
//   <img
//     src={product?.Image3}
//     alt={product?.Name}
//     className="w-[40%] mt-3"
//   />
//   <img
//     src={product?.Image4}
//     alt={product?.Name}
//     className="w-[40%] mt-3"
//   />
// </div>
{
  /* Second Div */
}
// <div className="w-[47%] h-auto">
//   <Carousel
//     responsive={responsive}
//     keyBoardControl={true}
//     removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
//     infinite={true}
//     showDots={true}
//     draggable={true}
//     swipeable={false}
//     autoPlay={true}
//   >
//     <img
//       src={product?.Image}
//       alt={product?.Name}
//       className="max-w-[80%] object-fill"
//     />
//     <img
//       src={product?.Image1}
//       alt={product?.Name}
//       className="max-w-[80%] object-fill"
//     />
//     <img
//       src={product?.Image2}
//       alt={product?.Name}
//       className="max-w-[80%] object-fill"
//     />
//     <img
//       src={product?.Image3}
//       alt={product?.Name}
//       className="max-w-[80%] object-fill"
//     />
//     <img
//       src={product?.Image4}
//       alt={product?.Name}
//       className="max-w-[80%] object-fill"
//     />
//   </Carousel>
// </div>
{
  /* Third Div %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */
}
// <div className="w-[33%] h-auto  ">
//   First box include name des ratings
//   <div className="flex flex-col  items-center ">
//     <h2 className="text-hed">{product?.Name}</h2>
//     <p className="font-serif">{product?.Title}</p>
//     <p className="text-pri text-xs font-medium">322 Ratings</p>
//   </div>
{
  /* Second box include price offer  tax */
}
{
  /* <div className=" flex flex-col items-center">
            <h2 className="mt-4 text-lg font-serif">${product?.FinalPrice}</h2>

            <p className=" text-hed flex items-center text-sm">
              MRP{" "}
              <span className=" pl-[2px] line-through text-xs font-serif	">
                ${product?.Price}
              </span>
              <span className="font-semibold">
                ({product?.OfferPercentage}){" "}
              </span>
            </p>
            <p className="text-xs text-gray-500">
              Price inclusive of all taxes
            </p>
          </div> */
}
{
  /* Third box include offer-code and all products */
}
{
  /* <div className="w-[80%] mt-5  m-auto h-auto flex border-[1.5px] border-dotted	">
            <div
              className="w-[25%] p-2 ml-5 text-xs border-r-[1.5px] font-serif text-hed flex flex-col
            "
            >
              <span> Use Code</span>
              <span className="font-our-font">NEW250 </span>
              <span className="font-our-font"> T&C</span>
            </div> */
}
{
  /* Child second div */
}
{
  /* <div className="w-[70%] px-3 flex items-center justify-center ">
              <p className="text-[75%] text-gray-500">
                Get Flat Rs 250 Off on cart value of 990 & Above.
                <Link to={"#"} className="underline	text-green-800">
                  View All Products
                </Link>
              </p>
            </div>
          </div> */
}
{
  /* Forth Div inlcude Colors */
}
{
  /* <div className="w-[80%]   mt-8  flex flex-col m-auto items-center">
            <h3 className="text-gray-500 font-serif mb-1 ">Beige</h3>

            <div className="w-[90%] h-[7vh]   flex justify-around items-center       ">
              <p className=" md:w-9 md:h-9  xl:w-12 xl:h-12  rounded-full bg-gray-600"></p>
              <p className=" md:w-9 md:h-9 xl:w-12 xl:h-12  rounded-full bg-yellow-300"></p>
              <p className=" md:w-9 md:h-9  xl:w-12 xl:h-12  rounded-full bg-red-500"></p>
              <p className=" md:w-9 md:h-9 xl:w-12 xl:h-12  rounded-full bg-slate-800"></p>
            </div>
          </div>
          {/* fifth div include Bag And Wisklist and All others */
}
{
  /* <div className="w-[70%] h-auto m-auto mt-3  flex flex-col"> */
}
{
  /* Bag */
}
{
  /* <div className="w-[100%] py-2 flex  justify-center items-center bg-hed m-auto">
              <FaBagShopping className="mr-1.5 text-white" />

              <Link to={"#"} className=" text-white font-serif  ">
                Add to Bag
              </Link>
            </div> */
}

{
  /* <p className="text-[70%] pt-[3px] text-center">
              HANDPICKED STYLES | ASSURED QUALITY
            </p> */
}
{
  /* WishList */
}
{
  /* <div className="w-[100%] py-2 mt-3 border-2 flex  text-gray-500 justify-center items-center m-auto">
              <CiHeart className="mr-1.5 text-xl " />

              <Link to={"#"} className="  font-serif  ">
                SAVE to WishList
              </Link>
            </div> */
}
{
  /* Product List */
}
{
  /* <div className="h-auto w-full mt-5 flex flex-col font-serif">
              <h2 className="font-semibold">Product Details</h2>
              <ul className="flex flex-col text-xs font-our-font list-disc	">
                {product?.ProductDetails?.map((value) => {
                  return (
                    <li key={value.id} className="mt-[1px]  text-gray-500	">
                      {value}
                    </li>
                  );
                })}
              </ul>
            </div> */
}
{
  /* Product More Informations */
}
{
  /* <div className="mb-16 h-auto w-full mt-5 flex flex-col font-serif">
              <h2 className="font-semibold">other info </h2>
              <ul className="flex w-[100%] flex-col text-xs font-our-font list-disc	">
                {product_info.map((value) => {
                  return (
                    <div className="w-[100%] mt-2 flex " key={value.id}>
                      <li className="w-[35%]">{value.tag}</li>
                      <span className="w-[2%] font-semibold">:</span>
                      <p className="w-[62%] ">{value.det}</p>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div> */
}

{
  /* similor products*/
}
{
  /* // <div className=" w-full h-auto px-3">
      //   <div className="flex justify-center items-center my-5">
      //     <div className="w-[45%] h-[0.5px] bg-slate-300"></div>
      //     <h2 className="w-[15%] text-lg text-center font-serif text-gray-700 ">
      //       Similar Products
      //     </h2>
      //     <div className="w-[45%] h-[0.5px] bg-slate-300"></div>
      //   </div>
      //   <Carousel responsive={Sim_pro_resposive}>
      //     {similar_pro.map((value) => { */
}
{
  /* //       return (
      //         <div */
}
{
  /* //           key={value.id}
      //           className="w-[24vw]  flex flex-col justify-center items-center   "
      //         >
      //           <img src={value.img} alt="" className="w-[70%] h-auto " />
      //           <h2 className="font-serif font-semibold text-hed">
      //             {value.name}
      //           </h2>
      //           <h5 className="font-our-font text-sm text-gray-700 ">
      //             {value.subtitle}
      //           </h5>
      //           <p className="font-semibold">${value.pri}</p>
      //         </div> */
}
{
  /* //       );
      //     })}
      //   </Carousel> */
}
{
  /* // </div> */
}
{
  /* Recently viewed products*/
}
{
  /* <div className="flex w-full h-auto px-3">
        <div className="flex justify-center items-center my-5">
          <div className="w-[45%] h-[0.5px] bg-slate-300"></div>
          <h2 className="w-[15%] text-lg text-center font-serif text-gray-700 ">
            Recently Viewed
          </h2>
          <div className="w-[45%] h-[0.5px] bg-slate-300"></div>
        </div>
        <Carousel responsive={Sim_pro_resposive}>
          {similar_pro.map((value) => {
            return (
              <div
                key={value.id}
                className="w-[24vw]  flex flex-col justify-center items-center   "
              >
                <img src={value.img} alt="" className="w-[70%] h-auto " />
                <h2 className="font-serif font-semibold text-hed">
                  {value.name}
                </h2>
                <h5 className="font-our-font text-sm text-gray-700 ">
                  {value.subtitle}
                </h5>
                <p className="font-semibold">${value.pri}</p>
              </div>
            );
          })}
        </Carousel>
      </div> */
}
{
  /* ********************************************************************************* */
}
{
  /* Mobile Screen */
}
{
  /* <div className="md:hidden">
        <ProductSlug_M />
      </div> */
}
