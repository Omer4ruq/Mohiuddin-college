import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaPhone, FaCalendarAlt, FaGraduationCap, FaMapMarkerAlt, FaIdCard, FaTint, FaFlag, FaUser, FaHeart } from 'react-icons/fa';
import staffData from '../../../src/data/staffData';

const CurrentHead = () => {
  const [headData, setHeadData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setHeadData(staffData.current_head);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!headData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-500">No data available</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-12">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-lg">
                {headData.image_url ? (
                  <img
                    src={headData.image_url}
                    alt={headData.name_english}
                    className="w-36 h-36 rounded-full object-cover"
                  />
                ) : (
                  <FaUser className="text-6xl text-gray-400" />
                )}
              </div>
              <div className="text-center lg:text-left text-white">
                <h1 className="text-4xl font-bold mb-2">{headData.name_english}</h1>
                <h2 className="text-2xl font-light mb-1">{headData.name_bengali}</h2>
                <div className="bg-white bg-opacity-20 rounded-full px-6 py-2 inline-block mb-4">
                  <p className="text-lg font-semibold">{headData.title_english}</p>
                </div>
                <p className="text-blue-100 text-lg">{headData.subject_english}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6 border-b pb-3">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaPhone className="text-blue-600 text-lg" />
                  <div>
                    <p className="text-sm text-gray-500">Mobile</p>
                    <p className="font-semibold">{headData.mobile}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-blue-600 text-lg" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-semibold">{headData.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaIdCard className="text-blue-600 text-lg" />
                  <div>
                    <p className="text-sm text-gray-500">National ID</p>
                    <p className="font-semibold">{headData.nid}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaTint className="text-blue-600 text-lg" />
                  <div>
                    <p className="text-sm text-gray-500">Blood Group</p>
                    <p className="font-semibold">{headData.blood_group}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6 border-b pb-3">Quick Stats</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600">Index PDS</p>
                  <p className="text-xl font-bold text-blue-600">{headData.index_pds}</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600">Years in Current Position</p>
                  <p className="text-xl font-bold text-green-600">
                    {new Date().getFullYear() - new Date(headData.current_join_date_english.split('-').reverse().join('-')).getFullYear()}
                  </p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600">Total Experience</p>
                  <p className="text-xl font-bold text-purple-600">
                    {new Date().getFullYear() - new Date(headData.first_join_date_english.split('-').reverse().join('-')).getFullYear()} Years
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6 border-b pb-3">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <FaCalendarAlt className="text-blue-600 text-lg mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Date of Birth</p>
                    <p className="font-semibold">{headData.dob_english}</p>
                    <p className="text-sm text-gray-400">{headData.dob_bengali}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaFlag className="text-blue-600 text-lg mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Religion</p>
                    <p className="font-semibold">{headData.religion_english}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaHeart className="text-blue-600 text-lg mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Marital Status</p>
                    <p className="font-semibold">{headData.marital_status_english}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaFlag className="text-blue-600 text-lg mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Nationality</p>
                    <p className="font-semibold">{headData.nationality_english}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Family Information */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6 border-b pb-3">Family Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-500 mb-2">Father's Name</p>
                  <p className="font-semibold text-gray-800">{headData.father_name_english}</p>
                  <p className="text-sm text-gray-600">{headData.father_name_bengali}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">Mother's Name</p>
                  <p className="font-semibold text-gray-800">{headData.mother_name_english}</p>
                  <p className="text-sm text-gray-600">{headData.mother_name_bengali}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm text-gray-500 mb-2">Spouse's Name</p>
                  <p className="font-semibold text-gray-800">{headData.spouse_name_english}</p>
                  <p className="text-sm text-gray-600">{headData.spouse_name_bengali}</p>
                </div>
              </div>
            </div>

            {/* Professional Information */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6 border-b pb-3">Professional Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaGraduationCap className="text-blue-600 text-lg mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Qualification</p>
                    <p className="font-semibold text-gray-800">{headData.qualification_english}</p>
                    <p className="text-sm text-gray-600">{headData.qualification_bengali}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">First Joining Date</p>
                    <p className="font-semibold text-blue-600">{headData.first_join_date_english}</p>
                    <p className="text-xs text-gray-500">{headData.first_join_date_bengali}</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Current Position Since</p>
                    <p className="font-semibold text-green-600">{headData.current_join_date_english}</p>
                    <p className="text-xs text-gray-500">{headData.current_join_date_bengali}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6 border-b pb-3">Address Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-blue-600 text-lg mt-1" />
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 mb-2">Current Address</p>
                    <p className="font-medium text-gray-800 leading-relaxed">{headData.current_address_bengali}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-green-600 text-lg mt-1" />
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 mb-2">Permanent Address</p>
                    <p className="font-medium text-gray-800 leading-relaxed">{headData.permanent_address_bengali}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentHead;