import React, { useState } from 'react';
import { 
  FileCheck2, 
  Copy, 
  Check, 
  ShieldCheck, 
  Smartphone, 
  HardDrive, 
  Calendar, 
  Layers, 
  Tag, 
  Download,
  Terminal,
  Lock,
  Cpu,
  Key,
  ExternalLink
} from 'lucide-react';
import { APP_CONFIG, DIRECT_APK_DOWNLOAD_URL, triggerDirectApkDownload } from '../constants';

interface SpecsSectionProps {
  onDownloadClick: () => void;
}

export const SpecsSection: React.FC<SpecsSectionProps> = ({ onDownloadClick }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(DIRECT_APK_DOWNLOAD_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const technicalSpecs = [
    { label: "اسم التطبيق", value: APP_CONFIG.name, icon: <Tag className="w-4 h-4 text-emerald-400" /> },
    { label: "اسم الحزمة (Package)", value: APP_CONFIG.package, icon: <FileCheck2 className="w-4 h-4 text-cyan-400" /> },
    { label: "الإصدار الحالي", value: APP_CONFIG.version, icon: <Tag className="w-4 h-4 text-teal-400" /> },
    { label: "حجم ملف الـ APK", value: APP_CONFIG.size, icon: <HardDrive className="w-4 h-4 text-indigo-400" /> },
    { label: "الحد الأدنى للنظام", value: APP_CONFIG.minAndroid, icon: <Smartphone className="w-4 h-4 text-purple-400" /> },
    { label: "النظام المستهدف", value: APP_CONFIG.targetAndroid, icon: <Cpu className="w-4 h-4 text-amber-400" /> },
    { label: "اللغة والاتجاه", value: APP_CONFIG.language, icon: <Layers className="w-4 h-4 text-rose-400" /> },
    { label: "تصنيف المحتوى", value: APP_CONFIG.contentRating, icon: <ShieldCheck className="w-4 h-4 text-sky-400" /> },
  ];

  const permissions = [
    { title: "الوصول إلى الصور والوسائط", desc: "لاختيار الصور وملفات الصوت من هاتفك لإتمام الدمج." },
    { title: "الإشعارات (Notifications)", desc: "لإعلامك بانتهاء تصدير الفيديو عند العمل بالخلفية." },
    { title: "استيقاظ الجهاز (Wake Lock)", desc: "لضمان استمرار رندر الفيديو دون توقف الشاشة أثناء التصدير." },
    { title: "الإنترنت (Internet)", desc: "لعرض الإعلانات الشفافة الداعمة لاستمرار وتطوير التطبيق مجاناً." }
  ];

  return (
    <section id="specs" className="py-20 bg-slate-900/30 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20 mb-3">
            <FileCheck2 className="w-3.5 h-3.5" /> المواصفات التقنية والأذونات
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            معلومات الحزمة والمتطلبات الفنية (APK Specs)
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            بيانات تطبيق مدمج الصور بالصوت الرسمية ومتطلبات التشغيل والأذونات المطلوبة.
          </p>
        </div>

        {/* Main Specs Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 shadow-2xl space-y-8">
          
          {/* Specs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-right">
            {technicalSpecs.map((item, idx) => (
              <div 
                key={idx}
                className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between hover:border-slate-700 transition-colors"
              >
                <span className="text-xs sm:text-sm font-bold text-white font-mono">
                  {item.value}
                </span>
                <div className="flex items-center gap-2 text-slate-400 text-xs">
                  <span>{item.label}</span>
                  {item.icon}
                </div>
              </div>
            ))}
          </div>

          {/* Permissions Accordion/Grid */}
          <div className="text-right space-y-3 pt-4 border-t border-slate-800">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
              <Key className="w-4 h-4 text-emerald-400" />
              <span>الأذونات المطلوبة في التطبيق وشرحها الشفاف:</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {permissions.map((p, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-950/40 border border-slate-800/70 space-y-1">
                  <div className="text-xs font-bold text-emerald-400">{p.title}</div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Privacy Note & Policy Link */}
          <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-right">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <div className="text-xs text-slate-300">
                <span className="font-bold text-white">معالجة محلية 100%: </span>
                لا يتم تخزين أو نقل أي من صورك أو ملفاتك الصوتية إلى أي خوادم خارجية.
              </div>
            </div>

            <a
              href={APP_CONFIG.privacyPolicyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-bold underline shrink-0"
            >
              <span>سياسة الخصوصية الرسمية</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Direct Link Copy Bar */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full sm:w-auto text-right">
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-300 shrink-0">
                <Terminal className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="overflow-hidden">
                <div className="text-xs font-bold text-slate-200">رابط تحميل APK المباشر:</div>
                <div className="text-[11px] text-slate-500 truncate font-mono max-w-xs sm:max-w-md">
                  {DIRECT_APK_DOWNLOAD_URL}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={handleCopyLink}
                className={`flex-1 sm:flex-none px-4 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                  copied 
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' 
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                }`}
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? "تم نسخ الرابط!" : "نسخ الرابط"}</span>
              </button>

              <button
                onClick={() => {
                  triggerDirectApkDownload();
                  onDownloadClick();
                }}
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 text-xs font-black flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20 transition-all active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>تحميل {APP_CONFIG.size}</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
