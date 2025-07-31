import AdmissionForm from "../Admission/AdmissionForm";
import PageHeading from "../common/PageHeading";

export default function AdmissionPage() {
  return (
    <div className="font-poppins">
      <PageHeading heading="Admission Form" />

      {/* <AdmInstructions /> */}

      <AdmissionForm />

    </div>
  )
}
