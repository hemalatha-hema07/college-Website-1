import React, { useState } from 'react';
import { X, Calendar, Download, FileText, CheckCircle2, Share2, Tag } from 'lucide-react';
import { NoticeItem } from '../types';

interface NoticeModalProps {
  notice: NoticeItem | null;
  onClose: () => void;
}

export const NoticeModal: React.FC<NoticeModalProps> = ({ notice, onClose }) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!notice) return null;

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Card */}
      <div className="relative bg-white rounded-xl shadow-2xl border border-slate-200 max-w-xl w-full overflow-hidden z-10 text-left">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-amber-400" />
            <span className="font-serif-college font-bold text-sm tracking-wide uppercase">
              Official Notification Detail
            </span>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="p-1 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-4">
          
          {/* Metadata badges */}
          <div className="flex items-center flex-wrap gap-2 text-xs text-slate-600">
            <span className="flex items-center gap-1 font-semibold text-slate-800 bg-slate-100 px-2 py-0.5 rounded">
              <Calendar className="w-3.5 h-3.5 text-blue-900" />
              {notice.date}
            </span>
            <span className="capitalize font-bold text-blue-900 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
              {notice.category}
            </span>
            {notice.referenceNo && (
              <span className="font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                Ref: {notice.referenceNo}
              </span>
            )}
            {notice.fileSize && (
              <span className="text-slate-500">
                PDF ({notice.fileSize})
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-slate-900 leading-snug">
            {notice.title}
          </h3>

          {/* Detailed announcement copy */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700 leading-relaxed">
            <p>
              {notice.description || 
                'Official circular from the Office of the Principal and Controller of Examinations, VEMU Institute of Technology. All concerned students, faculty members, and departments are instructed to follow the instructions specified.'
              }
            </p>
            <div className="mt-4 pt-3 border-t border-slate-200 text-xs text-slate-500 space-y-1">
              <div><strong>Issuing Authority:</strong> Principal & Exam Branch, VEMU IT</div>
              <div><strong>Affiliation:</strong> JNTUA Ananthapuramu (R20 / R23 Regulations)</div>
              <div><strong>Action Required:</strong> Online submission & fee clearance before specified cutoff dates.</div>
            </div>
          </div>

          {downloadSuccess && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-md text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Official Circular PDF successfully downloaded to your device.</span>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={handleDownload}
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm rounded transition-colors shadow-xs"
            >
              <Download className="w-4 h-4" />
              <span>Download Official Notification PDF</span>
            </button>

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
