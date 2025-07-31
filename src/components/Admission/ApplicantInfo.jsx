import { useEffect, useState } from "react";
import Axios from "../../axios/axios";

export default function ApplicantInfo({ handleForm}) { 
const labelStyle = "text-sm text-black bg-slate-400 pl-1 pr-2";
const inputStyle = "w-full mt-1 mb-[6px] xl:mb-2 p-1 outline-none border focus:border-slate-400 rounded-md shadow-sm";

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
   Axios.get('/class-configs')
     .then(response => {
       setData(response.data);
       setLoading(false);
     })
     .catch(error => {
       setError(error);
       setLoading(false);
     });
 }, []);

  return (
    <div>
      <h4 className="text-primary">Applicant Information</h4>
      <hr className="border-1 border-primary"></hr>

      <div className="md:flex gap-4 lg:gap-6 my-2">
         <div className="w-full md:w-1/2">
            <label htmlFor="" className={labelStyle}>Full Name :</label>
            <input type="text" placeholder="Name of Student" className={inputStyle}  onChange={(e) => handleForm("student_user", "name", e.target.value)} />

            <label htmlFor="" className={labelStyle}>Full Name [বাংলা] :</label>
            <input type="text" placeholder="শিক্ষার্থীর নাম" className={inputStyle} onChange={(e) => handleForm("student_user", "nameBn", e.target.value)} />

            <label htmlFor="" className={labelStyle}>Date of Birth :</label>
            <input type="date" className={inputStyle} onChange={(e) => handleForm("student_user", "dob", e.target.value)} />

            <label htmlFor="" className={labelStyle}>Gender :</label>
            <select className={inputStyle} onChange={(e) => handleForm("student_user","gender", e.target.value)}>
               <option value="male">Male</option>
               <option value="female">Female</option>
               <option value="other">Other</option>
            </select>

            <label htmlFor="" className={labelStyle}>Blood Group :</label>
            <select className={inputStyle} onChange={(e) => handleForm("student_user","bloodGroup", e.target.value)}>
               <option>Select Option</option>
               <option value="a+">A+</option>
               <option value="a-">A-</option>
               <option value="b+">B+</option>
               <option value="b-">B-</option>
               <option value="ab+">AB+</option>
               <option value="ab-">AB-</option>
               <option value="o+">O+</option>
               <option value="o-">O-</option>
            </select>

            <label htmlFor="" className={labelStyle}>Religion :</label>
            <select className={inputStyle} onChange={(e) => handleForm("student_user", "religion", e.target.value)}>
               <option>Select Option</option>
               <option value="islam">Islam</option>
               <option value="hindu">Hindu</option>
               <option value="christian">Christian</option>
               <option value="buddha">Buddha</option>
               <option value="other">Other</option>
            </select>

            <label htmlFor="" className={labelStyle}>Nationality :</label>
            <select className={inputStyle} onChange={(e) => handleForm("student_user", "nationality", e.target.value)}>
               <option value="bangladesh">Bangladesh</option>
               <option>Other</option>
            </select>
         
         </div>


         <div className="w-full md:w-1/2">
            <label htmlFor="" className={labelStyle}>Admission for Class :</label>
            <select className={inputStyle} onChange={(e) => handleForm("student_profile", "class_id", e.target.value)}>
               {
                  data && data.map((item) => (
                     <option key={item.id} value={item.id}>{item.class_name}</option>
                  ))
               }
            </select>

            <label htmlFor="" className={labelStyle}>Group :</label>
            <select className={inputStyle} onChange={(e) => handleForm("student_profile","group", e.target.value)}>
               <option value="general">General</option>
               <option value="science">Science</option>
               <option value="commerce">Commerce</option>
               <option value="arts">Arts</option>
            </select>

            <label htmlFor="" className={labelStyle}>Upload Image :</label>
            <input type="file" placeholder="Upload Image" className={inputStyle} onChange={(e) => handleForm("student_profile", "image", e.target.value)} />

            <label htmlFor="" className={labelStyle}>Mobile Number (Active Number for Notification Messages) :</label>
            <input type="text" placeholder="01XXXXXXXXX" className={inputStyle} onChange={(e) => handleForm("student_user","phone_number", e.target.value)} />

            <label htmlFor="" className={labelStyle}>Email :</label>
            <input type="email" placeholder="student@email.com" className={inputStyle} onChange={(e) => handleForm("student_user","email", e.target.value)} />

            <label htmlFor="" className={labelStyle}>Birth Certificate No (online) :</label>
            <input type="number" placeholder="17 digit Birth Certificate Number" className={inputStyle} onChange={(e) => handleForm("student_user", "nid", e.target.value)} />

            <label htmlFor="" className={labelStyle}>Any Disablity :</label>
            <select className={inputStyle} onChange={(e) => handleForm("student_user","disability", e.target.value)}>
               <option value="no">None</option>
               <option value="yes">Yes</option>
            </select>
         
         </div>
      </div>
    </div>
  )
}
