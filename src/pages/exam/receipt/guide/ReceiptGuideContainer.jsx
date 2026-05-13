import * as S from "../info/style";
import { styles } from "../../style";

const steps = [
  { title: "회원가입", desc: "이음 사이트에서 회원가입을 진행합니다." },
  { title: "원서작성", desc: "시험 회차를 선택하고 개인정보를 입력합니다." },
  { title: "서류제출", desc: "응시 자격 증빙서류를 온라인으로 제출합니다." },
  { title: "결제완료", desc: "응시 수수료를 결제하면 접수가 완료됩니다." },
];

const ReceiptGuideContainer = () => {
  return (
    <div>
      <h2 style={styles.sectionTitle}>시험접수안내</h2>
      <S.StepCard>
        {steps.map((step, i) => (
          <div key={i}>
            <S.StepItem>
              <S.StepCircle $index={i}>{i + 1}</S.StepCircle>
              <div>
                <S.StepTitle>{step.title}</S.StepTitle>
                <S.StepDesc>{step.desc}</S.StepDesc>
              </div>
            </S.StepItem>
            {i < steps.length - 1 && <S.StepDivider />}
          </div>
        ))}
        <S.WarningBox>
          접수 기간 마감일에는 서버 혼잡이 예상되오니 조기 접수를 권장합니다.
        </S.WarningBox>
        <S.Note>
          결제 후 취소 시 환불 수수료가 발생할 수 있습니다.
        </S.Note>
      </S.StepCard>
    </div>
  );
};

export default ReceiptGuideContainer;
