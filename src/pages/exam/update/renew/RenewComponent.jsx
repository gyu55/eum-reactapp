import { useState } from "react";
import * as S from "./style";

const RenewComponent = () => {
  const [type, setType] = useState("renew");

  return (
    <S.Wrapper>
      <S.SectionTitle style={{ marginBottom: 6 }}>자격증 갱신 / 재발급 신청</S.SectionTitle>
      <S.Subtitle>자격증 갱신으로 재발급을 신청할 수 있습니다.</S.Subtitle>

      <S.FormWrap>
        <div>
          <S.Label>신청 유형 *</S.Label>
          <S.RadioRow>
            {[
              { value: "renew", label: "갱신 (유효기간 연장)" },
              { value: "reissue", label: "재발급 (분실/훼손)" },
            ].map((opt) => (
              <S.RadioLabel key={opt.value}>
                <S.RadioInput
                  type="radio"
                  name="type"
                  value={opt.value}
                  checked={type === opt.value}
                  onChange={() => setType(opt.value)}
                />
                <S.RadioText $active={type === opt.value}>{opt.label}</S.RadioText>
              </S.RadioLabel>
            ))}
          </S.RadioRow>
        </div>

        <S.Grid>
          <div>
            <S.Label>자격증 번호 *</S.Label>
            <S.Input placeholder="예: SL-2023-001234" />
          </div>
          <div>
            <S.Label>성명 *</S.Label>
            <S.Input placeholder="홍길동" />
          </div>
          <div>
            <S.Label>연락처 *</S.Label>
            <S.Input placeholder="010-0000-0000" />
          </div>
          <div>
            <S.Label>배송 주소 *</S.Label>
            <S.Input placeholder="우편번호 검색" />
          </div>
        </S.Grid>

        <S.FeeText>
          갱신 수수료: 10,000원 | 재발급 수수료: 20,000원
          <S.FeeNote>결제는 카드/계좌이체/가상계좌로 가능합니다.</S.FeeNote>
        </S.FeeText>

        <S.SubmitBtn>갱신 신청 및 결제하기</S.SubmitBtn>
      </S.FormWrap>
    </S.Wrapper>
  );
};

export default RenewComponent;
