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
  if (error) return <p>Error: {error.message}</p>


  return (
    <div className="md:px-6 lg:px-10 xl:px-16 md:py-6 p-4 bg-gradient-to-r from-primary to-secondary flex flex-col md:flex-row justify-between items-center gap-4">
      <Link to="/"><img src={data?.institute_logo} alt="school logo" className="lg:h-24 h-20" /></Link>

      <div className="flex items-center gap-4 text-textColor font-liAdorNoirrit">
        <div className="text-center">
          <h2 className="lg:text-5xl text-4xl">
            {data?.institute_name}
          </h2>
          <h5 className="lg:text-2xl text-xl">
            {
              (data?.institute_eiin_no && data?.institute_eiin_no != "None") && (`
                EIIN No: ${data?.institute_eiin_no
                } | `
              )
            }  {data?.institute_address}
          </h5>
        </div>
      </div>

      <div className="flex lg:gap-5 gap-4">
        <Link to={data?.institute_fb}>
          <FaFacebook  className="w-6 lg:w-8 text-3xl text-white" />  
        </Link>
        <Link to={data?.institute_youtube}>
          <FaYoutube className="w-6 lg:w-8 text-3xl text-white" />
        </Link>
        <Link to={`https://wa.me/${data?.headmaster_mobile}`} target="_blank">
          <FaWhatsapp className="w-6 lg:w-8 text-3xl text-white" />
        </Link>
      </div>
    </div>
  );
}
