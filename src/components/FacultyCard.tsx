import React from 'react';
import { FacultyMember } from '../types';
import { Mail, GraduationCap, Clock, Award } from 'lucide-react';

interface FacultyCardProps {
  faculty: FacultyMember;
}

export const FacultyCard: React.FC<FacultyCardProps> = ({ faculty }) => {
  // Generate initials for avatar
  const initials = faculty.name
    .replace('Dr. ', '')
    .replace('Mr. ', '')
    .replace('Mrs. ', '')
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2);

  return (
    <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-2xs hover:shadow-md hover:border-blue-900 transition-all text-left flex flex-col justify-between">
      <div>
        {/* Avatar and Basic Header */}
        <div className="flex items-start gap-4">
          <div className={`w-14 h-14 rounded-full ${faculty.avatarBg} text-white flex items-center justify-center font-bold text-base shadow-inner shrink-0`}>
            {initials}
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-base font-bold text-slate-900 line-clamp-1">
              {faculty.name}
            </h3>
            <p className="text-xs font-semibold text-blue-900 mt-0.5">
              {faculty.designation}
            </p>
            <span className="inline-block mt-1 text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
              Dept: {faculty.department}
            </span>
          </div>
        </div>

        {/* Academic Details */}
        <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
          <div className="flex items-center gap-1.5">
            <GraduationCap className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="truncate">{faculty.qualification}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span>Experience: <strong className="text-slate-800">{faculty.experience}</strong></span>
          </div>
          {faculty.specialization && (
            <div className="text-[11px] text-slate-500 line-clamp-2 pt-1">
              <strong className="text-slate-700">Specialization:</strong> {faculty.specialization}
            </div>
          )}
        </div>
      </div>

      {/* Email Action */}
      <div className="mt-4 pt-3 border-t border-slate-100">
        <a
          href={`mailto:${faculty.email}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-900 hover:text-blue-950 hover:underline"
        >
          <Mail className="w-3.5 h-3.5" />
          <span className="truncate">{faculty.email}</span>
        </a>
      </div>
    </div>
  );
};
