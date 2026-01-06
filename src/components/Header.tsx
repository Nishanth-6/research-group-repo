import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

type Page = 'research' | 'team' | 'publications' | 'about' | 'contact';

type HeaderProps = {
  activePage: Page;
  onPageChange: (page: Page) => void;
};

export function Header({ activePage, onPageChange }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleNavClick = (page: Page) => {
    onPageChange(page);
    setIsOpen(false);
  };

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        
        {/* LOGO SECTION (Visible on Navbar) */}
        <div className="flex items-center gap-4">
          <Logo />
          <div>
            <h1 className="text-2xl tracking-tight font-semibold">IDIATER</h1>
            <p className="text-xs text-gray-600 mt-1 max-w-2xl hidden sm:block">
              Infrastructure &amp; Decision Intelligence for Accelerating Technology and Energy Resilience
            </p>
          </div>
        </div>
        
        {/* DESKTOP NAV (Hidden on Mobile) */}
        <nav className="hidden lg:flex items-center gap-8">
          {['research', 'team', 'publications', 'about', 'contact'].map((page) => (
            <button 
              key={page}
              onClick={() => onPageChange(page as Page)}
              className={`text-sm transition-colors capitalize ${
                activePage === page ? 'text-black font-medium' : 'text-gray-700 hover:text-black'
              }`}
            >
              {page}
            </button>
          ))}
        </nav>
        
        {/* MOBILE MENU TRIGGER */}
        <button 
          className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-md"
          onClick={() => setIsOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* --- MOBILE FULL SCREEN MENU --- */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-white animate-slide-down overflow-y-auto"
          style={{ top: 0, left: 0, width: '100vw', height: '100vh' }}
        >
          
          {/* Menu Header (Only Close Button, No Text/Logo) */}
          <div className="flex items-center justify-end px-6 py-6 border-b border-gray-100">
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 -mr-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
          </div>

          {/* Vertical Links List */}
          <nav 
            className="p-8"
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            {['research', 'team', 'publications', 'about', 'contact'].map((page) => (
              <button
                key={page}
                onClick={() => handleNavClick(page as Page)}
                className={`text-left text-2xl font-medium capitalize transition-colors ${
                  activePage === page 
                    ? 'text-black' 
                    : 'text-gray-500 hover:text-black'
                }`}
                style={{ display: 'block', width: '100%' }}
              >
                {page}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}