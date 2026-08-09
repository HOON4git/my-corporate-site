export const EthanolInfo = () => {
  const applications = [
    { title: '식품원료', desc: '식초, 조미료, 향신료, 감미료, 맛술, 소스류, 절임제품, 떡, 면류(냉면, 생면)' },
    { title: '식품보존', desc: '장류(고추장, 된장, 쌈장, 간장 등), 면류, 과자류, 어육제품, 절임식품, 곶감주정처리' },
    { title: '의약품/의약외품', desc: '소독용알콜, 약품코팅, 드링크류, 천연기능식품, 손소독제' },
    { title: '추출·발효', desc: '천연발효 및 숙성, 과일 허브 원료, 디퓨저, 홍삼, 인삼, 프로폴리스, 한약재, 연초 등' },
    { title: '친환경 제품', desc: '고급디퓨저, 천연기피제, 유기농약, 친환경 IT생산공정, 렌즈클리닝, 고급워셔액' },
    { title: '생활건강', desc: '손세정제, 고급화장품, 치약, 1종주방세제, 향수, 구강청결제, 물티슈' },
    { title: '살균소독', desc: '식품 살균·세척, 젖병소독, 주방, 식품기구살균소독, 위생기계·기구소독' },
  ];

  return (
    <div style={styles.container}>
      {/* 정의 */}
      <section style={styles.section}>
        <h2 style={styles.title}>발효주정이란?</h2>
        <div style={styles.lawBox}>
          <h3>주세법상 정의 (주세법 제2조 및 주세사무처리규정 제2조)</h3>
          <p>
            <strong>발효주정:</strong> 전분이나 당분이 함유된 원료(쌀, 보리, 고구마, 타피오카 등)를 국내에서 발효시켜 알코올분 95도 이상으로 정제한 것
          </p>
          <p>
            * 희석하여 음용할 수 있는 에틸알코올을 의미하며, 식품첨가물 및 각종 산업의 핵심 기초 소재입니다.
          </p>
        </div>
      </section>

      {/* 발효주정 vs 공업용주정 비교 */}
      <section style={styles.section}>
        <h3 style={styles.subTitle}>발효주정 vs 공업용주정 비교 분석</h3>
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th>구분</th>
                <th style={{ backgroundColor: '#f0fdf4', color: '#166534' }}>발효주정 (음용 가능)</th>
                <th style={{ backgroundColor: '#fef2f2', color: '#991b1b' }}>공업용주정 (음용 불가)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>제조방법</td>
                <td>전분질, 당질 원료를 발효 후 증류</td>
                <td>화학적 합성 (석유화학, 에틸렌) / 변성</td>
              </tr>
              <tr>
                <td>주요원료</td>
                <td>쌀, 보리, 타피오카, 고구마, 사탕수수 등</td>
                <td>에틸렌 (원유, 석탄 추출)</td>
              </tr>
              <tr>
                <td>음용여부</td>
                <td><strong>✓ 음용 가능</strong> (희석하여 술 및 식품 제조)</td>
                <td><strong>❌ 음용 절대 불가</strong> (변성제 첨가)</td>
              </tr>
              <tr>
                <td>주요용도</td>
                <td>소주, 식초, 식품첨가물, 의약품, 소독제</td>
                <td>잉크, 도료, 세척제, 공업용제</td>
              </tr>
              <tr>
                <td>세금 및 규제</td>
                <td>주세법 적용, 엄격한 유통 관리</td>
                <td>주세 면세</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 제조 공정 */}
      <section style={styles.section}>
        <h3 style={styles.subTitle}>발효주정 제조 공정</h3>
        <div style={styles.processGrid}>
          <div style={styles.processStep}>
            <span style={styles.stepNum}>1</span>
            <h4>원료 준비</h4>
            <p>쌀, 보리, 고구마, 타피오카 등 식물성 원료</p>
          </div>
          <div style={styles.processStep}>
            <span style={styles.stepNum}>2</span>
            <h4>분쇄 & 증자</h4>
            <p>원료 분쇄 및 가열 조리를 통한 녹말 액화</p>
          </div>
          <div style={styles.processStep}>
            <span style={styles.stepNum}>3</span>
            <h4>발효 과정</h4>
            <p>효모(酵母)로 발효시켜 당분을 알코올로 변환</p>
          </div>
          <div style={styles.processStep}>
            <span style={styles.stepNum}>4</span>
            <h4>연속 증류</h4>
            <p>불순물 제거 및 95% 이상 고순도 에탄올 추출</p>
          </div>
        </div>
      </section>

      {/* 7대 활용분야 */}
      <section style={styles.section}>
        <h3 style={styles.subTitle}>발효주정의 7대 주요 활용분야</h3>
        <div style={styles.appGrid}>
          {applications.map((app, index) => (
            <div key={index} style={styles.appCard}>
              <h4 style={styles.appTitle}>{app.title}</h4>
              <p style={styles.appDesc}>{app.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '80px 5%',
    fontFamily: '"Pretendard", sans-serif',
  },
  section: {
    marginBottom: '70px',
  },
  title: {
    fontSize: '36px',
    fontWeight: 900,
    color: '#0f172a',
    marginBottom: '24px',
  },
  subTitle: {
    fontSize: '24px',
    fontWeight: 800,
    color: '#0f172a',
    marginBottom: '20px',
  },
  lawBox: {
    backgroundColor: '#f8fafc',
    border: '1px solid #cbd5e1',
    padding: '28px',
    borderRadius: '12px',
    lineHeight: '1.7',
  },
  tableWrapper: {
    overflowX: 'auto' as const,
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse' as const,
    textAlign: 'left' as const,
    fontSize: '15px',
  },
  processGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
  },
  processStep: {
    backgroundColor: '#ffffff',
    border: '1px solid #e2e8f0',
    padding: '24px',
    borderRadius: '12px',
    textAlign: 'center' as const,
  },
  stepNum: {
    backgroundColor: '#15803d',
    color: '#ffffff',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 800,
    marginBottom: '12px',
  },
  appGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
  },
  appCard: {
    padding: '24px',
    backgroundColor: '#f0fdf4',
    borderRadius: '10px',
    border: '1px solid #bbf7d0',
  },
  appTitle: {
    fontSize: '18px',
    fontWeight: 700,
    color: '#166534',
    marginBottom: '8px',
  },
  appDesc: {
    fontSize: '14px',
    color: '#334155',
    lineHeight: '1.5',
  },
};