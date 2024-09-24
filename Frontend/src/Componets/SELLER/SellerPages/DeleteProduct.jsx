import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CgDanger } from "react-icons/cg";
import { redirect, useNavigate, useParams } from "react-router-dom";
import { Login } from "../../AuthComp/Login";
import axios from "axios";
import { UsePopUp } from "../../../Context/PoPup.context";

import { Loader } from "../../Loader";
export const DeleteProduct = () => {
  const { id } = useParams();
  const { Successmsg, Errormsg } = UsePopUp();
  const [loding, setloding] = useState(false);
  const navigate = useNavigate();

  const cancelhandler = () => {
    navigate("/sellerpanel/Auth/AllProducts");
  };

  const deletehandler = async () => {
    try {
      setloding(true);
      const res = await axios.delete(
        `http://localhost:3000/app/api/product/delete_seller_product/${id}`
      );

      if (res?.data?.success) {
        navigate("/sellerpanel/Auth/AllProducts");
        Successmsg("Product Delete Successfully");
        setloding(false);
      }
      setloding(false);
    } catch (error) {
      console.log(error);
      Errormsg("cannot delete Product");
      setloding(false);
    }
  };
  const toggleModal = () => setIsOpen(!isOpen);
  return (
    <>
      {!loding ? (
        <div className="min-h-screen flex items-center justify-center bg-gray-200">
          <AnimatePresence>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/3 p-6 relative"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
              >
                {/* Close Button */}
                <button
                  onClick={cancelhandler}
                  className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <CgDanger className="h-12 w-12 text-pink-500" />
                </div>

                {/* Modal Title */}
                <h2 className="text-2xl font-semibold text-gray-800 text-center">
                  Are you sure?
                </h2>

                {/* Modal Message */}
                <p className="mt-2 text-gray-600 text-center">
                  Do you really want to delete these records? This process
                  cannot be undone.
                </p>

                {/* Action Buttons */}
                <div className="mt-6 flex justify-center space-x-4">
                  <button
                    onClick={cancelhandler}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => deletehandler()}
                    className="px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700"
                  >
                    Delete
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
