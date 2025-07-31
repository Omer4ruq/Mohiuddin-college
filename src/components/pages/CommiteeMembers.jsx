import { Fragment, useEffect, useState } from "react";
import Axios from "../../axios/axios";
import { useAxiosPublic } from "../../utils/useAxiosPublic";
import CommitteeMembers from "../Committe/CommitteeMembers";
import PageHeading from "../common/PageHeading";

const Committee = () => {
  const [committeMembers, setCommitteMembers] = useState([]);
  const { axiosPublic } = useAxiosPublic();

  useEffect(() => {
    axiosPublic
      .get("/committeeMembers.json")
      .then((res) => setCommitteMembers(res.data));
  }, []);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
   Axios.get('/committees')
     .then(response => {
       setData(response.data);
       setLoading(false);
     })
     .catch(error => {
       setError(error);
       setLoading(false);
     });
 }, []);

 if (loading) return <p>Loading...</p>;
 if (error) return <p>Error: {error.message}</p>

  return (
    <>
    <PageHeading heading="Committee Members" />
      {data?.map((item, index) => {
        if (index <= 15) {
          return (
            <Fragment key={index}>
              <CommitteeMembers item={item} />
            </Fragment>
          );
        }
      })}
    </>
  );
};

export default Committee;
