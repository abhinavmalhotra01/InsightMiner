import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { Box} from "@mui/material";
import { useGetFBRatingQuery } from "../state/api";
import { styles } from "../styles";
import animationData from "../assets/lottie/loader";
import Lottie from "react-lottie";
const RatingsChart = ({ pathName}) => {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
    let {data , isLoading} = useGetFBRatingQuery({pathName});
    // console.log(data)
    if(!data || isLoading){
        return (
          <div className="h-24 w-24 m-auto object-fill items-center justify-between">
            <Lottie options={defaultOptions} />
          </div>
        );
    }

    const newArray = data.filter((object) => object.rating!== null);
    const colors = [
      "hsl(125, 70%, 50%)",
      "hsl(301, 70%, 50%)",
      "hsl(312, 70%, 50%)",
      "hsl(294, 70%, 50%)",
      "hsl(109, 70%, 50%)",
    ];
    let formattedData = new Array(5);
    for(let i=1;i<6;i++){
        formattedData[i - 1] = {
          id: i,
          label: i,
          value: 5,
          color:colors[i-1],
        };
    }
    for(let i=1;i<6;i++){
        for(let j=0;j<newArray.length;j++){
            if(newArray[j].rating==i){
                formattedData[i-1] = {
                  "id": newArray[j].rating,
                  "label": newArray[j].rating,
                  "value": newArray[j].count+1,
                  "color":colors[i-1]
                };
            }
        }
    }
    // console.log(formattedData);
    return (
      <Box
        height={"380px"}
        // width={undefined}
        // minHeight={"325px"}
        // minWidth={"325px"}
        position="relative"
        className="my-auto mx-auto items-center bg-yellow-100/10 overflow-hidden rounded-lg"
      >
       <h3 className={`${styles.heroSubText} ml-2`}>
         Ratings Distribution
       </h3>
        <ResponsivePie
          data={formattedData}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          borderColor={{
            from: "color",
            modifiers: [["darker", 0.2]],
          }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#ffe3a3"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{
            from: "color",
            modifiers: [["darker", 2]],
          }}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          fill={[
            {
              match: {
                id: 1,
              },
              id: "dots",
            },
            {
              match: {
                id: 4,
              },
              id: "dots",
            },
            {
              match: {
                id: 3,
              },
              id: "lines",
            },
            {
              match: {
                id: 5,
              },
              id: "lines",
            },
          ]}
        />
      </Box>
    );
}

export default RatingsChart