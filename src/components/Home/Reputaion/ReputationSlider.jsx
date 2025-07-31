import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { images } from "../../../assets";
import "../../../assets/css/testimonial.css";

const ReputationSlider = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
  return (
    <>
      <div className="testimonial__slider pb-3">
        <Slider {...settings}>
          <div className="slider__item">
            <div className="m-2 border-primary border rounded-[4px] p-3">
              <div className="slider__top pb-1 flex justify-between ">
                <div className="slt__single flex gap-2 items-center">
                  <img
                    className="rounded-full drop-shadow-lg border border-primary"
                    src={images.reputator}
                    alt="reviewer"
                  />
                  <div className="name_designation">
                    <h4 className="text-primary font-medium leading-4 text-xl">
                      আব্দুর রশিদ খান
                    </h4>
                    <p className="text-[rgba(0,0,0,0.7)] text-base leading-6 mb-1">
                      মাননীয় সচিব | অর্থ মন্ত্রণালয়
                    </p>
                    <span className="px-5 rounded-md py-[6px] bg-primary text-textColor">
                      ১৯৯২ ব্যাচ{" "}
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
                  জনাব আব্দুর রশিদ খান ১৯৯২ সালে ঢাকা সরকারি আদর্শ উচ্চ বিদ্যালয়
                  থেকে উচ্চ মাধ্যমিক পরীক্ষা দেন, এবং সফলতার সাথে ১ম শ্রেণিতে
                  উত্তিন্ন হয়ে বর্তমানে বাংলাদেশ সরকারের অর্থ মন্ত্রণালয়ে মাননীয়
                  সচিবের দায়িত্ব পালন করছেন।
                </p>
              </div>
            </div>
          </div>
          <div className="slider__item">
            <div className="m-2 border-primary border rounded-[4px] p-3">
              <div className="slider__top pb-1 flex justify-between ">
                <div className="slt__single flex gap-2 items-center">
                  <img
                    className="rounded-full drop-shadow-lg border border-primary"
                    src={images.reputator}
                    alt="reviewer"
                  />
                  <div className="name_designation">
                    <h4 className="text-primary font-medium leading-4 text-xl">
                      আব্দুর রশিদ খান
                    </h4>
                    <p className="text-[rgba(0,0,0,0.7)] text-base leading-6 mb-1">
                      মাননীয় সচিব | অর্থ মন্ত্রণালয়
                    </p>
                    <span className="px-5 rounded-md py-[6px] bg-primary text-textColor">
                      ১৯৯২ ব্যাচ{" "}
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
                  জনাব আব্দুর রশিদ খান ১৯৯২ সালে ঢাকা সরকারি আদর্শ উচ্চ বিদ্যালয়
                  থেকে উচ্চ মাধ্যমিক পরীক্ষা দেন, এবং সফলতার সাথে ১ম শ্রেণিতে
                  উত্তিন্ন হয়ে বর্তমানে বাংলাদেশ সরকারের অর্থ মন্ত্রণালয়ে মাননীয়
                  সচিবের দায়িত্ব পালন করছেন।
                </p>
              </div>
            </div>
          </div>
          <div className="slider__item">
            <div className="m-2 border-primary border rounded-[4px] p-3">
              <div className="slider__top pb-1 flex justify-between ">
                <div className="slt__single flex gap-2 items-center">
                  <img
                    className="rounded-full drop-shadow-lg border border-primary"
                    src={images.reputator}
                    alt="reviewer"
                  />
                  <div className="name_designation">
                    <h4 className="text-primary font-medium leading-4 text-xl">
                      আব্দুর রশিদ খান
                    </h4>
                    <p className="text-[rgba(0,0,0,0.7)] text-base leading-6 mb-1">
                      মাননীয় সচিব | অর্থ মন্ত্রণালয়
                    </p>
                    <span className="px-5 rounded-md py-[6px] bg-primary text-textColor">
                      ১৯৯২ ব্যাচ{" "}
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
                  জনাব আব্দুর রশিদ খান ১৯৯২ সালে ঢাকা সরকারি আদর্শ উচ্চ বিদ্যালয়
                  থেকে উচ্চ মাধ্যমিক পরীক্ষা দেন, এবং সফলতার সাথে ১ম শ্রেণিতে
                  উত্তিন্ন হয়ে বর্তমানে বাংলাদেশ সরকারের অর্থ মন্ত্রণালয়ে মাননীয়
                  সচিবের দায়িত্ব পালন করছেন।
                </p>
              </div>
            </div>
          </div>
          <div className="slider__item">
            <div className="m-2 border-primary border rounded-[4px] p-3">
              <div className="slider__top pb-1 flex justify-between ">
                <div className="slt__single flex gap-2 items-center">
                  <img
                    className="rounded-full drop-shadow-lg border border-primary"
                    src={images.reputator}
                    alt="reviewer"
                  />
                  <div className="name_designation">
                    <h4 className="text-primary font-medium leading-4 text-xl">
                      আব্দুর রশিদ খান
                    </h4>
                    <p className="text-[rgba(0,0,0,0.7)] text-base leading-6 mb-1">
                      মাননীয় সচিব | অর্থ মন্ত্রণালয়
                    </p>
                    <span className="px-5 rounded-md py-[6px] bg-primary text-textColor">
                      ১৯৯২ ব্যাচ{" "}
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
                  জনাব আব্দুর রশিদ খান ১৯৯২ সালে ঢাকা সরকারি আদর্শ উচ্চ বিদ্যালয়
                  থেকে উচ্চ মাধ্যমিক পরীক্ষা দেন, এবং সফলতার সাথে ১ম শ্রেণিতে
                  উত্তিন্ন হয়ে বর্তমানে বাংলাদেশ সরকারের অর্থ মন্ত্রণালয়ে মাননীয়
                  সচিবের দায়িত্ব পালন করছেন।
                </p>
              </div>
            </div>
          </div>
          <div className="slider__item">
            <div className="m-2 border-primary border rounded-[4px] p-3">
              <div className="slider__top pb-1 flex justify-between ">
                <div className="slt__single flex gap-2 items-center">
                  <img
                    className="rounded-full drop-shadow-lg border border-primary"
                    src={images.reputator}
                    alt="reviewer"
                  />
                  <div className="name_designation">
                    <h4 className="text-primary font-medium leading-4 text-xl">
                      আব্দুর রশিদ খান
                    </h4>
                    <p className="text-[rgba(0,0,0,0.7)] text-base leading-6 mb-1">
                      মাননীয় সচিব | অর্থ মন্ত্রণালয়
                    </p>
                    <span className="px-5 rounded-md py-[6px] bg-primary text-textColor">
                      ১৯৯২ ব্যাচ{" "}
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
                  জনাব আব্দুর রশিদ খান ১৯৯২ সালে ঢাকা সরকারি আদর্শ উচ্চ বিদ্যালয়
                  থেকে উচ্চ মাধ্যমিক পরীক্ষা দেন, এবং সফলতার সাথে ১ম শ্রেণিতে
                  উত্তিন্ন হয়ে বর্তমানে বাংলাদেশ সরকারের অর্থ মন্ত্রণালয়ে মাননীয়
                  সচিবের দায়িত্ব পালন করছেন।
                </p>
              </div>
            </div>
          </div>
          <div className="slider__item">
            <div className="m-2 border-primary border rounded-[4px] p-3">
              <div className="slider__top pb-1 flex justify-between ">
                <div className="slt__single flex gap-2 items-center">
                  <img
                    className="rounded-full drop-shadow-lg border border-primary"
                    src={images.reputator}
                    alt="reviewer"
                  />
                  <div className="name_designation">
                    <h4 className="text-primary font-medium leading-4 text-xl">
                      আব্দুর রশিদ খান
                    </h4>
                    <p className="text-[rgba(0,0,0,0.7)] text-base leading-6 mb-1">
                      মাননীয় সচিব | অর্থ মন্ত্রণালয়
                    </p>
                    <span className="px-5 rounded-md py-[6px] bg-primary text-textColor">
                      ১৯৯২ ব্যাচ{" "}
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
                  জনাব আব্দুর রশিদ খান ১৯৯২ সালে ঢাকা সরকারি আদর্শ উচ্চ বিদ্যালয়
                  থেকে উচ্চ মাধ্যমিক পরীক্ষা দেন, এবং সফলতার সাথে ১ম শ্রেণিতে
                  উত্তিন্ন হয়ে বর্তমানে বাংলাদেশ সরকারের অর্থ মন্ত্রণালয়ে মাননীয়
                  সচিবের দায়িত্ব পালন করছেন।
                </p>
              </div>
            </div>
          </div>
          <div className="slider__item">
            <div className="m-2 border-primary border rounded-[4px] p-3">
              <div className="slider__top pb-1 flex justify-between ">
                <div className="slt__single flex gap-2 items-center">
                  <img
                    className="rounded-full drop-shadow-lg border border-primary"
                    src={images.reputator}
                    alt="reviewer"
                  />
                  <div className="name_designation">
                    <h4 className="text-primary font-medium leading-4 text-xl">
                      আব্দুর রশিদ খান
                    </h4>
                    <p className="text-[rgba(0,0,0,0.7)] text-base leading-6 mb-1">
                      মাননীয় সচিব | অর্থ মন্ত্রণালয়
                    </p>
                    <span className="px-5 rounded-md py-[6px] bg-primary text-textColor">
                      ১৯৯২ ব্যাচ{" "}
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
                  জনাব আব্দুর রশিদ খান ১৯৯২ সালে ঢাকা সরকারি আদর্শ উচ্চ বিদ্যালয়
                  থেকে উচ্চ মাধ্যমিক পরীক্ষা দেন, এবং সফলতার সাথে ১ম শ্রেণিতে
                  উত্তিন্ন হয়ে বর্তমানে বাংলাদেশ সরকারের অর্থ মন্ত্রণালয়ে মাননীয়
                  সচিবের দায়িত্ব পালন করছেন।
                </p>
              </div>
            </div>
          </div>
          <div className="slider__item">
            <div className="m-2 border-primary border rounded-[4px] p-3">
              <div className="slider__top pb-1 flex justify-between ">
                <div className="slt__single flex gap-2 items-center">
                  <img
                    className="rounded-full drop-shadow-lg border border-primary"
                    src={images.reputator}
                    alt="reviewer"
                  />
                  <div className="name_designation">
                    <h4 className="text-primary font-medium leading-4 text-xl">
                      আব্দুর রশিদ খান
                    </h4>
                    <p className="text-[rgba(0,0,0,0.7)] text-base leading-6 mb-1">
                      মাননীয় সচিব | অর্থ মন্ত্রণালয়
                    </p>
                    <span className="px-5 rounded-md py-[6px] bg-primary text-textColor">
                      ১৯৯২ ব্যাচ{" "}
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
                  জনাব আব্দুর রশিদ খান ১৯৯২ সালে ঢাকা সরকারি আদর্শ উচ্চ বিদ্যালয়
                  থেকে উচ্চ মাধ্যমিক পরীক্ষা দেন, এবং সফলতার সাথে ১ম শ্রেণিতে
                  উত্তিন্ন হয়ে বর্তমানে বাংলাদেশ সরকারের অর্থ মন্ত্রণালয়ে মাননীয়
                  সচিবের দায়িত্ব পালন করছেন।
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default ReputationSlider;
