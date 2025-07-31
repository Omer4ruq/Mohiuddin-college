import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "../../axios/axios";
import GalleryImages from "./Gallery/GalleryImages";
import GallerySlider from "./Gallery/GallerySlider";


const GallerySection = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
     Axios.get('/gallery/')
       .then(response => {
        const featuredImages = response.data.filter(image => image.featured === true);
         setData(featuredImages);
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
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 bg-white border-primary border p-5 rounded-md">
        <div className="large_image_slider">
            <GallerySlider pictures={data}/>
        </div>
        <div className="small_images">
          <div className="grid grid-cols-3 grid-rows-3 gap-3">
            <GalleryImages pictures={data}/>
          </div>
          <Link to="/picture-gallery">
            <button className={`w-full text-textColor text-xl col-span-3 rounded-md py-2 bg-gradient-to-r from-primary to-secondary`}>All Images</button>
            </Link>
        </div>
      </div>
    </>
  );
};

export default GallerySection;
