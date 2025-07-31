
const PageHeading = ({heading}) => {
    return (
        <>
            <div className="staffList__top">
            <h2 className="bg-primary font-medium text-xl px-5 py-3 text-textColor rounded-sm">
              {heading}
            </h2>
          </div>
        </>
    );
};

export default PageHeading;