export function Publications() {
  const sections = [
    {
      title: 'Journal Papers',
      papers: [
        {
          title: '[Paper Title]: [Brief descriptive subtitle of research contribution]',
          authors: '[Author Names]',
          venue: '[Journal Name], 2024 (Forthcoming)',
          links: [
            { label: 'PDF', href: '#' },
            { label: 'arXiv', href: '#' }
          ]
        },
        {
          title: '[Paper Title]: [Brief descriptive subtitle of research contribution]',
          authors: '[Author Names]',
          venue: '[Journal Name], 2024 (Forthcoming)',
          links: [
            { label: 'PDF', href: '#' }
          ]
        },
        {
          title: '[Paper Title]: [Brief descriptive subtitle of research contribution]',
          authors: '[Author Names]',
          venue: '[Journal Name], 2023',
          links: [
            { label: 'PDF', href: '#' },
            { label: 'DOI', href: '#' }
          ]
        },
        {
          title: '[Paper Title]: [Brief descriptive subtitle of research contribution]',
          authors: '[Author Names]',
          venue: '[Journal Name], 2023',
          links: [
            { label: 'PDF', href: '#' }
          ]
        },
        {
          title: '[Paper Title]: [Brief descriptive subtitle of research contribution]',
          authors: '[Author Names]',
          venue: '[Journal Name], 2022',
          links: [
            { label: 'PDF', href: '#' },
            { label: 'Code', href: '#' }
          ]
        },
        {
          title: '[Paper Title]: [Brief descriptive subtitle of research contribution]',
          authors: '[Author Names]',
          venue: '[Journal Name], 2022',
          links: [
            { label: 'PDF', href: '#' }
          ]
        }
      ]
    },
    {
      title: 'Conference Papers',
      papers: [
        {
          title: '[Paper Title]: [Brief descriptive subtitle of research contribution]',
          authors: '[Author Names]',
          venue: '[Conference Name] 2023',
          links: [
            { label: 'PDF', href: '#' },
            { label: 'Poster', href: '#' }
          ]
        },
        {
          title: '[Paper Title]: [Brief descriptive subtitle of research contribution]',
          authors: '[Author Names]',
          venue: '[Conference Name] 2023',
          links: [
            { label: 'PDF', href: '#' }
          ]
        },
        {
          title: '[Paper Title]: [Brief descriptive subtitle of research contribution]',
          authors: '[Author Names]',
          venue: '[Conference Name] 2023',
          links: [
            { label: 'PDF', href: '#' }
          ]
        }
      ]
    },
    {
      title: 'Working Papers',
      papers: [
        {
          title: '[Paper Title]: [Brief descriptive subtitle of research contribution]',
          authors: '[Author Names]',
          venue: 'Under Review',
          links: [
            { label: 'arXiv', href: '#' }
          ]
        },
        {
          title: '[Paper Title]: [Brief descriptive subtitle of research contribution]',
          authors: '[Author Names]',
          venue: 'Under Review',
          links: [
            { label: 'Draft', href: '#' }
          ]
        },
        {
          title: '[Paper Title]: [Brief descriptive subtitle of research contribution]',
          authors: '[Author Names]',
          venue: 'Working Paper',
          links: []
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-black text-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl mb-4">Publications</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Our research spans multiple domains including decision intelligence, energy systems, 
            infrastructure resilience, and sustainability. Browse our complete publication list below.
          </p>
        </div>
      </div>

      {/* Publications List */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {sections.map((section, idx) => (
          <div key={section.title} className={idx > 0 ? 'mt-16' : ''}>
            <h2 className="text-3xl mb-8 pb-3 border-b border-gray-200">{section.title}</h2>
            <div className="space-y-8">
              {section.papers.map((paper, paperIdx) => (
                <div key={paperIdx} className="group">
                  <h3 className="text-lg leading-relaxed mb-2 group-hover:text-gray-600 transition-colors">
                    {paper.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{paper.authors}</p>
                  <p className="text-sm text-gray-500 italic mb-3">{paper.venue}</p>
                  {paper.links.length > 0 && (
                    <div className="flex gap-4">
                      {paper.links.map((link, linkIdx) => (
                        <a
                          key={linkIdx}
                          href={link.href}
                          className="text-sm px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}