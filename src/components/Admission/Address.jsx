export default function Address({type, formData, handleForm}) {
   const labelStyle = "text-sm text-black bg-slate-400 pl-1 pr-2";
   const inputStyle = "w-full mt-1 mb-[6px] xl:mb-2 p-1 outline-none border focus:border-slate-400 rounded-md shadow-sm";
   
   return (
   <div>
      <h4 className="text-primary">{type} Address</h4>
      <hr className="border-1 border-primary"></hr>

      <div className="md:flex gap-4 lg:gap-6 my-2">
         <div className="w-full md:w-1/2">
            <label htmlFor="" className={labelStyle} >House No/Name :</label>
            <input type="text" placeholder="Enter House No/Name" className={inputStyle} value={formData.presentHouseNo} onChange={(e) => handleForm(`${type}HouseNo`, e.target.value)} />

            <label htmlFor="" className={labelStyle} >Street/ Village/ Area :</label>
            <input type="text" placeholder="Enter Street/ Village/ Area" className={inputStyle} value={formData.presentStreet} onChange={(e) => handleForm(`${type}Street`, e.target.value)} />

            <label htmlFor="" className={labelStyle} >Thana :</label>
            <input type="text" placeholder="Enter Thana" className={inputStyle} value={formData.presentThana} onChange={(e) => handleForm(`${type}Thana`, e.target.value)} />
         </div>

         <div className="w-full md:w-1/2">
            <label htmlFor="" className={labelStyle} >Post Office :</label>
            <input type="text" placeholder="Enter Post Office" className={inputStyle} value={formData.presentPostOffice} onChange={(e) => handleForm(`${type}PostOffice`, e.target.value)} />

            <label htmlFor="" className={labelStyle} >Post Code :</label>
            <input type="text" placeholder="Enter Post Code" className={inputStyle} value={formData.presentPostCode} onChange={(e) => handleForm(`${type}PostCode`, e.target.value)} />

            <label htmlFor="" className={labelStyle} >District :</label>
            <input type="text" placeholder="Enter District" className={inputStyle} value={formData.presentDistrict} onChange={(e) => handleForm(`${type}District`, e.target.value)} />
         </div>
      </div>
   </div>
  )
}
