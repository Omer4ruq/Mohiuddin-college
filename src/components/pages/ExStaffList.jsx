import React, { useState, useEffect } from 'react';
import { FaUser, FaPhone, FaEnvelope, FaCalendarAlt, FaSearch, FaEye, FaHistory, FaUserTie } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import staffData from '../../../src/data/staffData';

const ExStaffList = () => {
  const [exStaff, setExStaff] = useState([]);
  const [filteredStaff, setFilteredStaff] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPosition, setSelectedPosition] = useState('');

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setExStaff(staffData.ex_staffs);
      setFilteredStaff(staffData.ex_staffs);
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    let filtered = exStaff;
    
    if (searchTerm) {
      filtered = filtered.filter(member => 
        member.name_english.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.name_bengali.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (member.title_english && member.title_english.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    if (selectedPosition) {
      filtered = filtered.filter(member => 
        member.title_english === selectedPosition
      );
    }
    
    setFilteredStaff(filtered);
  }, [searchTerm, selectedPosition, exStaff]);

  // Get unique positions
  const positions = [...new Set(exStaff.map(member => member.title_english).filter(Boolean))];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
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
              <FaHistory className="text-3xl text-purple-600" />
              <h1 className="text-4xl font-bold text-white">Former Staff Members</h1>
            </div>
            <p className="text-lg text-white max-w-3xl mx-auto">
              Acknowledging our former staff members who have served our institution with dedication 
              and contributed to its operational excellence throughout their tenure.
            </p>
            <div className="mt-6 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full px-6 py-3 inline-block">
              <span className="text-white font-semibold text-lg">
                Former Staff: {exStaff.length} Members
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
                placeholder="Search by name or position..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div className="md:w-64">
              <select
                value={selectedPosition}
                onChange={(e) => setSelectedPosition(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">All Positions</option>
                {positions.map(position => (
                  <option key={position} value={position}>{position}</option>
                ))}
              </select>
            </div>
          </div>
          {searchTerm || selectedPosition ? (
            <div className="mt-4 text-sm text-gray-600">
              Showing {filteredStaff.length} of {exStaff.length} former staff members
            </div>
          ) : null}
        </div>

        {/* Staff Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredStaff.map((member) => (
            <div key={member.serial} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-purple-500">
              {/* Profile Image */}
              <div className="bg-gradient-to-br from-purple-500 to-indigo-600 h-32 flex items-center justify-center relative">
                <div className="absolute top-2 right-2 bg-white bg-opacity-20 rounded-full p-2">
                  <FaHistory className="text-white text-sm" />
                </div>
                {member.image_url ? (
                  <img
                    src={member.image_url}
                    alt={member.name_english}
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                ) : (
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                    <FaUserTie className="text-3xl text-gray-400" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-1">{member.name_english}</h3>
                <p className="text-sm text-gray-600 mb-3">{member.name_bengali}</p>
                
                <div className="space-y-2 mb-4">
                  {member.title_english && (
                    <div className="flex items-center gap-2">
                      <FaUserTie className="text-purple-500 text-sm" />
                      <span className="text-sm font-semibold text-purple-600">{member.title_english}</span>
                    </div>
                  )}
                  
                  {member.subject_english && (
                    <div className="bg-purple-50 rounded-full px-3 py-1">
                      <span className="text-xs font-medium text-purple-700">{member.subject_english}</span>
                    </div>
                  )}
                </div>

                {/* Quick Info */}
                <div className="space-y-2 text-xs text-gray-600">
                  {member.mobile && (
                    <div className="flex items-center gap-2">
                      <FaPhone className="text-green-500" />
                      <span>{member.mobile}</span>
                    </div>
                  )}
                  
                  {member.email && (
                    <div className="flex items-center gap-2">
                      <FaEnvelope className="text-red-500" />
                      <span className="truncate">{member.email}</span>
                    </div>
                  )}
                  
                  {member.qualification_english && (
                    <div className="flex items-start gap-2">
                      <FaUser className="text-blue-500 mt-0.5" />
                      <span className="line-clamp-2">{member.qualification_english}</span>
                    </div>
                  )}
                  
                  {member.first_join_date_english && (
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-orange-500" />
                      <span>Joined {member.first_join_date_english}</span>
                    </div>
                  )}

                  {member.salary_scale_english && (
                    <div className="flex items-center gap-2">
                      <span className="text-green-600 font-semibold">Former Salary: {member.salary_scale_english}</span>
                    </div>
                  )}
                </div>

                {/* Service Period Badge */}
                <div className="mt-4 flex justify-between items-center">
                  {member.first_join_date_english ? (
                    <div className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">
                      {new Date().getFullYear() - new Date(member.first_join_date_english.split('-').reverse().join('-')).getFullYear()}+ Years Service
                    </div>
                  ) : (
                    <div className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium">
                      Former Staff
                    </div>
                  )}
                  
                  <Link
                    to={`/staff/ex-staff/${member.serial}`}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded-full text-xs font-medium transition-colors duration-200 flex items-center gap-1"
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
        {filteredStaff.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <FaSearch className="text-4xl text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No Former Staff Found</h3>
              <p className="text-gray-500">
                Try adjusting your search criteria or clear the filters to see all former staff members.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedPosition('');
                }}
                className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
              >
                Clear Filters
              </button>
            </div>
          </div>
        )}

        {/* Statistics Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-2xl font-bold text-purple-600 mb-2">{exStaff.length}</div>
            <div className="text-sm text-gray-600">Former Staff</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-2xl font-bold text-indigo-600 mb-2">{positions.length}</div>
            <div className="text-sm text-gray-600">Different Roles</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-2xl font-bold text-blue-600 mb-2">
              {exStaff.filter(s => s.title_english?.includes('Guard') || s.title_english?.includes('Class')).length}
            </div>
            <div className="text-sm text-gray-600">Support Staff</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-2xl font-bold text-green-600 mb-2">
              {exStaff.filter(s => s.first_join_date_english && 
                new Date().getFullYear() - new Date(s.first_join_date_english.split('-').reverse().join('-')).getFullYear() >= 20
              ).length}
            </div>
            <div className="text-sm text-gray-600">20+ Years Service</div>
          </div>
        </div>

        {/* Appreciation Note */}
        <div className="mt-12 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl p-8 text-center">
          <FaHistory className="text-4xl text-purple-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-800 mb-3">Gratitude & Recognition</h3>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We extend our heartfelt gratitude to all our former staff members who have served our institution 
            with loyalty and dedication. Their contributions to the daily operations, maintenance, and support 
            services have been invaluable in creating a conducive learning environment for our students and faculty.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExStaffList;