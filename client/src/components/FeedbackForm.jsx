import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { useAddFeedbackMutation } from "../state/api";

const FeedbackForm = () => {
  const formRef = useRef();
  const [addFeedback,{isLoading}] = useAddFeedbackMutation()
  const [form, setForm] = useState({
    ans1: "",
    ans2: "",
    ans3: "",
    ans4: "",
    ans5: "",
    ans6: "",
  });
  const policyName = "GST"
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
        await addFeedback({name: policyName,answer1:form.ans1,answer2:form.ans2,answer3:form.ans3,answer4:form.ans4,answer5:form.ans5,answer6:form.ans6}).unwrap()
        setForm('')
      }catch(error){
        // console.log("Failed to save your contribution",error)
        if(error.originalStatus !== 200){
          console.log("Failed to save your contribution", error);
        }
      }
    }
    setLoading(false);
    console.log(policyName,form.ans1,form.ans2,form.ans3,form.ans4,form.ans5,form.ans6);
  };
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
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
              How do you rate the overall impact of the new budget policies on
              the Indian economy and society?
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
              How do you rate the impact of the new budget policies on your
              personal income and expenditure?
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
              How do you rate the impact of the new budget policies on the
              sectors or areas that you are interested or involved in, such as
              education, health, agriculture, etc.?
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
              What are some of the recommendations or suggestions that you have
              for improving or modifying the new budget policies or their
              implementation?
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
              What is the main objective of the government budget?
              <br className="sm:block hidden" />
              <button
                type="button"
                name="ans5"
                value={"A"}
                onClick={handleChange}
                className=" bg-tertiary hover:bg-tertiary text-secondary font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded mt-3 mb-3 focus:outline-none focus:ring"
              >
                A) To allocate resources efficiently
              </button>
              <br className="sm:block hidden" />
              <button
                type="button"
                name="ans5"
                value={"B"}
                onClick={handleChange}
                className=" bg-tertiary hover:bg-tertiary text-secondary font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded mb-3 focus:outline-none focus:ring "
              >
                B) To promote social welfare
              </button>
              <br className="sm:block hidden" />
              <button
                type="button"
                name="ans5"
                value={"C"}
                onClick={handleChange}
                className=" bg-tertiary hover:bg-tertiary text-secondary font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded mb-3 focus:outline-none focus:ring "
              >
                C) To manage public finances
              </button>
              <br className="sm:block hidden" />
              <button
                type="button"
                name="ans5"
                value={"D"}
                onClick={handleChange}
                className=" bg-tertiary hover:bg-tertiary text-secondary font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded mb-3 focus:outline-none focus:ring "
              >
                D) All of the above
              </button>
              <br className="sm:block hidden" />
            </div>
          </label>

          <label className="flex flex-col">
            <div className="text-white font-medium mb-4">
              Which of the following is a type of budget that shows the expected
              outcomes of various government programs and policies?
              <br className="sm:block hidden" />
              <button
                type="button"
                name="ans6"
                value={"A"}
                onClick={handleChange}
                className=" bg-tertiary hover:bg-tertiary text-secondary font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded mt-3 mb-3 focus:outline-none focus:ring"
              >
                A) Performance budget
              </button>
              <br className="sm:block hidden" />
              <button
                type="button"
                name="ans6"
                value={"B"}
                onClick={handleChange}
                className=" bg-tertiary hover:bg-tertiary text-secondary font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded mb-3 focus:outline-none focus:ring "
              >
                B) Outcome budget
              </button>
              <br className="sm:block hidden" />
              <button
                type="button"
                name="ans6"
                value={"C"}
                onClick={handleChange}
                className=" bg-tertiary hover:bg-tertiary text-secondary font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded mb-3 focus:outline-none focus:ring "
              >
                C) Zero-based budget
              </button>
              <br className="sm:block hidden" />
              <button
                type="button"
                name="ans6"
                value={"D"}
                onClick={handleChange}
                className=" bg-tertiary hover:bg-tertiary text-secondary font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded mb-3 focus:outline-none focus:ring "
              >
                D) Participatory budget
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
    </div>
  );
};

export default SectionWrapper(FeedbackForm, "feedbackform");
