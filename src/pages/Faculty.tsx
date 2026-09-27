import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { facultyData } from '../data/faculty';
import { FacultyCard } from '../components/FacultyCard';
import { Users, Search, Filter, GraduationCap } from 'lucide-react';

export const Faculty: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<string>('All');
  const [selectedDesignation, setSelectedDesignation] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const departmentsList = [
    'All',
    'CSE',
    'CSE AI & ML',
    'CSE AI',
    'CSE AI & DS',
    'CSIT',
    'ECE',
    'EEE',
    'Mechanical',
    'Civil',
    'MBA',
    'MCA',
    'BCA'
  ];

  const designationsList = [
    'All',
    'Principal & Professor',
    'Professor & HOD',
    'Professor',
    'Associate Professor',
    'Assistant Professor'
  ];

  const filteredFaculty = facultyData.filter((member) => {
    const matchesDept = selectedDept === 'All' || member.department === selectedDept;
    const matchesDesig = selectedDesignation === 'All' || member.designation.includes(selectedDesignation);
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          member.qualification.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          member.specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          member.department.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesDept && matchesDesig && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 text-left">
      
      {/* Header Banner */}
      <div className="bg-blue-950 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-widest block mb-2">
            Academic Community
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif-college tracking-tight text-white">
            Faculty Directory
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            Meet our esteemed faculty members, research scholars, and industry mentors driving academic excellence and innovation at VEMU IT.
          </p>
        </div>
      </div>

      <Breadcrumb items={[{ label: 'Faculty Directory' }]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        
        {/* Filter Controls & Search */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-4">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search faculty by name, qualification, research..."
                className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Total Count */}
            <div className="text-xs text-slate-500 font-semibold self-start md:self-center">
              Showing <span className="text-blue-900 font-bold">{filteredFaculty.length}</span> Faculty Members
            </div>

          </div>

          {/* Department Filter & Designation Filter */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Filter by Department:
              </label>
              <select
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm border border-slate-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                {departmentsList.map((d) => (
                  <option key={d} value={d}>{d === 'All' ? 'All Departments' : d}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Filter by Designation:
              </label>
              <select
                value={selectedDesignation}
                onChange={(e) => setSelectedDesignation(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm border border-slate-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                {designationsList.map((desig) => (
                  <option key={desig} value={desig}>{desig === 'All' ? 'All Designations' : desig}</option>
                ))}
              </select>
            </div>
          </div>

        </div>

        {/* Faculty Grid */}
        {filteredFaculty.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredFaculty.map((member) => (
              <FacultyCard key={member.id} faculty={member} />
            ))}
          </div>
        ) : (
          <div className="bg-white p-12 rounded-xl border border-slate-200 text-center space-y-3">
            <Users className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-base font-bold text-slate-800">No Faculty Found</h3>
            <p className="text-xs text-slate-500">
              No faculty members matched your selected filters or search terms. Try clearing filters.
            </p>
            <button
              onClick={() => {
                setSelectedDept('All');
                setSelectedDesignation('All');
                setSearchQuery('');
              }}
              type="button"
              className="px-4 py-2 bg-blue-900 text-white text-xs font-bold rounded hover:bg-blue-800 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
