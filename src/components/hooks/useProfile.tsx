import { useEffect, useState } from "react";
export function useProfile() {
  const [user, setUser] = useState<Record<string, any> | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProfile = async () => {
    const accessToken = localStorage.getItem("accessToken");
    try {
      const req = await fetch("http://localhost:3000/user/profile", {
        headers: {
          token: accessToken || ''
        }
      })
      const user = await req.json()
      setUser(user)
    } catch {
      setUser(null)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
   fetchProfile()
  }, []);

  return { user, isLoading, refetch: fetchProfile, };
}
