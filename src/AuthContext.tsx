import { createContext, FC, ReactNode } from "react";
import useToken from "./hooks/useToken";
import useEmail from "./hooks/useEmail";

interface IAuthContext {
  token: string | undefined;
  signIn: (email: string, password: string, callback?: VoidFunction) => void;
  signOut: (callback?: VoidFunction) => void;
}

const AuthContext = createContext<IAuthContext>(null!);

export default AuthContext;

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { token, setToken } = useToken();
  const { setEmail } = useEmail();

  const signIn = async (
    email: string,
    password: string,
    callback?: VoidFunction
  ) => {
    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    setToken(data.accessToken);
    setEmail(data.email);
    if (callback) callback();
  };

  const signOut = (callback?: VoidFunction) => {
    setToken(undefined);
    setEmail(undefined);
    if (callback) callback();
  };

  return (
    <AuthContext.Provider value={{ token, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
