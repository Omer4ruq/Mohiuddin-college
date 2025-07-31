import { useEffect, useState } from "react";
import notepad from "../../../assets/icons/notepad.png";
import Axios from "../../../axios/axios";
import Card from "../sub-component/Card";

export default function ImportantLinks() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
   Axios.get('/important-links') 
     .then(response => {
       setData(response.data);
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
      {data?.map((item, index) => (
        <Card key={index} item={item} icon={notepad} />
      ))}
      {/* <button className="text-xl text-primary font-poppins font-semibold absolute bottom-0 right-0 p-4">
        View More
      </button> */}
    </div>
  );
}
