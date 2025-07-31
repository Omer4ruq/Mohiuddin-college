import Slider from "react-slick";

import { useEffect, useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../../../assets/css/testimonial.css";
import Axios from "../../../axios/axios";

export default function QuoteSlider() {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          dots: true,
          arrows: false,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          dots: true,
          arrows: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
   Axios.get('/iconic-students/')
     .then(response => {
       setData(response.data);
       setLoading(false);
     })
     .catch(error => {
       setError(error);
       setLoading(false);
     });
 }, []);


  return (
    <div className="testimonial__slider pb-3">
      {
        data?.length > 1 ? (
          <Slider {...settings}>
          {
            data?.map((item) => (
              <div key={item.id} className="slider__item">
                <div className="m-2 border-primary border rounded-[4px] p-3">
                  <div className="slider__top pb-1 flex justify-between ">
                    <div className="slt__single flex gap-2 items-center">
                      <img
                        className="rounded-full drop-shadow-lg border border-primary max-w-20"
                        src={item?.image}
                        alt="reviewer"
                      />
                      <div className="name_designation">
                        <h4 className="text-primary font-medium leading-4 text-xl">
                          {item?.name}
                        </h4>
                        <p className="text-[rgba(0,0,0,0.7)]  leading-6 mb-1">
                          {item?.degination}
                        </p>
                        <span className="px-5 rounded-md py-[6px] bg-primary text-textColor">
                          {item?.batch_year} ব্যাচ{" "}
                        </span>
                      </div>
                    </div>
                    <div className="slt__single">
                      <div className="mb-2 stars flex gap-[2px] justify-end"></div>
                      <div className="social_icons flex gap-2"></div>
                    </div>
                  </div>
                  <div className="slider__btm font-poppins text-sm text-primary mt-2">
                    <p>
                      {item?.test}
                    </p>
                  </div>
                </div>
              </div>
            ))
          }
        </Slider>
        ) : (
          <div className="slider__item">
          <div className="m-2 border-primary border rounded-[4px] p-3">
            <div className="slider__top pb-1 flex justify-between ">
              <div className="slt__single flex gap-2 items-center">
                <img
                  className="rounded-full drop-shadow-lg border border-primary max-w-20"
                  src={data[0]?.image}
                  alt="reviewer"
                />
                <div className="name_designation">
                  <h4 className="text-primary font-medium leading-4 text-xl">
                    {data[0]?.name}
                  </h4>
                  <p className="text-[rgba(0,0,0,0.7)] text-base leading-6 mb-1">
                    {data[0]?.designation}
                  </p>
                  <span className="px-5 rounded-md py-[6px] bg-primary text-textColor">
                    {data[0]?.batch_year} ব্যাচ{" "}
                  </span>
                </div>
              </div>
              <div className="slt__single">
                <div className="mb-2 stars flex gap-[2px] justify-end"></div>
                <div className="social_icons flex gap-2"></div>
              </div>
            </div>
            <div className="slider__btm font-poppins text-sm text-primary mt-2">
              <p>
                {data[0]?.test}
              </p>
            </div>
          </div>
        </div>
        )
      }
    </div>
  );
}
