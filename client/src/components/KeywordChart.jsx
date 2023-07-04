import React from "react";
import { Box } from "@mui/material";
import { ResponsiveRadar } from '@nivo/radar'
import { useGetFBKeywordQuery } from "../state/api";
import { styles } from "../styles";
import animationData from "../assets/lottie/loader";
import Lottie from "react-lottie";

const KeywordChart = ({ pathName }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  let { data, isLoading } = useGetFBKeywordQuery({ pathName });
  // console.log(pathName);
  if (!data || isLoading) {
    // console.log(data);
    return (
      <div className="h-24 w-24 m-auto object-fill items-center justify-between">
        <Lottie options={defaultOptions} />
      </div>
    );
  }
  const newArray = data.filter((object) => object.topKeyword !== null);
  const newestArray = newArray.filter((object)=>object.topKeyword!=="");
  let formattedData = [
    {
      keyword: "education",
      count: 8,
    },
    {
      keyword: "unemployment",
      count: 5,
    },
    {
      keyword: "social-welfare",
      count: 4,
    },
  ];
  for(let i=0;i<newestArray.length;i++){
    formattedData.push({
        keyword: newestArray[i].topKeyword,
        count:newestArray[i].count
    })
  }
  return (
    <Box
      height={"400px"}
      // width={undefined}
      // minHeight={"325px"}
      // minWidth={"325px"}
      position="relative"
      className="my-auto mx-auto items-center bg-yellow-100/10 overflow-hidden rounded-lg"
    >
      <h3 className={`${styles.heroSubText} ml-2`}>Most Frequent Words</h3>
      <ResponsiveRadar
        data={formattedData}
        keys={["count"]}
        indexBy="keyword"
        valueFormat=">-.2f"
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        borderColor="#e4dddd"
        gridLabelOffset={36}
        dotSize={10}
        dotColor="#e8b025"
        dotBorderWidth={2}
        colors={{ scheme: "red_blue" }}
        blendMode="lighten"
        motionConfig="wobbly"
        legends={[
          {
            anchor: "top-left",
            direction: "column",
            translateX: -50,
            translateY: -40,
            itemWidth: 80,
            itemHeight: 20,
            itemTextColor: "#e8b025",
            symbolSize: 12,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#e8b025",
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
};

export default KeywordChart;
