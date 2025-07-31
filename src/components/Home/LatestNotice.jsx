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
    <div className="flex md:pl-6 lg:pl-10 xl:pl-16 pl-4 bg-primary items-center">
      <div className="bg-white lg:py-3 py-2 lg:px-5 md:px-3 px-2 font-semibold text-sm md:text-lg text-primary">
        Latest Notice
      </div>
      <div className="flex-1 bg-primary font-normal text-sm md:text-md lg:px-4 px-2 text-textColor overflow-hidden relative">
        <div className="overflow-hidden text-nowrap">
          <span className="inline-block animate-marquee">
            {notices.map((notice, index) => (
              <span key={index}>
                <Link to="/notices-and-announcements/" className="">
                  {notice.notice_title}
                </Link>
                <RiCheckboxBlankFill className="inline mx-2" />
              </span>
            ))}
          </span>
          <span className="inline-block animate-marquee">
            {notices.map((notice, index) => (
              <span key={index}>
                <Link to="/notices-and-announcements/" className="">
                  {notice.notice_title}
                </Link>
                <RiCheckboxBlankFill className="inline mx-2" />
              </span>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}