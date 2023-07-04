import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/LoginPage";
import SignUp from "./pages/RegisterPage";
import ContributePage from "./pages/ContributePage";
import ContactPage from "./pages/ContactPage";
import DashboardPage from "./pages/DashboardPage";
import RootLayout from "./layouts/RootLayout";
import FeedbackPage from "./pages/FeedbackPage";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import { RequireAuth } from "./state/auth/RequireAuth";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/contribute/:name" element={<FeedbackPage />} />
        <Route path="/contribute" element={<ContributePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route element={<RequireAuth />}>
          <Route element={<RootLayout />}>
            <Route path="/dashboard/:name" element={<DashboardPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
