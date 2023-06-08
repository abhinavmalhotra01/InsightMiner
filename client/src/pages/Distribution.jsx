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
import { BarGraph } from "../components/Graph";
// import {HorizontalBarChart} from "./HorizontalBarChart";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
const TopDashboard = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden bg-tertiary`}
    >
      <div>
        <h3 className={styles.sectionHeadText}>Dashboard</h3>
      </div>
      <div className="flex  h-3/6 w-3/6">
        <BarGraph />
      </div>
    </div>
  );
};

export default SectionWrapper(TopDashboard, "topdashboard");
