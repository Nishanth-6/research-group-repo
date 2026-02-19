import { useState, useEffect } from 'react';
import { Mail, Linkedin, GraduationCap, Globe, ArrowLeft } from 'lucide-react';
import { sanityClient } from '../lib/sanity';

/* ─── Data Model ─── */

interface TeamMember {
  id: string;
  name: string;
  title: string;
  section: string;
  initials: string;
  image?: string;
  email?: string;
  website?: string;
  linkedin?: string;
  scholar?: string;
  bio: string;
  idiaterRole: string;
  researchAreas?: string[];
  education?: string[];
  awards?: string[];
}

/* ─── GROQ Query ─── */

const TEAM_QUERY = `*[_type == "teamMemberDetail"] | order(sectionOrder asc, order asc) {
  "id": slug.current,
  name,
  title,
  section,
  initials,
  image,
  email,
  website,
  linkedin,
  scholar,
  bio,
  idiaterRole,
  researchAreas,
  education,
  awards
}`;

/* ────────────────────────────────────────────────
   TEAM GRID VIEW — circular photos, name + role
   Brain Resilience Lab style
   ──────────────────────────────────────────────── */

function TeamGrid({ members, onSelect }: { members: TeamMember[]; onSelect: (id: string) => void }) {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
      {/* Hero */}
      <div style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#0a0e1a',
        color: '#fff',
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/hero-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center 40%', opacity: 0.4 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(8,12,28,0.85) 0%, rgba(8,12,28,0.55) 45%, rgba(8,12,28,0.2) 100%)' }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto', padding: '80px 40px' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 16px 0' }}>Our Team</h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, maxWidth: '600px', margin: 0 }}>
            A multidisciplinary team of researchers working at the intersection of artificial intelligence, energy systems, and infrastructure resilience.
          </p>
        </div>
      </div>

      {/* Grid of members */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '64px 40px 80px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '48px 32px',
            justifyItems: 'center',
          }}
        >
          {members.map((m) => (
            <div
              key={m.id}
              onClick={() => onSelect(m.id)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                cursor: 'pointer',
                maxWidth: '220px',
              }}
            >
              {/* Circular photo */}
              <div
                style={{
                  width: '180px',
                  height: '180px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  backgroundColor: '#f3f4f6',
                  marginBottom: '16px',
                  border: '3px solid #e8ecf2',
                  transition: 'border-color 0.2s, transform 0.2s',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = '#93c5fd';
                  (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.03)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = '#e8ecf2';
                  (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
                }}
              >
                {m.image ? (
                  <img
                    src={m.image}
                    alt={m.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%', display: 'block' }}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                      const p = e.currentTarget.parentElement;
                      if (p) p.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:#9ca3af;font-size:2.5rem;font-weight:600;background:#f3f4f6;">${m.initials}</div>`;
                    }}
                  />
                ) : (
                  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af', fontSize: '2.5rem', fontWeight: 600 }}>
                    {m.initials}
                  </div>
                )}
              </div>

              {/* Name */}
              <p style={{
                margin: '0 0 4px 0',
                fontSize: '1.05rem',
                fontWeight: 700,
                color: '#1a2332',
                lineHeight: 1.3,
              }}>
                {m.name}
              </p>

              {/* Role / Title */}
              <p style={{
                margin: '0 0 8px 0',
                fontSize: '0.88rem',
                color: '#6b7280',
                lineHeight: 1.4,
              }}>
                {m.title}
              </p>

              {/* Read More link */}
              <span
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: '#2563eb',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  transition: 'color 0.15s',
                }}
              >
                Read More →
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────
   MEMBER DETAIL VIEW — full profile page
   ──────────────────────────────────────────────── */

