import { useEffect, useState } from "react";
import { FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import addressIcon from "../../../assets/icons/address.png";
import Axios from "../../../axios/axios";
import SchoolSlider from "./SchoolSlider";

export default function SchoolDetails({data:hdata}) {
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

 if (loading) return <p>Loading...</p>;
 if (error) return <p>Error: {error.message}</p>


  return (
    <div className="p-4">
      <div className="mb-7 ">
        <SchoolSlider data={hdata} />
      </div>
      <div className="flex flex-col items-center text-primary">
        <h4 className="text-2xl md:max-lg:text-3xl">
          {data?.institute_name}
        </h4>
        <div className="flex items-center gap-2">
          <img src={addressIcon} alt="" className="w-5" />
          <h4 className="md:max-lg:text-xl">
             {data?.institute_address}
          </h4>
        </div>
        <div className="flex gap-3 mt-2">
        <Link to={data?.institute_fb}>
          <FaFacebook className="w-6 lg:w-8 text-3xl text-primary" />  
        </Link>
        <Link to={data?.institute_youtube}>
          <FaYoutube className="w-6 lg:w-8 text-3xl text-primary" />
        </Link>
        <Link to={data?.headmaster_mobile}>
          <FaWhatsapp className="w-6 lg:w-8 text-3xl text-primary" />
        </Link>
        </div>
      </div>
    </div>
  );
}

