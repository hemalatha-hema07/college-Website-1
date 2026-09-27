import React, { useState } from 'react';
import { Department } from '../types';
import { ArrowRight, Users, FlaskConical, Award, BookOpen } from 'lucide-react';

interface DepartmentCardProps {
  department: Department;
  onSelectDepartment: (department: Department) => void;
}

export const DepartmentCard: React.FC<DepartmentCardProps> = ({
  department,
  onSelectDepartment
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:border-blue-900 transition-all duration-300 flex flex-col text-left">
      
      {/* Department Image / Header */}
      <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
        {!imageError ? (
          <img
            src={department.image}
            alt={department.name}
            onError={() => setImageError(true)}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-950 to-slate-900 flex items-center justify-center p-4">
            <BookOpen className="w-12 h-12 text-amber-400 opacity-60" />
          </div>
        )}

        {/* Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

        {/* Department Code Pill */}
        <div className="absolute top-3 left-3 bg-blue-950/90 text-amber-300 border border-amber-400/40 px-2.5 py-1 rounded text-xs font-mono font-bold tracking-wide backdrop-blur-xs">
          {department.code}
        </div>

        {/* Intake Capacity */}
        <div className="absolute bottom-2.5 right-3 text-white text-xs font-semibold">
          Intake: <span className="text-amber-300 font-bold">{department.intake}</span> Seats
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-base sm:text-lg font-bold font-serif-college text-slate-900 group-hover:text-blue-900 transition-colors line-clamp-1">
            {department.name}
          </h3>

          <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {department.description}
          </p>

          {/* Quick Metrics */}
          <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs text-slate-600">
            <div className="flex items-center gap-1.5">
              <FlaskConical className="w-3.5 h-3.5 text-blue-700 shrink-0" />
              <span>{department.labsCount} Modern Labs</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-blue-700 shrink-0" />
              <span>{department.facultyCount} Faculty</span>
            </div>
          </div>
        </div>

        {/* View Department Action Button */}
        <div className="mt-5 pt-3">
          <button
            onClick={() => onSelectDepartment(department)}
            type="button"
            className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-bold text-blue-900 bg-blue-50 hover:bg-blue-900 hover:text-white rounded transition-colors group-hover:bg-blue-900 group-hover:text-white"
          >
            <span>View Department</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </div>
  );
};
