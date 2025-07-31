const PageInnerHeading = ({innerRightElement, innerHeading}) => {
  return (
    <>
      <div className="staffList__top bg-primary px-5 py-3 text-textColor rounded-sm">
        <div className="flex justify-between items-center gap-2 flex-wrap sm:flex-nowrap">
          <h2 className="text-lg sm:text-xl">{innerHeading}</h2>
          {innerRightElement}
        </div>
      </div>
    </>
  );
};

export default PageInnerHeading;
