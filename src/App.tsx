import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectGrid } from './components/ProjectGrid';
import { FilterBar } from './components/FilterBar';
import { Publications } from './components/Publications';
import { Team } from './components/Team';
import { About } from './components/About';
import { Contact } from './components/Contact';

type Page = 'research' | 'team' | 'publications' | 'about' | 'contact';

export default function App() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activePage, setActivePage] = useState<Page>('research');

  return (
    <div className="min-h-screen bg-white">
      <Header activePage={activePage} onPageChange={setActivePage} />
      
      {activePage === 'research' && (
        <>
          <Hero />
          <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />
          <ProjectGrid activeFilter={activeFilter} />
        </>
      )}
      
      {activePage === 'publications' && <Publications />}
      {activePage === 'team' && <Team />}
      {activePage === 'about' && <About />}
      {activePage === 'contact' && <Contact />}
    </div>
  );
}