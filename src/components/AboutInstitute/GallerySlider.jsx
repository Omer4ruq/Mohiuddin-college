import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { useEffect, useState } from "react";
import "../../assets/css/gallery.css";
import "../../assets/css/testimonial.css";
import Axios from "../../axios/axios";

const GallerySlider = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
  useEffect(() => {
    Axios.get('/banners') 
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "w-full h-full",
  };
  return (
    <>
      <div className="testimonial__slider gallery__slider w-full h-full">
      {
        data?.length > 1 ? (
        <Slider {...settings}>
        {
            data.map((item) => (
              item.status === "ACTIVE" && (
                <div key={item.id}>
                  <img
                    src={item.banner_image}
                    alt=""
                    className="rounded-md object-cover h-[360px] lg:h-[480px] w-full"
                  />
                </div>
              )
            ))
          }
        </Slider>) : (
          <div className="grid-cols-1 lg:col-span-2 border border-primary rounded-md h-[360px] lg:h-[480px] w-full">
            <img
              src={data && data[0]?.banner_image}
              alt=""
              className="rounded-md object-cover h-[360px] lg:h-[480px] w-full"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default GallerySlider;
