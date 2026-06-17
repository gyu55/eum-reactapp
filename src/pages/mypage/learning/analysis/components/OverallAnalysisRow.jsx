import React, { useEffect, useState } from "react";

import S from "../style";

// 게이지 색상
const getRateColor = (rate) => {
  if (rate <= 39) return "#FF4D4F";
  if (rate <= 79) return "#38C172";
  return "#4359FC";
};

// 게이지 애니메이션
const useAnimatedRate = (targetRate, duration = 850) => {
  const [animatedRate, setAnimatedRate] = useState(0);

  useEffect(() => {
    const safeTargetRate = Math.max(0, Math.min(Number(targetRate || 0), 100));
    let animationFrameId;
    let startTime = null;

    const animate = (currentTime) => {
      if (!startTime) {
        startTime = currentTime;
      }

      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setAnimatedRate(Math.round(safeTargetRate * easedProgress));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    setAnimatedRate(0);
    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [targetRate, duration]);

  return animatedRate;
};

const OverallAnalysisRow = ({ analysis }) => {
  const rate = Number(analysis.rate || 0);
  const animatedRate = useAnimatedRate(rate);
  const rateColor = getRateColor(rate);
  const isDanger = rate <= 49;

  return (
    <S.OverallRow $danger={isDanger}>
      <S.OverallProgressArea>
        <S.OverallTitleLine>
          <S.OverallTitle $color={rateColor}>{analysis.title}</S.OverallTitle>
          <S.OverallRate $color={rateColor}>{animatedRate}%</S.OverallRate>
        </S.OverallTitleLine>

        <S.OverallProgressTrack>
          <S.OverallProgressBar
            $rate={animatedRate}
            $color={rateColor}
          />
        </S.OverallProgressTrack>
      </S.OverallProgressArea>

      <S.OverallTextArea>
        <S.OverallDesc>{analysis.description}</S.OverallDesc>
        <S.OverallGuide>{analysis.guide}</S.OverallGuide>
      </S.OverallTextArea>
    </S.OverallRow>
  );
};

export default OverallAnalysisRow;