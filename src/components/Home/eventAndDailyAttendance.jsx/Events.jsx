import calendar from "../../../assets/icons/calendar-violet.png";
import Card from "../sub-component/Card";

export default function Events() {
  const links = [
    {
      title: "ষাণ্মাসিক মূল্যায়ন উৎসব - জুন ২০২৪",
      data: "১৪ নভেম্বের ২০২৪ - ১৭ ডিসেম্বর ২০২৪",
    },
    {
      title: "বই বিতরন কর্মসূচী - জানুয়ারী ২০২৪",
      data: "০৩ জানুয়ারী ২০২৪ - ০৫ জানুয়ারী ২০২৪",
    },
    {
      title: "অর্ধ বার্ষিক পরিক্ষা - জুলাই ২০২৪",
      data: "০৯ জুলাই ২০২৪ - ১৯ জুলাই ২০২৪",
    },
  ];

  return (
    <div className="space-y-4 pb-10">
      {links.map((item, index) => (
        <Card key={index} item={item} icon={calendar} />
      ))}
      <button className="text-xl text-primary font-poppins font-semibold absolute bottom-0 right-0 p-4">
        View More
      </button>
    </div>
  );
}
