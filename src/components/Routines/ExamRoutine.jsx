import Button from "../common/Button";

export default function ClassRoutine() {

// Dummy data for the exam routine
const examData = [
   { date: "01-09-2024 (রবিবার)", subject: "বাংলা", marks: "১০০" },
   { date: "02-09-2024 (সোমবার)", subject: "গণিত", marks: "১০০" },
   { date: "03-09-2024 (মঙ্গলবার)", subject: "ইংরেজি", marks: "১০০" },
   { date: "04-09-2024 (বুধবার)", subject: "বিজ্ঞান", marks: "১০০" },
   { date: "05-09-2024 (বৃহস্পতিবার)", subject: "ইতিহাস", marks: "১০০" },
   { date: "06-09-2024 (শুক্রবার)", subject: "ভূগোল", marks: "১০০" },
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


      {/* Submit Button */}
      <div className="button flex flex-col justify-end w-full">
         <Button position="self-end" text="জমা দিন" textSize="text-xl"/>
      </div>
    </form>

    <div className="rounded-lg border-2 border-primary">
    <h2 className="text-3xl text-center bg-primary text-textColor rounded-t p-4">পরীক্ষার রুটিন</h2>
      <div className="overflow-x-auto rounded-lg">
         <table className="min-w-full bg-white border border-gray-200 ">
            <thead>
               <tr className="text-2xl bg-gray-200 divide-x-2 divide-gray-300 divide-y-0">
                  <th className="px-2 md:px-4 py-3 border-b">তারিখ (দিন)</th>
                  <th className="px-2 md:px-4 py-3 border-b">বিষয়</th>
                  <th className="px-2 md:px-4 py-3 border-b">মোট নম্বর</th>
               </tr>
            </thead>
            <tbody>
               {examData.map((exam, index) => (
                  <tr key={index} className="text-center text-xl even:bg-gray-200 divide-x-2 divide-gray-300 divide-y-0">
                     <td className="px-2 md:px-4 py-2 border-b">{exam.date}</td>
                     <td className="px-2 md:px-4 py-2 border-b">{exam.subject}</td>
                     <td className="px-2 md:px-4 py-2 border-b">{exam.marks}</td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
    </div>

        </div>
    );
}