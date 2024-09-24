import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { dark } from "@mui/material/styles/createPalette";
import { ImCross } from "react-icons/im";
import { UsePopUp } from "../../../Context/PoPup.context";
import { Loader } from "../../Loader";

export const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { Successmsg, Errormsg } = UsePopUp();

  const [loading, setloading] = useState(false);
  const [getdata, setgetdata] = useState([]);
  const [ProductDeatils, setProductDeatils] = useState({
    Category: [],
    SubCategory: [],
  });
  const [req, setreq] = useState({
    Childsubcategory: [],
    Offer: [],
  });

  const [FetchCategory, setFetchCategory] = useState([]);
  const [FetchSubCategory, setFetchSubCategory] = useState([]);
  // Input Product Details Handlers
  const [productdetails, setproductdetails] = useState([]);
  const [getproductdetails, setgetproductdetails] = useState("");
  const detaishandler = () => {
    console.log(productdetails);

    if (getproductdetails != "") {
      setproductdetails([...productdetails, getproductdetails]);
      setgetproductdetails("");
    }
  };
  const delete_detail = (index) => {
    console.log(index);

    setproductdetails(productdetails.filter((_, id) => id != index));
  };
  // For response to the database
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
  const [categorydata, setcategorydata] = useState({ Category: "" });
  const [childcatedata, setchildcatedata] = useState({
    ChildSubCategory: "",
  });
  const [subcatedata, setsubcatedata] = useState({
    SubCategory: "",
  });
  const product = {
    images: [
      // "http://res.cloudinary.com/dlswmuuka/image/upload/v1725697728/o6hudbbxb…",
      // "http://res.cloudinary.com/dlswmuuka/image/upload/v1725697728/wbbokwqb5…",
      // "http://res.cloudinary.com/dlswmuuka/image/upload/v1725697729/ai5u6xxai…",
      // "http://res.cloudinary.com/dlswmuuka/image/upload/v1725697731/ojznkvuiu…",
      // "http://res.cloudinary.com/dlswmuuka/image/upload/v1725697732/zwc1emkrt…",
    ],

    productDetails: [
      {
        description:
          "Inspired by everyday athletes everywhere, Performax’s range of active …",
        title: "Lightweight Running Jacket with Inner Mesh",
        quantity: "12",
      },
    ],
  };
  const fetchproduct = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/app/api/product/seller_product_with_id/${id}`
      );

      setgetdata(res?.data?.data);
      const cat = await axios.get(
        `http://localhost:3000/app/api/category/getallwithChildSubCategory/${res?.data?.data?.ChildSubCategory?._id}`
      );

      const sub = await axios.get(
        `http://localhost:3000/app/api/category/getsingle/${res?.data?.data?.Category?._id}`
      );

      setProductDeatils({
        ...ProductDeatils,
        Category: cat?.data?.data,
        SubCategory: sub?.data?.data?.SubCategory,
      });
      setproductdetails(res?.data?.data?.ProductDetails);
    } catch (error) {
      console.log(error);
    }
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
      console.log("sub cat");

      console.log(res);

      setFetchSubCategory(res?.data?.data?.SubCategory);
    } catch (error) {
      console.log(error);
    }
  };
  const inputhandler = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const submithandler = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      const res = await axios.post(
        `http://localhost:3000/app/api/product/update_details/${id}`,
        {
          Name: data?.Name == "" ? getdata.Name : data?.Name,
          Category:
            categorydata?.Category == ""
              ? getdata?.Category?._id
              : categorydata?.Category,
          SubCategory:
            subcatedata?.SubCategory == ""
              ? getdata?.SubCategory?._id
              : subcatedata?.SubCategory,
          ChildSubCategory:
            childcatedata?.ChildSubCategory == ""
              ? getdata?.ChildSubCategory?._id
              : childcatedata.ChildSubCategory,
          ProductType: getdata.ProductType,
          CompanyName:
            data?.CompanyName == "" ? getdata.CompanyName : data?.CompanyName,
          MFD: data?.MFD == "" ? getdata.MFD : data?.MFD,
          Price: data?.Price == "" ? getdata.Price : data?.Price,
          Offerid: data?.Offerid == "" ? getdata?.Offerid._id : data?.Offerid,
          Description:
            data?.Description == "" ? getdata.Description : data?.Description,
          Title: data?.Title == "" ? getdata.Title : data?.Title,
          Quantity: data?.Quantity == "" ? getdata.Quantity : data?.Quantity,
          MFB: data?.MFB == "" ? getdata.MFB : data?.MFB,
          ProductDetails: productdetails,
        }
      );
      if (res?.data?.success) {
        Successmsg("Product Update Successfully");
        navigate("/sellerpanel/Auth/AllProducts");
      }
      setloading(false);
      console.log(res);
    } catch (error) {
      setloading(false);
      console.log(error);
      Errormsg("Cannot Update Product");
    }
  };
  useEffect(() => {
    fetchproduct();
    fetchdata();
    if (childcatedata?.ChildSubCategory != "") {
      fetchcategory();
    }
    if (categorydata?.Category != "") {
      fetchSubcategory();
    }
  }, [
    setchildcatedata,
    childcatedata,
    setcategorydata,
    categorydata,
    setproductdetails,
  ]);

  return (
    <>
      {" "}
      {!loading ? (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=" bg-black mx-auto p-8 lg:pt-[15vh] md:pt-[12vh] pb-[10vh]"
        >
          <h2 className="w-full text-center font-serif text-xl lg:text-4xl md:text-3xl sm:text-2xl  text-white">
            UPDATE PRODUCT
          </h2>
          <form
            onSubmit={submithandler}
            className="container mx-auto mt-[5vh] p-6"
          >
            <div className=" flex justify-between items-center mb-8">
              <Link
                to={"/sellerpanel/Auth"}
                className="text-xl bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
              >
                DASHBOARD
              </Link>
              <div>
                <Link
                  to={`/sellerpanel/Auth/UpdateImages/${id}`}
                  className="bg-gray-200  hover:rounded-xl font-semibold text-orange-950 px-4 py-3 rounded-lg mr-4"
                >
                  UPDATE IMAGE
                </Link>
                <button
                  type="submit"
                  className="bg-green-500 hover:rounded-xl text-white px-4 py-2 rounded-lg"
                >
                  UPDATE
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
              {/* First Box Genral INFO */}
              <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4">
                  General Information
                </h2>

                {/* Name */}
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="productName"
                  >
                    Product Name
                  </label>
                  <input
                    type="text"
                    id="productName"
                    name="Name"
                    placeholder="Product Name"
                    value={data.Name == "" ? getdata.Name : data.Name}
                    onChange={inputhandler}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                {/* Title */}
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="productName"
                  >
                    Product Title
                  </label>
                  <input
                    type="text"
                    id="productName"
                    name="Title"
                    placeholder="Product Title"
                    value={data.Title == "" ? getdata.Title : data.Title}
                    onChange={inputhandler}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>

              {/* Second Box Images */}
              <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
                {/* <h2 className="text-xl font-semibold mb-4">General Information</h2> */}

                {/* COmpany Name */}
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="productName"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="productName"
                    name="CompanyName"
                    placeholder="CompanyName"
                    value={
                      data.CompanyName == ""
                        ? getdata.CompanyName
                        : data.CompanyName
                    }
                    onChange={inputhandler}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                {/* MFD */}
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="productName"
                  >
                    Product MFD
                  </label>
                  <input
                    type="date"
                    id="productName"
                    name="MFD"
                    placeholder="MFD"
                    Value={
                      getdata.MFD
                        ? new Date(getdata?.MFD).toISOString().substring(0, 10)
                        : ""
                    }
                    onChange={inputhandler}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                {/*  MFB */}
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="productName"
                  >
                    Product MFB
                  </label>
                  <textarea
                    id="description"
                    name="MFB"
                    placeholder="MFB"
                    value={data.MFB == "" ? getdata.MFB : data.MFB}
                    onChange={inputhandler}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    rows="2"
                  />
                </div>
              </div>

              {/* Third Box */}
              <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4">
                  Pricing And Stock
                </h2>
                {/* Price */}
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="price"
                  >
                    Base Pricing
                  </label>
                  <input
                    type="text"
                    id="price"
                    placeholder="Product Price"
                    name="Price"
                    value={data?.Price == "" ? getdata?.Price : data?.Price}
                    onChange={inputhandler}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                {/* Final Price */}
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="finalPrice"
                  >
                    Final Price (After Discount)
                  </label>
                  <input
                    type="text"
                    id="finalPrice"
                    value={getdata?.FinalPrice}
                    disabled
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="stock"
                    >
                      Stock
                    </label>
                    <input
                      type="number"
                      id="stock"
                      placeholder="Product Quantity"
                      name="Quantity"
                      value={
                        data?.Quantity == ""
                          ? getdata?.Quantity
                          : data?.Quantity
                      }
                      onChange={inputhandler}
                      className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                  </div>

                  <div>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="discount"
                    >
                      Discount Percentage
                    </label>
                    <select
                      required={true}
                      className="w-full p-2 mt-4 border border-gray-300 rounded-md"
                      name="Offerid"
                      onChange={inputhandler}
                    >
                      <option value={getdata?.Offerid?._id}>
                        {getdata?.Offerid?.Discount}
                      </option>
                      {req?.Offer?.map((value) => {
                        return (
                          <>
                            {value._id != getdata?.Offerid?._id ? (
                              <>
                                <option
                                  key={value._id}
                                  value={value._id}
                                  className="text-black"
                                >
                                  {value.Discount}
                                </option>
                              </>
                            ) : (
                              ""
                            )}
                          </>
                        );
                      })}
                    </select>
                  </div>
                </div>
              </div>

              {/* Fourth BOX */}
              <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Category</h2>
                {/*ChildSubCategory */}
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="category"
                  >
                    Product Category Group
                  </label>

                  <select
                    required={true}
                    onChange={(e) =>
                      setchildcatedata({ ChildSubCategory: e.target.value })
                    }
                    className="w-full p-2 mt-4 border border-gray-300 rounded-md"
                  >
                    <option value={getdata?.ChildSubCategory?._id}>
                      {" "}
                      {getdata?.ChildSubCategory?.Name}
                    </option>
                    {req?.Childsubcategory?.map((value) => {
                      return (
                        <>
                          {value._id != getdata?.ChildSubCategory?._id ? (
                            <>
                              <option
                                key={value._id}
                                value={value._id}
                                className="text-black"
                              >
                                {value.Name}
                              </option>
                            </>
                          ) : (
                            ""
                          )}
                        </>
                      );
                    })}
                  </select>
                </div>
                {/* Category */}
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="category"
                  >
                    Product Category
                  </label>

                  <select
                    required={true}
                    onChange={(e) =>
                      setcategorydata({ Category: e.target.value })
                    }
                    className="w-full p-2 mt-4 border border-gray-300 rounded-md"
                  >
                    {childcatedata.ChildSubCategory == "" ? (
                      <option value={getdata?.Category?._id}>
                        {" "}
                        {getdata?.Category?.Name}
                      </option>
                    ) : (
                      <option value=""> --Selete Category--</option>
                    )}

                    {childcatedata.ChildSubCategory == ""
                      ? ProductDeatils?.Category.map((value) => {
                          return (
                            <>
                              {value._id != getdata?.Category?._id ? (
                                <>
                                  <option
                                    key={value._id}
                                    value={value._id}
                                    className="text-black"
                                  >
                                    {value.Name}
                                  </option>
                                </>
                              ) : (
                                ""
                              )}
                            </>
                          );
                        })
                      : FetchCategory?.map((value) => {
                          return (
                            <>
                              <option
                                key={value._id}
                                value={value._id}
                                className="text-black"
                              >
                                {value.Name}
                              </option>
                            </>
                          );
                        })}
                  </select>
                </div>
                {/* Sub Category */}
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="category"
                  >
                    Product SubCategory
                  </label>

                  <select
                    required={true}
                    onChange={(e) =>
                      setsubcatedata({ SubCategory: e.target.value })
                    }
                    className="w-full p-2 mt-4 border border-gray-300 rounded-md"
                  >
                    {categorydata.Category == "" ? (
                      <option value={getdata?.SubCategory?._id}>
                        {" "}
                        {getdata?.SubCategory?.Name}
                      </option>
                    ) : (
                      <option value=""> --Selete Category--</option>
                    )}

                    {categorydata?.Category == ""
                      ? ProductDeatils?.SubCategory.map((value) => {
                          return (
                            <>
                              {value._id != getdata?.SubCategory?._id ? (
                                <>
                                  <option
                                    key={value._id}
                                    value={value._id}
                                    className="text-black"
                                  >
                                    {value.Name}
                                  </option>
                                </>
                              ) : (
                                ""
                              )}
                            </>
                          );
                        })
                      : FetchSubCategory?.map((value) => {
                          return (
                            <>
                              <option
                                key={value._id}
                                value={value._id}
                                className="text-black"
                              >
                                {value.Name}
                              </option>
                            </>
                          );
                        })}
                  </select>
                </div>
              </div>
              {/* Fifth BOX */}
              <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4">
                  Pricing And Stock
                </h2>
                {/* Product Details */}
                <textarea
                  placeholder=" Product Details"
                  className="w-full p-2 mt-4 border border-gray-300 rounded-md"
                  rows="4"
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

              {/* Sixth BOX */}
              <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
                {/* <h2 className="text-xl font-semibold mb-4">Description</h2> */}

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="description"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="Description"
                    placeholder="Product Description"
                    value={
                      data.Description == ""
                        ? getdata.Description
                        : data.Description
                    }
                    onChange={inputhandler}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    rows="18"
                  />
                </div>
              </div>
            </div>
          </form>
        </motion.div>
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

// {/* Second Box Images */}
// <div className="bg-white p-6 rounded-lg shadow-lg">
// <h2 className="text-xl font-semibold mb-4">Upload Img</h2>
// <div className="flex space-x-4">
//   {product.images.map((image, index) => (
//     <div
//       key={index}
//       className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden"
//     >
//       <img
//         src={image}
//         alt={`Product ${index + 1}`}
//         className="w-full h-full object-cover"
//       />
//     </div>
//   ))}
//   <div className="w-24 h-24 bg-gray-200 rounded-lg flex justify-center items-center cursor-pointer">
//     <span className="text-gray-500 text-2xl">+</span>
//   </div>
// </div>
// </div>
