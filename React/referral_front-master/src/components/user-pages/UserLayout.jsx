import PostReferral from "./PostReferral";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";
import Sidenav from "./WelcomeCard";
import Navigation from "./Navigation";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";

function UserLayout({ children }) {
  useEffect(() => {
    const loginSuccess = () => {
      toast.success("Login Successful!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        toastId: "success1",
      });
    };
    loginSuccess();
  }, []);
  return (
    <div className="home-div">
      {
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      }
      <PostReferral />
      <Sidenav />
      <div className="content-view">{children}</div>
      <Navigation />
    </div>
  );
}

export default UserLayout;
