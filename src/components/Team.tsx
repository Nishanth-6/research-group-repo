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

/* ─── Sections in display order ─── */
const sections = ['Director', 'Faculty', 'Policy Advisor', 'PhD Students', 'Masters Students'];

/* ────────────────────────────────────────────────
   TEAM LIST VIEW — compact: photo + name + title
   ──────────────────────────────────────────────── */

function TeamList({ members, onSelect }: { members: TeamMember[]; onSelect: (id: string) => void }) {
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
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(96,165,250,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.22) 1px, transparent 1px)', backgroundSize: '48px 48px', maskImage: 'radial-gradient(ellipse 100% 100% at 65% 50%, black 20%, transparent 75%)', WebkitMaskImage: 'radial-gradient(ellipse 100% 100% at 65% 50%, black 20%, transparent 75%)' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '16px 16px', maskImage: 'radial-gradient(ellipse 80% 70% at 70% 50%, black 15%, transparent 65%)', WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 70% 50%, black 15%, transparent 65%)' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(135deg, transparent, transparent 96px, rgba(96,165,250,0.1) 97px, transparent 98px)', maskImage: 'radial-gradient(ellipse 90% 80% at 60% 50%, black 20%, transparent 70%)', WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at 60% 50%, black 20%, transparent 70%)' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle 3px at 20% 25%, rgba(96,165,250,0.5) 0%, transparent 100%), radial-gradient(circle 3px at 55% 12%, rgba(76,175,80,0.45) 0%, transparent 100%), radial-gradient(circle 4px at 78% 30%, rgba(96,165,250,0.55) 0%, transparent 100%), radial-gradient(circle 3px at 65% 65%, rgba(76,175,80,0.4) 0%, transparent 100%), radial-gradient(circle 3px at 88% 50%, rgba(96,165,250,0.45) 0%, transparent 100%), radial-gradient(circle 4px at 82% 82%, rgba(76,175,80,0.5) 0%, transparent 100%), radial-gradient(circle 3px at 50% 40%, rgba(96,165,250,0.4) 0%, transparent 100%), radial-gradient(circle 4px at 72% 18%, rgba(96,165,250,0.5) 0%, transparent 100%)' }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto', padding: '80px 40px' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 16px 0' }}>Our Team</h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, maxWidth: '600px', margin: 0 }}>
            A multidisciplinary team of researchers working at the intersection of artificial intelligence, energy systems, and infrastructure resilience.
          </p>
        </div>
      </div>

      {/* Member list */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 40px 80px' }}>
        {sections.map((section) => {
          const sectionMembers = members.filter((m) => m.section === section);
          if (sectionMembers.length === 0) return null;
          return (
            <section key={section} style={{ marginTop: '56px' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111827', margin: '0 0 0 0', paddingBottom: '12px', borderBottom: '2px solid #111827' }}>
                {section}
              </h2>
              {sectionMembers.map((m) => (
                <div
                  key={m.id}
                  onClick={() => onSelect(m.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    padding: '20px 0',
                    borderBottom: '1px solid #f3f4f6',
                    cursor: 'pointer',
                    transition: 'background-color 0.15s',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.backgroundColor = '#fafafa';
                    const cta = e.currentTarget.querySelector('.view-profile-cta') as HTMLElement | null;
                    if (cta) cta.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.backgroundColor = 'transparent';
                    const cta = e.currentTarget.querySelector('.view-profile-cta') as HTMLElement | null;
                    if (cta) cta.style.opacity = '0.6';
                  }}
                >
                  {/* Photo / initials */}
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    backgroundColor: '#f3f4f6',
                    flexShrink: 0,
                  }}>
                    {m.image ? (
                      <img
                        src={m.image}
                        alt={m.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).style.display = 'none';
                          const p = e.currentTarget.parentElement;
                          if (p) p.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:#9ca3af;font-size:1.25rem;font-weight:600;">${m.initials}</div>`;
                        }}
                      />
                    ) : (
                      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af', fontSize: '1.25rem', fontWeight: 600 }}>
                        {m.initials}
                      </div>
                    )}
                  </div>

                  {/* Name + title */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ margin: 0, fontSize: '1.05rem', fontWeight: 600, color: '#111827' }}>{m.name}</p>
                    <p style={{ margin: '2px 0 0', fontSize: '0.85rem', color: '#6b7280' }}>{m.title}</p>
                  </div>

                  {/* View Profile CTA */}
                  <span
                    className="view-profile-cta"
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      color: '#1e3a5f',
                      whiteSpace: 'nowrap' as const,
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      opacity: 0.6,
                      transition: 'opacity 0.15s',
                    }}
                  >
                    View Profile <span style={{ fontSize: '1rem' }}>→</span>
                  </span>
                </div>
              ))}
            </section>
          );
        })}
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

  return <TeamList members={allMembers} onSelect={(id) => { setSelectedId(id); window.scrollTo({ top: 0 }); }} />;
}
