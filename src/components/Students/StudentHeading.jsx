const StudentHeading = ({students}) => {
  return (
    <>
      <div className="staffList__top bg-primary px-5 py-3 text-textColor rounded-sm">
        <div className="text-xl lg:text-2xl flex justify-between gap-2 flex-wrap sm:flex-nowrap">
          <h2 className="">Student List</h2>
          <p className="">Total {students?.count} students found</p>
        </div>
      </div>
    </>
  );
};

export default StudentHeading;
