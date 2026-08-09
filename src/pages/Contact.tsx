import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    from_phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.from_name || !formData.from_email || !formData.message) {
      alert('필수 입력 항목(* 표시)을 모두 작성해 주세요.');
      return;
    }

    setIsSubmitting(true);

    const serviceId = 'service_a6242de';
    const templateId = 'template_wjz4rxr';
    const publicKey = 'MI6Qsl_X-azTMWPf3';

    emailjs.send(serviceId, templateId, formData, publicKey)
      .then(() => {
        alert('문의 사항이 접수되었습니다. (주)케이에탄올 담당자가 신속히 답변해 드리겠습니다.');
        setFormData({ from_name: '', from_email: '', from_phone: '', message: '' });
      })
      .catch((error) => {
        console.error('발송 에러:', error);
        alert('접수 중 오류가 발생했습니다. 전화(010-5314-2154)로 문의해 주세요.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftSection}>
        <h2 style={styles.title}>구매 및 고객 문의</h2>
        <p style={styles.desc}>
          (주)케이에탄올에 발효주정 구매 및 견적을 요청하시면 친절히 안내해 드립니다.
        </p>

        <div style={styles.infoCard}>
          <p><strong>상호명:</strong> ㈜케이에탄올 (K-ETHANOL)</p>
          <p><strong>전화번호:</strong> 010-5314-2154</p>
          <p><strong>FAX:</strong> 0504-438-2154</p>
          <p><strong>이메일:</strong> ethanolkorea@gmail.com</p>
          <p><strong>주소:</strong> 인천광역시 남동구 남동대로 742, 101호(대화빌딩)</p>
          <p><strong>면허번호:</strong> 발효주정소매업 131-5-84564</p>
          <p style={{ marginTop: '10px', color: '#15803d', fontWeight: 700 }}>
            🏦 입금 계좌: 우리은행 (예금주: ㈜케이에탄올)
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div>
          <label style={styles.label}>성함 / 업체명 *</label>
          <input style={styles.input} type="text" name="from_name" value={formData.from_name} onChange={handleChange} required />
        </div>
        <div>
          <label style={styles.label}>이메일 주소 *</label>
          <input style={styles.input} type="email" name="from_email" value={formData.from_email} onChange={handleChange} required />
        </div>
        <div>
          <label style={styles.label}>연락처</label>
          <input style={styles.input} type="text" name="from_phone" value={formData.from_phone} onChange={handleChange} placeholder="010-0000-0000" />
        </div>
        <div>
          <label style={styles.label}>문의 내용 (구매 용도 및 희망 수량) *</label>
          <textarea style={styles.textarea} name="message" value={formData.message} onChange={handleChange} rows={5} required />
        </div>
        <button type="submit" disabled={isSubmitting} style={styles.button}>
          {isSubmitting ? '전송 중...' : '문의하기 제출'}
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '80px 5%',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '50px',
    fontFamily: '"Pretendard", sans-serif',
  },
  leftSection: {
    lineHeight: '1.7',
  },
  title: {
    fontSize: '32px',
    fontWeight: 800,
    color: '#0f172a',
    marginBottom: '16px',
  },
  desc: {
    fontSize: '16px',
    color: '#475569',
    marginBottom: '30px',
  },
  infoCard: {
    backgroundColor: '#f8fafc',
    padding: '24px',
    borderRadius: '12px',
    border: '1px solid #cbd5e1',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '10px',
  },
  form: {
    backgroundColor: '#ffffff',
    padding: '32px',
    borderRadius: '12px',
    border: '1px solid #e2e8f0',
    boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '20px',
  },
  label: {
    fontSize: '14px',
    fontWeight: 700,
    color: '#334155',
    marginBottom: '6px',
    display: 'block',
  },
  input: {
    width: '100%',
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #cbd5e1',
    boxSizing: 'border-box' as const,
  },
  textarea: {
    width: '100%',
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #cbd5e1',
    boxSizing: 'border-box' as const,
  },
  button: {
    padding: '14px',
    backgroundColor: '#15803d',
    color: '#ffffff',
    border: 'none',
    borderRadius: '6px',
    fontWeight: 700,
    cursor: 'pointer',
  },
};

export default Contact;