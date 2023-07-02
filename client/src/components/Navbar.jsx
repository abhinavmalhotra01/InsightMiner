import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@teovilla/shadcn-ui-react";
import { Collapse, IconButton, MobileNav, Select } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  InputBase,
  Typography,

  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { setLogout } from "../state/auth/authSlice";
const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  let name = ``;
  if(user){
    name=user.username
  }
  const [isLoggedIn , setIsLogggedIn] = useState(false);
  useEffect(()=>{
    if (user) {
      setIsLogggedIn(true);
    } else {
      setIsLogggedIn(false);
    }
  },[user])

  const handleLogout=()=>{
    dispatch(setLogout());
    setIsLogggedIn(false);
  }
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
    
  }, []);
  const navList = (
    <ul className="flex flex-col gap-2 lg:flex-row lg:gap-10">
      <li className={` text-[18px] font-medium cursor-pointer`}>
        <Button>
          <Link to="/contribute">Contribute</Link>
        </Button>
      </li>
      <li className={` text-[18px] font-medium cursor-pointer`}>
        <Button>
          <Link to="/contact">Contact</Link>
        </Button>
      </li>
      <li className={` text-[18px] font-medium cursor-pointer`}>
        <Button>
          <Link to="/dashboard">Dashboard</Link>
        </Button>
      </li>
      <li className={` text-[18px] font-medium cursor-pointer`}>
        {isLoggedIn ? (
          <Button onClick={handleLogout}>Logout</Button>
        ) : (
          <Button>
            <Link to="/login">Login</Link>
          </Button>
        )}
      </li>
    </ul>
  );
  
  return (
    <nav
      className={`sm:px-16 px-6 w-full flex flex-col py-5 fixed top-0 z-20 backdrop-filter backdrop-blur-lg`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <div>
          <Button>
            <Link
              to="/"
              className="flex items-center gap-2"
              onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
              }}
            >
              <img
                src="https://previews.123rf.com/images/urfandadashov/urfandadashov1806/urfandadashov180601826/150417826-deep-learning-vector-icon-isolated-on-transparent-background-deep-learning-logo-concept.jpg"
                alt=""
                className="w-9 h-9 object-contain"
              />
              <p className=" text-[18px] font-bold cursor-pointer flex">
                Insight Miner
              </p>
            </Link>
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>{navList}</Collapse>
    </nav>
  );
};

export default Navbar;
