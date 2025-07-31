import { useEffect, useState } from "react";
import { FaPhoneSquareAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import Axios from "../../axios/axios";

const Contact = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');
  
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

 function handleSubmit(e) {
  e.preventDefault();
  setLoading(true);
  Axios.post('/public-msg/', {name, phone_no: mobile, msg:message})
  .then(response => {
    setLoading(false);
    setError(false);
    Swal.fire({
      title: "Success!",
      text: "Your message has been sent.",
      icon: "success",
      confirmButtonText: "OK",
      timer: 3000, 
    });
    
  })
  .catch(error => {
    setError(error);
    setLoading(false);
    Swal.fire({
      title: "Error!",
      text: "Something went wrong. Please try again.",
      icon: "error",
      confirmButtonText: "OK",
    });
  });  
} 
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-20 gap-5 contact bg-gradient-to-r from-primary to-secondary p-5 rounded-md">
        <div className="contact_text text-textColor flex flex-col h-full">
          <h4 className="lg:text-6xl md:text-4xl text-3xl mb-3">Contact with us.</h4>
          <p className="md:text-2xl text-xl font-thin leading-6 text-justify">
           For any query regarding our school, academic curriculum, admission, fees or policies feel free to drop a message.
          </p>
          <div className="number flex items-center gap-4 mt-4 md:mt-auto bg-white self-start p-2 rounded-md">
            <FaPhoneSquareAlt className="w-8 h-8 text-primary" />
            <p className="md:text-5xl text-3xl text-primary">{data?.mobile}</p>
          </div>
        </div>
        <div className="contact_form p-5 bg-white rounded-md">
          <form>
            <div className="item flex flex-col gap-1 mb-3">
              <label className="leading-3 text-lg text-primary" htmlFor="name">
                Your name
              </label>
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-2 pb-3 w-full rounded-sm bg-[rgba(0,0,0,.11)] placeholder:text-[rgba(0,0,0,.49)]"
              />
            </div>

            <div className="item flex flex-col gap-1 mb-3">
              <label className="leading-3 text-lg text-primary" htmlFor="name">
                Mobile Number
              </label>
              <input
                type="text"
                placeholder="Mobile Number "
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="p-2 pb-3 w-full rounded-sm bg-[rgba(0,0,0,.11)] placeholder:text-[rgba(0,0,0,.49)]"
              />
            </div>
            <div className="item flex flex-col gap-1 mb-3 relative">
              <label className="leading-3 text-lg text-primary" htmlFor="name">
                Your Message
              </label>
              <textarea
                placeholder="Please explain your query in detail."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="p-2 pb-3 w-full rounded-sm bg-[rgba(0,0,0,.11)] placeholder:text-[rgba(0,0,0,.49)] h-[100px]"
              ></textarea>
              <span className="absolute bottom-4 right-4"></span>
            </div>
            <div className="item flex flex-col gap-2 justify-end">
              <input
                type="submit"
                value="Send the message"
                onClick={handleSubmit}
                className="text-textColor self-end text-2xl px-7 rounded-md py-2 bg-gradient-to-r from-primary to-secondary cursor-pointer"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
