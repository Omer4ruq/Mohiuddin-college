import { useEffect, useState } from "react";
import img1 from "../../../assets/icons/s1.png";
import img2 from "../../../assets/icons/s2.png";
import img3 from "../../../assets/icons/s3.png";
import img4 from "../../../assets/icons/s4.png";
import Axios from "../../../axios/axios";
import Card2 from "../sub-component/Card2";
import { InfoRights, Objection, Repair, WorkSheet } from "./ServiceComponents";

export default function OtherServices() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
   Axios.get('/link-names') 
     .then(response => {
       setData(response.data);
       setLoading(false);
     })
     .catch(error => {
       setError(error);
       setLoading(false);
     });
 }, []);

 if (loading) return <p>Loading...</p>;
 if (error) return <p>Error: {error.message}</p>

  const services = [
    {
      heading: "জাতীয় শুদ্ধাচার কৌশল",
      icon: img1,
      component: <Repair />,
    },
    {
      heading: "বার্ষিক কর্মসম্পাদন চুক্তি",
      icon: img2,
      component: <WorkSheet />,
    },
    {
      heading: "অভিযোগ প্রতিকার ব্যবস্থাপনা",
      icon: img3,
      component: <Objection />,
    },
    {
      heading: "তথ্য অধিকার",
      icon: img4,
      component: <InfoRights />,
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {data?.map((service, index) => (
        <div
          key={index}
          className="col-span-1 border border-primary rounded-md relative pb-2"
        >
          <div className="flex items-center gap-3 bg-primary p-4 text-textColor">
            <div className="bg-white p-[6px] rounded-full">
              <img src={services[index].icon} alt="" className="h-6 w-6" />
            </div>

            <h4 className="text-2xl">{service?.name}</h4>
          </div>
          <div className="px-4 py-2">
            {service?.page_link.map((link, index) => (
              <Card2 key={index} title={link?.title} link={link?.link} />))}
          </div>
        </div>
      ))}
    </div>
  );
}
