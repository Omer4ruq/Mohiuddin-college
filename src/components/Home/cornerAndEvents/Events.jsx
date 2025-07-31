import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import calendar from "../../../assets/icons/calendar-violet.png";
import Axios from "../../../axios/axios";

export default function Events() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
   Axios.get('/events')
     .then(response => {
      const today = new Date().toISOString().split("T")[0];
      // Filter out notices with past dates
      const filteredNotices = response?.data?.filter(notice => notice?.end >= today);

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

  return (
    <div className="space-y-4 pb-10">
      <Link to="/events">
      {data.map((item, index) => (
      <div key={index} className="rounded-md px-3 py-4 text-primary shadow-[inset_2px_5px_12px_1px_rgb(0_0_0_/_0.15)] flex items-center gap-2 overflow-hidden">
        <div className="w-[20%] sm:w-[12%] lg:w-[22%] xl:w-[14%] flex justify-center">
          <img src={item?.image ? item.image : calendar} alt="" className="w-8 lg:w-6" />
        </div>
        <div className="w-[80%] sm:w-[88%] lg:w-[78%] xl:w-[86%] border-l-2 pl-5 border-primary ">
          <h3 className="text-xl font-semibold">{item?.title}</h3>
          <h4 className="text-gray-500 text-sm font-poppins leading-6">
            {item?.end?.split("T")[0]}
          </h4>
        </div>
      </div>
      ))}
      </Link>
      <Link to="/events">
        <button className="text-xl text-primary font-poppins font-semibold absolute bottom-0 right-0 p-4">
          View More
        </button>
      </Link>
    </div>
  );
}
