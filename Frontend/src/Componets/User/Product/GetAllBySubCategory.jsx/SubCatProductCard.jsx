import React from "react";
import { motion } from "framer-motion";

export const SubCatProductCard = ({ product }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-4 hover:shadow-2xl transition duration-300 ease-in-out"
      whileHover={{ scale: 1.05 }}
    >
      <img
        src={product.Image}
        alt={product.Name}
        className="w-full  h-48 object-cover rounded-t-lg"
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.Name}</h3>
        <p className="text-sm text-gray-600 mt-2">{product.Title}</p>
        <p className="text-lg font-bold text-blue-600 mt-4">${product.Price}</p>
      </div>
    </motion.div>
  );
};
