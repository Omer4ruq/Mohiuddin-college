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
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-3xl mx-auto text-gray-800 p-6 bg-white shadow-md">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center mb-6 text-primary">
        Our History
      </h2>

      {/* First Text Section */}
      <p className="mb-6 text-lg text-primary leading-relaxed">
        The magnificently designed educational institution named Rajuk Uttara Model College stands proudly on
the Dhaka-Mymensingh Road close to Azampur Bus Stand. It is situated at Sector-6 of Uttara Model
Town about one km. from the Hazrat Shahajalal International Airport offering an eye catching view to
the passersby. With an accommodation of about 8000 students in two shifts, the college is spread over
almost four acres of land with a spacious playground in front of the main Academic Building. The
absence of a truly standard educational institution in the area had led to the idea of establishing a
college of very high standard in the line of reputed Public Schools &amp; Colleges/Cadet Colleges in
Bangladesh. The construction of the main academic building was completed in the year 1994 and the
college section was formally inaugurated in the Academic year 1994-1995.
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

      {/* Second Text Section  */}
      <p className="text-lg leading-relaxed mt-6 text-primary">
   The formal classes of college section started in the same year. Due to acute shortage of infrastructural
facilities another development project for construction of a new building was taken up in the year 1995
which was subsequently completed in two phases and the main academic building took its present
shape in the year 2001. With the financial assistance of JICA, a separate twelve-story English Medium
Building is being constructed in the southern part of the college campus. This institute has already
earned the reputation to be one of the best educational institutions of the country. Now all out efforts
are being made to transform it into an institution of international stature. A very high powered Board of
Governors constituted by the Ministry of Education is relentlessly working to achieve this goal.
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