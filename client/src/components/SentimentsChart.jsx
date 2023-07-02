import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { Box } from "@mui/material";
import { useGetFBSentimentsQuery } from "../state/api";
import { styles } from "../styles";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import animationData from "../assets/lottie/loader";
import Lottie from "react-lottie";
const SentimentsChart = ({ pathName }) => {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
  const { data, isLoading } = useGetFBSentimentsQuery({ pathName });
  if (!data || isLoading) {
    return (
      <div className="h-24 w-24 m-auto object-fill items-center justify-between">
        <Lottie options={defaultOptions} />
      </div>
    );
  }
  console.log(data);
  const colors = [
    "hsl(322, 70%, 50%)",
    "hsl(2, 70%, 50%)",
    "hsl(52, 70%, 50%)",
  ];
  const newArray = data.filter((object) => object.sentiments !== null);
  let negCnt = 5,
    posCnt = 5,
    neuCnt = 5;
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i].sentiments == -1) {
      negCnt = newArray[i].count;
    }
    if (newArray[i].sentiments == +1) {
      posCnt = newArray[i].count;
    }
    if (newArray[i].sentiments == 0) {
      neuCnt = newArray[i].count;
    }
  }
  const formattedData = [
    {
      name: "Negative",
      total: negCnt,
      fill: "#b91c1c",
    },
    {
      name: "Neutal",
      total: neuCnt,
      fill: "#fef9c3",
    },
    {
      name: "Positive",
      total: posCnt,
      fill: "#57A71C",
    },
  ];

  return (
    <Box
      height={"400px"}
      // width={undefined}
      // minHeight={"325px"}
      // minWidth={"325px"}
      position="relative"
      className="my-auto mx-auto items-center bg-yellow-100/10 overflow-auto rounded-lg"
    >
      <h3 className={`${styles.heroSubText} ml-2`}>Sentiments Distribution</h3>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={formattedData}>
          <XAxis
            dataKey="name"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}`}
          />
          <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default SentimentsChart;
