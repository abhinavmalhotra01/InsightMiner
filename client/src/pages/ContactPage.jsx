import React from "react";
import { StarsCanvas } from "../components/canvas";
import Contact from "../components/Contact";

const ContactPage = () => {
  return (
    <>
      <div className="relative z-0 bg-primary">
        <div className="z-0">
          <StarsCanvas />
        </div>
        <Contact/>
      </div>
    </>
  );
};

export default ContactPage;
