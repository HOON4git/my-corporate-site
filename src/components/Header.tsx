import React from 'react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'home', label: '홈' },
    { id: 'about', label: '회사소개' },
    { id: 'info', label: '발효주정이란?' },
    { id: 'purchase', label: '구매안내' },
    { id: 'contact', label: '문의하기' },
  ];

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        {/* 로고 영역 */}
        <div style={styles.logo} onClick={() => setActiveTab('home')}>
          <span style={styles.logoK}>K-</span>ETHANOL
          <span style={styles.logoSub}> (주)케이에탄올</span>
        </div>

        {/* 네비게이션 메뉴 */}
        <nav style={styles.nav}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              style={{
                ...styles.navButton,
                color: activeTab === item.id ? '#15803d' : '#334155',
                borderBottom: activeTab === item.id ? '3px solid #15803d' : '3px solid transparent',
                fontWeight: activeTab === item.id ? 700 : 500,
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

const styles = {
  header: {
    position: 'sticky' as const,
    top: 0,
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
    zIndex: 1000,
    fontFamily: '"Pretendard", sans-serif',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 5%',
    height: '80px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '26px',
    fontWeight: 900,
    cursor: 'pointer',
    color: '#0f172a',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  logoK: {
    color: '#15803d',
  },
  logoSub: {
    fontSize: '15px',
    fontWeight: 600,
    color: '#15803d',
    backgroundColor: '#f0fdf4',
    padding: '4px 8px',
    borderRadius: '4px',
    marginLeft: '6px',
  },
  nav: {
    display: 'flex',
    gap: '24px',
  },
  navButton: {
    background: 'none',
    border: 'none',
    fontSize: '16px',
    padding: '26px 4px 23px 4px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
};