import React, { useState, useEffect } from 'react';
import { FaUser, FaGraduationCap, FaPhone, FaEnvelope, FaCalendarAlt, FaSearch, FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import staffData from '../../../src/data/staffData';

const TeachersList = () => {
  const [teachers, setTeachers] = useState([]);
  const [filteredTeachers, setFilteredTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setTeachers(staffData.current_teachers);
      setFilteredTeachers(staffData.current_teachers);
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    let filtered = teachers;
    
    if (searchTerm) {
      filtered = filtered.filter(teacher => 
        teacher.name_english.toLowerCase().includes(searchTerm.toLowerCase()) ||
        teacher.name_bengali.toLowerCase().includes(searchTerm.toLowerCase()) ||
        teacher.subject_english.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedDepartment) {
      filtered = filtered.filter(teacher => 
        teacher.subject_english === selectedDepartment
      );
    }
    
    setFilteredTeachers(filtered);
  }, [searchTerm, selectedDepartment, teachers]);

  // Get unique departments
  const departments = [...new Set(teachers.map(teacher => teacher.subject_english).filter(Boolean))];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Faculty Members</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet our dedicated and experienced faculty members who are committed to providing quality education 
              and shaping the future of our students.
            </p>
            <div className="mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full px-6 py-3 inline-block">
              <span className="text-white font-semibold text-lg">
                Total Faculty: {teachers.length} Members
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
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="md:w-64">
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Departments</option>
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
          </div>
          {searchTerm || selectedDepartment ? (
            <div className="mt-4 text-sm text-gray-600">
              Showing {filteredTeachers.length} of {teachers.length} teachers
            </div>
          ) : null}
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTeachers.map((teacher) => (
            <div key={teacher.serial} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Profile Image */}
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 h-32 flex items-center justify-center">
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
                    <FaGraduationCap className="text-blue-500 text-sm" />
                    <span className="text-sm font-semibold text-blue-600">{teacher.title_english}</span>
                  </div>
                  
                  {teacher.subject_english && (
                    <div className="bg-blue-50 rounded-full px-3 py-1">
                      <span className="text-xs font-medium text-blue-700">{teacher.subject_english}</span>
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
                      <FaCalendarAlt className="text-orange-500" />
                      <span>Since {teacher.first_join_date_english}</span>
                    </div>
                  )}
                </div>

                {/* Experience Badge */}
                {teacher.first_join_date_english && (
                  <div className="mt-4 flex justify-between items-center">
                    <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                      {new Date().getFullYear() - new Date(teacher.first_join_date_english.split('-').reverse().join('-')).getFullYear()}+ Years Experience
                    </div>
                    <Link
                      to={`/faculty/teacher/${teacher.serial}`}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-full text-xs font-medium transition-colors duration-200 flex items-center gap-1"
                    >
                      <FaEye className="text-xs" />
                      View Details
                    </Link>
                  </div>
                )}

                {/* Action Button for incomplete profiles */}
                {(!teacher.first_join_date_english) && (
                  <div className="mt-4">
                    <Link
                      to={`/faculty/teacher/${teacher.serial}`}
                      className="w-full bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      <FaEye className="text-sm" />
                      View Profile
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredTeachers.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <FaSearch className="text-4xl text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No Teachers Found</h3>
              <p className="text-gray-500">
                Try adjusting your search criteria or clear the filters to see all faculty members.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedDepartment('');
                }}
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
              >
                Clear Filters
              </button>
            </div>
          </div>
        )}

        {/* Statistics Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-2xl font-bold text-blue-600 mb-2">{teachers.length}</div>
            <div className="text-sm text-gray-600">Total Faculty</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-2xl font-bold text-green-600 mb-2">{departments.length}</div>
            <div className="text-sm text-gray-600">Departments</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-2xl font-bold text-purple-600 mb-2">
              {teachers.filter(t => t.title_english?.includes('Professor')).length}
            </div>
            <div className="text-sm text-gray-600">Professors</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-2xl font-bold text-orange-600 mb-2">
              {teachers.filter(t => t.title_english?.includes('Lecturer')).length}
            </div>
            <div className="text-sm text-gray-600">Lecturers</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeachersList;