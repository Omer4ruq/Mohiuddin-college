import { useEffect, useState, useRef } from "react";
import messageIcon from "../../../assets/icons/messageIcon.png";
import Box from "../sub-component/Box";
import ChairmanSpeech from "./ChairmanSpeech";
import Axios from "../../../axios/axios";
import HeadMasterSpeech from "./HeadMasterSpeech";
import SingleSpeech from "./SingleSpeech";

export default function SpeechAndMenu() {
  const [doubleQuote, setDoubleQuote] = useState(false);
  const [data, setData] = useState(null);
  const [otherdata, setOtherData] = useState(null);
  const [otherSecondData, setOtherSecondData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const sectionRef = useRef(null);

  // Intersection Observer for scroll-triggered animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the component is visible
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before the element comes into view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    Axios.get('/messages-from-head') 
      .then(response => {
        setData(response.data[0]);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    Axios.get('/messages-from-other') 
      .then(response => {
        setOtherData(response.data[0]);
        setOtherSecondData(response.data[1]);
        setLoading(false);
        response.data[0] && setDoubleQuote(true);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="mb-4" ref={sectionRef}>
        <div className="col-span-1 lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="border rounded-lg h-64 bg-gray-200 animate-pulse flex items-center justify-center">
              <div className="text-gray-500">Loading...</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mb-4" ref={sectionRef}>
      {doubleQuote ? (
        <div className="col-span-1 lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* First Box - slide from left */}
          <div 
            className={`transition-all duration-700 ease-out ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-12'
            }`}
            style={{ transitionDelay: '0ms' }}
          >
            <Box
              heading={data?.heading}
              icon={messageIcon}
              component={<ChairmanSpeech data={data}/>}
            />
          </div>
          
          {/* Second Box - slide from bottom */}
          <div 
            className={`transition-all duration-700 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <Box
              heading={otherdata?.heading}
              icon={messageIcon}
              component={<HeadMasterSpeech data={otherdata} />}
            />
          </div>
          
          {/* Third Box - slide from right */}
          <div 
            className={`transition-all duration-700 ease-out ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-12'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <Box
              heading={otherSecondData?.heading}
              icon={messageIcon}
              component={<HeadMasterSpeech data={otherSecondData} />}
            />
          </div>
        </div>
      ) : (
        <div className="col-span-1 lg:col-span-2 grid grid-cols-1 gap-4">
          {/* Single Box - fade and scale */}
          <div 
            className={`transition-all duration-800 ease-out ${
              isVisible 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-95'
            }`}
          >
            <Box
              heading={data?.heading}
              icon={messageIcon}
              component={<SingleSpeech />}
            />
          </div>
        </div>
      )}
    </div>
  );
}