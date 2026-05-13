import React, { useState, useRef, useEffect } from 'react';
import theme from '../../styles/theme';
import { styles } from '../main/style';

const CATEGORIES = [
  { id: 'account', label: '계정 / 로그인', desc: '로그인 문제, 비밀번호 변경 등' },
  { id: 'report',  label: '신고 / 불편신고', desc: '부적절한 콘텐츠, 사용자 신고' },
  { id: 'etc',     label: '기타 문의', desc: '기타 궁금한 사항' },
];

const QUICK_REPLIES = {
  account: ['계정 / 로그인 안되시나요?', '비밀번호 분실', '소셜 로그인 오류'],
  report:  ['부적절한 콘텐츠 신고', '사용자 신고', '기타 불편신고'],
  etc:     ['서비스 이용 방법', '자주 묻는 질문', '기타 문의'],
};

const timeNow = () => {
  const d = new Date();
  return `${d.getHours()}:${String(d.getMinutes()).padStart(2, '0')}`;
};

const headerBtn = {
  width: '22px', 
  height: '22px', 
  borderRadius: '5px',
  border: 'none', 
  cursor: 'pointer', 
  fontSize: '11px',
  backgroundColor: 'rgba(255,255,255,0.25)',
  color: theme.PALETTE.white, 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center',
};

const BotMessage = ({ text, time, children }) => (
  <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
    <div style={{
      width: '32px',
      height: '32px', 
      borderRadius: '50%',
      backgroundColor: theme.PALETTE.primary.main,
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      fontSize: theme.FONT_SIZE.h9, 
      fontLine: theme.FONT_LINE.h9,

    }}>🤚</div>
    <div style={{ flex: 1 }}>
      <p style={{ fontSize: theme.FONT_SIZE.h11,fontWeight: theme.FONT_WEIGHT.bold, color: styles.textGray, margin: '0 0 4px' }}>이음 도우미</p>
      <div style={{
        backgroundColor: '#F1F1F5', borderRadius: '4px 12px 12px 12px',
        padding: '10px 14px', fontSize: '13px', color: theme.PALETTE.black,
        lineHeight: 1.6, maxWidth: '85%', whiteSpace: 'pre-line',
      }}>
        {text}
      </div>
      {children}
      {time && <p style={{ fontSize: theme.FONT_SIZE.h11,fontLine:theme.FONT_LINE.h11 , color: styles.noticeGray, margin: '4px 0 0' }}>{time}</p>}
    </div>
  </div>
);

const Feedback = () => (
  <div style={{ display: 'flex', gap: '6px', marginTop: '8px' }}>
    <button style={{
      padding: '4px 10px', borderRadius: '20px',
      border: '1px solid #ddd', backgroundColor: '#fff',
      fontSize: '12px', cursor: 'pointer', color: '#555',
    }}>👍 도움이 됐어요</button>
    <button style={{
      padding: '4px 10px', borderRadius: '20px',
      border: '1px solid #ddd', backgroundColor: '#fff',
      fontSize: '12px', cursor: 'pointer', color: '#555',
    }}>👎 아쉬워요</button>
  </div>
);

