import { useEffect, useState } from "react";
import calendar from "../../assets/icons/calendar-violet.png";
import Axios from "../../axios/axios";


export default function Events() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
   Axios.get('/events')
     .then(response => {
      const today = new Date().toISOString().split("T")[0];
      // Filter out notices with past dates
      const filteredNotices = response?.data?.filter(notice => notice.end>= today);

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
        Upcoming Events
      </h1>

      {
        data?.length === 0 && (
          <p className="text-2xl font-medium text-primary text-center px-4 py-3 mb-6">
            No existing events.
          </p>
        )
      }

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {data.map((event) => (
      <div key={event.id} className="sm:flex bg-white shadow-md rounded-lg overflow-hidden mb-6 border border-primary">
      <div className="flex items-center">
        <img src={calendar} alt="Notice" className="w-16 h-auto p-4" />
      </div>

      {/* Right side: Notice Details */}
      <div className="p-4 flex-1">
        <h2 className="text-3xl font-semibold text-primary mb-1">
          {event?.title}
        </h2>
        <p className="text-gray-600 text-xl">
          <span className="font-semibold text-primary">Starts:</span> {event.start.split("T")[0]}
        </p>
        <p className="text-gray-600 text-xl">
          <span className="font-semibold text-primary">Ends:</span> {event.end.split("T")[0]}
        </p>

        {/* <div className="hidden sm:block">
          <Button text="নোটিশ দেখুন" textSize="text-xl"/>
        </div> */}
      </div>
    </div>
      ))}
      </div>

    </div>

    );
}