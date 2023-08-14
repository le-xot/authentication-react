import { createContext } from "react";

export const UserContext = createContext({ user: null, isLoading: true } as {
  user: Record<string, any> | null;
  isLoading: boolean;
});
