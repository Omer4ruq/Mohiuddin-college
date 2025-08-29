import { useEffect, useState } from "react";
import { FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import Axios from "../../../axios/axios";

export default function Intro() {
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
  if (error) return <p>Error: {error.message}</p>;

  return (
    // Option 1: Deep Blue to Navy (Most classy with your navbar)
    <div className="md:px-6 lg:px-10 xl:px-16 md:py-6 p-4 bg-[#1e3a8a] flex justify-center  md:justify-between items-center gap-4">
      
    {/* Option 2: Elegant Gray-Blue to Navy (Very professional)
    <div className="md:px-6 lg:px-10 xl:px-16 md:py-6 p-4 bg-gradient-to-r from-[#475569] to-[#061742] flex flex-col md:flex-row justify-between items-center gap-4">
   bg-gradient-to-r from-[#1e3a8a] to-[#061742]
   */}
    
    {/* Option 3: Royal Blue to Deep Navy (Bold and elegant)
    <div className="md:px-6 lg:px-10 xl:px-16 md:py-6 p-4 bg-gradient-to-r from-[#2563eb] to-[#0f172a] flex flex-col md:flex-row justify-between items-center gap-4">
    */}
    
      <Link to="/">
        <img src={data?.institute_logo} alt="school logo" className="lg:h-24 h-16" />
      </Link>

      <div className="flex items-center gap-4 text-white font-liAdorNoirrit">
        <div className="text-center">
          <h2 className="lg:text-5xl text-2xl font-semibold">
            {data?.institute_name}
          </h2>
          <h5 className="lg:text-2xl text-xl font-light opacity-90">
            {/* {
              (data?.institute_eiin_no && data?.institute_eiin_no != "None") && (`
                EIIN No: ${data?.institute_eiin_no} | `
              )
            }   */}
            EIIN No: 108040 
          </h5>
        </div>
      </div>

      <div className="hidden md:flex  lg:gap-5 gap-4">
        <Link 
          to={data?.institute_fb}
          className="hover:scale-110 transition-transform duration-200"
        >
          <FaFacebook className="w-6 lg:w-8 text-3xl text-white hover:text-blue-300" />  
        </Link>
        <Link 
          to={data?.institute_youtube}
          className="hover:scale-110 transition-transform duration-200"
        >
          <FaYoutube className="w-6 lg:w-8 text-3xl text-white hover:text-red-300" />
        </Link>
        <Link 
          to={`https://wa.me/${data?.headmaster_mobile}`} 
          target="_blank"
          className="hover:scale-110 transition-transform duration-200"
        >
          <FaWhatsapp className="w-6 lg:w-8 text-3xl text-white hover:text-green-300" />
        </Link>
      </div>
    </div>
  );
}