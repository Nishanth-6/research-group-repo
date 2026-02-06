import { useState, useEffect } from 'react';
import { Target, Users, Lightbulb, Award } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import { FilterBar } from './FilterBar';
import { loadProjects, type Project } from '../utils/dataLoader';

interface ProjectWithId extends Project {
  id: number;
}

export function About() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [projects, setProjects] = useState<ProjectWithId[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProjects().then((data) => {
      const projectsWithIds = data.map((project, index) => ({
        ...project,
        id: index + 1,
      }));
      setProjects(projectsWithIds);
      setLoading(false);
    });
  }, []);

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.categories.includes(activeFilter));

  const highlights = [
    {
      icon: Target,
      title: 'Our Mission',
      description:
        'To develop computational methods and decision intelligence tools that accelerate the transition to resilient, sustainable infrastructure and energy systems.',
    },
    {
      icon: Lightbulb,
      title: 'Our Approach',
      description:
        'We combine operations research, machine learning, and domain expertise to create practical solutions for complex infrastructure challenges.',
    },
    {
      icon: Users,
      title: 'Our Impact',
      description:
        'Partnering with industry, government, and academia to translate research into real-world applications that benefit society.',
    },
    {
      icon: Award,
      title: 'Our Excellence',
      description:
        'Publishing in top-tier venues, securing competitive funding, and training the next generation of decision intelligence researchers.',
    },
  ];

  const researchAreas = [
    {
      title: 'Self-Adapting Approximations',
      description:
        'Solving large-scale Markov decision processes using algorithms that automate learning from data, underlying problem structure, and instance difficulty — improving accessibility for non-technical domain experts and resource-constrained organizations.',
    },
    {
      title: 'Energy Real Options',
      description:
        'Operations, valuation, and risk management of commodity and energy conversion assets including production, storage, and transport — with a focus on renewable energy integration and trading strategies.',
    },
    {
      title: 'Energy & Computing Nexus',
      description:
        'Exploring how energy demands intensified by computing growth (e.g., data centers) can be met, and how computing advances (e.g., LLMs) can accelerate the sustainable energy transformation.',
    },
    {
      title: 'Large-Scale Optimization',
      description:
        'Designing efficient first-order methods and preconditioning techniques for convex optimization in machine learning, fairness-constrained systems, and sequential decision-making under uncertainty.',
    },
  ];

  const partners = [
    'Argonne National Laboratory',
    'Discovery Partners Institute',
    'INFORMS',
    '[Research Institute]',
    '[Academic Initiative]',
    '[Industry Partner]',
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
      {/* ===== HERO with background image + mesh overlay ===== */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          minHeight: '540px',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#0a0e1a',
        }}
      >
        {/* Background image */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(/images/hero-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
            opacity: 0.45,
          }}
        />

        {/* Dark gradient overlay — heavier on the left for text readability */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(100deg, rgba(8,12,28,0.92) 0%, rgba(8,12,28,0.7) 45%, rgba(8,12,28,0.3) 100%)',
          }}
        />

        {/* Mesh / network grid — fades away from the text area */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(96,165,250,0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(96,165,250,0.12) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
            maskImage:
              'radial-gradient(ellipse 90% 80% at 75% 50%, black 10%, transparent 65%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 90% 80% at 75% 50%, black 10%, transparent 65%)',
          }}
        />

        {/* Diagonal accent lines */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'repeating-linear-gradient(135deg, transparent, transparent 96px, rgba(96,165,250,0.06) 97px, transparent 98px)',
            maskImage:
              'radial-gradient(ellipse 80% 70% at 65% 50%, black 15%, transparent 60%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 80% 70% at 65% 50%, black 15%, transparent 60%)',
          }}
        />

        {/* Glowing node dots */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              radial-gradient(circle 2px at 25% 20%, rgba(96,165,250,0.35) 0%, transparent 100%),
              radial-gradient(circle 2px at 60% 15%, rgba(76,175,80,0.3) 0%, transparent 100%),
              radial-gradient(circle 3px at 80% 35%, rgba(96,165,250,0.4) 0%, transparent 100%),
              radial-gradient(circle 2px at 70% 70%, rgba(76,175,80,0.25) 0%, transparent 100%),
              radial-gradient(circle 2px at 90% 55%, rgba(96,165,250,0.3) 0%, transparent 100%),
              radial-gradient(circle 2px at 45% 80%, rgba(96,165,250,0.2) 0%, transparent 100%),
              radial-gradient(circle 3px at 85% 85%, rgba(76,175,80,0.35) 0%, transparent 100%),
              radial-gradient(circle 2px at 55% 45%, rgba(96,165,250,0.25) 0%, transparent 100%)
            `,
          }}
        />

        {/* Content */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: '1100px',
            width: '100%',
            margin: '0 auto',
            padding: '100px 48px',
          }}
        >
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              color: '#fff',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              margin: '0 0 24px 0',
              maxWidth: '750px',
            }}
          >
            <span style={{ color: '#1e3a5f' }}>I</span>nfrastructure and{' '}
            <span style={{ color: '#60a5fa' }}>D</span>ecision{' '}
            <span style={{ color: '#60a5fa' }}>I</span>ntelligence for{' '}
            <span style={{ color: '#4caf50' }}>A</span>ccelerating{' '}
            <span style={{ color: '#4caf50' }}>T</span>echnology and{' '}
            <span style={{ color: '#4caf50' }}>E</span>nergy{' '}
            <span style={{ color: '#4caf50' }}>R</span>esilience
          </h1>
          <p
            style={{
              fontSize: '1.15rem',
              color: 'rgba(255,255,255,0.65)',
              lineHeight: 1.7,
              maxWidth: '560px',
              margin: 0,
            }}
          >
            We develop intelligent systems and dynamic decision-making models to
            accelerate the transition to resilient, sustainable infrastructure
            and energy systems.
          </p>
          <a
            href="#research-projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('research-projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              display: 'inline-block',
              marginTop: '32px',
              padding: '14px 32px',
              backgroundColor: '#fff',
              color: '#0a0e1a',
              fontSize: '0.9rem',
              fontWeight: 600,
              textDecoration: 'none',
              letterSpacing: '0.02em',
              transition: 'background-color 0.2s, transform 0.2s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#e5e7eb';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#fff';
            }}
          >
            Explore Our Research →
          </a>
        </div>
      </div>

      {/* ===== ABOUT / MISSION ===== */}
      <div
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '80px 48px 0',
        }}
      >
        <div style={{ maxWidth: '800px' }}>
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: '#111827',
              marginBottom: '24px',
            }}
          >
            About IDIATER
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: '#4b5563',
              marginBottom: '16px',
            }}
          >
            The Infrastructure and Decision Intelligence for Accelerating
            Technology and Energy Resilience (IDIATER) research group was
            established to address the pressing challenges facing modern
            infrastructure systems. As our energy grids, transportation networks,
            and urban systems become increasingly complex and interconnected, the
            need for intelligent decision-making tools has never been greater.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: '#4b5563',
              marginBottom: 0,
            }}
          >
            Our work sits at the intersection of operations research, artificial
            intelligence, and systems engineering. We develop scalable
            computational methods that help decision-makers navigate uncertainty,
            optimize resource allocation, and build resilience against
            disruptions ranging from extreme weather events to market volatility.
          </p>
        </div>
      </div>

      {/* ===== HIGHLIGHTS GRID ===== */}
      <div
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '64px 48px 0',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '32px',
          }}
        >
          {highlights.map((item) => (
            <div
              key={item.title}
              style={{
                padding: '28px',
                border: '1px solid #e5e7eb',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLDivElement).style.borderColor =
                  '#9ca3af')
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLDivElement).style.borderColor =
                  '#e5e7eb')
              }
            >
              <item.icon
                size={32}
                style={{ color: '#111827', marginBottom: '16px' }}
              />
              <h3
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: '#111827',
                  marginBottom: '10px',
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: '0.9rem',
                  lineHeight: 1.6,
                  color: '#6b7280',
                  margin: 0,
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== RESEARCH FOCUS AREAS ===== */}
      <div
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '80px 48px 0',
        }}
      >
        <h2
          style={{
            fontSize: '2rem',
            fontWeight: 700,
            color: '#111827',
            marginBottom: '32px',
          }}
        >
          Research Focus Areas
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '0',
          }}
        >
          {researchAreas.map((area, i) => (
            <div
              key={i}
              style={{
                padding: '28px 28px 28px 24px',
                borderLeft: '3px solid #111827',
                marginBottom: '24px',
              }}
            >
              <h3
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: '#111827',
                  marginBottom: '10px',
                }}
              >
                {area.title}
              </h3>
              <p
                style={{
                  fontSize: '0.9rem',
                  lineHeight: 1.7,
                  color: '#6b7280',
                  margin: 0,
                }}
              >
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== PROJECTS ===== */}
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '80px 48px 0',
        }}
      >
        <h2
          style={{
            fontSize: '2rem',
            fontWeight: 700,
            color: '#111827',
            marginBottom: '24px',
          }}
        >
          Research Projects
        </h2>
        <div id="research-projects" style={{ position: 'relative', top: '-100px' }} />
        <FilterBar
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
        <div style={{ paddingTop: '32px' }}>
          {loading ? (
            <p style={{ color: '#9ca3af', textAlign: 'center', padding: '48px 0' }}>
              Loading projects…
            </p>
          ) : filteredProjects.length === 0 ? (
            <p style={{ color: '#9ca3af', textAlign: 'center', padding: '48px 0' }}>
              No projects found in this category.
            </p>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '32px',
              }}
            >
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ===== COLLABORATIONS ===== */}
      <div
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '80px 48px 0',
        }}
      >
        <h2
          style={{
            fontSize: '2rem',
            fontWeight: 700,
            color: '#111827',
            marginBottom: '16px',
          }}
        >
          Collaborations &amp; Partnerships
        </h2>
        <p
          style={{
            fontSize: '1rem',
            lineHeight: 1.7,
            color: '#6b7280',
            marginBottom: '28px',
          }}
        >
          Our research is supported by leading funding agencies and conducted in
          partnership with academic institutions, industry leaders, and
          government organizations.
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
            gap: '16px',
          }}
        >
          {partners.map((partner) => (
            <div
              key={partner}
              style={{
                border: '1px solid #e5e7eb',
                padding: '16px',
                textAlign: 'center',
                fontSize: '0.875rem',
                color: '#4b5563',
              }}
            >
              {partner}
            </div>
          ))}
        </div>
      </div>

      {/* ===== CTA ===== */}
      <div
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '80px 48px 80px',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            borderTop: '1px solid #e5e7eb',
            paddingTop: '60px',
          }}
        >
          <h3
            style={{
              fontSize: '1.75rem',
              fontWeight: 700,
              color: '#111827',
              marginBottom: '12px',
            }}
          >
            Interested in Joining Us?
          </h3>
          <p
            style={{
              fontSize: '1rem',
              color: '#6b7280',
              maxWidth: '550px',
              margin: '0 auto 28px',
              lineHeight: 1.6,
            }}
          >
            We're always looking for talented PhD students, postdocs, and
            collaborators who share our passion for solving complex
            infrastructure challenges through computational methods.
          </p>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            style={{
              display: 'inline-block',
              padding: '14px 32px',
              backgroundColor: '#111827',
              color: '#fff',
              fontSize: '0.95rem',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                '#374151')
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                '#111827')
            }
          >
            View Open Positions
          </a>
        </div>
      </div>
    </div>
  );
}
