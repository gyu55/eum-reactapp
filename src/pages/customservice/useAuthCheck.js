import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuthCheck = () => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch('http://localhost:10000/api/auth/status', {
          credentials: 'include',
          cache: 'no-store',
        });
        if (res.status === 200) {
          setIsAuth(true);
        } else {
          alert('로그인 후 이용해주세요.');
          navigate('/login');
        }
      } catch {
        alert('로그인 후 이용해주세요.');
        navigate('/login');
      }
    };
    checkAuth();
  }, [navigate]);

  return isAuth;
};

export default useAuthCheck;
