import React, { useEffect, useState } from "react";
import axios from "axios";
import { SubCatProductCard } from "./SubCatProductCard";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

export const AllSuBCategoryProducts = () => {
  const [product, setproduct] = useState([]);
  const [RealtedProducts, setRealtedProducts] = useState([]);

  const { id, Catid } = useParams();
  const reqhandler = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/app/api/product/getall_with_Subcategory/${id}`
      );
      const res2 = await axios.get(
        `http://localhost:3000/app/api/product/getall_with_category/${Catid}`
      );
      setRealtedProducts(res2?.data?.data);

      setproduct(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    reqhandler();
  }, [setproduct, id]);
  return (
    <>
      <div className="min-h-screen lg:pt-[10vh] md:pt-[8vh] pb-[5vh] bg-gray-100 py-10 ">
        <div className="container mx-auto px-4 pt-5 pl-5 pr-5">
          <div className="min-h-screen flex flex-col  p-6 ">
            <h1 className="text-4xl font-bold text-white mb-10">
              Our Best Sellers
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {product.map((product) => (
                <motion.div
                  key={product._id}
                  className="relative bg-gray-800  text-white shadow-lg rounded-lg p-1 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="group relative">
                    {/* Product Image */}
                    <motion.img
                      src={product.Image}
                      alt={product.Name}
                      className="w-full min-h-60 object-cover rounded-md"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />

                    {/* Hover Popup */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center rounded-md"
                      initial={{ opacity: 0, y: 50 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-lg font-semibold">{product.Name}</h3>
                      <p className="mt-2 text-sm">{product.Title}</p>
                      <span className="mt-2 text-xl font-bold">
                        ${product.Price}
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Line div start */}
            <div className="flex items-center justify-center w-full mt-[13vh] mb-[13vh] ">
              <hr className="h-[1.4px] w-[40%] bg-gray-500" />
              <p className="w-[20%] text-lg text-center font-serif">
                {" "}
                REALTED PRODUCTS
              </p>

              <hr className="h-[1.4px] w-[40%] bg-gray-500" />
            </div>{" "}
            {/* Second div */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {RealtedProducts.map((product) => (
                <motion.div
                  key={product._id}
                  className="relative bg-gray-800  text-white shadow-lg rounded-lg p-1 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Link
                    to={`/Product-slug/${product?._id}`}
                    className="group relative"
                  >
                    {/* Product Image */}
                    <motion.img
                      src={product.Image}
                      alt={product.Name}
                      className="w-full min-h-60 object-cover rounded-md"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />

                    {/* Hover Popup */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center rounded-md"
                      initial={{ opacity: 0, y: 50 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-lg font-semibold">{product.Name}</h3>
                      <p className="mt-2 text-sm">{product.Title}</p>
                      <span className="mt-2 text-xl font-bold">
                        ${product.Price}
                      </span>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
{
  /* <div className="min-h-screen lg:pt-[10vh] md:pt-[8vh] pb-[5vh] bg-gray-100 py-10 ">
<div className="container mx-auto px-4 pt-5 pl-5 pr-5 ">
  <h1 className="text-3xl font-bold text-center mb-8"></h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {product?.map((product) => (
      <SubCatProductCard key={product._id} product={product} />
    ))}
  </div>
</div>
{/* Second div Line Start */
}
{
  /* <div className="flex items-center justify-center w-full mt-[10vh] mb-[10vh] ">
  <p className="w-[40%] text-center ">
    <hr className="h-[1.4px] bg-gray-500" />
  </p>
  <h2 className="w-[20%] text-center">
    -------REALTED PRODUCTS-------
  </h2>
  <p className="w-[40%] text-center ">
    {" "}
    <hr className="h-[1.4px] bg-gray-500" />
  </p>{" "}
</div> */
}

{
  /* Third Div Realted P */
}
{
  /* <div className="container mx-auto px-4 pt-5 pl-5 pr-5 ">
  <h1 className="text-3xl font-bold text-center mb-8"></h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {RealtedProducts?.map((product) => (
      <SubCatProductCard key={product._id} product={product} />
    ))}
  </div>
</div> */
}
// </div> */}
