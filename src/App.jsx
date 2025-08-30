import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Axios from "./axios/axios";
import Footer from "./components/common/Footer/Footer";
import FooterTop from "./components/common/Footer/FooterTop";
import Header from "./components/common/Header/Header";
import backgroundImage from './assets/images/background.png';

export default function App() {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);



  useEffect(() => {
    // 1. Retrieve saved color values from localStorage and apply them if available.
    const primaryColor = localStorage.getItem("primary_color");
    const secondaryColor = localStorage.getItem("secondary_color");
    const backgroundColor = localStorage.getItem("background_color");
    const textColor = localStorage.getItem("text_color");
    const primaryLiteColor = localStorage.getItem("primary_lite_color");
    const menuColor = localStorage.getItem("menu_color");
  
    if (primaryColor)
      document.documentElement.style.setProperty("--primary-color", primaryColor);
    if (secondaryColor)
      document.documentElement.style.setProperty("--secondary-color", secondaryColor);
    if (backgroundColor)
      document.documentElement.style.setProperty("--background-color", backgroundColor);
    if (textColor)
      document.documentElement.style.setProperty("--text-color", textColor);
    if (primaryLiteColor)
      document.documentElement.style.setProperty("--primary-light", primaryLiteColor);
    if (menuColor)
      document.documentElement.style.setProperty("--menu-color", menuColor);
  
    // 2. Fetch new color values from the API.
    Axios.get("/site-color")
      .then((response) => {
        const {
          primary_color,
          secondary_color,
          background_color,
          text_color,
          primary_lite_color,
          menu_color,
        } = response.data;
  
        // Update CSS variables with the new values.
        document.documentElement.style.setProperty("--primary-color", primary_color);
        document.documentElement.style.setProperty("--secondary-color", secondary_color);
        document.documentElement.style.setProperty("--background-color", background_color);
        document.documentElement.style.setProperty("--text-color", text_color);
        document.documentElement.style.setProperty("--primary-light", primary_lite_color);
        document.documentElement.style.setProperty("--menu-color", menu_color);
  
        // Save the new values in localStorage.
        localStorage.setItem("primary_color", primary_color);
        localStorage.setItem("secondary_color", secondary_color);
        localStorage.setItem("background_color", background_color);
        localStorage.setItem("text_color", text_color);
        localStorage.setItem("primary_lite_color", primary_lite_color);
        localStorage.setItem("menu_color", menu_color);
      })
      .catch((error) => {
        console.error("Error fetching site colors:", error);
      });
  }, []);

  
  return (
    <div
    style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    className="font-poppins">
      <Header />
      <div className="container font-liAdorNoirrit my-4 lg:my-6 space-y-6 px-4 sm:px-6 sm:mx-auto xl:px-8 ">
        <Outlet />
      </div>
      <FooterTop />
      <Footer />
    </div>
  );
}
