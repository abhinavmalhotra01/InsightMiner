import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Box, useMediaQuery } from "@mui/material";
import { StarsCanvas } from "../components/canvas";

export default function RootLayout() {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  return (
    <div className="relative z-0 bg-primary">
      <div className="z-0">
        <StarsCanvas />
      </div>
      <Box display="flex" width="100%" height="100%">
        <Sidebar />
        <Box flexGrow={1}>
        <Outlet />
        </Box>
      </Box>
    </div>
  );
}
