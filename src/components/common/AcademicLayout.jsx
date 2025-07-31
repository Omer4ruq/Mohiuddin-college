import PageHeading2 from "./PageHeading2";
import PageInnerHeading from "./PageInnerHeading";

// common layout for syllabus, fees, payslip etc.
const AcademicLayout = ({ session, title, innerHeading, innerRightElement="", pageMainComp, topComponent }) => {
  return (
    <>
      <div className="academicLayout font-liAdorNoirrit">
        <PageHeading2 title={title} session={session} />

        <div className="border my-4 border-primary p-5 rounded-md text-primary">
          {topComponent}
        </div>

        {/* page inner heading  */}
        <PageInnerHeading innerHeading={innerHeading} innerRightElement={innerRightElement}/>


        {/* page main part */}
        {pageMainComp}
      </div>
    </>
  );
};

export default AcademicLayout;
