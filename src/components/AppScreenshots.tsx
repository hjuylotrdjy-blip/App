import React, { useState } from 'react';
import { 
  Sparkles, 
  Smartphone, 
  CheckCircle2, 
  Clock, 
  Flame, 
  DownloadCloud, 
  ShieldCheck, 
  Layers,
  ArrowRight,
  ArrowLeft,
  Eye,
  Sliders,
  Maximize2
} from 'lucide-react';
import { APP_CONFIG } from '../constants';

export const AppScreenshots: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const screens = [
    {
      id: "screen1",
      title: "1. الشاشة الرئيسية واستخراج SRT والمؤقت",
      subtitle: "استخراج ذكي للتوقيتات من ملفات SRT مع مؤقت 5 دقائق وإمكانية التجديد ونسخ وتعبئة الأوقات بالثواني.",
      badge: "الرئيسية والمزامنة",
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
      content: (
        <div className="space-y-3 p-4 bg-[#0d1117] text-white rounded-2xl h-full flex flex-col justify-between text-right select-none">
          {/* Header */}
          <div className="text-center">
            <h4 className="text-sm font-black text-white">مدمج الصور بالصوت</h4>
            <p className="text-[9px] text-slate-400">تحويل مجموعة صور + توقيتات + صوت إلى فيديو واحد</p>
          </div>

          {/* Timer Card */}
          <div className="bg-[#161b22] p-3 rounded-xl border border-slate-800 flex flex-col items-center">
            <div className="relative w-20 h-20 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="42" stroke="#22272e" strokeWidth="8" fill="transparent" />
                <circle cx="50" cy="50" r="42" stroke="#22c55e" strokeWidth="8" strokeDasharray="264" strokeDashoffset="75" strokeLinecap="round" fill="transparent" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-lg font-black font-mono text-white">03:22</span>
                <span className="text-[8px] text-slate-400">دقيقة / ثانية</span>
              </div>
            </div>
            <div className="text-[9px] text-slate-300 mt-1 mb-2">الوقت المتبقي: 03:22 — شاهد إعلان لتجديد 5+ دقائق</div>
            <button className="w-full py-1.5 rounded-lg bg-[#ffc107] text-slate-950 font-bold text-[10px]">
              شاهد إعلان + 5 دقائق
            </button>
          </div>

          {/* SRT Section */}
          <div className="bg-[#161b22] p-2.5 rounded-xl border border-slate-800 space-y-2">
            <div className="text-[10px] font-bold text-[#ffc107]">0. استخراج التوقيتات من ملف SRT</div>
            <button className="w-full py-1.5 rounded-lg bg-[#0d1117] border border-[#ffc107] text-[#ffc107] font-bold text-[10px]">
              اختر ملف SRT (.srt)
            </button>
            <div className="bg-[#0d1117] p-1.5 rounded-lg text-[8px] text-slate-400 text-center">
              سيظهر هنا ناتج الاستخراج: قائمة الأوقات + عدد المشاهد + المدة الكلية
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              <button className="py-1 px-1 rounded-lg bg-[#00e5ff] text-slate-950 font-bold text-[9px]">تعبئة في حقل التوقيتات</button>
              <button className="py-1 px-1 rounded-lg bg-[#ffc107] text-slate-950 font-bold text-[9px]">نسخ الأوقات</button>
            </div>
          </div>

          {/* Timings */}
          <div className="bg-[#161b22] p-2 rounded-xl border border-slate-800 text-[9px]">
            <div className="text-[#00e5ff] font-bold mb-1">1. التوقيتات (بالثواني)</div>
            <div className="p-1.5 bg-[#0d1117] border border-indigo-500/50 rounded-lg font-mono text-left text-slate-300">
              <div>2.00</div>
              <div>3.00</div>
              <div>2.00</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "screen2",
      title: "2. تأثيرات الحركة وإعدادات التصدير 1080p",
      subtitle: "اختيار من بين 10 مؤثرات حركة مع ضبط شدة الحركة، واختيار الدقة ونسبة العرض (16:9) ومعدل الإطارات 30 FPS.",
      badge: "المؤثرات والجودة",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      content: (
        <div className="space-y-2.5 p-4 bg-[#0d1117] text-white rounded-2xl h-full flex flex-col justify-between text-right select-none">
          {/* Motion effects */}
          <div className="bg-[#161b22] p-2.5 rounded-xl border border-slate-800 space-y-2">
            <div className="text-[10px] font-bold text-[#ffc107]">تأثير الحركة (يُطبّق أثناء التصدير — اختر نوعاً واحداً)</div>
            
            <div className="grid grid-cols-2 gap-1.5 text-[9px]">
              <div className="p-1 bg-[#0d1117] rounded border border-slate-800 text-slate-300 flex justify-between">
                <span>تكبير تدريجي</span>
                <span className="w-2.5 h-2.5 border border-slate-600 rounded"></span>
              </div>
              <div className="p-1 bg-[#0d1117] rounded border border-slate-800 text-slate-300 flex justify-between">
                <span>تصغير تدريجي</span>
                <span className="w-2.5 h-2.5 border border-slate-600 rounded"></span>
              </div>
              <div className="p-1 bg-[#0d1117] rounded border border-slate-800 text-slate-300 flex justify-between">
                <span>انزلاق لليمين</span>
                <span className="w-2.5 h-2.5 border border-slate-600 rounded"></span>
              </div>
              <div className="p-1 bg-[#0d1117] rounded border border-slate-800 text-slate-300 flex justify-between">
                <span>انزلاق لليسار</span>
                <span className="w-2.5 h-2.5 border border-slate-600 rounded"></span>
              </div>
              <div className="p-1 bg-[#00e5ff]/20 rounded border border-[#00e5ff] text-[#00e5ff] font-bold flex justify-between">
                <span>اهتزاز (Shake)</span>
                <span className="w-2.5 h-2.5 bg-[#00e5ff] text-slate-950 rounded text-[7px] flex items-center justify-center font-black">✓</span>
              </div>
              <div className="p-1 bg-[#0d1117] rounded border border-slate-800 text-slate-300 flex justify-between">
                <span>نبض (Pulse)</span>
                <span className="w-2.5 h-2.5 border border-slate-600 rounded"></span>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-[9px] text-slate-300">
                <span>شدة الحركة: 50%</span>
              </div>
              <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                <div className="bg-[#00e5ff] h-full w-1/2"></div>
              </div>
            </div>
          </div>

          {/* Export Settings */}
          <div className="space-y-1 text-[10px]">
            <div className="flex justify-between bg-[#161b22] p-1.5 rounded-lg border border-slate-800">
              <span className="font-mono text-white">1080p</span>
              <span className="text-slate-400">الدقة</span>
            </div>
            <div className="flex justify-between bg-[#161b22] p-1.5 rounded-lg border border-slate-800">
              <span className="font-mono text-white">16:9</span>
              <span className="text-slate-400">نسبة الأبعاد</span>
            </div>
            <div className="flex justify-between bg-[#161b22] p-1.5 rounded-lg border border-slate-800">
              <span className="text-white">جودة عالية</span>
              <span className="text-slate-400">الجودة / الضغط</span>
            </div>
            <div className="flex justify-between bg-[#161b22] p-1.5 rounded-lg border border-slate-800">
              <span className="font-mono text-white">30 FPS</span>
              <span className="text-slate-400">معدل الإطارات</span>
            </div>
          </div>

          <div className="text-center text-[10px] font-bold text-[#ffc107]">
            الحجم التقديري: ~6.8 MB (الدقة 1920x1080)
          </div>

          <button className="w-full py-2 rounded-xl bg-[#00e676] text-slate-950 font-black text-xs shadow-md">
            تصدير الفيديو
          </button>
        </div>
      )
    },
    {
      id: "screen3",
      title: "3. تحريك الفيديو والرندر والحفظ في المعرض",
      subtitle: "تطبيق الاهتزاز والسرعة بنسبة 50%، متابعة شريط التقدم 100% وحفظ الفيديو بالمعرض بدون أي علامة مائية.",
      badge: "الرندر والحفظ بالمعرض",
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
      content: (
        <div className="space-y-3 p-4 bg-[#0d1117] text-white rounded-2xl h-full flex flex-col justify-between text-right select-none">
          {/* Motion Apply */}
          <div className="bg-[#161b22] p-3 rounded-xl border border-slate-800 space-y-2">
            <div className="text-[10px] font-bold text-[#00e5ff]">تحريك الفيديو (إضافة اهتزاز)</div>
            
            <div className="flex justify-between bg-[#0d1117] p-1.5 rounded border border-slate-800 text-[10px]">
              <span className="text-white">تكبير تدريجي</span>
              <span className="text-slate-400">نوع الاهتزاز</span>
            </div>

            <div className="space-y-1.5 text-[9px] text-slate-300">
              <div>حدة الاهتزاز: 50%</div>
              <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                <div className="bg-[#8b5cf6] h-full w-1/2"></div>
              </div>

              <div>سرعة الاهتزاز: 50%</div>
              <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                <div className="bg-[#8b5cf6] h-full w-1/2"></div>
              </div>
            </div>

            <button className="w-full py-1.5 rounded-lg bg-[#00e5ff] text-slate-950 font-bold text-[10px]">
              تطبيق الاهتزاز على الفيديو
            </button>
          </div>

          {/* Progress Complete */}
          <div className="bg-[#161b22] p-3 rounded-xl border border-slate-800 space-y-1.5 text-center">
            <div className="flex justify-between text-[10px] font-bold text-slate-300">
              <span className="text-emerald-400 font-mono">100%</span>
              <span>الإطارات: 210 / 210</span>
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#00e676] h-full w-full"></div>
            </div>
            <div className="text-[9px] text-slate-300 font-bold pt-1">
              اكتمل التصدير! الحجم: 6.3 MB — تم الحفظ تلقائياً في المعرض
            </div>
          </div>

          {/* Save buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button className="py-2 rounded-xl bg-[#6366f1] text-white font-bold text-[10px]">
              حفظ في المعرض
            </button>
            <button className="py-2 rounded-xl bg-[#0d1117] border border-slate-700 text-slate-300 font-bold text-[10px]">
              حفظ باسم...
            </button>
          </div>

          {/* Clean note */}
          <div className="text-center text-[9px] text-slate-400 bg-black/40 p-1.5 rounded-lg border border-slate-800/80">
            الفيديو النهائي نظيف 100% — بلا أي علامة مائية أو اسم تطبيق
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-20 bg-slate-950 relative border-t border-slate-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold border border-cyan-500/30 mb-3 shadow-sm">
            <Eye className="w-4 h-4 text-cyan-400" />
            <span>معاينة حقيقية لشاشات التطبيق الرسمية (Screenshots)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            واجهات تطبيق مدمج الصور بالصوت الحقيقية
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            استكشف الشاشات الفعلية للتطبيق من لحظة استيراد ملف SRT وحتى تصدير الفيديو وحفظه في المعرض.
          </p>
        </div>

        {/* 3 Screens Showcase Grid on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {screens.map((screen, idx) => (
            <div
              key={screen.id}
              className="bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-3xl p-5 shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Screen Top Header */}
              <div className="text-right mb-4">
                <span className={`inline-block text-[10px] font-bold px-2.5 py-0.5 rounded-full border mb-2 ${screen.badgeColor}`}>
                  {screen.badge}
                </span>
                <h3 className="text-sm sm:text-base font-black text-white">
                  {screen.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {screen.subtitle}
                </p>
              </div>

              {/* Realistic Mobile Frame */}
              <div className="relative rounded-[32px] p-2.5 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-950 border border-slate-700 shadow-xl mx-auto w-full max-w-[280px]">
                <div className="h-[440px] rounded-[24px] overflow-hidden bg-[#0d1117] border border-slate-800">
                  {screen.content}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
