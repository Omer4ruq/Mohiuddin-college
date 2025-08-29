import React, { useState, useEffect } from 'react';
import founder from '../../../public/images/Founder-2.jpg'

const Founder = () => {
  const [founderData, setFounderData] = useState(null);
  const [activeTab, setActiveTab] = useState('about');
  const [loading, setLoading] = useState(true);

  // Sample founder data - replace with your actual data source
  const sampleFounderData = {
    name_bengali: "মোঃ আব্দুল করিম",
    name_english: "Md. Abdul Karim",
    title_bengali: "প্রতিষ্ঠাতা",
    title_english: "Founder",
    qualification_bengali: "এমএ (বাংলা)",
    qualification_english: "MA (Bengali)",
    subject_bengali: "বাংলা সাহিত্য",
    subject_english: "Bengali Literature",
    mobile: "০১৭১১-১২৩৪৫৬",
    email: "founder@school.edu.bd",
    image_url: founder, // Add image URL if available
    dob_bengali: "১৫-০১-১৯৫০",
    religion_bengali: "ইসলাম",
    nationality_bengali: "বাংলাদেশী",
    blood_group: "বি পজিটিভ",
    father_name_bengali: "মরহুম আলহাজ্ব আব্দুর রহমান",
    father_name_english: "Late Alhaj Abdur Rahman",
    mother_name_bengali: "মরহুমা রাবেয়া খাতুন",
    mother_name_english: "Late Rabeya Khatun",
    spouse_name_bengali: "ফাতেমা বেগম",
    spouse_name_english: "Fatema Begum",
    marital_status_bengali: "বিবাহিত",
    foundation_date_bengali: "০১-০১-১৯৮৫",
    nid: "১২৩৪৫৬৭৮৯০",
    current_address_bengali: "গ্রাম: শিক্ষাপুর, পোস্ট: শিক্ষা-৪২০০, উপজেলা: শিক্ষা, জেলা: শিক্ষা",
    permanent_address_bengali: "গ্রাম: শিক্ষাপুর, পোস্ট: শিক্ষা-৪২০০, উপজেলা: শিক্ষা, জেলা: শিক্ষা",
    achievements: [
      "স্থানীয় শিক্ষা উন্নয়নে অগ্রণী ভূমিকা",
      "শিক্ষা প্রতিষ্ঠান স্থাপনে বিশেষ অবদান",
      "সমাজসেবায় উল্লেখযোগ্য কর্মকাণ্ড"
    ]
  };

  useEffect(() => {
    // Simulate data fetching - replace with actual API call
    setTimeout(() => {
      setFounderData(sampleFounderData);
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

  if (!founderData) {
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
    { id: 'achievement', label: 'অবদান ও সম্মাননা' },
    { id: 'contact', label: 'যোগাযোগের তথ্য' }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-sm border p-8 mb-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="w-48 h-64 bg-gray-200 rounded overflow-hidden">
                {founderData.image_url ? (
                  <img
                    src={founderData.image_url}
                    alt={founderData.name_bengali}
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
              <h2 className="text-lg font-semibold text-gray-700 mb-2">প্রতিষ্ঠাতা</h2>
              <h1 className="text-2xl font-bold text-gray-900 mb-1">{founderData.name_bengali}</h1>
              <p className="text-lg text-gray-600 mb-4">{founderData.title_bengali}</p>
              
              <div className="space-y-2 text-gray-600">
                <p><strong>যোগ্যতা:</strong> {founderData.qualification_bengali}</p>
                <p><strong>বিষয়:</strong> {founderData.subject_bengali}</p>
                <p><strong>মোবাইল:</strong> {founderData.mobile}</p>
                <p><strong>ইমেইল:</strong> {founderData.email}</p>
                <p><strong>প্রতিষ্ঠা তারিখ:</strong> {founderData.foundation_date_bengali}</p>
              </div>

              <div className="mt-4">
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  প্রতিষ্ঠাতা
                </span>
              </div>
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
                  {founderData.name_bengali}, আমাদের প্রতিষ্ঠানের প্রতিষ্ঠাতা হিসেবে {founderData.foundation_date_bengali.split('-')[2]} সালে এই শিক্ষা প্রতিষ্ঠানটি গড়ে তোলেন। {founderData.subject_bengali}-তে শক্তিশালী একাডেমিক পটভূমি এবং {founderData.qualification_bengali} সহ, তিনি শিক্ষায় উৎকর্ষতা এবং সমাজের উন্নয়নে নিবেদিত ছিলেন।
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  {founderData.name_bengali.split(' ')[0]} সাহেবের দূরদর্শী নেতৃত্বে এই প্রতিষ্ঠানটি স্থানীয় শিক্ষা ব্যবস্থায় একটি গুরুত্বপূর্ণ ভূমিকা পালন করে আসছে। তাঁর শিক্ষা দর্শন ছিল মানবিক মূল্যবোধ, নৈতিকতা এবং একাডেমিক উৎকর্ষতার সমন্বয়ে একটি সমৃদ্ধ শিক্ষা পরিবেশ তৈরি করা।
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  তাঁর প্রতিষ্ঠিত এই শিক্ষা প্রতিষ্ঠানটি আজও তাঁর আদর্শ ও লক্ষ্য অনুসরণ করে চলেছে এবং অসংখ্য শিক্ষার্থীর জীবনে ইতিবাচক প্রভাব ফেলে চলেছে। তাঁর অবদান স্থানীয় সমাজের শিক্ষা উন্নয়নে চিরস্মরণীয় হয়ে থাকবে।
                </p>
              </div>
            )}

            {activeTab === 'personal' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">ব্যক্তিগত বিস্তারিত</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-gray-600">পূর্ণ নাম (ইংরেজি):</span>
                      <p className="font-medium">{founderData.name_english}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">পূর্ণ নাম (বাংলা):</span>
                      <p className="font-medium">{founderData.name_bengali}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">জন্ম তারিখ:</span>
                      <p className="font-medium">{founderData.dob_bengali}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">ধর্ম:</span>
                      <p className="font-medium">{founderData.religion_bengali}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">জাতীয়তা:</span>
                      <p className="font-medium">{founderData.nationality_bengali}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">রক্তের গ্রুপ:</span>
                      <p className="font-medium">{founderData.blood_group}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">পারিবারিক তথ্য</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-gray-600">পিতার নাম:</span>
                      <p className="font-medium">{founderData.father_name_bengali}</p>
                      <p className="text-sm text-gray-500">{founderData.father_name_english}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">মাতার নাম:</span>
                      <p className="font-medium">{founderData.mother_name_bengali}</p>
                      <p className="text-sm text-gray-500">{founderData.mother_name_english}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">স্বামী/স্ত্রীর নাম:</span>
                      <p className="font-medium">{founderData.spouse_name_bengali}</p>
                      <p className="text-sm text-gray-500">{founderData.spouse_name_english}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">বৈবাহিক অবস্থা:</span>
                      <p className="font-medium">{founderData.marital_status_bengali}</p>
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
                    <h4 className="font-semibold text-gray-800">{founderData.qualification_bengali}</h4>
                    <p className="text-gray-600">{founderData.qualification_english}</p>
                    <p className="text-sm text-gray-500 mt-1">বিষয়: {founderData.subject_bengali}</p>
                    <p className="text-sm text-gray-500">Subject: {founderData.subject_english}</p>
                  </div>
                  
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">শিক্ষা দর্শন</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      প্রতিষ্ঠাতার শিক্ষা দর্শন ছিল প্রতিটি শিক্ষার্থীর সর্বোচ্চ সম্ভাবনা বিকাশে সহায়তা করা। তিনি বিশ্বাস করতেন যে, শিক্ষা শুধুমাত্র জ্ঞান অর্জনের মাধ্যম নয়, বরং চরিত্র গঠন ও মানবিক গুণাবলী বিকাশের হাতিয়ার।
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'achievement' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">অবদান ও সম্মাননা</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-800">প্রতিষ্ঠানের ভিত্তি স্থাপন</h4>
                    <p className="text-gray-600">প্রতিষ্ঠা তারিখ: {founderData.foundation_date_bengali}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      {new Date().getFullYear() - parseInt(founderData.foundation_date_bengali.split('-')[2])} বছর ধরে শিক্ষা সেবায় অবদান
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">মূল অবদানসমূহ</h4>
                      <ul className="space-y-2">
                        {founderData.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <span className="text-sm text-gray-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">উত্তরাধিকার</h4>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        প্রতিষ্ঠাতার দেখানো পথ অনুসরণ করে আজও এই প্রতিষ্ঠান মানসম্পন্ন শিক্ষা প্রদানে এগিয়ে চলেছে এবং তাঁর আদর্শ ভবিষ্যৎ প্রজন্মের কাছে পৌঁছে দিচ্ছে।
                      </p>
                    </div>
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
                      <p className="font-medium">{founderData.mobile}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">ইমেইল:</span>
                      <p className="font-medium">{founderData.email}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">জাতীয় পরিচয়পত্র:</span>
                      <p className="font-medium">{founderData.nid}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">ঠিকানার তথ্য</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-gray-600">বর্তমান ঠিকানা:</span>
                      <p className="font-medium">{founderData.current_address_bengali}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">স্থায়ী ঠিকানা:</span>
                      <p className="font-medium">{founderData.permanent_address_bengali}</p>
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

export default Founder;