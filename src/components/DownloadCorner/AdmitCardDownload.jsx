import Button from "../common/Button";

const AdmitCardDownload = () => {
  return (
<>
   <h1 className="text-3xl font-medium text-textColor bg-primary px-4 py-3 mb-6">
   এডমিট কার্ড
   </h1>
    <form className="flex flex-wrap justify-center items-center mb-8 text-primary">

      {/* Class Name */}
      <div className="w-full md:w-1/2 px-2 mb-4">
        <label className="block text-primary text-2xl mb-2">শ্রেণির নাম</label>
        <select className="select select-bordered w-full text-xl border border-primary focus:border-primary focus:outline-none">
          <option disabled selected>
            শ্রেণির নাম
          </option>
          <option>Class 1</option>
          <option>Class 2</option>
          {/* Add more options as needed */}
        </select>
      </div>

      {/* Section */}
      <div className="w-full md:w-1/2 px-2 mb-4">
        <label className="block text-primary text-2xl mb-2">শাখা</label>
        <select className="select select-bordered w-full text-xl border border-primary focus:border-primary focus:outline-none">
          <option disabled selected>
            শাখা
          </option>
          <option>Section A</option>
          <option>Section B</option>
          {/* Add more options as needed */}
        </select>
      </div>

      {/* Roll No */}
      <div className="w-full md:w-1/2 px-2 mb-4">
        <label className="block text-primary text-2xl mb-2">রোল নম্বর</label>
        <input
          type="text"
          className="w-full p-2 text-xl border border-primary rounded-md focus:border-primary focus:outline-none"
          placeholder="রোল নম্বর লিখুন"
        />
      </div>

      {/* Exam Name */}
      <div className="w-full md:w-1/2 px-2 mb-4">
        <label className="block text-primary text-2xl mb-2">পরীক্ষার নাম</label>
        <select className="select select-bordered w-full text-xl border border-primary focus:border-primary focus:outline-none">
          <option disabled selected>
            পরীক্ষার নাম
          </option>
          <option>Half Yearly</option>
          <option>Final Exam</option>
          {/* Add more options as needed */}
        </select>
      </div>

      {/* Submit Button */}
      <div className="button flex flex-col justify-end w-full">
         <Button position="self-end" text="ডাউনলোড এডমিট কার্ড" textSize="text-xl"/>
      </div>
    </form>

    </>
  );
};

export default AdmitCardDownload;
