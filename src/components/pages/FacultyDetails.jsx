import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const FacultyDetails = () => {
  const { faculty, subject } = useParams();
  const [activeSection, setActiveSection] = useState('message');
  const [facultyData, setFacultyData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Enhanced faculty data with more teachers and subjects
  const facultyDatabase = {
    'science': {
      name: 'বিজ্ঞান বিভাগ',
      englishName: 'Science Department',
      head: {
        name: 'ড. মোহাম্মদ আব্দুল্লাহ',
        englishName: 'Dr. Mohammad Abdullah',
        designation: 'বিভাগীয় প্রধান',
        image: 'https://img.freepik.com/premium-photo/indian-male-teacher_981168-3025.jpg?w=360',
        message: 'বিজ্ঞান বিভাগে আপনাদের স্বাগতম। আমাদের লক্ষ্য হলো শিক্ষার্থীদের মধ্যে বৈজ্ঞানিক চিন্তাভাবনা গড়ে তোলা এবং তাদের ভবিষ্যতের জন্য প্রস্তুত করা। আমরা আধুনিক পরীক্ষাগার ও যন্ত্রপাতি দিয়ে সজ্জিত এবং অভিজ্ঞ শিক্ষকমণ্ডলীর মাধ্যমে মানসম্পন্ন শিক্ষা প্রদান করে থাকি।',
        email: 'abdullah@college.edu.bd',
        phone: '01711-123456'
      },
      subjects: [
        { name: 'পদার্থবিজ্ঞান', code: 'PHY', description: 'প্রাকৃতিক বিজ্ঞানের মৌলিক নীতিমালা অধ্যয়ন' },
        { name: 'রসায়ন', code: 'CHE', description: 'রাসায়নিক পদার্থ ও বিক্রিয়ার বিশ্লেষণ' },
        { name: 'জীববিজ্ঞান', code: 'BIO', description: 'জীবজগতের গঠন ও কার্যাবলী অধ্যয়ন' },
        { name: 'গণিত', code: 'MAT', description: 'সংখ্যা, আকার ও প্যাটার্নের বিজ্ঞান' },
        { name: 'পরিসংখ্যান', code: 'STA', description: 'তথ্য সংগ্রহ, বিশ্লেষণ ও ব্যাখ্যা' },
        { name: 'ভূগোল', code: 'GEO', description: 'পৃথিবীর ভৌত ও মানবিক বৈশিষ্ট্য' }
      ],
      teachers: [
        {
          name: 'অধ্যাপক রহিমা খাতুন',
          subject: 'পদার্থবিজ্ঞান',
          qualification: 'এমএসসি (পদার্থবিজ্ঞান), ঢাকা বিশ্ববিদ্যালয়',
          experience: '15 বছর',
          specialization: 'কোয়ান্টাম ফিজিক্স',
          image: 'https://img.freepik.com/free-photo/woman-teaching-classroom_23-2151696435.jpg'
        },
        {
          name: 'ড. কামরুল ইসলাম',
          subject: 'রসায়ন',
          qualification: 'পিএইচডি (রসায়ন), চট্টগ্রাম বিশ্ববিদ্যালয়',
          experience: '12 বছর',
          specialization: 'জৈব রসায়ন',
          image: 'https://img.freepik.com/premium-photo/indian-male-teacher_981168-3025.jpg?w=360'
        },
        {
          name: 'প্রফেসর নাসির আহমেদ',
          subject: 'জীববিজ্ঞান',
          qualification: 'এমএসসি (জীববিজ্ঞান), রাজশাহী বিশ্ববিদ্যালয়',
          experience: '18 বছর',
          specialization: 'উদ্ভিদ জীববিজ্ঞান',
          image: 'https://media.istockphoto.com/id/678420920/photo/portrait-of-an-indian-lady-teacher.jpg?s=612x612&w=0&k=20&c=N46IVDbat0L9cZgU3lFwcP_hqufN-BRrM1RJHCZlBzc='
        },
        {
          name: 'অধ্যাপকা সুমিত্রা দাস',
          subject: 'গণিত',
          qualification: 'এমএসসি (গণিত), জাহাঙ্গীরনগর বিশ্ববিদ্যালয়',
          experience: '14 বছর',
          specialization: 'পরিমিত গণিত',
          image: 'https://img.freepik.com/free-photo/woman-teaching-classroom_23-2151696435.jpg'
        },
        {
          name: 'ড. আব্দুর রশিদ',
          subject: 'পরিসংখ্যান',
          qualification: 'পিএইচডি (পরিসংখ্যান), ঢাকা বিশ্ববিদ্যালয়',
          experience: '16 বছর',
          specialization: 'প্রয়োগিক পরিসংখ্যান',
          image: 'https://img.freepik.com/premium-photo/indian-male-teacher_981168-3025.jpg?w=360'
        },
        {
          name: 'প্রফেসর মারিয়া খান',
          subject: 'ভূগোল',
          qualification: 'এমএ (ভূগোল), ঢাকা বিশ্ববিদ্যালয়',
          experience: '13 বছর',
          specialization: 'মানব ভূগোল',
          image: 'https://media.istockphoto.com/id/678420920/photo/portrait-of-an-indian-lady-teacher.jpg?s=612x612&w=0&k=20&c=N46IVDbat0L9cZgU3lFwcP_hqufN-BRrM1RJHCZlBzc='
        }
      ],
      students: [
        { name: 'রাহুল আহমেদ', class: 'একাদশ শ্রেণী', gpa: '৪.৮৫', subject: 'পদার্থবিজ্ঞান' },
        { name: 'ফাতিমা খান', class: 'দ্বাদশ শ্রেণী', gpa: '৪.৯০', subject: 'রসায়ন' },
        { name: 'তানভীর হাসান', class: 'একাদশ শ্রেণী', gpa: '৪.৭৫', subject: 'জীববিজ্ঞান' },
        { name: 'আয়েশা সিদ্দিকা', class: 'দ্বাদশ শ্রেণী', gpa: '৪.৮৮', subject: 'গণিত' },
        { name: 'মোহাম্মদ রফিক', class: 'একাদশ শ্রেণী', gpa: '৪.৭২', subject: 'পরিসংখ্যান' }
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
          currentPosition: 'সিনিয়ার ইঞ্জিনিয়ার, গুগল',
          graduationYear: '২০১৬',
          achievement: 'আন্তর্জাতিক প্রোগ্রামিং প্রতিযোগিতায় স্বর্ণপদক'
        }
      ],
      news: [
        {
          title: 'বিজ্ঞান বিভাগে নতুন ল্যাব চালু',
          date: '১৫ ডিসেম্বর, ২০২৪',
          description: 'অত্যাধুনিক যন্ত্রপাতি সহ নতুন পদার্থবিজ্ঞান গবেষণাগার চালু করা হয়েছে।'
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
        image: 'https://img.freepik.com/free-photo/woman-teaching-classroom_23-2151696435.jpg',
        message: 'ব্যবসায় শিক্ষা বিভাগে আপনাদের স্বাগতম। আমরা শিক্ষার্থীদের আধুনিক ব্যবসায়িক জ্ঞান ও দক্ষতায় সমৃদ্ধ করে তুলতে প্রতিশ্রুতিবদ্ধ। আমাদের বিভাগ থেকে প্রতি বছর দক্ষ ব্যবসায়িক নেতৃত্ব তৈরি হয়ে দেশ ও জাতির সেবায় নিয়োজিত হচ্ছেন।',
        email: 'salma@college.edu.bd',
        phone: '01711-789012'
      },
      subjects: [
        { name: 'হিসাববিজ্ঞান', code: 'ACC', description: 'আর্থিক লেনদেন ও হিসাব নিকাশের বিজ্ঞান' },
        { name: 'ব্যবস্থাপনা', code: 'MGT', description: 'সংগঠন পরিচালনা ও নেতৃত্বের কলাকৌশল' },
        { name: 'অর্থনীতি', code: 'ECO', description: 'অর্থনৈতিক নীতিমালা ও বাজার বিশ্লেষণ' },
        { name: 'বিপণন', code: 'MKT', description: 'পণ্য ও সেবার বিপণন কৌশল' },
        { name: 'ব্যাংকিং', code: 'BNK', description: 'আর্থিক প্রতিষ্ঠান ও ব্যাংকিং সেবা' },
        { name: 'বীমা', code: 'INS', description: 'ঝুঁকি ব্যবস্থাপনা ও বীমা নীতিমালা' }
      ],
      teachers: [
        {
          name: 'অধ্যাপক আনিসুর রহমান',
          subject: 'হিসাববিজ্ঞান',
          qualification: 'এমকম (হিসাববিজ্ঞান), ঢাকা বিশ্ববিদ্যালয়',
          experience: '20 বছর',
          specialization: 'ব্যবস্থাপনা হিসাববিজ্ঞান',
          image: 'https://img.freepik.com/premium-photo/indian-male-teacher_981168-3025.jpg?w=360'
        },
        {
          name: 'ড. রেজাউল করিম',
          subject: 'ব্যবস্থাপনা',
          qualification: 'পিএইচডি (ব্যবস্থাপনা), চট্টগ্রাম বিশ্ববিদ্যালয়',
          experience: '14 বছর',
          specialization: 'মানবসম্পদ ব্যবস্থাপনা',
          image: 'https://media.istockphoto.com/id/678420920/photo/portrait-of-an-indian-lady-teacher.jpg?s=612x612&w=0&k=20&c=N46IVDbat0L9cZgU3lFwcP_hqufN-BRrM1RJHCZlBzc='
        },
        {
          name: 'প্রফেসর নাজিয়া খাতুন',
          subject: 'অর্থনীতি',
          qualification: 'এমএ (অর্থনীতি), জাহাঙ্গীরনগর বিশ্ববিদ্যালয়',
          experience: '17 বছর',
          specialization: 'উন্নয়ন অর্থনীতি',
          image: 'https://img.freepik.com/free-photo/woman-teaching-classroom_23-2151696435.jpg'
        },
        {
          name: 'অধ্যাপক মোহাম্মদ করিম',
          subject: 'বিপণন',
          qualification: 'এমবিএ (বিপণন), ঢাকা বিশ্ববিদ্যালয়',
          experience: '12 বছর',
          specialization: 'ডিজিটাল মার্কেটিং',
          image: 'https://img.freepik.com/premium-photo/indian-male-teacher_981168-3025.jpg?w=360'
        },
        {
          name: 'অধ্যাপকা ফারজানা আক্তার',
          subject: 'ব্যাংকিং',
          qualification: 'এমবিএ (ব্যাংকিং), রাজশাহী বিশ্ববিদ্যালয়',
          experience: '15 বছর',
          specialization: 'ইসলামিক ব্যাংকিং',
          image: 'https://media.istockphoto.com/id/678420920/photo/portrait-of-an-indian-lady-teacher.jpg?s=612x612&w=0&k=20&c=N46IVDbat0L9cZgU3lFwcP_hqufN-BRrM1RJHCZlBzc='
        },
        {
          name: 'প্রফেসর আলী হাসান',
          subject: 'বীমা',
          qualification: 'এমকম (বীমা), চট্টগ্রাম বিশ্ববিদ্যালয়',
          experience: '11 বছর',
          specialization: 'জীবন বীমা',
          image: 'https://img.freepik.com/premium-photo/indian-male-teacher_981168-3025.jpg?w=360'
        }
      ],
      students: [
        { name: 'আয়েশা সিদ্দিকা', class: 'একাদশ শ্রেণী', gpa: '৪.৬৫', subject: 'হিসাববিজ্ঞান' },
        { name: 'মোস্তাফিজুর রহমান', class: 'দ্বাদশ শ্রেণী', gpa: '৪.৮০', subject: 'ব্যবস্থাপনা' },
        { name: 'সাদিয়া খান', class: 'একাদশ শ্রেণী', gpa: '৪.৭৮', subject: 'অর্থনীতি' },
        { name: 'রাকিব হাসান', class: 'দ্বাদশ শ্রেণী', gpa: '৪.৬৮', subject: 'বিপণন' },
        { name: 'নুসরাত জাহান', class: 'একাদশ শ্রেণী', gpa: '৪.৭২', subject: 'ব্যাংকিং' }
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
        image: 'https://media.istockphoto.com/id/678420920/photo/portrait-of-an-indian-lady-teacher.jpg?s=612x612&w=0&k=20&c=N46IVDbat0L9cZgU3lFwcP_hqufN-BRrM1RJHCZlBzc=',
        message: 'মানবিক বিভাগে আপনাদের স্বাগতম। আমাদের উদ্দেশ্য হলো শিক্ষার্থীদের মানবিক মূল্যবোধ ও সাংস্কৃতিক ঐতিহ্য সম্পর্কে সচেতন করে তোলা। আমরা ভাষা, সাহিত্য, ইতিহাস ও দর্শনের মাধ্যমে একটি সুশিক্ষিত ও মানবিক সমাজ গড়ার স্বপ্ন দেখি।',
        email: 'mahbuba@college.edu.bd',
        phone: '01711-345678'
      },
      subjects: [
        { name: 'বাংলা', code: 'BAN', description: 'বাংলা ভাষা ও সাহিত্যের পূর্ণাঙ্গ অধ্যয়ন' },
        { name: 'ইংরেজি', code: 'ENG', description: 'ইংরেজি ভাষা ও বিশ্ব সাহিত্য' },
        { name: 'ইতিহাস', code: 'HIS', description: 'বিশ্ব ও বাংলাদেশের ইতিহাস' },
        { name: 'দর্শন', code: 'PHI', description: 'মানব চিন্তাধারা ও দর্শনের বিকাশ' },
        { name: 'ইসলামের ইতিহাস', code: 'IHC', description: 'ইসলামি সভ্যতা ও সংস্কৃতি' },
        { name: 'সমাজবিজ্ঞান', code: 'SOC', description: 'সামাজিক গঠন ও আচার-আচরণ বিশ্লেষণ' },
        { name: 'রাষ্ট্রবিজ্ঞান', code: 'POL', description: 'রাজনৈতিক ব্যবস্থা ও শাসন তত্ত্ব' }
      ],
      teachers: [
        {
          name: 'প্রফেসর আবদুল মান্নান',
          subject: 'বাংলা',
          qualification: 'এমএ (বাংলা সাহিত্য), ঢাকা বিশ্ববিদ্যালয়',
          experience: '25 বছর',
          specialization: 'রবীন্দ্র সাহিত্য',
          image: 'https://img.freepik.com/premium-photo/indian-male-teacher_981168-3025.jpg?w=360'
        },
        {
          name: 'অধ্যাপকা রোকেয়া খাতুন',
          subject: 'ইতিহাস',
          qualification: 'এমএ (ইতিহাস), জাহাঙ্গীরনগর বিশ্ববিদ্যালয়',
          experience: '16 বছর',
          specialization: 'মুক্তিযুদ্ধের ইতিহাস',
          image: 'https://media.istockphoto.com/id/678420920/photo/portrait-of-an-indian-lady-teacher.jpg?s=612x612&w=0&k=20&c=N46IVDbat0L9cZgU3lFwcP_hqufN-BRrM1RJHCZlBzc='
        },
        {
          name: 'ড. শাহজাহান আলী',
          subject: 'ইংরেজি',
          qualification: 'পিএইচডি (ইংরেজি সাহিত্য), রাজশাহী বিশ্ববিদ্যালয়',
          experience: '18 বছর',
          specialization: 'শেক্সপিয়ার স্টাডিজ',
          image: 'https://img.freepik.com/premium-photo/indian-male-teacher_981168-3025.jpg?w=360'
        },
        {
          name: 'প্রফেসর নুরুল আমিন',
          subject: 'দর্শন',
          qualification: 'এমএ (দর্শন), চট্টগ্রাম বিশ্ববিদ্যালয়',
          experience: '22 বছর',
          specialization: 'ইসলামি দর্শন',
          image: 'https://img.freepik.com/premium-photo/indian-male-teacher_981168-3025.jpg?w=360'
        },
        {
          name: 'অধ্যাপকা সুফিয়া বেগম',
          subject: 'ইসলামের ইতিহাস',
          qualification: 'এমএ (ইসলামের ইতিহাস), ঢাকা বিশ্ববিদ্যালয়',
          experience: '19 বছর',
          specialization: 'মধ্যযুগীয় ইসলামি সভ্যতা',
          image: 'https://img.freepik.com/free-photo/woman-teaching-classroom_23-2151696435.jpg'
        },
        {
          name: 'ড. মনিরুজ্জামান',
          subject: 'সমাজবিজ্ঞান',
          qualification: 'পিএইচডি (সমাজবিজ্ঞান), জাহাঙ্গীরনগর বিশ্ববিদ্যালয়',
          experience: '14 বছর',
          specialization: 'গ্রামীণ সমাজব্যবস্থা',
          image: 'https://img.freepik.com/premium-photo/indian-male-teacher_981168-3025.jpg?w=360'
        },
        {
          name: 'প্রফেসর ফাহমিদা খাতুন',
          subject: 'রাষ্ট্রবিজ্ঞান',
          qualification: 'এমএসএস (রাষ্ট্রবিজ্ঞান), রাজশাহী বিশ্ববিদ্যালয়',
          experience: '13 বছর',
          specialization: 'তুলনামূলক রাজনীতি',
          image: 'https://media.istockphoto.com/id/678420920/photo/portrait-of-an-indian-lady-teacher.jpg?s=612x612&w=0&k=20&c=N46IVDbat0L9cZgU3lFwcP_hqufN-BRrM1RJHCZlBzc='
        }
      ],
      students: [
        { name: 'নুসরাত জাহান', class: 'দ্বাদশ শ্রেণী', gpa: '৪.৯৫', subject: 'বাংলা' },
        { name: 'আরিফুল ইসলাম', class: 'একাদশ শ্রেণী', gpa: '৪.৭০', subject: 'ইতিহাস' },
        { name: 'তাহমিনা আক্তার', class: 'দ্বাদশ শ্রেণী', gpa: '৪.৮২', subject: 'ইংরেজি' },
        { name: 'আব্দুল্লাহ আল মামুন', class: 'একাদশ শ্রেণী', gpa: '৪.৬৮', subject: 'দর্শন' },
        { name: 'সাইদা খাতুন', class: 'দ্বাদশ শ্রেণী', gpa: 'ৄ.৭৮', subject: 'সমাজবিজ্ঞান' }
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
    { id: 'subjects', label: 'বিষয়সমূহ' },
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

            {/* Subjects Section */}
            <div id="subjects" className="bg-white rounded-lg p-6 shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-blue-600 mb-6">বিষয়সমূহ</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {facultyData.subjects.map((subject, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-800">{subject.name}</h4>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">{subject.code}</span>
                    </div>
                    <p className="text-sm text-gray-600">{subject.description}</p>
                  </div>
                ))}
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {facultyData.teachers.map((teacher, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex flex-col items-center mb-4">
                      <img
                        src={teacher.image}
                        alt={teacher.name}
                        className="w-20 h-20 object-cover rounded-full mb-3"
                      />
                      <h4 className="font-semibold text-gray-800 text-center">{teacher.name}</h4>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600"><strong>বিষয়:</strong> {teacher.subject}</p>
                      <p className="text-sm text-gray-600"><strong>যোগ্যতা:</strong> {teacher.qualification}</p>
                      <p className="text-sm text-gray-600"><strong>অভিজ্ঞতা:</strong> {teacher.experience}</p>
                      <p className="text-sm text-gray-600"><strong>বিশেষত্ব:</strong> {teacher.specialization}</p>
                    </div>
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
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">বিষয়</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">জিপিএ</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {facultyData.students.map((student, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-4 py-4 text-sm text-gray-900">{student.name}</td>
                        <td className="px-4 py-4 text-sm text-gray-500">{student.class}</td>
                        <td className="px-4 py-4 text-sm text-gray-500">{student.subject}</td>
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