import { Menu } from 'lucide-react';
import { Logo } from './Logo';

type Page = 'research' | 'team' | 'publications' | 'about' | 'contact';

type HeaderProps = {
  activePage: Page;
  onPageChange: (page: Page) => void;
};

export function Header({ activePage, onPageChange }: HeaderProps) {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Logo />
          <div>
            <h1 className="text-2xl tracking-tight">IDIATER</h1>
            <p className="text-xs text-gray-600 mt-1 max-w-2xl">
              Infrastructure &amp; Decision Intelligence for Accelerating Technology and Energy Resilience
            </p>
          </div>
        </div>
        
        <nav className="hidden lg:flex items-center gap-8">
          <button 
            onClick={() => onPageChange('research')}
            className={`text-sm transition-colors ${
              activePage === 'research' ? 'text-black font-medium' : 'text-gray-700 hover:text-black'
            }`}
          >
            Research
          </button>
          <button 
            onClick={() => onPageChange('team')}
            className={`text-sm transition-colors ${
              activePage === 'team' ? 'text-black font-medium' : 'text-gray-700 hover:text-black'
            }`}
          >
            Team
          </button>
          <button 
            onClick={() => onPageChange('publications')}
            className={`text-sm transition-colors ${
              activePage === 'publications' ? 'text-black font-medium' : 'text-gray-700 hover:text-black'
            }`}
          >
            Publications
          </button>
          <button 
            onClick={() => onPageChange('about')}
            className={`text-sm transition-colors ${
              activePage === 'about' ? 'text-black font-medium' : 'text-gray-700 hover:text-black'
            }`}
          >
            About
          </button>
          <button 
            onClick={() => onPageChange('contact')}
            className={`text-sm transition-colors ${
              activePage === 'contact' ? 'text-black font-medium' : 'text-gray-700 hover:text-black'
            }`}
          >
            Contact
          </button>
        </nav>
        
        <button className="lg:hidden p-2">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}