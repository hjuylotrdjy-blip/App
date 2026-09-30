import React, { useState } from 'react';
import { 
  FileText, 
  Images, 
  Music, 
  CheckCircle2, 
  AlertCircle, 
  Smartphone, 
  Tv, 
  Square, 
  Sparkles, 
  ArrowLeft, 
  Play, 
  ArrowDownCircle, 
  Layers,
  Wand2
} from 'lucide-react';

export const SrtSyncDemo: React.FC = () => {
  const [aspectRatio, setAspectRatio] = useState<'9:16' | '16:9' | '1:1'>('9:16');
  const [imagesCount, setImagesCount] = useState(12);
  const [srtCount, setSrtCount] = useState(12);

  const isMatched = imagesCount === srtCount;

  return (
    <section className="py-20 bg-slate-900/40 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold border border-cyan-500/30 mb-3">
            <Wand2 className="w-3.5 h-3.5" /> هندسة المزامنة الذكية
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            كيف يعمل مؤشر المطابقة وتوافق ملفات SRT؟
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            يقوم التطبيق بتحليل توقيتات ملف الـ SRT ومطابقتها مع عدد الصور وفرزها تلقائياً بالترقيم الرقمي لتفادي أي أخطاء قبل بدء التصدير.
          </p>
        </div>

        {/* Interactive Sync Simulator Card */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Controls & Metrics */}
            <div className="lg:col-span-7 space-y-6 text-right">
              
              {/* Aspect Ratio Selector */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300">اختر نسبة العرض المتوافقة:</label>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  <button
                    onClick={() => setAspectRatio('9:16')}
                    className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center gap-1.5 ${
                      aspectRatio === '9:16'
                        ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400 font-bold'
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <Smartphone className="w-5 h-5" />
                    <span className="text-xs font-black">9:16 عمودي</span>
                    <span className="text-[10px] text-slate-400">Reels / Shorts</span>
                  </button>

                  <button
                    onClick={() => setAspectRatio('16:9')}
                    className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center gap-1.5 ${
                      aspectRatio === '16:9'
                        ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400 font-bold'
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <Tv className="w-5 h-5" />
                    <span className="text-xs font-black">16:9 أفقي</span>
                    <span className="text-[10px] text-slate-400">YouTube / TV</span>
                  </button>

                  <button
                    onClick={() => setAspectRatio('1:1')}
                    className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center gap-1.5 ${
                      aspectRatio === '1:1'
                        ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400 font-bold'
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <Square className="w-5 h-5" />
                    <span className="text-xs font-black">1:1 مربع</span>
                    <span className="text-[10px] text-slate-400">Instagram / Post</span>
                  </button>
                </div>
              </div>

              {/* Match Indicator Simulation */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-slate-300">مؤشر المطابقة الذكي (Match Indicator):</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-black flex items-center gap-1.5 ${
                    isMatched
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                  }`}>
                    {isMatched ? <CheckCircle2 className="w-3.5 h-3.5" /> : <AlertCircle className="w-3.5 h-3.5" />}
                    <span>{isMatched ? 'متطابق تماماً (جاهز للتصدير)' : 'غير متطابق (يرجى مراجعة الصور)'}</span>
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex justify-between items-center">
                    <span className="text-slate-400">عدد الصور المختارة:</span>
                    <span className="font-mono font-bold text-white">{imagesCount} صورة</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex justify-between items-center">
                    <span className="text-slate-400">توقيتات ملف SRT:</span>
                    <span className="font-mono font-bold text-white">{srtCount} توقيت</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] text-slate-400">اختبر حالة عدم التطابق والمطابقة:</span>
                  <div className="flex gap-1.5">
                    <button
                      onClick={() => { setImagesCount(12); setSrtCount(12); }}
                      className="px-2.5 py-1 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 text-[11px] font-bold border border-emerald-500/30"
                    >
                      حالة المطابقة (12/12)
                    </button>
                    <button
                      onClick={() => { setImagesCount(10); setSrtCount(12); }}
                      className="px-2.5 py-1 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 text-rose-400 text-[11px] font-bold border border-rose-500/30"
                    >
                      تجربة التنبيه (10/12)
                    </button>
                  </div>
                </div>
              </div>

              {/* Audio & Time comparison */}
              <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <Music className="w-4 h-4 text-cyan-400" />
                  <span className="text-slate-300">مقارنة مدة الصوت مع توقيتات SRT:</span>
                </div>
                <span className="text-emerald-400 font-mono font-bold">01:48 دقيقة (متطابق 100%)</span>
              </div>

            </div>

            {/* Visual Live Aspect Box */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="w-full max-w-[280px] bg-slate-950 p-4 rounded-3xl border border-slate-800 flex flex-col items-center">
                <div className="text-xs font-bold text-slate-400 mb-3 text-center">
                  معاينة نسبة الأبعاد: <span className="text-emerald-400 font-mono">{aspectRatio}</span>
                </div>

                <div 
                  className={`w-full bg-slate-900 border-2 rounded-2xl transition-all duration-300 flex flex-col items-center justify-center p-3 relative overflow-hidden ${
                    isMatched ? 'border-emerald-500/50 shadow-lg shadow-emerald-500/10' : 'border-rose-500/50'
                  }`}
                  style={{
                    aspectRatio: aspectRatio === '9:16' ? '9/16' : aspectRatio === '16:9' ? '16/9' : '1/1',
                    maxHeight: '360px'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/30 via-slate-900 to-cyan-950/30"></div>
                  
                  <div className="relative z-10 text-center space-y-2">
                    <Images className="w-8 h-8 text-emerald-400 mx-auto" />
                    <div className="text-[11px] font-bold text-white">
                      صورة متزامنة #04
                    </div>
                    <div className="text-[10px] text-slate-400 bg-black/60 px-2 py-0.5 rounded font-mono">
                      00:12.400 ➔ 00:16.800
                    </div>
                  </div>

                  <div className="absolute bottom-2 left-2 right-2 text-center">
                    <span className="text-[9px] bg-black/70 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/30">
                      فرز تلقائي حسب الاسم (04.jpg)
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
