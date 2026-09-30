import React from 'react';
import { 
  Download, 
  QrCode, 
  ShieldCheck, 
  Star, 
  Smartphone, 
  Sparkles, 
  CheckCircle2, 
  Share2,
  Clapperboard,
  Music,
  FileText,
  Flame,
  Layers
} from 'lucide-react';
import { APP_CONFIG, triggerDirectApkDownload } from '../constants';
import { PhoneMockup } from './PhoneMockup';

interface HeroProps {
  onDownloadClick: () => void;
  onOpenQr: () => void;
  onOpenShare: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDownloadClick, onOpenQr, onOpenShare }) => {
  return (
    <section id="hero" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background Gradients & Glows */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse"></div>
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Info Column */}
          <div className="lg:col-span-7 space-y-7 text-right">
            
            {/* Top Verified Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/40 text-emerald-400 text-xs font-semibold shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <Clapperboard className="w-4 h-4 text-emerald-400" />
              <span>الإصدار الرسمي {APP_CONFIG.version} • معالجة محلية 100% على هاتفك</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.25]">
              تطبيق{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                مدمج الصور بالصوت
              </span>{' '}
              مع ملفات SRT بدقة 4K
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              الحل العربي الأسهل والأسرع لصناع المحتوى: حوّل مجموعة من الصور وملف صوتي (MP3/WAV) وملف SRT إلى فيديو احترافي متزامن تماماً مع الكلام وبضع نقرات، ثم أضف 10 مؤثرات حركية سينمائية!
            </p>

            {/* Key Value Cards */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-lg py-1">
              <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800/90 backdrop-blur-sm">
                <div className="text-lg sm:text-xl font-black text-white flex items-center gap-1">
                  <span>{APP_CONFIG.rating}</span>
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">تقييم ({APP_CONFIG.reviewsCount})</div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800/90 backdrop-blur-sm">
                <div className="text-lg sm:text-xl font-black text-emerald-400">
                  {APP_CONFIG.downloadsCount}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">تنزيل نشط</div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800/90 backdrop-blur-sm">
                <div className="text-lg sm:text-xl font-black text-cyan-400">
                  {APP_CONFIG.size}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">حجم ملف APK</div>
              </div>
            </div>

            {/* Main Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={() => {
                  triggerDirectApkDownload();
                  onDownloadClick();
                }}
                type="button"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:via-teal-400 hover:to-cyan-400 text-slate-950 font-black text-base shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <Download className="w-6 h-6 text-slate-950 stroke-[2.5] group-hover:-translate-y-0.5 transition-transform" />
                <div className="text-right">
                  <div className="text-base font-black">تحميل تطبيق مدمج الصور بالصوت (APK)</div>
                  <div className="text-[11px] font-bold text-slate-900/80">
                    تنزيل تلقائي مباشر • {APP_CONFIG.size} • {APP_CONFIG.version}
                  </div>
                </div>
              </button>

              <div className="flex gap-2">
                <button
                  onClick={onOpenQr}
                  type="button"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold text-sm border border-slate-800 hover:border-slate-700 transition-all shadow-md"
                  title="مسح رمز QR للتحميل على الهاتف"
                >
                  <QrCode className="w-5 h-5 text-emerald-400" />
                  <span>مسح QR</span>
                </button>

                <button
                  onClick={onOpenShare}
                  type="button"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-bold text-sm border border-slate-800 transition-all"
                  title="مشاركة التطبيق"
                >
                  <Share2 className="w-5 h-5 text-cyan-400" />
                </button>
              </div>
            </div>

            {/* Quick feature checklist */}
            <div className="pt-3 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-400 border-t border-slate-800/80">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>دعم كامل لملفات SRT والتوقيتات</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>10 أنواع تحريك سينمائي بالكاميرا</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>تصدير 4K و 60 FPS بالخلفية</span>
              </div>
            </div>

          </div>

          {/* Right Column: Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <PhoneMockup onDownloadClick={() => {
              triggerDirectApkDownload();
              onDownloadClick();
            }} />
          </div>

        </div>
      </div>
    </section>
  );
};
