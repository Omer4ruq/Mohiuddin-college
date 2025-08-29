// ContactBoxes.jsx (Fixed data inconsistency, removed internal fetch, added icons for better UI, made more responsive and professional)
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaYoutube } from "react-icons/fa";

export default function ContactBoxes({ data }) {
  if (!data) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
      <div className="bg-white shadow-md p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
        <div className="flex items-center mb-4">
          <FaMapMarkerAlt className="text-primary text-3xl mr-3" />
          <h2 className="text-2xl font-semibold text-primary">School Address</h2>
        </div>
        <p className="text-gray-700 text-lg">{data.office_address}</p>
      </div>
      <div className="bg-white shadow-md p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
        <div className="flex items-center mb-4">
          <FaPhoneAlt className="text-primary text-3xl mr-3" />
          <h2 className="text-2xl font-semibold text-primary">Mobile Number</h2>
        </div>
        <p className="text-gray-700 text-lg">{data.mobile}</p>
      </div>
      <div className="bg-white shadow-md p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
        <div className="flex items-center mb-4">
          <FaEnvelope className="text-primary text-3xl mr-3" />
          <h2 className="text-2xl font-semibold text-primary">Email</h2>
        </div>
        <p className="text-gray-700 text-lg">{data.email}</p>
      </div>
      <div className="bg-white shadow-md p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
        <div className="flex items-center mb-4">
          <h2 className="text-2xl font-semibold text-primary">Social Media</h2>
        </div>
        <div className="flex flex-col space-y-2">
          {
            <a
              href={data.institute_fb}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 text-lg hover:underline"
            >
              <FaFacebookF className="mr-2" /> Facebook
            </a>
          }
          {
            <a
              href={data.institute_youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-red-600 text-lg hover:underline"
            >
              <FaYoutube className="mr-2" /> YouTube
            </a>
          }
        </div>
      </div>
    </div>
  );
}