function MemberDetail({ member, onBack }: { member: TeamMember; onBack: () => void }) {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
      {/* Top bar */}
      <div style={{ borderBottom: '1px solid #e5e7eb', padding: '16px 40px', maxWidth: '900px', margin: '0 auto' }}>
        <button
          onClick={onBack}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '0.9rem',
            color: '#6b7280',
            padding: '4px 0',
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = '#111827'; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = '#6b7280'; }}
        >
          <ArrowLeft size={16} /> Back to Team
        </button>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '48px 40px 80px' }}>
        {/* Header row */}
        <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start', marginBottom: '48px' }}>
          {/* Photo */}
          <div style={{
            width: '160px',
            height: '200px',
            borderRadius: '4px',
            overflow: 'hidden',
            backgroundColor: '#f3f4f6',
            flexShrink: 0,
          }}>
            {member.image ? (
              <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            ) : (
              <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af', fontSize: '3rem', fontWeight: 600 }}>
                {member.initials}
              </div>
            )}
          </div>

          {/* Name, title, links */}
          <div>
            <h1 style={{ fontSize: '2.25rem', fontWeight: 700, color: '#111827', margin: '0 0 4px 0', lineHeight: 1.2 }}>
              {member.name}
            </h1>
            <p style={{ fontSize: '1rem', fontWeight: 600, color: '#6b7280', margin: '0 0 16px 0', textTransform: 'uppercase' as const, letterSpacing: '0.04em' }}>
              {member.title}
            </p>
            {/* Links */}
            <div style={{ display: 'flex', gap: '14px' }}>
              {member.email && (
                <a href={`mailto:${member.email}`} style={{ color: '#6b7280' }} title="Email">
                  <Mail size={18} />
                </a>
              )}
              {member.website && (
                <a href={member.website} target="_blank" rel="noopener noreferrer" style={{ color: '#6b7280' }} title="Website">
                  <Globe size={18} />
                </a>
              )}
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#6b7280' }} title="LinkedIn">
                  <Linkedin size={18} />
                </a>
              )}
              {member.scholar && (
                <a href={member.scholar} target="_blank" rel="noopener noreferrer" style={{ color: '#6b7280' }} title="Google Scholar">
                  <GraduationCap size={18} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bio */}
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#111827', margin: '0 0 12px 0' }}>About</h2>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#4b5563', margin: 0 }}>{member.bio}</p>
        </div>

        {/* Role at IDIATER */}
        <div style={{ marginBottom: '40px', padding: '28px', backgroundColor: '#f9fafb', borderLeft: '3px solid #1e3a5f' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1e3a5f', margin: '0 0 10px 0' }}>Role at IDIATER</h2>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#4b5563', margin: 0 }}>{member.idiaterRole}</p>
        </div>

        {/* Research Areas */}
        {member.researchAreas && member.researchAreas.length > 0 && (
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#111827', margin: '0 0 16px 0' }}>Research Areas</h2>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              {member.researchAreas.map((area, i) => (
                <li key={i} style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#4b5563', marginBottom: '6px' }}>{area}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Education */}
        {member.education && member.education.length > 0 && (
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#111827', margin: '0 0 16px 0' }}>Education</h2>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              {member.education.map((ed, i) => (
                <li key={i} style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#4b5563', marginBottom: '6px' }}>{ed}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Awards */}
        {member.awards && member.awards.length > 0 && (
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#111827', margin: '0 0 16px 0' }}>Awards & Recognition</h2>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              {member.awards.map((award, i) => (
                <li key={i} style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#4b5563', marginBottom: '6px' }}>{award}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────
   EXPORTED TEAM COMPONENT — routes between views
   ──────────────────────────────────────────────── */

export function Team() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [allMembers, setAllMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    sanityClient
      .fetch<TeamMember[]>(TEAM_QUERY)
      .then((data) => {
        setAllMembers(data ?? []);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading team from Sanity:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
        <p style={{ color: '#9ca3af' }}>Loading team…</p>
      </div>
    );
  }

  const selectedMember = selectedId ? allMembers.find((m) => m.id === selectedId) : null;

  if (selectedMember) {
    return (
      <MemberDetail
        member={selectedMember}
        onBack={() => {
          setSelectedId(null);
          window.scrollTo({ top: 0 });
        }}
      />
    );
  }

  return <TeamGrid members={allMembers} onSelect={(id) => { setSelectedId(id); window.scrollTo({ top: 0 }); }} />;
}
