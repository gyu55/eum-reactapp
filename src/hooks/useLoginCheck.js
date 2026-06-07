import { useState, useEffect } from "react";

const fetchMe = () =>
  fetch("http://localhost:10000/private/api/users/me", { credentials: "include" });

const refreshToken = () =>
  fetch("http://localhost:10000/api/auth/token", {
    method: "PUT",
    credentials: "include",
  });

const useLoginCheck = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const check = async () => {
      try {
        let res = await fetchMe();

        // accessToken 만료 시 refreshToken으로 재발급 후 재시도
        if (res.status === 401) {
          const refreshRes = await refreshToken();
          if (refreshRes.ok) {
            res = await fetchMe();
          }
        }

        if (!res.ok) {
          setIsLoggedIn(false);
          return;
        }

        const data = await res.json();
        if (data?.success) {
          setIsLoggedIn(true);
          setUser(data.data);
        } else {
          setIsLoggedIn(false);
        }
      } catch {
        setIsLoggedIn(false);
      }
    };

    check();
  }, []);

  return { isLoggedIn, user };
};

export default useLoginCheck;
