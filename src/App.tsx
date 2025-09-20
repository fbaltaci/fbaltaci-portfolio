import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import PortfolioDetailsPage from "./pages/PortfolioDetailsPage";

const App = () => {
  const toggleTheme = () => {
    document.body.classList.toggle("dark-theme");
    const isDark = document.body.classList.contains("dark-theme");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.body.classList.add("dark-theme");
    }
  }, []);

  return (
    <BrowserRouter basename={import.meta.env.DEV ? "/" : "/"}>
      <Header onToggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/portfolio/:id" element={<PortfolioDetailsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

