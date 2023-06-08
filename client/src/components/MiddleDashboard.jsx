import React from "react";
import { RiArrowDownLine, RiArrowUpLine } from "react-icons/ri";
import Sidebar from "./Sidebar";
import { BarGraph, RadarGraph } from "./Graph";
// import {HorizontalBarChart} from "./HorizontalBarChart";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
const MiddleDashboard = () => {
    console.log(5);
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <div>
        <h3 className={styles.sectionHeadText}>Dashboard</h3>
      </div>
      <div className="flex bg-tertiary  h-3/6 w-3/6">
        <RadarGraph />
      </div>
    </div>
  );
};

export default SectionWrapper(MiddleDashboard, "middledashboard");
