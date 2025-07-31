import { useEffect, useState } from "react";
import buildingIcon from "../../../assets/icons/building.png";
import Axios from "../../../axios/axios";
import Box from "../sub-component/Box";
import HistoryContent from "./HistoryContent";
import SchoolDetails from "./SchoolDetails";

export default function SchoolHistory() {
  const [data, setData] = useState({heading: "আমাদের প্রতিষ্ঠানের ইতিহাস ও বৃত্তান্ত"});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 console.log("hisory", data)
  useEffect(() => {
    Axios.get('/school-history') 
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
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <Box
        heading={data?.heading}
        icon={buildingIcon}
        component={<HistoryContent data={data} />}
        colSpan="col-span-1 lg:col-span-2"
      />

      <div className="col-span-1 border border-primary rounded-md pb-2">
        <SchoolDetails data={data} />
      </div>
    </div>
  );
}
