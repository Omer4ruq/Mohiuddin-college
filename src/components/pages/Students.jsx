import { Fragment, useState } from "react";
import Axios from "../../axios/axios";
import Student from "../Students/Student";
import StudentHeading from "../Students/StudentHeading";
import StudentSearch from "../Students/StudentSearch";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  function handleFetchData(pageNumber){
    setCurrentPage(pageNumber);
    let newLink = link.split("page=")[0] + "page=" + pageNumber;
    setLink(newLink);
    setLoading(true);

    Axios.get(newLink)
    .then(response => {
      setStudents(response.data);
      setLoading(false);
      setLink(link);
    })
    .catch(error => {
      setError(error);
      setLoading(false);
    });
  }

  return (
    <>

      <StudentSearch setStudents={setStudents} setLink={setLink} />

      {!!students?.results?.length && <StudentHeading students={students} />}

      {loading && <p>Loading...</p>}

      <div className="staffList__items px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 py-3">

        {!!students?.results?.length && !loading && students?.results?.map((item, index) => {
          if (index <= 10) {
            return (
              <Fragment key={index}>
                <Student
                  name={item?.name}
                  roll={item?.roll_no}
                  registration={item?.id}
                  image={item?.avatar}
                  group={item?.admission_year_id || item?.academic_session_year}
                />
              </Fragment>
            );
          }
        })}

      </div>

      {
        !!students?.results?.length && <div className="flex justify-center mt-5">
          {Array.from({ length: Math.ceil(students?.count / 10) }, (_, index) => (
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

export default Students;
