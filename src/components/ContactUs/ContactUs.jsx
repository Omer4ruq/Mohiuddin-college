// Updated ContactUs.jsx
import { useEffect, useState } from "react";
import Axios from "../../axios/axios";
import ContactBoxes from "./ContactBoxes";
import ContactForm from "./ContactForm";

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

console.log(data)
   if (loading) return <p>Loading...</p>;
   if (error) return <p>Error: {error.message}</p>
    
    return (
        <div>
         <ContactBoxes data={data} />
         <ContactForm map={data?.google_map} />
        </div>
    );
}