// 1. 최신 TypeScript 빌드 규칙에 맞춰 'import type' 키워드를 사용하여 CSSProperties 타입을 올바르게 가져옵니다.
import type { CSSProperties } from 'react';

// 2. 다른 CSS 파일들과의 중복 선언(styles) 충돌을 방지하기 위해 'headerStyles'로 변수명을 지정합니다.
const headerStyles: {
  header: CSSProperties;
  logo: CSSProperties;
  logoDot: CSSProperties;
  navList: CSSProperties;
  navItem: CSSProperties;
  activeIndicator: CSSProperties;
} = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '18px 5%',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
  },
  logo: {
    fontSize: '22px',
    fontWeight: 800,
    letterSpacing: '-0.5px',
    color: '#111',
    cursor: 'pointer',
  },
  logoDot: {
    color: '#0066FF',
    marginLeft: '2px',
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    gap: '35px',
    margin: 0,
    padding: 0,
  },
  navItem: {
    cursor: 'pointer',
    fontSize: '15px',
    position: 'relative',
    padding: '4px 0',
  },
  activeIndicator: {
    position: 'absolute',
    bottom: -4,
    left: 0,
    width: '100%',
    height: '2px',
    backgroundColor: '#0066FF',
    borderRadius: '2px',
  },
};

// 3. TypeScript 환경에서 에러가 발생하지 않도록 Header 컴포넌트에 필요한 타입들을 정의해 줍니다.
interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isScrolled: boolean;
}

// 4. 컴포넌트 선언 시 ': HeaderProps' 타입을 명시해 줌으로써 암시적 any 에러를 완전히 해결합니다.
const Header = ({ activeTab, setActiveTab, isScrolled }: HeaderProps) => {
  const menuItems = [
    { id: 'home', label: '홈' },
    { id: 'about', label: '회사소개' },
    { id: 'products', label: '주정 제품 및 용도' },
    { id: 'contact', label: '구매 가이드' },
  ];

  return (
    <header style={{
      ...headerStyles.header,
      backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.85)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      borderBottom: isScrolled ? '1px solid rgba(0,0,0,0.08)' : '1px solid transparent',
      boxShadow: isScrolled ? '0 4px 30px rgba(0, 0, 0, 0.03)' : 'none',
    }}>
      <div style={headerStyles.logo} onClick={() => setActiveTab('home')}>
        Ethanol Korea <span style={headerStyles.logoDot}>.</span>
      </div>
      <nav>
        <ul style={headerStyles.navList}>
          {menuItems.map((item) => (
            <li
              key={item.id}
              style={{
                ...headerStyles.navItem,
                color: activeTab === item.id ? '#0066FF' : '#444',
                fontWeight: activeTab === item.id ? '700' : '400',
              }}
              onClick={() => setActiveTab(item.id)}
            >
              {item.label}
              {activeTab === item.id && <span style={headerStyles.activeIndicator} />}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;