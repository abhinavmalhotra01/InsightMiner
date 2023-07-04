import React from "react";
import { StarsCanvas } from "../components/canvas";
import "react-vertical-timeline-component/style.min.css";
import ContributeComponent from "../components/ContributeComponent";

const ContributePage = () => {
  return (
    <>
      <div className="relative z-0 bg-primary">
        <div className="z-0">
          <StarsCanvas />
        </div>
        <ContributeComponent />
      </div>
    </>
  );
};

export default ContributePage;
