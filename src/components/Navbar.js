import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "../App.css";
import logo from "../assets/logo-light.png";

function Navbar({ bgColor = "bg-primary" }) {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  let jenis = "";
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  if(isScrolled === true){
    jenis = `z-50 shadow-lg ${bgColor} opacity-90 translate-y-0`
  }
  else{
    jenis = "bg-primary opacity-100 translate-y-0"
  }
  return (
    <nav
      className={`fixed top-0 left-0 w-full h-22 flex justify-between items-center text-putih transition-all duration-500 ease-in-out 
        ${jenis}
      `}
    >
      <img src={logo} alt="Logo" className="h-12 w-auto ml-4 transition-all duration-300" />
      <div className="flex space-x-16">
        <Link to="/" className={`hover:text-yellow-500 font-arima ${location.pathname === "/" ? "border-b-2 border-yellow-500" : ""}`}>Home</Link>
        <Link to="/about" className={`hover:text-yellow-500 font-arima ${location.pathname === "/about" ? "border-b-2 border-yellow-500" : ""}`}>About</Link>
        <Link to="/pricing" className={`hover:text-yellow-500 font-arima ${location.pathname === "/pricing" ? "border-b-2 border-yellow-500" : ""}`}>Pricing</Link>
        <Link to="/review" className={`hover:text-yellow-500 font-arima ${location.pathname === "/review" ? "border-b-2 border-yellow-500" : ""}`}>Review</Link>
        <Link to="/blog" className={`hover:text-yellow-500 font-arima ${location.pathname === "/blog" ? "border-b-2 border-yellow-500" : ""}`}>Blogs</Link>
      </div>
      <button className="mr-4 px-4 py-2 bg-yellow-500 font-poppins font-medium text-putih text-md rounded-lg hover:bg-black-400">
        Contact Us
      </button>
    </nav>
  );
}

export default Navbar;
