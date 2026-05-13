import { useState } from "react";
import * as S from "./style";

const steps = ["회원정보", "인증", "완료"];

const AGREE_ITEMS = [
  { id: "terms", label: "[필수] 이음 서비스 이용약관에 동의합니다." },
  { id: "privacy", label: "[필수] 개인정보 수집 및 이용에 동의합니다." },
  { id: "marketing", label: "[선택] 마케팅 정보 수신에 동의합니다." },
];

export default function JoinComponent() {
  const [codeSent, setCodeSent] = useState(false);
  const [agreeAll, setAgreeAll] = useState(false);
  const [agrees, setAgrees] = useState({ terms: false, privacy: false, marketing: false });

  const handleAgreeAll = (checked) => {
    setAgreeAll(checked);
    setAgrees({ terms: checked, privacy: checked, marketing: checked });
  };

  const handleAgreeItem = (id, checked) => {
    const next = { ...agrees, [id]: checked };
    setAgrees(next);
    setAgreeAll(Object.values(next).every(Boolean));
  };

  return (
    <S.PageWrap>
      <S.Hero>
        <S.HeroTitle>이음과 함께<br />새로운 소통을 시작해보세요</S.HeroTitle>
        <S.StepBar>
          {steps.map((name, i) => (
            <>
              <S.StepItem key={name}>
                <S.StepCircle $active={i === 0}>{i + 1}</S.StepCircle>
                <S.StepName $active={i === 0}>{name}</S.StepName>
              </S.StepItem>
              {i < steps.length - 1 && <S.StepLine key={`line-${i}`} />}
            </>
          ))}
        </S.StepBar>
      </S.Hero>

      <S.ContentArea>
        <S.FormCard>
          <S.SectionBlock>
            <S.SectionTitle>1. 기본 정보</S.SectionTitle>
            <S.Grid>
              <div>
                <S.Label>이름 *</S.Label>
                <S.Input placeholder="이름을 입력하세요" />
              </div>
              <div>
                <S.Label>생년월일 *</S.Label>
                <S.Input placeholder="YYYY-MM-DD" />
              </div>
            </S.Grid>
          </S.SectionBlock>

          <S.SectionBlock>
            <S.SectionTitle>2. 비밀번호 입력</S.SectionTitle>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div>
                <S.Label>아이디 *</S.Label>
                <S.Input placeholder="아이디를 입력하세요" />
              </div>
              <div>
                <S.Label>비밀번호 *</S.Label>
                <S.Input type="password" placeholder="비밀번호를 입력하세요" />
              </div>
              <div>
                <S.Label>비밀번호 확인 *</S.Label>
                <S.Input type="password" placeholder="비밀번호를 다시 입력하세요" />
              </div>
            </div>
          </S.SectionBlock>

          <S.SectionBlock>
            <S.SectionTitle>3. 핸드폰 번호</S.SectionTitle>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div>
                <S.Label>핸드폰 번호 *</S.Label>
                <S.InlineRow>
                  <S.Input placeholder="010-0000-0000" style={{ flex: 1 }} />
                  <S.SmallBtn onClick={() => setCodeSent(true)}>인증 발송</S.SmallBtn>
                </S.InlineRow>
              </div>
              {codeSent && (
                <div>
                  <S.Label>인증번호 *</S.Label>
                  <S.InlineRow>
                    <S.Input placeholder="인증번호를 입력하세요" style={{ flex: 1 }} />
                    <S.SmallBtn $green>확인</S.SmallBtn>
                  </S.InlineRow>
                </div>
              )}
            </div>
          </S.SectionBlock>

          <S.SectionBlock>
            <S.SectionTitle>약관 동의</S.SectionTitle>
            <S.AgreeAll>
              <input
                type="checkbox"
                checked={agreeAll}
                onChange={e => handleAgreeAll(e.target.checked)}
              />
              전체 동의
            </S.AgreeAll>
            {AGREE_ITEMS.map(item => (
              <S.AgreeItem key={item.id}>
                <S.AgreeLeft>
                  <input
                    type="checkbox"
                    checked={agrees[item.id]}
                    onChange={e => handleAgreeItem(item.id, e.target.checked)}
                  />
                  {item.label}
                </S.AgreeLeft>
                <S.ViewLink>보기</S.ViewLink>
              </S.AgreeItem>
            ))}
          </S.SectionBlock>

          <S.SubmitBtn>이음 시작하기</S.SubmitBtn>
        </S.FormCard>
      </S.ContentArea>
    </S.PageWrap>
  );
}
