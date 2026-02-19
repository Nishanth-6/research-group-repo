import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { sanityClient } from '../lib/sanity';

/* ─── Mock write-ups for each project ─── */

const projectWriteups: Record<string, {
  overview: string;
  approach: string;
  impact: string;
  relatedResearchArea: string;
}> = {
  'Smart Grid Optimization': {
    overview:
      'The Smart Grid Optimization project develops AI-powered decision support systems for real-time power grid management and load balancing. As the energy landscape shifts toward decentralized renewable sources, grid operators face unprecedented complexity in maintaining stability and efficiency. Our system uses reinforcement learning and stochastic optimization to make intelligent dispatch decisions that reduce costs while maintaining reliability.',
    approach:
      'We combine Markov decision process (MDP) models with deep reinforcement learning to create agents that can learn optimal dispatch policies in real time. The system ingests live sensor data from grid infrastructure, weather forecasts, and market prices to generate actionable recommendations for grid operators. Our self-adapting approximation algorithms allow the system to scale to grids with thousands of nodes without sacrificing solution quality.',
    impact:
      'Early simulations show a 12–18% reduction in operating costs and a 25% improvement in renewable energy utilization compared to traditional rule-based dispatch systems. We are working with regional grid operators to pilot the system in a real-world setting.',
    relatedResearchArea: 'energy-real-options',
  },
  'Resilient Infrastructure Networks': {
    overview:
      'This project develops machine learning models for predicting and mitigating infrastructure failures during extreme weather events. With climate change increasing the frequency and severity of natural disasters, critical infrastructure systems — power grids, water networks, transportation — must be designed to withstand and recover from disruptions.',
    approach:
      'We use graph neural networks (GNNs) to model interdependent infrastructure networks and predict cascade failure patterns. Combined with stochastic programming techniques, our framework identifies optimal pre-positioning strategies for repair crews and emergency resources. The models are trained on historical failure data and physics-based simulations of extreme weather scenarios.',
    impact:
      'Our framework has been applied to post-hurricane recovery planning, demonstrating a 30% faster restoration of critical services compared to conventional approaches. The work is being extended to address wildfire and flooding scenarios in collaboration with national laboratories.',
    relatedResearchArea: 'self-adapting-approximations',
  },
  'Solar Deployment Accelerator': {
    overview:
      'The Solar Deployment Accelerator creates computational tools for optimizing solar panel placement and predicting energy output in urban environments. As cities push toward carbon neutrality, efficient placement of distributed solar resources is critical to maximizing energy generation while minimizing costs and visual impact.',
    approach:
      'We integrate GIS data, 3D building models, and satellite imagery with mixed-integer optimization models to determine optimal rooftop and ground-mount solar configurations. Our real options framework values the flexibility embedded in phased deployment strategies, helping municipalities and developers make investment decisions under uncertainty about future energy prices and policy changes.',
    impact:
      'The tool has been used to plan solar deployments for three mid-size U.S. cities, identifying configurations that increase expected energy yield by 15–22% over standard heuristic approaches while reducing payback periods by an average of 2.3 years.',
    relatedResearchArea: 'energy-real-options',
  },
  'Urban Energy Dashboard': {
    overview:
      'The Urban Energy Dashboard is a real-time visualization platform for monitoring and analyzing city-wide energy consumption patterns. The platform aggregates data from smart meters, building management systems, and utility providers to give policymakers and urban planners an actionable view of how energy flows through a city.',
    approach:
      "We combine streaming data pipelines with interactive visualization techniques and anomaly detection algorithms. Large-scale optimization methods underpin the dashboard's recommendation engine, which identifies energy efficiency opportunities at the district and building level. The system is designed to scale from individual neighborhoods to entire metropolitan areas.",
    impact:
      "A pilot deployment in Chicago's Discovery Partners Institute identified $2.4M in annual energy savings opportunities across a 50-building commercial portfolio. The dashboard is now being extended to integrate electric vehicle charging data and distributed battery storage.",
    relatedResearchArea: 'energy-computing-nexus',
  },
  'Climate Adaptive Infrastructure': {
    overview:
      'This project builds a decision intelligence framework for designing infrastructure that adapts to changing climate conditions. Traditional infrastructure design uses static assumptions about climate — our framework incorporates dynamic climate projections and uncertainty quantification to produce designs that remain effective across a range of future scenarios.',
    approach:
      'We formulate multi-stage stochastic optimization models that incorporate climate projection ensembles from leading Earth system models. Self-adapting approximation algorithms allow us to solve these massive optimization problems efficiently, while real options analysis quantifies the value of building in adaptive capacity (e.g., designing a bridge that can be cost-effectively raised if sea levels exceed initial projections).',
    impact:
      'The framework has been applied to coastal flood protection design, demonstrating that adaptive strategies can reduce lifecycle costs by 20–35% compared to robust design approaches that over-build for worst-case scenarios. We are collaborating with civil engineering firms to integrate the framework into standard design workflows.',
    relatedResearchArea: 'self-adapting-approximations',
  },
  'Sustainable Building Systems': {
    overview:
      'This project develops IoT-enabled monitoring and optimization of energy usage in commercial and residential buildings. Buildings account for roughly 40% of total energy consumption in the U.S. — intelligent building systems can significantly reduce this footprint while improving occupant comfort.',
    approach:
      'We deploy sensor networks that capture fine-grained energy, temperature, humidity, and occupancy data. Large-scale convex optimization models then determine optimal HVAC scheduling, lighting control, and demand response strategies. Our preconditioning techniques for first-order methods enable these optimizations to run in near-real-time on edge computing devices within the building.',
    impact:
      'Field trials in two commercial office buildings showed 18–24% reductions in HVAC energy consumption with no degradation in occupant comfort scores. The optimization framework is being packaged as an open-source toolkit for building managers.',
    relatedResearchArea: 'large-scale-optimization',
  },
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
  };
  onBack: () => void;
}

export function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  const [publications, setPublications] = useState<SanityPublication[]>([]);

  const writeup = projectWriteups[project.title] || {
    overview: project.description,
    approach: 'Our team applies cutting-edge computational methods to this problem domain, combining optimization, machine learning, and domain expertise.',
    impact: 'This project is in active development. Results and publications will be shared as the research progresses.',
    relatedResearchArea: null,
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
