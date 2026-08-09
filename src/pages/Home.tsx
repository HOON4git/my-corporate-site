import React from 'react';

interface HomeProps {
  setActiveTab: (tab: string) => void;
}

export const Home: React.FC<HomeProps> = ({ setActiveTab }) => {
  return (
    <div style={{ fontFamily: '"Pretendard", sans-serif' }}>
      {/* 히어로 배너 */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <span style={styles.badge}>투명하고 안전한 발효주정 전문 유통</span>
          <h1 style={styles.heroTitle}>
            신뢰와 안전을 바탕으로<br />
            최고의 주정을 공급하는 파트너
          </h1>
          <p style={styles.heroSub}>
            식품, 음료, 제약, 화장품 등 일상과 밀접한 필수 원료인 95% 고순도 발효주정을<br />
            고객사의 용도와 규격에 맞추어 가장 신속하고 정확하게 공급합니다.
          </p>
          <div style={styles.btnGroup}>
            <button style={styles.primaryBtn} onClick={() => setActiveTab('purchase')}>
              구매 절차 안내
            </button>
            <button style={styles.secondaryBtn} onClick={() => setActiveTab('contact')}>
              대량 발주 문의
            </button>
          </div>
        </div>
      </section>

      {/* 3대 경영 이념 요약 */}
      <section style={styles.valuesSection}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>경영이념</h2>
          <p style={styles.sectionDesc}>"안전은 우리의 기본, 신뢰는 우리의 자부심, 상생은 우리의 미래"</p>
        </div>
        <div style={styles.cardGrid}>
          <div style={styles.valueCard}>
            <div style={styles.valueIcon}>🛡️</div>
            <h3 style={styles.valueTitle}>안전 (安全)</h3>
            <p style={styles.valueText}>철저한 기준과 원칙으로 타협하지 않고 안전한 주정만을 공급합니다.</p>
          </div>
          <div style={styles.valueCard}>
            <div style={styles.valueIcon}>🤝</div>
            <h3 style={styles.valueTitle}>신뢰 (信賴)</h3>
            <p style={styles.valueText}>투명하고 정직한 유통 과정을 통해 고객과의 약속을 엄격히 지킵니다.</p>
          </div>
          <div style={styles.valueCard}>
            <div style={styles.valueIcon}>🌱</div>
            <h3 style={styles.valueTitle}>상생 (相生)</h3>
            <p style={styles.valueText}>단순 납품을 넘어 파트너사의 성공을 돕고 더불어 지속 성장합니다.</p>
          </div>
        </div>
      </section>

      {/* 주요 서비스 및 용도 요약 */}
      <section style={styles.featureSection}>
        <div style={styles.featureContainer}>
          <div style={styles.featureText}>
            <h2>엄격한 품질 기준의 95% 고순도 발효주정</h2>
            <p>
              전분질(쌀, 보리, 고구마, 타피오카 등)과 당질 원료를 국내에서 자연 발효 및 증류하여 만든
              음용 가능한 고순도 에탄올입니다. 주세법을 철저히 준수하여 정밀하게 유통됩니다.
            </p>
            <ul style={styles.checkList}>
              <li>✓ 탱크로리 (10드럼 이상 대량 배송)</li>
              <li>✓ 200L 스테인레스/철제 전용 드럼</li>
              <li>✓ 20L 소량 캔 포장 단위 대응</li>
            </ul>
            <button style={styles.linkBtn} onClick={() => setActiveTab('info')}>
              발효주정 활용분야 보기 →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  hero: {
    backgroundColor: '#f0fdf4',
    backgroundImage: 'linear-gradient(135deg, #f0fdf4 0%, #e2e8f0 100%)',
    padding: '100px 5% 90px 5%',
    textAlign: 'center' as const,
  },
  heroContent: {
    maxWidth: '900px',
    margin: '0 auto',
  },
  badge: {
    backgroundColor: '#15803d',
    color: '#ffffff',
    padding: '6px 16px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: 600,
    display: 'inline-block',
    marginBottom: '20px',
  },
  heroTitle: {
    fontSize: '44px',
    fontWeight: 900,
    color: '#0f172a',
    lineHeight: '1.3',
    marginBottom: '20px',
    letterSpacing: '-1px',
  },
  heroSub: {
    fontSize: '18px',
    color: '#475569',
    lineHeight: '1.6',
    marginBottom: '40px',
  },
  btnGroup: {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
  },
  primaryBtn: {
    padding: '14px 32px',
    backgroundColor: '#15803d',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: 700,
    cursor: 'pointer',
  },
  secondaryBtn: {
    padding: '14px 32px',
    backgroundColor: '#ffffff',
    color: '#0f172a',
    border: '1px solid #cbd5e1',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: 700,
    cursor: 'pointer',
  },
  valuesSection: {
    padding: '90px 5%',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  sectionHeader: {
    textAlign: 'center' as const,
    marginBottom: '50px',
  },
  sectionTitle: {
    fontSize: '32px',
    fontWeight: 800,
    color: '#0f172a',
  },
  sectionDesc: {
    fontSize: '18px',
    color: '#15803d',
    fontWeight: 600,
    marginTop: '10px',
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
  },
  valueCard: {
    padding: '36px',
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    border: '1px solid #e2e8f0',
    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
    textAlign: 'center' as const,
  },
  valueIcon: {
    fontSize: '40px',
    marginBottom: '16px',
  },
  valueTitle: {
    fontSize: '22px',
    fontWeight: 700,
    color: '#0f172a',
    marginBottom: '12px',
  },
  valueText: {
    fontSize: '15px',
    color: '#64748b',
    lineHeight: '1.6',
  },
  featureSection: {
    backgroundColor: '#f8fafc',
    padding: '80px 5%',
    borderTop: '1px solid #e2e8f0',
  },
  featureContainer: {
    maxWidth: '1000px',
    margin: '0 auto',
    textAlign: 'center' as const,
  },
  featureText: {
    lineHeight: '1.8',
  },
  checkList: {
    listStyle: 'none',
    padding: 0,
    margin: '24px 0',
    display: 'flex',
    justifyContent: 'center',
    gap: '24px',
    fontWeight: 600,
    color: '#15803d',
  },
  linkBtn: {
    padding: '12px 24px',
    backgroundColor: '#0f172a',
    color: '#ffffff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 600,
  },
};