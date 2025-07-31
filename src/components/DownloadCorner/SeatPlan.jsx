import Button from "../common/Button";

const SeatPlan = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Title */}
      <h1 className="text-3xl font-medium text-textColor bg-primary px-4 py-3 mb-6">
        সিট প্ল্যান
      </h1>

      {/* Form Section */}
      <form className="flex flex-wrap justify-center items-center mb-8 text-primary">
        {/* Class Name */}
        <div className="w-full md:w-1/3 px-2 mb-4">
          <label className="block text-primary text-2xl mb-2">শ্রেণির নাম</label>
          <select className="select select-bordered w-full text-xl border border-primary focus:border-primary focus:outline-none">
            <option disabled selected>
            শ্রেণির নাম
            </option>
            <option>Class 1</option>
            <option>Class 2</option>
          </select>
        </div>

        {/* Exam Name */}
        <div className="w-full md:w-1/3 px-2 mb-4">
          <label className="block text-primary text-2xl mb-2">পরীক্ষার নাম</label>
          <select className="select select-bordered w-full text-xl border border-primary focus:border-primary focus:outline-none">
            <option disabled selected>
            পরীক্ষার নাম
            </option>
            <option>Half Yearly</option>
            <option>Final Exam</option>
          </select>
        </div>
        

        {/* Session */}
        <div className="w-full md:w-1/3 px-2 mb-4">
          <label className="block text-primary text-xl mb-2">সেশন</label>
          <select className="select select-bordered w-full text-xl border border-primary focus:border-primary focus:outline-none">
            <option disabled selected>
            সেশন লিখুন
            </option>
            <option>2023-2024</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="button flex flex-col justify-end w-full">
            <Button position="self-end" text="জমা দিন" textSize="text-xl"/>
          </div>
      </form>

      {/* Dummy Seat Plan Table */}
      <div className="overflow-x-auto border border-primary rounded-lg shadow-md ">
        <table className="w-full bg-white overflow-hidden">
          <thead className="bg-primary text-textColor text-xl md:text-2xl">
            <tr>
              <th className="py-2 px-4">রোল রেঞ্জ</th>
              <th className="py-2 px-4">শ্রেণি</th>
              <th className="py-2 px-4">শাখা</th>
              <th className="py-2 px-4">কক্ষ নং</th>
            </tr>
          </thead>
          <tbody className="text-center text-xl text-gray-700">
            <tr>
              <td className="py-2 px-4 border-t">১ - ৩০</td>
              <td className="py-2 px-4 border-t">১০ম</td>
              <td className="py-2 px-4 border-t">ক</td>
              <td className="py-2 px-4 border-t">১০১</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-t">৩১ - ৬০</td>
              <td className="py-2 px-4 border-t">১০ম</td>
              <td className="py-2 px-4 border-t">খ</td>
              <td className="py-2 px-4 border-t">১০২</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-t">৬১ - ৯০</td>
              <td className="py-2 px-4 border-t">১০ম</td>
              <td className="py-2 px-4 border-t">গ</td>
              <td className="py-2 px-4 border-t">১০৩</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SeatPlan;
