import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const FacultyDetails = () => {
  const { faculty, subject } = useParams();
  const [activeSection, setActiveSection] = useState('message');
  const [facultyData, setFacultyData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sample faculty data - replace with your actual data source
  const facultyDatabase = {
    'science': {
      name: 'বিজ্ঞান বিভাগ',
      englishName: 'Science Department',
      head: {
        name: 'ড. মোহাম্মদ আব্দুল্লাহ',
        englishName: 'Dr. Mohammad Abdullah',
        designation: 'বিভাগীয় প্রধান',
        image: '/api/placeholder/300/400',
        message: 'বিজ্ঞান বিভাগে আপনাদের স্বাগতম। আমাদের লক্ষ্য হলো শিক্ষার্থীদের মধ্যে বৈজ্ঞানিক চিন্তাভাবনা গড়ে তোলা এবং তাদের ভবিষ্যতের জন্য প্রস্তুত করা।',
        email: 'abdullah@college.edu.bd',
        phone: '01711-123456'
      },
      teachers: [
        {
          name: 'অধ্যাপক রহিমা খাতুন',
          subject: 'পদার্থবিজ্ঞান',
          qualification: 'এমএসসি (পদার্থবিজ্ঞান)',
          experience: '15 বছর'
        },
        {
          name: 'ড. কামরুল ইসলাম',
          subject: 'রসায়ন',
          qualification: 'পিএইচডি (রসায়ন)',
          experience: '12 বছর'
        },
        {
          name: 'প্রফেসর নাসির আহমেদ',
          subject: 'জীববিজ্ঞান',
          qualification: 'এমএসসি (জীববিজ্ঞান)',
          experience: '18 বছর'
        }
      ],
      students: [
        { name: 'রাহুল আহমেদ', class: 'একাদশ শ্রেণী', gpa: '৪.৮৫' },
        { name: 'ফাতিমা খান', class: 'দ্বাদশ শ্রেণী', gpa: '৪.৯০' },
        { name: 'তানভীর হাসান', class: 'একাদশ শ্রেণী', gpa: '৪.৭৫' }
      ],
      alumni: [
        {
          name: 'ড. সাবিনা ইয়াসমিন',
          currentPosition: 'গবেষক, ঢাকা বিশ্ববিদ্যালয়',
          graduationYear: '২০১৮',
          achievement: 'জাতীয় বিজ্ঞান পুরস্কার প্রাপ্ত'
        },
        {
          name: 'ইঞ্জিনিয়ার মাহমুদুল হাসান',
          currentPosition: 'সিনিয়র ইঞ্জিনিয়ার, গুগল',
          graduationYear: '২০১৬',
          achievement: 'আন্তর্জাতিক প্রোগ্রামিং প্রতিযোগিতায় স্বর্ণপদক'
        }
      ],
      news: [
        {
          title: 'বিজ্ঞান বিভাগে নতুন ল্যাব চালু',
          date: '১৫ ডিসেম্বর, ২০২৪',
          description: 'অত্याधुনিक যন্ত্রপাতি সহ নতুন পদার্থবিজ্ঞান গবেষণাগার চালু করা হয়েছে।'
        },
        {
          title: 'আন্তর্জাতিক বিজ্ঞান মেলায় প্রথম স্থান',
          date: '১০ নভেম্বর, ২০২৪',
          description: 'আমাদের শিক্ষার্থীরা জাতীয় বিজ্ঞান মেলায় প্রথম স্থান অধিকার করেছে।'
        }
      ]
    },
    'business-studies': {
      name: 'ব্যবসায় শিক্ষা বিভাগ',
      englishName: 'Business Studies Department',
      head: {
        name: 'প্রফেসর সালমা আক্তার',
        englishName: 'Professor Salma Akter',
        designation: 'বিভাগীয় প্রধান',
        image: '/api/placeholder/300/400',
        message: 'ব্যবসায় শিক্ষা বিভাগে আপনাদের স্বাগতম। আমরা শিক্ষার্থীদের আধুনিক ব্যবসায়িক জ্ঞান ও দক্ষতায় সমৃদ্ধ করে তুলতে প্রতিশ্রুতিবদ্ধ।',
        email: 'salma@college.edu.bd',
        phone: '01711-789012'
      },
      teachers: [
        {
          name: 'অধ্যাপক আনিসুর রহমান',
          subject: 'হিসাববিজ্ঞান',
          qualification: 'এমকম (হিসাববিজ্ঞান)',
          experience: '20 বছর'
        },
        {
          name: 'ড. রেজাউল করিম',
          subject: 'ব্যবস্থাপনা',
          qualification: 'পিএইচডি (ব্যবস্থাপনা)',
          experience: '14 বছর'
        }
      ],
      students: [
        { name: 'আয়েশা সিদ্দিকা', class: 'একাদশ শ্রেণী', gpa: '৪.৬৫' },
        { name: 'মোস্তাফিজুর রহমান', class: 'দ্বাদশ শ্রেণী', gpa: '৪.৮০' }
      ],
      alumni: [
        {
          name: 'সিএ নাজমুল হাসান',
          currentPosition: 'চার্টার্ড একাউন্ট্যান্ট',
          graduationYear: '২০১৭',
          achievement: 'বাংলাদেশ ব্যাংকের অডিটর'
        }
      ],
      news: [
        {
          title: 'ব্যবসায়িক পরিকল্পনা প্রতিযোগিতা',
          date: '২০ ডিসেম্বর, ২০২৪',
          description: 'বিভাগীয় ব্যবসায়িক পরিকল্পনা প্রতিযোগিতার আয়োজন করা হচ্ছে।'
        }
      ]
    },
    'humanities': {
      name: 'মানবিক বিভাগ',
      englishName: 'Humanities Department',
      head: {
        name: 'ড. মাহবুবা রহমান',
        englishName: 'Dr. Mahbuba Rahman',
        designation: 'বিভাগীয় প্রধান',
        image: '/api/placeholder/300/400',
        message: 'মানবিক বিভাগে আপনাদের স্বাগতম। আমাদের উদ্দেশ্য হলো শিক্ষার্থীদের মানবিক মূল্যবোধ ও সাংস্কৃতিক ঐতিহ্য সম্পর্কে সচেতন করে তোলা।',
        email: 'mahbuba@college.edu.bd',
        phone: '01711-345678'
      },
      teachers: [
        {
          name: 'প্রফেসর আবদুল মান্নান',
          subject: 'বাংলা',
          qualification: 'এমএ (বাংলা সাহিত্য)',
          experience: '25 বছর'
        },
        {
          name: 'অধ্যাপকা রোকেয়া খাতুন',
          subject: 'ইতিহাস',
          qualification: 'এমএ (ইতিহাস)',
          experience: '16 বছর'
        }
      ],
      students: [
        { name: 'নুসরাত জাহান', class: 'দ্বাদশ শ্রেণী', gpa: '৪.৯৫' },
        { name: 'আরিফুল ইসলাম', class: 'একাদশ শ্রেণী', gpa: '৪.৭০' }
      ],
      alumni: [
        {
          name: 'ড. ফরিদা পারভীন',
          currentPosition: 'সহযোগী অধ্যাপক, জাহাঙ্গীরনগর বিশ্ববিদ্যালয়',
          graduationYear: '২০১৫',
          achievement: 'বাংলা সাহিত্যে গবেষণা পুরস্কার প্রাপ্ত'
        }
      ],
      news: [
        {
          title: 'সাহিত্য উৎসব ২০২৪',
          date: '২৫ ডিসেম্বর, ২০২৪',
          description: 'বার্ষিক সাহিত্য উৎসবের আয়োজন করা হবে।'
        }
      ]
    }
  };

  useEffect(() => {
    const data = facultyDatabase[subject] || facultyDatabase['science'];
    setTimeout(() => {
      setFacultyData(data);
      setLoading(false);
    }, 500);
  }, [subject]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!facultyData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">বিভাগ খুঁজে পাওয়া যায়নি</h2>
          <p className="text-gray-600">অনুরোধকৃত বিভাগের তথ্য পাওয়া যায়নি।</p>
        </div>
      </div>
    );
  }

  const sections = [
    { id: 'message', label: 'বিভাগীয় প্রধানের বার্তা' },
    { id: 'about', label: 'আমাদের সম্পর্কে' },
    { id: 'academics', label: 'শিক্ষা কার্যক্রম' },
    { id: 'teachers', label: 'শিক্ষকমণ্ডলী' },
    { id: 'students', label: 'শিক্ষার্থী তথ্য' },
    { id: 'alumni', label: 'প্রাক্তন শিক্ষার্থী' },
    { id: 'news', label: 'সংবাদ ও ইভেন্ট' },
    { id: 'contacts', label: 'যোগাযোগ' }
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
                className="text-gray-400 hover:text-gray-600 text-xl"
              >
                ✕
              </button>
            </div>

            {/* Faculty Title */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-800">{facultyData.name}</h2>
              <p className="text-sm text-gray-600">{facultyData.englishName}</p>
            </div>

            {/* Navigation Menu */}
            <div className="space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleSectionClick(section.id)}
                  className={`w-full text-left px-4 py-3 text-sm rounded transition-colors ${
                    activeSection === section.id
                      ? 'bg-blue-600 text-white font-medium'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
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
          <div className="bg-white px-8 py-6 border-b">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{facultyData.name}</h1>
            <p className="text-gray-600">{facultyData.englishName}</p>
          </div>

          {/* Content Sections */}
          <div className="px-8 py-6">
            
            {/* Department Head Message Section */}
            <div id="message" className="bg-white rounded-lg p-6 shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-blue-600 mb-6">বিভাগীয় প্রধানের বার্তা</h2>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <img
                    src={facultyData.head.image}
                    alt={facultyData.head.name}
                    className="w-48 h-60 object-cover rounded-lg"
                  />
                  <div className="mt-4 text-center">
                    <h3 className="font-semibold text-gray-800">{facultyData.head.name}</h3>
                    <p className="text-sm text-gray-600">{facultyData.head.designation}</p>
                    <Link 
                      to={`/faculty/head/${subject}`}
                      className="inline-block mt-2 bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors"
                    >
                      বিস্তারিত প্রোফাইল
                    </Link>
                  </div>
                </div>
                
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed text-justify">
                    {facultyData.head.message}
                  </p>
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong>ইমেইল:</strong> {facultyData.head.email}<br/>
                      <strong>ফোন:</strong> {facultyData.head.phone}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div id="about" className="bg-white rounded-lg p-6 shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-blue-600 mb-6">আমাদের সম্পর্কে</h2>
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {facultyData.name} আমাদের প্রতিষ্ঠানের একটি অগ্রণী বিভাগ। এই বিভাগে উন্নত শিক্ষা ব্যবস্থা ও আধুনিক পাঠ্যক্রমের মাধ্যমে 
                  শিক্ষার্থীদের ভবিষ্যতের জন্য প্রস্তুত করা হয়।
                </p>
                <p className="text-gray-700 leading-relaxed">
                  আমাদের অভিজ্ঞ শিক্ষকমণ্ডলী ও আধুনিক সুবিধাসহ আমরা মানসম্পন্ন শিক্ষা প্রদানে প্রতিশ্রুতিবদ্ধ।
                </p>
              </div>
            </div>

            {/* Academics Section */}
            <div id="academics" className="bg-white rounded-lg p-6 shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-blue-600 mb-6">শিক্ষা কার্যক্রম</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">একাদশ শ্রেণী</h4>
                  <p className="text-sm text-gray-600">মূল বিষয়সমূহে ভিত্তিমূলক শিক্ষা</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">দ্বাদশ শ্রেণী</h4>
                  <p className="text-sm text-gray-600">উন্নত পর্যায়ের শিক্ষা ও পরীক্ষার প্রস্তুতি</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">অনার্স কোর্স</h4>
                  <p className="text-sm text-gray-600">বিশেষায়িত শিক্ষা ও গবেষণা</p>
                </div>
              </div>
            </div>

            {/* Teachers Section */}
            <div id="teachers" className="bg-white rounded-lg p-6 shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-blue-600 mb-6">শিক্ষকমণ্ডলী</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {facultyData.teachers.map((teacher, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">{teacher.name}</h4>
                    <p className="text-sm text-gray-600 mb-1"><strong>বিষয়:</strong> {teacher.subject}</p>
                    <p className="text-sm text-gray-600 mb-1"><strong>যোগ্যতা:</strong> {teacher.qualification}</p>
                    <p className="text-sm text-gray-600"><strong>অভিজ্ঞতা:</strong> {teacher.experience}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Students Section */}
            <div id="students" className="bg-white rounded-lg p-6 shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-blue-600 mb-6">মেধাবী শিক্ষার্থী</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">নাম</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">শ্রেণী</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">জিপিএ</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {facultyData.students.map((student, index) => (
                      <tr key={index}>
                        <td className="px-4 py-4 text-sm text-gray-900">{student.name}</td>
                        <td className="px-4 py-4 text-sm text-gray-500">{student.class}</td>
                        <td className="px-4 py-4 text-sm text-gray-500">{student.gpa}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Alumni Section */}
            <div id="alumni" className="bg-white rounded-lg p-6 shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-blue-600 mb-6">গর্বিত প্রাক্তন শিক্ষার্থী</h2>
              <div className="space-y-6">
                {facultyData.alumni.map((alumnus, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">{alumnus.name}</h4>
                    <p className="text-sm text-gray-600 mb-1"><strong>বর্তমান পদ:</strong> {alumnus.currentPosition}</p>
                    <p className="text-sm text-gray-600 mb-1"><strong>উত্তীর্ণ:</strong> {alumnus.graduationYear}</p>
                    <p className="text-sm text-gray-600"><strong>অর্জন:</strong> {alumnus.achievement}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* News & Events Section */}
            <div id="news" className="bg-white rounded-lg p-6 shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-blue-600 mb-6">সংবাদ ও ইভেন্ট</h2>
              <div className="space-y-4">
                {facultyData.news.map((newsItem, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-800 mb-1">{newsItem.title}</h4>
                    <p className="text-xs text-gray-500 mb-2">{newsItem.date}</p>
                    <p className="text-sm text-gray-700">{newsItem.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contacts Section */}
            <div id="contacts" className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-blue-600 mb-6">যোগাযোগ</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">বিভাগীয় অফিস</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>ঠিকানা:</strong> কলেজ ভবন, ২য় তলা</p>
                    <p><strong>ফোন:</strong> {facultyData.head.phone}</p>
                    <p><strong>ইমেইল:</strong> {facultyData.head.email}</p>
                    <p><strong>অফিস সময়:</strong> সকাল ৯:০০ - বিকাল ৫:০০</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">বিভাগীয় প্রধান</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>নাম:</strong> {facultyData.head.name}</p>
                    <p><strong>পদবী:</strong> {facultyData.head.designation}</p>
                    <p><strong>সাক্ষাৎ সময়:</strong> রবি-বৃহস্পতিবার, ২:০০-৪:০০ অপরাহ্ন</p>
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

export default FacultyDetails;