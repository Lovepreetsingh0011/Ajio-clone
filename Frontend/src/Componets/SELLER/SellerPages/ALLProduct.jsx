import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { SellerSideBar } from "../DashBoard/SellerSideBar";
import axios from "axios";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { filledInputClasses } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const ALLProduct = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState([]);
  const [search, setsearch] = useState("");
  const [filtersearch, setfiltersearch] = useState([]);
  const columns = [
    {
      name: "Name",
      selector: (row) => row.Name,
      sortable: true,
    },
    {
      name: "CompanyName",
      selector: (row) => row.CompanyName,
    },
    {
      name: "Price",
      selector: (row) => row.Price,
    },
    {
      name: "Imgae",
      selector: (row) => <img src={row.Image} width={60} height={60} />,
    },
    {
      name: "Actions",
      cell: (row) => {
        return (
          <>
            <Link
              to={`/sellerpanel/Auth/updateproduct/${row._id}`}
              className="px-3 mr-1 py-2 text-center bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
            >
              <FaEdit className="text-xl text-gray-800" />
            </Link>
            <button
              onClick={() => deletehandler(row._id)}
              className="px-3  py-2 text-center bg-red-500 text-white rounded-lg shadow hover:bg-red-600"
            >
              <MdDeleteForever className="text-xl " />
            </button>
          </>
        );
      },
    },
  ];
  const reqhandler = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/app/api/product/all_seller_product"
      );
      const d = res?.data?.data;
      setdata(d.reverse());
      setfiltersearch(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deletehandler = (id) => {
    navigate(`/sellerpanel/Auth/DeleteProduct/${id}`);
  };
  useEffect(() => {
    reqhandler();
  }, []);

  useEffect(() => {
    const result = data.filter((value) => {
      return value.Name.toLowerCase().match(search.toLowerCase());
    });
    setfiltersearch(result);
  }, [search]);
  return (
    <>
      <div className="bg-slate-50  lg:pt-[10vh] md:pt-[8vh] pb-[5vh] flex flex-col w-[100vw]  min-h-screen    text-gray-950">
        <div className="container mx-auto pt-5 pl-5 pr-5 ">
          <div className=" py-5 pb-3   h-auto text-center text-gray-50  my-5 ">
            <h2 className="text-4xl  font-serif text-black  ">
              SELLER ALL PRODUCTS
            </h2>{" "}
          </div>
          <div className="container mx-auto mt-[2vh] flex justify-between items-center mb-8">
            <h2></h2>
            <div className="flex justify-center items-center">
              <motion.div
                whileHover={{
                  scale: 1.05,
                  backdropFilter: "blur(5px)",
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
                className="p-1 rounded-lg mr-2"
              >
                <Link
                  to={`/sellerpanel/Auth`}
                  className="bg-gray-300 text-gray-950 text-2xl font-serif  px-6 py-3 rounded-lg transition-all duration-300 ease-in-out   "
                >
                  DASHBOARD
                </Link>
              </motion.div>
            </div>
          </div>
          <div className="bg-gray-300 p-8 rounded-lg  ">
            <DataTable
              columns={columns}
              data={filtersearch}
              pagination
              selectableRows
              highlightOnHover
              // title={"Your All Products"}
              selectableRowsHighlight
              fixedHeader
              subHeader
              subHeaderComponent={
                <input
                  type="text"
                  placeholder="Search Here"
                  className=" px-4 py-2 my-5 text-gray-900 placeholder-gray-400 bg-gray-100 rounded-2xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition duration-300 ease-in-out shadow-md"
                  value={search}
                  onChange={(e) => setsearch(e.target.value)}
                />
              }
              subHeaderAlign="left"
            />
          </div>
        </div>{" "}
      </div>
    </>
  );
};
