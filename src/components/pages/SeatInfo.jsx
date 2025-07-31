import { useEffect, useState } from "react";
import Axios from "../../axios/axios";

export default function SeatInfo() {

  const [data, setData] = useState(null);
  const [classes, setClasses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    Axios.get('/seat-info/')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);
  
  useEffect(() => {
    Axios.get('/class-configs/')
      .then(response => {
        setClasses(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  function getClassName(id) {
    if (classes) {
      const classInfo = classes.find((item) => item.id == id);
      return classInfo?.class_name;
    }
    return null;
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>

  return (
    <>
      <h2 className="text-2xl font-poppins font-medium text-textColor bg-primary px-4 py-3">
        Total Seat Information
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 xl:gap-6">
        {data.map((classes, index) => (
          <div key={index} className="w-full rounded-sm border border-primary">
            <h4 className="text-textColor text-center text-2xl p-2 bg-gradient-to-r from-primary to-secondary">
              {getClassName(classes.class_id)} Class
            </h4>
            <div className="text-center m-3 mx-4 xl:my-6 xl:mx-8">
              <div className="p-1 w-full  bg-primary text-textColor text-2xl my-2">
                {classes.no_of_seat} seats
              </div>
              {/* <h6 className="text-primary text-xl">
                মোট সেকশনঃ {classes.sections} টি
              </h6> */}
            </div>
          </div>
        ))}
      </div>

    </>
  );
}
