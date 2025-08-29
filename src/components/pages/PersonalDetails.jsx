import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import staffData from '../../../src/data/staffData';

const PersonalDetails = () => {
  const { serial } = useParams();
  const location = useLocation();
  const [personData, setPersonData] = useState(null);
  const [personType, setPersonType] = useState('');
  const [activeSection, setActiveSection] = useState('education');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Determine person type from URL path
    let type = '';
    let data = null;
    
    if (location.pathname.includes('/faculty/teacher/')) {
      type = 'Current Teacher';
      data = staffData.current_teachers.find(t => t.serial === parseInt(serial));
    } else if (location.pathname.includes('/faculty/ex-teacher/')) {
      type = 'Former Teacher';
      data = staffData.ex_teachers.find(t => t.serial === parseInt(serial));
    } else if (location.pathname.includes('/staff/ex-staff/')) {
      type = 'Former Staff';
      data = staffData.ex_staffs.find(s => s.serial === parseInt(serial));
    } else if (location.pathname.includes('/staff/')) {
      type = 'Current Staff';
      data = staffData.current_staffs.find(s => s.serial === parseInt(serial));
    } else if (location.pathname.includes('/head')) {
      type = 'Current Head';
      data = staffData.current_head;
    } else if (location.pathname.includes('/founder')) {
      type = 'Founder';
      data = staffData.founder;
    }

    setTimeout(() => {
      setPersonData(data);
      setPersonType(type);
      setLoading(false);
    }, 500);
  }, [serial, location.pathname]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!personData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Person Not Found</h2>
          <p className="text-gray-600">The requested person details could not be found.</p>
        </div>
      </div>
    );
  }

  const sections = [
    { id: 'education', label: 'Education' },
    { id: 'leadership', label: personType.includes('Head') ? 'Academic Leadership' : 'Professional Experience' },
    { id: 'personal', label: 'Personal Information' },
    { id: 'contact', label: 'Contact Details' }
  ];

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId).scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-80 bg-white shadow-lg min-h-screen">
          <div className="p-6">
            {/* Close Button */}
            <div className="flex justify-end mb-4">
              <button 
                onClick={() => window.history.back()}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            {/* Navigation Menu */}
            <div className="space-y-1">
              <div className="text-blue-600 font-semibold text-lg mb-4">Administration</div>
              
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleSectionClick(section.id)}
                  className={`w-full text-left px-4 py-2 text-sm rounded transition-colors ${
                    activeSection === section.id
                      ? 'bg-blue-50 text-blue-600 font-medium'
                      : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-gray-100">
          {/* Header Section */}
          <div className="bg-blue-50 px-8 py-6">
            <div className="flex items-center gap-6">
              {/* Profile Image */}
              <div className="w-32 h-40 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                {personData.image_url ? (
                  <img
                    src={personData.image_url}
                    alt={personData.name_english || personData.name_bengali}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                    No Photo
                  </div>
                )}
              </div>

              {/* Profile Info */}
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {personData.name_english || personData.name_bengali}
                </h1>
                <p className="text-lg text-gray-600 mb-3">
                  {personData.title_english || personData.qualification_english}
                </p>
                <p className="text-gray-700 mb-4">
                  {personData.qualification_english || 'Qualification not specified'}
                </p>

                {/* Message Button */}
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded text-sm font-medium transition-colors">
                  Message From The {personType.includes('Head') ? 'Principal' : personType}
                </button>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="px-8 py-6">
            {/* Two Column Layout for Education and Leadership */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Education Section */}
              <div id="education" className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-blue-600 mb-6 pb-2 border-b-2 border-blue-200">
                  Education
                </h2>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      {personData.qualification_english || 'Qualification not specified'}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {personData.subject_english && `Subject: ${personData.subject_english}`}
                    </p>
                    {personData.qualification_bengali && (
                      <p className="text-gray-600 text-sm">{personData.qualification_bengali}</p>
                    )}
                  </div>

                  {personType.includes('Founder') && (
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-800 mb-2">Educational Philosophy</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Educational philosophy centered around holistic development, combining academic 
                        excellence with moral values and character building.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Leadership/Professional Section */}
              <div id="leadership" className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-blue-600 mb-6 pb-2 border-b-2 border-blue-200">
                  {personType.includes('Head') ? 'Academic Leadership' : 'Professional Experience'}
                </h2>
                
                <div className="space-y-6">
                  {/* Current Position */}
                  {(personData.title_english || personData.current_join_date_english) && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {new Date().getFullYear()}-Present
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {personData.title_english || 'Position not specified'}
                      </h3>
                      <p className="text-gray-600">
                        {personType.includes('Founder') 
                          ? `Founded in ${personData.foundation_date_bengali?.split('-')[2] || 'N/A'}`
                          : personData.subject_english || 'Department not specified'
                        }
                      </p>
                      {personData.current_join_date_english && (
                        <p className="text-sm text-gray-500">
                          Since {personData.current_join_date_english}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Career Timeline */}
                  {personData.first_join_date_english && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          Experience
                        </span>
                      </div>
                      <p className="text-gray-600">
                        Total Experience: {new Date().getFullYear() - new Date(personData.first_join_date_english.split('-').reverse().join('-')).getFullYear()} Years
                      </p>
                      <p className="text-sm text-gray-500">
                        Started: {personData.first_join_date_english}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Personal Information Section */}
            <div id="personal" className="bg-white rounded-lg p-6 shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-blue-600 mb-6 pb-2 border-b-2 border-blue-200">
                Personal Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Basic Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Basic Details</h3>
                  <div className="space-y-3">
                    {personData.name_bengali && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Name (Bengali):</span>
                        <span className="font-medium text-gray-800">{personData.name_bengali}</span>
                      </div>
                    )}
                    {personData.dob_english && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Date of Birth:</span>
                        <span className="font-medium text-gray-800">{personData.dob_english}</span>
                      </div>
                    )}
                    {personData.religion_english && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Religion:</span>
                        <span className="font-medium text-gray-800">{personData.religion_english}</span>
                      </div>
                    )}
                    {personData.nationality_english && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Nationality:</span>
                        <span className="font-medium text-gray-800">{personData.nationality_english}</span>
                      </div>
                    )}
                    {personData.blood_group && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Blood Group:</span>
                        <span className="font-medium text-gray-800">{personData.blood_group}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Family Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Family Details</h3>
                  <div className="space-y-3">
                    {personData.father_name_english && (
                      <div>
                        <span className="text-gray-600">Father's Name:</span>
                        <p className="font-medium text-gray-800">{personData.father_name_english}</p>
                      </div>
                    )}
                    {personData.mother_name_english && (
                      <div>
                        <span className="text-gray-600">Mother's Name:</span>
                        <p className="font-medium text-gray-800">{personData.mother_name_english}</p>
                      </div>
                    )}
                    {personData.spouse_name_english && (
                      <div>
                        <span className="text-gray-600">Spouse's Name:</span>
                        <p className="font-medium text-gray-800">{personData.spouse_name_english}</p>
                      </div>
                    )}
                    {personData.marital_status_english && (
                      <div>
                        <span className="text-gray-600">Marital Status:</span>
                        <p className="font-medium text-gray-800">{personData.marital_status_english}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Details Section */}
            <div id="contact" className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-blue-600 mb-6 pb-2 border-b-2 border-blue-200">
                Contact Details
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    {personData.mobile && (
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-green-600 text-xs">📱</span>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Mobile</p>
                          <p className="font-medium text-gray-800">{personData.mobile}</p>
                        </div>
                      </div>
                    )}
                    
                    {personData.email && (
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 text-xs">📧</span>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Email</p>
                          <p className="font-medium text-gray-800">{personData.email}</p>
                        </div>
                      </div>
                    )}
                    
                    {personData.nid && (
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                          <span className="text-gray-600 text-xs">🆔</span>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">National ID</p>
                          <p className="font-medium text-gray-800">{personData.nid}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Address Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Address Information</h3>
                  <div className="space-y-4">
                    {personData.current_address_bengali && (
                      <div>
                        <h4 className="font-medium text-gray-800 mb-2">Current Address</h4>
                        <p className="text-gray-700 text-sm leading-relaxed bg-gray-50 p-3 rounded">
                          {personData.current_address_bengali}
                        </p>
                      </div>
                    )}
                    
                    {personData.permanent_address_bengali && 
                     personData.permanent_address_bengali !== personData.current_address_bengali && (
                      <div>
                        <h4 className="font-medium text-gray-800 mb-2">Permanent Address</h4>
                        <p className="text-gray-700 text-sm leading-relaxed bg-gray-50 p-3 rounded">
                          {personData.permanent_address_bengali}
                        </p>
                      </div>
                    )}
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

export default PersonalDetails;