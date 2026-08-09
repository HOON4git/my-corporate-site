export const Purchase = () => {
  return (
    <div style={styles.container}>
      {/* 5단계 절차 */}
      <section style={styles.section}>
        <span style={styles.badge}>주세사무처리규정 제86조 준수</span>
        <h2 style={styles.title}>발효주정 구매 5단계 절차</h2>
        <div style={styles.stepContainer}>
          <div style={styles.stepCard}>
            <div style={styles.stepHeader}>STEP 1</div>
            <h3>구입 신고</h3>
            <p>관할 세무서(부가가치세과/주세담당) 방문하여 "주정 또는 원료용 주류구입 승인서" 작성 제출 (또는 홈택스 신청)</p>
          </div>
          <div style={styles.stepCard}>
            <div style={styles.stepHeader}>STEP 2</div>
            <h3>구입 의뢰</h3>
            <p>주정 담당자에게 승인서 송부 (FAX: 0504-438-2154 또는 메일: ethanolkorea@gmail.com)</p>
          </div>
          <div style={styles.stepCard}>
            <div style={styles.stepHeader}>STEP 3</div>
            <h3>대금 결제</h3>
            <p>출고 전 지정 계좌 송금 (우리은행 예금주: (주)케이에탄올) / 출고 당일 세금계산서 발행</p>
          </div>
          <div style={styles.stepCard}>
            <div style={styles.stepHeader}>STEP 4</div>
            <h3>주정 출고</h3>
            <p>용량에 맞춘 운송 (탱크로리 배송 / 200L 드럼 / 20L 캔 택배 또는 직접 수령)</p>
          </div>
          <div style={styles.stepCard}>
            <div style={styles.stepHeader}>STEP 5</div>
            <h3>입고 신고</h3>
            <p>주정 실수요지는 입고 후 반드시 관할 세무서에 반입 신고 진행</p>
          </div>
        </div>
      </section>

      {/* 규격별 출고 단위 */}
      <section style={styles.section}>
        <h2 style={styles.title}>출고 단위 및 포장 규격</h2>
        <div style={styles.unitGrid}>
          <div style={styles.unitCard}>
            <h3>🚛 탱크로리 구매</h3>
            <p style={{ marginTop: '10px', color: '#475569' }}>대량 (10드럼 이상) 구매 시 탱크로리 차량으로 지정 입고지까지 안전 배송</p>
          </div>
          <div style={styles.unitCard}>
            <h3>🛢️ 200L 드럼 구매</h3>
            <p style={{ marginTop: '10px', color: '#475569' }}>주정전용드럼(스테인레스, 철제) 주입 후 화물 운송 또는 직접 수령 가능</p>
          </div>
          <div style={styles.unitCard}>
            <h3>🪣 20L 캔 구매</h3>
            <p style={{ marginTop: '10px', color: '#475569' }}>소량 및 연구용 구매 시 화물, 택배 배송 또는 직접 수령 가능</p>
          </div>
        </div>
      </section>

      {/* 홈택스 신청 안내 */}
      <section style={styles.section}>
        <div style={styles.hometaxBox}>
          <h2 style={{ color: '#15803d', marginBottom: '16px' }}>💻 국세청 홈택스 온라인 신청 방법</h2>
          <ol style={{ lineHeight: '2', paddingLeft: '20px', color: '#334155' }}>
            <li><strong>홈택스 접속 및 로그인:</strong> 기업 공인인증서 로그인</li>
            <li><strong>메뉴 검색:</strong> '면세미납세구입신청' 검색 및 선택</li>
            <li><strong>서식 작성:</strong> 과세/면세에 따른 주정 구입신고서 또는 주류실수요자 증명신청서 작성</li>
            <li><strong>상세 내역 입력:</strong> 구입 갯수 및 가격 계산 입력 후 등록하기</li>
            <li><strong>최종 제출:</strong> 체크 후 저장/신청하기 클릭 ➔ 신청완료 후 접수서류 (주)케이에탄올 전송</li>
          </ol>
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
  badge: {
    fontSize: '13px',
    fontWeight: 700,
    color: '#15803d',
  },
  title: {
    fontSize: '32px',
    fontWeight: 800,
    color: '#0f172a',
    marginTop: '6px',
    marginBottom: '30px',
  },
  stepContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '16px',
  },
  stepCard: {
    backgroundColor: '#ffffff',
    border: '1px solid #cbd5e1',
    borderRadius: '10px',
    padding: '20px',
  },
  stepHeader: {
    fontSize: '12px',
    fontWeight: 900,
    color: '#15803d',
    marginBottom: '8px',
  },
  unitGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
  },
  unitCard: {
    backgroundColor: '#f8fafc',
    padding: '28px',
    borderRadius: '12px',
    border: '1px solid #e2e8f0',
  },
  hometaxBox: {
    backgroundColor: '#f0fdf4',
    padding: '36px',
    borderRadius: '16px',
    border: '1px solid #bbf7d0',
  },
};