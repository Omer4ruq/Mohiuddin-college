// MenuItem.jsx
// Modified to handle the new mega menu structure and Bootstrap classes

import { useState } from "react";
import { GoTriangleDown } from "react-icons/go";
import { Link } from "react-router-dom";

const LargeMenu = ({ menuItem }) => {
  const Wrapper = menuItem.link ? Link : "a";

  return (
    <li className={`nav-item ${menuItem.children ? "dropdown position-static" : ""} mx-0.5 lg:mx-1 my-1 lg:my-2 flex-shrink-0 text-xs`}>
      <Wrapper
        {...(menuItem.link ? { to: menuItem.link } : { href: "#" })}
        className={`nav-link d-flex justify-content-between align-items-center text-white px-1.5 md:px-2 lg:px-3 py-1.5 md:py-2 lg:py-3 hover:bg-menuColor hover:text-white w-full h-full transition-all duration-200 text-xs md:text-sm lg:text-base whitespace-nowrap ${menuItem.children ? "collapsed cursor-pointer" : ""}`}
      >
        <span className="truncate text-xs customxl:text-xs custom2xl:text-base">{menuItem.title}</span>
        {menuItem.children && (
          <GoTriangleDown className="group-hover:rotate-180 duration-200 flex-shrink-0 ml-0.5 lg:ml-1 text-xs lg:text-sm ms-2 arrow-icon" />
        )}
      </Wrapper>

      {menuItem.children && (
        <div className="mega-menu hidden group-hover:block absolute left-0 top-full bg-white z-50 w-full text-start shadow-xl border border-gray-200 rounded-md opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-150">
          <div className="row">
            {menuItem.children.map((column, colIndex) => (
              <div key={colIndex} className={column.class || menuItem.colClass || "col-md-3"}>
                {column.subgroups.map((group, groupIndex) => (
                  <div key={groupIndex}>
                    <h6 className="submenu">
                      {group.submenuLink ? (
                        <a href={group.submenuLink} className="nav-link">
                          {group.submenu}
                        </a>
                      ) : (
                        group.submenu
                      )}
                    </h6>
                    {group.items.map((item, itemIndex) => (
                      <a key={itemIndex} href={item.link} className="nav-link" target={item.target || ""}>
                        {item.title}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </li>
  );
};

// We can keep LargeMenuWithBridge if needed, but for this implementation, use the standard LargeMenu with hover.
// If you want the bridge for better hover experience, adapt similarly.

const HamburgerMenu = ({ menuItem, setShowNav }) => {
  const [open, setOpen] = useState(false);
  const Wrapper = menuItem.link ? Link : "div";

  return (
    <li className="rounded-md group w-full text-menuColor text-start hover:bg-menuColor hover:text-white transition-all duration-200">
      <Wrapper
        {...(menuItem.link ? { to: menuItem.link } : {})}
        onClick={() => {
          if (menuItem.link) setShowNav(false);
          else setOpen(!open);
        }}
        className={`flex items-center justify-between w-full px-4 py-3 rounded-md transition-all duration-200 cursor-pointer`}
      >
        <span className="flex-1">{menuItem.title}</span>
        {menuItem.children && (
          <GoTriangleDown className={`duration-200 flex-shrink-0 ml-2 ${open ? "rotate-180" : ""}`} />
        )}
      </Wrapper>

      {menuItem.children && (
        <ul className={`mt-1 ${open ? "block" : "hidden"} pl-4 border-l-2 border-gray-200 ml-4`}>
          {menuItem.children.flatMap((column) => column.subgroups).map((group, index) => (
            <SubGroup key={index} group={group} setShowNav={setShowNav} />
          ))}
        </ul>
      )}
    </li>
  );
};

const SubGroup = ({ group, setShowNav }) => {
  const [subOpen, setSubOpen] = useState(false);
  const hasSub = group.items && group.items.length > 0;

  return (
    <li className="py-1 rounded-md hover:bg-menuColor hover:text-white transition-all duration-200">
      <div className="flex justify-between items-center px-3 py-2 w-full rounded-md transition-all duration-200 cursor-pointer">
        {group.submenuLink ? (
          <Link to={group.submenuLink} onClick={() => setShowNav(false)} className="flex-1">
            {group.submenu}
          </Link>
        ) : (
          <span className="flex-1">{group.submenu}</span>
        )}
        {hasSub && (
          <GoTriangleDown
            onClick={() => setSubOpen(!subOpen)}
            className={`ml-2 flex-shrink-0 cursor-pointer duration-200 ${subOpen ? "rotate-180" : ""}`}
          />
        )}
      </div>
      {hasSub && (
        <ul className={`mt-1 ${subOpen ? "block" : "hidden"} pl-4 border-l-2 border-gray-300 ml-3`}>
          {group.items.map((item, idx) => (
            <li key={idx} className="py-1 rounded-sm hover:bg-menuColor hover:text-white transition-all duration-200">
              <Link
                to={item.link}
                onClick={() => setShowNav(false)}
                className="block w-full px-3 py-2 rounded-sm transition-all duration-200"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export { HamburgerMenu, LargeMenu };