import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function SellerApp() {
  const navigate = useNavigate();
  const [data, setdata] = useState([]);

  useEffect(() => {
    const res = localStorage.getItem("user");
    setdata(JSON.parse(res));
    console.log(data);
  }, []);
  return (
    <>
      {data?.success ? (
        <Outlet />
      ) : (
        <>
          <div className="min-h-screen  flex items-center justify-center bg-black">
            <div className="bg-white min-w-[30vw] p-8 rounded-lg shadow-lg text-center">
              <h1 className="text-4xl font-bold text-red-600 mb-4">403</h1>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Unauthorized Access
              </h2>
              <p className="font-semibold text-gray-800 mb-6">
                User Login Required
              </p>
              <a
                href="/"
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
              >
                Go to Homepage
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
}
