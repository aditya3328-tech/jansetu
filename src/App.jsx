import React, { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import Submitareport from "./Submitareport";
import About from "./About";
import Contact from "./Contact";
import Community from "./Community";
import Services from "./Services";
import "remixicon/fonts/remixicon.css";
import Footer from "./Footer";
import Chatbot from "./Chatbot";
import LocomotiveScroll from "locomotive-scroll";
import SplashScreen from "./SplashScreen";
import Introduction from "./Introduction";
import Trackmyreport from "./Trackmyreport";



function App() {
  const [loading, setLoading] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    new LocomotiveScroll();
  }, []);

  if (loading) {
    return <SplashScreen onFinish={() => setLoading(false)} />;
  }

  return (
    <>
      <div className="flex flex-col">
        <nav className="bg-white shadow-md font-semibold px-6 py-4 flex justify-between items-center sticky top-0 z-50">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="logo.png" alt="Logo" className="h-10 w-40 object-contain" />
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((s) => !s)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Links (desktop) */}
          <div className="hidden md:flex space-x-8 text-gray-700">
            {[
              { name: "Home", link: "/" },
              { name: "Introduction to Civic Sense", link: "/introduction" },
              { name: "Submit A Report", link: "/report" },
              { name: "Community", link: "/community" },
              { name: "Departments/Services", link: "/services" },
              { name: "About Us", link: "/about" },
              { name: "Contact Us", link: "/contact" },
            ].map((item, idx) => (
              <Link
                key={idx}
                to={item.link}
                className="relative group hover:text-blue-600 transition"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Login Button */}
          <Link
            to="/login"
            className="ml-6 hidden md:inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white px-5 py-2 rounded-lg shadow hover:shadow-lg transition"
          >
            Login / Signup
          </Link>
        </nav>
        {/* Mobile menu (slide down) */}
        {mobileOpen && (
          <div className="md:hidden bg-white shadow-md px-6 py-4">
            <div className="flex flex-col space-y-3">
              {[
                { name: "Home", link: "/" },
                { name: "Introduction to Civic Sense", link: "/introduction" },
                { name: "Submit A Report", link: "/report" },
                { name: "Community", link: "/community" },
                { name: "Departments/Services", link: "/services" },
                { name: "About Us", link: "/about" },
                { name: "Contact Us", link: "/contact" },
              ].map((item, idx) => (
                <Link key={idx} to={item.link} onClick={() => setMobileOpen(false)} className="text-gray-700">
                  {item.name}
                </Link>
              ))}

              <Link to="/login" onClick={() => setMobileOpen(false)} className="mt-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-lg shadow">
                Login / Signup
              </Link>
            </div>
          </div>
        )}
      </div>

      <hr />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/community" element={<Community />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/report" element={<Submitareport />} />
          <Route path="/services" element={<Services />} />
          <Route path="/trackmyreport" element={<Trackmyreport />} />
          <Route path="/introduction" element={<Introduction />} />
        </Routes>
      </div>

      <Chatbot />
      <Footer />
    </>
  );
}

export default App;
