import React, { useState, useEffect } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { 
  GraduationCap, 
  Users, 
  Building2, 
  Briefcase, 
  TrendingUp, 
  CheckCircle2, 
  Building, 
  Laptop, 
  Award, 
  Clock, 
  Phone, 
  Mail, 
  ChevronRight 
} from 'lucide-react';
import { topRecruiters, trainingModules, placementProcessSteps } from '../data/placementData';

export const Placements: React.FC = () => {
  const [counts, setCounts] = useState({
    students: 0,
    teachers: 0,
    departments: 0,
    companies: 0
  });

  useEffect(() => {
    const duration = 1600;
    const steps = 30;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const p = step / steps;
      setCounts({
        students: Math.floor(p * 5500),
        teachers: Math.floor(p * 290),
        departments: Math.floor(p * 15),
        companies: Math.floor(p * 50)
      });
      if (step >= steps) {
        clearInterval(timer);
        setCounts({ students: 5500, teachers: 290, departments: 15, companies: 50 });
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 text-left">
      
      {/* Banner */}
      <div className="bg-blue-950 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-widest block mb-2">
            Career Advancement & Industry Relations
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif-college tracking-tight text-white">
            Training & Placement Cell
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            Empowering students with industry-grade skills, specialized coding bootcamps, and direct recruitment by premier corporate partners.
          </p>
        </div>
      </div>

      <Breadcrumb items={[{ label: 'Placements' }]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Placement Statistics Overview */}
        <section className="space-y-4">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif-college text-slate-900">
              Placement Statistics & Milestones
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Verified campus milestones representing continuous excellence in engineering and management education.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs text-center">
              <div className="w-12 h-12 mx-auto rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center mb-3">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-blue-900 tabular-nums">
                {counts.students}+
              </div>
              <div className="text-sm font-bold text-slate-900 mt-1">Students</div>
              <div className="text-xs text-slate-500 mt-0.5">Engineers & professionals graduated</div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs text-center">
              <div className="w-12 h-12 mx-auto rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center mb-3">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-blue-900 tabular-nums">
                {counts.teachers}+
              </div>
              <div className="text-sm font-bold text-slate-900 mt-1">Teachers</div>
              <div className="text-xs text-slate-500 mt-0.5">Faculty members & mentors</div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs text-center">
              <div className="w-12 h-12 mx-auto rounded-lg bg-emerald-100 text-emerald-900 flex items-center justify-center mb-3">
                <Building2 className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-blue-900 tabular-nums">
                {counts.departments}+
              </div>
              <div className="text-sm font-bold text-slate-900 mt-1">Departments</div>
              <div className="text-xs text-slate-500 mt-0.5">UG, PG and technical streams</div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs text-center">
              <div className="w-12 h-12 mx-auto rounded-lg bg-purple-100 text-purple-900 flex items-center justify-center mb-3">
                <Briefcase className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-blue-900 tabular-nums">
                {counts.companies}+
              </div>
              <div className="text-sm font-bold text-slate-900 mt-1">Placement Companies</div>
              <div className="text-xs text-slate-500 mt-0.5">Actively hiring campus talent</div>
            </div>
          </div>
        </section>

        {/* Recruiting Companies */}
        <section className="bg-white p-6 sm:p-10 rounded-xl border border-slate-200 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
            <div>
              <span className="text-xs font-bold text-blue-900 uppercase tracking-wider">Corporate Connect</span>
              <h3 className="text-xl sm:text-2xl font-bold font-serif-college text-slate-900 mt-0.5">
                Our Prominent Recruiters
              </h3>
            </div>
            <div className="text-xs text-slate-500">
              IT Giants, Core Automotives & Product Engineering
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {topRecruiters.map((recruiter) => (
              <div
                key={recruiter.name}
                className="p-4 rounded-lg bg-slate-50 border border-slate-200 hover:border-blue-900 transition-colors flex flex-col justify-center"
              >
                <div className="text-xs font-bold text-slate-900">{recruiter.name}</div>
                <div className="text-[11px] text-slate-500 mt-1">{recruiter.category}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Training Programs */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-blue-900 uppercase tracking-wider">Skill Enhancement</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif-college text-slate-900 mt-1">
              Structured Placement Training Roadmap
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              A phased 4-year curriculum transforming engineering students into confident, industry-ready professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trainingModules.map((module, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
                <span className="text-xs font-bold text-amber-600 font-mono uppercase">{module.duration}</span>
                <h3 className="text-base font-bold text-slate-900 mt-1">{module.title}</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">{module.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Placement Process */}
        <section className="bg-white p-6 sm:p-10 rounded-xl border border-slate-200 shadow-xs space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold font-serif-college text-slate-900">
            Placement Process & Student Journey
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {placementProcessSteps.map((step) => (
              <div key={step.step} className="p-4 bg-slate-50 border border-slate-200 rounded-lg flex flex-col justify-between">
                <div>
                  <span className="text-xl font-extrabold text-blue-900 font-mono">{step.step}</span>
                  <h4 className="text-sm font-bold text-slate-900 mt-2">{step.title}</h4>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Eligibility & Recruiter Facilities */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Eligibility Guidelines */}
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs space-y-4">
            <h3 className="text-lg font-bold font-serif-college text-slate-900">
              Campus Placement Eligibility Norms
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Minimum 60% or 6.5 CGPA throughout 10th, 12th, and B.Tech with zero active backlogs for Tier 1 recruitment.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Mandatory attendance of at least 85% in all college soft skills and coding training modules.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Completion of one industry internship and verified technical portfolio/GitHub project.</span>
              </li>
            </ul>
          </div>

          {/* Recruiter Facilities */}
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs space-y-4">
            <h3 className="text-lg font-bold font-serif-college text-slate-900">
              World-Class Facilities for Recruiters
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
                <span>Central air-conditioned auditorium with 1,200 seating capacity for pre-placement talks (PPT).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
                <span>Computer centers equipped with 500+ high-end networked systems for online coding evaluations.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
                <span>12 dedicated interview suites and group discussion rooms with high-speed video conferencing.</span>
              </li>
            </ul>
          </div>

        </section>

        {/* Contact T&P Cell */}
        <section className="bg-blue-950 text-white p-6 sm:p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold font-serif-college text-amber-300">
              Invite VEMU for Campus Recruitment
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Corporate HR heads and recruitment managers can directly reach our Training & Placement Officer (TPO).
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold shrink-0">
            <a href="tel:+918886661148" className="px-4 py-2 bg-amber-400 text-blue-950 font-bold rounded hover:bg-amber-300 transition-colors">
              Call TPO: +91 8886661148
            </a>
            <a href="mailto:vemupat@gmail.com" className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded border border-white/20 transition-colors">
              vemupat@gmail.com
            </a>
          </div>
        </section>

      </div>
    </div>
  );
};
