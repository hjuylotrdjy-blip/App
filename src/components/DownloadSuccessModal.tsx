import React, { useEffect, useState } from 'react';
import { 
  CheckCircle2, 
  Download, 
  Smartphone, 
  ShieldCheck, 
  ExternalLink, 
  X, 
  ArrowDownCircle, 
  FileCheck,
  RefreshCw
} from 'lucide-react';
import { APP_CONFIG, DIRECT_APK_DOWNLOAD_URL, FALLBACK_DIRECT_URL, triggerDirectApkDownload } from '../constants';

interface DownloadSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadSuccessModal: React.FC<DownloadSuccessModalProps> = ({ isOpen, onClose }) => {
  const [progress, setProgress] = useState(15);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setProgress(15);
      setIsCompleted(false);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsCompleted(true);
          return 100;
        }
        return prev + Math.floor(Math.random() * 25) + 15;
      });
    }, 400);

    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-slate-900 border border-emerald-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-emerald-950/50 text-right overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow effect */}
        <div className="absolute top-0 right-1/2 translate-x-1/2 w-64 h-32 bg-emerald-500/15 blur-3xl rounded-full pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 left-5 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Icon */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3 shadow-lg shadow-emerald-500/20">
            {isCompleted ? (
              <CheckCircle2 className="w-9 h-9 text-emerald-400 animate-bounce" />
            ) : (
              <ArrowDownCircle className="w-9 h-9 text-emerald-400 animate-pulse" />
            )}
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20 mb-2">
            <ShieldCheck className="w-3.5 h-3.5" /> تحميل فوري مباشر وآمن
          </span>

          <h3 className="text-xl sm:text-2xl font-black text-white">
            {isCompleted ? "بدأ التحميل بنجاح!" : "جارٍ بدء تحميل ملف الـ APK..."}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            سيبدأ تنزيل ملف التطبيق <span className="font-bold text-emerald-300">video-merger-v26.apk</span> ({APP_CONFIG.size}) في هاتفك مباشرة.
          </p>
        </div>

        {/* Progress Card */}
        <div className="bg-slate-950/70 rounded-2xl p-4 border border-slate-800 mb-6">
          <div className="flex justify-between items-center text-xs font-semibold text-slate-300 mb-2">
            <span>{isCompleted ? "جاهز للتثبيت" : "جارٍ نقل الحزمة..."}</span>
            <span className="font-mono text-emerald-400 font-bold">{Math.min(progress, 100)}%</span>
          </div>

          <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
          </div>

          <div className="flex justify-between items-center text-[11px] text-slate-400 mt-2">
            <span>حجم الملف: {APP_CONFIG.size}</span>
            <span>الإصدار: {APP_CONFIG.version}</span>
          </div>
        </div>

        {/* Steps Reminder */}
        <div className="space-y-2.5 mb-6 text-xs text-slate-300">
          <div className="font-bold text-white mb-1">الخطوات التالية لتثبيت التطبيق:</div>
          
          <div className="flex items-start gap-2.5 p-2 rounded-xl bg-slate-800/40 border border-slate-800/80">
            <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
              1
            </div>
            <div>
              <span className="text-white font-medium">افتح الإشعارات:</span> اسحب شاشة هاتفك من الأعلى واضغط على الملف المكتمل تنزيله.
            </div>
          </div>

          <div className="flex items-start gap-2.5 p-2 rounded-xl bg-slate-800/40 border border-slate-800/80">
            <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
              2
            </div>
            <div>
              <span className="text-white font-medium">تأكيد التثبيت:</span> إذا ظهر تنبيه الأمان، اختر &quot;السماح بالتثبيت من هذا المصدر&quot;.
            </div>
          </div>
        </div>

        {/* Fallback & Actions */}
        <div className="pt-2 border-t border-slate-800/80 flex flex-col sm:flex-row gap-2.5">
          <button
            onClick={() => {
              triggerDirectApkDownload();
            }}
            className="flex-1 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors border border-slate-700"
          >
            <RefreshCw className="w-3.5 h-3.5 text-emerald-400" />
            <span>إعادة محاولة التحميل</span>
          </button>

          <a
            href={FALLBACK_DIRECT_URL}
            className="py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-emerald-500/20"
          >
            <Download className="w-3.5 h-3.5" />
            <span>رابط تحميل بديل مباشر</span>
          </a>
        </div>
      </div>
    </div>
  );
};
