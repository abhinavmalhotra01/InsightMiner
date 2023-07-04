import React, { useEffect } from "react";
import LoginForm from "../components/Register/LoginForm";
import { StarsCanvas } from "../components/canvas";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const token = useSelector((state) => state.auth.token);
  const navigate=useNavigate();
  useEffect(()=>{
    if(token){
    console.log("a");
    navigate("/dashboard");
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
    </>
  );
};

export default Login;
