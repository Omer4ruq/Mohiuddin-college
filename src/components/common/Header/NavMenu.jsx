import { useState, useEffect, useRef } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import menuData from "../../../data/menuData";
import { HamburgerMenu, LargeMenu } from "./MenuItem";

export default function NavMenu() {
  const [showNav, setShowNav] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const menuRef = useRef(null);
  const containerRef = useRef(null);

  // Check if we should use mobile view based on screen size and menu overflow
  useEffect(() => {
    const checkMenuFit = () => {
      const screenWidth = window.innerWidth;
      
      // Use mobile view for screens smaller than 1024px (lg breakpoint)
      // Or for medium screens where menu might overflow based on menu count
      // if (screenWidth < 1024 || (screenWidth < 1200 && menuData.length > 8) || (screenWidth < 1400 && menuData.length > 10)) {}
      if (screenWidth < 1024 ) {
        setIsMobileView(true);
      } else {
        setIsMobileView(false);
        setShowNav(false); // Close mobile menu when switching to desktop
      }
    };

    // Initial check
    checkMenuFit();

    // Add resize listener
    window.addEventListener("resize", checkMenuFit);
    return () => window.removeEventListener("resize", checkMenuFit);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowNav(false);
      }
    };

    if (showNav && isMobileView) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden"; // Prevent background scroll
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [showNav, isMobileView]);

  return (
    <div className="md:px-6 lg:px-8 xl:px-12 px-4 relative" ref={containerRef}>
      {/* Mobile/Responsive hamburger button */}
      {isMobileView && (
        <button
          className="py-3 w-full flex justify-start focus:outline-none focus:ring-2 focus:ring-menuColor focus:ring-opacity-50 rounded-md"
          onClick={() => setShowNav(!showNav)}
          aria-label="Toggle navigation menu"
        >
          {showNav ? (
            <IoClose className="text-3xl text-menuColor transition-transform duration-200 hover:scale-110" />
          ) : (
            <HiOutlineMenuAlt3 className="text-3xl text-menuColor transition-transform duration-200 hover:scale-110" />
          )}
        </button>
      )}

      {/* Desktop menu - only show when not in mobile view */}
      {!isMobileView && (
        <ul className="text-primary text-xs md:text-sm xl:text-base font-semibold gap-0.5 md:gap-1 flex items-center justify-start flex-wrap">
          {menuData.map((menuItem, index) => (
            <LargeMenu key={index} menuItem={menuItem} />
          ))}
        </ul>
      )}

      {/* Mobile menu overlay */}
      {showNav && isMobileView && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300">
          <div className="absolute inset-0" onClick={() => setShowNav(false)} />
        </div>
      )}

      {/* Mobile/Responsive menu */}
      {isMobileView && (
        <div
          ref={menuRef}
          className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white z-50 transform transition-transform duration-300 ease-in-out shadow-2xl ${
            showNav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Mobile menu header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
            <h3 className="text-lg font-semibold text-menuColor">Menu</h3>
            <button
              onClick={() => setShowNav(false)}
              className="p-2 hover:bg-gray-200 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-menuColor focus:ring-opacity-50"
              aria-label="Close menu"
            >
              <IoClose className="text-xl text-menuColor" />
            </button>
          </div>

          {/* Mobile menu content */}
          <div className="overflow-y-auto h-full pb-20">
            <ul className="text-primary text-base font-semibold flex flex-col p-4 space-y-1">
              {menuData.map((menuItem, index) => (
                <HamburgerMenu
                  key={index}
                  menuItem={menuItem}
                  setShowNav={setShowNav}
                />
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}