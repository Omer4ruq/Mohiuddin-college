import React from "react";
import { FaChevronDown } from "react-icons/fa6";

const MegaMenuItem = ({ menuItem, isActive, onClick }) => {
  return (
    <div
      className={`flex items-center justify-center gap-1 px-4 py-3 text-white transition-all duration-200 cursor-pointer ${
        isActive 
          ? 'bg-blue-600 bg-opacity-20 rounded-md' 
          : 'hover:text-gray-200'
      }`}
      onClick={onClick} // Click handler যোগ করা হয়েছে
    >
      <span className="text-sm font-medium whitespace-nowrap">{menuItem.title}</span>
      {menuItem.children && (
        <FaChevronDown 
          className={`ml-1  transition-transform duration-200  ${
            isActive ? 'rotate-180' : ''
          }`}
        />
      )}
    </div>
  );
};

export default MegaMenuItem;