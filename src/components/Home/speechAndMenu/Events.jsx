import { useEffect, useState } from "react";
import calendar from "../../../assets/icons/calendar-violet.png";
import Axios from "../../../axios/axios";
import EventCard from "./Card";

export default function Events() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
   Axios.get('/events')
     .then(response => {
      const today = new Date().toISOString().split("T")[0];
      // Filter out notices with past dates
      const filteredEvents = response?.data?.filter(event => event?.end >= today);
       setData(filteredEvents);
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
      {data.map((item, index) => (
        <EventCard key={index} item={item} icon={calendar} />
      ))}
      {/* <button className="text-xl text-primary font-poppins font-semibold absolute bottom-0 right-0 p-4">
        View More
      </button> */}
    </div>
  );
}