const ChatbotModal = ({ onClose }) => {
  const [step, setStep] = useState('category');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const selectCategory = (cat) => {
    setSelectedCategory(cat);
    setStep('chat');
    setMessages([{
      type: 'bot',
      text: `${cat.label} 관련해서 도와드릴게요!\n아래 항목을 선택하거나 직접 질문해주세요.`,
      time: timeNow(),
      quickReplies: QUICK_REPLIES[cat.id],
    }]);
  };

  const sendMessage = async (text) => {
    const msg = text || input.trim();
    if (!msg) return;
    setInput('');

    setMessages(prev => [...prev, { type: 'user', text: msg, time: timeNow() }]);
    setLoading(true);

    try {
      const res = await fetch('/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: msg, category: selectedCategory?.id }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, {
        type: 'bot', text: data.reply, time: timeNow(), showFeedback: true
      }]);
    } catch {
      setMessages(prev => [...prev, {
        type: 'bot', text: '오류가 발생했어요. 잠시 후 다시 시도해주세요.', time: timeNow()
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '100px',
      right: '32px',
      width: '360px',
      height: '520px',
      backgroundColor: theme.PALETTE.white,
      borderRadius: '16px',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 1,
      overflow: 'hidden',
    }}>

      {/* 헤더 */}
      <div style={{
        backgroundColor: theme.PALETTE.primary.main,
        padding: '12px 16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexShrink: 0,
        color: theme.PALETTE.white
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '18px' }}>🤚</span>
          <span style={{ color: theme.PALETTE, fontWeight:theme.FONT_WEIGHT.medium, fontSize: '14px' }}>이음 도우미</span>
        </div>
        <div style={{ display: 'flex', gap: '6px' }}>
          <button style={headerBtn}>－</button>
          <button style={headerBtn}>□</button>
          <button onClick={onClose} style={{ ...headerBtn, backgroundColor: '#FF4444' }}>✕</button>
        </div>
      </div>

      {/* 카테고리 선택 */}
      {step === 'category' && (
        <div style={{ flex: 1, padding: '20px 16px', overflowY: 'auto' }}>
          <BotMessage text="안녕하세요! 이음 도우미입니다. 무엇을 도와드릴까요?" time={timeNow()} />
          <div style={{ fontSize: '13px', color: '#555', margin: '16px 0 10px' }}>문의 유형을 선택해 주세요.</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {CATEGORIES.map(cat => (
              <button key={cat.id} onClick={() => selectCategory(cat)} style={{
                display: 'flex', alignItems: 'center', gap: '12px',
                padding: '12px 14px', borderRadius: '10px',
                border: '1px solid #eee', backgroundColor: '#fff',
                cursor: 'pointer', textAlign: 'left',
              }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '8px',
                  backgroundColor: '#EEEDFE', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', fontSize: theme.FONT_SIZE.h9,
                }}>
                  {cat.id === 'account' ? '👤' : cat.id === 'report' ? '🚨' : '💬'}
                </div>
                <div>
                  <div style={{ fontSize: theme.FONT_SIZE.h10, fontWeight: theme.FONT_WEIGHT.regular, color: theme.PALETTE.black }}>{cat.label}</div>
                  <div style={{ fontSize: theme.FONT_SIZE.h11, color: styles.textGray }}>{cat.desc}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 채팅 */}
      {step === 'chat' && (
        <div style={{ flex: 1, overflowY: 'auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {messages.map((msg, i) => (
            msg.type === 'bot' ? (
              <BotMessage key={i} text={msg.text} time={msg.time}>
                {msg.quickReplies && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '8px' }}>
                    {msg.quickReplies.map((q, j) => (
                      <button key={j} onClick={() => sendMessage(q)} style={{
                        padding: '6px 12px', borderRadius: '20px',
                        border: `1px solid ${theme.PALETTE.primary.main}`, backgroundColor: theme.PALETTE.white,
                        color: theme.PALETTE.primary.main, fontSize: theme.FONT_SIZE.h11, cursor: 'pointer',
                      }}>{q}</button>
                    ))}
                  </div>
                )}
                {msg.showFeedback && <Feedback />}
              </BotMessage>
            ) : (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                <div style={{
                  backgroundColor: theme.PALETTE.primary.main, color: theme.PALETTE.white,
                  padding: '10px 14px', borderRadius: '12px 4px 12px 12px',
                  fontSize: '13px', maxWidth: '75%', lineHeight: 1.6,
                }}>{msg.text}</div>
                <div style={{ fontSize: theme.FONT_SIZE.h12,fontWeight:theme.FONT_WEIGHT.regular, color: styles.noticeGray, margin: '4px 0 0' }}>{msg.time}</div>
              </div>
            )
          ))}
          {loading && <BotMessage text="답변을 불러오는 중..." />}
          <div ref={bottomRef} />
        </div>
      )}

      {/* 입력창 */}
      <div style={{
        padding: '12px 16px',
        borderTop: '1px solid #eee',
        display: 'flex',
        gap: '8px',
        flexShrink: 0,
      }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && sendMessage()}
          placeholder='메시지를 입력...'
          style={{
            flex: 1, border: '1px solid #eee', borderRadius: '24px',
            padding: '10px 16px', fontSize: '13px', outline: 'none',
            backgroundColor: '#F8F8F8',
          }}
        />
        <button onClick={() => sendMessage()} style={{
          width: '38px', height: '38px', borderRadius: '50%',
          backgroundColor: theme.PALETTE.primary.main, border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <span style={{ color: '#fff', fontSize: '16px' }}>▶</span>
        </button>
      </div>
    </div>
  );
};

export default ChatbotModal;