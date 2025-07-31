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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>

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

      {/* hero image slider */}
      {
        data.length > 1 ? (
          <Slider {...settings} className="grid-cols-1 lg:col-span-2 border border-primary rounded-md h-[360px] lg:h-[480px] w-full">
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
        </Slider>
        ) : (
          <div className="grid-cols-1 lg:col-span-2 border border-primary rounded-md h-[360px] lg:h-[480px] w-full">
            <img
              src={data[0]?.banner_image}
              alt=""
              className="rounded-md object-cover h-[360px] lg:h-[480px] w-full"
            />
          </div>
        )
      }

      <Box
        heading="Notice Board"
        icon={noticeIcon}
        component={<NoticeBoard />}
      />

    </div>

  );
}
