import React, { useState, useEffect } from 'react';
import { 
  Clapperboard, 
  Sparkles, 
  Sliders, 
  Play, 
  RotateCcw, 
  Flame, 
  Maximize2, 
  Video, 
  CheckCircle2, 
  Zap,
  Gauge
} from 'lucide-react';
import { MOTION_EFFECTS } from '../constants';

export const MotionEffectsStudio: React.FC = () => {
  const [selectedEffect, setSelectedEffect] = useState(0);
  const [intensity, setIntensity] = useState(70);
  const [speed, setSpeed] = useState(60);
  const [isPlaying, setIsPlaying] = useState(true);

  // Restart animation loop when effect changes
  useEffect(() => {
    setIsPlaying(false);
    const t = setTimeout(() => setIsPlaying(true), 50);
    return () => clearTimeout(t);
  }, [selectedEffect, intensity, speed]);

  // Dynamic style calculation for live preview simulation
  const getEffectStyle = () => {
    if (!isPlaying) return {};
    const effectId = MOTION_EFFECTS[selectedEffect].id;
    const duration = `${(100 - speed * 0.7) / 20 + 1.2}s`;
    const scaleFactor = 1 + (intensity / 100) * 0.25;
    const translateVal = `${(intensity / 100) * 28}px`;

    switch (effectId) {
      case 'zoom_in':
        return {
          animation: `zoomInAnim ${duration} cubic-bezier(0.25, 1, 0.5, 1) infinite alternate`,
          transformOrigin: 'center center'
        };
      case 'zoom_out':
        return {
          animation: `zoomOutAnim ${duration} cubic-bezier(0.25, 1, 0.5, 1) infinite alternate`,
          transformOrigin: 'center center'
        };
      case 'pan_right':
        return {
          animation: `panRightAnim ${duration} ease-in-out infinite alternate`
        };
      case 'pan_left':
        return {
          animation: `panLeftAnim ${duration} ease-in-out infinite alternate`
        };
      case 'pan_down':
        return {
          animation: `panDownAnim ${duration} ease-in-out infinite alternate`
        };
      case 'pan_up':
        return {
          animation: `panUpAnim ${duration} ease-in-out infinite alternate`
        };
      case 'zoom_pan':
        return {
          animation: `zoomPanAnim ${duration} ease-in-out infinite alternate`
        };
      case 'shake':
        return {
          animation: `shakeAnim 0.35s ease-in-out infinite`
        };
      case 'drift':
        return {
          animation: `driftAnim ${duration} ease-in-out infinite alternate`
        };
      case 'pulse':
        return {
          animation: `pulseAnim ${duration} ease-in-out infinite`
        };
      default:
        return {};
    }
  };

  return (
    <section className="py-20 bg-slate-950 relative border-t border-slate-800/80 overflow-hidden">
      {/* Inline styles for the 10 custom CSS animations */}
      <style>{`
        @keyframes zoomInAnim {
          0% { transform: scale(1); }
          100% { transform: scale(1.22); }
        }
        @keyframes zoomOutAnim {
          0% { transform: scale(1.22); }
          100% { transform: scale(1); }
        }
        @keyframes panRightAnim {
          0% { transform: scale(1.1) translateX(-18px); }
          100% { transform: scale(1.1) translateX(18px); }
        }
        @keyframes panLeftAnim {
          0% { transform: scale(1.1) translateX(18px); }
          100% { transform: scale(1.1) translateX(-18px); }
        }
        @keyframes panDownAnim {
          0% { transform: scale(1.1) translateY(-18px); }
          100% { transform: scale(1.1) translateY(18px); }
        }
        @keyframes panUpAnim {
          0% { transform: scale(1.1) translateY(18px); }
          100% { transform: scale(1.1) translateY(-18px); }
        }
        @keyframes zoomPanAnim {
          0% { transform: scale(1) translateX(-14px); }
          100% { transform: scale(1.2) translateX(14px); }
        }
        @keyframes shakeAnim {
          0%, 100% { transform: translate(0, 0) scale(1.05); }
          20% { transform: translate(-3px, 2px) scale(1.05); }
          40% { transform: translate(3px, -2px) scale(1.05); }
          60% { transform: translate(-2px, -3px) scale(1.05); }
          80% { transform: translate(2px, 3px) scale(1.05); }
        }
        @keyframes driftAnim {
          0% { transform: scale(1.08) translate(-8px, -4px); }
          100% { transform: scale(1.08) translate(8px, 4px); }
        }
        @keyframes pulseAnim {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.14); }
        }
      `}</style>

      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/30 mb-3 shadow-sm">
            <Flame className="w-4 h-4 text-emerald-400" />
            <span>ميزة حصرية بعد التصدير في تطبيق مدمج الصور بالصوت</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            استوديو المؤثرات الحركية (10 أنواع كاميرا)
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            بعد تصدير الفيديو المتزامن مع ملف الـ SRT، يمكنك فوراً إضافة حركة كاميرا سينمائية احترافية تجعل الفيديو ينبض بالحياة مع تحكم كامل في شدة وسرعة الحركة!
          </p>
        </div>

        {/* Interactive Studio Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-md">
          
          {/* Left Column (Desktop) / Effects Selector List */}
          <div className="lg:col-span-6 space-y-4 text-right order-2 lg:order-1">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <span className="text-xs font-bold text-slate-400">اختر نوع الحركة لتجربتها حياً:</span>
              <span className="text-xs font-black text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                10 مؤثرات ذكية
              </span>
            </div>

            {/* Effects Buttons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[340px] overflow-y-auto pr-1 custom-scrollbar">
              {MOTION_EFFECTS.map((effect, idx) => {
                const isSelected = selectedEffect === idx;
                return (
                  <button
                    key={effect.id}
                    onClick={() => setSelectedEffect(idx)}
                    className={`p-3 rounded-2xl text-right transition-all duration-200 border flex flex-col justify-between ${
                      isSelected
                        ? 'bg-gradient-to-r from-emerald-500/20 to-teal-500/10 border-emerald-500/50 shadow-md text-white'
                        : 'bg-slate-950/60 hover:bg-slate-800/80 border-slate-800 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-1">
                      <span className={`text-xs font-black ${isSelected ? 'text-emerald-400' : 'text-white'}`}>
                        {idx + 1}. {effect.name}
                      </span>
                      {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />}
                    </div>
                    <p className="text-[11px] text-slate-400 leading-tight">
                      {effect.desc}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Sliders Controls (Intensity & Speed) */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/90 space-y-4 mt-4">
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-slate-300 flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5 text-emerald-400" />
                    <span>شريط شدة الحركة (Intensity)</span>
                  </span>
                  <span className="text-emerald-400 font-mono">{intensity}%</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="100"
                  value={intensity}
                  onChange={(e) => setIntensity(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-slate-300 flex items-center gap-1.5">
                    <Gauge className="w-3.5 h-3.5 text-cyan-400" />
                    <span>شريط سرعة الحركة (Speed)</span>
                  </span>
                  <span className="text-cyan-400 font-mono">{speed}%</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="100"
                  value={speed}
                  onChange={(e) => setSpeed(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>
            </div>

          </div>

          {/* Right Column / Live Canvas Video Preview */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[320px] sm:max-w-[340px] aspect-[9/16] rounded-[36px] p-3 bg-slate-900 border-2 border-emerald-500/40 shadow-2xl shadow-emerald-950/40 flex flex-col justify-between overflow-hidden">
              
              {/* Screen Top Overlay */}
              <div className="absolute top-5 left-5 right-5 z-20 flex justify-between items-center text-[10px] text-white">
                <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 font-mono font-bold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  REC • 4K 60FPS
                </span>
                <span className="bg-emerald-500/80 text-slate-950 px-2 py-0.5 rounded-full font-black">
                  9:16 Shorts/Reels
                </span>
              </div>

              {/* Animated Inner Visual Container */}
              <div className="w-full h-full rounded-[26px] overflow-hidden relative bg-slate-950 flex items-center justify-center">
                <div 
                  className="w-full h-full relative flex items-center justify-center"
                  style={getEffectStyle()}
                >
                  {/* Visual Scene Simulation */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950 via-slate-900 to-cyan-950"></div>
                  
                  {/* Decorative Islamic / Artistic Architectural Composition */}
                  <div className="relative z-10 text-center px-4 space-y-3">
                    <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-tr from-emerald-500 via-teal-400 to-cyan-400 p-[2px] shadow-2xl shadow-emerald-500/30">
                      <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center flex-col">
                        <Clapperboard className="w-10 h-10 text-emerald-400" />
                      </div>
                    </div>
                    
                    <div className="inline-block px-3 py-1 rounded-full bg-slate-900/90 border border-emerald-500/40 text-emerald-300 text-xs font-bold">
                      {MOTION_EFFECTS[selectedEffect].name}
                    </div>

                    <div className="bg-black/75 backdrop-blur-md p-3 rounded-2xl border border-white/10 text-right">
                      <div className="text-[11px] text-emerald-400 font-mono">00:04.250 ➔ 00:08.700</div>
                      <div className="text-xs font-bold text-white mt-0.5">
                        &quot;مزامنة دقيقة للصورة مع الكلمات والصوت&quot;
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Progress Bar Simulation */}
              <div className="absolute bottom-5 left-5 right-5 z-20 space-y-1 bg-black/70 backdrop-blur-md p-2.5 rounded-2xl border border-white/10 text-right">
                <div className="flex justify-between items-center text-[10px] text-slate-300 font-bold">
                  <span>تطبيق الحركة في المعرض</span>
                  <span className="text-emerald-400 font-mono">100% تلقائي</span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-pulse w-full"></div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
