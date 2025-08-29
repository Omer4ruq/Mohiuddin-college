import React, { useState, useEffect } from 'react';
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
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Faculty Members</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
              Meet our dedicated and experienced faculty members who are committed to providing quality education 
              and shaping the future of our students.
            </p>
            <p className="text-gray-700 font-medium">
              Total Faculty: {teachers.length} Members
            </p>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search by name or subject..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div className="md:w-64">
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
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
            <div key={teacher.serial} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-200">
              {/* Profile Image */}
              <div className="p-6 text-center">
                <div className="w-24 h-32 mx-auto mb-4 bg-gray-100 rounded overflow-hidden">
                  {teacher.image_url ? (
                    <img
                      src={teacher.image_url}
                      alt={teacher.name_english}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                      No Photo
                    </div>
                  )}
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{teacher.name_english}</h3>
                <p className="text-sm text-gray-600 mb-2">{teacher.name_bengali}</p>
                
                {teacher.title_english && (
                  <p className="text-sm font-medium text-blue-600 mb-2">{teacher.title_english}</p>
                )}
                
                {teacher.subject_english && (
                  <div className="bg-gray-100 rounded px-3 py-1 mb-3">
                    <span className="text-sm text-gray-700">{teacher.subject_english}</span>
                  </div>
                )}

                {/* Contact Info */}
                <div className="text-left space-y-1 mb-4">
                  {teacher.mobile && (
                    <p className="text-xs text-gray-600">
                      <span className="font-medium">Phone:</span> {teacher.mobile}
                    </p>
                  )}
                  
                  {teacher.email && (
                    <p className="text-xs text-gray-600">
                      <span className="font-medium">Email:</span> {teacher.email}
                    </p>
                  )}
                  
                  {teacher.qualification_english && (
                    <p className="text-xs text-gray-600">
                      <span className="font-medium">Qualification:</span> {teacher.qualification_english}
                    </p>
                  )}
                  
                  {teacher.first_join_date_english && (
                    <p className="text-xs text-gray-600">
                      <span className="font-medium">Joined:</span> {teacher.first_join_date_english}
                    </p>
                  )}
                </div>

                {/* Experience and Action */}
                <div className="pt-3 border-t">
                  {teacher.first_join_date_english && (
                    <p className="text-xs text-gray-500 mb-3">
                      Experience: {new Date().getFullYear() - new Date(teacher.first_join_date_english.split('-').reverse().join('-')).getFullYear()}+ Years
                    </p>
                  )}
                  
                 <Link
  to={`/faculty/teacher/${teacher.serial}`}  // Changed from `/faculty/teacher/${teacher.serial}`
  className="inline-block w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors duration-200 text-center"
>
  View Profile
</Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredTeachers.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No Teachers Found</h3>
              <p className="text-gray-500 mb-4">
                Try adjusting your search criteria or clear the filters to see all faculty members.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedDepartment('');
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition-colors duration-200"
              >
                Clear Filters
              </button>
            </div>
          </div>
        )}

        {/* Statistics Section */}
        <div className="mt-12 bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Faculty Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">{teachers.length}</div>
              <div className="text-sm text-gray-600">Total Faculty</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">{departments.length}</div>
              <div className="text-sm text-gray-600">Departments</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {teachers.filter(t => t.title_english?.includes('Professor')).length}
              </div>
              <div className="text-sm text-gray-600">Professors</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {teachers.filter(t => t.title_english?.includes('Lecturer')).length}
              </div>
              <div className="text-sm text-gray-600">Lecturers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeachersList;