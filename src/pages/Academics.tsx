import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { coursesData } from '../data/courses';
import { 
  BookOpen, 
  GraduationCap, 
  Calendar, 
  FileCheck, 
  Download, 
  Award, 
  Layers, 
  ExternalLink,
  ChevronRight,
  Clock,
  Users
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const Academics: React.FC = () => {
  const [degreeFilter, setDegreeFilter] = useState<'All' | 'B.Tech' | 'M.Tech' | 'MBA' | 'MCA' | 'Diploma'>('All');

  const filteredCourses = degreeFilter === 'All' 
    ? coursesData 
    : coursesData.filter((c) => c.degree === degreeFilter);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 text-left">
      
      {/* Header Banner */}
      <div className="bg-blue-950 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-widest block mb-2">
            Curriculum & Regulations
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif-college tracking-tight text-white">
            Academics & Curricular Framework
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            Adopting JNTUA Outcome-Based Education (OBE) with modern choice-based credit systems (CBCS), industrial internships, and specialized technical labs.
          </p>
        </div>
      </div>

      <Breadcrumb items={[{ label: 'Academics' }]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Academic Regulations & Calendar Quick Links */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center mb-3">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-serif-college text-slate-900">
                Academic Calendar 2025–26
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Semester commencement schedules, mid-term examinations, preparation breaks, and final university assessment timelines.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100">
              <a
                href="#academic-calendar"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 hover:underline"
              >
                <span>View Full Academic Schedule</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center mb-3">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-serif-college text-slate-900">
                Academic Regulations (R20 / R23)
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                JNTUA academic guidelines for attendance requirements, internal evaluation weights, grading scales, and degree award criteria.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100">
              <a
                href="#regulations"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 hover:underline"
              >
                <span>Read Regulation Handbook</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-900 flex items-center justify-center mb-3">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-serif-college text-slate-900">
                Examination & Results Cell
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Controller of examinations portal for hall tickets, online result publication, recounting, and challenge valuation requests.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100">
              <Link
                to="/students?tab=results"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 hover:underline"
              >
                <span>Open Examination Results</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Academic Courses Catalog */}
        <section className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-blue-900 uppercase tracking-wider">Course Catalog</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif-college text-slate-900">
                Programs Offered & Seat Matrix
              </h2>
            </div>

            {/* Filter buttons */}
            <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none">
              {(['All', 'B.Tech', 'M.Tech', 'MBA', 'MCA', 'Diploma'] as const).map((deg) => (
                <button
                  key={deg}
                  onClick={() => setDegreeFilter(deg)}
                  type="button"
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md whitespace-nowrap transition-colors ${
                    degreeFilter === deg
                      ? 'bg-blue-900 text-white shadow-xs'
                      : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {deg}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs hover:shadow-md hover:border-blue-900 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-blue-900 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
                      {course.degree}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      Code: {course.code}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {course.name}
                  </h3>

                  <p className="mt-2 text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {course.overview}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                    <div className="flex items-center justify-between">
                      <span>Duration:</span>
                      <strong className="text-slate-800">{course.duration}</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Sanctioned Intake:</span>
                      <strong className="text-blue-900">{course.intake} Seats</strong>
                    </div>
                    <div className="pt-1 text-[11px] text-slate-500">
                      <strong>Eligibility:</strong> {course.eligibility}
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100">
                  <Link
                    to="/admission"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 text-xs font-bold text-blue-900 bg-blue-50 hover:bg-blue-900 hover:text-white rounded transition-colors"
                  >
                    <span>Check Admission Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Academic Calendar Section */}
        <section className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs" id="academic-calendar">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-blue-900" />
            <h3 className="text-xl font-bold font-serif-college text-slate-900">
              Academic Calendar Summary (Even Semester 2025–26)
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left text-slate-700 border-collapse">
              <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200 uppercase text-[11px]">
                <tr>
                  <th className="p-3">Academic Event</th>
                  <th className="p-3">B.Tech II & III Year</th>
                  <th className="p-3">B.Tech IV Year</th>
                  <th className="p-3">PG (M.Tech/MBA/MCA)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-semibold text-slate-900">Commencement of Classwork</td>
                  <td className="p-3">Jan 06, 2026</td>
                  <td className="p-3">Dec 22, 2025</td>
                  <td className="p-3">Jan 12, 2026</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-semibold text-slate-900">I Mid-Term Examinations</td>
                  <td className="p-3">Mar 02 – Mar 07, 2026</td>
                  <td className="p-3">Feb 16 – Feb 21, 2026</td>
                  <td className="p-3">Mar 09 – Mar 14, 2026</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-semibold text-slate-900">II Mid-Term Examinations</td>
                  <td className="p-3">Apr 27 – May 02, 2026</td>
                  <td className="p-3">Apr 13 – Apr 18, 2026</td>
                  <td className="p-3">May 04 – May 09, 2026</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-semibold text-slate-900">End Semester Practical Exams</td>
                  <td className="p-3">May 04 – May 09, 2026</td>
                  <td className="p-3">Apr 20 – Apr 25, 2026</td>
                  <td className="p-3">May 11 – May 16, 2026</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-semibold text-slate-900">End Semester Regular Theory Exams</td>
                  <td className="p-3">May 11 – May 26, 2026</td>
                  <td className="p-3">Apr 27 – May 09, 2026</td>
                  <td className="p-3">May 18 – Jun 02, 2026</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </div>
  );
};
