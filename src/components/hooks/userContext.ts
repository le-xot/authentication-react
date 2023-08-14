import { createContext } from "react";

export const UserContext = createContext({ user: null, isLoading: true } as {
  user: Record<string, any> | null;
  isLoading: boolean;
  refetch: () => void | Promise<void>
  login: (accessToken: string, refreshToken: string) => void | Promise<void>
});
