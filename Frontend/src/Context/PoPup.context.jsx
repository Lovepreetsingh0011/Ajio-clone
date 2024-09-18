import { createContext, useContext } from "react";
import {
  ToastContainer,
  toast,
  Slide,
  Zoom,
  Flip,
  Bounce,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Popupcontext = createContext();

export const PoPupcontextprovider = ({ children }) => {
  const Successmsg = (msg) => {
    toast.success(msg, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      // transition: Bounce,
    });
  };

  const Errormsg = (msg) => {
    toast.error(msg, {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };
  return (
    <Popupcontext.Provider value={{ Successmsg, Errormsg }}>
      {children}
    </Popupcontext.Provider>
  );
};

export const UsePopUp = () => {
  return useContext(Popupcontext);
};
