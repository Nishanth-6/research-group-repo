import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Publications } from './components/Publications';
import { Team } from './components/Team';
import { About } from './components/About';
import { Contact } from './components/Contact';
import Admin from './components/Admin';

type Page = 'about' | 'team' | 'publications' | 'contact';

function MainSite() {
  const [activePage, setActivePage] = useState<Page>('about');

  return (
    <div className="min-h-screen bg-white">
      <Header activePage={activePage} onPageChange={setActivePage} />

      {activePage === 'about' && <About />}
      {activePage === 'team' && <Team />}
      {activePage === 'publications' && <Publications />}
      {activePage === 'contact' && <Contact />}
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/admin/*" element={<Admin />} />
      <Route path="*" element={<MainSite />} />
    </Routes>
  );
}
