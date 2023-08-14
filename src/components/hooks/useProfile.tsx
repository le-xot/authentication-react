import { useEffect, useState } from "react";
export function useProfile() {
  const [user, setUser] = useState<Record<string, any> | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) return;

    fetch("http://localhost:3000/user/profile", { headers: { token: token } })
      .then((r) => r.json())
      .then((u) => setUser(u))
      .finally(() => {
        setIsLoading(false);
        console.log("user", [user, isLoading]);
      });
  }, []);

  return { user, isLoading };
}
