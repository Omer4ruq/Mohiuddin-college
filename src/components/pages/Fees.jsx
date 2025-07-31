import Fee from "../Fees/Fee";
import AcademicLayout from "../common/AcademicLayout";
import Classes from "./../common/Classes";

const Fees = () => {
  return (
    <>
      <AcademicLayout
        title="Academic Fees Structure"
        session="Session: 2024-25"
        topComponent={<Classes active={8} />}
        innerHeading="৯ম শ্রেণীর শিক্ষার্থীর একাডেমিক ফিসের বিবরণ - ২০২৪-২৫ সাল"
        pageMainComp={
          <div className="grid mt-3 gap-3 grid-cols-1 sm:grid-cols-2">
            <Fee title="টিউশন ফিস" money="৩০০০" frequncy="প্রতি মাসে" />
            <Fee title="পরীক্ষার ফিস" money="২০০০" frequncy="সর্বমোট পরীক্ষার ফিস" />
          </div>
        }
      />
    </>
  );
};

export default Fees;
