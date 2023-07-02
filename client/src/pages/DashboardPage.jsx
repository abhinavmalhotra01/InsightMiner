import React, { useEffect } from "react";
import { Box, useMediaQuery } from "@mui/material";
import FlexBetween from "../components/FlexBetween";
import { styles } from "../styles";
import { useLocation, useNavigate } from "react-router-dom";
import Consensus from "../components/Consensus";
import { Typewriter } from "react-simple-typewriter";
import RatingsChart from "../components/RatingsChart";
import SentimentsChart from "../components/SentimentsChart";
import KeywordChart from "../components/KeywordChart";

const DashboardPage = () => {
  const location = useLocation();
  const pathName = location.pathname.split('/')[2];
  const navigate=useNavigate();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  useEffect(() => {
    if (
      pathName != "GST" &&
      pathName != "Demonetisation" &&
      pathName != "MakeInIndia" &&
      pathName != "StartupScheme" &&
      pathName != "SwachBharat"
    ) {
      navigate("/404");
      console.log("a");
    }
  }, []);
  let title;
  if (pathName === "MakeInIndia") {
    title = "Make In India";
  }
  if (pathName === "GST") {
    if(!isNonMediumScreens){title="GST";}
    else{title = "Goods and Services Tax";}
  }
  if (pathName === "SwachBharat") {
    if (!isNonMediumScreens) {
      title = "Swachh Bharat";
    }
    else{title = "Swachh Bharat Abhiyan";}
  }
  if (pathName === "StartupScheme") {
    title = "Start Up Scheme";
  }
  if (pathName === "Demonetisation") {
    title = pathName;
  }
  const out=[title];
  return (
    <>
      <Box marginTop="6rem" marginLeft="1.5rem">
        <FlexBetween>
          <h2 className={`${styles.heroHeadText} text-white`}>
            {isNonMediumScreens && (
              <Typewriter words={out} loop cursor typeSpeed={70} />
            )}
            {!isNonMediumScreens && <h2>{out} </h2>}
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
            gridColumn="span 5"
            gridRow="span 2"
            p="1rem"
            borderRadius="0.55rem"
            marginY="3rem"
          >
            <Consensus pathName={pathName} />
          </Box>
          <Box
            gridColumn="span 5"
            gridRow="span 2"
            p="1rem"
            borderRadius="0.55rem"
            marginY="2rem"
            
          >
            <RatingsChart pathName={pathName} />
          </Box>

          <Box
            gridColumn="span 5"
            gridRow="span 3"
            p="1rem"
            borderRadius="0.55rem"
            marginY="3rem"
          >
            <SentimentsChart pathName={pathName} />
          </Box>
          <Box
            gridColumn="span 5"
            gridRow="span 3"
            p="1rem"
            borderRadius="0.55rem"
            marginY="3rem"
          >
            <KeywordChart pathName={pathName}/>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default DashboardPage;
