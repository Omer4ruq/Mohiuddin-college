
const PageHeading2 = ({title, session}) => {
    return (
        <>
            <div className="staffList__top bg-primary font-medium text-xl px-5 py-3 text-textColor rounded-sm flex justify-between gap-2 flex-wrap sm:flex-nowrap">
            <h2 className="font-medium text-2xl">
              {title}
            </h2>
            <p>{session}</p>
          </div>
        </>
    );
};

export default PageHeading2;