import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { departmentsData } from '../data/departments';
import { DepartmentCard } from '../components/DepartmentCard';
import { DepartmentModal } from '../components/DepartmentModal';
import { Department } from '../types';
import { Building2, Search, Filter } from 'lucide-react';

export const Departments: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'computing' | 'engineering' | 'management'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalDept, setActiveModalDept] = useState<Department | null>(null);

  const filteredDepts = departmentsData.filter((dept) => {
    const matchesCategory = selectedCategory === 'all' || dept.category === selectedCategory;
    const matchesSearch = dept.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          dept.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          dept.shortName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 text-left">
      
      {/* Header Banner */}
      <div className="bg-blue-950 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-widest block mb-2">
            Academic Disciplines
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif-college tracking-tight text-white">
            Academic Departments
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            Discover our 12 engineering, computing, and management departments. Equipped with specialized research laboratories, experienced faculty, and industry-backed curricula.
          </p>
        </div>
      </div>

      <Breadcrumb items={[{ label: 'Departments' }]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        
        {/* Filter and Search Bar */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Categories */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto scrollbar-none">
            <button
              onClick={() => setSelectedCategory('all')}
              type="button"
              className={`px-3 py-1.5 text-xs font-bold rounded-md whitespace-nowrap transition-colors ${
                selectedCategory === 'all' ? 'bg-blue-900 text-white' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              All Departments ({departmentsData.length})
            </button>
            <button
              onClick={() => setSelectedCategory('computing')}
              type="button"
              className={`px-3 py-1.5 text-xs font-bold rounded-md whitespace-nowrap transition-colors ${
                selectedCategory === 'computing' ? 'bg-blue-900 text-white' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Computing & AI (7)
            </button>
            <button
              onClick={() => setSelectedCategory('engineering')}
              type="button"
              className={`px-3 py-1.5 text-xs font-bold rounded-md whitespace-nowrap transition-colors ${
                selectedCategory === 'engineering' ? 'bg-blue-900 text-white' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Core Engineering (4)
            </button>
            <button
              onClick={() => setSelectedCategory('management')}
              type="button"
              className={`px-3 py-1.5 text-xs font-bold rounded-md whitespace-nowrap transition-colors ${
                selectedCategory === 'management' ? 'bg-blue-900 text-white' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Management (1)
            </button>
          </div>

          {/* Search box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search CSE, ECE, AI, Civil..."
              className="w-full pl-9 pr-3 py-1.5 text-xs sm:text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDepts.map((dept) => (
            <DepartmentCard
              key={dept.id}
              department={dept}
              onSelectDepartment={(d) => setActiveModalDept(d)}
            />
          ))}
        </div>

      </div>

      {/* Modal */}
      <DepartmentModal
        department={activeModalDept}
        onClose={() => setActiveModalDept(null)}
      />

    </div>
  );
};
