import { useEffect, useState } from "react";
import Axios from "../../axios/axios";
import Button from "../common/Button";

const StudentSearch = ({setStudents, setLink}) => {

  // states to fill-up by fetching data
    const [classes, setClasses] = useState([]);
    const [admissionYears, setAdmissionYears] = useState([]);
    const [academicSessions, setAcademicSessions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    //fetch data
    useEffect(() => {
      const fetchData = async () => {
        try {
          const classResponse = await Axios.get('/class-configs');
          const admissionYearsResponse = await Axios.get('/admission-years');
          const academicSessionsResponse = await Axios.get('/academic-sessions');
  
          setClasses(classResponse.data);
          setAdmissionYears(admissionYearsResponse.data);
          setAcademicSessions(academicSessionsResponse.data);
          
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, [])

    // maintain the selected values
   const [selectedClass, setSelectedClass] = useState(null);
   const [selectedYearType, setSelectedYearType] = useState(null);
   const [selectedTimeline, setSelectedTimeline] = useState(null);

   // select session or year for class 9-12. dependin on either group (science, commerce, arts) is present.
   useEffect(() => {
    const selected = classes.find((item) => item.id == selectedClass);
    if(selected?.group_name){
      setSelectedYearType("session");
    } else {
      setSelectedYearType("year");
    }
   }, [classes, selectedClass])

   // get data on submit
   function handleClick(){
    let link;    
    if (!(selectedClass && selectedYearType)){
      alert("Please select all form fields");
      return;
    }
    
    if(selectedYearType == "session"){
    link = `/api/student-profiles/?class_id=${selectedClass}&academic_session_year__start_year=${selectedTimeline}&page=1`;
    } else {
      link = `/api/student-profiles/?class_id=${selectedClass}&academic_year__name=${selectedTimeline}&page=1`;
    }

    Axios.get(link)
    .then(response => {
      setStudents(response.data);
      setLoading(false);
      setLink(link);
    })
    .catch(error => {
      setError(error);
      setLoading(false);
    });
   }

   // loading and error handling
   if (loading) return <p>Loading...</p>;
   if (error) return <p>Error: {error.message}</p>
  return (
    <>
    <div>
      <h1 className="text-3xl font-medium text-textColor bg-primary px-4 py-3 mb-6">
      Student List
      </h1>
    <form className="flex flex-wrap justify-center items-center text-primary">

      {/* Class Name */}
      <div className="w-full md:w-1/2 px-2 mb-4">
        <label className="block text-primary text-2xl mb-2">Class</label>
        <select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)} className="select select-bordered w-full text-xl border border-primary focus:border-primary focus:outline-none">
          <option disabled selected>
            Class
          </option>
          {
            classes.map((item) => (
              <option key={item.id} value={item.id}>{item.class_name} {item?.section_name && "-"} {item?.section_name} {item?.shift_name && "-"} {item?.shift_name}</option>
            ))
          }
          {/* Add more options as needed */}
        </select>
      </div>

      {/* Session */}
      <div className="w-full md:w-1/2 px-2 mb-4">
        <label className="block text-primary text-2xl mb-2">
          {
            selectedYearType === "session" ? "Session" : "Academic Year"
          }
        </label>
        <select value={selectedTimeline} onChange={(e) => setSelectedTimeline(e.target.value)} className="select select-bordered w-full text-xl border border-primary focus:border-primary focus:outline-none">
          <option disabled selected>
          {
            selectedYearType === "session" ? "Session" : "Academic Year"
          }
          </option>
          {
            selectedYearType === "session" ? 
            academicSessions.map((item) => (
              <option key={item.id} value={item.start_year}>{item.start_year} - {item.end_year}</option>
            ))
            :
            admissionYears.map((item) => (
              <option key={item.id} value={item.name}>{item.name}</option>
            ))
          }

        </select>
      </div>
    </form>

    {/* Submit Button */}
    <div className="button flex flex-col justify-end w-full mb-8">
        <Button onClick={handleClick} position="self-end" text="Submit" textSize="text-xl"/>
    </div>
    </div>
    </>
  );
};

export default StudentSearch;
