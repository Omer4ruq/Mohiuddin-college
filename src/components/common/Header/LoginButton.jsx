import { useEffect, useState } from "react";
import Axios from "../../../axios/axios";
import Button from "../Button";

export default function LoginButton() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Axios.get("/api/institute")
      .then((response) => {
        setData(response.data[0]);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  // Ensure the URL includes http or https
  const loginUrl = data?.institute_management_web?.startsWith("http")
    ? data.institute_management_web
    : `https://${data.institute_management_web}`;

  return (
    <a
      href={loginUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="my-1 xl:my-3 mr-4 lg:mr-6"
    >
      <Button
        position="self-end"
        text="Login"
        textSize="xl:text-lg"
        isNav={true}
      />
    </a>
  );
}
