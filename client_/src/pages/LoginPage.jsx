import React, { useEffect } from "react";
import LoginForm from "../components/Register/LoginForm";
import { StarsCanvas } from "../components/canvas";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const token = useSelector((state) => state.auth.token);
  const navigate=useNavigate();
  useEffect(()=>{
    if(token){
    console.log("a");
    navigate("/dashboard");
  }else{
    toast.error("Kindly Login to view Dashboard", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
  }
  },[token])

  return (
    <>
      <div className="relative z-0 bg-primary">
        <div className="z-0">
          <StarsCanvas />
        </div>
        <LoginForm />
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
