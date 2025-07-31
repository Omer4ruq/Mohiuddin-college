
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { Fragment } from "react";
import Slider from "react-slick";
import "../../../assets/css/gallery.css";
import "../../../assets/css/testimonial.css";

const GallerySlider = ({pictures}) => {
    
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "w-full h-full"
  };
  return (
    <>
      <div className="testimonial__slider gallery__slider w-full h-full">
        { pictures?.length > 1 ? (
        <Slider {...settings}>
        {pictures?.map((item, index) => {
        if (index <= 4) {
          return (
              <Fragment key={item.id}>
                <div className="w-full h-full">
                <img
                  className={`rounded-md w-full h-full object-cover`}
                  src={item?.galary_image}
                  alt="gallery image"
                />
                </div>
                
              </Fragment>
          );
        }
      })}
        </Slider> ) : (
        <div className="w-full h-full">
          {
            pictures[0] && (
              <img
              className={`rounded-md w-full h-full object-cover`}
              src={pictures[0].galary_image}
              alt="gallery image"
            />
            )
          }
          </div> )}
      </div>
    </>
  );
};

export default GallerySlider;
