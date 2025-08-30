import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // এই লাইন যোগ করুন
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import MegaMenuItem from "./MegaMenuItem";
import HamburgerMenu from "./HamburgerMenu";
import menuData from "../../../data/menuData";
import LoginButton from "./LoginButton";

export default function NavMenu() {
  const navigate = useNavigate(); // এই লাইন যোগ করুন
  const [showNav, setShowNav] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const menuRef = useRef(null);
  const navRef = useRef(null);
  const dropdownRef = useRef(null);

  const [activeMenu, setActiveMenu] = useState(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const checkMenuFit = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 1024) {
        setIsMobileView(true);
      } else {
        setIsMobileView(false);
        setShowNav(false);
      }
    };
    checkMenuFit();
    window.addEventListener("resize", checkMenuFit);
    return () => window.removeEventListener("resize", checkMenuFit);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowNav(false);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !event.target.closest('li.nav-item')) {
        handleCloseDropdown();
      }
    };

    if (showNav || activeMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showNav, activeMenu]);

  // Handle dropdown animations with smooth transition between menus
  useEffect(() => {
    if (activeMenu) {
      if (isDropdownVisible) {
        // If dropdown is already visible, create fast transition effect
        setIsTransitioning(true);
        const transitionTimer = setTimeout(() => {
          setIsTransitioning(false);
        }, 150); // Fast transition for menu switching
        return () => clearTimeout(transitionTimer);
      } else {
        setIsDropdownVisible(true);
      }
    } else {
      // Delay before hiding to allow smooth exit animation
      const timer = setTimeout(() => {
        setIsDropdownVisible(false);
        setIsTransitioning(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [activeMenu, isDropdownVisible]);

  const handleCloseDropdown = () => {
    setActiveMenu(null);
  };

  const handleMenuClick = (menuItem) => {
    if (menuItem.link) {
      // React Router দিয়ে navigate করুন
      navigate(menuItem.link);
      handleCloseDropdown();
      return;
    }
    // Toggle or switch dropdown visibility for children
    if (activeMenu && activeMenu.title === menuItem.title) {
      handleCloseDropdown();
    } else {
      setActiveMenu(menuItem);
    }
  };

  return (
    <div className="relative">
      {isMobileView && (
        <div className="px-4 py-4 bg-[#061742]">
          <button
            className="flex items-center justify-start focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md p-2"
            onClick={() => setShowNav(!showNav)}
            aria-label="Toggle navigation menu"
          >
            {showNav ? (
              <IoClose className="text-2xl text-blue-600 transition-transform duration-200 hover:scale-110" />
            ) : (
              <HiOutlineMenuAlt3 className="text-2xl text-white transition-transform duration-200 hover:scale-110" />
            )}
          </button>
        </div>
      )}

      {!isMobileView && (
        <nav ref={navRef} className="bg-[#061742] relative z-50">
          <div className="xl:min-w-full max-w-5xl mx-auto px-4 relative">
            <ul className="flex items-center flex-wrap justify-center space-x-1">
              {menuData.map((menuItem, index) => (
                <li
                  key={index}
                  className="nav-item py-4 px-2 cursor-pointer"
                >
                  <MegaMenuItem 
                    menuItem={menuItem} 
                    isActive={activeMenu?.title === menuItem.title}
                    onClick={() => handleMenuClick(menuItem)} // onClick prop পাস করুন
                  />
                  
                </li>
              ))}
              <li className="pl-5">
                  <LoginButton></LoginButton>
              </li>
            </ul>
            
            {/* Dropdown aligned with main menu content container */}
            {isDropdownVisible && (
              <div 
                ref={dropdownRef}
                className={`absolute left-0 right-0 top-full bg-[#061742] shadow-2xl border-t border-gray-200 z-40 overflow-hidden transition-all ease-out transform-gpu ${
                  activeMenu && !isTransitioning
                    ? 'opacity-100 translate-y-0 scale-y-100 duration-300' 
                    : 'opacity-0 -translate-y-2 scale-y-0 duration-150'
                }`}
                style={{ 
                  transformOrigin: 'top center',
                  maxHeight: activeMenu && !isTransitioning ? '600px' : '0px',
                  transitionProperty: 'opacity, transform, max-height, scale'
                }}
              >
                <div className="w-full">
                  <div className="p-6">
                    <div className={`grid gap-8 ${
                      activeMenu?.children?.length === 1 
                        ? 'grid-cols-1' 
                        : activeMenu?.children?.length === 2 
                        ? 'grid-cols-1 md:grid-cols-2' 
                        : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                    }`}>
                      {activeMenu?.children?.map((section, index) => (
                        <div key={index} className="space-y-3">
                          <h6 className="text-base font-normal text-white border border-[#ffffff52] pl-2 p-2 mb-3">
                            {section.title}
                          </h6>
                          <div className="space-y-2">
                            {section.items?.map((item, idx) => (
                              <div
                                key={idx}
                                onClick={() => {
                                  navigate(item.link); // navigate ব্যবহার করুন
                                  handleCloseDropdown();
                                }}
                                className="block text-base font-semibold text-gray-500 hover:text-white hover:bg-[#183f78] px-2 py-2  transition-all duration-150 cursor-pointer transform hover:translate-x-1"
                              >
                               - {item.title}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* <div><LoginButton></LoginButton></div> */}
        </nav>
      )}

      {showNav && isMobileView && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300" onClick={() => setShowNav(false)}></div>
      )}

      {isMobileView && (
        <div
          ref={menuRef}
          className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white z-50 transform transition-transform duration-300 ease-in-out shadow-2xl ${
            showNav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-800">Menu</h3>
            <button onClick={() => setShowNav(false)} className="p-2 hover:bg-gray-200 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" aria-label="Close menu">
              <IoClose className="text-xl text-gray-600" />
            </button>
          </div>
          <div className="overflow-y-auto h-full pb-20 ">
            <ul className="flex flex-col p-4 space-y-1">
              {menuData.map((menuItem, index) => (
                <HamburgerMenu
                  key={index}
                  menuItem={menuItem}
                  setShowNav={setShowNav}
                />
              ))}
              <div className="pt-10">
                  <LoginButton></LoginButton>
              </div>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}