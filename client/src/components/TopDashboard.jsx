// import React, { useRef, useState } from "react";
// import SparkLine from "./Sparkline";
// import { motion } from "framer-motion";
// import { styles } from "../styles";
// import { Link } from "react-router-dom";
// import { SectionWrapper } from "../hoc";
// import { slideIn } from "../utils/motion";
// const Dashboard = () => {
//   const SparklineAreaData = [
//     { x: 1, yval: 2 },
//     { x: 2, yval: 6 },
//     { x: 3, yval: 8 },
//     { x: 4, yval: 5 },
//     { x: 5, yval: 10 },
//   ];
//   console.log(5);
//   return (
//     <div
//       className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
//     >
//       {/* <motion.div
//         variants={slideIn("left", "tween", 0.2, 1)}
//         className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
//       > */}
//         <div className="mt-5">
//           <SparkLine
//             currentColor="white"
//             id="line-sparkLine"
//             type="Line"
//             height="80px"
//             width="250px"
//             data={SparklineAreaData}
//             color="white"
//           />
//           {/* hehe */}
//         </div>
//       {/* </motion.div> */}
//     </div>
//   );
// };

// export default Dashboard;

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
import { BarGraph } from "./Graph";
// import {HorizontalBarChart} from "./HorizontalBarChart";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
const TopDashboard = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <div >
        <h3 className={styles.sectionHeadText}>Dashboard</h3>
      </div>
      <div className="flex  h-3/6 w-3/6">
          <BarGraph />
        </div>
    </div>
  );
};

export default SectionWrapper(TopDashboard,"topdashboard")