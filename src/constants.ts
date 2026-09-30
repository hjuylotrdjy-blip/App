export const GOOGLE_DRIVE_FILE_ID = "1tPcMb6tl3LnIqmrxOEpYH3p7SrEsJy0l";

// Direct download links that bypass Google Drive preview page
export const DIRECT_APK_DOWNLOAD_URL = `https://drive.usercontent.google.com/download?id=${GOOGLE_DRIVE_FILE_ID}&export=download&confirm=t`;
export const APK_DOWNLOAD_URL = DIRECT_APK_DOWNLOAD_URL;
export const FALLBACK_DIRECT_URL = `https://drive.google.com/uc?export=download&id=${GOOGLE_DRIVE_FILE_ID}`;
export const API_DOWNLOAD_URL = `/api/download`;

export const APP_CONFIG = {
  name: "مدمج الصور بالصوت",
  shortName: "مدمج الصور بالصوت",
  englishName: "Video Merger - Audio & SRT Image Sync",
  tagline: "تحويل مجموعة الصور + ملف صوتي + ملف SRT إلى فيديو احترافي متزامن",
  version: "v26",
  releaseDate: "تحديث مارس 2026",
  size: "62 ميجابايت",
  sizeEn: "62 MB",
  package: "com.videomerger.app",
  minAndroid: "Android 7.0 (API 24)",
  targetAndroid: "Android 14 (API 34)",
  language: "العربية بالكامل (RTL)",
  category: "أدوات / إنتاج وتعديل الفيديو",
  contentRating: "للجميع (Everyone)",
  rating: 4.9,
  reviewsCount: "18,920",
  downloadsCount: "+150,000",
  privacyPolicyUrl: "https://privacypolicyappko.ai.studio/",
  downloadUrl: DIRECT_APK_DOWNLOAD_URL,
  drivePreviewUrl: "https://drive.google.com/file/d/1tPcMb6tl3LnIqmrxOEpYH3p7SrEsJy0l/view?usp=drivesdk"
};

export const MOTION_EFFECTS = [
  { id: 'zoom_in', name: 'تكبير تدريجي (Zoom In)', desc: 'الفيديو يكبر ببطء وانسيابية من البداية للنهاية' },
  { id: 'zoom_out', name: 'تصغير تدريجي (Zoom Out)', desc: 'الفيديو يصغر تدريجياً ليعطي بعداً سينمائياً' },
  { id: 'pan_right', name: 'انزلاق لليمين (Pan Right)', desc: 'الكاميرا تنزلق بسلاسة من اليسار إلى اليمين' },
  { id: 'pan_left', name: 'انزلاق لليسار (Pan Left)', desc: 'الكاميرا تنزلق من اليمين إلى اليسار' },
  { id: 'pan_down', name: 'انزلاق لأسفل (Pan Down)', desc: 'انزلاق الكاميرا من الأعلى نحو الأسفل' },
  { id: 'pan_up', name: 'انزلاق لأعلى (Pan Up)', desc: 'انزلاق الكاميرا من الأسفل نحو الأعلى' },
  { id: 'zoom_pan', name: 'تكبير مع انزلاق (Zoom + Pan)', desc: 'دمج ذكي بين التكبير التدريجي والانزلاق الجانبي' },
  { id: 'shake', name: 'اهتزاز سينمائي (Shake)', desc: 'اهتزاز متوازن في محورين يضفي حيوية ومشاعر قوية' },
  { id: 'drift', name: 'انزلاق خفيف (Subtle Drift)', desc: 'حركة انزلاق ناعمة وبطيئة جداً للمشاهد الهادئة' },
  { id: 'pulse', name: 'نبض دوري (Pulse)', desc: 'تكبير وتصغير إيقاعي يتماشى مع نغمات الصوت' }
];

/**
 * Triggers instant direct download without redirecting or navigating away from the page
 */
export const triggerDirectApkDownload = () => {
  let iframe = document.getElementById('apk-download-iframe') as HTMLIFrameElement;
  if (!iframe) {
    iframe = document.createElement('iframe');
    iframe.id = 'apk-download-iframe';
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
  }
  
  iframe.src = DIRECT_APK_DOWNLOAD_URL;

  const link = document.createElement('a');
  link.href = DIRECT_APK_DOWNLOAD_URL;
  link.setAttribute('download', 'video-merger-v26.apk');
  link.style.display = 'none';
  document.body.appendChild(link);
  
  setTimeout(() => {
    try {
      link.click();
    } catch {
      // ignore
    }
    setTimeout(() => {
      if (document.body.contains(link)) {
        document.body.removeChild(link);
      }
    }, 1000);
  }, 100);
};
