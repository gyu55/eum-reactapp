import { useState, useEffect } from "react";

const useLoginCheck = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:10000/private/api/users/me", { credentials: "include" })
      .then(res => res.ok ? res.json() : null)
      .then(data => {
        if (data?.success) {
          setIsLoggedIn(true);
          setUser(data.data);
        } else {
          setIsLoggedIn(false);
        }
      })
      .catch(() => setIsLoggedIn(false));
  }, []);

  return { isLoggedIn, user };
};

export default useLoginCheck;
