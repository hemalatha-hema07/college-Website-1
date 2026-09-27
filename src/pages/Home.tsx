import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeroCarousel } from '../components/HeroCarousel';
import { NoticeBoard } from '../components/NoticeBoard';
import { AboutSection } from '../components/AboutSection';
import { DepartmentCard } from '../components/DepartmentCard';
import { PlacementStats } from '../components/PlacementStats';
import { FacultyCard } from '../components/FacultyCard';
import { ContactSection } from '../components/ContactSection';
import { NoticeModal } from '../components/NoticeModal';
import { DepartmentModal } from '../components/DepartmentModal';

import { departmentsData } from '../data/departments';
import { coursesData } from '../data/courses';
import { facultyData } from '../data/faculty';
import { studentPortalCards, studentClubs } from '../data/studentServices';
import { iicHighlights, innovationProjects } from '../data/innovationData';
import { NoticeItem, Department } from '../types';

import { 
  BookOpen, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  GraduationCap, 
  Users, 
  Lightbulb, 
  Building2, 
  Calendar, 
  Trophy, 
  ExternalLink,
  ShieldCheck,
  ChevronRight,
  TrendingUp,
  FileText
} from 'lucide-react';

export const Home: React.FC = () => {
  const [selectedNotice, setSelectedNotice] = useState<NoticeItem | null>(null);
  const [selectedDepartment, setSelectedDepartment] = useState<Department | null>(null);

  // Departments preview (show top 6 on homepage)
  const featuredDepartments = departmentsData.slice(0, 6);

  // Courses preview (UG programs)
  const ugCourses = coursesData.filter((c) => c.degree === 'B.Tech').slice(0, 4);

  // Featured Faculty (top 4)
  const featuredFaculty = facultyData.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 5 & 6. Large College Image Carousel with Dot Indicators (Wireframe Item 5 & 6) */}
      <HeroCarousel />

      {/* 7. Notice Board / Announcements (Wireframe Item 7) */}
      <NoticeBoard onSelectNotice={(notice) => setSelectedNotice(notice)} />

      {/* 8. About / Department Information (Wireframe Item 8) */}
      <AboutSection />

      {/* Featured Departments Grid */}
      <section className="py-12 bg-slate-50 border-y border-slate-200" aria-labelledby="featured-dept-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-blue-900 uppercase tracking-wider mb-1">
                <Building2 className="w-4 h-4 text-amber-500" />
                <span>Academic Disciplines</span>
              </div>
              <h2 id="featured-dept-heading" className="text-2xl sm:text-3xl font-extrabold font-serif-college text-slate-900 tracking-tight">
                Our Premier Departments
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Offering 12 industry-aligned UG, PG, and specialized computing branches.
              </p>
            </div>
            <Link
              to="/departments"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-900 hover:text-blue-950 hover:underline"
            >
              <span>View All 12 Departments</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredDepartments.map((dept) => (
              <DepartmentCard
                key={dept.id}
                department={dept}
                onSelectDepartment={(d) => setSelectedDepartment(d)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 9. Academics / Courses Section (Wireframe Item 9) */}
      <section className="py-14 sm:py-16 bg-white" aria-labelledby="academics-preview-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-900 mb-2">
              <BookOpen className="w-4 h-4 text-amber-500" />
              <span>Future-Ready Engineering</span>
            </div>
            <h2 id="academics-preview-heading" className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-serif-college text-slate-900 tracking-tight">
              Academic Programs & Degrees
            </h2>
            <div className="w-16 h-1 bg-amber-400 mx-auto mt-2.5 mb-3 rounded-full" />
            <p className="text-sm text-slate-600">
              Approved by AICTE and affiliated to JNTUA Ananthapuramu with outcome-based education (OBE) curriculum.
            </p>
          </div>

          {/* Quick Degree Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 hover:border-blue-900 transition-colors">
              <span className="text-xs font-mono font-bold text-amber-600 uppercase">Undergraduate</span>
              <h3 className="text-lg font-bold text-slate-900 mt-1">B.Tech Degrees</h3>
              <p className="text-xs text-slate-600 mt-1.5">
                8 Specializations in Computer Science, AI, Electronics, Electrical, Mechanical & Civil.
              </p>
              <Link to="/academics" className="inline-flex items-center gap-1 text-xs font-bold text-blue-900 mt-3 hover:underline">
                <span>View B.Tech Structure</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 hover:border-blue-900 transition-colors">
              <span className="text-xs font-mono font-bold text-blue-600 uppercase">Postgraduate</span>
              <h3 className="text-lg font-bold text-slate-900 mt-1">M.Tech Research</h3>
              <p className="text-xs text-slate-600 mt-1.5">
                Advanced specializations in CSE, VLSI & Embedded Systems with high research output.
              </p>
              <Link to="/academics" className="inline-flex items-center gap-1 text-xs font-bold text-blue-900 mt-3 hover:underline">
                <span>View M.Tech Structure</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 hover:border-blue-900 transition-colors">
              <span className="text-xs font-mono font-bold text-emerald-600 uppercase">Management & IT</span>
              <h3 className="text-lg font-bold text-slate-900 mt-1">MBA & MCA</h3>
              <p className="text-xs text-slate-600 mt-1.5">
                Premier PG programs in Business Administration and Computer Applications with live case studies.
              </p>
              <Link to="/academics" className="inline-flex items-center gap-1 text-xs font-bold text-blue-900 mt-3 hover:underline">
                <span>View PG Programs</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 hover:border-blue-900 transition-colors">
              <span className="text-xs font-mono font-bold text-purple-600 uppercase">Polytechnic</span>
              <h3 className="text-lg font-bold text-slate-900 mt-1">Diploma Courses</h3>
              <p className="text-xs text-slate-600 mt-1.5">
                3-Year technical diploma after 10th standard in Computer Engineering, ECE, EEE and Mechanical.
              </p>
              <Link to="/admission" className="inline-flex items-center gap-1 text-xs font-bold text-blue-900 mt-3 hover:underline">
                <span>Diploma Admissions</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/academics"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm rounded transition-colors shadow-xs"
            >
              <span>Explore Academic Regulations, Calendar & Syllabi</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 10. Placements Section (Wireframe Item 10) */}
      <PlacementStats />

      {/* 11. Faculty Preview (Wireframe Item 11) */}
      <section className="py-14 sm:py-16 bg-slate-50 border-t border-slate-200" aria-labelledby="faculty-preview-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-blue-900 uppercase tracking-wider mb-1">
                <Users className="w-4 h-4 text-amber-500" />
                <span>Distinguished Mentors</span>
              </div>
              <h2 id="faculty-preview-heading" className="text-2xl sm:text-3xl font-extrabold font-serif-college text-slate-900 tracking-tight">
                Our Experienced Faculty
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Over 290+ dedicated educators, doctorates, and researchers guiding students.
              </p>
            </div>
            <Link
              to="/faculty"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-900 hover:text-blue-950 hover:underline"
            >
              <span>Search All Faculty</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredFaculty.map((fac) => (
              <FacultyCard key={fac.id} faculty={fac} />
            ))}
          </div>
        </div>
      </section>

      {/* 12. Student Section (Wireframe Item 12) */}
      <section className="py-14 sm:py-16 bg-white border-t border-slate-200" aria-labelledby="student-portal-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-900 mb-2">
              <GraduationCap className="w-4 h-4 text-amber-500" />
              <span>Campus Life & Quick Services</span>
            </div>
            <h2 id="student-portal-heading" className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-serif-college text-slate-900 tracking-tight">
              Student Hub & Portal
            </h2>
            <div className="w-16 h-1 bg-amber-400 mx-auto mt-2.5 mb-3 rounded-full" />
            <p className="text-sm text-slate-600">
              One-stop access to results, examination cell, digital library, Moodle LMS, and student clubs.
            </p>
          </div>

          {/* Quick Grid of Student Services */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {studentPortalCards.slice(0, 8).map((service) => (
              <Link
                key={service.id}
                to={service.route}
                className="group p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-blue-900 hover:shadow-sm transition-all text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-blue-900/10 text-blue-900 flex items-center justify-center mb-3 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                    {service.description}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-900">
                  <span>{service.actionText}</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/students"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm rounded transition-colors shadow-xs"
            >
              <span>Explore All Student Services & Clubs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 13. Innovation & Entrepreneurship (Wireframe Item 13) */}
      <section className="py-14 sm:py-16 bg-slate-900 text-white" aria-labelledby="innovation-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400">
                <Lightbulb className="w-4 h-4" />
                <span>Institution Innovation Council (IIC)</span>
              </div>
              <h2 id="innovation-heading" className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-serif-college tracking-tight text-white">
                Fostering Inventions, Startups & Patents
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                VEMU's Innovation Council is recognized with a <strong>4-Star Rating</strong> by the Ministry of Education (MoE), Govt. of India. 
                We support student inventors from concept to patent and startup commercialization.
              </p>

              <div className="space-y-2 pt-2 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>38+ Patents Filed & Published by Faculty and Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>12 Active Student & Alumni Startups Incubated</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Annual VIP-EXPO & Smart India Hackathon Hub</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/innovation"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-blue-950 font-bold text-xs sm:text-sm rounded transition-colors"
                >
                  <span>Discover Innovation Cell</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Showcase Projects Cards */}
            <div className="lg:col-span-7 space-y-3 text-left">
              {innovationProjects.slice(0, 2).map((proj) => (
                <div key={proj.id} className="p-4 bg-slate-800/80 rounded-xl border border-slate-700/80 hover:border-amber-400 transition-colors">
                  <div className="flex items-center justify-between gap-2 text-xs text-amber-300 mb-1">
                    <span className="font-semibold">{proj.category}</span>
                    <span className="text-[11px] text-slate-400">{proj.year}</span>
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1.5">{proj.title}</h3>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">{proj.description}</p>
                  {proj.award && (
                    <div className="mt-2 text-[11px] text-amber-300 font-medium flex items-center gap-1.5">
                      <Trophy className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{proj.award}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 14 & 15. Events, News & Achievements + Campus Statistics (Wireframe Item 14 & 15) */}
      <section className="py-14 bg-slate-100 border-t border-slate-200" aria-labelledby="events-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
            
            {/* Column 1 & 2: Recent Achievements & Events */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-300 pb-2">
                <h3 id="events-heading" className="text-xl font-bold font-serif-college text-slate-900 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-amber-600" />
                  <span>Recent Events & Achievements</span>
                </h3>
                <Link to="/about" className="text-xs font-bold text-blue-900 hover:underline">
                  View All News
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-2xs">
                  <span className="text-[11px] font-bold text-blue-900 uppercase">National Level</span>
                  <h4 className="text-sm font-bold text-slate-900 mt-1">
                    VEMU Students Win 1st Prize at Smart AP State Innovation Expo
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Agro-Drone project awarded ₹50,000 cash prize by the State Science & Tech Council.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-2xs">
                  <span className="text-[11px] font-bold text-emerald-800 uppercase">Academic Recognition</span>
                  <h4 className="text-sm font-bold text-slate-900 mt-1">
                    CSE & ECE Departments Re-Accredited by NBA
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Re-affirms the highest standards in faculty quality, laboratories, and placement outcomes.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-2xs">
                  <span className="text-[11px] font-bold text-purple-800 uppercase">Campus Fest</span>
                  <h4 className="text-sm font-bold text-slate-900 mt-1">
                    Annual National Tech Fest & Project Exhibition
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Over 2000 students from engineering colleges across South India participated in paper presentations.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-2xs">
                  <span className="text-[11px] font-bold text-amber-800 uppercase">Corporate MOU</span>
                  <h4 className="text-sm font-bold text-slate-900 mt-1">
                    MoU Signed with Premier AI Enterprise
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    To establish a dedicated center of excellence in GenAI and GPU computing architectures.
                  </p>
                </div>
              </div>
            </div>

            {/* Column 3: Institutional Highlights (Wireframe Item 15: Statistics) */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-lg font-bold font-serif-college text-slate-900 pb-2 border-b border-slate-200">
                At a Glance: VEMU IT
              </h3>

              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-slate-600">College Code:</span>
                  <span className="font-extrabold text-blue-900 font-mono text-sm">VEMU</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-slate-600">Year of Establishment:</span>
                  <span className="font-bold text-slate-900">2008</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-slate-600">Permanent Affiliation:</span>
                  <span className="font-bold text-slate-900">JNTUA, Ananthapuramu</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-slate-600">Approval:</span>
                  <span className="font-bold text-slate-900">AICTE, New Delhi</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-slate-600">Campus Area:</span>
                  <span className="font-bold text-slate-900">25+ Acres Green Campus</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-slate-600">Library Volumes:</span>
                  <span className="font-bold text-slate-900">35,000+ Volumes</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Location:</span>
                  <span className="font-bold text-slate-900">P. Kothakota, Chittoor Dist.</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/admission"
                  className="w-full flex items-center justify-center gap-1.5 py-2 bg-amber-400 hover:bg-amber-300 text-blue-950 font-bold rounded text-xs transition-colors shadow-2xs"
                >
                  <span>Admission Enquiry 2026-27</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 16. Contact Section (Wireframe Item 16) */}
      <ContactSection />

      {/* Modals for Interactive UX */}
      <NoticeModal
        notice={selectedNotice}
        onClose={() => setSelectedNotice(null)}
      />

      <DepartmentModal
        department={selectedDepartment}
        onClose={() => setSelectedDepartment(null)}
      />

    </div>
  );
};
