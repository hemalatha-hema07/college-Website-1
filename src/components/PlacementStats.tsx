import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  Users, 
  Building2, 
  Briefcase, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Award
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { placementStats, topRecruiters } from '../data/placementData';

export const PlacementStats: React.FC = () => {
  const [counts, setCounts] = useState({
    students: 0,
    teachers: 0,
    departments: 0,
    companies: 0
  });

  // Animated counter effect
  useEffect(() => {
    const duration = 1800; // ms
    const steps = 40;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounts({
        students: Math.floor(progress * 5500),
        teachers: Math.floor(progress * 290),
        departments: Math.floor(progress * 15),
        companies: Math.floor(progress * 50)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts({
          students: 5500,
          teachers: 290,
          departments: 15,
          companies: 50
        });
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-14 sm:py-20 bg-slate-900 text-white" aria-labelledby="placements-stats-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">
            <TrendingUp className="w-4 h-4" />
            <span>Training & Placement Cell</span>
          </div>
          <h2 id="placements-stats-heading" className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-serif-college tracking-tight text-white">
            Placement Records & Campus Milestones
          </h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto mt-3 mb-4 rounded-full" />
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Consistently bridging classroom innovation with corporate careers. VEMU graduates are recruited by premier global IT corporations and core industry pioneers.
          </p>
        </div>

        {/* 4 Primary Statistics Cards from Wireframe / Prompt */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          
          {/* Card 1: 5500+ Students */}
          <div className="bg-slate-800/80 border border-slate-700/80 p-5 sm:p-6 rounded-xl hover:border-amber-400 transition-colors text-center">
            <div className="w-12 h-12 mx-auto rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center mb-3">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-amber-300 tabular-nums">
              {counts.students}+
            </div>
            <div className="text-sm font-bold text-white mt-1">Students</div>
            <div className="text-xs text-slate-400 mt-1">Shaped into technology champions</div>
          </div>

          {/* Card 2: 290+ Teachers */}
          <div className="bg-slate-800/80 border border-slate-700/80 p-5 sm:p-6 rounded-xl hover:border-amber-400 transition-colors text-center">
            <div className="w-12 h-12 mx-auto rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center mb-3">
              <Users className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-amber-300 tabular-nums">
              {counts.teachers}+
            </div>
            <div className="text-sm font-bold text-white mt-1">Teachers</div>
            <div className="text-xs text-slate-400 mt-1">Experienced academic educators</div>
          </div>

          {/* Card 3: 15+ Departments */}
          <div className="bg-slate-800/80 border border-slate-700/80 p-5 sm:p-6 rounded-xl hover:border-amber-400 transition-colors text-center">
            <div className="w-12 h-12 mx-auto rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
              <Building2 className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-amber-300 tabular-nums">
              {counts.departments}+
            </div>
            <div className="text-sm font-bold text-white mt-1">Departments</div>
            <div className="text-xs text-slate-400 mt-1">UG, PG and Polytechnic programs</div>
          </div>

          {/* Card 4: 50+ Placement Companies */}
          <div className="bg-slate-800/80 border border-slate-700/80 p-5 sm:p-6 rounded-xl hover:border-amber-400 transition-colors text-center">
            <div className="w-12 h-12 mx-auto rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center mb-3">
              <Briefcase className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-amber-300 tabular-nums">
              {counts.companies}+
            </div>
            <div className="text-sm font-bold text-white mt-1">Placement Companies</div>
            <div className="text-xs text-slate-400 mt-1">Annual campus recruitment drives</div>
          </div>

        </div>

        {/* Prominent Recruiting Companies Marquee / Grid */}
        <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Major Recruiting Partners
              </h3>
              <p className="text-xs text-slate-400">
                Regular recruiters hiring VEMU engineers and management postgraduates
              </p>
            </div>
            <Link
              to="/placements"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 hover:text-amber-200"
            >
              <span>Explore Full Placement Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Recruiter Tiles */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {topRecruiters.slice(0, 12).map((recruiter) => (
              <div
                key={recruiter.name}
                className="bg-slate-800/60 hover:bg-slate-800 p-3 rounded-lg border border-slate-700/50 flex flex-col items-center justify-center text-center transition-colors h-20"
              >
                <span className="text-xs font-bold text-slate-100 line-clamp-1">{recruiter.name.split('(')[0]}</span>
                <span className="text-[10px] text-slate-400 mt-1 line-clamp-1">{recruiter.category}</span>
              </div>
            ))}
          </div>

          {/* Bottom Placement Cell Callout */}
          <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Dedicated soft skills & coding bootcamp from 2nd year onwards.</span>
            </div>
            <Link
              to="/placements"
              className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-blue-950 font-bold rounded text-xs transition-colors shrink-0"
            >
              View Placement Reports & Brochure
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};
