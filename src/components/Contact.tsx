import { Mail } from 'lucide-react';

export function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          padding: '72px 24px 60px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(115deg, #060b1f 0%, #08122c 45%, #0b1a3a 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(96,165,250,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.08) 1px, transparent 1px)',
            backgroundSize: '52px 52px',
            opacity: 0.25,
          }}
        />
        <div style={{ position: 'relative', zIndex: 1 }} className="max-w-5xl mx-auto">
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#fff', margin: '0 0 16px 0', lineHeight: 1.15 }}>
            Get In Touch
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', maxWidth: '600px', lineHeight: 1.7, margin: 0 }}>
            Interested in collaboration, joining our team, or learning more about our research?
            We'd love to hear from you.
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="max-w-2xl">
          <h2 className="text-3xl mb-8">Contact</h2>

          <div className="flex gap-4">
            <Mail className="w-6 h-6 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg mb-1">Email</h3>
              <a href="mailto:idiater@uic.edu" className="text-gray-700 hover:text-black text-lg">
                idiater@uic.edu
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}