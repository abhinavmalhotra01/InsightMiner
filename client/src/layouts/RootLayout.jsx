import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
      <GridItem
        as="aside"
        className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        colSpan={{ base: 6, lg: 2, xl: 1 }}
        minHeight="100vh"
        p={{ base: "20px", lg: "30px" }}
      >
        <span>
          <Sidebar />
        </span>
      </GridItem>

      <GridItem as="main" colSpan={{ base: 6, lg: 4, xl: 5 }}>
        {/* <Navbar /> */}
        <Outlet />
      </GridItem>
    </Grid>
  );
}
