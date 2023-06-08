import React from "react";
import SignupForm from "../components/Register/RegisterForm";
import { StarsCanvas } from "../components/canvas";
const SignUp = () => {
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
