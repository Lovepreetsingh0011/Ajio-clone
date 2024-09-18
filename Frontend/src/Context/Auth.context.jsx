import { createContext, useContext, useEffect, useState } from "react";
import { json } from "react-router-dom";
import Cookies from "js-cookie";

const Authcontext = createContext();

export const AuthcontextProvider = ({ children }) => {
  const [Auth, setAuth] = useState({
    user: {},
    success: Boolean,
    other: {},
  });
  const [SellerAuth, setSellerAuth] = useState({
    seller: {},
    success: Boolean,
    other: {},
  });
  useEffect(() => {
    // const token = Cookies.get("Token");
    // console.log(token);
    const data = localStorage.getItem("user");
    const data2 = localStorage.getItem("seller");

    setAuth({ ...Auth, user: JSON.parse(data) });
    setSellerAuth({ ...SellerAuth, seller: JSON.parse(data2) });
  }, [setAuth, setSellerAuth]);
  return (
    <Authcontext.Provider value={{ Auth, setAuth, SellerAuth, setSellerAuth }}>
      {children}
    </Authcontext.Provider>
  );
};

export const UseAuth = () => {
  return useContext(Authcontext);
};
