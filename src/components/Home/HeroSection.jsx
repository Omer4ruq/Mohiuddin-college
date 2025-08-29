import { useEffect, useState } from 'react';
import Slider from "react-slick";
import noticeIcon from "../../assets/images/notice.png";
import Axios from '../../axios/axios';
import NoticeBoard from "./NoticeBoard";
import Box from "./sub-component/Box";

export default function HeroSection() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    Axios.get('/banners') 
      .then(response => {
        setData(response.data);
        setLoading(false);
        // Trigger animation after data loads
        setTimeout(() => {
          setIsVisible(true);
        }, 100);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="hero-section grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Loading skeleton for slider */}
        <div className="grid-cols-1 lg:col-span-2 border border-gray-300 rounded-md h-[360px] lg:h-[480px] w-full bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="text-gray-500">Loading...</div>
        </div>
        
        {/* Loading skeleton for notice board */}
        <div className="border border-gray-300 rounded-md h-[360px] lg:h-[480px] w-full bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="text-gray-500">Loading...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="hero-section grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 flex items-center justify-center h-[360px] lg:h-[480px] border border-red-300 rounded-md bg-red-50">
          <p className="text-red-600">Error: {error.message}</p>
        </div>
        <div className="flex items-center justify-center h-[360px] lg:h-[480px] border border-red-300 rounded-md bg-red-50">
          <p className="text-red-600">Failed to load</p>
        </div>
      </div>
    );
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="hero-section grid grid-cols-1 lg:grid-cols-3 gap-4">
      {/* Hero image slider with animation */}
      <div 
        className={`grid-cols-1 lg:col-span-2 transition-all duration-700 ease-out ${
          isVisible 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 -translate-x-8'
        }`}
      >
        {data.length > 1 ? (
          <Slider {...settings} className="border border-primary rounded-md h-[360px] lg:h-[480px] w-full">
            {data.map((item) => (
              item.status === "ACTIVE" && (
                <div key={item.id}>
                  <img
                    src={item.banner_image}
                    alt=""
                    className="rounded-md object-cover h-[360px] lg:h-[480px] w-full"
                  />
                </div>
              )
            ))}
          </Slider>
        ) : (
          <div className="border border-primary rounded-md h-[360px] lg:h-[480px] w-full">
            <img
              src={data[0]?.banner_image}
              alt=""
              className="rounded-md object-cover h-[360px] lg:h-[480px] w-full"
            />
          </div>
        )}
      </div>

      {/* Notice Board with animation */}
      <div 
        className={`transition-all duration-700 ease-out delay-300 ${
          isVisible 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 translate-x-8'
        }`}
      >
        <Box
          heading="Notice Board"
          icon={noticeIcon}
          component={<NoticeBoard />}
        />
      </div>
    </div>
  );
}