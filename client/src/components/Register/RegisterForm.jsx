import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
// import google from "../../assets/company/d2abd662597191.5a9589b09ddf5.jpg";
import { styles } from "../../styles";
import { EarthCanvas } from "../../components/canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";
import { useRegisterUserMutation } from "../../state/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SignupForm = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [registerUser ,{isLoading}] = useRegisterUserMutation()
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate();
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(!isLoading){
      // console.log("ok")
      setLoading(true);
      try{
        if(!form.name || !form.email || !form.password){
          toast.error("Kindly fill all fields", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
          setLoading(false);
          return;
          // throw new Error;
        }
        if(form.password.length<8){
          toast.error("Password should be atleat 8 characters long", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
          setLoading(false);
          return;
        }
        await registerUser({username: form.name,email:form.email,password:form.password}).unwrap()
        toast.success("Successfully registered !", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        setForm({
          name:"",
          email: "",
          password: "",
        });
        navigate('/login')
        console.log('a')
      }catch(error){
        // console.log("Failed to save your contribution",error)
        if(error.originalStatus !== 200){
          toast.error("Failed to register you , Kindly try again", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
          console.log("Failed to register you , kindly go away", error);
        }
      }
    }
    setLoading(false);
    // console.log(form.name,form.email,form.password);
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <h3 className={styles.sectionHeadText}>Register</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Password</span>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="**********"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-white py-3 px-8 rounded-xl outline-none w-fit text-tertiary font-bold shadow-md shadow-primary hover:bg-sky-700"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
        <p className="text-sm mt-8 text-white">
          Already have an account ?
          <Link
            className="underline underline-offset-2 hover:text-sky-700 ml-2"
            to="/login"
          >
            Login here
          </Link>
        </p>
        <p className="text-sm mt-5 text-white">
          {/* <img src={google} className=" inline object-contain h-5 w-5 mr-2" alt="G"/> Sign up with Google */}
          {/* <GoogleLogin /> */}
        </p>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
      <ToastContainer />
    </div>
  );
};

export default SectionWrapper(SignupForm, "signupform");
