import messageIcon from "../../../assets/icons/messageIcon.png";
import Box from "../sub-component/Box";
import ChairmanSpeech from "./ChairmanSpeech";
// import EssentialMenus from "./EssentialMenus";
import { useEffect, useState } from "react";
import Axios from "../../../axios/axios";
import HeadMasterSpeech from "./HeadMasterSpeech";
import SingleSpeech from "./SingleSpeech";


export default function SpeechAndMenu() {
  const [doubleQuote, setDoubleQuote] = useState(false);

  const [data, setData] = useState(null);
  const [otherdata, setOtherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        setLoading(false);
        response.data[0] && setDoubleQuote(true);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="mb-4">
      {
        doubleQuote ? (
          <div className="col-span-1 lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Box
              heading={data?.heading}
              icon={messageIcon}
              component={<ChairmanSpeech data={data}/>}
            />
            <Box
              heading={otherdata?.heading}
              icon={messageIcon}
              component={<HeadMasterSpeech data={otherdata} />}
            />
          </div>
        ) : (
          <div className="col-span-1 lg:col-span-2 grid grid-cols-1 gap-4">
            <Box
              heading={data?.heading}
              icon={messageIcon}
              component={<SingleSpeech />}
            />
          </div>
        )
      }

      {/* <Box
        heading="প্রয়োজনীয় মেনুসমূহ"
        icon={noticeIcon}
        component={<EssentialMenus />}
      /> */}

      {/* <Box
      heading="আসন্ন ইভেন্ট ও অন্যান্য সময়সূচী"
      icon={linkIcon}
      component={<Events />}
      /> */}
      
    </div>
  );
}
