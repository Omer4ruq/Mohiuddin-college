import React, { useState, useEffect } from 'react';
import staffData from '../../../src/data/staffData';

const CurrentHead = () => {
  const [headData, setHeadData] = useState(null);
  const [activeTab, setActiveTab] = useState('about');
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
        <p className="text-gray-500">কোনো তথ্য উপলব্ধ নেই</p>
      </div>
    );
  }

  const tabs = [
    { id: 'about', label: 'সম্পর্কে' },
    { id: 'personal', label: 'ব্যক্তিগত তথ্য' },
    { id: 'education', label: 'শিক্ষাগত যোগ্যতা' },
    { id: 'experience', label: 'একাডেমিক অভিজ্ঞতা' },
    { id: 'contact', label: 'যোগাযোগের তথ্য' }
  ];

  return (
    <div className="min-h-screen  py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-sm border p-8 mb-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="w-48 h-64 bg-gray-200 rounded overflow-hidden">
                {headData.image_url ? (
                  <img
                    src={headData.image_url}
                    alt={headData.name_bengali}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    ছবি নেই
                  </div>
                )}
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-700 mb-2">বর্তমান অধ্যক্ষ</h2>
              <h1 className="text-2xl font-bold text-gray-900 mb-1">{headData.name_bengali}</h1>
              <p className="text-lg text-gray-600 mb-4">{headData.title_bengali}</p>
              
              <div className="space-y-2 text-gray-600">
                <p><strong>যোগ্যতা:</strong> {headData.qualification_bengali}</p>
                <p><strong>বিষয়:</strong> {headData.subject_bengali}</p>
                <p><strong>মোবাইল:</strong> {headData.mobile}</p>
                <p><strong>ইমেইল:</strong> {headData.email}</p>
                <p><strong>অফিস:</strong> অধ্যক্ষ অফিস</p>
              </div>

              {headData.cv_link && (
                <div className="mt-4">
                  <a 
                    href={headData.cv_link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    কারিকুলাম ভিটা
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-sm border mb-6">
          <nav className="flex flex-wrap border-b">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600 bg-blue-50'
                    : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'about' && (
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  {headData.name_bengali}, আমাদের প্রতিষ্ঠানের অধ্যক্ষ হিসেবে দায়িত্ব পালন করছেন, শিক্ষা নেতৃত্ব এবং প্রশাসনে বিস্তৃত অভিজ্ঞতা নিয়ে এসেছেন। {headData.subject_bengali}-এ শক্তিশালী একাডেমিক পটভূমি এবং {headData.qualification_bengali} সহ, {headData.name_bengali.split(' ')[0]} শিক্ষায় উৎকর্ষতা এবং প্রতিষ্ঠানের উন্নয়নে নিবেদিত।
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  {headData.name_bengali}-এর নেতৃত্বে প্রতিষ্ঠানটি উচ্চমানের একাডেমিক উৎকর্ষতা, ছাত্র উন্নয়ন এবং সম্প্রদায়ের সংযোগ উপহার করে চলেছে। শিক্ষা প্রশাসনে বছরের পর বছর অভিজ্ঞতা সহ, অধ্যক্ষ শিক্ষা, উদ্ভাবন এবং ছাত্রদের সামগ্রিক উন্নয়ন প্রচার করে একটি পরিবেশ তৈরিতে প্রতিশ্রুতিবদ্ধ।
                </p>
              </div>
            )}

            {activeTab === 'personal' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">ব্যক্তিগত বিস্তারিত</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-gray-600">পুরো নাম (ইংরেজি):</span>
                      <p className="font-medium">{headData.name_english}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">পুরো নাম (বাংলা):</span>
                      <p className="font-medium">{headData.name_bengali}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">জন্ম তারিখ:</span>
                      <p className="font-medium">{headData.dob_bengali}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">ধর্ম:</span>
                      <p className="font-medium">{headData.religion_bengali}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">জাতীয়তা:</span>
                      <p className="font-medium">{headData.nationality_bengali}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">রক্তের গ্রুপ:</span>
                      <p className="font-medium">{headData.blood_group}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">পারিবারিক তথ্য</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-gray-600">পিতার নাম:</span>
                      <p className="font-medium">{headData.father_name_bengali}</p>
                      <p className="text-sm text-gray-500">{headData.father_name_english}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">মাতার নাম:</span>
                      <p className="font-medium">{headData.mother_name_bengali}</p>
                      <p className="text-sm text-gray-500">{headData.mother_name_english}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">স্বামী/স্ত্রীর নাম:</span>
                      <p className="font-medium">{headData.spouse_name_bengali}</p>
                      <p className="text-sm text-gray-500">{headData.spouse_name_english}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">বৈবাহিক অবস্থা:</span>
                      <p className="font-medium">{headData.marital_status_bengali}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'education' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">শিক্ষাগত পটভূমি</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-800">{headData.qualification_bengali}</h4>
                    <p className="text-gray-600">{headData.qualification_english}</p>
                    <p className="text-sm text-gray-500 mt-1">বিষয়: {headData.subject_bengali}</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'experience' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">পেশাদারী অভিজ্ঞতা</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-800">বর্তমান পদবী</h4>
                    <p className="text-gray-600">{headData.title_bengali}</p>
                    <p className="text-sm text-gray-500">থেকে: {headData.current_join_date_bengali}</p>
                    <p className="text-sm text-gray-500">
                      বর্তমান পদবীতে অভিজ্ঞতা: {new Date().getFullYear() - new Date(headData.current_join_date_bengali.split('-').reverse().join('-')).getFullYear()} বছর
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-800">সম্পূর্ণ পেশাদারী অভিজ্ঞতা</h4>
                    <p className="text-gray-600">শিক্ষা সেবা</p>
                    <p className="text-sm text-gray-500">শুরু: {headData.first_join_date_bengali}</p>
                    <p className="text-sm text-gray-500">
                      মোট অভিজ্ঞতা: {new Date().getFullYear() - new Date(headData.first_join_date_bengali.split('-').reverse().join('-')).getFullYear()} বছর
                    </p>
                    <p className="text-sm text-gray-500">ইনডেক্স পিডিএস: {headData.index_pds}</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'contact' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">যোগাযোগের তথ্য</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-gray-600">মোবাইল:</span>
                      <p className="font-medium">{headData.mobile}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">ইমেইল:</span>
                      <p className="font-medium">{headData.email}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">জাতীয় পরিচয়পত্র:</span>
                      <p className="font-medium">{headData.nid}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">ঠিকানার তথ্য</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-gray-600">বর্তমান ঠিকানা:</span>
                      <p className="font-medium">{headData.current_address_bengali}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">স্থায়ী ঠিকানা:</span>
                      <p className="font-medium">{headData.permanent_address_bengali}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentHead;