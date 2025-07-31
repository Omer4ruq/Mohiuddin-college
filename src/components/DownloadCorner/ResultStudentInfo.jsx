import { useState } from "react";
import Axios from "../../axios/axios";

export default function ResultStudentInfo({studentId}) {
   const [data, setData] = useState({});

   Axios.get(`/api/student-profile/${studentId}`)
   .then(response => {
     setData(response.data);
   })
   .catch(error => {})
   

  return (
   <div className="bg-white rounded-lg p-4 md:p-6 my-2 md:my-10 text-primary">
      <h2 className="text-2xl md:text-4xl mb-0 sm:mb-2 md:mb-4">Student's Information</h2>
      <p className="text-lg sm:text-2xl text-gray-700 mb-0 sm:mb-2"><span className="font-semibold text-primary">Name :</span> {data?.name}</p>
      <p className="text-lg sm:text-2xl text-gray-700 mb-0 sm:mb-2"><span className="font-semibold text-primary">Class :</span> {data?.class_id}</p>
      <p className="text-lg sm:text-2xl text-gray-700 mb-0 sm:mb-2"><span className="font-semibold text-primary">Roll No :</span> {data?.roll_no}</p>
      <p className="text-lg sm:text-2xl text-gray-700"><span className="font-semibold text-primary">Session :</span> {data?.admission_year_id
      }</p>
   </div>
  )
}
