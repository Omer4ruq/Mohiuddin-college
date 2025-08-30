import React from 'react';

const ExPrincipal = () => {
  const exPrincipals = [
    {
      id: 1,
      name: 'প্রফেসর ড. আব্দুর রহমান চৌধুরী',
      englishName: 'Professor Dr. Abdur Rahman Chowdhury',
      tenure: '২০১৫ - ২০২০',
      image: 'https://img.freepik.com/premium-photo/indian-male-teacher_981168-3025.jpg?w=360',
      qualification: 'পিএইচডি (পদার্থবিজ্ঞান), ঢাকা বিশ্ববিদ্যালয়',
      achievements: [
        'শিক্ষা ক্ষেত্রে জাতীয় পুরস্কার প্রাপ্ত',
        'কলেজে নতুন বিজ্ঞান ভবন নির্মাণ',
        'শিক্ষার মান উন্নয়নে বিশেষ অবদান'
      ],
      message: 'আমার কার্যকালে আমি সর্বদা শিক্ষার মান উন্নয়ন ও শিক্ষার্থীদের সার্বিক কল্যাণে কাজ করেছি। এই প্রতিষ্ঠানের সাথে যুক্ত থাকতে পেরে আমি গর্বিত।',
      phone: '01711-123456',
      email: 'dr.rahman@gmail.com'
    },
    {
      id: 2,
      name: 'অধ্যাপক নুরুল ইসলাম',
      englishName: 'Professor Nurul Islam',
      tenure: '২০১০ - ২০১৫',
      image: 'https://media.istockphoto.com/id/678420920/photo/portrait-of-an-indian-lady-teacher.jpg?s=612x612&w=0&k=20&c=N46IVDbat0L9cZgU3lFwcP_hqufN-BRrM1RJHCZlBzc=',
      qualification: 'এমএ (বাংলা সাহিত্য), চট্টগ্রাম বিশ্ববিদ্যালয়',
      achievements: [
        'কলেজ লাইব্রেরি আধুনিকীকরণ',
        'সাংস্কৃতিক কার্যক্রম সম্প্রসারণ',
        'শিক্ষক প্রশিক্ষণ কর্মসূচি চালু'
      ],
      message: 'শিক্ষার্থীদের মানসিক ও নৈতিক বিকাশের পাশাপাশি একাডেমিক উৎকর্ষতা অর্জনে আমি সর্বদা মনোযোগী ছিলাম। এই প্রতিষ্ঠানের ঐতিহ্য রক্ষায় আমি প্রতিশ্রুতিবদ্ধ ছিলাম।',
      phone: '01711-789012',
      email: 'nurul.islam@gmail.com'
    },
    {
      id: 3,
      name: 'ড. ফাতেমা খাতুন',
      englishName: 'Dr. Fatema Khatun',
      tenure: '২০০৫ - ২০১০',
      image: 'https://img.freepik.com/free-photo/woman-teaching-classroom_23-2151696435.jpg',
      qualification: 'পিএইচডি (শিক্ষাবিজ্ঞান), জাহাঙ্গীরনগর বিশ্ববিদ্যালয়',
      achievements: [
        'মেয়েদের শিক্ষার হার বৃদ্ধিতে বিশেষ অবদান',
        'কম্পিউটার ল্যাব স্থাপন',
        'শিক্ষার্থী কাউন্সেলিং সেবা চালু'
      ],
      message: 'নারী শিক্ষার প্রসার এবং গুণগত শিক্ষা নিশ্চিত করার ক্ষেত্রে আমি বিশেষভাবে কাজ করেছি। শিক্ষার্থীদের স্বপ্ন পূরণের পথে সহায়তা করাই ছিল আমার লক্ষ্য।',
      phone: '01711-345678',
      email: 'fatema.khatun@gmail.com'
    },
    {
      id: 4,
      name: 'প্রফেসর মোহাম্মদ আলী',
      englishName: 'Professor Mohammad Ali',
      tenure: '২০০০ - ২০০৫',
      image: 'https://img.freepik.com/premium-photo/indian-male-teacher_981168-3025.jpg?w=360',
      qualification: 'এমএ (ইতিহাস), রাজশাহী বিশ্ববিদ্যালয়',
      achievements: [
        'কলেজ ভবন সম্প্রসারণ',
        'খেলাধুলা ক্ষেত্রে উন্নয়ন',
        'শিক্ষার্থী সংগঠনের উন্নতি'
      ],
      message: 'শিক্ষার পাশাপাশি শিক্ষার্থীদের শারীরিক ও মানসিক বিকাশের জন্য আমি বিভিন্ন কর্মসূচি গ্রহণ করেছিলাম। একটি আদর্শ শিক্ষা প্রতিষ্ঠান গড়ে তোলাই ছিল আমার স্বপ্ন।',
      phone: '01711-567890',
      email: 'mohammad.ali@gmail.com'
    },
    {
      id: 5,
      name: 'অধ্যাপক আনোয়ার হোসেন',
      englishName: 'Professor Anwar Hossain',
      tenure: '১৯৯৫ - ২০০০',
      image: 'https://media.istockphoto.com/id/678420920/photo/portrait-of-an-indian-lady-teacher.jpg?s=612x612&w=0&k=20&c=N46IVDbat0L9cZgU3lFwcP_hqufN-BRrM1RJHCZlBzc=',
      qualification: 'এমএসসি (রসায়ন), ঢাকা বিশ্ববিদ্যালয়',
      achievements: [
        'প্রতিষ্ঠানের প্রাথমিক অবকাঠামো উন্নয়ন',
        'শিক্ষক নিয়োগ ব্যবস্থা উন্নত করা',
        'একাডেমিক পরিকল্পনা প্রণয়ন'
      ],
      message: 'প্রতিষ্ঠানের গোড়াপত্তনের সময় থেকে আমি এর উন্নয়নে কাজ করেছি। পরবর্তী প্রজন্মের জন্য একটি মজবুত ভিত্তি তৈরি করতে পেরেছি বলে আমি সন্তুষ্ট।',
      phone: '01711-111222',
      email: 'anwar.hossain@gmail.com'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <div className="bg-white px-8 py-6 border-b">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">প্রাক্তন অধ্যক্ষগণ</h1>
        <p className="text-gray-600">Former Principals</p>
        <p className="text-sm text-gray-500 mt-2">যাঁরা এই প্রতিষ্ঠানের নেতৃত্ব দিয়ে এর উন্নতিতে অবদান রেখেছেন</p>
      </div>

      {/* Content Section */}
      <div className="px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {exPrincipals.map((principal, index) => (
            <div key={principal.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              {/* Principal Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <img
                      src={principal.image}
                      alt={principal.name}
                      className="w-32 h-40 object-cover rounded-lg"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{principal.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{principal.englishName}</p>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                          কার্যকাল: {principal.tenure}
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <p className="text-gray-700">
                        <strong>শিক্ষাগত যোগ্যতা:</strong> {principal.qualification}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievements Section */}
              <div className="p-6 border-b border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3">প্রধান অর্জনসমূহ</h4>
                <ul className="space-y-2">
                  {principal.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Message Section */}
              <div className="p-6 border-b border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3">বার্তা</h4>
                <blockquote className="text-sm text-gray-700 italic leading-relaxed">
                  "{principal.message}"
                </blockquote>
              </div>

              {/* Contact Information */}
              <div className="p-6 bg-gray-50 rounded-b-lg">
                <h4 className="font-semibold text-gray-800 mb-3">যোগাযোগের তথ্য</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <p><strong>ফোন:</strong> {principal.phone}</p>
                  </div>
                  <div>
                    <p><strong>ইমেইল:</strong> {principal.email}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Statistics */}
        {/* <div className="mt-12 bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-600 mb-6">সারসংক্ষেপ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{exPrincipals.length}</div>
              <p className="text-gray-600">জন প্রাক্তন অধ্যক্ষ</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
              <p className="text-gray-600">বছরের অভিজ্ঞতা</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <p className="text-gray-600">প্রতিশ্রুতি ও নিষ্ঠা</p>
            </div>
          </div>
        </div>

        {/* Legacy Message */}
        {/* <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">ঐতিহ্যের ধারাবাহিকতা</h2>
          <p className="text-gray-700 leading-relaxed">
            আমাদের প্রাক্তন অধ্যক্ষগণ প্রত্যেকেই তাঁদের নিজ নিজ সময়ে প্রতিষ্ঠানের উন্নতিতে অনন্য অবদান রেখেছেন। 
            তাঁদের দূরদর্শী নেতৃত্ব, শিক্ষার প্রতি নিবেদন এবং শিক্ষার্থীদের কল্যাণে নিরলস প্রচেষ্টা আজকের 
            এই প্রতিষ্ঠানের মজবুত ভিত্তি তৈরি করেছে। আমরা তাঁদের প্রতি কৃতজ্ঞ এবং তাঁদের আদর্শ অনুসরণ করে 
            এগিয়ে চলার প্রতিশ্রুতি দিই।
          </p>
        </div>  */}
      </div>
    </div>
  );
};

export default ExPrincipal;