import { useEffect, useState } from "react";
import Axios from "../../axios/axios";
import Button from "../common/Button";

export default function ResultForm({setResults, setLoading, setError}) {
   const [admissionYears, setAdmissionYears] = useState([]);
   const [academicSessions, setAcademicSessions] = useState([]);
   const [allExams, setAllExams] = useState([]);
 
   //fetch data
   useEffect(() => {
     const fetchData = async () => {
       try {
         const admissionYearsResponse = await Axios.get('/admission-years/');
         const academicSessionsResponse = await Axios.get('/academic-sessions/');
         const allExamsResponse = await Axios.get('/api/exams');
         setAdmissionYears(admissionYearsResponse.data);
         setAcademicSessions(academicSessionsResponse.data);
         setAllExams(allExamsResponse.data);
       } catch (error) {
         setError(error);
       } finally {
         setLoading(false);
       }
     };
 
     fetchData();
   }, [setError, setLoading]);
 
 
   const [slectedTimeLine, setSelectedTimeLine] = useState({});
   const [studentId, setStudentId] = useState('');
   const [examId, setExamId] = useState('');
 
   function handleSubmit(e){
     e.preventDefault();
     setLoading(true);
     Axios.get(`/results/${studentId}/${slectedTimeLine}/${examId}`)
     .then(response => {
       setResults(response.data[0]);
       setLoading(false);
       setError(false);
     })
     .catch(error => {
       setError(error);
       setLoading(false);
     });
   }

  return (
    <>
      <h1 className="text-3xl font-medium text-textColor bg-primary px-4 py-3 mb-6">
      Check Result
      </h1>
      <form className="flex flex-wrap justify-center items-center mb-8 text-primary">

         {/* Roll No */}
         <div className="w-full md:w-1/3 px-2 mb-4">
         <label className="block text-primary text-2xl mb-2">Roll No.</label>
         <input
            type="number"
            className="w-full p-2 text-xl border border-primary rounded-md focus:border-primary focus:outline-none"
            placeholder="Roll No."
            onChange={(e) => setStudentId(e.target.value)}
         />
         </div>

         
         {/* Section */}
         <div className="w-full md:w-1/3 px-2 mb-4">
         <label className="block text-primary text-2xl mb-2">Academic Year</label>
         <select className="select select-bordered w-full text-xl border border-primary focus:border-primary focus:outline-none" onChange={(e) => setSelectedTimeLine(e.target.value)}>
            <option disabled selected>
            Academic Year
            </option>
            {
               admissionYears.map((year) => (
               <option key={year.id} value={year.id}>{year.name}</option>
               ))
            }
            {/* Add more options as needed */}
         </select>
         </div>

         {/* Exam Name */}
         <div className="w-full md:w-1/3 px-2 mb-4">
         <label className="block text-primary text-2xl mb-2">Exam Name</label>
         <select className="select select-bordered w-full text-xl border border-primary focus:border-primary focus:outline-none" onChange={(e) => setExamId(e.target.value)}>
            <option disabled selected>
               Exam Name
            </option>
            {
               allExams.map((exam) => (
               <option key={exam.id} value={exam.id}>{exam.name}</option>
               ))
            }
            {/* Add more options as needed */}
         </select>
         </div>

         {/* Submit Button */}
         <div className="button flex flex-col justify-end w-full">
            <Button position="self-end" text="Submit" textSize="text-xl" onClick={(e)=>handleSubmit(e)}/>
         </div>
      </form>
    </>
  )
}
