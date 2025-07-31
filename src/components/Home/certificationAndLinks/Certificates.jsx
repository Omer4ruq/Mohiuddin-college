import { useEffect, useState } from "react";
import Axios from "../../../axios/axios";
export default function Certificates() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    Axios.get('/credentials')
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
  if (error) return <p>Error: {error.message}</p>;

  if (!data || (!data.image && !data.o_image)) {
    return <p>No certificates available.</p>;
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      {data.image && (
        <img
          src={data.image}
          alt="Certificate 1"
          className="w-full rounded-md border border-primary"
        />
      )}
      {data.o_image && (
        <img
          src={data.o_image}
          alt="Certificate 2"
          className="w-full rounded-md border border-primary"
        />
      )}
    </div>
  );
}