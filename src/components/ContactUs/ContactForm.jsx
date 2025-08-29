// Updated ContactForm.jsx
import { useState } from "react";
import Swal from "sweetalert2";
import Axios from "../../axios/axios";
import Button from "../common/Button";
import ContactMap from "./ContactMap";

export default function ContactForm({map}) {
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
      // Clear form after successful submission
      setName('');
      setMobile('');
      setMessage('');
      setEmail('');
      setSubject('');
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
    <div className="min-h-screen bg-gradient-to-br-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row min-h-[700px]">
            
            {/* Map Section */}
            <div className="w-full lg:w-1/2 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-2">
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-full">
                  <ContactMap map={map} />
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-gray-50">
              <div className="max-w-md mx-auto w-full">
                <div className="text-center mb-8">
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-700 bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-3">
                    Contact Us
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
                  <p className="text-gray-600 mt-4 text-lg">We'd love to hear from you</p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="group">
                    <label className="block text-gray-700 text-lg font-medium mb-2 group-focus-within:text-blue-600 transition-colors">
                      Name
                    </label>
                    <input 
                      type="text" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-4 border-2 border-gray-200 rounded-xl text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-gray-50 focus:bg-white" 
                      placeholder="Your Name"
                      required 
                    />
                  </div>

                  <div className="group">
                    <label className="block text-gray-700 text-lg font-medium mb-2 group-focus-within:text-blue-600 transition-colors">
                      Mobile No
                    </label>
                    <input 
                      type="tel" 
                      value={mobile} 
                      onChange={(e) => setMobile(e.target.value)}
                      className="w-full p-4 border-2 border-gray-200 rounded-xl text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-gray-50 focus:bg-white" 
                      placeholder="Mobile Number"
                      required 
                    />
                  </div>

                  <div className="group">
                    <label className="block text-gray-700 text-lg font-medium mb-2 group-focus-within:text-blue-600 transition-colors">
                      Email
                    </label>
                    <input 
                      type="email" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-4 border-2 border-gray-200 rounded-xl text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-gray-50 focus:bg-white" 
                      placeholder="Email Address"
                      required 
                    />
                  </div>

                  <div className="group">
                    <label className="block text-gray-700 text-lg font-medium mb-2 group-focus-within:text-blue-600 transition-colors">
                      Subject
                    </label>
                    <input 
                      type="text" 
                      value={subject} 
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full p-4 border-2 border-gray-200 rounded-xl text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-gray-50 focus:bg-white" 
                      placeholder="Subject"
                      required 
                    />
                  </div>

                  <div className="group">
                    <label className="block text-gray-700 text-lg font-medium mb-2 group-focus-within:text-blue-600 transition-colors">
                      Message
                    </label>
                    <textarea 
                      value={message} 
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full p-4 border-2 border-gray-200 rounded-xl text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-gray-50 focus:bg-white resize-none" 
                      rows="4" 
                      placeholder="Write your message in details"
                      required
                    ></textarea>
                  </div>

                  <div className="pt-4 flex justify-center">
                    <Button 
                      text={loading ? "Sending..." : "Send Message"} 
                      textSize="text-xl" 
                      onClick={handleSubmit}
                      disabled={loading}
                      className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}