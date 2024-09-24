import React, { useEffect, useState } from "react";
import { SellerSideBar } from "../DashBoard/SellerSideBar";
import { motion } from "framer-motion";
import axios from "axios";
import { ImCross } from "react-icons/im";
import { Loader } from "../../Loader";
import { UsePopUp } from "../../../Context/PoPup.context";
import { Link } from "react-router-dom";

export const SellerAddProduct = () => {
  const { Successmsg, Errormsg } = UsePopUp();
  const [loading, setloading] = useState(false);
  const [selectedType, setselectedType] = useState("");
  const [imgshow, setimgshow] = useState(null);
  const [req, setreq] = useState({
    Childsubcategory: [],
    Offer: [],
  });
  const [FetchCategory, setFetchCategory] = useState([]);
  const [FetchSubCategory, setFetchSubCategory] = useState([]);
  const [data, setdata] = useState({
    Name: "",
    ProductType: "",
    CompanyName: "",
    MFD: "",
    Price: "",
    Offerid: "",
    Description: "",
    Title: "",
    Quantity: "",
    MFB: "",
  });
  const [File, setFile] = useState({
    img1: {},
    img2: {},
    img3: {},
    img4: {},
    img5: {},
  });
  const [categorydata, setcategorydata] = useState({ Category: "" });
  const [childcatedata, setchildcatedata] = useState({ ChildSubCategory: "" });
  const [subcatedata, setsubcatedata] = useState({ SubCategory: "" });

  // Input Handler
  const Inputhandler = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const fetchdata = async () => {
    try {
      const childcat = await axios.get(
        "http://localhost:3000/app/api/ChildSubCategory/getall"
      );
      const offer = await axios.get(
        "http://localhost:3000/app/api/offer/getall"
      );

      setreq({
        ...req,
        Childsubcategory: childcat?.data?.data,
        Offer: offer?.data?.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchcategory = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/app/api/category/getallwithChildSubCategory/${childcatedata?.ChildSubCategory}`
      );

      setFetchCategory(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchSubcategory = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/app/api/category/getsingle/${categorydata?.Category}`
      );

      setFetchSubCategory(res?.data?.data?.SubCategory);
    } catch (error) {
      console.log(error);
    }
  };

  // Input Product Details Handlers
  const [productdetails, setproductdetails] = useState([]);
  const [getproductdetails, setgetproductdetails] = useState("");

  const detaishandler = () => {
    if (getproductdetails != "") {
      setproductdetails([...productdetails, getproductdetails]);
      setgetproductdetails("");
    }
  };
  const delete_detail = (index) => {
    // console.log(index);

    setproductdetails(productdetails.filter((_, id) => id != index));
  };

  // SUbMIT Handler
  const submithandler = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      const res = await axios.post(
        "http://localhost:3000/app/api/product/create",
        {
          image: File?.img1,
          image1: File?.img2,
          image2: File?.img3,
          image3: File?.img4,
          image4: File?.img5,
          Name: data?.Name,
          Category: categorydata?.Category,
          SubCategory: subcatedata?.SubCategory,
          ChildSubCategory: childcatedata?.ChildSubCategory,
          ProductType: data?.ProductType,
          CompanyName: data?.CompanyName,
          MFD: data?.MFD,
          Price: data?.Price,
          Offerid: data?.Offerid,
          Description: data?.Description,
          Title: data?.Title,
          Quantity: data?.Quantity,
          MFB: data?.MFB,
          ProductDetails: productdetails,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (res?.data?.success) {
        Successmsg("Product Uploaded Successfully");
        setdata({
          Name: "",
          ProductType: "",
          CompanyName: "",
          MFD: "",
          Price: "",
          Offerid: "",
          Description: "",
          Title: "",
          Quantity: "",
          MFB: "",
        });
        setFile({
          img1: {},
          img2: {},
          img3: {},
          img4: {},
          img5: {},
        });
        setproductdetails([]);
        setcategorydata({ Category: "" });
        setchildcatedata({ ChildSubCategory: "" });
        setsubcatedata({ SubCategory: "" });
        setimgshow(null);
        setselectedType("");
      }
      setloading(false);
    } catch (error) {
      setloading(false);
      console.log(error);
      Errormsg("Cannot Uploaded Product");
    }
  };

  const imgshowhandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setimgshow(reader.result); // Set the file's base64 string
    };

    if (file) {
      reader.readAsDataURL(file); // Read the file and convert it to base64
    }
  };
  useEffect(() => {
    fetchdata();
    if (childcatedata?.ChildSubCategory != "") {
      fetchcategory();
    }
    if (categorydata?.Category != "") {
      fetchSubcategory();
    }
  }, [setchildcatedata, childcatedata, setcategorydata, categorydata]);
  return (
    <>
      {!loading ? (
        <div className=" mx-auto p-8 bg-slate-950 flex flex-col w-[100vw]   pb-[20vh] pt-[10vh] rounded-md   ">
          <div className="container mx-auto mt-[10vh] flex justify-between items-center mb-8">
            <h2></h2>
            <div className="flex justify-center items-center">
              <motion.div
                whileHover={{
                  scale: 1.05,
                  // background: "rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(5px)",
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
                className="p-1 rounded-lg mr-2"
              >
                <Link
                  to={`/sellerpanel/Auth`}
                  className="bg-gray-300 text-gray-950 font-serif text-xl px-6 py-3 rounded-lg transition-all duration-300 ease-in-out   "
                >
                  DASHBOARD
                </Link>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  // background: "rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(5px)",
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
                className="p-1 rounded-lg"
              >
                <Link
                  to={`/sellerpanel/Auth/AllProducts`}
                  className="bg-green-500 text-gray-950 font-semibold px-6 py-3 rounded-lg transition-all duration-300 ease-in-out hover:bg-green-500/80 "
                >
                  BACK
                </Link>
              </motion.div>
              {/* <button
                type="submit"
                className="bg-green-500 hover:rounded-xl text-white px-4 py-2 rounded-lg"
              >
                UPDATE
              </button> */}
            </div>
          </div>
          <div className="p-6  min-h-screen flex flex-col items-center">
            <motion.form
              onSubmit={submithandler}
              className="bg-gray-300 rounded-lg shadow-lg p-6 pt-10 pb-8  w-full max-w-4xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-xl bg-slate-950 rounded-lg font-serif text-white py-8 md:text-3xl font-bold mb-10 w-full text-center ">
                Add New Product
              </h1>

              {/* First Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h2 className="font-semibold text-lg">General Information</h2>
                  {/* Product Name */}
                  <input
                    type="text"
                    required={true}
                    placeholder="Name Product"
                    name="Name"
                    onChange={Inputhandler}
                    value={data.Name}
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                  />
                  {/* Product Title */}
                  <textarea
                    required={true}
                    placeholder="Product Title"
                    className="w-full p-2 mt-4 border border-gray-300 rounded-md"
                    rows="4"
                    name="Title"
                    onChange={Inputhandler}
                    value={data.Title}
                  ></textarea>
                </div>

                {/* Upload Image1 */}
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h2 className="font-semibold text-lg">Upload Image</h2>
                  <input
                    required={true}
                    type="file"
                    name="img1"
                    onChange={(e) => {
                      setFile({ ...File, img1: e.target.files[0] });
                      imgshowhandler(e);
                    }}
                    id=""
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                  />
                  <motion.div
                    className="border-dashed border-2 border-gray-300 p-4 rounded-lg mt-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img
                      src={
                        imgshow ? imgshow : "https://via.placeholder.com/150"
                      }
                      alt="product"
                      className="rounded-lg"
                    />
                  </motion.div>
                </div>
              </div>

              {/* Second Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h2 className="font-semibold text-lg pl-1">Image No:2</h2>
                  {/* Image-2 */}
                  <input
                    required={true}
                    type="file"
                    name="img2"
                    onChange={(e) =>
                      setFile({ ...File, img2: e.target.files[0] })
                    }
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                  />

                  <h2 className="font-semibold text-lg pt-2 pl-1">
                    Image No:3
                  </h2>
                  {/* Image-3 */}
                  <input
                    required={true}
                    type="file"
                    name="img3"
                    onChange={(e) =>
                      setFile({ ...File, img3: e.target.files[0] })
                    }
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                  />
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <h2 className="font-semibold text-lg pl-1">Image No:4</h2>
                  {/* Image-4 */}
                  <input
                    required={true}
                    type="file"
                    name="img4"
                    onChange={(e) =>
                      setFile({ ...File, img4: e.target.files[0] })
                    }
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                  />
                  <h2 className="font-semibold text-lg pt-2 pl-1">
                    Image No:5
                  </h2>
                  {/* Image-5 */}
                  <input
                    type="file"
                    required={true}
                    name="img5"
                    onChange={(e) =>
                      setFile({ ...File, img5: e.target.files[0] })
                    }
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>

              {/* Third Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h2 className="font-semibold text-lg">Pricing and Stock</h2>
                  {/* Price */}
                  <input
                    type="number"
                    required={true}
                    placeholder="Base Pricing"
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                    name="Price"
                    onChange={Inputhandler}
                    value={data.Price}
                  />
                  {/* Quantity */}
                  <input
                    required={true}
                    type="number"
                    placeholder="Stock"
                    className="w-full p-2 mt-4 border border-gray-300 rounded-md"
                    name="Quantity"
                    onChange={Inputhandler}
                    value={data.Quantity}
                  />
                </div>

                {/* Discount Section */}
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h2 className="font-semibold text-lg">
                    Discount and Category
                  </h2>
                  {/* Discount */}
                  <select
                    required={true}
                    className="w-full p-2 mt-4 border border-gray-300 rounded-md"
                    name="Offerid"
                    onChange={Inputhandler}
                  >
                    <option value=""> --Discount--</option>
                    {req?.Offer?.map((value) => {
                      return (
                        <option key={value._id} value={value._id}>
                          {" "}
                          {value.Discount}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              {/* Fourth Row  */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h2 className="font-semibold text-lg">Pricing and Stock</h2>
                  {/* ChildSubCategory */}
                  <select
                    required={true}
                    onChange={(e) =>
                      setchildcatedata({ ChildSubCategory: e.target.value })
                    }
                    className="w-full p-2 mt-4 border border-gray-300 rounded-md"
                  >
                    <option value=""> --Selete Category Group--</option>
                    {req?.Childsubcategory?.map((value) => {
                      return (
                        <option
                          key={value._id}
                          value={value._id}
                          className="text-black"
                        >
                          {value.Name}
                        </option>
                      );
                    })}
                  </select>
                  {/* Category */}

                  <select
                    required={true}
                    onChange={(e) =>
                      setcategorydata({ Category: e.target.value })
                    }
                    className="w-full p-2 mt-4 border border-gray-300 rounded-md"
                  >
                    <option value="">--Selete Category--</option>
                    {FetchCategory?.map((value) => {
                      return (
                        <option
                          value={value._id}
                          key={value._id}
                          className="text-black"
                        >
                          {value.Name}
                        </option>
                      );
                    })}
                  </select>

                  {/* SubCategory */}
                  <select
                    required={true}
                    onChange={(e) =>
                      setsubcatedata({ SubCategory: e.target.value })
                    }
                    className="w-full p-2 mt-4 border border-gray-300 rounded-md"
                  >
                    <option value="">--Selete Sub Category--</option>
                    {FetchSubCategory?.map((value) => {
                      return (
                        <option
                          value={value._id}
                          key={value._id}
                          className="text-black"
                        >
                          {value.Name}
                        </option>
                      );
                    })}
                  </select>
                </div>

                {/* MFD and MFB */}
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h2 className="font-semibold text-lg"> --MFD--</h2>
                  <input
                    required={true}
                    type="date"
                    name="MFD"
                    value={data.MFD}
                    onChange={Inputhandler}
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                  />
                  <h2 className="font-semibold text-lg p-2 mt-2 ">--MFB--</h2>

                  <input
                    name="MFB"
                    required={true}
                    value={data.MFB}
                    onChange={Inputhandler}
                    type="text"
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                    placeholder="Manufacture by"
                  />
                </div>
              </div>

              {/* FiFth Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                {/* Company Name */}
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h2 className="font-semibold text-lg p-2 mt-2 ">
                    Company Name
                  </h2>

                  <input
                    required={true}
                    type="text"
                    name="CompanyName"
                    value={data.CompanyName}
                    onChange={Inputhandler}
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                    placeholder="Company Name "
                  />
                </div>

                {/* Product Type */}
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h2 className="font-semibold text-lg">Product Type</h2>
                  <div className="grid grid-cols-4 gap-4 space-x-4 mt-2">
                    {["Clothes", "Bags", "Goggles", "Shoes", "Fashion"].map(
                      (type) => (
                        <button
                          key={type}
                          required={true}
                          type="button"
                          className={`p-2 rounded-md border bg-gray-200  ${
                            selectedType == type
                              ? "bg-green-200"
                              : "bg-gray-200"
                          } `}
                          onClick={() => {
                            setselectedType(type);
                            setdata({ ...data, ProductType: type });
                          }}
                        >
                          {type}
                        </button>
                      )
                    )}
                  </div>
                </div>
              </div>
              {/* Sixth Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h2 className="font-semibold text-lg">PRODUCT DETAILS</h2>
                  {/* Product Details */}
                  <textarea
                    placeholder=" Product Details"
                    className="w-full p-2 mt-4 border border-gray-300 rounded-md"
                    rows="1"
                    onChange={(e) => setgetproductdetails(e.target.value)}
                    value={getproductdetails}
                  ></textarea>
                  <motion.button
                    type="button"
                    className="px-4 py-2 mt-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={detaishandler}
                  >
                    Add Details
                  </motion.button>
                  {/* Quantity */}
                  {productdetails?.map((value, index) => {
                    return (
                      <div key={index} className="flex items-center">
                        <textarea
                          required={true}
                          className="w-[90%] p-2 mt-4 border border-gray-300 rounded-md"
                          // rows="1"
                          value={value}
                          readOnly
                        ></textarea>
                        <ImCross
                          className="w-[10%] text-red-500"
                          onClick={() => delete_detail(index)}
                        />
                      </div>
                    );
                  })}
                </div>

                {/* Description */}
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h2 className="font-semibold text-lg">Product Description</h2>
                  <textarea
                    placeholder="Description Product"
                    required={true}
                    className="w-full p-2 mt-4 border border-gray-300 rounded-md"
                    rows="4"
                    name="Description"
                    onChange={Inputhandler}
                    value={data.Description}
                  ></textarea>
                </div>
              </div>
              {/* Submit Section */}
              <div className="flex justify-between mt-10">
                <Link to={"/sellerpanel/Auth"}>
                  <motion.button
                    type="button"
                    className="px-4 py-2 bg-gray-300 rounded-lg shadow hover:bg-gray-400"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Back
                  </motion.button>
                </Link>
                <motion.button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Add Product
                </motion.button>
              </div>
            </motion.form>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Loader />
        </motion.div>
      )}
    </>
  );
};
