import React, { useState, useEffect } from "react";
import img1 from "../../../src/assets/images/history/img-1.jpg";
import img2 from "../../../src/assets/images/history/img-2.jpg";
import img3 from "../../../src/assets/images/history/img-3.png";

const historyImages = [
  { name: "img 1", img: img1 },
  { name: "img 2", img: img2 },
  { name: "img 3", img: img3 },
];

const History = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === historyImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // প্রতি ৩ সেকেন্ডে ছবি পরিবর্তন হবে

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-3xl mx-auto text-gray-800 p-6 bg-white shadow-md">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center mb-6 text-primary">
        আমাদের ইতিহাস
      </h2>

      {/* First Text Section */}
      <p className="mb-6 text-lg text-primary leading-relaxed">
        দৃষ্টিনন্দন নকশায় নির্মিত শিক্ষা প্রতিষ্ঠান <strong>মুহিউদ্দিন ডিগ্রি কলেজ</strong>
        গর্বভরে দাঁড়িয়ে আছে ঢাকা-ময়মনসিংহ সড়কের আজমপুর বাসস্ট্যান্ড সংলগ্ন এলাকায়।
        এটি উত্তরা মডেল টাউনের ৬ নং সেক্টরে অবস্থিত এবং হযরত শাহজালাল আন্তর্জাতিক বিমানবন্দর
        থেকে মাত্র এক কিলোমিটার দূরে। প্রায় ৮,০০০ শিক্ষার্থীর ধারণক্ষমতা সম্পন্ন এই কলেজটি
        দুই শিফটে পরিচালিত হয়। কলেজটির আয়তন প্রায় চার একর জমি জুড়ে বিস্তৃত এবং প্রধান
        একাডেমিক ভবনের সামনে একটি প্রশস্ত খেলার মাঠ রয়েছে। এলাকায় একটি মানসম্মত শিক্ষাপ্রতিষ্ঠানের
        অভাব থেকেই এই কলেজ প্রতিষ্ঠার ধারণা আসে। দেশের খ্যাতনামা পাবলিক স্কুল ও কলেজ/ক্যাডেট কলেজের
        আদলে একটি উচ্চমানের কলেজ গড়ে তোলা হয়। প্রধান একাডেমিক ভবনের নির্মাণ কাজ সম্পন্ন হয়
        ১৯৯৪ সালে এবং ১৯৯৪-৯৫ শিক্ষাবর্ষে কলেজ শাখা আনুষ্ঠানিকভাবে উদ্বোধন করা হয়।
      </p>

      {/* Single Image Slider */}
      <div className="relative overflow-hidden w-full h-60">
        {historyImages.map((image, index) => (
          <img
            key={image.name}
            src={image.img}
            alt={image.name}
            className={`absolute w-full h-full object-cover rounded-lg shadow-md transition-all duration-700 ease-in-out ${
              index === currentImageIndex
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          />
        ))}
      </div>

      {/* Second Text Section */}
      <p className="text-lg leading-relaxed mt-6 text-primary">
        একই বছর কলেজ শাখায় আনুষ্ঠানিকভাবে ক্লাস শুরু হয়। অবকাঠামোগত ঘাটতির কারণে
        ১৯৯৫ সালে নতুন একটি ভবন নির্মাণের প্রকল্প গ্রহণ করা হয় যা পরবর্তীতে দুই ধাপে
        সম্পন্ন হয় এবং ২০০১ সালে বর্তমান রূপ পায়। জাইকার আর্থিক সহায়তায় কলেজ ক্যাম্পাসের
        দক্ষিণ অংশে একটি পৃথক বারতলা ইংরেজি মাধ্যম ভবন নির্মাণাধীন রয়েছে।
        ইতোমধ্যেই এই প্রতিষ্ঠানটি দেশের অন্যতম শ্রেষ্ঠ শিক্ষাপ্রতিষ্ঠান হিসেবে সুনাম অর্জন করেছে।
        এখন এটিকে একটি আন্তর্জাতিক মানের প্রতিষ্ঠান হিসেবে গড়ে তোলার জন্য সর্বাত্মক প্রচেষ্টা চালানো হচ্ছে।
        শিক্ষা মন্ত্রণালয় কর্তৃক গঠিত উচ্চক্ষমতাসম্পন্ন গভর্নিং বডি এই লক্ষ্য অর্জনের জন্য নিরলসভাবে কাজ করছে।
      </p>

      {/* Preload Images */}
      <div className="hidden">
        {historyImages.map((image) => (
          <img key={image.name} src={image.img} alt="" />
        ))}
      </div>
    </div>
  );
};

export default History;
