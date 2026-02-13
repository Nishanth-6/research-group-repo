import { useState } from 'react';
import { Header } from './components/Header';
import { Publications } from './components/Publications';
import { Team } from './components/Team';
import { About } from './components/About';
import { Contact } from './components/Contact';

type Page = 'about' | 'research' | 'team' | 'publications' | 'contact';

function App() {
  const [activePage, setActivePage] = useState<Page>('about');
  const [publicationsFilter, setPublicationsFilter] = useState<string | null>(null);

  const handlePageChange = (page: Page) => {
    if (page !== 'publications') {
      setPublicationsFilter(null);
    }

    // "Research" tab → go to About page, then scroll to research-projects anchor
    if (page === 'research') {
      setActivePage('about');
      // Use requestAnimationFrame so the About component renders first
      requestAnimationFrame(() => {
        setTimeout(() => {
          document.getElementById('research-projects')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      });
      return;
    }

    setActivePage(page);
    window.scrollTo({ top: 0 });
  };

  const handleResearchAreaClick = (researchArea: string) => {
    setPublicationsFilter(researchArea);
    setActivePage('publications');
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header activePage={activePage} onPageChange={handlePageChange} />

      {activePage === 'about' && <About onResearchAreaClick={handleResearchAreaClick} />}
      {activePage === 'team' && <Team />}
      {activePage === 'publications' && (
        <Publications initialFilter={publicationsFilter} />
      )}
      {activePage === 'contact' && <Contact />}
    </div>
  );
}

export default App;
