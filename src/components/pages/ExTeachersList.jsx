import React, { useState, useEffect } from 'react';
import { FaUser, FaGraduationCap, FaPhone, FaEnvelope, FaCalendarAlt, FaSearch, FaEye, FaHistory } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import staffData from '../../../src/data/staffData';

const ExTeachersList = () => {
  const [exTeachers, setExTeachers] = useState([]);
  const [filteredTeachers, setFilteredTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setExTeachers(staffData.ex_teachers);
      setFilteredTeachers(staffData.ex_teachers);
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    let filtered = exTeachers;
    
    if (searchTerm) {
      filtered = filtered.filter(teacher => 
        teacher.name_english.toLowerCase().includes(searchTerm.toLowerCase()) ||
        teacher.name_bengali.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (teacher.subject_english && teacher.subject_english.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    if (selectedDepartment) {
      filtered = filtered.filter(teacher => 
        teacher.subject_english === selectedDepartment
      );
    }
    
    setFilteredTeachers(filtered);
  }, [searchTerm, selectedDepartment, exTeachers]);

  // Get unique departments
  const departments = [...new Set(exTeachers.map(teacher => teacher.subject_english).filter(Boolean))];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen  py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-[#1e3a8a] to-[#061742] rounded-2xl shadow-xl p-8 mb-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaHistory className="text-3xl text-orange-600" />
              <h1 className="text-4xl font-bold text-white">Former Faculty Members</h1>
            </div>
            <p className="text-lg text-white max-w-3xl mx-auto">
              Honoring our former faculty members who have contributed significantly to our institution's 
              academic excellence and helped shape countless students' futures.
            </p>
            <div className="mt-6 bg-gradient-to-r from-orange-600 to-red-600 rounded-full px-6 py-3 inline-block">
              <span className="text-white font-semibold text-lg">
                Former Faculty: {exTeachers.length} Members
              </span>
            </div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name or subject..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <div className="md:w-64">
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="">All Subjects</option>
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
          </div>
          {searchTerm || selectedDepartment ? (
            <div className="mt-4 text-sm text-gray-600">
              Showing {filteredTeachers.length} of {exTeachers.length} former faculty members
            </div>
          ) : null}
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTeachers.map((teacher) => (
            <div key={teacher.serial} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-orange-500">
              {/* Profile Image */}
              <div className="bg-gradient-to-br from-orange-500 to-red-600 h-32 flex items-center justify-center relative">
                <div className="absolute top-2 right-2 bg-white bg-opacity-20 rounded-full p-2">
                  <FaHistory className="text-white text-sm" />
                </div>
                {teacher.image_url ? (
                  <img
                    src={teacher.image_url}
                    alt={teacher.name_english}
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                ) : (
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                    <FaUser className="text-3xl text-gray-400" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-1">{teacher.name_english}</h3>
                <p className="text-sm text-gray-600 mb-3">{teacher.name_bengali}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <FaGraduationCap className="text-orange-500 text-sm" />
                    <span className="text-sm font-semibold text-orange-600">{teacher.title_english}</span>
                  </div>
                  
                  {teacher.subject_english && (
                    <div className="bg-orange-50 rounded-full px-3 py-1">
                      <span className="text-xs font-medium text-orange-700">{teacher.subject_english}</span>
                    </div>
                  )}
                </div>

                {/* Quick Info */}
                <div className="space-y-2 text-xs text-gray-600">
                  {teacher.mobile && (
                    <div className="flex items-center gap-2">
                      <FaPhone className="text-green-500" />
                      <span>{teacher.mobile}</span>
                    </div>
                  )}
                  
                  {teacher.email && (
                    <div className="flex items-center gap-2">
                      <FaEnvelope className="text-red-500" />
                      <span className="truncate">{teacher.email}</span>
                    </div>
                  )}
                  
                  {teacher.qualification_english && (
                    <div className="flex items-start gap-2">
                      <FaGraduationCap className="text-purple-500 mt-0.5" />
                      <span className="line-clamp-2">{teacher.qualification_english}</span>
                    </div>
                  )}
                  
                  {teacher.first_join_date_english && (
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-blue-500" />
                      <span>Joined {teacher.first_join_date_english}</span>
                    </div>
                  )}

                  {teacher.salary_scale_english && (
                    <div className="flex items-center gap-2">
                      <span className="text-green-600 font-semibold">Salary: {teacher.salary_scale_english}</span>
                    </div>
                  )}
                </div>

                {/* Service Period Badge */}
                <div className="mt-4 flex justify-between items-center">
                  {teacher.first_join_date_english ? (
                    <div className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium">
                      Former Faculty
                    </div>
                  ) : (
                    <div className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium">
                      Ex-Faculty
                    </div>
                  )}
                  
                  <Link
                    to={`/faculty/ex-teacher/${teacher.serial}`}
                    className="bg-orange-600 hover:bg-orange-700 text-white px-3 py-1 rounded-full text-xs font-medium transition-colors duration-200 flex items-center gap-1"
                  >
                    <FaEye className="text-xs" />
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredTeachers.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <FaSearch className="text-4xl text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No Former Faculty Found</h3>
              <p className="text-gray-500">
                Try adjusting your search criteria or clear the filters to see all former faculty members.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedDepartment('');
                }}
                className="mt-4 bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
              >
                Clear Filters
              </button>
            </div>
          </div>
        )}

        {/* Statistics Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-2xl font-bold text-orange-600 mb-2">{exTeachers.length}</div>
            <div className="text-sm text-gray-600">Former Faculty</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-2xl font-bold text-red-600 mb-2">{departments.length}</div>
            <div className="text-sm text-gray-600">Subjects Taught</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-2xl font-bold text-purple-600 mb-2">
              {exTeachers.filter(t => t.title_english?.includes('Professor')).length}
            </div>
            <div className="text-sm text-gray-600">Former Professors</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-2xl font-bold text-blue-600 mb-2">
              {exTeachers.filter(t => t.title_english?.includes('Lecturer')).length}
            </div>
            <div className="text-sm text-gray-600">Former Lecturers</div>
          </div>
        </div>

        {/* Legacy Note */}
        <div className="mt-12 bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl p-8 text-center">
          <FaHistory className="text-4xl text-orange-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-800 mb-3">Our Academic Legacy</h3>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We honor and remember all our former faculty members who have contributed to the growth and 
            success of our institution. Their dedication, expertise, and commitment to education continue 
            to inspire us and shape our academic community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExTeachersList;