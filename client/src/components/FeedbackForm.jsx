import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
const FeedbackForm = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    ans1: "",
    ans2: "",
    ans3: "",
    ans4: "",
    ans5: "",
    ans6: "",
    ans7: "",
    ans8: "",
    ans9: "",
    ans10: "",
    ans11: "",
    ans12: "",
    ans13: "",
    ans14: "",
    ans15: "",
  });

  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    console.log(name);
    console.log(value);
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
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(e);
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
          {/* <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              How aware or unaware are you of the new budget policies of India
              for the fiscal year 2023-24?
            </span>
            <textarea
              type="text"
              name="ans1"
              value={form.ans1}
              onChange={handleChange}
              placeholder="Yes , I am aware........"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label> */}

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              How do you rate the overall impact of the new budget policies on
              the Indian economy and society?
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
              How do you rate the impact of the new budget policies on your
              personal income and expenditure?
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
              How do you rate the impact of the new budget policies on the
              sectors or areas that you are interested or involved in, such as
              education, health, agriculture, etc.?
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

          {/* <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              How do you rate the fairness and transparency of the new budget
              policies and their implementation?
            </span>
            <textarea
              type="text"
              name="ans5"
              value={form.ans5}
              onChange={handleChange}
              placeholder="I would like to ........"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              How do you rate the responsiveness and accountability of the
              government in relation to the new budget policies and their
              outcomes?
            </span>
            <textarea
              type="text"
              name="ans6"
              value={form.ans6}
              onChange={handleChange}
              placeholder="I would like to ........"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              How do you rate your trust and confidence in the government's
              ability and intention to deliver on its promises and commitments
              under the new budget policies?
            </span>
            <textarea
              type="text"
              name="ans7"
              value={form.ans7}
              onChange={handleChange}
              placeholder="I would like to ........"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label> */}

          {/* {/* <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              How do you rate your satisfaction or dissatisfaction with the
              government's performance and governance in general?
            </span>
            <textarea
              type="text"
              name="ans8"
              value={form.ans8}
              onChange={handleChange}
              placeholder="I would like to ........"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
        
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              What are some of the positive or negative aspects of the new
              budget policies that you appreciate or criticize?
            </span>
            <textarea
              type="text"
              name="ans9"
              value={form.ans9}
              onChange={handleChange}
              placeholder="I would like to ........"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
         
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              What are some of the gaps or challenges that you identify or
              anticipate in relation to the new budget policies and their
              execution?
            </span>
            <textarea
              type="text"
              name="ans10"
              value={form.ans10}
              onChange={handleChange}
              placeholder="I would like to ........"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
  </label>*/}

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              What are some of the recommendations or suggestions that you have
              for improving or modifying the new budget policies or their
              implementation?
            </span>
            <textarea
              type="text"
              name="ans11"
              value={form.ans11}
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
                name="ans12"
                value={"A"}
                onClick={handleChange}
                className=" bg-tertiary hover:bg-tertiary text-secondary font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded mt-3 mb-3"
              >
                A) To allocate resources efficiently
              </button>
              <br className="sm:block hidden" />
              <button
                type="button"
                name="ans12"
                value={"B"}
                onClick={handleChange}
                className=" bg-tertiary hover:bg-tertiary text-secondary font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded mb-3"
              >
                B) To promote social welfare
              </button>
              <br className="sm:block hidden" />
              <button
                type="button"
                name="ans12"
                value={"C"}
                onClick={handleChange}
                className=" bg-tertiary hover:bg-tertiary text-secondary font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded mb-3"
              >
                C) To manage public finances
              </button>
              <br className="sm:block hidden" />
              <button
                type="button"
                name="ans12"
                value={"D"}
                onClick={handleChange}
                className=" bg-tertiary hover:bg-tertiary text-secondary font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded mb-3"
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
                name="ans13"
                value={"A"}
                onClick={handleChange}
                className=" bg-tertiary hover:bg-tertiary text-secondary font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded mt-3 mb-3"
              >
                A) Performance budget
              </button>
              <br className="sm:block hidden" />
              <button
                type="button"
                name="ans13"
                value={"B"}
                onClick={handleChange}
                className=" bg-tertiary hover:bg-tertiary text-secondary font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded mb-3"
              >
                B) Outcome budget
              </button>
              <br className="sm:block hidden" />
              <button
                type="button"
                name="ans13"
                value={"C"}
                onClick={handleChange}
                className=" bg-tertiary hover:bg-tertiary text-secondary font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded mb-3"
              >
                C) Zero-based budget
              </button>
              <br className="sm:block hidden" />
              <button
                type="button"
                name="ans13"
                value={"D"}
                onClick={handleChange}
                className=" bg-tertiary hover:bg-tertiary text-secondary font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded mb-3"
              >
                D) Participatory budget
              </button>
              <br className="sm:block hidden" />
            </div>
          </label>

          {/* <label className="flex flex-col">
            <div className="text-white font-medium mb-4">
              Which of the following is a feature of a balanced budget?
              <br className="sm:block hidden" />
              <button type="button" className=" bg-tertiary hover:bg-tertiary text-secondary font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded mt-3 mb-3">
                A) Total revenue equals total expenditure
              </button>
              <br className="sm:block hidden" />
              <button type="button" className=" bg-tertiary hover:bg-tertiary text-secondary font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded mb-3">
                B) Total revenue exceeds total expenditure
              </button>
              <br className="sm:block hidden" />
              <button type="button" className=" bg-tertiary hover:bg-tertiary text-secondary font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded mb-3">
                C) Total expenditure exceeds total revenue
              </button>
              <br className="sm:block hidden" />
              <button type="button" className=" bg-tertiary hover:bg-tertiary text-secondary font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded mb-3">
                D) None of the above
              </button>
              <br className="sm:block hidden" />
            </div>
          </label> */}

          {/* <label className="flex flex-col">
            <div className="text-white font-medium mb-4">
              Which of the following is an advantage of participatory budgeting?
              <br className="sm:block hidden" />
              <button
                type="button"
                name="ans14"
                value={"A"}
                onClick={handleChange}
                className=" bg-tertiary hover:bg-tertiary text-secondary font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded mt-3 mb-3"
              >
                A) It increases transparency and accountability
              </button>
              <br className="sm:block hidden" />
              <button
                type="button"
                name="ans14"
                value={"B"}
                onClick={handleChange}
                className=" bg-tertiary hover:bg-tertiary text-secondary font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded mb-3"
              >
                B) It enhances civic engagement and empowerment
              </button>
              <br className="sm:block hidden" />
              <button
                type="button"
                name="ans14"
                value={"C"}
                onClick={handleChange}
                className=" bg-tertiary hover:bg-tertiary text-secondary font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded mb-3"
              >
                C) It improves the quality and efficiency of public services
              </button>
              <br className="sm:block hidden" />
              <button
                type="button"
                name="ans14"
                value={"D"}
                onClick={handleChange}
                className=" bg-tertiary hover:bg-tertiary text-secondary font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded mb-3"
              >
                D) All of the above
              </button>
              <br className="sm:block hidden" />
            </div>
          </label> */}

          {/* <label className="flex flex-col">
            <div className="text-white font-medium mb-4">
              Which of the following is a challenge faced by the government in
              preparing and implementing the budget?
              <br className="sm:block hidden" />
              <button type="button" className=" bg-tertiary hover:bg-tertiary text-secondary font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded mt-3 mb-3">
                A) Revenue uncertainty and volatility
              </button>
              <br className="sm:block hidden" />
              <button type="button" className=" bg-tertiary hover:bg-tertiary text-secondary font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded mb-3">
                B) Fiscal deficit and debt sustainability
              </button>
              <br className="sm:block hidden" />
              <button type="button" className=" bg-tertiary hover:bg-tertiary text-secondary font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded mb-3">
                C) Trade-offs and opportunity costs
              </button>
              <br className="sm:block hidden" />
              <button type="button" className=" bg-tertiary hover:bg-tertiary text-secondary font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded mb-3">
                D) All of the above
              </button>
              <br className="sm:block hidden" />
            </div>
          </label> */}
          <button
            type="submit"
            className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(FeedbackForm, "feedbackform");
