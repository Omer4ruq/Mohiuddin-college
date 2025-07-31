import PageHeading from "../PageHeading";
import Pagination from "../Pagination";

// common layout for student list, teachers list, staff list etc.
const ListPage = ({
  pageheading,
  itemComponent,
  extraComponents = "",
  pagination = true,
}) => {
  return (
    <>
      <div className="staffList font-poppins">
        {/* heading */}
        <PageHeading heading={pageheading} />

        {extraComponents}

        {/* staff items */}
        <div className="staffList__items px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 py-3">
          {itemComponent}
        </div>

        {/* Pagination */}
        {pagination && <Pagination />}
      </div>
    </>
  );
};

export default ListPage;
