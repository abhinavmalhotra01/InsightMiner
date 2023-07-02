import React from "react";
import { StarsCanvas } from "../components/canvas";
import FeedbackForm from "../components/FeedbackForm";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { policies } from "../constants";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { Link } from "react-router-dom";
const PolicyCard = ({ policyName }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      iconStyle={{ background: policyName.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <Link to={policyName.link}>
            <img
              src={policyName.icon}
              alt={policyName.policy_name}
              className="object-contain rounded-full"
            />
          </Link>
        </div>
      }
    >
      <Link to={policyName.link}>
        <div>
          <h3 className="text-white text-[24px] font-bold">
            {policyName.title}
          </h3>
          <p
            className="text-secondary text-[16px] font-semibold"
            style={{ margin: 0 }}
          >
            {policyName.policy_name}
          </p>
        </div>
      </Link>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {policyName.points.map((point, index) => (
          <li
            key={`policyName-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};
const ContributeComponent = () => {
  return (
    <div
      className={`mt-12`}
    >
      <h2 className={`${styles.sectionHeadText} text-center `}>
        Contribute to different Policies
      </h2>
      <div className=" flex flex-col">
        <VerticalTimeline>
          {policies.map((policy, index) => (
            <PolicyCard key={`experience-${index}`} policyName={policy} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(ContributeComponent, "contributeComponent");
// export default ContributeComponent;