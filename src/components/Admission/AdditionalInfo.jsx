export default function AdditionalInfo({formData, handleForm}) {
   const labelStyle = "text-sm text-black bg-slate-400 pl-1 pr-2";
   const inputStyle = "w-full mt-1 mb-[6px] xl:mb-2 p-1 outline-none border focus:border-slate-400 rounded-md shadow-sm";
   
   return (
   <div>
      <h4 className="text-primary">Additional Information</h4>
      <hr className="border-1 border-primary"></hr>

      <div className="md:flex gap-4 lg:gap-6 my-2">
         <div className="w-full md:w-1/2">
            <label htmlFor="" className={labelStyle} >Freedom Fighter :</label>
            <select name="" id="" className={inputStyle} value={formData.freedomFighter} onChange={(e) => handleForm("freedomFighter", e.target.value)}>
               <option value="">Select Option</option>
               <option value="Yes">Yes</option>
               <option value="No">No</option>
            </select>
         </div>

         <div className="w-full md:w-1/2">
            <label htmlFor="" className={labelStyle} >Is any brother/sister of applicant studying in our school? :</label>
            <select name="" id="" className={inputStyle} value={formData.brotherSister} onChange={(e) => handleForm("brotherSister", e.target.value)}>
               <option value="">Select Option</option>
               <option value="Yes">Yes</option>
               <option value="No">No</option>
            </select>
         </div>
      </div>

   </div>
  )
}
