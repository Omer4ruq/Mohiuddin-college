import { useEffect, useState } from "react";
import Axios from "../../axios/axios";

export default function HistoryContent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
   Axios.get('/school-history')
     .then(response => {
       setData(response.data[0]);
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
    <h4 className="text-gray-600 text-xl">
      {
        data?.text
      }
    </h4>
  );
}
