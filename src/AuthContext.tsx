import { createContext, FC, ReactNode } from "react";
import useToken from "./hooks/useToken";

interface IAuthContext {
  token: string | undefined;
  signIn: (callback?: VoidFunction) => void;
  signOut: (callback?: VoidFunction) => void;
}

const AuthContext = createContext<IAuthContext>(null!);

export default AuthContext;

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { token, setToken } = useToken();

  const signIn = (callback?: VoidFunction) => {
    setToken("1234567890");
    if (callback) callback();
  };

  const signOut = (callback?: VoidFunction) => {
    setToken(undefined);
    if (callback) callback();
  };

  return (
    <AuthContext.Provider value={{ token, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
