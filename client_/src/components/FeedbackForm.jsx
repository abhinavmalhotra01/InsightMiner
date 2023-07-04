import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { useAddFeedbackMutation } from "../state/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const FeedbackForm = () => {
  const formRef = useRef();
  const [addFeedback,{isLoading}] = useAddFeedbackMutation()
  const [form, setForm] = useState({
    ans1: "",
    ans2: "",
    ans3: "",
    ans4: "",
    ans5: "",
  });
  const location = useLocation();
  const navigate = useNavigate();
  const policyName = location.pathname.split("/")[2];
  
  useEffect(()=>{
    if (
      policyName != "GST" &&
      policyName != "Demonetisation" &&
      policyName != "MakeInIndia" &&
      policyName != "StartupScheme" &&
      policyName != "SwachBharat"
    ) {
      navigate("/404");
      // console.log("a");
    }
  },[])
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    // console.log(name);
    // console.log(value);
    setForm({
      ...form,
      [name]: value,
    });
  };
  const ALPHA_OFFSET = 64; // ASCII code for uppercase 'A'

  function letterToNumber(letter) {
    return letter.charCodeAt(0) - ALPHA_OFFSET;
  }
  // const handleClick = (e) => {
  //   const { target } = e;
  //   const { name, value } = target;
  //   console.log(name, value);

  //   setForm({
  //     ...form,
  //     [name]: value,
  //   });
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!isLoading){
      // console.log("ok")
      
      setLoading(true);
      try{
        if (
          !form.ans1 ||
          !form.ans2 ||
          !form.ans3 ||
          !form.ans4 ||
          !form.ans5
        ) {
          toast.error("Kindly fill all fields", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
          setLoading(false);
          return;
        }
        await addFeedback({name: policyName,answer1:form.ans1,answer2:form.ans2,answer3:form.ans3,answer4:form.ans4,rating:letterToNumber(form.ans5)}).unwrap();
        toast.success("Successfully saved your contribution. Thanks !", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        setForm({
          ans1: "",
          ans2: "",
          ans3: "",
          ans4: "",
          ans5: "",
        });
      }catch(error){
        // console.log("Failed to save your contribution",error)
        if(error.originalStatus !== 200){
          // console.log("Failed to save your contribution", error);
          toast.error("Failed to save your contribution", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        }
      }
    }
    setLoading(false);
    // console.log(policyName,form.ans1,form.ans2,form.ans3,form.ans4,form.ans5);
  };
  return (
    <div
      className={`mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <h3 className={styles.sectionHeadText}>Feedback form</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Do you believe this policy has met its intended goals?
            </span>
            <textarea
              type="text"
              name="ans1"
              value={form.ans1}
              onChange={handleChange}
              placeholder="I would like to ........"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Did this policy have a good impact on your daily life or not ?
            </span>
            <textarea
              type="text"
              name="ans2"
              value={form.ans2}
              onChange={handleChange}
              placeholder="I would like to ........"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Do you have any concerns about the implementation of this policy ?
            </span>
            <textarea
              type="text"
              name="ans3"
              value={form.ans3}
              onChange={handleChange}
              placeholder="I would like to ........"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Do you think this policy has any unintended consequences?
            </span>
            <textarea
              type="text"
              name="ans4"
              value={form.ans4}
              onChange={handleChange}
              placeholder="I would like to ........"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <div className="text-white font-medium mb-4">
              What is your final verdict for the policy ?
              <br className="sm:block hidden" />
              <button
                type="button"
                name="ans5"
                value={"A"}
                onClick={handleChange}
                className=" bg-tertiary hover:bg-tertiary text-secondary font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded mt-3 mb-3 focus:outline-none focus:ring"
              >
                A) The policy was a complete waste of country's resources
              </button>
              <br className="sm:block hidden" />
              <button
                type="button"
                name="ans5"
                value={"B"}
                onClick={handleChange}
                className=" bg-tertiary hover:bg-tertiary text-secondary font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded mb-3 focus:outline-none focus:ring "
              >
                B) The policy's agenda was not clear and was not needed
              </button>
              <br className="sm:block hidden" />
              <button
                type="button"
                name="ans5"
                value={"C"}
                onClick={handleChange}
                className=" bg-tertiary hover:bg-tertiary text-secondary font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded mb-3 focus:outline-none focus:ring "
              >
                C) The policy could have been great , but lacked in proper
                implementation
              </button>
              <br className="sm:block hidden" />
              <button
                type="button"
                name="ans5"
                value={"D"}
                onClick={handleChange}
                className=" bg-tertiary hover:bg-tertiary text-secondary font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded mb-3 focus:outline-none focus:ring "
              >
                D) The policy is good , but there is still room for improvement
              </button>
              <br className="sm:block hidden" />
              <button
                type="button"
                name="ans5"
                value={"E"}
                onClick={handleChange}
                className=" bg-tertiary hover:bg-tertiary text-secondary font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded mb-3 focus:outline-none focus:ring "
              >
                E) The policy has no flaws
              </button>
              <br className="sm:block hidden" />
            </div>
          </label>
          <button
            type="submit"
            className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending" : "Send"}
          </button>
        </form>
      </motion.div>
      <ToastContainer />
    </div>
  );
};

export default SectionWrapper(FeedbackForm, "feedbackform");
