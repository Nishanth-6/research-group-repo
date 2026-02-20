import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { sanityClient } from '../lib/sanity';

/* ─── Fallback content for projects without CMS data ─── */

const fallbackContent = {
  overview: 'Our team applies cutting-edge computational methods to this problem domain, combining optimization, machine learning, and domain expertise.',
  approach: 'We are developing novel approaches that integrate state-of-the-art techniques with practical considerations for real-world deployment.',
  impact: 'This project is in active development. Results and publications will be shared as the research progresses.',
  relatedResearchArea: null,
};

/* ─── Publication interface (matches Sanity schema) ─── */

interface PublicationLink {
  label: string;
  url: string;
}

interface SanityPublication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: string;
  researchArea?: string;
  links?: PublicationLink[];
}

/* ─── Component Props ─── */

interface ProjectDetailProps {
  project: {
    title: string;
    description: string;
    image: string;
    categories: string[];
    team: string[];
    overview?: string;
    approach?: string;
    impact?: string;
    relatedResearchArea?: string;
  };
  onBack: () => void;
}

export function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  const [publications, setPublications] = useState<SanityPublication[]>([]);

  // Use content from CMS if available, otherwise fallback
  const writeup = {
    overview: project.overview || project.description || fallbackContent.overview,
    approach: project.approach || fallbackContent.approach,
    impact: project.impact || fallbackContent.impact,
    relatedResearchArea: project.relatedResearchArea || fallbackContent.relatedResearchArea,
  };

  useEffect(() => {
    if (writeup.relatedResearchArea) {
      sanityClient
        .fetch<SanityPublication[]>(
          `*[_type == "publication" && researchArea == $area] | order(year desc) { title, authors, venue, year, type, researchArea, links }`,
          { area: writeup.relatedResearchArea }
        )
        .then((data) => setPublications(data ?? []))
        .catch(() => setPublications([]));
    }
  }, [writeup.relatedResearchArea]);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
      {/* Hero */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          minHeight: '480px',
          display: 'flex',
          alignItems: 'flex-end',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${project.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.05) 100%)',
          }}
        />
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '900px',
            margin: '0 auto',
            padding: '48px 40px',
            width: '100%',
          }}
        >
          <h1
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              color: '#fff',
              margin: '0 0 12px 0',
              lineHeight: 1.2,
            }}
          >
            {project.title}
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.categories.map((cat) => (
              <span
                key={cat}
                style={{
                  padding: '4px 12px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  color: '#fff',
                  textTransform: 'capitalize',
                  letterSpacing: '0.04em',
                }}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '56px 40px 80px' }}>
        {/* Back button */}
        <button
          onClick={onBack}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '0.88rem',
            fontWeight: 500,
            color: '#6b7280',
            padding: 0,
            marginBottom: '32px',
            transition: 'color 0.15s',
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = '#111827'; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = '#6b7280'; }}
        >
          <ArrowLeft size={16} /> Back to Research
        </button>

        {/* Team */}
        <div style={{ marginBottom: '40px', padding: '20px 24px', backgroundColor: '#f9fafb', borderLeft: '3px solid #1e3a5f' }}>
          <p style={{ margin: 0, fontSize: '0.9rem', color: '#6b7280' }}>
            <strong style={{ color: '#111827' }}>Team:</strong> {project.team.join(', ')}
          </p>
        </div>

        {/* Overview */}
        <div style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', margin: '0 0 16px 0' }}>Overview</h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.85, color: '#4b5563', margin: 0 }}>{writeup.overview}</p>
        </div>

        {/* Approach */}
        <div style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', margin: '0 0 16px 0' }}>Approach</h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.85, color: '#4b5563', margin: 0 }}>{writeup.approach}</p>
        </div>

        {/* Impact */}
        <div style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', margin: '0 0 16px 0' }}>Impact</h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.85, color: '#4b5563', margin: 0 }}>{writeup.impact}</p>
        </div>

        {/* Related Publications */}
        {publications.length > 0 && (
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', margin: '0 0 24px 0' }}>Related Publications</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {publications.map((paper, idx) => (
                <div key={idx} style={{ paddingBottom: '24px', borderBottom: idx < publications.length - 1 ? '1px solid #f3f4f6' : 'none' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#111827', lineHeight: 1.5, margin: '0 0 6px 0' }}>
                    {paper.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: '#4b5563', margin: '0 0 4px 0' }}>{paper.authors}</p>
                  <p style={{ fontSize: '0.88rem', color: '#6b7280', fontStyle: 'italic', margin: '0 0 10px 0' }}>{paper.venue}</p>
                  {paper.links && paper.links.length > 0 && (
                    <div style={{ display: 'flex', gap: '10px' }}>
                      {paper.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontSize: '0.78rem',
                            fontWeight: 600,
                            padding: '3px 10px',
                            border: '1px solid #d1d5db',
                            borderRadius: '4px',
                            color: '#374151',
                            textDecoration: 'none',
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
        )}
      </div>
    </div>
  );
}
