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
import Sidebar from "../components/Sidebar";
import { BarGraph, McqGraph } from "../components/Graph";
// import {HorizontalBarChart} from "./HorizontalBarChart";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import Analytics from "../components/Analytics";
import Analytics2 from "../components/Analytics2";
import Analytics3 from "../components/Analytics3";
import Analytics4 from "../components/Analytics4";
import Analytics5 from "../components/Analytics5";
import Mcq1 from "../components/mcq1";
import Mcq2 from "../components/Mcq2";
const TopDashboard = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <div className="flex flex-col">
        <Analytics />
        <Analytics2 />
        <Analytics3/>
        <Analytics4/>
        {/* <Analytics5/> */}
        <Mcq1/>
        <Mcq2/>
      </div>
      {/* <Analytics/> */}
      {/* <div> */}
        {/* <Analytics2 /> */}
      {/* </div> */}
      {/* <Analytics2/> */}
    </div>
  );
};

export default SectionWrapper(TopDashboard, "topdashboard");
