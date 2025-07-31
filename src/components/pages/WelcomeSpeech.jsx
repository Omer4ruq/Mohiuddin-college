import { useEffect, useState } from "react";
import Axios from "../../axios/axios";

export default function WelcomeSpeech() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
   Axios.get('/welcome-speeches/')
     .then(response => {
       setData(response.data[0]);
       setLoading(false);
     })
     .catch(error => {
       setError(error);
       setLoading(false);
     });
 }, []);


 if (loading) return <p>Loading...</p>;
 if (error) return <p>Error: {error.message}</p>
  return (
    <>
      <div className="space-y-3">
        <h2 className="text-2xl font-poppins font-medium text-textColor bg-primary px-4 py-3">
          Welcome Speech
        </h2>
        <h4 className="border border-primary rounded-md p-3 text-primary text-xl leading-6">

          {data?.description          }

        </h4>
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Box
          heading={"চেয়ারম্যানের বাণী"}
          icon={messageIcon}
          component={<ChairmanSpeech />}
        />
        <Box
          heading={"প্রধান শিক্ষকের বাণী"}
          icon={messageIcon}
          component={<HeadMasterSpeech />}
        />
      </div> */}
    </>
  );
}
