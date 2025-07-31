import { useState } from "react";
import { FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ChairmanSpeech({data}) {
   const [isExpanded, setIsExpanded] = useState(false);
  
  
    const maxChars = 200;
    const isTextLong = data?.text?.length > maxChars;
    const truncatedText = isTextLong
      ? data?.text?.slice(0, maxChars) + "..."
      : data?.text;
  return (
    <div className="flex flex-col items-center space-y-4 text-center">
      <img
        src={data?.img}
        alt="Chairman"
        className="w-40 h-40 rounded-lg border-primary"
      />
      <h4 className="text-primary text-3xl">{data?.name}</h4>
      <div className="flex gap-3">
        <Link to={data?.facebook}>
          <FaFacebook  className="w-6 lg:w-8 text-3xl text-primary" />  
        </Link>
        <Link to={data?.linkedin}>
          <FaYoutube className="w-6 lg:w-8 text-3xl text-primary" />
        </Link>
        <Link to={`https://wa.me/${data?.whatsapps}`}>
          <FaWhatsapp className="w-6 lg:w-8 text-3xl text-primary" />
        </Link>
      </div>
      <div className="text-gray-500 text-lg leading-6 text-start w-full ">
        <p
          className={`transition-all duration-500 ease-in-out ${
            isExpanded ? "max-h-[1000px]" : "max-h-20"
          } overflow-hidden`}
        >
          {isExpanded || !isTextLong ? data?.text : truncatedText}
        </p>
        {isTextLong && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-primary font-medium text-base hover:underline focus:outline-none mt-2"
            aria-label={isExpanded ? "See less" : "See more"}
          >
            {isExpanded ? "See Less" : "See More"}
          </button>
        )}
      </div>
    </div>
  );
}
