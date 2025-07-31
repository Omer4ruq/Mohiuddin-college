import Button from "../common/Button";


const StudentAttendance = () => {
   const studentAttendanceData = [
      {
        name: "মোঃ হাফিজুর রহমান",
        roll: "001",
        classDays: 30,
        presentCount: 28,
        absentCount: 2,
      },
      {
        name: "মোঃ সাইফুল ইসলাম",
        roll: "002",
        classDays: 30,
        presentCount: 25,
        absentCount: 5,
      },
      {
        name: "নূর আহমেদ",
        roll: "003",
        classDays: 30,
        presentCount: 20,
        absentCount: 10,
      },
      {
        name: "ফারহানা আক্তার",
        roll: "004",
        classDays: 30,
        presentCount: 29,
        absentCount: 1,
      },
      {
        name: "মোঃ রাজিব হাসান",
        roll: "005",
        classDays: 30,
        presentCount: 27,
        absentCount: 3,
      },
    ];
  return (
  <div>
   <h1 className="text-3xl font-medium text-textColor bg-primary px-4 py-3 mb-6">
   উপস্থিতি দেখুন
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

          {/* Exam Results Table */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden border border-primary">

        <table className="min-w-full bg-white">
          <thead className="bg-primary text-textColor text-xl md:text-2xl">
            <tr>
              <th className="py-2 px-4">নাম
              </th>
              <th className="py-2 px-4">রোল</th>
              <th className="py-2 px-4">ক্লাসের সংখ্যা</th>
              <th className="py-2 px-4">
              উপস্থিতি</th>
              <th className="py-2 px-4">অনুপস্থিত</th>
            </tr>
          </thead>
          <tbody className="text-center text-gray-700 text-lg md:text-xl">
            {studentAttendanceData.map((result, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-t">{result.name}</td>
                <td className="py-2 px-4 border-t">{result.roll}</td>
                <td className="py-2 px-4 border-t">{result.classDays}</td>
                <td className="py-2 px-4 border-t">{result.presentCount}</td>
                <td className="py-2 px-4 border-t">{result.absentCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default StudentAttendance;
