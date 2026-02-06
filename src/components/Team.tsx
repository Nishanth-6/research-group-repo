import { Mail, Linkedin, GraduationCap, Globe } from 'lucide-react';

interface TeamMember {
  name: string;
  title: string;
  role: string;
  bio: string;
  email?: string;
  linkedin?: string;
  scholar?: string;
  website?: string;
  initials: string;
  image?: string;
}

function MemberRow({ member }: { member: TeamMember }) {
  return (
    <div style={{
      display: 'flex',
      gap: '40px',
      padding: '40px 0',
      borderBottom: '1px solid #e5e7eb',
      alignItems: 'flex-start',
    }}>
      {/* Photo */}
      <div style={{ width: '160px', flexShrink: 0 }}>
        <div style={{
          width: '160px',
          height: '200px',
          backgroundColor: '#f3f4f6',
          overflow: 'hidden',
        }}>
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  parent.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:#9ca3af;font-size:2rem;font-weight:600;">${member.initials}</div>`;
                }
              }}
            />
          ) : (
            <div style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#9ca3af',
              fontSize: '2rem',
              fontWeight: 600,
            }}>
              {member.initials}
            </div>
          )}
        </div>
        {/* Icons row */}
        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
          {member.website && (
            <a href={member.website} target="_blank" rel="noopener noreferrer" style={{ color: '#9ca3af' }}>
              <Globe size={18} />
            </a>
          )}
          {member.email && (
            <a href={`mailto:${member.email}`} style={{ color: '#9ca3af' }}>
              <Mail size={18} />
            </a>
          )}
          {member.linkedin && (
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#9ca3af' }}>
              <Linkedin size={18} />
            </a>
          )}
          {member.scholar && (
            <a href={member.scholar} target="_blank" rel="noopener noreferrer" style={{ color: '#9ca3af' }}>
              <GraduationCap size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Text */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111827', margin: 0, lineHeight: 1.3 }}>
          {member.name}
        </h3>
        <p style={{
          fontSize: '0.8rem',
          fontWeight: 700,
          textTransform: 'uppercase' as const,
          letterSpacing: '0.05em',
          color: '#374151',
          margin: '4px 0 16px 0',
        }}>
          {member.title}
        </p>
        <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: '#4b5563', margin: 0 }}>
          {member.bio}
        </p>
      </div>
    </div>
  );
}

export function Team() {
  const director: TeamMember = {
    name: 'Selva Nadarajah',
    title: 'Director & Associate Professor',
    role: 'Director',
    bio: 'Selva Nadarajah is an Associate Professor (with tenure) of Information and Decision Sciences and Bielinski Family Endowed Scholar at the College of Business Administration, University of Illinois at Chicago. Selva also works with Argonne National Laboratory and previously served as the Decision Intelligence R&D Lead at the Discovery Partners Institute. Selva\'s research focuses on self-adapting approximations for large-scale Markov decision processes, energy real options for the operations and valuation of commodity and energy conversion assets, and the energy-computing nexus — exploring how energy demands intensified by computing growth can be met and how advances like LLMs can accelerate the sustainable energy transformation. Selva obtained his PhD and MS in Operations Research from the Tepper School of Business at Carnegie Mellon University, and an MASc from the University of Waterloo. Selva has been recognized as a 2024 UIC Global Scholar and received the 2024 INFORMS Harvey J. Greenberg Research Award, the 2021 CEMA Best Paper Award, the 2020 INFORMS ENRE Young Researcher Prize, and the Best Overall Paper at the 2020 NeurIPS Workshop on Tackling Climate Change with Machine Learning.',
    email: 'selvan@uic.edu',
    linkedin: '#',
    scholar: '#',
    website: 'https://www.selva-nadarajah.com',
    initials: 'SN',
    image: '/images/team/selva-nadarajah.jpg',
  };

  const faculty: TeamMember[] = [
    {
      name: 'Negar Soheili',
      title: 'Associate Professor',
      role: 'Faculty',
      bio: 'Negar Soheili is an Associate Professor of Business Analytics in the Information and Decision Sciences Department at the College of Business, University of Illinois at Chicago. Negar earned her PhD in Operations Research from the Tepper School of Business at Carnegie Mellon University in 2014 and co-founded the PhD program in Information and Decision Sciences at UIC while serving as Director of Graduate Studies. Negar\'s research focuses on developing methods for large-scale optimization, with an emphasis on scalable approaches for convex optimization in machine learning and decision-making under uncertainty. Her work spans three key areas: problem geometry and algorithm acceleration through preconditioning and rescaling techniques, constrained optimization with feasibility guarantees for applications like fairness-constrained ML, and large-scale sequential decision making using first-order methods to approximate MDPs.',
      email: 'nazad@uic.edu',
      linkedin: '#',
      scholar: '#',
      website: 'https://www.negar-soheili.com',
      initials: 'NS',
      image: '/images/team/negar-soheili.png',
    },
    {
      name: 'Beryl Chen',
      title: 'Faculty',
      role: 'Faculty',
      bio: '[Bio description highlighting research expertise and academic background]',
      email: '[email@institution.edu]',
      linkedin: '#',
      scholar: '#',
      initials: 'BC',
    },
    {
      name: 'Ludwig Dierks',
      title: 'Faculty',
      role: 'Faculty',
      bio: '[Bio description highlighting research expertise and academic background]',
      email: '[email@institution.edu]',
      linkedin: '#',
      scholar: '#',
      initials: 'LD',
    },
  ];

  const policyAdvisor: TeamMember = {
    name: 'Lisa Bonnett',
    title: 'Policy Advisor',
    role: 'Policy Advisor',
    bio: '[Bio description highlighting research expertise and academic background]',
    email: '[email@institution.edu]',
    linkedin: '#',
    scholar: '#',
    initials: 'LB',
  };

  const phd: TeamMember[] = [
    { name: 'Arman Aminipanah', title: 'PhD Student', role: 'PhD Student', bio: '[Research focus area]', email: '[email@institution.edu]', initials: 'AA' },
    { name: 'Mahtab Danaei', title: 'PhD Student', role: 'PhD Student', bio: '[Research focus area]', email: '[email@institution.edu]', initials: 'MD' },
    { name: 'Satender Gunwal', title: 'PhD Student', role: 'PhD Student', bio: '[Research focus area]', email: '[email@institution.edu]', initials: 'SG' },
  ];

  const masters: TeamMember[] = [
    { name: 'Hrishitaa', title: 'Masters Student', role: 'Masters Student', bio: '[Research focus area]', email: '[email@institution.edu]', initials: 'H' },
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
      {/* Hero — same mesh pattern as About */}
      <div style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#0a0e1a',
        color: '#fff',
      }}>
        {/* Background image */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/images/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          opacity: 0.4,
        }} />

        {/* Dark gradient overlay — lighter than About so pattern shows more */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(100deg, rgba(8,12,28,0.85) 0%, rgba(8,12,28,0.55) 45%, rgba(8,12,28,0.2) 100%)',
        }} />

        {/* Mesh / network grid — more prominent */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(96,165,250,0.22) 1px, transparent 1px),
            linear-gradient(90deg, rgba(96,165,250,0.22) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 100% 100% at 65% 50%, black 20%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 100% 100% at 65% 50%, black 20%, transparent 75%)',
        }} />

        {/* Secondary finer grid */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '16px 16px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 70% 50%, black 15%, transparent 65%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 70% 50%, black 15%, transparent 65%)',
        }} />

        {/* Diagonal accent lines — stronger */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'repeating-linear-gradient(135deg, transparent, transparent 96px, rgba(96,165,250,0.1) 97px, transparent 98px)',
          maskImage: 'radial-gradient(ellipse 90% 80% at 60% 50%, black 20%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at 60% 50%, black 20%, transparent 70%)',
        }} />

        {/* Glowing node dots — bigger, brighter */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            radial-gradient(circle 3px at 20% 25%, rgba(96,165,250,0.5) 0%, transparent 100%),
            radial-gradient(circle 3px at 55% 12%, rgba(76,175,80,0.45) 0%, transparent 100%),
            radial-gradient(circle 4px at 78% 30%, rgba(96,165,250,0.55) 0%, transparent 100%),
            radial-gradient(circle 3px at 65% 65%, rgba(76,175,80,0.4) 0%, transparent 100%),
            radial-gradient(circle 3px at 88% 50%, rgba(96,165,250,0.45) 0%, transparent 100%),
            radial-gradient(circle 3px at 40% 75%, rgba(96,165,250,0.35) 0%, transparent 100%),
            radial-gradient(circle 4px at 82% 82%, rgba(76,175,80,0.5) 0%, transparent 100%),
            radial-gradient(circle 3px at 50% 40%, rgba(96,165,250,0.4) 0%, transparent 100%),
            radial-gradient(circle 3px at 35% 55%, rgba(76,175,80,0.35) 0%, transparent 100%),
            radial-gradient(circle 4px at 72% 18%, rgba(96,165,250,0.5) 0%, transparent 100%),
            radial-gradient(circle 3px at 15% 70%, rgba(96,165,250,0.3) 0%, transparent 100%),
            radial-gradient(circle 3px at 92% 75%, rgba(76,175,80,0.4) 0%, transparent 100%)
          `,
        }} />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto', padding: '80px 40px' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 16px 0' }}>
            Our Team
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, maxWidth: '600px', margin: 0 }}>
            A multidisciplinary team of researchers working at the intersection of artificial intelligence,
            energy systems, and infrastructure resilience.
          </p>
        </div>
      </div>

      {/* Body */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 40px' }}>
        {/* Director */}
        <section style={{ marginTop: '60px' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 600, color: '#111827', margin: '0 0 8px 0', paddingBottom: '12px', borderBottom: '2px solid #111827' }}>
            Director
          </h2>
          <MemberRow member={director} />
        </section>

        {/* Faculty */}
        <section style={{ marginTop: '60px' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 600, color: '#111827', margin: '0 0 8px 0', paddingBottom: '12px', borderBottom: '2px solid #111827' }}>
            Faculty
          </h2>
          {faculty.map((m, i) => <MemberRow key={i} member={m} />)}
        </section>

        {/* Policy Advisor */}
        <section style={{ marginTop: '60px' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 600, color: '#111827', margin: '0 0 8px 0', paddingBottom: '12px', borderBottom: '2px solid #111827' }}>
            Policy Advisor
          </h2>
          <MemberRow member={policyAdvisor} />
        </section>

        {/* PhD Students */}
        <section style={{ marginTop: '60px' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 600, color: '#111827', margin: '0 0 8px 0', paddingBottom: '12px', borderBottom: '2px solid #111827' }}>
            PhD Students
          </h2>
          {phd.map((m, i) => <MemberRow key={i} member={m} />)}
        </section>

        {/* Masters Students */}
        <section style={{ marginTop: '60px', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 600, color: '#111827', margin: '0 0 8px 0', paddingBottom: '12px', borderBottom: '2px solid #111827' }}>
            Masters Students
          </h2>
          {masters.map((m, i) => <MemberRow key={i} member={m} />)}
        </section>
      </div>
    </div>
  );
}
