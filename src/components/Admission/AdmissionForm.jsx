import { useState } from "react";
import Swal from "sweetalert2";
import Axios from "../../axios/axios";
import Button from "../common/Button";
import ApplicantInfo from "./ApplicantInfo";
import GurdianInfo from "./GurdianInfo";


export default function AdmissionForm() {
  const [formData, setFormData] = useState({
    "student_user": {
        "email": "student@example.com",  
        "phone_number": "1234567890",   
        "name": "Student Name",
        "nid": "12345"
    },
    "student_profile": {
        "admission_year_id": 1,
        "academic_session_year": 1,
        "class_id": 4,
        "roll_no": 101   
    },
    "parent_user": {
        "email": "parent@example.com",  
        "phone_number": "0987654321",  
        "name": "Parent Name",
        "nid": "54321"
    },
    "parent_profile": {
        "father_name": "Father Name",
        "father_mobile_no": "1111111111", 
        "mother_name": "Mother Name",
        "mother_mobile_no": "2222222222", 
        "relation": "Father",
        "occupation": "Engineer",
        "g_name": "Guardian Name",
        "g_mobile_no": "3333333333"
    }
});


  function handleForm(propertyName, fieldName, value) {    
    setFormData((prevData) => ({
      ...prevData,
      [propertyName]: {
         ...prevData[propertyName], // Preserve existing data
         [fieldName]: value, // Update specific field
      },
   }));
  }

  async function handleSubmit() {
    try {
      const response = await Axios.post("/api/create-student-parent/", formData);
      // console.log("Success:", response.data);
      // Show success pop-up
      Swal.fire({
        title: "Success!",
        text: "You have applied successfully.",
        icon: "success",
        confirmButtonText: "OK",
        timer: 3000, 
      });
   } catch (error) {
      // console.error("Error submitting form:", error);
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
   }
    
  }

  return (
    <div className="mt-4 p-4 lg:px-6 bg-slate-300 rounded-md">
      <form>
         <ApplicantInfo handleForm={handleForm} />

         <GurdianInfo relation="gurdian" formData={formData} handleForm={handleForm} />

         {/* <FamilyInfo relation="father" formData={formData} handleForm={handleForm}  />

         <FamilyInfo relation="mother" formData={formData} handleForm={handleForm}  />

         <FamilyInfo relation="gurdian" formData={formData} handleForm={handleForm}  /> */}

         {/* <Address type="present"  formData={formData} handleForm={handleForm}  />

         <Address type="permanent"  formData={formData} handleForm={handleForm}  />

        <AdditionalInfo  formData={formData} handleForm={handleForm}  /> */}

      </form>

      <div className="button flex flex-col justify-end w-full">
         <Button position="self-end" text="Submit" textSize="text-xl" onClick={handleSubmit}/>
      </div>
    </div>
  )
}
