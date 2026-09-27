import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  CheckCircle2, 
  Compass, 
  Target, 
  ArrowRight, 
  ShieldCheck, 
  Building,
  GraduationCap
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="py-14 sm:py-20 bg-white" aria-labelledby="about-vemu-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-900 mb-2">
            <GraduationCap className="w-4 h-4 text-amber-500" />
            <span>Legacy of Technical Excellence</span>
          </div>
          <h2 id="about-vemu-heading" className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-serif-college text-slate-900 tracking-tight">
            About VEMU Institute of Technology
          </h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto mt-3 mb-4 rounded-full" />
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            One of the most trusted engineering and management destinations in Rayalaseema, committed to transforming rural and urban talent into global technology champions.
          </p>
        </div>

        {/* Two-Column Layout from Wireframe: LEFT College Image, RIGHT About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: College Campus Image & Key Accreditations */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 aspect-4/3 sm:aspect-16/10 lg:aspect-4/3">
              {!imageError ? (
                <img
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop"
                  alt="VEMU Institute of Technology Academic Complex"
                  onError={() => setImageError(true)}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                /* High-fidelity architectural vector presentation fallback */
                <div className="w-full h-full bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 flex flex-col items-center justify-center p-6 text-white text-center">
                  <Building className="w-16 h-16 text-amber-400 mb-3 opacity-90" />
                  <span className="font-serif-college text-xl font-bold tracking-wide">VEMU IT</span>
                  <span className="text-xs text-slate-300 mt-1">25-Acre Sprawling Green Campus</span>
                </div>
              )}

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              {/* Floating Badge on Image */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-3 rounded-lg border border-white/20 shadow-md">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-900">
                  <div className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>Affiliated to JNTUA • Estd 2008</span>
                  </div>
                  <span className="text-blue-900 font-bold">Chittoor, AP</span>
                </div>
              </div>
            </div>

            {/* Micro Highlights Bar under image */}
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div className="text-lg font-extrabold text-blue-900 font-mono">2008</div>
                <div className="text-[11px] text-slate-500 font-medium">Established</div>
              </div>
              <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div className="text-lg font-extrabold text-blue-900 font-mono">25+</div>
                <div className="text-[11px] text-slate-500 font-medium">Acres Campus</div>
              </div>
              <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div className="text-lg font-extrabold text-blue-900 font-mono">NAAC</div>
                <div className="text-[11px] text-slate-500 font-medium">Accredited</div>
              </div>
            </div>
          </div>

          {/* RIGHT: About Content */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif-college text-slate-900">
                Pioneering Engineering Education in Andhra Pradesh
              </h3>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                <strong className="text-slate-900">VEMU Institute of Technology</strong>, established in the year 
                <strong> 2008</strong> by Dr. K. Chandrasekhar Naidu, a visionary educator, is situated on the picturesque 
                Tirupati–Chittoor Highway, P. Kothakota. The college is permanently affiliated to 
                <strong> Jawaharlal Nehru Technological University Anantapur (JNTUA)</strong>, approved by 
                <strong> AICTE, New Delhi</strong>, and recognized by the Government of Andhra Pradesh.
              </p>
            </div>

            {/* Vision & Mission Summary */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-slate-50 border-l-3 border-blue-900 rounded-r-lg">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-1.5">
                  <Compass className="w-4 h-4 text-blue-900" />
                  <span>Our Vision</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To be a premier technical institution of academic excellence that empowers students with modern technology, research mindset, and strong human values.
                </p>
              </div>

              <div className="p-4 bg-slate-50 border-l-3 border-amber-500 rounded-r-lg">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-1.5">
                  <Target className="w-4 h-4 text-amber-600" />
                  <span>Our Mission</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Provide state-of-the-art infrastructure, student-centered learning pedagogy, industry linkages, and entrepreneurial mentorship to address real-world challenges.
                </p>
              </div>
            </div>

            {/* Key Infrastructure & Accreditation Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700 pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>NBA & NAAC Accredited Academic Programs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>MoE 4-Star Innovation Council & Incubation Hub</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>High-end NVIDIA GPU AI & IoT Simulation Labs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Active 50+ Top Multinational Placement Recruiters</span>
              </div>
            </div>

            {/* Read More Button */}
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-blue-900 hover:bg-blue-800 active:bg-blue-950 rounded shadow-xs transition-colors"
              >
                <span>Read More About VEMU</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
