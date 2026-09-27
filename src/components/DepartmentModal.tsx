import React from 'react';
import { X, Building2, FlaskConical, Users, Award, CheckCircle, GraduationCap } from 'lucide-react';
import { Department } from '../types';
import { Link } from 'react-router-dom';

interface DepartmentModalProps {
  department: Department | null;
  onClose: () => void;
}

export const DepartmentModal: React.FC<DepartmentModalProps> = ({ department, onClose }) => {
  if (!department) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Card */}
      <div className="relative bg-white rounded-xl shadow-2xl border border-slate-200 max-w-2xl w-full overflow-hidden z-10 text-left my-8">
        
        {/* Header with image */}
        <div className="relative h-44 bg-slate-900 overflow-hidden">
          <img
            src={department.image}
            alt={department.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/50 to-transparent" />
          
          <button
            onClick={onClose}
            type="button"
            className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-900/70 text-white hover:bg-slate-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-wider">
              Department of
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-serif-college text-white">
              {department.name} ({department.code})
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <div className="text-base font-bold text-blue-900">{department.established}</div>
              <div className="text-[11px] text-slate-500 font-medium">Established</div>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <div className="text-base font-bold text-blue-900">{department.intake} Seats</div>
              <div className="text-[11px] text-slate-500 font-medium">Sanctioned Intake</div>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <div className="text-base font-bold text-blue-900">{department.labsCount}</div>
              <div className="text-[11px] text-slate-500 font-medium">Specialized Labs</div>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <div className="text-base font-bold text-blue-900">{department.facultyCount}</div>
              <div className="text-[11px] text-slate-500 font-medium">Faculty Members</div>
            </div>
          </div>

          {/* Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-1.5">
              Department Overview
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              {department.description}
            </p>
          </div>

          {/* HOD Information */}
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-bold uppercase text-blue-900">Head of Department (HOD)</span>
              <div className="text-sm font-bold text-slate-900">{department.hodName}</div>
              <div className="text-xs text-slate-600">{department.hodQualification}</div>
            </div>
            <Link
              to="/faculty"
              onClick={onClose}
              className="px-3 py-1.5 text-xs font-bold text-blue-900 bg-white border border-blue-300 rounded hover:bg-blue-100 transition-colors shrink-0"
            >
              View Department Faculty
            </Link>
          </div>

          {/* Highlights */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
              Key Academic & Research Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              {department.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
            <Link
              to="/admission"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm rounded transition-colors"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Apply for {department.code} Admission</span>
            </Link>

            <button
              onClick={onClose}
              type="button"
              className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 rounded transition-colors"
            >
              Close
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
