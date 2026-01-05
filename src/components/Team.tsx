import { Mail, Linkedin, GraduationCap } from 'lucide-react';

export function Team() {
  const faculty = [
    {
      name: '[Faculty Name]',
      title: 'Principal Investigator',
      role: 'Professor',
      bio: '[Bio description highlighting research expertise and academic background]',
      email: '[email@institution.edu]',
      linkedin: '#',
      scholar: '#',
      initials: 'FN'
    },
    {
      name: '[Faculty Name]',
      title: 'Co-Principal Investigator',
      role: 'Associate Professor',
      bio: '[Bio description highlighting research expertise and academic background]',
      email: '[email@institution.edu]',
      linkedin: '#',
      scholar: '#',
      initials: 'FN'
    }
  ];

  const researchers = [
    {
      name: '[Researcher Name]',
      title: 'Postdoctoral Researcher',
      focus: '[Research focus area]',
      email: '[email@institution.edu]',
      initials: 'RN'
    },
    {
      name: '[Researcher Name]',
      title: 'Postdoctoral Researcher',
      focus: '[Research focus area]',
      email: '[email@institution.edu]',
      initials: 'RN'
    }
  ];

  const phd = [
    {
      name: '[Student Name]',
      year: 'PhD Candidate',
      focus: '[Research focus area]',
      email: '[email@institution.edu]',
      initials: 'SN'
    },
    {
      name: '[Student Name]',
      year: 'PhD Candidate',
      focus: '[Research focus area]',
      email: '[email@institution.edu]',
      initials: 'SN'
    },
    {
      name: '[Student Name]',
      year: 'PhD Student',
      focus: '[Research focus area]',
      email: '[email@institution.edu]',
      initials: 'SN'
    },
    {
      name: '[Student Name]',
      year: 'PhD Student',
      focus: '[Research focus area]',
      email: '[email@institution.edu]',
      initials: 'SN'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-black text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl mb-4">Our Team</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            A multidisciplinary team of researchers working at the intersection of artificial intelligence, 
            energy systems, and infrastructure resilience.
          </p>
        </div>
      </div>

      {/* Faculty */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl mb-8">Faculty</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {faculty.map((person, idx) => (
            <div key={idx} className="border border-gray-200 p-6 hover:border-gray-400 transition-colors">
              <div className="flex gap-6">
                <div className="w-32 h-32 bg-gray-100 rounded flex items-center justify-center text-3xl text-gray-400 flex-shrink-0">
                  {person.initials}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl mb-1">{person.name}</h3>
                  <p className="text-sm text-gray-600 mb-1">{person.title}</p>
                  <p className="text-sm text-gray-500 mb-3">{person.role}</p>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">{person.bio}</p>
                  <div className="flex gap-3">
                    <a href={`mailto:${person.email}`} className="text-gray-600 hover:text-black">
                      <Mail className="w-5 h-5" />
                    </a>
                    <a href={person.linkedin} className="text-gray-600 hover:text-black">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={person.scholar} className="text-gray-600 hover:text-black">
                      <GraduationCap className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Postdocs */}
        <h2 className="text-3xl mb-8">Postdoctoral Researchers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {researchers.map((person, idx) => (
            <div key={idx} className="border border-gray-200 p-5 hover:border-gray-400 transition-colors">
              <div className="w-full aspect-square bg-gray-100 rounded mb-4 flex items-center justify-center text-4xl text-gray-400">
                {person.initials}
              </div>
              <h3 className="text-lg mb-1">{person.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{person.title}</p>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">{person.focus}</p>
              <a href={`mailto:${person.email}`} className="text-sm text-gray-600 hover:text-black flex items-center gap-1">
                <Mail className="w-4 h-4" />
                Email
              </a>
            </div>
          ))}
        </div>

        {/* PhD Students */}
        <h2 className="text-3xl mb-8">PhD Students</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phd.map((person, idx) => (
            <div key={idx} className="border border-gray-200 p-5 hover:border-gray-400 transition-colors">
              <div className="w-full aspect-square bg-gray-100 rounded mb-4 flex items-center justify-center text-4xl text-gray-400">
                {person.initials}
              </div>
              <h3 className="text-lg mb-1">{person.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{person.year}</p>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">{person.focus}</p>
              <a href={`mailto:${person.email}`} className="text-sm text-gray-600 hover:text-black flex items-center gap-1">
                <Mail className="w-4 h-4" />
                Email
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}