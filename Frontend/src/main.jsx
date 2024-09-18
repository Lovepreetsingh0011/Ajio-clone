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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="Signup" element={<SignUp />} />
      <Route path="Login" element={<Login />} />
      <Route path="OTPcheck/:Email" element={<OTPcheck />} />
      <Route path="signin" element={<SignUp />} />
      <Route path="Product-slug" element={<ProductSlug />} />
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
