import React, { useState } from 'react';
import { 
  FileText, 
  Images, 
  Music, 
  Eye, 
  HardDriveDownload, 
  Flame, 
  CheckCircle2, 
  Download, 
  ArrowLeft,
  Sparkles,
  Smartphone
} from 'lucide-react';
import { triggerDirectApkDownload, APP_CONFIG } from '../constants';

interface InstallGuideProps {
  onDownloadClick: () => void;
}

export const InstallGuide: React.FC<InstallGuideProps> = ({ onDownloadClick }) => {
  const [activeTab, setActiveTab] = useState<'app_steps' | 'apk_install'>('app_steps');

  const appWorkflowSteps = [
    {
      step: "01",
      title: "استيراد التوقيتات (ملف SRT)",
      desc: "اضغط 'اختر ملف SRT' لاستيراد ملف التوقيتات تلقائياً، أو اضغط 'نسخ الأوقات' لإدخالها يدوياً أو 'تعبئة في حقل التوقيتات'.",
      icon: <FileText className="w-5 h-5 text-cyan-400" />
    },
    {
      step: "02",
      title: "اختيار مجموعة الصور",
      desc: "حدد مجموعة الصور دفعة واحدة؛ سيقوم التطبيق بفرزها وترتيبها تلقائياً حسب الأرقام في أسمائها مع دعم السحب والإفلات.",
      icon: <Images className="w-5 h-5 text-emerald-400" />
    },
    {
      step: "03",
      title: "اختيار الملف الصوتي (Audio)",
      desc: "اختر ملف التعليق الصوتي أو الموسيقى (بصيغة MP3 أو WAV)، وسيقوم التطبيق بمقارنة مدته مع مجموع توقيتات الصور.",
      icon: <Music className="w-5 h-5 text-purple-400" />
    },
    {
      step: "04",
      title: "المعاينة وضبط الأبعاد والدقة",
      desc: "شاهد المعاينة المباشرة وتأكد من مؤشر المطابقة الأخضر، ثم اختر الدقة (720p, 1080p, 4K) ونسبة العرض (9:16 أو 16:9 أو 1:1).",
      icon: <Eye className="w-5 h-5 text-amber-400" />
    },
    {
      step: "05",
      title: "تصدير الفيديو والحفظ بالمعرض",
      desc: "اضغط 'تصدير الفيديو' وتابع العملية عبر إشعارات أندرويد (يمكنك الخروج من التطبيق)، ليتم حفظ الفيديو في معرض الهاتف.",
      icon: <HardDriveDownload className="w-5 h-5 text-teal-400" />
    },
    {
      step: "06",
      title: "تطبيق المؤثر الحركي (اختياري)",
      desc: "اختر واحداً من 10 مؤثرات كاميرا سينمائية، اضبط شدة وسرعة الحركة، واضغط 'تطبيق الحركة' ليُحفظ الفيديو النهائي بالمعرض.",
      icon: <Flame className="w-5 h-5 text-rose-400" />
    }
  ];

  const apkInstallSteps = [
    {
      step: "1",
      title: "تنزيل ملف APK المباشر",
      desc: "اضغط على زر التحميل في الصفحة لبدء تنزيل حزمة التطبيق (62 ميجابايت) فوراً على جهازك."
    },
    {
      step: "2",
      title: "فتح الملف من الإشعارات",
      desc: "اسحب شريط الإشعارات واضغط على الملف المكتمل (com.videomerger.app.apk) أو من مجلد التنزيلات."
    },
    {
      step: "3",
      title: "السماح بالتثبيت من هذا المصدر",
      desc: "إذا طُلب منك نظام أندرويد، اضغط على الإعدادات وفعّل خيار السماح بالتثبيت للتطبيقات الخارجية."
    },
    {
      step: "4",
      title: "بدء التثبيت والاستخدام",
      desc: "اضغط على تثبيت (Install) ثم افتح التطبيق وابدأ في صناعة فيديوهاتك المتزامنة باحترافية."
    }
  ];

  return (
    <section id="guide" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold border border-cyan-500/20 mb-3">
            <Smartphone className="w-3.5 h-3.5" /> دليل الاستخدام والتثبيت
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            دليلك الشامل لاستخدام التطبيق وتثبيته
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            تعرف على خطوات صناعة الفيديو المتزامن بالكامل، أو طريقة تثبيت ملف الـ APK على هاتفك.
          </p>

          {/* Toggle Switch */}
          <div className="flex justify-center gap-2 mt-6">
            <button
              onClick={() => setActiveTab('app_steps')}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'app_steps'
                  ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              طريقة صناعة الفيديو (6 خطوات)
            </button>
            <button
              onClick={() => setActiveTab('apk_install')}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'apk_install'
                  ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              طريقة تثبيت ملف APK على الأندرويد
            </button>
          </div>
        </div>

        {/* Content based on Active Tab */}
        {activeTab === 'app_steps' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {appWorkflowSteps.map((s, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 text-right flex flex-col justify-between hover:border-emerald-500/40 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {s.icon}
                    </div>
                    <span className="text-xl font-black font-mono text-slate-700 group-hover:text-emerald-400 transition-colors">
                      {s.step}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    الخطوة {s.step}: {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {apkInstallSteps.map((s, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 text-right space-y-3"
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 font-mono font-black text-sm flex items-center justify-center">
                  0{s.step}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white">
                  {s.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* CTA Bar in Guide */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-emerald-950/40 border border-slate-800 text-right flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-white mb-1">
              جاهز لتجربة تطبيق مدمج الصور بالصوت؟
            </h4>
            <p className="text-xs text-slate-400">
              حمّل ملف APK (الإصدار {APP_CONFIG.version} - بحجم {APP_CONFIG.size}) وابدأ المونتاج المتزامن فوراً.
            </p>
          </div>

          <button
            onClick={() => {
              triggerDirectApkDownload();
              onDownloadClick();
            }}
            className="shrink-0 px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-black text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-emerald-500/20 active:scale-95 transition-all"
          >
            <Download className="w-4 h-4" />
            <span>تحميل الـ APK الآن</span>
          </button>
        </div>

      </div>
    </section>
  );
};
