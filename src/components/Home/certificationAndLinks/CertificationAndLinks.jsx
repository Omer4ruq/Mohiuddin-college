import { useEffect, useState } from "react";
import buildingIcon from "../../../assets/icons/building.png";
import linkIcon from "../../../assets/icons/link.png";
import Axios from "../../../axios/axios";
import Box from "../sub-component/Box";
import Certificates from "./Certificates";
import ImportantLinks from "./ImportantLinks";

export default function CertificationAndLinks() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log("certification", data)
useEffect(() => {
  Axios.get('/credentials')
    .then(response => {
      setData(response.data[0]); // ✅ fixes your issue
      setLoading(false);
    })
    .catch(error => {
      setError(error);
      setLoading(false);
    });
}, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <Box
        heading={data?.headline}
        icon={buildingIcon}
        component={<Certificates />}
        colSpan="col-span-1 lg:col-span-2"
      />

      <Box
        heading="Important Links"
        icon={linkIcon}
        component={<ImportantLinks />}
      />
    </div>
  );
}
