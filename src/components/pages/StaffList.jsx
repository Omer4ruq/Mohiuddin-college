import React, { useState, useEffect } from 'react';
import { FaUser, FaPhone, FaEnvelope, FaCalendarAlt, FaSearch, FaEye, FaUserTie } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import staffData from '../../../src/data/staffData';

const StaffList = () => {
  const [staff, setStaff] = useState([]);
  const [filteredStaff, setFilteredStaff] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPosition, setSelectedPosition] = useState('');

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setStaff(staffData.current_staffs);
      setFilteredStaff(staffData.current_staffs);
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    let filtered = staff;
    
    if (searchTerm) {
      filtered = filtered.filter(member => 
        member.name_english.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.name_bengali.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.title_english.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedPosition) {
      filtered = filtered.filter(member => 
        member.title_english === selectedPosition
      );
    }
    
    setFilteredStaff(filtered);
  }, [searchTerm, selectedPosition, staff]);

  // Get unique positions
  const positions = [...new Set(staff.map(member => member.title_english).filter(Boolean))];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-[#1e3a8a] to-[#061742] rounded-2xl shadow-xl p-8 mb-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Administrative Staff</h1>
            <p className="text-lg text-white max-w-3xl mx-auto">
              Meet our dedicated administrative and support staff members who work tirelessly behind the scenes 
              to ensure smooth operations and provide excellent support services.
            </p>
            <div className="mt-6 bg-gradient-to-r from-green-600 to-teal-600 rounded-full px-6 py-3 inline-block">
              <span className="text-white font-semibold text-lg">
                Total Staff: {staff.length} Members
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
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div className="md:w-64">
              <select
                value={selectedPosition}
                onChange={(e) => setSelectedPosition(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
              Showing {filteredStaff.length} of {staff.length} staff members
            </div>
          ) : null}
        </div>

        {/* Staff Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredStaff.map((member) => (
            <div key={member.serial} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Profile Image */}
              <div className="bg-gradient-to-br from-green-500 to-teal-600 h-32 flex items-center justify-center">
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
                      <FaUserTie className="text-green-500 text-sm" />
                      <span className="text-sm font-semibold text-green-600">{member.title_english}</span>
                    </div>
                  )}
                  
                  {member.subject_english && (
                    <div className="bg-green-50 rounded-full px-3 py-1">
                      <span className="text-xs font-medium text-green-700">{member.subject_english}</span>
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
                      <FaUser className="text-purple-500 mt-0.5" />
                      <span className="line-clamp-2">{member.qualification_english}</span>
                    </div>
                  )}
                  
                  {member.first_join_date_english && (
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-orange-500" />
                      <span>Since {member.first_join_date_english}</span>
                    </div>
                  )}
                </div>

                {/* Experience Badge and Action */}
                <div className="mt-4 flex justify-between items-center">
                  {member.first_join_date_english ? (
                    <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                      {new Date().getFullYear() - new Date(member.first_join_date_english.split('-').reverse().join('-')).getFullYear()}+ Years
                    </div>
                  ) : (
                    <div className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium">
                      Staff Member
                    </div>
                  )}
                  
                  <Link
                    to={`/staff/${member.serial}`}
                    className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-full text-xs font-medium transition-colors duration-200 flex items-center gap-1"
                  >
                    <FaEye className="text-xs" />
                    Details
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
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No Staff Members Found</h3>
              <p className="text-gray-500">
                Try adjusting your search criteria or clear the filters to see all staff members.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedPosition('');
                }}
                className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
              >
                Clear Filters
              </button>
            </div>
          </div>
        )}

        {/* Statistics Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-2xl font-bold text-green-600 mb-2">{staff.length}</div>
            <div className="text-sm text-gray-600">Total Staff</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-2xl font-bold text-teal-600 mb-2">{positions.length}</div>
            <div className="text-sm text-gray-600">Positions</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-2xl font-bold text-blue-600 mb-2">
              {staff.filter(s => s.title_english?.includes('Assistant')).length}
            </div>
            <div className="text-sm text-gray-600">Assistants</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-2xl font-bold text-purple-600 mb-2">
              {staff.filter(s => s.first_join_date_english && 
                new Date().getFullYear() - new Date(s.first_join_date_english.split('-').reverse().join('-')).getFullYear() >= 10
              ).length}
            </div>
            <div className="text-sm text-gray-600">10+ Years</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffList;