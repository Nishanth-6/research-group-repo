import { useState, useEffect, useRef } from 'react';
import { sanityClient, clean } from '../lib/sanity';

/* ─── Data Model ─── */

interface PublicationLink {
  label: string;
  url: string;
}

interface SanityPublication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: 'journal' | 'conference' | 'workshop' | 'working_paper' | 'preprint';
  researchArea?: string;
  status?: string;
  links?: PublicationLink[];
}

/* ─── GROQ Query ─── */

const PUBLICATIONS_QUERY = `*[_type == "publication"] | order(year desc, title asc) {
  title,
  authors,
  venue,
  year,
  type,
  researchArea,
  status,
  links
}`;

/* ─── Research Area tabs ─── */

const researchAreaTabs: { value: string | null; label: string }[] = [
  { value: null, label: 'All Publications' },
  { value: 'self-adapting-approximations', label: 'Self-Adapting Approximations' },
  { value: 'energy-real-options', label: 'Energy Real Options' },
  { value: 'energy-computing-nexus', label: 'Energy & Computing Nexus' },
  { value: 'large-scale-optimization', label: 'Large-Scale Optimization' },
];

interface PublicationsProps {
  initialFilter?: string | null;
}

export function Publications({ initialFilter = null }: PublicationsProps) {
  const [publications, setPublications] = useState<SanityPublication[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeArea, setActiveArea] = useState<string | null>(initialFilter);
  const listRef = useRef<HTMLDivElement>(null);

  // Sync initialFilter from parent
  useEffect(() => {
    setActiveArea(initialFilter);
  }, [initialFilter]);

  useEffect(() => {
    sanityClient
      .fetch<SanityPublication[]>(PUBLICATIONS_QUERY)
      .then((data) => {
        setPublications(data ?? []);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading publications from Sanity:', err);
        setLoading(false);
      });
  }, []);

  // Filter by research area (clean stega encoding before comparing)
  const filtered = activeArea
    ? publications.filter((p) => clean(p.researchArea) === activeArea)
    : publications;

  // Group by year
  const years = Array.from(new Set(filtered.map((p) => p.year))).sort((a, b) => b - a);

  return (
    <div className="min-h-screen bg-white">
      {/* ===== HERO SECTION with background image ===== */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#0a0e1a',
        }}
      >
        {/* Background image */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 58%',
            opacity: 0.75,
          }}
        />
        {/* Dark gradient */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(100deg, rgba(8,12,28,0.55) 0%, rgba(8,12,28,0.35) 45%, rgba(8,12,28,0.15) 100%)',
          }}
        />
        {/* No grid overlays — clean atmospheric photo */}

        <div
          style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '80px 48px',
          }}
        >
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
              fontWeight: 700,
              color: '#fff',
              margin: '0 0 16px 0',
              letterSpacing: '-0.02em',
            }}
          >
            Publications
          </h1>
          <p
            style={{
              fontSize: '1.15rem',
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.7,
              maxWidth: '650px',
              margin: 0,
            }}
          >
            Our research spans multiple domains including decision intelligence, energy systems, infrastructure resilience, and sustainability.
          </p>
        </div>
      </div>

      {/* ===== FILTER TABS ===== */}
      <div
        style={{
          borderBottom: '1px solid #e5e7eb',
          backgroundColor: '#fff',
          position: 'sticky',
          top: '0',
          zIndex: 40,
        }}
      >
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '0 48px',
            display: 'flex',
            gap: '0',
            overflowX: 'auto',
          }}
        >
          {researchAreaTabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setActiveArea(tab.value)}
              style={{
                padding: '16px 20px',
                fontSize: '0.85rem',
                fontWeight: activeArea === tab.value ? 700 : 500,
                color: activeArea === tab.value ? '#111827' : '#6b7280',
                borderBottom: activeArea === tab.value ? '2px solid #111827' : '2px solid transparent',
                background: 'none',
                border: 'none',
                borderBottomWidth: '2px',
                borderBottomStyle: 'solid',
                borderBottomColor: activeArea === tab.value ? '#111827' : 'transparent',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'color 0.15s',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ===== PUBLICATIONS LIST grouped by year ===== */}
      <div
        ref={listRef}
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '48px 48px 80px',
        }}
      >
        {loading ? (
          <p style={{ color: '#9ca3af', textAlign: 'center', padding: '48px 0' }}>
            Loading publications…
          </p>
        ) : filtered.length === 0 ? (
          <p style={{ color: '#9ca3af', textAlign: 'center', padding: '48px 0' }}>
            No publications found in this category.
          </p>
        ) : (
          years.map((year) => {
            const yearPapers = filtered.filter((p) => p.year === year);
            return (
              <div key={year} style={{ marginBottom: '56px' }}>
                <h2
                  style={{
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    color: '#111827',
                    margin: '0 0 8px 0',
                  }}
                >
                  {year}
                </h2>
                <div
                  style={{
                    borderBottom: '2px solid #e5e7eb',
                    marginBottom: '24px',
                  }}
                />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                  {yearPapers.map((paper, idx) => (
                    <div key={idx}>
                      <h3
                        style={{
                          fontSize: '1.05rem',
                          fontWeight: 600,
                          color: '#111827',
                          lineHeight: 1.5,
                          margin: '0 0 6px 0',
                        }}
                      >
                    {paper.title}
                  </h3>
                      <p
                        style={{
                          fontSize: '0.9rem',
                          color: '#4b5563',
                          margin: '0 0 4px 0',
                        }}
                      >
                        {paper.authors}
                      </p>
                      <p
                        style={{
                          fontSize: '0.9rem',
                          color: '#6b7280',
                          fontStyle: 'italic',
                          margin: '0 0 10px 0',
                        }}
                      >
                        {paper.venue}
                        {paper.status ? ` (${paper.status})` : ''}
                      </p>
                      {paper.links && paper.links.length > 0 && (
                        <div style={{ display: 'flex', gap: '12px' }}>
                      {paper.links.map((link, linkIdx) => (
                        <a
                          key={linkIdx}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                fontSize: '0.8rem',
                                fontWeight: 600,
                                padding: '4px 12px',
                                border: '1px solid #d1d5db',
                                borderRadius: '4px',
                                color: '#374151',
                                textDecoration: 'none',
                                transition: 'background-color 0.15s',
                              }}
                              onMouseEnter={(e) => {
                                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#f3f4f6';
                              }}
                              onMouseLeave={(e) => {
                                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
                              }}
                            >
                              [{link.label}]
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
            );
          })
        )}
      </div>
    </div>
  );
}
