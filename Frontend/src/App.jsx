import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "./Componets/MainComp/Header";
import { PoPupcontextprovider } from "./Context/PoPup.context";
import { AuthcontextProvider } from "./Context/Auth.context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HeaderNavProvider } from "./Context/HeaderNav.context";

function App() {
  return (
    <>
      <AuthcontextProvider>
        <HeaderNavProvider>
          <PoPupcontextprovider>
            <Header />
            <Outlet />
          </PoPupcontextprovider>
          <ToastContainer />
        </HeaderNavProvider>
      </AuthcontextProvider>
    </>
  );
}

export default App;
