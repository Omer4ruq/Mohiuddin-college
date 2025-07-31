import { useEffect, useState } from "react";
import Axios from "../../axios/axios";

export default function NoticeAndAnnouncement() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
   Axios.get('/notices')
     .then(response => {
      const today = new Date().toISOString().split("T")[0];
      // Filter out notices with past dates
      const filteredNotices = response?.data?.filter(notice => notice.expire_date>= today);

      // set filtered notices
       setData(filteredNotices);
       setLoading(false);
     })
     .catch(error => {
       setError(error);
       setLoading(false);
     });
 }, []);

 if (loading) return <p>Loading...</p>;
 if (error) return <p>Error: {error.message}</p>
 console.log(data);


  return (
    <div className="">
    <h1 className="text-3xl font-medium text-textColor bg-primary px-4 py-3 mb-6">
      Notices & Announcements
    </h1>

    {
      data?.length === 0 && (
        <p className="text-2xl font-medium text-primary text-center px-4 py-3 mb-6">
          No notice found
        </p>
      )
    }

    {data.map((notice) => (
    <div key={notice.id} className="sm:flex bg-white shadow-md rounded-lg overflow-hidden mb-6 border border-primary">
    {/* Left side: Notice Image */}
    {/* <div className="w-full sm:w-[240px]">
      <img src={notice.file_attached} alt="Notice" className="w-full h-auto" />
    </div> */}

    {/* Right side: Notice Details */}
    <div className="p-6 flex-1">
      <h2 className="text-3xl font-semibold text-primary mb-2">
        {notice.notice_title}
      </h2>
      <p className="text-gray-600 text-xl mb-4">
        <span className="font-semibold text-primary">Date :</span> {notice.date}
      </p>
      <p className="text-gray-700 text-xl mb-4">{notice.notice_description}</p>

      {/* Download Button */}
      <a
        href={notice?.file_attached}
        download
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary text-textColor py-2 px-4 rounded"
      >
        Download Notice
      </a>

      {/* <div className="hidden sm:block">
        <Button text="নোটিশ দেখুন" textSize="text-xl"/>
      </div> */}
    </div>
  </div>
    ))}

  </div>

  );
}