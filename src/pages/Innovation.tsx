import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { 
  Lightbulb, 
  Rocket, 
  Award, 
  ShieldCheck, 
  Trophy, 
  Calendar, 
  FileCheck2, 
  CheckCircle2, 
  ExternalLink,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { iicHighlights, innovationProjects, innovationActivities } from '../data/innovationData';

export const Innovation: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 text-left">
      
      {/* Banner */}
      <div className="bg-blue-950 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-widest block mb-2">
            Ministry of Education’s Innovation Cell (MIC)
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif-college tracking-tight text-white">
            Innovation & Entrepreneurship Hub
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            Empowering students to transform breakthrough engineering prototypes into commercial ventures, national hackathon awards, and registered patents.
          </p>
        </div>
      </div>

      <Breadcrumb items={[{ label: 'Innovation & Startups' }]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* IIC 4-Star Banner */}
        <section className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 text-amber-900 border border-amber-300 rounded text-xs font-bold uppercase tracking-wider">
                <Award className="w-4 h-4 text-amber-600" />
                <span>Ministry of Education (Govt. of India)</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif-college text-slate-900">
                Institution’s Innovation Council (IIC)
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                VEMU Institute of Technology established its <strong>Institution’s Innovation Council (IIC)</strong> as per the mandates of the Ministry of Education’s Innovation Cell (MIC), Government of India. The council has consistently achieved the prestigious <strong>4-Star Rating</strong> for orchestrating high-impact entrepreneurship seminars, patent clinics, and multidisciplinary design hackathons.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 text-xs">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                  <div className="text-lg font-bold text-blue-900 font-mono">38+</div>
                  <div className="text-slate-500 font-medium">Patents Filed & Published</div>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                  <div className="text-lg font-bold text-blue-900 font-mono">12</div>
                  <div className="text-slate-500 font-medium">Startups Incubated</div>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                  <div className="text-lg font-bold text-blue-900 font-mono">₹45L+</div>
                  <div className="text-slate-500 font-medium">Grants & Seed Funding</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-900 p-6 rounded-xl text-white space-y-3">
              <span className="text-xs font-bold text-amber-400 uppercase font-mono">Key Mandates</span>
              <h3 className="text-base font-bold font-serif-college text-white">
                VEMU Incubation Center
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Offers dedicated office workstations, 3D printing rapid prototyping lab, high-speed cloud infrastructure, legal guidance for company incorporation, and seed capital mentorship.
              </p>
              <div className="pt-2">
                <a
                  href="#projects"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 text-xs font-bold text-blue-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors"
                >
                  <span>Explore Student Projects</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Student Innovation Projects Showcase */}
        <section className="space-y-6" id="projects">
          <div>
            <span className="text-xs font-bold text-blue-900 uppercase tracking-wider font-mono">
              Student Inventions
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif-college text-slate-900 mt-1">
              Featured Working Prototypes & Patents
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Multidisciplinary projects developed by undergraduate engineering teams at VEMU Incubation Hub.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {innovationProjects.map((proj) => (
              <div
                key={proj.id}
                className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs hover:border-blue-900 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-blue-900 font-mono mb-2">
                    <span className="font-bold bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                      {proj.category}
                    </span>
                    <span className="text-slate-500 font-semibold">{proj.year}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mt-1 leading-snug">
                    {proj.title}
                  </h3>

                  <p className="text-xs text-slate-500 mt-1">
                    <strong>Team:</strong> {proj.team} • <em>{proj.department}</em>
                  </p>

                  <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                {proj.award && (
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-amber-700">
                    <Trophy className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>{proj.award}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Innovation Activities, Hackathons & Workshops */}
        <section className="bg-white p-6 sm:p-10 rounded-xl border border-slate-200 shadow-xs space-y-6">
          <div>
            <span className="text-xs font-bold text-blue-900 uppercase tracking-wider font-mono">
              Event Calendar
            </span>
            <h2 className="text-2xl font-bold font-serif-college text-slate-900 mt-1">
              Hackathons, Bootcamps & VIP-EXPO
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Regular workshops on patent drafting, design thinking, and prototyping challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {innovationActivities.map((act, i) => (
              <div key={i} className="p-5 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
                <span className="text-xs font-mono font-bold text-amber-600 uppercase">{act.date}</span>
                <h4 className="text-sm font-bold text-slate-900">{act.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{act.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Startup Incubation Support Grid */}
        <section className="bg-slate-900 text-white p-6 sm:p-10 rounded-xl space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif-college text-white">
              End-to-End Startup Incubation Support
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              From an initial idea on a whiteboard to customer traction and venture capital.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            <div className="p-4 bg-slate-800/80 rounded-lg border border-slate-700">
              <span className="text-xs font-mono font-bold text-amber-400">Phase 01</span>
              <h4 className="text-sm font-bold text-white mt-1">Idea Validation</h4>
              <p className="text-xs text-slate-300 mt-1">
                Feasibility assessments, customer interviews, and market size analysis with faculty mentors.
              </p>
            </div>

            <div className="p-4 bg-slate-800/80 rounded-lg border border-slate-700">
              <span className="text-xs font-mono font-bold text-amber-400">Phase 02</span>
              <h4 className="text-sm font-bold text-white mt-1">Prototyping Lab</h4>
              <p className="text-xs text-slate-300 mt-1">
                Free access to 3D printers, IoT microcontrollers, PCB milling machines, and AWS/Azure cloud compute.
              </p>
            </div>

            <div className="p-4 bg-slate-800/80 rounded-lg border border-slate-700">
              <span className="text-xs font-mono font-bold text-amber-400">Phase 03</span>
              <h4 className="text-sm font-bold text-white mt-1">IPR & Patenting</h4>
              <p className="text-xs text-slate-300 mt-1">
                Full college sponsorship for Indian patent filing, prior-art searches, and copyright registrations.
              </p>
            </div>

            <div className="p-4 bg-slate-800/80 rounded-lg border border-slate-700">
              <span className="text-xs font-mono font-bold text-amber-400">Phase 04</span>
              <h4 className="text-sm font-bold text-white mt-1">Seed Grants & Pitching</h4>
              <p className="text-xs text-slate-300 mt-1">
                Direct connections to Andhra Pradesh Innovation Society (APIS) seed grants and angel investor networks.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
