import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectGrid } from './components/ProjectGrid';
import { FilterBar } from './components/FilterBar';
import { Publications } from './components/Publications';
import { Team } from './components/Team';
import { About } from './components/About';
import { Contact } from './components/Contact';
import KeystaticAdmin from './components/KeystaticAdmin';

type Page = 'research' | 'team' | 'publications' | 'about' | 'contact';

function MainSite() {
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

export default function App() {
  return (
    <Routes>
      <Route path="/keystatic/*" element={<KeystaticAdmin />} />
      <Route path="*" element={<MainSite />} />
    </Routes>
  );
}