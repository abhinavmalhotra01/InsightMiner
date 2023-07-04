import React from 'react'
import FlexBetween from '../components/FlexBetween';
import { styles } from '../styles';
import { Box, useMediaQuery } from '@mui/material';
import { Typewriter } from 'react-simple-typewriter';
import Lottie from "react-lottie";
import animationData from '../assets/lottie/dashboard'
import animationData2 from '../assets/lottie/seoDB'
function Dashboard() {
    const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
    const defaultOptions2 = {
      loop: true,
      autoplay: true,
      animationData: animationData2,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
  return (
    <Box marginTop="6rem" marginLeft="1.5rem">
      <FlexBetween>
        <h2 className={`${styles.heroHeadText} text-white`}>
          {isNonMediumScreens && (
            <Typewriter words={["Dashboard"]} cursor typeSpeed={70} />
          )}
          {!isNonMediumScreens && <h2>"Dashboard"</h2>}
        </h2>
      </FlexBetween>
      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          "& > div": {
            gridColumn: isNonMediumScreens ? undefined : "span 12",
          },
        }}
      >
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          p="1rem"
          borderRadius="0.55rem"
          // marginY="3rem"
          className="overflow-auto mx-auto my-auto"
        >
          <Lottie options={defaultOptions} />
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 3"
          //   p="1rem"
          borderRadius="0.55rem"
          // marginY="3rem"
          height="100%"
          className="overflow-hidden mx-auto my-auto"
        >
          <h3 className={`${styles.sectionSubText}`}>
            Kindly Navigate to respective policy's page to view the analysis
          </h3>
          <Lottie options={defaultOptions2} />
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard