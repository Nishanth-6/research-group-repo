import { useState } from 'react';
import { Mail, Linkedin, GraduationCap, Globe, ArrowLeft } from 'lucide-react';

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

/* ─── All Team Data ─── */

const allMembers: TeamMember[] = [
  {
    id: 'selva-nadarajah',
    name: 'Selva Nadarajah',
    title: 'Director & Associate Professor',
    section: 'Director',
    initials: 'SN',
    image: '/images/team/selva-nadarajah.jpg',
    email: 'selvan@uic.edu',
    website: 'https://www.selva-nadarajah.com',
    linkedin: '#',
    scholar: '#',
    bio: 'Selva Nadarajah is an Associate Professor (with tenure) of Information and Decision Sciences and Bielinski Family Endowed Scholar at the College of Business Administration, University of Illinois at Chicago. Selva also works with Argonne National Laboratory and previously served as the Decision Intelligence R&D Lead at the Discovery Partners Institute (Innovation hub of the University of Illinois System).',
    idiaterRole: 'As Director of IDIATER, Selva leads the group\'s research vision — driving work on self-adapting approximations for large-scale Markov decision processes, energy real options for commodity and energy conversion assets, and the energy-computing nexus exploring how energy demands intensified by computing growth (e.g., data centers) can be met and how advances like LLMs can accelerate the sustainable energy transformation.',
    researchAreas: [
      'Self-Adapting Approximations for large-scale MDPs',
      'Energy Real Options — operations, valuation, and risk management of energy assets',
      'Energy & Computing Nexus — data centers, LLMs, and sustainable transformation',
    ],
    education: [
      'PhD & MS in Operations Research — Tepper School of Business, Carnegie Mellon University',
      'MASc in Operations Research — University of Waterloo',
      'B.Tech — Indian Institute of Technology Madras',
    ],
    awards: [
      '2024 UIC Global Scholar',
      '2024 INFORMS Harvey J. Greenberg Research Award',
      '2021 CEMA Best Paper Award',
      '2020 INFORMS ENRE Young Researcher Prize',
      'Best Overall Paper — 2020 NeurIPS Workshop on Tackling Climate Change with ML',
      '2014 William L. Cooper Dissertation Award',
      '2013 Egon Balas Best Paper Award',
    ],
  },
  {
    id: 'negar-soheili',
      name: 'Negar Soheili',
      title: 'Associate Professor',
    section: 'Faculty',
    initials: 'NS',
    image: '/images/team/negar-soheili.png',
      email: 'nazad@uic.edu',
    website: 'https://www.negar-soheili.com',
      linkedin: '#',
      scholar: '#',
    bio: 'Negar Soheili is an Associate Professor of Business Analytics in the Information and Decision Sciences Department at the College of Business, University of Illinois at Chicago. Negar earned her PhD in Operations Research from the Tepper School of Business at Carnegie Mellon University in 2014 and co-founded the PhD program in Information and Decision Sciences at UIC while serving as Director of Graduate Studies.',
    idiaterRole: 'Within IDIATER, Negar drives the optimization engine — developing scalable first-order methods that power the group\'s large-scale sequential decision-making research. Her work on preconditioning techniques and feasibility-guaranteed algorithms is foundational to IDIATER\'s ability to tackle real-world infrastructure problems at scale.',
    researchAreas: [
      'Problem Geometry & Algorithm Acceleration — preconditioning and rescaling techniques',
      'Constrained Optimization with Feasibility Guarantees — fairness-constrained ML',
      'Large-Scale Sequential Decision Making — first-order methods for MDPs',
    ],
    education: [
      'PhD in Operations Research — Tepper School of Business, Carnegie Mellon University (2014)',
    ],
  },
  {
    id: 'beryl-chen',
      name: 'Beryl Chen',
      title: 'Faculty',
    section: 'Faculty',
    initials: 'BC',
      email: '[email@institution.edu]',
      linkedin: '#',
      scholar: '#',
    bio: '[Bio description highlighting research expertise and academic background]',
    idiaterRole: '[Description of role and contributions within IDIATER — research focus, collaboration areas, and impact on the group\'s mission]',
    researchAreas: ['[Research area 1]', '[Research area 2]'],
    },
    {
    id: 'ludwig-dierks',
      name: 'Ludwig Dierks',
      title: 'Faculty',
    section: 'Faculty',
    initials: 'LD',
      email: '[email@institution.edu]',
      linkedin: '#',
      scholar: '#',
    bio: '[Bio description highlighting research expertise and academic background]',
    idiaterRole: '[Description of role and contributions within IDIATER — research focus, collaboration areas, and impact on the group\'s mission]',
    researchAreas: ['[Research area 1]', '[Research area 2]'],
  },
  {
    id: 'lisa-bonnett',
    name: 'Lisa Bonnett',
    title: 'Policy Advisor',
    section: 'Policy Advisor',
    initials: 'LB',
    email: '[email@institution.edu]',
    linkedin: '#',
    scholar: '#',
    bio: '[Bio description highlighting policy expertise and professional background]',
    idiaterRole: '[Description of advisory role within IDIATER — bridging research outputs to real-world policy, stakeholder engagement, and strategic guidance]',
  },
  {
    id: 'arman-aminipanah',
      name: 'Arman Aminipanah',
      title: 'PhD Student',
    section: 'PhD Students',
    initials: 'AA',
      email: '[email@institution.edu]',
    bio: '[Academic background and research interests]',
    idiaterRole: '[Current PhD research within IDIATER — topic, methods, and expected contributions]',
    researchAreas: ['[Research focus area]'],
    },
    {
    id: 'mahtab-danaei',
      name: 'Mahtab Danaei',
      title: 'PhD Student',
    section: 'PhD Students',
    initials: 'MD',
      email: '[email@institution.edu]',
    bio: '[Academic background and research interests]',
    idiaterRole: '[Current PhD research within IDIATER — topic, methods, and expected contributions]',
    researchAreas: ['[Research focus area]'],
    },
    {
    id: 'satender-gunwal',
      name: 'Satender Gunwal',
      title: 'PhD Student',
    section: 'PhD Students',
    initials: 'SG',
      email: '[email@institution.edu]',
    bio: '[Academic background and research interests]',
    idiaterRole: '[Current PhD research within IDIATER — topic, methods, and expected contributions]',
    researchAreas: ['[Research focus area]'],
  },
  {
    id: 'hrishitaa',
      name: 'Hrishitaa',
      title: 'Masters Student',
    section: 'Masters Students',
    initials: 'H',
      email: '[email@institution.edu]',
    bio: '[Academic background and research interests]',
    idiaterRole: '[Current research within IDIATER — project focus and contributions]',
    researchAreas: ['[Research focus area]'],
  },
];

/* ─── Sections in display order ─── */
const sections = ['Director', 'Faculty', 'Policy Advisor', 'PhD Students', 'Masters Students'];

/* ────────────────────────────────────────────────
   TEAM LIST VIEW — compact: photo + name + title
   ──────────────────────────────────────────────── */

function TeamList({ onSelect }: { onSelect: (id: string) => void }) {
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
          const members = allMembers.filter((m) => m.section === section);
          if (members.length === 0) return null;
          return (
            <section key={section} style={{ marginTop: '56px' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111827', margin: '0 0 0 0', paddingBottom: '12px', borderBottom: '2px solid #111827' }}>
                {section}
              </h2>
              {members.map((m) => (
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
                  {/* Small photo / initials */}
                  <div style={{
                    width: '56px',
                    height: '56px',
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
                          if (p) p.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:#9ca3af;font-size:1rem;font-weight:600;">${m.initials}</div>`;
                        }}
                      />
                    ) : (
                      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af', fontSize: '1rem', fontWeight: 600 }}>
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

  return <TeamList onSelect={(id) => { setSelectedId(id); window.scrollTo({ top: 0 }); }} />;
}
