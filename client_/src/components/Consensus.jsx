import React from "react";
import { useGetFBConsensusQuery } from "../state/api";
import { styles } from "../styles";
import animationData from '../assets/lottie/loader'
import Lottie from "react-lottie";
const Consensus = ({ pathName }) => {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
  const { data, isLoading } = useGetFBConsensusQuery({ pathName });
//   console.log(pathName);
  if(isLoading || !data){
    return (
      <div className="h-24 w-24 m-auto object-fill items-center justify-between">
        <Lottie options={defaultOptions} />
      </div>
    );
  }
  const head = data.heading;
  const section = data.genConsensus;
  return (
    <div
      className={`${styles.paddingX} my-auto mx-auto items-center bg-yellow-100/10 overflow-auto rounded-xl`}
    >
      <h1 className={`${styles.sectionHeadText} text-yellow-100`}>{head}</h1>
      <p className={`${styles.heroSubText} text-white-100 `}>
        {/* <Typewriter words={output }/> */}
        {section}
      </p>
    </div>
  );
};

export default Consensus