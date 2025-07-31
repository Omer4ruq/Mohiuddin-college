import Button from "../common/Button";


const FeeInfo = () => {
  // Dummy data for student information
  const studentInfo = {
    name: "মোঃ কামরুল হাসান",
    class: "১০ম",
    rollNo: "০৫",
    session: "২০২৩-২০২৪",
  };

// Dummy data for fee information
const feeInfo = [
   { type: "শিক্ষা ফি", amount: 5000, deadline: "2023-12-31", penalty: 1000, total: 6000 },
   { type: "খাতা-কলম ফি", amount: 1500, deadline: "2023-12-31", penalty: 500, total: 2000 },
   { type: "পরীক্ষা ফি", amount: 2000, deadline: "2024-01-15", penalty: 1000, total: 3000 },
   // Add more fee types as needed
 ];

  return (
    <div>
   <h1 className="text-3xl font-medium text-textColor bg-primary px-4 py-3 mb-6">
    ফলাফল দেখুন
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
        <label className="block text-primary text-2xl mb-2">মাস</label>
        <select className="select select-bordered w-full text-xl border border-primary focus:border-primary focus:outline-none">
          <option disabled selected>
            মাস
          </option>
          <option>মার্চ</option>
          <option>এপ্রিল</option>
          {/* Add more options as needed */}
        </select>
      </div>

      {/* Submit Button */}
      <div className="button flex flex-col justify-end w-full">
         <Button position="self-end" text="জমা দিন" textSize="text-xl"/>
      </div>
    </form>

<div className="rounded border border-primary p-2 sm:p-4 md:p-6 mt-16 mb-4">
      <h3 className="text-primary text-3xl md:text-5xl p-4 text-center">হাফ-ইয়ারলি পরীক্ষা ফলাফল</h3>
      {/* Student Information */}
      <div className="bg-white rounded-lg p-4 md:p-6 my-2 md:my-10 text-primary">
        <h2 className="text-2xl md:text-4xl mb-0 sm:mb-2 md:mb-4">শিক্ষার্থীর তথ্য</h2>
        <p className="text-lg sm:text-2xl text-gray-700 mb-0 sm:mb-2"><span className="font-semibold text-primary">নাম:</span> {studentInfo.name}</p>
        <p className="text-lg sm:text-2xl text-gray-700 mb-0 sm:mb-2"><span className="font-semibold text-primary">শ্রেণি:</span> {studentInfo.class}</p>
        <p className="text-lg sm:text-2xl text-gray-700 mb-0 sm:mb-2"><span className="font-semibold text-primary">রোল নং:</span> {studentInfo.rollNo}</p>
        <p className="text-lg sm:text-2xl text-gray-700"><span className="font-semibold text-primary">সেশন:</span> {studentInfo.session}</p>
      </div>

      {/* Exam Results Table */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden border border-primary">

        <table className="min-w-full bg-white">
          <thead className="bg-primary text-textColor text-xl md:text-2xl">
            <tr>
              <th className="py-2 px-4">ফি টাইপ
              </th>
              <th className="py-2 px-4">পরিমাণ</th>
              <th className="py-2 px-4">সময়সীমা</th>
              <th className="py-2 px-4">জরিমানা</th>
              <th className="py-2 px-4">মোট</th>
            </tr>
          </thead>
          <tbody className="text-center text-gray-700 text-lg md:text-xl">
            {feeInfo.map((result, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-t">{result.type}</td>
                <td className="py-2 px-4 border-t">{result.amount}</td>
                <td className="py-2 px-4 border-t">{result.deadline}</td>
                <td className="py-2 px-4 border-t">{result.penalty}</td>
                <td className="py-2 px-4 border-t">{result.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="text-end text-primary text-2xl p-4">মোট ফি: <span className="text-gray-700 px-2 md:px-4 xl:px-10">৳ 5000</span></h3>

      </div>
    </div>
  );
};

export default FeeInfo;
