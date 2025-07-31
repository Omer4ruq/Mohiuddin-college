import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import linkIcon from "../../../assets/icons/link.png";
import dummyTube from "../../../assets/images/dummytube.jpg";
import Axios from "../../../axios/axios";
import Events from "../cornerAndEvents/Events";
import Box from "../sub-component/Box";
import "./presence.css";

// Function to extract YouTube video ID from URL
const getYouTubeVideoId = (url) => {
  const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

// Function to get YouTube thumbnail URL
const getYouTubeThumbnail = (url) => {
  const videoId = getYouTubeVideoId(url);
  return videoId ? `https://img.youtube.com/vi/${videoId}/0.jpg` : dummyTube;
};

export default function Presence() {
  const [data, setData] = useState([]);
  const [selectedLink, setSelectedLink] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Axios.get("/video-gallery/")
      .then((response) => {
        setData(response.data);
        setSelectedLink(response?.data[0]?.link || "");
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Remove the random otherLinks logic if not needed
  // let otherLinks = [];
  // while (otherLinks.length < 12) {
  //   otherLinks.push(data[Math.floor(Math.random() * data.length)]);
  // }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <Box heading="Upcoming Events" icon={linkIcon} component={<Events />} />
      <div className="col-span-1 lg:col-span-2 grid grid-cols-1 sm:grid-cols-9 gap-3">
        <div className="col-span-1 sm:col-span-7 w-full">
          <div className="video-container w-full">
            <iframe
              width="100%"
              height="420"
              src={selectedLink}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube video"
            />
          </div>
        </div>
        <div className="col-span-1 sm:col-span-2 relative">
          <div className="scrollable-content h-60 sm:h-[360px] grid grid-cols-3 sm:grid-cols-1 gap-3 mb-[60px]">
            {data?.map((item, index) => (
              <img
                key={item?.id || `video-${index}`}
                src={getYouTubeThumbnail(item?.link)} // Use thumbnail URL
                alt={item?.heading || "YouTube thumbnail"}
                className="w-full h-auto cursor-pointer"
                onClick={() => setSelectedLink(item?.link)}
              />
            ))}
          </div>
          <Link to="/video-gallery">
            <button className="text-center p-3 text-xl bg-primary text-textColor w-full absolute bottom-0 h-[50px]">
              All Videos
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}