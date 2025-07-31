import { useEffect, useState } from "react";
import Axios from "../../axios/axios";
import ContactBoxes from "./ContactBoxes";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";

export default function ContactUs() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
     Axios.get('/contacts')
       .then(response => {
         setData(response.data[0]);
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
        <div>
         <ContactBoxes data={data} />
         <ContactMap map={data?.google_map} />
         <ContactForm image={data?.image} />
        </div>
    );
}