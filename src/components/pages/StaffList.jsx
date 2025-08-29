import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import staffData from '../../../src/data/staffData';

const StaffList = () => {
  const [staff, setStaff] = useState([]);
  const [filteredStaff, setFilteredStaff] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPosition, setSelectedPosition] = useState('');

  useEffect(() => {
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

  const positions = [...new Set(staff.map(member => member.title_english).filter(Boolean))];

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
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Administrative Staff</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
              Meet our dedicated administrative and support staff members who work tirelessly behind the scenes 
              to ensure smooth operations and provide excellent support services.
            </p>
            <p className="text-gray-700 font-medium">
              Total Staff: {staff.length} Members
            </p>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search by name or position..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div className="md:w-64">
              <select
                value={selectedPosition}
                onChange={(e) => setSelectedPosition(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
              >
                <option value="">All Positions</option>
                {positions.map(position => (
                  <option key={position} value={position}>{position}</option>
                ))}
              </select>
            </div>
          </div>
          {(searchTerm || selectedPosition) && (
            <div className="mt-4 text-sm text-gray-600">
              Showing {filteredStaff.length} of {staff.length} staff members
            </div>
          )}
        </div>

        {/* Staff Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredStaff.map((member) => (
            <div key={member.serial} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-200">
              <div className="p-6 text-center">
                {/* Profile Image */}
                <div className="w-24 h-32 mx-auto mb-4 bg-gray-100 rounded overflow-hidden">
                  {member.image_url ? (
                    <img
                      src={member.image_url}
                      alt={member.name_english}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                      No Photo
                    </div>
                  )}
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name_english}</h3>
                <p className="text-sm text-gray-600 mb-2">{member.name_bengali}</p>
                
                {member.title_english && (
                  <p className="text-sm font-medium text-blue-600 mb-2">{member.title_english}</p>
                )}
                
                {member.subject_english && (
                  <div className="bg-gray-100 rounded px-3 py-1 mb-3">
                    <span className="text-sm text-gray-700">{member.subject_english}</span>
                  </div>
                )}

                {/* Contact Info */}
                <div className="text-left space-y-1 mb-4">
                  {member.mobile && (
                    <p className="text-xs text-gray-600">
                      <span className="font-medium">Phone:</span> {member.mobile}
                    </p>
                  )}
                  
                  {member.email && (
                    <p className="text-xs text-gray-600">
                      <span className="font-medium">Email:</span> {member.email}
                    </p>
                  )}
                  
                  {member.qualification_english && (
                    <p className="text-xs text-gray-600">
                      <span className="font-medium">Qualification:</span> {member.qualification_english}
                    </p>
                  )}
                  
                  {member.first_join_date_english && (
                    <p className="text-xs text-gray-600">
                      <span className="font-medium">Joined:</span> {member.first_join_date_english}
                    </p>
                  )}
                </div>

                {/* Experience and Action */}
                <div className="pt-3 border-t">
                  {member.first_join_date_english && (
                    <p className="text-xs text-gray-500 mb-3">
                      Experience: {new Date().getFullYear() - new Date(member.first_join_date_english.split('-').reverse().join('-')).getFullYear()}+ Years
                    </p>
                  )}
                  
        
<Link
  to={`/staff/${member.serial}`}  // This is already correct
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
        {filteredStaff.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No Staff Members Found</h3>
              <p className="text-gray-500 mb-4">
                Try adjusting your search criteria or clear the filters to see all staff members.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedPosition('');
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
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Staff Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">{staff.length}</div>
              <div className="text-sm text-gray-600">Total Staff</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">{positions.length}</div>
              <div className="text-sm text-gray-600">Positions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {staff.filter(s => s.title_english?.includes('Assistant')).length}
              </div>
              <div className="text-sm text-gray-600">Assistants</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {staff.filter(s => s.first_join_date_english && 
                  new Date().getFullYear() - new Date(s.first_join_date_english.split('-').reverse().join('-')).getFullYear() >= 10
                ).length}
              </div>
              <div className="text-sm text-gray-600">10+ Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffList;