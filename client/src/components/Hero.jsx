import { motion } from "framer-motion";
import { styles } from "../styles";
import { RoomCanvas } from "./canvas";
import {LottieLanding} from "./canvas";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";
const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <section className="relative w-full h-screen mx-auto ">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff] " />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <Link to="/contribute">
          <div>
            <Link to="/contribute">
              <h1 className={`${styles.heroHeadText} text-white`}>
                {" "}
                Welcome to{" "}
                <span className="text-[#915eff]"> InsightMiner </span>{" "}
              </h1>
            </Link>

            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              {/* Feedback is a gift, they say,
              <br className="sm:block hidden" />A present for us everyday :)
              {/* <br className="sm:block hidden" />
            It helps us learn and grow,
            <br className="sm:block hidden" />
            To improve and build and know :) */}
              {/* <br className="sm:block hidden" /> */}
              <Typewriter
                cursor={true}
                loop={true}
                delaySpeed={10}
                words={[
                  "Feedback is gift they say ",
                  "A present for us everyday",
                  "It helps us learn and grow",
                  "To improve and build and know :)",
                ]}
              />
            </p>
            {/* <Button variant="ghost"> */}

            {/* </Button> */}
          </div>
        </Link>
      </div>
      {/* <Lottie options={defaultOptions} height={400} width={400}/> */}

      {/* <div className="lg:visible md:visible invisible"> */}
        {/* <LottieLanding /> */}
        {!isMobile && <RoomCanvas />}
      {/* </div> */}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <Link to="/contribute">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 ">
            <motion.dev
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
