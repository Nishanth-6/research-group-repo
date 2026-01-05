import { Target, Users, Lightbulb, Award } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To develop computational methods and decision intelligence tools that accelerate the transition to resilient, sustainable infrastructure and energy systems.'
    },
    {
      icon: Lightbulb,
      title: 'Our Approach',
      description: 'We combine operations research, machine learning, and domain expertise to create practical solutions for complex infrastructure challenges.'
    },
    {
      icon: Users,
      title: 'Our Impact',
      description: 'Partnering with industry, government, and academia to translate research into real-world applications that benefit society.'
    },
    {
      icon: Award,
      title: 'Our Excellence',
      description: 'Publishing in top-tier venues, securing competitive funding, and training the next generation of decision intelligence researchers.'
    }
  ];

  const partners = [
    '[Funding Agency]',
    '[Government Organization]',
    '[Professional Society]',
    '[Research Institute]',
    '[Academic Initiative]',
    '[Industry Partner]'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-black text-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl mb-4">About IDIATER</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Building the foundation for intelligent, resilient infrastructure through cutting-edge research 
            in decision science, optimization, and machine learning.
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The Infrastructure and Decision Intelligence for Accelerating Technology and Energy Resilience (IDIATER) 
            research group was established to address the pressing challenges facing modern infrastructure systems. 
            As our energy grids, transportation networks, and urban systems become increasingly complex and 
            interconnected, the need for intelligent decision-making tools has never been greater.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-12">
            Our work sits at the intersection of operations research, artificial intelligence, and systems engineering. 
            We develop scalable computational methods that help decision-makers navigate uncertainty, optimize 
            resource allocation, and build resilience against disruptions ranging from extreme weather events to 
            market volatility.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {highlights.map((item) => (
            <div key={item.title} className="border border-gray-200 p-6 hover:border-gray-400 transition-colors">
              <item.icon className="w-10 h-10 mb-4" />
              <h3 className="text-xl mb-3">{item.title}</h3>
              <p className="text-gray-700 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Research Focus Areas */}
        <h2 className="text-3xl mb-6">Research Focus Areas</h2>
        <div className="space-y-6 mb-16">
          <div className="border-l-4 border-black pl-6">
            <h3 className="text-xl mb-2">AI and Decision Intelligence</h3>
            <p className="text-gray-700 leading-relaxed">
              Developing approximate dynamic programming methods, reinforcement learning algorithms, and 
              self-adapting optimization frameworks for large-scale sequential decision problems.
            </p>
          </div>
          <div className="border-l-4 border-black pl-6">
            <h3 className="text-xl mb-2">Energy Systems and Markets</h3>
            <p className="text-gray-700 leading-relaxed">
              Analyzing energy trading strategies, renewable integration, storage operations, and corporate 
              procurement under price and demand uncertainty.
            </p>
          </div>
          <div className="border-l-4 border-black pl-6">
            <h3 className="text-xl mb-2">Infrastructure Resilience</h3>
            <p className="text-gray-700 leading-relaxed">
              Creating models and tools for risk-aware planning, disruption response, and recovery strategies 
              for critical infrastructure systems.
            </p>
          </div>
          <div className="border-l-4 border-black pl-6">
            <h3 className="text-xl mb-2">Sustainability and Climate Adaptation</h3>
            <p className="text-gray-700 leading-relaxed">
              Addressing long-term planning challenges for climate resilience, emission reduction, and 
              sustainable resource management.
            </p>
          </div>
        </div>

        {/* Collaborations */}
        <h2 className="text-3xl mb-6">Collaborations & Partnerships</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our research is supported by leading funding agencies and conducted in partnership with academic 
          institutions, industry leaders, and government organizations:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {partners.map((partner) => (
            <div key={partner} className="border border-gray-200 p-4 text-center text-sm text-gray-700">
              {partner}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gray-50 border border-gray-200 p-8 text-center">
          <h3 className="text-2xl mb-3">Interested in Joining Us?</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            We're always looking for talented PhD students, postdocs, and collaborators who share our passion 
            for solving complex infrastructure challenges through computational methods.
          </p>
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); }}
            className="inline-block px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors"
          >
            View Open Positions
          </a>
        </div>
      </div>
    </div>
  );
}