import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export const UpdateImage = () => {
  const { id } = useParams();
  const [img, setimag] = useState([]);
  const navigate = useNavigate();

  const handleUpdate = (Name, index) => {
    navigate(`/sellerpanel/Auth/ImageModal/${index}/${Name}/${id}`);
  };
  const fetchdata = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/app/api/product/seller_product_with_id/${id}`
      );
      console.log(res);
      setimag([
        { id: 0, src: res?.data?.data?.Image, alt: "Image" },
        { id: 1, src: res?.data?.data?.Image1, alt: "Image1" },
        { id: 2, src: res?.data?.data?.Image2, alt: "Image2" },
        { id: 3, src: res?.data?.data?.Image3, alt: "Image3" },
        { id: 4, src: res?.data?.data?.Image4, alt: "Image4" },
      ]);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(img);

  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <>
      <div className="lg:pt-[15vh] md:pt-[12vh] flex flex-col w-full  mb-[15vh]   ">
        <div className="container mx-auto p-6 flex justify-between items-center mb-8">
          <Link
            to={`/sellerpanel/Auth/AllProducts`}
            className="bg-green-500 font-sans hover:rounded-xl font-semibold text-white px-4 py-3 rounded-lg mr-4"
          >
            ALL PRODUCTS
          </Link>
          <div>
            <Link
              to={`/sellerpanel/Auth`}
              className="bg-sky-500 hover:rounded-xl font-semibold text-white px-4 py-3 rounded-lg mr-4"
            >
              DASHBOARD
            </Link>
            <Link
              to={`/sellerpanel/Auth/updateproduct/${id}`}
              className="bg-green-500 hover:rounded-xl  text-white px-4 py-2 rounded-lg"
            >
              BACK
            </Link>
          </div>
        </div>
        <div className="container mx-auto p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {img.map((image) => (
              <motion.div
                key={image.id}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover"
                />
                <div className="p-4">
                  <button
                    onClick={() => {
                      handleUpdate(image.alt, image.id);
                    }}
                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    Update
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
