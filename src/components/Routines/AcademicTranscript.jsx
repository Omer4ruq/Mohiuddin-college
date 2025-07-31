import logo from "../../assets/logo.png";
import Button from "../common/Button";

export default function AcademicTranscript() {

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
        <label className="block text-primary text-2xl mb-2">আইডি নম্বর</label>
        <input type="text" placeholder="আইডি নম্বর" className="input input-bordered w-full text-xl border border-primary focus:border-primary focus:outline-none" />
      </div>

      {/* Section */}
      <div className="w-full md:w-1/2 px-2 mb-4">
        <label className="block text-primary text-2xl mb-2">পরীক্ষার নাম</label>
        <select className="select select-bordered w-full text-xl border border-primary focus:border-primary focus:outline-none">
          <option disabled selected>
            পরীক্ষার নাম
          </option>
          <option>Exam A</option>
          <option>Exam B</option>
          {/* Add more options as needed */}
        </select>
      </div>


      {/* Submit Button */}
      <div className="button flex flex-col justify-end w-full">
         <Button position="self-end" text="জমা দিন" textSize="text-xl"/>
      </div>
    </form>

    <div className="rounded-lg border-2 border-primary">
    <h2 className="text-3xl text-center bg-primary text-textColor rounded-t p-4">একাডেমিক ট্রান্সক্রিপ</h2>

      <div className="relative flex flex-col">

      {/* Header */}
      <div className="text-center pt-10">
        <h1 className="text-2xl lg:text-3xl font-bold">Ratanpur Higher Secondary School</h1>
        <p className="text-xl">Cumilla, BANGLADESH</p>
      </div>

      <h2 className="text-center text-xl font-bold my-2 underline">First Term Examination 2024</h2>

      <div className="px-4">
        {/* Letter Grade Row */}
        <div className="grid grid-cols-3 gap-4 items-center">
          <div className="space-y-2">
            <p>Serial No. CB 6178589</p>
            <p>CBCS08 80864078</p>
          </div>

          <div className="text-center">
            <img src={logo} alt="logo" className="h-[85px] mx-auto" />
            <h3 className="underline text-lg font-semibold mt-2">ACADEMIC TRANSCRIPT</h3>
          </div>

          <div className="ml-12">
            <table className="border border-gray-600 text-sm text-center">
              <thead>
                <tr>
                  <th className="border border-gray-600 p-1">Letter Grade</th>
                  <th className="border border-gray-600 p-1">Class Interval</th>
                  <th className="border border-gray-600 p-1">Grade Point</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["A+", "80-100", "5.0"],
                  ["A", "70-79", "4.0"],
                  ["A-", "60-69", "3.5"],
                  ["B", "50-59", "3.0"],
                  ["C", "40-49", "2.0"],
                  ["D", "33-39", "1.0"],
                  ["F", "0-33", "0.0"],
                ].map(([grade, interval, point], idx) => (
                  <tr key={idx}>
                    <td className="border border-gray-600 px-2">{grade}</td>
                    <td className="border border-gray-600 px-2">{interval}</td>
                    <td className="border border-gray-600 px-2">{point}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Student Details */}
        <div className="my-5 text-xl">
          <table>
            <tbody>
              {[
                ["Student Name", "Md. Rahimul Islam"],
                ["Father's Name", "Mr. Sofikul Islam"],
                ["Mother's Name", "Mrs. Jannatul Ferdous Oishee"],
                ["Name of Institution", "Ratanpur Higher Secondary School"],
              ].map(([label, value], idx) => (
                <tr key={idx}>
                  <th className="pr-4 font-bold text-start">{label}</th>
                  <td className=""> : <span className="italic font-cursive ml-2">{value}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Center Details */}
        <div className="text-sm mb-5">
          <table className="w-3/4 mx-auto">
            <tbody>
              {[
                ["Name of Center", "(428) Brahmanbaria", "Type", "Regular"],
                ["Roll No.", "58", "Registration No.", "648 / 2023-24"],
                ["Group", "Business Studies", "Date of Birth", "24/02/05"],
              ].map(([label1, value1, label2, value2], idx) => (
                <tr key={idx}>
                  <th className="font-bold text-start">{label1}</th>
                  <td className="italic font-cursive text-lg"> : {value1}</td>
                  <th className="font-bold text-start">{label2}</th>
                  <td className="italic font-cursive text-lg"> : {value2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Subject Wise Results */}
        <div className="subject_wise_result">
          <table className="w-full border-collapse border border-black text-center text-sm">
            <thead>
              <tr>
                {["Sl. No.", "Name of Subjects", "Letter Grade", "Grade Point", "GPA (Without additional subject)", "GPA"].map((header, idx) => (
                  <th key={idx} className="border border-black p-2">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                [1, "Bengali", "A-", "3.5", "3.81", "4.19"],
                [2, "English", "C", "2.0"],
                [3, "Mathematics", "A+", "5.0"],
                [4, "Religious (Islam)", "A", "4.0"],
                [5, "General Science", "A-", "3.5"],
                [6, "Introduction To Business", "A", "4.0"],
                [7, "Accounting", "A+", "5.0"],
                [8, "Business Entrepreneurship", "A-", "3.5"],
              ].map(([sl, subject, grade, point, gpa1, gpa2], idx) => (
                <tr key={idx} className="even:bg-gray-200">
                  <td className="border border-black p-1">{sl}</td>
                  <td className="border border-black p-1">{subject}</td>
                  <td className="border border-black p-1">{grade}</td>
                  <td className="border border-black p-1">{point}</td>
                  {gpa1 && <td className="border border-black p-1" rowSpan="8">{gpa1}</td>}
                  {gpa2 && <td className="border border-black p-1" rowSpan="11">{gpa2}</td>}
                </tr>
              ))}
              {/* Additional Subject */}
              <tr>
                <td className="border border-black p-1 text-left pl-4" colSpan="5">
                  Additional Subject
                </td>
              </tr>
              <tr>
                <td className="border border-black p-1" rowSpan="2">
                  9
                </td>
                <td className="border border-black p-1" rowSpan="2">
                  Agriculture Studies
                </td>
                <td className="border border-black p-1" rowSpan="2">
                  A+
                </td>
                <td className="border border-black p-1" rowSpan="2">
                  5.0
                </td>
                <td className="border border-black p-1">GP above 2</td>
              </tr>
              <tr>
                <td className="border border-black p-1">3.00</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="controller_sign flex justify-between items-end mt-10 mb-14">
          <div className="result_date">
            <p>Date of Publication of Result: June 26, 2024</p>
          </div>
          <div className="sign text-center">
            <p>----------------------------</p>
            <p>Controller</p>
          </div>
        </div>
      </div>
    </div>
    </div>


</div>
    );
}