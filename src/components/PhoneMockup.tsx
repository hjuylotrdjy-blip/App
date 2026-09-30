import React, { useState } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Wifi, 
  Battery, 
  FileText, 
  CheckCircle2, 
  Clock, 
  Sliders, 
  Flame, 
  ArrowDownToLine,
  ChevronDown,
  CheckSquare,
  Square,
  Play,
  Share2,
  Copy,
  Zap,
  HardDrive
} from 'lucide-react';
import { APP_CONFIG, triggerDirectApkDownload } from '../constants';

interface PhoneMockupProps {
  onDownloadClick: () => void;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ onDownloadClick }) => {
  const [activeScreenTab, setActiveScreenTab] = useState<'main' | 'motion' | 'export'>('main');
  const [selectedEffect, setSelectedEffect] = useState('shake');
  const [copiedTimings, setCopiedTimings] = useState(false);
  const [filledTimings, setFilledTimings] = useState(false);

  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[395px]">
      {/* Background neon glow matching the app's real colors */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/25 via-cyan-500/20 to-amber-500/20 rounded-[50px] blur-2xl -z-10 opacity-85 animate-pulse"></div>

      {/* Floating Badges for Desktop */}
      <div className="hidden sm:flex absolute -left-12 top-20 bg-slate-900/95 backdrop-blur-md border border-emerald-500/40 p-3 rounded-2xl shadow-xl shadow-black/70 items-center gap-3 z-20">
        <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
        </div>
        <div className="text-right">
          <div className="text-xs font-bold text-white">مطابقة ملفات SRT</div>
          <div className="text-[11px] text-emerald-400 font-semibold">توقيتات فورية بالثواني</div>
        </div>
      </div>

      <div className="hidden sm:flex absolute -right-12 bottom-24 bg-slate-900/95 backdrop-blur-md border border-amber-500/40 p-3 rounded-2xl shadow-xl shadow-black/70 items-center gap-3 z-20">
        <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-amber-400" />
        </div>
        <div className="text-right">
          <div className="text-xs font-bold text-white">بدون علامة مائية</div>
          <div className="text-[11px] text-amber-400 font-semibold">فيديو نظيف 100%</div>
        </div>
      </div>

      {/* Phone Frame */}
      <div className="relative rounded-[46px] p-3.5 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-950 shadow-2xl shadow-black border border-slate-700/70 ring-1 ring-white/15">
        
        {/* Top Notch & Camera */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-700"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></div>
        </div>

        {/* Screen Content */}
        <div className="relative bg-[#0d1117] rounded-[36px] overflow-hidden border border-slate-800 text-slate-100 flex flex-col h-[630px] select-none">
          
          {/* Status Bar */}
          <div className="pt-3 px-6 pb-2 flex justify-between items-center text-[11px] text-slate-400 font-sans z-20">
            <span className="font-bold text-white tracking-wider">13:15</span>
            <div className="flex items-center gap-2">
              <span className="text-[9px] bg-slate-800 px-1 rounded font-mono">VPN</span>
              <span className="text-[9px] font-mono">H+</span>
              <div className="flex items-center gap-1">
                <span className="text-[9px] font-mono text-emerald-400">29%</span>
                <Battery className="w-3.5 h-3.5 text-emerald-400" />
              </div>
            </div>
          </div>

          {/* Interactive Screen Switcher Tab within Phone */}
          <div className="px-3 pt-1 pb-2 bg-[#161b22] border-b border-slate-800 flex justify-between gap-1 text-[10px] font-bold">
            <button
              type="button"
              onClick={() => setActiveScreenTab('main')}
              className={`flex-1 py-1.5 px-2 rounded-xl transition-all ${
                activeScreenTab === 'main'
                  ? 'bg-amber-400 text-slate-950 font-black shadow-sm'
                  : 'text-slate-400 hover:text-white bg-slate-900/60'
              }`}
            >
              1. استخراج SRT
            </button>
            <button
              type="button"
              onClick={() => setActiveScreenTab('motion')}
              className={`flex-1 py-1.5 px-2 rounded-xl transition-all ${
                activeScreenTab === 'motion'
                  ? 'bg-emerald-500 text-slate-950 font-black shadow-sm'
                  : 'text-slate-400 hover:text-white bg-slate-900/60'
              }`}
            >
              2. تأثير الحركة
            </button>
            <button
              type="button"
              onClick={() => setActiveScreenTab('export')}
              className={`flex-1 py-1.5 px-2 rounded-xl transition-all ${
                activeScreenTab === 'export'
                  ? 'bg-cyan-400 text-slate-950 font-black shadow-sm'
                  : 'text-slate-400 hover:text-white bg-slate-900/60'
              }`}
            >
              3. تصدير وحفظ
            </button>
          </div>

          {/* Phone Body - Screen 1 (Actual UI from Screenshot 1) */}
          {activeScreenTab === 'main' && (
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 custom-scrollbar text-right animate-fade-in">
              {/* Header Title */}
              <div className="text-center pt-1">
                <h3 className="text-lg font-black text-white">مدمج الصور بالصوت</h3>
                <p className="text-[10px] text-slate-400 mt-0.5">
                  تحويل مجموعة صور + توقيتات + صوت إلى فيديو واحد
                </p>
              </div>

              {/* Circular Timer Widget - Real UI from Screenshot 1 */}
              <div className="bg-[#161b22] p-4 rounded-2xl border border-slate-800 flex flex-col items-center justify-center relative shadow-md">
                <div className="relative w-28 h-28 flex items-center justify-center my-1">
                  {/* Outer SVG Ring */}
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      stroke="#22272e"
                      strokeWidth="7"
                      fill="transparent"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      stroke="#22c55e"
                      strokeWidth="7"
                      strokeDasharray="264"
                      strokeDashoffset="75"
                      strokeLinecap="round"
                      fill="transparent"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-2xl font-black font-mono text-white">03:22</span>
                    <span className="text-[10px] text-slate-400 mt-0.5">دقيقة / ثانية</span>
                  </div>
                </div>

                <div className="text-[10px] text-slate-300 mt-1 mb-2.5">
                  الوقت المتبقي: 03:22 — شاهد إعلان لتجديد 5+ دقائق
                </div>

                {/* Yellow Watch Ad Button */}
                <button
                  type="button"
                  className="w-full py-2.5 px-3 rounded-xl bg-[#ffc107] hover:bg-[#ffca28] text-slate-950 font-black text-xs shadow-md transition-transform active:scale-95"
                >
                  شاهد إعلان + 5 دقائق
                </button>
              </div>

              {/* Section 0: SRT Extraction - Real UI */}
              <div className="bg-[#161b22] p-3.5 rounded-2xl border border-slate-800 space-y-2.5">
                <div className="text-xs font-black text-[#ffc107]">
                  0. استخراج التوقيتات من ملف SRT
                </div>

                {/* Choose SRT button */}
                <button
                  type="button"
                  className="w-full py-2.5 px-3 rounded-xl bg-[#0d1117] border border-[#ffc107] text-[#ffc107] font-bold text-xs hover:bg-[#ffc107]/10 transition-colors"
                >
                  اختر ملف SRT (.srt)
                </button>

                {/* Output Info Box */}
                <div className="bg-[#0d1117] p-2.5 rounded-xl border border-slate-800 text-[10px] text-slate-400 text-center leading-relaxed">
                  سيظهر هنا ناتج الاستخراج: قائمة الأوقات + عدد المشاهد + المدة الكلية
                </div>

                {/* Two Action Buttons: Fill & Copy */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFilledTimings(!filledTimings)}
                    className="py-2 px-2 rounded-xl bg-[#00e5ff] text-slate-950 font-bold text-[11px] hover:opacity-90"
                  >
                    {filledTimings ? '✓ تم التعبئة' : 'تعبئة في حقل التوقيتات'}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setCopiedTimings(true);
                      setTimeout(() => setCopiedTimings(false), 2000);
                    }}
                    className="py-2 px-2 rounded-xl bg-[#ffc107] text-slate-950 font-bold text-[11px] hover:opacity-90"
                  >
                    {copiedTimings ? '✓ تم النسخ' : 'نسخ الأوقات'}
                  </button>
                </div>
              </div>

              {/* Section 1: Timings Box */}
              <div className="bg-[#161b22] p-3.5 rounded-2xl border border-slate-800 space-y-2">
                <div className="text-xs font-black text-[#00e5ff]">
                  1. التوقيتات (بالثواني)
                </div>

                <div className="p-3 bg-[#0d1117] border border-indigo-500/60 rounded-xl font-mono text-xs text-slate-300 space-y-1">
                  <div className="text-[10px] text-slate-500 font-sans">الصق الأرقام هنا، سطر واحد لكل توقيت...</div>
                  <div className="text-left font-bold text-slate-200">
                    <div>2.00</div>
                    <div>3.00</div>
                    <div>2.00</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Phone Body - Screen 2 (Actual UI from Screenshot 2) */}
          {activeScreenTab === 'motion' && (
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 custom-scrollbar text-right animate-fade-in">
              <div className="bg-[#161b22] p-3.5 rounded-2xl border border-slate-800 space-y-3">
                <div className="text-xs font-black text-[#ffc107]">
                  تأثير الحركة (يُطبّق أثناء التصدير — اختر نوعاً واحداً)
                </div>

                {/* 10 Motion Effect Checkbox Grid - Real UI */}
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  {[
                    { id: 'zoom_in', name: 'تكبير تدريجي' },
                    { id: 'zoom_out', name: 'تصغير تدريجي' },
                    { id: 'pan_right', name: 'انزلاق لليمين' },
                    { id: 'pan_left', name: 'انزلاق لليسار' },
                    { id: 'pan_down', name: 'انزلاق لأسفل' },
                    { id: 'pan_up', name: 'انزلاق لأعلى' },
                    { id: 'zoom_pan', name: 'تكبير مع انزلاق' },
                    { id: 'shake', name: 'اهتزاز (Shake)' },
                    { id: 'drift', name: 'انزلاق خفيف' },
                    { id: 'pulse', name: 'نبض (Pulse)' }
                  ].map((eff) => {
                    const isSelected = selectedEffect === eff.id;
                    return (
                      <button
                        key={eff.id}
                        type="button"
                        onClick={() => setSelectedEffect(eff.id)}
                        className={`p-2 rounded-xl border flex items-center justify-between transition-all ${
                          isSelected
                            ? 'bg-[#00e5ff]/15 border-[#00e5ff] text-[#00e5ff] font-bold'
                            : 'bg-[#0d1117] border-slate-800 text-slate-300'
                        }`}
                      >
                        <span className="text-[10px]">{eff.name}</span>
                        {isSelected ? (
                          <div className="w-3.5 h-3.5 rounded bg-[#00e5ff] text-slate-950 flex items-center justify-center text-[9px] font-black">
                            ✓
                          </div>
                        ) : (
                          <div className="w-3.5 h-3.5 rounded border border-slate-600"></div>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Intensity Slider */}
                <div className="pt-2 space-y-1">
                  <div className="flex justify-between items-center text-[10px] font-bold text-slate-300">
                    <span>شدة الحركة: 50%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#00e5ff] h-full w-1/2"></div>
                  </div>
                </div>
              </div>

              {/* Export Settings Dropdowns */}
              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center bg-[#161b22] p-2.5 rounded-xl border border-slate-800">
                  <span className="font-mono text-white">1080p</span>
                  <span className="text-slate-400">الدقة</span>
                </div>

                <div className="flex justify-between items-center bg-[#161b22] p-2.5 rounded-xl border border-slate-800">
                  <span className="font-mono text-white">16:9</span>
                  <span className="text-slate-400">نسبة الأبعاد</span>
                </div>

                <div className="flex justify-between items-center bg-[#161b22] p-2.5 rounded-xl border border-slate-800">
                  <span className="text-white">جودة عالية</span>
                  <span className="text-slate-400">الجودة / الضغط</span>
                </div>

                <div className="flex justify-between items-center bg-[#161b22] p-2.5 rounded-xl border border-slate-800">
                  <span className="font-mono text-white">30 FPS</span>
                  <span className="text-slate-400">معدل الإطارات</span>
                </div>
              </div>

              {/* Estimated Size */}
              <div className="text-center text-[11px] font-bold text-[#ffc107]">
                الحجم التقديري: ~6.8 MB (الدقة 1920x1080)
              </div>

              {/* Big Green Export Button */}
              <button
                type="button"
                onClick={() => setActiveScreenTab('export')}
                className="w-full py-3 px-4 rounded-xl bg-[#00e676] hover:bg-[#00c853] text-slate-950 font-black text-sm shadow-lg shadow-emerald-500/20 active:scale-95 transition-transform"
              >
                تصدير الفيديو
              </button>
            </div>
          )}

          {/* Phone Body - Screen 3 (Actual UI from Screenshot 3) */}
          {activeScreenTab === 'export' && (
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 custom-scrollbar text-right animate-fade-in">
              <div className="bg-[#161b22] p-3.5 rounded-2xl border border-slate-800 space-y-3">
                <div className="text-xs font-black text-[#00e5ff]">
                  تحريك الفيديو (إضافة اهتزاز)
                </div>

                <div className="flex justify-between items-center bg-[#0d1117] p-2.5 rounded-xl border border-slate-800 text-xs">
                  <span className="text-white">تكبير تدريجي</span>
                  <span className="text-slate-400">نوع الاهتزاز</span>
                </div>

                {/* Sliders in Purple */}
                <div className="space-y-3 pt-1">
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] text-slate-300">
                      <span>حدة الاهتزاز: 50%</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[#8b5cf6] h-full w-1/2"></div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] text-slate-300">
                      <span>سرعة الاهتزاز: 50%</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[#8b5cf6] h-full w-1/2"></div>
                    </div>
                  </div>
                </div>

                <div className="text-[10px] text-slate-400">
                  النوع المختار: <span className="text-white font-bold">تكبير تدريجي</span>
                </div>

                {/* Big Cyan Apply Button */}
                <button
                  type="button"
                  className="w-full py-2.5 px-3 rounded-xl bg-[#00e5ff] text-slate-950 font-black text-xs hover:opacity-95 transition-opacity"
                >
                  تطبيق الاهتزاز على الفيديو
                </button>
              </div>

              {/* Progress 100% Completed */}
              <div className="bg-[#161b22] p-3.5 rounded-2xl border border-slate-800 space-y-2">
                <div className="flex justify-between items-center text-[10px] font-bold text-slate-300">
                  <span className="text-emerald-400 font-mono">100%</span>
                  <span>الإطارات: 210 / 210</span>
                </div>

                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#00e676] h-full w-full"></div>
                </div>

                <div className="text-[10px] text-slate-300 text-center pt-1 font-bold">
                  اكتمل التصدير! الحجم: 6.3 MB — تم الحفظ تلقائياً في المعرض
                </div>
              </div>

              {/* Save Buttons */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  className="py-2.5 px-3 rounded-xl bg-[#6366f1] text-white font-bold text-xs shadow-md"
                >
                  حفظ في المعرض
                </button>
                <button
                  type="button"
                  className="py-2.5 px-3 rounded-xl bg-[#0d1117] border border-slate-700 text-slate-200 font-bold text-xs"
                >
                  حفظ باسم...
                </button>
              </div>

              {/* 100% Clean / No Watermark Note */}
              <div className="text-center text-[10px] text-slate-400 pt-1">
                الفيديو النهائي نظيف 100% — بلا أي علامة مائية أو اسم تطبيق
              </div>
            </div>
          )}

          {/* Bottom In-Phone Download CTA */}
          <div className="p-3 bg-[#161b22] border-t border-slate-800">
            <button
              onClick={() => {
                triggerDirectApkDownload();
                onDownloadClick();
              }}
              type="button"
              className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 text-slate-950 font-black text-xs text-center shadow-lg shadow-emerald-500/25 active:scale-95 transition-transform cursor-pointer flex items-center justify-center gap-1.5"
            >
              <ArrowDownToLine className="w-4 h-4 stroke-[2.5]" />
              <span>تحميل التطبيق الآن (APK - {APP_CONFIG.size})</span>
            </button>
          </div>

          {/* Bottom Home Indicator */}
          <div className="py-1 flex justify-center bg-[#0d1117]">
            <div className="w-24 h-1 bg-slate-700 rounded-full"></div>
          </div>

        </div>
      </div>
    </div>
  );
};
