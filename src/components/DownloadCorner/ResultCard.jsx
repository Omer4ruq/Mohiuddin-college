import downloadReportCard from "../../utils/DownloadReportCard";
import Button from "../common/Button";
import ResultStudentInfo from "./ResultStudentInfo";
import ResultTable from "./ResultTable";

export default function ResultCard({results}) {

  return (
   <div className="rounded border border-primary p-2 sm:p-4 md:p-6 mt-16 mb-4">
      <h3 className="text-primary text-3xl md:text-5xl p-4 text-center">Exam Result</h3>
      {/* Student Information */}
      <ResultStudentInfo studentId={results?.id}/>

      {/* Exam Results Table */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden border border-primary">

      <table className="min-w-full bg-white">
         <thead className="bg-primary text-textColor text-xl md:text-2xl">
            <tr>
            <th className="py-2 px-4">Subject</th>
            <th className="py-2 px-4">Obtained marks</th>
            <th className="py-2 px-4">Total</th>
            <th className="py-2 px-4">Percentage</th>
            <th className="py-2 px-4">Grade</th>
            </tr>
         </thead>
         <ResultTable results={results?.subjects_details} passed={results?.is_pass} gpa={results?.gpa} />
      </table>
      </div>

      {/* Download Button */}
      <Button
         onClick={() => downloadReportCard(results?.id, results?.subjects_details, results?.is_pass, results?.gpa)}
         text="Download Report Card"
      />
   </div>
  )
}
