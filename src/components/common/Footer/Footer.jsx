import { useEffect, useState } from "react";
import { images } from "../../../assets";
import Axios from "../../../axios/axios";
import { Link } from "react-router-dom";

const Footer = () => {

  const count = [6, 0, 4];

  const [data, setData] = useState({});
  const [desc, setDesc] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false); 

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
  
  useEffect(() => {
   Axios.get('/welcome-speeches/')
     .then(response => {
       setDesc(response.data[0]);
       setLoading(false);
     })
     .catch(error => {
       setError(error);
       setLoading(false);
     });
 }, []);
  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>
// console.log("desc", desc)
  return (
  <div className="footer container-fluid text-textColor bg-gradient-to-r from-primary to-secondary font-ador py-8 text-[15px] text-base font-normal leading-6">
    <div className="foonter__cont container flex flex-wrap items-stretch lg:flex-nowrap lg:justify-between gap-8 sm:mx-auto px-4 sm:px-0 xl:px-8">
      <div className="footer__cont__item footer__cont__item--summary min-w-[320px] sm:min-w-[350px] flex lg:flex-row flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-5/12">
      <div className="img_wrapper ">
        <img className="min-w-20 object-contain w-28 h-28 mt-4" src={data?.institute_logo} alt="logo" />
      </div>
      {
        desc?.text ?  <div className="texts_wrapper lg:ml-5 ml-0 mt-3 lg:mt-0">
        <h2 className="xl:text-4xl text-3xl mb-2 ">{data?.institute_name}</h2>
        <p className="break-words hyphens-auto">{desc?.text}</p>
      </div> :  <div className="texts_wrapper lg:ml-5 ml-0 mt-3 lg:my-6 flex justify-center items-center">
        <h2 className="xl:text-5xl text-3xl mb-2 ">{data?.institute_name}</h2>
      </div>
      }
     
      </div>
      <div className="footer__cont__item text-center lg:text-left w-full lg:w-auto">
        <ul>
          <li className="pb-3"><Link to="#" className="whitespace-nowrap">About Us</Link></li>
          
          <li className="pb-3"><Link to="#" className="whitespace-nowrap">Our History</Link></li>
          {/* <li className="pb-3"><Link to="/" target="_blank" className="whitespace-nowrap">Privacy</Link></li>
          
          <li className="pb-3"><Link to="/" target="_blank" className="whitespace-nowrap">Terms & Conditions</Link></li> */}
          <li className="pb-3"><Link to="#" className="whitespace-nowrap">Contact Us</Link></li>
        </ul>
      </div>
      <div className="footer__cont__item text-center lg:text-left w-full lg:w-auto">
        <ul>
          <li className="pb-3"><Link to="#" className="whitespace-nowrap">Education Board</Link></li>
          <li className="pb-3"><Link to="#" className="whitespace-nowrap">Teacher Information</Link></li>
          <li className="pb-3"><Link to="#" className="whitespace-nowrap">Staff Information</Link></li>
          <li className="pb-3"><Link to="#" className="whitespace-nowrap">Image Gallery</Link></li>
          <li className="pb-3"><Link to="#" className="whitespace-nowrap">Video Gallery</Link></li>
        </ul>
      </div>
      <div className="footer__cont__item flex flex-col justify-between min-w-28 w-full max-w-full lg:max-w-[220px] ">
        <ul>
          <li className="pb-3 flex items-center justify-center lg:justify-normal gap-2">
            <img src={images.callIcon} alt="call icon" />
            <p>{data?.headmaster_mobile}</p>
          </li>
          <li className="pb-3 flex items-center justify-center lg:justify-normal gap-2">
            <img src={images.emailIcon} alt="email icon" />
            <p>{data?.institute_email_address}</p>
          </li>
          <li className="pb-3 flex items-center justify-center lg:justify-normal gap-2">
            <img src={images.addressIcon} alt="call icon" />
            <p>{data?.institute_address}</p>
          </li>
           {/* <li
              className="opacity-0 hover:opacity-100 hover:text-blue-500 cursor-pointer transition-all duration-300"
              onClick={() => setShowModal(true)}
            >
              Site Maker
            </li> */}
        </ul>
      
        {/* <p className="text-textColor text-end">Site Visit Count : 
        {
          count.map((num, i) => (
            <span key={i} className="border border-white px-1 ml-1">{num}</span>
          ))
        }
        </p> */}
      </div>
    </div>
     {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Site Created By</h2>
            <p className="text-lg text-black">Omer Faruq</p>
            <p className="text-sm">📧 Email: <a href="mailto:omerfaruq4@gmail.com" className="text-blue-500">omerfaruq4@gmail.com</a></p>
            <p className="text-sm">🔗 GitHub: <a href="https://github.com/Omer4ruq" target="_blank" className="text-blue-500">github.com/omerfaruq4</a></p>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
  </div>
  );
};

export default Footer;
