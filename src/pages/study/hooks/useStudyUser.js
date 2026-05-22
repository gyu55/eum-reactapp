// 학습 사용자 훅 담당: 로그인 사용자 정보와 userId 확인을 담당
import useAuthStore from "../../../store/authStore";

export const useStudyUser = () => {
  const user = useAuthStore((state) => state.user);
  const userId = user?.id ?? user?.userId ?? user?.userNo ?? null;

  return {
    user,
    userId,
    isGuest: !user || !userId,
  };
};
