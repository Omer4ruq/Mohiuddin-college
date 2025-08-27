import { useEffect, useState } from "react";
import LatestNotice from "../../Home/LatestNotice";
import Intro from "./Intro";
import LoginButton from "./LoginButton";
import NavMenu from "./NavMenu";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Consider scrolled when user scrolls more than 100px
      if (currentScrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Intro and Latest Notice with scroll animation */}
      <div 
        className={`transition-all duration-500 ease-in-out ${
          isScrolled 
            ? '-translate-y-full opacity-0 pointer-events-none' 
            : 'translate-y-0 opacity-100'
        }`}
      >
        <Intro />
        <LatestNotice />
      </div>
      
      {/* Sticky Navigation - separate from animated container */}
      <div 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'shadow-lg' : ''
        }`}
      >
        <NavMenu />
      </div>
    </>
  );
}