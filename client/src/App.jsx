import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
// import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/LoginPage";
import SignUp from "./pages/RegisterPage";
import ContributePage from "./pages/ContributePage";
import ContactPage from "./pages/ContactPage";
// import DashboardPage from "./pages/DashboardPage";
// import Dashboard from "./components/TopDashboard";
// import MiddleDashboard from "./components/middleDashboard";
// import TopDashboard from "./components/TopDashboard";
import DashboardPage from "./pages/DashboardPage";
// import RootLayout from "./layouts/RootLayout";
import Distribution from "./pages/Distribution";
import Analytics from "./components/Analytics";
import Analysis from "./pages/Analysis";

function App() {
  // console.log(5,process.env.BASE_URL)
  return (
    <BrowserRouter>
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
      </div>
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        
        <Route path="/contribute" element={<ContributePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/study" element={<Distribution/>}/>
        <Route path="/analysis" element={<Analysis/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
