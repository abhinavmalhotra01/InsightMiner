import React from "react";
import { StarsCanvas } from "../components/canvas";
import FeedbackForm from "../components/FeedbackForm";

const FeedbackPage = () => {
  
  return (
    <>
      <div className="relative z-0 bg-primary">
        <div className="z-0">
          <StarsCanvas />
        </div>
        <FeedbackForm />
      </div>
    </>
  );
};

export default FeedbackPage;
