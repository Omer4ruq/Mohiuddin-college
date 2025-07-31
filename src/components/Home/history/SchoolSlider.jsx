import Slider from "react-slick";

export default function SchoolSlider({data}) {

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
      data?.images?.length > 1 ? (
        <Slider {...settings}>
        {
          data?.images?.map((item, index) => (
            <div key={index}>
              <img src={item?.image} alt="" className="w-full" />
            </div>
          ))
        }
      </Slider>) : (
        <img src={data?.images[0]?.image} alt="" className="w-full" />
      )
    }
    </>
  );
}
