import { useState } from "react";
import Swal from "sweetalert2";
import Axios from "../../axios/axios";
import Button from "../common/Button";

export default function ContactForm({image}) {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    Axios.post('/public-msg/', {name, phone_no: mobile, msg:message, email_id: email, subject})
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
      <div className="flex flex-wrap items-center">
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <img src={image} className="w-full h-auto rounded-l-lg" />
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 py-8 px-0 md:pl-8">
        <h2 className="text-4xl font-semibold text-primary mb-4">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 text-xl mb-1">Name :</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md text-lg" placeholder="Your Name" />
          </div>
          <div>
            <label className="block text-gray-700 text-xl mb-1">Mobile No : </label>
            <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md text-lg" placeholder="Mobile NUmber" />
          </div>
          <div>
            <label className="block text-gray-700 text-xl mb-1">Email :</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md text-lg" placeholder="Email Address" />
          </div>
          <div>
            <label className="block text-gray-700 text-xl mb-1">Subject : </label>
            <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md text-lg" placeholder="Subject" />
          </div>
          <div>
            <label className="block text-gray-700 text-xl mb-1">Message : </label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md text-lg" rows="4" placeholder="Write in Details"></textarea>
          </div>
          <Button text="Submit" textSize="text-xl" onClick={handleSubmit}/>
        </form>
      </div>
    </div>
    );
}