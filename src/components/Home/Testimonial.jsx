import { FaLinkedin, FaPhoneSquareAlt, FaStar } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { images } from "../../assets";


import { useEffect, useState } from "react";
import '../../assets/css/testimonial.css';
import Axios from "../../axios/axios";
import SectionTop from "./sub-component/SectionTop";

const Testimonial = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Axios.get('/testimonials')
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data.length) return <p>No testimonials available.</p>;

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 1024,
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

  return (
    <div className="testimonial__wrapper">
      <div className="testimonial border-primary border rounded-md">
        <SectionTop title="Reviews" image={images?.halfStarIcon} />
        <div className="testimonial__slider px-5 py-8">
          {data.length > 1 ? (
            <Slider {...settings}>
              {data.map((item, index) => (
                <div className="slider__item" key={index}>
                  <div className="m-2 custom_shadow rounded-[4px] p-5">
                    <div className="slider__top pb-1 flex justify-between border-[rgba(80,43,244,0.5)] border-b">
                      <div className="slt__single flex gap-2 items-center">
                        <img
                          className="w-16 h-16 rounded-full drop-shadow-lg border border-primary"
                          src={item?.testimonial_image}
                          alt="reviewer"
                        />
                        <div className="name_designation">
                          <h4 className="text-primary leading-6 text-xl">
                            {item?.name}
                          </h4>
                          <p className="text-[rgba(0,0,0,0.7)] text-base leading-6">
                            {item?.profession}
                          </p>
                        </div>
                      </div>
                      <div className="slt__single">
                        <div className="mb-2 stars flex gap-[2px] justify-end">
                          {Array.from({ length: item?.star }, (_, index) => (
                            <FaStar className="text-primary" key={index} />
                          ))}
                        </div>
                        <div className="social_icons flex gap-2">
                          <FaPhoneSquareAlt className="w-5 h-5 text-primary" />
                          <IoLogoFacebook className="w-5 h-5 text-primary" />
                          <FaLinkedin className="w-5 h-5 text-primary" />
                          <FaSquareTwitter className="w-5 h-5 text-primary" />
                        </div>
                      </div>
                    </div>
                    <div className="slider__btm font-poppins text-sm text-[rgba(0,0,0,0.7)] my-5">
                      <p>{item?.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          ) : (
            data[0] && (
              <div className="slider__item">
                <div className="m-2 custom_shadow rounded-[4px] p-5">
                  <div className="slider__top pb-1 flex justify-between border-[rgba(80,43,244,0.5)] border-b">
                    <div className="slt__single flex gap-2 items-center">
                      <img
                        className="w-16 h-16 rounded-full drop-shadow-lg border border-primary"
                        src={data[0]?.testimonial_image}
                        alt="reviewer"
                      />
                      <div className="name_designation">
                        <h4 className="text-primary leading-6 text-xl">
                          {data[0]?.name}
                        </h4>
                        <p className="text-[rgba(0,0,0,0.7)] text-base leading-6">
                          {data[0]?.profession}
                        </p>
                      </div>
                    </div>
                    <div className="slt__single">
                      <div className="mb-2 stars flex gap-[2px] justify-end">
                        {Array.from({ length: data[0]?.star }, (_, index) => (
                          <FaStar className="text-primary" key={index} />
                        ))}
                      </div>
                      <div className="social_icons flex gap-2">
                        <FaPhoneSquareAlt className="w-5 h-5 text-primary" />
                        <IoLogoFacebook className="w-5 h-5 text-primary" />
                        <FaLinkedin className="w-5 h-5 text-primary" />
                        <FaSquareTwitter className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="slider__btm font-poppins text-sm text-[rgba(0,0,0,0.7)] my-5">
                    <p>{data[0]?.text}</p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};


export default Testimonial;
