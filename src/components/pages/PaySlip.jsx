import { images } from "../../assets";
import PaySlipDetails from "../PaySlip/PaySlipDetails";
import PaySlipForm from "../PaySlip/PaySlipForm";
import StudentDetails from "../PaySlip/StudentDetails";
import AcademicLayout from "../common/AcademicLayout";

export default function PaySlip() {
  return (
    <>
      <AcademicLayout
        title="Academic Fees Structure"
        session="Session: 2024-25"
        topComponent={
        // payslip form component
        <PaySlipForm />
      
      }
        innerHeading="পে স্লিপের তথ্য"
        innerRightElement={
          <div className="download_pdf cursor-pointer flex gap-1 items-center text-textColor">
            <span className="text-lg">Download PDF</span>
            <img className="w-6" src={images.pdfIcon} alt="pdf" />
          </div>
        }
        pageMainComp={
          <div className="mt-3 p-5 border-primary border rounded-md font-poppins overflow-auto">
            {/* student Details */}
            <StudentDetails/>

            {/* payslip details */}
            <PaySlipDetails/>
          </div>
        }
      />
    </>
  );
}


