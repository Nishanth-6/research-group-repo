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
    <div className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl mb-6">{settings.heroTitle}</h2>
        <p className="text-xl text-gray-300 max-w-3xl">
          {settings.heroSubtitle}
        </p>
      </div>
    </div>
  );
}
