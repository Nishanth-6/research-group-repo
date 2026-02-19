import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

type Page = 'about' | 'research' | 'team' | 'publications' | 'contact';

type HeaderProps = {
  activePage: Page;
  onPageChange: (page: Page) => void;
};

const navItems: { key: Page; label: string }[] = [
  { key: 'about', label: 'About' },
  { key: 'research', label: 'Research' },
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
        
        {/* WORDMARK only */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => onPageChange('about')}
        >
          <img
            src="/images/idiater-wordmark-new.png"
            alt="IDIATER"
            style={{
              height: '42px',
              width: 'auto',
              display: 'block',
              borderRadius: '6px'
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
          {/* Top bar: wordmark + close */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px 24px',
              borderBottom: '1px solid #f3f4f6',
            }}
          >
            <span style={{ fontSize: '1.15rem', fontWeight: 700, color: '#111827', letterSpacing: '0.06em' }}>
              IDIATER
            </span>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '6px',
                color: '#6b7280',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <X size={22} />
            </button>
          </div>

          {/* Nav list */}
          <nav style={{ padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: '0' }}>
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.key)}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  padding: '16px 0',
                  fontSize: '1.05rem',
                  fontWeight: activePage === item.key ? 700 : 500,
                  color: activePage === item.key ? '#111827' : '#6b7280',
                  background: activePage === item.key ? '#f8fafc' : 'none',
                  borderRadius: activePage === item.key ? '8px' : '0',
                  paddingLeft: activePage === item.key ? '16px' : '0',
                  border: 'none',
                  cursor: 'pointer',
                  borderBottom: activePage === item.key ? 'none' : '1px solid #f3f4f6',
                  transition: 'all 0.15s ease',
                }}
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
