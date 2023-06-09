import {
  Box,
  Grid,
  Heading,
  HStack,
  Progress,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { RiArrowDownLine, RiArrowUpLine } from "react-icons/ri";
import Sidebar from "./Sidebar";
import {
  BarGraph,
  LineGraph,
  LineGraph2,
  LineGraph3,
  RadarGraph,
  RadarGraph2,
  RadarGraph3,
} from "./Graph";
// import {HorizontalBarChart} from "./HorizontalBarChart";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
const TopDashboard = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <div>
        <h3 className={`${styles.sectionHeadText} text-zinc-600 `}>
          Question-3
        </h3>
        <div className="flex item-center mt-10">
          <LineGraph3 />
        </div>
        {/* <LineGraph/> */}
      </div>
      <div className="flex  h-3/6 w-3/6">
        <RadarGraph3 />
      </div>
    </div>
  );
};

export default SectionWrapper(TopDashboard, "topdashboard");