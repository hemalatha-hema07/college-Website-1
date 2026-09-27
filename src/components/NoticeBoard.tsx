import React, { useState } from 'react';
import { 
  Bell, 
  FileText, 
  Calendar, 
  ExternalLink, 
  ArrowRight, 
  CheckCircle, 
  AlertCircle,
  Download,
  Filter,
  Search
} from 'lucide-react';
import { noticesData } from '../data/notices';
import { NoticeItem, NoticeCategory } from '../types';

interface NoticeBoardProps {
  onSelectNotice: (notice: NoticeItem) => void;
  onViewAll?: () => void;
}

export const NoticeBoard: React.FC<NoticeBoardProps> = ({ onSelectNotice, onViewAll }) => {
  const [activeTab, setActiveTab] = useState<NoticeCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isViewAllExpanded, setIsViewAllExpanded] = useState(false);

  const categories: { label: string; value: NoticeCategory }[] = [
    { label: 'All Notices', value: 'all' },
    { label: 'Examinations & Results', value: 'examination' },
    { label: 'Admissions 2026', value: 'admission' },
    { label: 'Academic & FDP', value: 'academic' },
    { label: 'Circulars & Events', value: 'circular' }
  ];

  const filteredNotices = noticesData.filter((item) => {
    const matchesCategory = activeTab === 'all' || item.category === activeTab;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (item.referenceNo && item.referenceNo.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const displayList = isViewAllExpanded ? filteredNotices : filteredNotices.slice(0, 5);

  return (
    <section className="py-10 bg-slate-50 border-b border-slate-200" aria-labelledby="notice-board-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Flash Announcement Marquee / Ribbon */}
        <div className="mb-6 bg-blue-900 text-white rounded-lg p-2.5 sm:p-3 flex items-center gap-3 shadow-xs overflow-hidden">
          <div className="flex items-center gap-1.5 shrink-0 bg-amber-400 text-blue-950 px-2.5 py-1 rounded text-xs font-bold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
            <span>FLASH NEWS</span>
          </div>
          <div className="truncate text-xs sm:text-sm text-slate-100 font-medium">
            <span className="text-amber-300 font-semibold mr-2">[Admissions 2026-27]:</span>
            Applications open for B.Tech (Cat-A Convener & Cat-B NRI/Management), M.Tech, MBA & Polytechnic Diploma courses. 
            Admissions Helpline: +91 8886661148 / 1128
          </div>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-blue-900 font-bold text-xs tracking-wider uppercase mb-1">
              <Bell className="w-4 h-4 text-amber-500" />
              <span>Campus Announcements</span>
            </div>
            <h2 id="notice-board-heading" className="text-2xl sm:text-3xl font-extrabold font-serif-college text-slate-900 tracking-tight">
              Notice Board
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Official circulars, examination schedules, provisional results, and administrative updates.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search circulars, exams..."
              className="w-full pl-9 pr-3 py-1.5 text-xs sm:text-sm bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-2xs"
            />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-4 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveTab(cat.value)}
              type="button"
              className={`px-3 py-1.5 text-xs font-semibold rounded-md whitespace-nowrap transition-colors ${
                activeTab === cat.value
                  ? 'bg-blue-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Notice Board Container matching Wireframe Card/List structure */}
        <div className="bg-white border border-slate-300 rounded-lg shadow-xs overflow-hidden">
          
          {/* Header bar of the notice board */}
          <div className="bg-slate-900 text-white px-4 sm:px-6 py-3 flex items-center justify-between border-b border-slate-800">
            <span className="text-xs sm:text-sm font-bold tracking-wide uppercase flex items-center gap-2">
              <FileText className="w-4 h-4 text-amber-400" />
              <span>Official Notices & Notifications ({filteredNotices.length})</span>
            </span>
            <span className="text-xs text-slate-300 hidden sm:inline">
              Click any notification to view details or download
            </span>
          </div>

          {/* Notice Rows */}
          {displayList.length > 0 ? (
            <div className="divide-y divide-slate-100">
              {displayList.map((notice) => (
                <div
                  key={notice.id}
                  onClick={() => onSelectNotice(notice)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onSelectNotice(notice);
                    }
                  }}
                  className="group p-4 sm:px-6 hover:bg-blue-50/70 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer text-left"
                >
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    <span className="mt-1 w-2 h-2 rounded-full bg-blue-900 group-hover:scale-125 transition-transform shrink-0" />
                    <div className="flex-1 min-w-0">
                      
                      {/* Meta Line */}
                      <div className="flex items-center flex-wrap gap-2 text-xs text-slate-500 mb-1">
                        <span className="flex items-center gap-1 font-medium text-slate-600">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          <span>{notice.date}</span>
                        </span>
                        <span>·</span>
                        <span className="capitalize font-semibold text-blue-900">{notice.category}</span>
                        {notice.referenceNo && (
                          <>
                            <span>·</span>
                            <span className="font-mono text-[11px] text-slate-400">{notice.referenceNo}</span>
                          </>
                        )}
                        {notice.isNew && (
                          <span className="px-1.5 py-0.2 bg-red-600 text-white text-[10px] font-bold rounded">
                            NEW
                          </span>
                        )}
                        {notice.isUrgent && (
                          <span className="px-1.5 py-0.2 bg-amber-500 text-slate-950 text-[10px] font-bold rounded">
                            URGENT
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-sm sm:text-base font-semibold text-slate-900 group-hover:text-blue-900 transition-colors line-clamp-2">
                        {notice.title}
                      </h3>
                    </div>
                  </div>

                  {/* Right Action Affordance */}
                  <div className="shrink-0 flex items-center gap-2 text-xs font-semibold text-blue-800 sm:text-right pl-5 sm:pl-0">
                    <span className="hidden md:inline group-hover:underline">View Notification</span>
                    <ExternalLink className="w-4 h-4 text-blue-700 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-slate-500 text-sm">
              No circulars found matching your search. Try adjusting the query.
            </div>
          )}

          {/* Footer of Notice Board with View All */}
          <div className="bg-slate-50 px-4 sm:px-6 py-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-slate-500">
              Showing {displayList.length} of {filteredNotices.length} notices
            </span>
            <button
              onClick={() => setIsViewAllExpanded(!isViewAllExpanded)}
              type="button"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs sm:text-sm font-bold text-blue-900 hover:text-blue-950 hover:bg-slate-200 rounded transition-colors"
            >
              <span>{isViewAllExpanded ? 'Show Fewer Notices' : 'View All Notices'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
