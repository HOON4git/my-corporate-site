import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

// 스타일 정의 (기존 UI 디자인 유지 및 튜닝)
const contactStyles = {
  container: {
    padding: '120px 5% 100px 5%',
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '60px',
    fontFamily: '"Pretendard", sans-serif',
  },
  leftSection: {
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
  },
  title: {
    fontSize: '36px',
    fontWeight: 800,
    color: '#0f172a',
    marginBottom: '20px',
    letterSpacing: '-1px',
  },
  description: {
    fontSize: '16px',
    color: '#475569',
    lineHeight: '1.6',
    marginBottom: '40px',
    wordBreak: 'keep-all' as const,
  },
  infoCard: {
    padding: '24px',
    backgroundColor: '#f8fafc',
    borderRadius: '12px',
    border: '1px solid #e2e8f0',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '16px',
  },
  infoItem: {
    fontSize: '15px',
    color: '#334155',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  infoLabel: {
    fontWeight: 700,
    color: '#0066FF',
    minWidth: '80px',
  },
  form: {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '16px',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
    border: '1px solid #f1f5f9',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '24px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '8px',
  },
  label: {
    fontSize: '14px',
    fontWeight: 600,
    color: '#344054',
  },
  input: {
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid #d0d5dd',
    fontSize: '15px',
    outline: 'none',
    transition: 'border-color 0.2s',
  },
  textarea: {
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid #d0d5dd',
    fontSize: '15px',
    outline: 'none',
    resize: 'vertical' as const,
    transition: 'border-color 0.2s',
  },
  button: {
    padding: '14px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#0066FF',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: 700,
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
};

export const Contact = () => {
  // 1. 입력 데이터를 보관할 상태 변수 (EmailJS 템플릿의 변수명과 매핑)
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    from_phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 인풋 값 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // 2. 폼 제출 핸들러 (EmailJS 실제 발송 로직 포함)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 입력 필수값 유효성 검사
    if (!formData.from_name || !formData.from_email || !formData.message) {
      alert('필수 입력 항목(* 표시)을 모두 작성해 주세요.');
      return;
    }

    setIsSubmitting(true);

    // EmailJS 대시보드에서 획득한 키 정보 입력
    const serviceId = 'service_a6242de';   // 발급받은 Service ID로 변경해주세요
    const templateId = 'template_wjz4rxr'; // 발급받은 Template ID로 변경해주세요
    const publicKey = 'MI6Qsl_X-azTMWPf3';   // Account 메뉴의 Public Key로 변경해주세요

    emailjs.send(serviceId, templateId, formData, publicKey)
      .then((response) => {
        console.log('메일 발송 성공:', response.status, response.text);
        alert('문의 사항이 성공적으로 전달되었습니다. 담당자 확인 후 신속하게 연락드리겠습니다.');
        
        // 입력 칸 완전 초기화
        setFormData({
          from_name: '',
          from_email: '',
          from_phone: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('메일 발송 실패:', error);
        alert('서버 오류로 인해 접수가 실패했습니다. 잠시 후 다시 시도해 주세요.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div style={contactStyles.container}>
      {/* 좌측: 회사 정보 및 안내 메시지 */}
      <div style={contactStyles.leftSection}>
        <h2 style={contactStyles.title}>구매 및 비즈니스 문의</h2>
        <p style={contactStyles.description}>
          K-Ethanol은 친환경 바이오 주정 공급을 통해 파트너사의 건강한 성장을 지원합니다.<br />
          대량 발주, 견적 문의, 기술 제휴 등 원하시는 제안을 남겨주시면 정성껏 검토 후 피드백 드리겠습니다.
        </p>

        <div style={contactStyles.infoCard}>
          <div style={contactStyles.infoItem}>
            <span style={contactStyles.infoLabel}>이메일</span>
            <span>ethanolkorea@gmail.com</span>
          </div>
          <div style={contactStyles.infoItem}>
            <span style={contactStyles.infoLabel}>고객센터</span>
            <span>010-5314-2154</span>
          </div>
          <div style={contactStyles.infoItem}>
            <span style={contactStyles.infoLabel}>근무시간</span>
            <span>평일 09:00 - 18:00 (주말 및 공휴일 제외)</span>
          </div>
        </div>
      </div>

      {/* 우측: 실제 문의 접수 폼 */}
      <form onSubmit={handleSubmit} style={contactStyles.form}>
        <div style={contactStyles.formGroup}>
          <label style={contactStyles.label}>성함 또는 담당자 이름 <span style={{ color: '#0066FF' }}>*</span></label>
          <input
            style={contactStyles.input}
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            placeholder="예: 홍길동 대리"
            required
          />
        </div>

        <div style={contactStyles.formGroup}>
          <label style={contactStyles.label}>회신받을 이메일 주소 <span style={{ color: '#0066FF' }}>*</span></label>
          <input
            style={contactStyles.input}
            type="email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
            placeholder="example@ethanolkorea.com"
            required
          />
        </div>

        <div style={contactStyles.formGroup}>
          <label style={contactStyles.label}>연락처</label>
          <input
            style={contactStyles.input}
            type="text"
            name="from_phone"
            value={formData.from_phone}
            onChange={handleChange}
            placeholder="010-0000-0000"
          />
        </div>

        <div style={contactStyles.formGroup}>
          <label style={contactStyles.label}>상세 문의 내용 <span style={{ color: '#0066FF' }}>*</span></label>
          <textarea
            style={contactStyles.textarea}
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            placeholder="필요하신 주정 등급(95% 바이오 에탄올 등), 예상 발주 수량, 납품 주기 등을 상세하게 남겨주시면 보다 빠르고 정확한 견적 산출이 가능합니다."
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            ...contactStyles.button,
            backgroundColor: isSubmitting ? '#94a3b8' : '#0066FF',
            cursor: isSubmitting ? 'not-allowed' : 'pointer'
          }}
        >
          {isSubmitting ? '문의 사항 전송 중...' : '온라인 문의 제출하기'}
        </button>
      </form>
    </div>
  );
};

export default Contact;
