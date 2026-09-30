import React, { useState } from 'react';
import { 
  Share2, 
  X, 
  Check, 
  Copy, 
  Send, 
  MessageCircle, 
  Twitter, 
  Facebook, 
  Mail 
} from 'lucide-react';
import { DIRECT_APK_DOWNLOAD_URL, APP_CONFIG } from '../constants';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = window.location.href;
  const shareText = `حمّل تطبيق الأندرويد الرسمي (${APP_CONFIG.version}) الآن برابط تنزيل مباشر ومجاني:`;

  const handleCopy = () => {
    navigator.clipboard.writeText(`${shareText}\n${currentUrl}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareLinks = [
    {
      name: "واتساب (WhatsApp)",
      icon: <MessageCircle className="w-5 h-5 text-emerald-400" />,
      bg: "bg-emerald-500/10 hover:bg-emerald-500/20 border-emerald-500/30",
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareText}\n${currentUrl}`)}`
    },
    {
      name: "تيليجرام (Telegram)",
      icon: <Send className="w-5 h-5 text-sky-400" />,
      bg: "bg-sky-500/10 hover:bg-sky-500/20 border-sky-500/30",
      url: `https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareText)}`
    },
    {
      name: "منصة إكس (Twitter/X)",
      icon: <Twitter className="w-5 h-5 text-cyan-400" />,
      bg: "bg-cyan-500/10 hover:bg-cyan-500/20 border-cyan-500/30",
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${shareText} ${currentUrl}`)}`
    },
    {
      name: "فيسبوك (Facebook)",
      icon: <Facebook className="w-5 h-5 text-blue-400" />,
      bg: "bg-blue-500/10 hover:bg-blue-500/20 border-blue-500/30",
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-right overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 left-5 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mx-auto mb-3">
            <Share2 className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white">
            مشاركة رابط التطبيق مع أصدقائك
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            شارك صفحة التحميل المباشرة عبر منصات التواصل المفضلة لديك.
          </p>
        </div>

        {/* Social Share Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {shareLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3.5 rounded-2xl border flex items-center gap-3 transition-all ${item.bg}`}
            >
              {item.icon}
              <span className="text-xs font-bold text-slate-200">{item.name}</span>
            </a>
          ))}
        </div>

        {/* Copy Link Section */}
        <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800 flex items-center justify-between gap-2">
          <input
            type="text"
            readOnly
            value={currentUrl}
            className="bg-transparent text-xs text-slate-400 flex-1 outline-none font-mono truncate px-1"
          />
          <button
            onClick={handleCopy}
            className={`py-2 px-3.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
              copied
                ? 'bg-emerald-500 text-slate-950 font-black'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
            }`}
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'تم النسخ!' : 'نسخ'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
