import { useState } from "react";

const useToken = () => {
  const getToken = () => {
    const tokenString = sessionStorage.getItem("notes-token");
    const userToken = tokenString ? JSON.parse(tokenString) : {};
    return userToken?.token;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken: string) => {
    sessionStorage.setItem("notes-token", JSON.stringify({ token: userToken }));
    setToken(userToken);
  };

  return {
    token,
    setToken: saveToken,
  };
};

export default useToken;
