export default function FamilyInfo({relation, formData, handleForm}) {
   const labelStyle = "text-sm text-black bg-slate-400 pl-1 pr-2";
   const inputStyle = "w-full mt-1 mb-[6px] xl:mb-2 p-1 outline-none border focus:border-slate-400 rounded-md shadow-sm";

  return (
   <div>
   <h4 className="text-primary capitalize">{relation} Information {relation === "gurdian" && "(If Applicable)"}</h4>
   <hr className="border-1 border-primary"></hr>

   <div className="md:flex gap-4 lg:gap-6 my-2">
      <div className="w-full md:w-1/2">
         <label htmlFor="" className={labelStyle}>{relation}'s Name :</label>
         <input type="text" placeholder={`${relation}'s Name`} className={inputStyle} value={formData[`${relation}Name`]} onChange={(e) => handleForm(`${relation}Name`, e.target.value)} />

         <label htmlFor="" className={labelStyle}>{relation}'s Name [বাংলা]:</label>
         <input type="text" placeholder="বাংলা নাম" className={inputStyle} value={formData[`${relation}NameBn`]} onChange={(e) => handleForm(`${relation}NameBn`, e.target.value)} />

         <label htmlFor="" className={labelStyle}>{relation}'s NID Number:</label>
         <input type="text" placeholder={`${relation}'s National ID Number`} className={inputStyle} value={formData[`${relation}NID`]} onChange={(e) => handleForm(`${relation}NID`, e.target.value)} />

         <label htmlFor="" className={labelStyle}>{relation}'s Birth Certificate Number :</label>
         <input type="text" placeholder={`${relation}'s Birth Certificate Number`} className={inputStyle} value={formData[`${relation}BirthCertificate`]} onChange={(e) => handleForm(`${relation}BirthCertificate`, e.target.value)} />

      </div>
      <div className="w-full md:w-1/2">
         <label htmlFor="" className={labelStyle}>{relation}'s Date of Birth :</label>
         <input type="date" className={inputStyle} value={formData[`${relation}Dob`]} onChange={(e) => handleForm(`${relation}Dob`, e.target.value)} />
      
         <label htmlFor="" className={labelStyle}>{relation}'s Mobile Number :</label>
         <input type="text" placeholder={`${relation}'s Mobile Number`} className={inputStyle} value={formData[`${relation}Mobile`]} onChange={(e) => handleForm(`${relation}Mobile`, e.target.value)} />

         <label htmlFor="" className={labelStyle}>{relation}'s Occupation :</label>
         <input type="text" placeholder={`${relation}'s Occupation`} className={inputStyle} value={formData[`${relation}Occupation`]} onChange={(e) => handleForm(`${relation}Occupation`, e.target.value)} />

         <label htmlFor="" className={labelStyle}>{relation}'s Designation :</label>
         <input type="text" placeholder={`${relation}'s Designation`} className={inputStyle} value={formData[`${relation}Designation`]} onChange={(e) => handleForm(`${relation}Designation`, e.target.value)} />

      </div>
   </div>
   </div>
  )
}
