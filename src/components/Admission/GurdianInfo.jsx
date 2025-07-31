export default function GurdianInfo({ relation, formData, handleForm}) {
   const labelStyle = "text-sm text-black bg-slate-400 pl-1 pr-2";
   const inputStyle = "w-full mt-1 mb-[6px] xl:mb-2 p-1 outline-none border focus:border-slate-400 rounded-md shadow-sm";

  return (
   <div>
   <h4 className="text-primary capitalize">Gurdian Information</h4>
   <hr className="border-1 border-primary"></hr>

   <div className="md:flex gap-4 lg:gap-6 my-2">
      <div className="w-full md:w-1/2">
         
         <label htmlFor="" className={labelStyle}>Parent :</label>
            <select className={inputStyle} onChange={(e) => handleForm("parent_profile","parent", e.target.value)}>
               <option value="Father">Father</option>
               <option value="Mother">Mother</option>
               <option value="other">Other</option>
         </select>

         <label htmlFor="" className={labelStyle}>Relation :</label>
         <input type="text" placeholder={`Relation`} className={inputStyle}  onChange={(e) => handleForm("parent_profile", "relation", e.target.value)} />

         <label htmlFor="" className={labelStyle}>Gurdian Occupation :</label>
         <input type="text" placeholder={`Gurdian Occupation`} className={inputStyle} onChange={(e) => handleForm("parent_profile", `occupation`, e.target.value)} />

         <label htmlFor="" className={labelStyle}>Father Name :</label>
         <input type="text" placeholder={`Father Name`} className={inputStyle} onChange={(e) => handleForm("parent_profile", `father_name`, e.target.value)} />

         <label htmlFor="" className={labelStyle}>Mother Name :</label>
         <input type="text" placeholder={`Mother Name`} className={inputStyle} onChange={(e) => handleForm("parent_profile", `mother_name`, e.target.value)} />

      </div>
      <div className="w-full md:w-1/2">
      
         <label htmlFor="" className={labelStyle}>Gurdian's Name :</label>
         <input type="text" placeholder={`${relation}'s Name`} className={inputStyle} onChange={(e) => handleForm("parent_profile", `g_name`, e.target.value)} />
      
         <label htmlFor="" className={labelStyle}>Gurdian's Mobile Number :</label>
         <input type="text" placeholder={`${relation}'s Mobile Number`} className={inputStyle} onChange={(e) => handleForm("parent_user",`phone_number`, e.target.value)} />
      
         <label htmlFor="" className={labelStyle}>Gurdian's NID :</label>
         <input type="text" placeholder={`${relation}'s NID`} className={inputStyle} value={formData[`fatherNID`]} onChange={(e) => handleForm("parent_user", `nid`, e.target.value)} />
      
         <label htmlFor="" className={labelStyle}>Father's Mobile Number :</label>
         <input type="text" placeholder={`fathers's Mobile Number`} className={inputStyle} onChange={(e) => handleForm("parent_profile",`father_mobile_no`, e.target.value)} />
      
         <label htmlFor="" className={labelStyle}>Mother's Mobile Number :</label>
         <input type="text" placeholder={`${relation}'s Mobile Number`} className={inputStyle} onChange={(e) => handleForm("parent_profile", `mother_mobile_no`, e.target.value)} />

      </div>
   </div>
   </div>
  )
}
