import React, { useEffect } from "react";
import SignupForm from "../components/Register/RegisterForm";
import { StarsCanvas } from "../components/canvas";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      console.log("a");
      navigate("/dashboard");
    }
  }, [token]);
  return (
    <>
      <div className="relative z-0 bg-primary">
        <div className="z-0">
          <StarsCanvas />
        </div>
        <SignupForm />
      </div>
    </>
  );
};

export default SignUp;
