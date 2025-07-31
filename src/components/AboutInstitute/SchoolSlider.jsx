import { useEffect, useState } from "react";
import Slider from "react-slick";
import Axios from "../../axios/axios";

export default function SchoolSlider() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
useEffect(() => {
  Axios.get('/school-history') 
    .then(response => {
      setData(response.data[0]?.images);
      setLoading(false);
    })
    .catch(error => {
      setError(error);
      setLoading(false);
    });
}, []);


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
    {
      data?.length > 1 ? (
    <Slider {...settings}>
      {
        data?.map((item, index) => (
        <div key={index}>
          <img src={item?.image} alt="" className="w-full" />
        </div>
        ))
      }
    </Slider>): (
      <div className="grid-cols-1 lg:col-span-2 border border-primary rounded-md h-[120px] lg:h-[180px] w-full">
        <img
          src={data && data[0]?.image}
          alt=""
          className="rounded-md object-cover h-[360px] lg:h-[480px] w-full"
        />
      </div>
    )}
    </>
  );
}
