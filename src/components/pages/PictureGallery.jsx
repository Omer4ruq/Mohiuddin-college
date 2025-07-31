import { useEffect, useState } from "react";
import { images } from "../../assets";
import Axios from "../../axios/axios";
import Box from "../Home/sub-component/Box";
import AllGalleryImages from "../PictureGallery/AllGalleryImages";

const PictureGallery = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
   Axios.get('/gallery/')
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
    <>
      <div className="container font-liAdorNoirrit my-4 lg:my-6 space-y-6 px-4 sm:px-6 sm:mx-auto xl:px-8 ">
        <div className="gallery picture_gallery">
          <Box
            icon={images.galleryIcon}
            heading="Photo Gallery"
            component={<AllGalleryImages pictures={data} />}
          />
        </div>
      </div>
    </>
  );
};

export default PictureGallery;
