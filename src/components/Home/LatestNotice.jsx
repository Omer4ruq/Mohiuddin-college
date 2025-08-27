import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "../../axios/axios";
import { RiCheckboxBlankFill } from "react-icons/ri";

export default function LatestNotice() {
  const [notices, setNotices] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Axios.get('/notices')
      .then(response => {
        const today = new Date().toISOString().split("T")[0];
        // Filter out notices with past dates
        const filteredNotices = response?.data?.filter(notice => notice.expire_date >= today);
        setNotices(filteredNotices);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (!notices || notices.length === 0) return null;

  return (
    // Option 1: Complementing the deep blue intro (Most recommended)
    // <div className="flex md:pl-6 lg:pl-10 xl:pl-16 pl-4 bg-[#0f172a] items-center border-t border-gray-700">
      <div className="flex md:pl-6 lg:pl-10 xl:pl-16 pl-4 bg-[#061742] items-center border-t border-gray-600">
    {/* Option 2: Slightly lighter for contrast
    <div className="flex md:pl-6 lg:pl-10 xl:pl-16 pl-4 bg-[#1e293b] items-center border-t border-gray-600">
    */}
    
    {/* Option 3: Matching the navbar exactly
    <div className="flex md:pl-6 lg:pl-10 xl:pl-16 pl-4 bg-[#061742] items-center border-t border-gray-600">
    */}
    
      <div className="bg-gradient-to-r from-white to-gray-100 lg:py-3 py-2 lg:px-6 md:px-4 px-3 font-semibold text-sm md:text-lg text-[#061742] rounded-r-lg shadow-md">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          Latest Notice
        </span>
      </div>
      <div className="flex-1 bg-transparent font-normal text-sm md:text-md lg:px-4 px-2 text-gray-200 overflow-hidden relative">
        <div className="overflow-hidden text-nowrap">
          <span className="inline-block animate-marquee">
            {notices.map((notice, index) => (
              <span key={index}>
                <Link 
                  to="/notices-and-announcements/" 
                  className="hover:text-blue-300 transition-colors duration-200"
                >
                  {notice.notice_title}
                </Link>
                <RiCheckboxBlankFill className="inline mx-2 text-blue-400" />
              </span>
            ))}
          </span>
          <span className="inline-block animate-marquee">
            {notices.map((notice, index) => (
              <span key={index}>
                <Link 
                  to="/notices-and-announcements/" 
                  className="hover:text-blue-300 transition-colors duration-200"
                >
                  {notice.notice_title}
                </Link>
                <RiCheckboxBlankFill className="inline mx-2 text-blue-400" />
              </span>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}