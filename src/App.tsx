import { useState } from 'react';
import { VisualEditing } from '@sanity/visual-editing/react';
import { Header } from './components/Header';
import { Publications } from './components/Publications';
import { Team } from './components/Team';
import { About } from './components/About';
import { Research } from './components/Research';
import { Contact } from './components/Contact';
import { ProjectDetail } from './components/ProjectDetail';
import { Footer } from './components/Footer';
import { isStudioPreview } from './lib/sanity';

type Page = 'about' | 'research' | 'team' | 'publications' | 'contact' | 'project-detail';

interface ProjectForDetail {
  title: string;
  description: string;
  image: string;
  categories: string[];
  team: string[];
}

function App() {
  const [activePage, setActivePage] = useState<Page>('about');
  const [publicationsFilter, setPublicationsFilter] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectForDetail | null>(null);
  const [projectDetailOrigin, setProjectDetailOrigin] = useState<'about' | 'research'>('about');

  const handlePageChange = (page: Page) => {
    if (page !== 'publications') {
      setPublicationsFilter(null);
    }
    setActivePage(page);
    window.scrollTo({ top: 0 });
  };

  const handleResearchAreaClick = (researchArea: string) => {
    setPublicationsFilter(researchArea);
    setActivePage('publications');
    window.scrollTo({ top: 0 });
  };

  const handleProjectClick = (project: ProjectForDetail, origin: 'about' | 'research' = 'about') => {
    setSelectedProject(project);
    setProjectDetailOrigin(origin);
    setActivePage('project-detail');
    window.scrollTo({ top: 0 });
  };

  const handleProjectDetailBack = () => {
    setActivePage('research');
    window.scrollTo({ top: 0 });
  };

  // Determine which page to highlight as active in the header
  const headerActivePage: Page =
    activePage === 'project-detail'
      ? projectDetailOrigin === 'research'
        ? 'research'
        : 'about'
      : activePage;

  return (
    <div className="min-h-screen bg-white">
      <Header activePage={headerActivePage} onPageChange={handlePageChange} />

      {activePage === 'about' && (
        <About
          onResearchAreaClick={handleResearchAreaClick}
          onProjectClick={(project) => handleProjectClick(project, 'about')}
          onResearchPageClick={() => handlePageChange('research')}
        />
      )}
      {activePage === 'research' && (
        <Research
          onProjectClick={(project) => handleProjectClick(project, 'research')}
        />
      )}
      {activePage === 'team' && <Team />}
      {activePage === 'publications' && (
        <Publications initialFilter={publicationsFilter} />
      )}
      {activePage === 'contact' && <Contact />}
      {activePage === 'project-detail' && selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onBack={handleProjectDetailBack}
        />
      )}

      <Footer
        onPageChange={(page) => handlePageChange(page as Page)}
        onResearchAreaClick={handleResearchAreaClick}
      />

      {/* Sanity Visual Editing — only activates inside Presentation Tool */}
      {isStudioPreview && <VisualEditing />}
    </div>
  );
}

export default App;
