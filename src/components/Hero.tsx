import { useEffect, useState } from 'react';
import { loadSiteSettings, type SiteSettings } from '../utils/dataLoader';

export function Hero() {
  const [settings, setSettings] = useState<SiteSettings>({
    siteTitle: 'Research Team',
    siteDescription: '',
    heroTitle: 'Research Projects',
    heroSubtitle: 'We develop intelligent systems and decision-support tools to enhance infrastructure resilience, accelerate clean energy deployment, and enable sustainable technology transitions.',
    contactEmail: ''
  });

  useEffect(() => {
    loadSiteSettings().then(setSettings);
  }, []);

  return (
    <div className="relative overflow-hidden bg-black text-white py-16 px-6">
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent 0px, transparent 79px, rgba(45, 212, 191, 0.12) 80px),
            repeating-linear-gradient(90deg, transparent 0px, transparent 79px, rgba(45, 212, 191, 0.12) 80px),
            repeating-linear-gradient(45deg, transparent 0px, transparent 2px, rgba(59, 130, 246, 0.08) 3px, transparent 4px),
            radial-gradient(circle at 70% 40%, rgba(45, 212, 191, 0.14) 0%, transparent 60%),
            radial-gradient(circle at 85% 70%, rgba(59, 130, 246, 0.1) 0%, transparent 60%)
          `,
          backgroundSize: '80px 80px, 80px 80px, 40px 40px, 100% 100%, 100% 100%',
          maskImage: 'radial-gradient(ellipse 70% 60% at 25% 55%, transparent 35%, black 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 25% 55%, transparent 35%, black 70%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-40"
        aria-hidden="true"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent 0px, transparent 39px, rgba(255, 255, 255, 0.04) 40px),
            repeating-linear-gradient(90deg, transparent 0px, transparent 39px, rgba(255, 255, 255, 0.04) 40px)
          `,
          backgroundSize: '40px 40px, 40px 40px',
          maskImage: 'radial-gradient(ellipse 65% 55% at 25% 55%, transparent 40%, black 72%)',
          WebkitMaskImage: 'radial-gradient(ellipse 65% 55% at 25% 55%, transparent 40%, black 72%)',
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-5xl mb-6">{settings.heroTitle}</h2>
        <p className="text-xl text-gray-300 max-w-3xl">
          {settings.heroSubtitle}
        </p>
      </div>
    </div>
  );
}
