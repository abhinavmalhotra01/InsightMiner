import react from "react"
import animationData from "../../assets/lottie/7153-landing-page.json"
import Lottie from "react-lottie";

export default function LottieLanding() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
}
