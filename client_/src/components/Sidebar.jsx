import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import {
  MdOutlineDashboard,
  MdOutlineConnectWithoutContact,
} from "react-icons/md";
import { useMediaQuery } from "@mui/material";
import { GiMagicBroom, GiIndianPalace } from "react-icons/gi";
import {TbReceiptTax} from "react-icons/tb";
import {SiGooglemybusiness} from "react-icons/si"
import {TbCoinRupee} from "react-icons/tb"
const Home = () => {
  const menus = [
    {
      name: "dashboard",
      link: "/dashboard",
      icon: MdOutlineDashboard,
    },
    {
      name: "GST",
      link: "/dashboard/GST",
      icon: TbReceiptTax,
      value: "GST",
      margin: true,
    },
    {
      name: "Make In India",
      link: "/dashboard/MakeInIndia",
      icon: GiIndianPalace,
      value: "MakeInIndia",
    },
    {
      name: "Swach Bharat",
      link: "/dashboard/SwachBharat",
      icon: GiMagicBroom,
      value: "SwachBharat",
    },
    {
      name: "Start Up Scheme",
      link: "/dashboard/StartupScheme",
      icon: SiGooglemybusiness,
      value: "StartupScheme",
    },
    {
      name: "Demonetisation",
      link: "/dashboard/Demonetisation",
      icon: TbCoinRupee,
      value: "Demonetisation",
    },
    {
      name: "Contact Us",
      link: "/contact",
      icon: MdOutlineConnectWithoutContact,
      value: "",
      margin: true,
    },
  ];
  const location = useLocation();
  const [open, setOpen] = useState(true);
  let loca = location.pathname.split("/")[2];
  // useEffect(()=>{
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  // console.log(isNonMobile);
  useEffect(() => {
    if (!isNonMobile) {
      setOpen(false);
    }
  }, []);
  return (
    <section className="flex gap-6">
      <div
        className={`bg-inherit min-h-screen ${
          open ? "250px" : "w-16"
        } duration-500 text-gray-100 px-4 my-24`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                } ${loca == menu?.value && "text-yellow-300"}`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 font-semibold whitespace-pre rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
