import React, { useState } from 'react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { id: 'home', label: '홈' },
    { id: 'about', label: '회사소개' },
    { id: 'info', label: '발효주정이란?' },
    { id: 'purchase', label: '구매안내' },
    { id: 'contact', label: '문의하기' },
  ];

  const handleNavClick = (tab: string) => {
    setActiveTab(tab);
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="site-header__container">
        <div className="site-header__logo" onClick={() => handleNavClick('home')}>
          <span className="site-header__logo-mark">K-</span>ETHANOL
          <span className="site-header__logo-sub"> (주)케이에탄올</span>
        </div>

        <button
          type="button"
          className={`site-header__toggle ${menuOpen ? 'open' : ''}`}
          aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`site-header__nav ${menuOpen ? 'open' : ''}`} aria-label="메인 네비게이션">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`site-header__nav-item ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};
