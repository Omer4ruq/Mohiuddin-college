import Button from "../common/Button";

export default function ClassRoutine() {

   const days = ["রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার"];
const classes = [
    ["বাংলা", "গণিত", "ইংরেজি", "বিজ্ঞান", "ইতিহাস", "ভূগোল"],
    ["ইংরেজি", "ভূগোল", "বাংলা", "বিজ্ঞান", "গণিত", "ইতিহাস"],
    ["বিজ্ঞান", "বাংলা", "ইতিহাস", "গণিত", "ইংরেজি", "ভূগোল"],
    ["ইতিহাস", "বিজ্ঞান", "ভূগোল", "বাংলা", "গণিত", "ইংরেজি"],
    ["গণিত", "ইতিহাস", "বিজ্ঞান", "ভূগোল", "বাংলা", "ইংরেজি"],
    ["ভূগোল", "ইংরেজি", "গণিত", "ইতিহাস", "বিজ্ঞান", "বাংলা"]
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
            <h2 className="text-3xl text-center bg-primary text-textColor rounded-t p-4">ক্লাস রুটিন</h2>
            <div className="overflow-x-auto rounded-lg">
                <table className="w-full bg-white">
                    <thead>
                        <tr className="text-2xl bg-gray-200 divide-x-2 divide-gray-300 divide-y-0">
                            <th className="px-2 md:px-4 py-3">দিন</th>
                            {Array.from({ length: 6 }, (_, i) => (
                                <th key={i} className="px-2 md:px-4 py-3 border-b">ক্লাস {i + 1}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="text-xl">
                        {days.map((day, dayIndex) => (
                            <tr key={dayIndex} className="text-center even:bg-gray-200 divide-x-2 divide-gray-300 divide-y-0">
                                <td className="px-2 md:px-4 py-2">{day}</td>
                                {classes[dayIndex].map((classItem, classIndex) => (
                                    <td key={classIndex} className="px-4 py-2 border-b">{classItem}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

        </div>
    );
}