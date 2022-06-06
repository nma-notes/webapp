import { useState } from "react";

const useToken = () => {
  const getToken = () => {
    const tokenString = sessionStorage.getItem("notes-token");
    const userToken = tokenString ? JSON.parse(tokenString) : {};
    return userToken?.token;
  };

  const [token, setToken] = useState<string | undefined>(getToken());

  const saveToken = (userToken: string | undefined) => {
    userToken
      ? sessionStorage.setItem(
          "notes-token",
          JSON.stringify({ token: userToken })
        )
      : sessionStorage.removeItem("notes-token");
    setToken(userToken);
  };

  return {
    token,
    setToken: saveToken,
  };
};

export default useToken;
