import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

type Page = 'about' | 'team' | 'publications' | 'contact';

type HeaderProps = {
  activePage: Page;
  onPageChange: (page: Page) => void;
};

const navItems: { key: Page; label: string }[] = [
  { key: 'about', label: 'About' },
  { key: 'team', label: 'Team' },
  { key: 'publications', label: 'Publications' },
  { key: 'contact', label: 'Contact' },
];

export function Header({ activePage, onPageChange }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

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
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO + WORDMARK */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => onPageChange('about')}
          style={{ gap: '18px' }}
        >
          <Logo />
          <img
            src="/images/idiater-wordmark-new.png"
            alt="IDIATER"
            style={{
              height: '70px',
              width: 'auto',
              display: 'block',
              borderRadius: '10px'
            }}
          />
        </div>
        
        {/* DESKTOP NAV */}
        <nav 
          className="hidden lg:flex items-center"
          style={{ gap: '40px' }}
        >
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => onPageChange(item.key)}
              className="text-lg font-semibold transition-colors capitalize"
              style={{
                color: activePage === item.key ? '#000' : '#4b5563',
                borderBottom: activePage === item.key ? '2px solid #000' : '2px solid transparent',
                paddingBottom: '4px',
                cursor: 'pointer'
              }}
            >
              {item.label}
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

      {/* MOBILE FULL SCREEN MENU */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-white animate-slide-down overflow-y-auto"
          style={{ top: 0, left: 0, width: '100vw', height: '100vh' }}
        >
          <div className="flex items-center justify-end px-6 py-6 border-b border-gray-100">
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 -mr-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
          </div>

          <nav
            className="p-8"
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.key)}
                className={`text-left text-3xl font-medium capitalize transition-colors ${
                  activePage === item.key
                    ? 'text-black border-l-4 border-black pl-4'
                    : 'text-gray-600 hover:text-black pl-4'
                }`}
                style={{ display: 'block', width: '100%' }}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
