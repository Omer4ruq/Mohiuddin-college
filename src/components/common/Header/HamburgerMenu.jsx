import React from "react";
import { FaChevronDown } from "react-icons/fa6";

// Mobile Menu Item Component
const HamburgerMenu = ({ menuItem, setShowNav }) => {
  const handleClick = () => {
    if (menuItem.link) {
      console.log(`Navigate to: ${menuItem.link}`);
      setShowNav(false);
    }
  };

  return (
    <li className="rounded-md group w-full text-gray-700 text-start  hover:bg-blue-600 hover:text-white transition-all duration-200">
      <div
        onClick={handleClick}
        className={`flex items-center justify-between w-full px-4 py-3 rounded-md transition-all duration-200 ${
          menuItem.link ? "cursor-pointer" : "cursor-default"
        }`}
      >
        <span className="flex-1">{menuItem.title}</span>
        {menuItem.children && (
          <FaChevronDown className="group-hover:rotate-180 duration-200 flex-shrink-0 ml-2" />
        )}
      </div>

      {menuItem.children && (
        <ul className="mt-1 hidden group-hover:block pl-4 border-l-2 border-gray-200 ml-4">
          {menuItem.children.map((section, index) => (
            <li key={index} className="py-1">
              <div className="font-medium text-xs text-gray-500 px-3 py-1 uppercase tracking-wide">
                {section.title}
              </div>
              {section.items?.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    console.log(`Navigate to: ${item.link}`);
                    setShowNav(false);
                  }}
                  className="block text-sm px-6 py-2 hover:bg-blue-500 hover:text-white rounded transition-all duration-200 cursor-pointer"
                >
                  {item.title}
                </div>
              ))}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default HamburgerMenu;