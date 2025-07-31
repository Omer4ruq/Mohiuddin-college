import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "../../axios/axios";

export default function NoticeBoard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedNotices, setExpandedNotices] = useState({}); // Track expanded state by notice id

  useEffect(() => {
    Axios.get('/notices')
      .then(response => {
        const today = new Date().toISOString().split("T")[0];
        const filteredNotices = response?.data?.filter(
          notice => notice.expire_date >= today
        );
        setData(filteredNotices);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  function getDayFromDate(dateString) {
    const [year, month, day] = dateString.split('-');
    return parseInt(day, 10);
  }

  function getMonthNameFromDate(dateString) {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const [year, month, day] = dateString.split('-');
    return months[parseInt(month, 10) - 1];
  }

  // Toggle expanded state for a specific notice
  const toggleExpand = (noticeId) => {
    setExpandedNotices(prev => ({
      ...prev,
      [noticeId]: !prev[noticeId] 
    }));
  };

  return (
    <div className="space-y-2 font-poppins pb-6">
      {data?.map((notice) => (
        <div
          className="rounded-md p-2 text-primary shadow-lg flex items-start gap-4 
          cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
          key={notice.id}
          onClick={() => toggleExpand(notice.id)}
        >
          <div className="border-r-2 border-primary w-20 text-center "
          
          >
            <h3 className="text-lg font-semibold">{getDayFromDate(notice?.date)}</h3>
            <h4 className="text-xs font-semibold">{getMonthNameFromDate(notice?.date)}</h4>
          </div>
          <div
            className="flex-1 cursor-pointer"
            
          >
            <div>
              <h3 className="font-semibold">{notice?.title}</h3>
              <h4 className="text-gray-500 text-xs">
                {notice?.notice_title.length <= 60
                  ? notice.notice_title
                  : notice.notice_title.substring(0, 60) + "..."}
              </h4>
            </div>
            
            <div
              className={`transition-all duration-700 ease-in-out overflow-hidden ${
                expandedNotices[notice.id] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-gray-700 text-sm mt-2">{notice.notice_description}</p>
              {notice?.file_attached && (
                <a
                  href={notice.file_attached}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary text-textColor py-2 px-4 rounded mt-2"
                >
                  Download Notice
                </a>
              )}
            </div>
          </div>
        </div>
      ))}

      <Link to="/notices-and-announcements/">
        <button className="text-primary font-semibold absolute bottom-0 right-0 px-4 py-2">
          View More
        </button>
      </Link>
    </div>
  );
}