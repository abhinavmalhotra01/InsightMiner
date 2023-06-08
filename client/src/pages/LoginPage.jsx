import React from "react";
import LoginForm from "../components/Register/LoginForm";
import { StarsCanvas } from "../components/canvas";
const Login = () => {
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
