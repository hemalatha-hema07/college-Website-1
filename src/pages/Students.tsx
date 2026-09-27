import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { studentPortalCards, studentClubs } from '../data/studentServices';
import { 
  GraduationCap, 
  Search, 
  FileCheck, 
  BookOpen, 
  Laptop, 
  Calendar, 
  Award, 
  ExternalLink,
  ChevronRight,
  LogIn,
  CheckCircle2,
  Clock,
  Landmark,
  Bell
} from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';

export const Students: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialTab = searchParams.get('tab') || 'overview';
  
  const [activeTab, setActiveTab] = useState<string>(initialTab);
  const [rollNumber, setRollNumber] = useState('224M1A0501');
  const [searchResult, setSearchResult] = useState<any | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleResultSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rollNumber.trim()) return;

    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setSearchResult({
        studentName: 'K. Sai Sumanth',
        rollNo: rollNumber.toUpperCase(),
        branch: 'B.Tech - Computer Science & Engineering',
        semester: 'IV Year I Semester (R20)',
        sgpa: '8.74',
        cgpa: '8.62',
        status: 'PASSED (FIRST CLASS WITH DISTINCTION)',
        subjects: [
          { code: '20A05701a', name: 'Cloud Computing & Virtualization', grade: 'A+', credits: 3 },
          { code: '20A05702b', name: 'Machine Learning Architectures', grade: 'A', credits: 3 },
          { code: '20A05703a', name: 'Cryptography & Cyber Security', grade: 'O', credits: 3 },
          { code: '20A05704', name: 'Full-Stack Development Lab', grade: 'O', credits: 1.5 },
          { code: '20A05705', name: 'Industry Internship Evaluation', grade: 'O', credits: 3 }
        ]
      });
    }, 600);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 text-left">
      
      {/* Header Banner */}
      <div className="bg-blue-950 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-widest block mb-2">
            Campus Life & Services
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif-college tracking-tight text-white">
            Student Life & Services Portal
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            Centralized portal connecting VEMU students to university examination results, digital learning management, attendance, scholarships, and active co-curricular societies.
          </p>
        </div>
      </div>

      <Breadcrumb items={[{ label: 'Student Portal' }]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Portal Services Cards (Wireframe Section 14) */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <span className="text-xs font-bold text-blue-900 uppercase tracking-wider font-mono">
                Direct Portal Services
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-serif-college text-slate-900 mt-0.5">
                Academic & Campus Facilities
              </h2>
            </div>
            <span className="text-xs text-slate-500">
              Select any card to launch online service
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {studentPortalCards.map((service) => (
              <div
                key={service.id}
                onClick={() => {
                  if (service.id === 'results') setActiveTab('results');
                  else if (service.id === 'student-clubs') setActiveTab('clubs');
                  else if (service.id === 'scholarships') setActiveTab('scholarships');
                  else if (service.id === 'library') setActiveTab('library');
                  else if (service.id === 'moodle') setActiveTab('moodle');
                }}
                className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs hover:shadow-md hover:border-blue-900 transition-all flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center group-hover:bg-blue-900 group-hover:text-white transition-colors">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    {service.badge && (
                      <span className="text-[10px] font-bold text-blue-900 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                        {service.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-900">
                  <span>{service.actionText}</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Feature: Online Results Simulator */}
        <section className="bg-white p-6 sm:p-10 rounded-xl border border-slate-200 shadow-xs space-y-6" id="results-portal">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-blue-900 uppercase tracking-wider font-mono">
              University Examination Cell
            </span>
            <h2 className="text-2xl font-bold font-serif-college text-slate-900 mt-1">
              JNTUA Semester-End Results Portal
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Verify published provisional semester marks, grade points, and SGPA.
            </p>
          </div>

          <form onSubmit={handleResultSearch} className="flex flex-col sm:flex-row gap-3 max-w-xl">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}
                placeholder="Enter 10-digit Hall Ticket No (e.g. 224M1A0501)"
                className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 uppercase font-mono"
              />
            </div>
            <button
              type="submit"
              disabled={isSearching}
              className="px-6 py-2 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm rounded transition-colors disabled:opacity-50 shrink-0"
            >
              {isSearching ? 'Fetching Result...' : 'Search Results'}
            </button>
          </form>

          {/* Result Card */}
          {searchResult && (
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
                <div>
                  <h3 className="text-base font-bold text-slate-900">{searchResult.studentName}</h3>
                  <div className="text-xs text-slate-500 font-mono">
                    Hall Ticket: <span className="font-bold text-blue-900">{searchResult.rollNo}</span> • {searchResult.branch}
                  </div>
                </div>
                <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-900 text-xs font-bold rounded">
                  {searchResult.status}
                </div>
              </div>

              {/* Subject Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse">
                  <thead className="bg-slate-200 text-slate-900 font-bold uppercase text-[10px]">
                    <tr>
                      <th className="p-2.5">Sub Code</th>
                      <th className="p-2.5">Subject Name</th>
                      <th className="p-2.5">Credits</th>
                      <th className="p-2.5">Grade</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {searchResult.subjects.map((sub: any, i: number) => (
                      <tr key={i}>
                        <td className="p-2.5 font-mono text-slate-600">{sub.code}</td>
                        <td className="p-2.5 font-semibold text-slate-900">{sub.name}</td>
                        <td className="p-2.5">{sub.credits}</td>
                        <td className="p-2.5 font-bold text-blue-900">{sub.grade}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex items-center justify-between text-xs pt-2">
                <div>Semester SGPA: <strong className="text-blue-900 font-mono text-sm">{searchResult.sgpa}</strong></div>
                <div>Cumulative CGPA: <strong className="text-blue-900 font-mono text-sm">{searchResult.cgpa}</strong></div>
              </div>
            </div>
          )}
        </section>

        {/* Student Clubs & Extra-Curricular Societies */}
        <section className="space-y-6" id="clubs">
          <div>
            <span className="text-xs font-bold text-blue-900 uppercase tracking-wider font-mono">
              Student Leadership & Clubs
            </span>
            <h2 className="text-2xl font-bold font-serif-college text-slate-900 mt-1">
              Active Student Societies & Guilds
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Join student-led technical communities, hackathon clubs, NSS social initiatives, and arts collectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studentClubs.map((club, i) => (
              <div key={i} className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded">
                    {club.domain}
                  </span>
                  <span className="text-[11px] text-slate-500 font-semibold">{club.members}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900">{club.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{club.desc}</p>
                <div className="pt-2 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => alert(`Registration details for ${club.name} sent to student email!`)}
                    className="text-xs font-bold text-blue-900 hover:underline inline-flex items-center gap-1"
                  >
                    <span>Join Club Activity</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Scholarships & JVD Information */}
        <section className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center gap-2">
            <Landmark className="w-5 h-5 text-blue-900" />
            <h3 className="text-lg font-bold font-serif-college text-slate-900">
              Government Scholarships & Jagananna Vidya Deevena (JVD)
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Students belonging to SC, ST, BC, EBC, Minority, and Kapu categories admitted under Convener Quota (Category-A) 
            are eligible for 100% tuition fee reimbursement (Jagananna Vidya Deevena) and maintenance hostel support 
            (Jagananna Vasathi Deevena) as mandated by the Government of Andhra Pradesh.
          </p>
          <div className="p-4 bg-slate-50 rounded-lg text-xs text-slate-700 space-y-1.5 border border-slate-200">
            <div><strong>Biometric Authentication:</strong> Conducted each semester at the VEMU Scholarship Helpdesk.</div>
            <div><strong>Required Documents:</strong> Income Certificate, Caste Certificate, 10th & Inter Marks Cards, Ration Card, Bank Passbook linked to Aadhaar.</div>
            <div><strong>NSP National Scholarships:</strong> Central sector merit scholarships available for top 20th percentile board qualifiers.</div>
          </div>
        </section>

      </div>
    </div>
  );
};
