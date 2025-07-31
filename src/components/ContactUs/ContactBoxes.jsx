import { useEffect, useState } from "react";
import Axios from "../../axios/axios";

export default function ContactBoxes({data : cdata}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Axios.get('/api/institute') 
      .then(response => {
        setData(response.data[0]);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-10">
      <div className="bg-white shadow-md p-4 rounded-lg border border-primary">
        <h2 className="text-2xl font-semibold text-primary mb-2">School Address</h2>
        <p className="text-gray-700 text-2xl">{cdata?.office_address}</p>
      </div>
      <div className="bg-white shadow-md p-4 rounded-lg border border-primary">
        <h2 className="text-2xl font-semibold text-primary mb-2">Mobile Number</h2>
        <p className="text-gray-700 text-2xl">{cdata?.mobile}</p>
      </div>
      <div className="bg-white shadow-md p-4 rounded-lg border border-primary">
        <h2 className="text-2xl font-semibold text-primary mb-2">Email</h2>
        <p className="text-gray-700 text-2xl">{cdata?.email}</p>
      </div>
      <div className="bg-white shadow-md p-4 rounded-lg border border-primary">
        <h2 className="text-2xl font-semibold text-primary mb-2">Social Media</h2>
          <a href={data?.institute_fb} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-2xl block">Facebook</a>
          <a href={data?.institute_youtube} target="_blank" rel="noopener noreferrer" className="text-red-500 text-2xl block"> YouTube</a>
      </div>
    </div>
    );
}