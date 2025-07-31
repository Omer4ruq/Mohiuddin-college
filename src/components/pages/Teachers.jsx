import { Fragment, useEffect, useState } from "react";
import Axios from "../../axios/axios";
import Teacher from "../Teachers/Teacher";


const Teachers = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [link, setLink] = useState("");


  function handleFetchData(pageNumber){
    setCurrentPage(pageNumber);
    let newLink = link.split("page=")[0] + "page=" + pageNumber;
    setLink(newLink);
    setLoading(true);

    Axios.get(newLink)
    .then(response => {
      setData(response.data);
      setLoading(false);
      setLink(link);
    })
    .catch(error => {
      setError(error);
      setLoading(false);
    });
  }
  
  useEffect(() => {
   Axios.get(`/api/staff-profiles/?page_size=20&role_filter=include&page=${currentPage}`)
     .then(response => {
       setData(response.data);
       setLoading(false);
     })
     .catch(error => {
       setError(error);
       setLoading(false);
     });
 }, [currentPage]);

 if (loading) return <p>Loading...</p>;
 if (error) return <p>Error: {error.message}</p>


  return (
    <>

      <div className="staffList__items px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 py-3">
        {data?.results?.map((item, index) => {
          if (index <= 10) {
          return (
            <Fragment key={index}>
              <Teacher
                name={item.name}
                designation={item.designation}
                registration={item.registration}
                role={item.role}
                image={item.avatar}
              />
            </Fragment>
          );
        }})}
      </div>

      {
        !!data?.results?.length && <div className="flex justify-center mt-5">
          {Array.from({ length: Math.ceil(data?.count / 10) }, (_, index) => (
            <button
              key={index}
              onClick={() => handleFetchData(index + 1)}
              className={`${
                currentPage === index + 1
                  ? "bg-primary text-white"
                  : "bg-white text-primary"
              } border border-primary rounded px-4 py-2 mx-1`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      }
    </>
  );
};

export default Teachers;
