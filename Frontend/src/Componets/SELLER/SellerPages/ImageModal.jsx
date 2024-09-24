import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { UsePopUp } from "../../../Context/PoPup.context";
import { Loader } from "../../Loader";
export const ImageModal = () => {
  const { Name, id, index } = useParams();
  const { Successmsg, Errormsg } = UsePopUp();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [imageSrc, setImageSrc] = useState([]);
  const [file, setfile] = useState("");
  const [data, setdata] = useState();
  const [loading, setloading] = useState(false);
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      console.log(file);
      setdata(file);
      const newImageSrc = URL.createObjectURL(file);
      setfile(newImageSrc);
    }
  };

  const fetchdata = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/app/api/product/seller_product_with_id/${id}`
      );
      let arr = [
        { id: 0, src: res?.data?.data?.Image, alt: "Image" },
        { id: 1, src: res?.data?.data?.Image1, alt: "Image1" },
        { id: 2, src: res?.data?.data?.Image2, alt: "Image2" },
        { id: 3, src: res?.data?.data?.Image3, alt: "Image3" },
        { id: 4, src: res?.data?.data?.Image4, alt: "Image4" },
      ];

      setImageSrc(arr.filter((value) => value.alt == Name));

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const Cancelbtn = () => {
    navigate(`/sellerpanel/Auth/UpdateImages/${id}`);
  };
  const updatehandler = async () => {
    try {
      // setIsModalOpen(false);
      setloading(true);
      const res = await axios.put(
        `http://localhost:3000/app/api/product/update_${Name}/${id}`,
        {
          Img: data,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (res?.data?.success) {
        Successmsg("Image Updated Successfully");
        navigate(`/sellerpanel/Auth/UpdateImages/${id}`);
        setloading(false);
      }
      setloading(false);
    } catch (error) {
      console.log(error);
      Errormsg("cannot Update Image");
      setloading(false);
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      {!loading ? (
        <div className="container mx-auto p-6 text-center ">
          <AnimatePresence>
            {isModalOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className=" fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="bg-white     p-6 rounded-lg shadow-lg max-w-lg w-full mx-4"
                >
                  <h2 className="text-xl font-semibold mb-4">Update {Name}</h2>
                  <img
                    src={file == "" ? imageSrc[0]?.src : file}
                    alt="Current"
                    className="w-[80%] h-auto mx-auto mb-4 rounded-lg shadow-md"
                  />
                  <input
                    type="file"
                    onChange={handleImageChange}
                    className="mb-4 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
                  />
                  <div className="flex justify-between">
                    <button
                      onClick={Cancelbtn}
                      className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={updatehandler}
                      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                      disabled={file == "" ? true : false}
                    >
                      Update
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
