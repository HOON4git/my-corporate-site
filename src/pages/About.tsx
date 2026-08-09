import React from 'react';

export const About = () => {
  return (
    <div style={styles.container}>
      {/* CEO 인사말 */}
      <section style={styles.section}>
        <span style={styles.subHeading}>COMPANY INTRO</span>
        <h2 style={styles.heading}>기업소개</h2>
        <div style={styles.quoteBox}>
          "신뢰와 안전을 바탕으로 최고의 주정을 공급하는 파트너가 되겠습니다."
        </div>
        <div style={styles.greetingText}>
          <p>안녕하십니까,</p>
          <p>저희 ㈜케이에탄올 홈페이지를 찾아주신 고객 여러분께 진심으로 감사드립니다.</p>
          <p>
            발효주정은 단순한 원료를 넘어 식품, 음료, 제약, 화장품 등 우리 일상과 밀접한 다양한 산업군의 기초가 되는 핵심 소재입니다.
          </p>
          <p>
            저희 케이에탄올은 엄격한 품질 기준을 통과한 안전하고 투명한 발효주정만을 취급하며, 고객사에서 필요로 하는 용도와 규격에 맞추어 가장 신속하고 정확하게 공급해 드리고 있습니다.
          </p>
          <p>
            단순한 납품 관계를 넘어, 고객사의 비즈니스가 안정적으로 성장할 수 있도록 든든하게 뒷받침하는 최고의 물류·유통 파트너가 될 것을 약속드립니다.
          </p>
          <p style={{ marginTop: '30px', fontWeight: 700, color: '#0f172a' }}>
            ㈜케이에탄올 임직원 올림
          </p>
        </div>
      </section>

      {/* 경영이념 */}
      <section style={styles.section}>
        <span style={styles.subHeading}>PHILOSOPHY</span>
        <h2 style={styles.heading}>경영이념</h2>
        <div style={styles.philosophyBox}>
          <h3 style={styles.philoSlogan}>"안전은 우리의 기본, 신뢰는 우리의 자부심, 상생은 우리의 미래"</h3>
          <div style={styles.philoGrid}>
            <div style={styles.philoItem}>
              <strong>안전 (安全)</strong>
              <p>철저한 기준과 원칙으로 안전한 주정을 공급한다.</p>
            </div>
            <div style={styles.philoItem}>
              <strong>신뢰 (信賴)</strong>
              <p>투명하고 정직한 유통으로 고객과의 약속을 지킨다.</p>
            </div>
            <div style={styles.philoItem}>
              <strong>상생 (相生)</strong>
              <p>파트너의 성공을 돕고 더불어 성장한다.</p>
            </div>
          </div>
          <p style={styles.philoMeaning}>
            * 의미: 타협하지 않는 안전 기준을 기본 원칙으로 삼고, 정직한 품질로 신뢰를 얻으며, 고객사와 함께 더 나은 내일을 만들어간다는 뜻입니다.
          </p>
        </div>
      </section>

      {/* 회사 연혁 */}
      <section style={styles.section}>
        <span style={styles.subHeading}>HISTORY</span>
        <h2 style={styles.heading}>회사 연혁</h2>
        <div style={styles.timeline}>
          <div style={styles.timelineItem}>
            <span style={styles.year}>2026년 07월</span>
            <span style={styles.event}>발효주정소매업 면허 취득 (면허번호: 131-5-84564)</span>
          </div>
          <div style={styles.timelineItem}>
            <span style={styles.year}>2026년 04월</span>
            <span style={styles.event}>㈜케이에탄올 (ethanolkorea) 법인 설립</span>
          </div>
          <div style={styles.timelineItem}>
            <span style={styles.year}>2025년 07월</span>
            <span style={styles.event}>위험물 취급소 사용 승인</span>
          </div>
        </div>
      </section>

      {/* 오시는 길 */}
      <section style={styles.section}>
        <span style={styles.subHeading}>LOCATION</span>
        <h2 style={styles.heading}>오시는 길</h2>
        <div style={styles.locationCard}>
          <div style={styles.locationInfo}>
            <p><strong>주소:</strong> 인천광역시 남동구 남동대로 742, 101호(대화빌딩)</p>
            <p><strong>주요 위치:</strong> 길병원사거리, 남동세무서, 남동경찰서 인근</p>
            <p><strong>전화:</strong> 010-5314-2154 | <strong>FAX:</strong> 0504-438-2154</p>
          </div>
          <div style={styles.mapNotice}>
            📍 약도 안내: 인천 남동대로 길병원사거리에서 남동경찰서 방면 남동대로 742 대화빌딩 101호에 위치하고 있습니다.
          </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '80px 5%',
    fontFamily: '"Pretendard", sans-serif',
  },
  section: {
    marginBottom: '80px',
  },
  subHeading: {
    fontSize: '13px',
    fontWeight: 700,
    color: '#15803d',
    letterSpacing: '1px',
  },
  heading: {
    fontSize: '32px',
    fontWeight: 800,
    color: '#0f172a',
    marginTop: '4px',
    marginBottom: '30px',
  },
  quoteBox: {
    backgroundColor: '#f0fdf4',
    borderLeft: '4px solid #15803d',
    padding: '20px 24px',
    fontSize: '20px',
    fontWeight: 700,
    color: '#166534',
    marginBottom: '30px',
  },
  greetingText: {
    fontSize: '16px',
    color: '#334155',
    lineHeight: '1.8',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '16px',
  },
  philosophyBox: {
    backgroundColor: '#f8fafc',
    padding: '36px',
    borderRadius: '12px',
    border: '1px solid #e2e8f0',
  },
  philoSlogan: {
    fontSize: '22px',
    fontWeight: 800,
    color: '#15803d',
    textAlign: 'center' as const,
    marginBottom: '30px',
  },
  philoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '20px',
    marginBottom: '24px',
  },
  philoItem: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    border: '1px solid #cbd5e1',
  },
  philoMeaning: {
    fontSize: '14px',
    color: '#64748b',
    borderTop: '1px solid #cbd5e1',
    paddingTop: '16px',
    marginTop: '10px',
  },
  timeline: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '20px',
    borderLeft: '2px solid #15803d',
    paddingLeft: '24px',
  },
  timelineItem: {
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
  },
  year: {
    fontSize: '16px',
    fontWeight: 800,
    color: '#15803d',
    minWidth: '100px',
  },
  event: {
    fontSize: '16px',
    color: '#334155',
  },
  locationCard: {
    backgroundColor: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    padding: '30px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
  },
  locationInfo: {
    fontSize: '16px',
    color: '#334155',
    lineHeight: '1.8',
  },
  mapNotice: {
    marginTop: '20px',
    padding: '16px',
    backgroundColor: '#f1f5f9',
    borderRadius: '8px',
    fontSize: '14px',
    color: '#475569',
  },
};