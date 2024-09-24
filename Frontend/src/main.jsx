import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./Componets/MainComp/Home.jsx";
import { ProductSlug } from "./Componets/User/Product/ProductSlug.jsx";
import { SignUp } from "./Componets/AuthComp/SignUp.jsx";
import { Login } from "./Componets/AuthComp/Login.jsx";
import { OTPcheck } from "./Componets/AuthComp/OTPcheck.jsx";
import SellerLoginOTP from "./Componets/SELLER/Seller-Auth/SellerLoginOTP.jsx";
import { SellerLoginCheck } from "./Componets/SELLER/Seller-Auth/SellerLoginCheck.jsx";
import SellerPanel from "./Componets/SELLER/SellerPanel.jsx";
import SellerApp from "./Componets/SELLER/SellerApp.jsx";
import { SellerSignup } from "./Componets/SELLER/Seller-Auth/SellerSignup.jsx";
import SellerPanelAuthApp from "./Componets/SELLER/SellerPanelAuthApp.jsx";
import { SellerDashboard } from "./Componets/SELLER/DashBoard/SellerDashboard.jsx";
import { SellerAccount } from "./Componets/SELLER/DashBoard/SellerAccount.jsx";
import { SellerAddProduct } from "./Componets/SELLER/SellerPages/SellerAddProduct.jsx";
import { Loader } from "./Componets/Loader.jsx";
import { ALLProduct } from "./Componets/SELLER/SellerPages/ALLProduct.jsx";
import { UpdateProduct } from "./Componets/SELLER/SellerPages/UpdateProduct.jsx";
import { UpdateImage } from "./Componets/SELLER/SellerPages/UpdateImage.jsx";
import { ImageModal } from "./Componets/SELLER/SellerPages/ImageModal.jsx";
import { DeleteProduct } from "./Componets/SELLER/SellerPages/DeleteProduct.jsx";
import { AllSuBCategoryProducts } from "./Componets/User/Product/GetAllBySubCategory.jsx/AllSuBCategoryProducts.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="Signup" element={<SignUp />} />
      <Route path="Login" element={<Login />} />
      <Route path="OTPcheck/:Email" element={<OTPcheck />} />
      <Route path="signin" element={<SignUp />} />
      <Route path="Product-slug/:id" element={<ProductSlug />} />
      <Route path="loader" element={<Loader />} />
      <Route
        path="GetAllBySubCat/:id/:Catid"
        element={<AllSuBCategoryProducts />}
      />
      /////////////////////////////////////////////////////////////////////
      /////////////////////////////////////////////////////////////////////
      ///////////////////////////////////////////////////////////////////// //
      // FOR SELLER
      <Route path="sellerpanel" element={<SellerApp />}>
        <Route path="" element={<SellerPanel />} />
        <Route path="SellerloginOTP" element={<SellerLoginOTP />} />
        <Route
          path="SellerloginOTPCheck/:Email"
          element={<SellerLoginCheck />}
        />
        <Route path="SellerSignup" element={<SellerSignup />} />
        ///////////////////////////////////////////////////////////////////////////
        {/*  Authorized Access / */}
        <Route path="Auth" element={<SellerPanelAuthApp />}>
          <Route path="" element={<SellerDashboard />} />
          <Route path="Account" element={<SellerAccount />} />
          <Route path="Addproduct" element={<SellerAddProduct />} />
          <Route path="AllProducts" element={<ALLProduct />} />
          <Route path="UpdateProduct/:id" element={<UpdateProduct />} />
          <Route path="UpdateImages/:id" element={<UpdateImage />} />
          <Route path="ImageModal/:index/:Name/:id" element={<ImageModal />} />
          <Route path="DeleteProduct/:id" element={<DeleteProduct />} />
        </Route>
      </Route>
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
