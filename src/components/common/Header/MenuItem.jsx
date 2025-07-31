import { FaAngleRight } from "react-icons/fa6";
import { GoTriangleDown } from "react-icons/go";
import { Link } from "react-router-dom";

const LargeMenu = ({ menuItem }) => {
  const Wrapper = menuItem.link ? Link : "div";

  return (
    <li className="relative group mx-0.5 lg:mx-1 my-1 lg:my-2 flex-shrink-0 text-xs">
      <Wrapper
        to={menuItem.link}
        className={`flex items-center justify-between gap-1 lg:gap-2 rounded-md text-menuColor px-1.5 md:px-2 lg:px-3 py-1.5 md:py-2 lg:py-3 hover:bg-menuColor hover:text-white w-full h-full transition-all duration-200 text-xs md:text-sm lg:text-base whitespace-nowrap ${
          menuItem.link ? "" : "cursor-pointer"
        }`}
      >
        <span className="truncate text-xs customxl:text-xs custom2xl:text-base">{menuItem.title}</span>
        {!menuItem.link && (
          <GoTriangleDown className="group-hover:rotate-180 duration-200 flex-shrink-0 ml-0.5 lg:ml-1 text-xs lg:text-sm" />
        )}
      </Wrapper>

      {menuItem.children && (
        <ul className="hidden group-hover:block absolute left-0 top-full bg-white z-50 w-48 xl:w-60 divide-y divide-gray-100 text-start shadow-xl border border-gray-200 rounded-md opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-150">
          {menuItem.children.map((dropdown, index) => {
            const DropdownWrapper = dropdown.link ? Link : "div";

            return (
              <li key={index} className="relative group/dropdown">
                <DropdownWrapper
                  to={dropdown.link}
                  className={`flex justify-between items-center w-full px-4 py-3 bg-white text-menuColor hover:bg-menuColor hover:text-white transition-all duration-200 ${
                    dropdown.link ? "" : "cursor-pointer"
                  } ${index === 0 ? "rounded-t-md" : ""} ${
                    index === menuItem.children.length - 1 && !dropdown.children ? "rounded-b-md" : ""
                  }`}
                >
                  <span className="flex-1 truncate pr-2">{dropdown.title}</span>
                  {dropdown.children && <FaAngleRight className="ml-2 flex-shrink-0" />}
                </DropdownWrapper>

                {dropdown.children && (
                  <ul className="hidden group-hover/dropdown:block bg-white divide-y divide-gray-100 w-48 xl:w-60 absolute left-full top-0 shadow-xl border border-gray-200 rounded-md opacity-0 group-hover/dropdown:opacity-100 transform scale-95 group-hover/dropdown:scale-100 transition-all duration-150 z-50">
                    {dropdown.children.map((level2, idx) => (
                      <li key={idx}>
                        <Link
                          to={level2.link}
                          className={`block w-full px-4 py-3 bg-white text-menuColor hover:bg-menuColor hover:text-white transition-all duration-200 truncate ${
                            idx === 0 ? "rounded-t-md" : ""
                          } ${idx === dropdown.children.length - 1 ? "rounded-b-md" : ""}`}
                        >
                          {level2.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
};

// Alternative solution with bridge technique
const LargeMenuWithBridge = ({ menuItem }) => {
  const Wrapper = menuItem.link ? Link : "div";

  return (
    <li className="relative group mx-0.5 lg:mx-1 my-1 lg:my-2 flex-shrink-0">
      <Wrapper
        to={menuItem.link}
        className={`flex items-center justify-between gap-1 lg:gap-2 rounded-md text-menuColor px-1.5 md:px-2 lg:px-3 py-1.5 md:py-2 lg:py-3 hover:bg-menuColor hover:text-white w-full h-full transition-all duration-200 text-xs md:text-sm lg:text-base whitespace-nowrap ${
          menuItem.link ? "" : "cursor-pointer"
        }`}
      >
        <span className="truncate">{menuItem.title}</span>
        {!menuItem.link && (
          <GoTriangleDown className="group-hover:rotate-180 duration-200 flex-shrink-0 ml-0.5 lg:ml-1 text-xs lg:text-sm" />
        )}
      </Wrapper>

      {menuItem.children && (
        <>
          {/* Invisible bridge to connect parent and dropdown */}
          <div className="hidden group-hover:block absolute left-0 top-full w-full h-2 bg-transparent z-40"></div>
          
          <ul className="hidden group-hover:block absolute left-0 top-full mt-2 bg-white z-50 w-48 xl:w-60 divide-y divide-gray-100 text-start shadow-xl border border-gray-200 rounded-md opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-200">
            {menuItem.children.map((dropdown, index) => {
              const DropdownWrapper = dropdown.link ? Link : "div";

              return (
                <li key={index} className="relative group/dropdown">
                  <DropdownWrapper
                    to={dropdown.link}
                    className={`flex justify-between items-center w-full px-4 py-3 bg-white text-menuColor hover:bg-menuColor hover:text-white transition-all duration-200 ${
                      dropdown.link ? "" : "cursor-pointer"
                    } ${index === 0 ? "rounded-t-md" : ""} ${
                      index === menuItem.children.length - 1 && !dropdown.children ? "rounded-b-md" : ""
                    }`}
                  >
                    <span className="flex-1 truncate pr-2">{dropdown.title}</span>
                    {dropdown.children && <FaAngleRight className="ml-2 flex-shrink-0" />}
                  </DropdownWrapper>

                  {dropdown.children && (
                    <>
                      {/* Bridge for second level */}
                      <div className="hidden group-hover/dropdown:block absolute left-full top-0 w-2 h-full bg-transparent z-40"></div>
                      
                      <ul className="hidden group-hover/dropdown:block bg-white divide-y divide-gray-100 w-48 xl:w-60 absolute left-full top-0 ml-2 shadow-xl border border-gray-200 rounded-md opacity-0 group-hover/dropdown:opacity-100 transform translate-x-1 group-hover/dropdown:translate-x-0 transition-all duration-200 z-50">
                        {dropdown.children.map((level2, idx) => (
                          <li key={idx}>
                            <Link
                              to={level2.link}
                              className={`block w-full px-4 py-3 bg-white text-menuColor hover:bg-menuColor hover:text-white transition-all duration-200 truncate ${
                                idx === 0 ? "rounded-t-md" : ""
                              } ${idx === dropdown.children.length - 1 ? "rounded-b-md" : ""}`}
                            >
                              {level2.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </li>
              );
            })}
          </ul>
        </>
      )}
    </li>
  );
};

// Mobile/Hamburger Menu (unchanged)
const HamburgerMenu = ({ menuItem, setShowNav }) => {
  const Wrapper = menuItem.link ? Link : "div";

  return (
    <li className="rounded-md group w-full text-menuColor text-start hover:bg-menuColor hover:text-white transition-all duration-200">
      <Wrapper
        to={menuItem.link}
        onClick={() => menuItem.link && setShowNav(false)}
        className={`flex items-center justify-between w-full px-4 py-3 rounded-md transition-all duration-200 ${
          menuItem.link ? "" : "cursor-pointer"
        }`}
      >
        <span className="flex-1">{menuItem.title}</span>
        {!menuItem.link && (
          <GoTriangleDown className="group-hover:rotate-180 duration-200 flex-shrink-0 ml-2" />
        )}
      </Wrapper>

      {menuItem.children && (
        <ul className="mt-1 hidden group-hover:block pl-4 border-l-2 border-gray-200 ml-4">
          {menuItem.children.map((dropdown, index) => {
            const DropdownWrapper = dropdown.link ? Link : "div";

            return (
              <li key={index} className="py-1 rounded-md hover:bg-menuColor hover:text-white group/item transition-all duration-200">
                <DropdownWrapper
                  to={dropdown.link}
                  onClick={() => dropdown.link && setShowNav(false)}
                  className={`flex justify-between items-center px-3 py-2 w-full rounded-md transition-all duration-200 ${
                    dropdown.link ? "" : "cursor-pointer"
                  }`}
                >
                  <span className="flex-1">{dropdown.title}</span>
                  {dropdown.children && (
                    <GoTriangleDown className="ml-2 group-hover/item:rotate-180 duration-200 flex-shrink-0" />
                  )}
                </DropdownWrapper>

                {dropdown.children && (
                  <ul className="mt-1 hidden group-hover/item:block pl-4 border-l-2 border-gray-300 ml-3">
                    {dropdown.children.map((level2, idx) => (
                      <li key={idx} className="py-1 rounded-sm hover:bg-menuColor hover:text-white transition-all duration-200">
                        <Link
                          to={level2.link}
                          onClick={() => setShowNav(false)}
                          className="block w-full px-3 py-2 rounded-sm transition-all duration-200"
                        >
                          {level2.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
};

export { HamburgerMenu, LargeMenu, LargeMenuWithBridge };