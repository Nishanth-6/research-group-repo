import { Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onPageChange?: (page: string) => void;
  onResearchAreaClick?: (slug: string) => void;
}

export function Footer({ onPageChange, onResearchAreaClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNav = (page: string) => {
    onPageChange?.(page);
    window.scrollTo({ top: 0 });
  };

  return (
    <footer
      style={{
        backgroundColor: '#0b1120',
        color: '#fff',
        padding: '28px 48px 16px',
      }}
    >
      <div
        className="footer-grid"
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '32px',
        }}
      >
        {/* Brand */}
        <div>
          <button
            onClick={() => handleNav('about')}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              display: 'block',
              marginBottom: '10px',
              fontSize: '1.3rem',
              fontWeight: 700,
              color: '#fff',
              letterSpacing: '0.15em',
            }}
          >
            IDIATER
          </button>
          <p
            style={{
              fontSize: '0.88rem',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.55)',
              margin: 0,
              maxWidth: '280px',
            }}
          >
            Infrastructure and Decision Intelligence for Accelerating Technology and Energy Resilience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4
            style={{
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)',
              margin: '0 0 14px 0',
            }}
          >
            Quick Links
          </h4>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { label: 'About', page: 'about' },
              { label: 'Research', page: 'research' },
              { label: 'Team', page: 'team' },
              { label: 'Publications', page: 'publications' },
              { label: 'Contact', page: 'contact' },
            ].map((item) => (
              <li key={item.page}>
                <button
                  onClick={() => handleNav(item.page)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'color 0.15s',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = '#fff'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.6)'; }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Research Areas */}
        <div>
          <h4
            style={{
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)',
              margin: '0 0 14px 0',
            }}
          >
            Research Areas
          </h4>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { label: 'Self-Adapting Approximations', slug: 'self-adapting-approximations' },
              { label: 'Energy Real Options', slug: 'energy-real-options' },
              { label: 'Energy & Computing Nexus', slug: 'energy-computing-nexus' },
              { label: 'Large-Scale Optimization', slug: 'large-scale-optimization' },
            ].map((area) => (
              <li key={area.slug}>
                <button
                  onClick={() => {
                    onResearchAreaClick?.(area.slug);
                    window.scrollTo({ top: 0 });
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    padding: 0,
                    textAlign: 'left',
                    transition: 'color 0.15s',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = '#fff'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.6)'; }}
                >
                  {area.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4
            style={{
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)',
              margin: '0 0 14px 0',
            }}
          >
            Contact
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <a
              href="mailto:idiater@uic.edu"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                color: 'rgba(255,255,255,0.6)',
                fontSize: '0.9rem',
                textDecoration: 'none',
                transition: 'color 0.15s',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#fff'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.6)'; }}
            >
              <Mail size={16} style={{ flexShrink: 0 }} />
              idiater@uic.edu
            </a>
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                color: 'rgba(255,255,255,0.6)',
                fontSize: '0.9rem',
              }}
            >
              <MapPin size={16} style={{ flexShrink: 0, marginTop: '3px' }} />
              University of Illinois Chicago
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: '1100px',
          margin: '20px auto 0',
          paddingTop: '16px',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <p style={{ margin: 0, fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)' }}>
          © {currentYear} IDIATER Research Group. All rights reserved.
        </p>
        <p style={{ margin: 0, fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)' }}>
          University of Illinois Chicago
        </p>
      </div>
    </footer>
  );
}
