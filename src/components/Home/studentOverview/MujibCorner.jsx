import img from "../../../assets/images/image 9.jpg";
import Card2 from "../sub-component/Card2";

export default function MujibCorner() {
  const titles = [
    "বঙ্গবন্ধু ও তার সম্পর্কে বিস্তারিত জানুন",
    "বঙ্গবন্ধুর অসমাপ্ত আত্মজীবনী",
    "বঙ্গবন্ধুর লেখা সকল বইসমূহ",
    "বঙ্গবন্ধুর লেখা সকল বইসমূহ",
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-3">
        {titles.map((title, index) => (
          <Card2 key={index} title={title} />
        ))}
      </div>
      <div className="space-y-3">
        <img
          src={img}
          alt=""
          className="w-full rounded-md border border-primary"
        />
        <h4 className="text-primary text-lg leading-6 text-center">
          যতোকাল রবে পদ্মা-মেঘনা- গৌরী-যমুনা-বহমান ততোকাল র’বে কীর্তি তোমার শেখ
          মুজিবুর রহমান
        </h4>
      </div>
    </div>
  );
}
