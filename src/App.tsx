/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { SrtSyncDemo } from './components/SrtSyncDemo';
import { MotionEffectsStudio } from './components/MotionEffectsStudio';
import { AppScreenshots } from './components/AppScreenshots';
import { InstallGuide } from './components/InstallGuide';
import { SpecsSection } from './components/SpecsSection';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingDownloadBar } from './components/FloatingDownloadBar';
import { DownloadSuccessModal } from './components/DownloadSuccessModal';
import { QrModal } from './components/QrModal';
import { ShareModal } from './components/ShareModal';
import { triggerDirectApkDownload } from './constants';

export default function App() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [qrModalOpen, setQrModalOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);

  const handleDownloadTrigger = () => {
    // Fire festive celebration confetti
    try {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#10b981', '#06b6d4', '#3b82f6', '#14b8a6', '#f59e0b']
      });
    } catch {
      // ignore
    }

    // Trigger direct automatic download bypassing Google Drive UI
    triggerDirectApkDownload();

    // Show download initiated confirmation modal
    setDownloadModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-['Cairo',sans-serif]">
      {/* Navigation Bar */}
      <Navbar 
        onOpenQr={() => setQrModalOpen(true)}
        onOpenShare={() => setShareModalOpen(true)}
        onDownloadClick={handleDownloadTrigger}
      />

      {/* Main Sections */}
      <main className="flex-1">
        {/* Hero Section with Phone Mockup */}
        <Hero 
          onDownloadClick={handleDownloadTrigger}
          onOpenQr={() => setQrModalOpen(true)}
          onOpenShare={() => setShareModalOpen(true)}
        />

        {/* Core Features Grid */}
        <Features />

        {/* SRT Sync & Aspect Ratio Simulator */}
        <SrtSyncDemo />

        {/* Interactive 10 Motion Effects Studio */}
        <MotionEffectsStudio />

        {/* Real App Screenshots Showcase */}
        <AppScreenshots />

        {/* Practical 6-Step Workflow & APK Install Guide */}
        <InstallGuide onDownloadClick={handleDownloadTrigger} />

        {/* Technical Specs & Permissions */}
        <SpecsSection onDownloadClick={handleDownloadTrigger} />

        {/* User Reviews */}
        <Testimonials />

        {/* FAQ Accordion */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer 
        onDownloadClick={handleDownloadTrigger}
        onOpenQr={() => setQrModalOpen(true)}
        onOpenShare={() => setShareModalOpen(true)}
      />

      {/* Floating Action Bar */}
      <FloatingDownloadBar 
        onDownloadClick={handleDownloadTrigger}
        onOpenQr={() => setQrModalOpen(true)}
      />

      {/* Interactive Modals */}
      <DownloadSuccessModal 
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />

      <QrModal 
        isOpen={qrModalOpen}
        onClose={() => setQrModalOpen(false)}
      />

      <ShareModal 
        isOpen={shareModalOpen}
        onClose={() => setShareModalOpen(false)}
      />
    </div>
  );
}
