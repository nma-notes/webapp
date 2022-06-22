import { useState } from "react";

const useEmail = () => {
  const getEmail = () => {
    const email = localStorage.getItem("notes-email");
    return email || undefined;
  };

  const [email, setEmail] = useState<string | undefined>(getEmail());

  const saveEmail = (email: string | undefined) => {
    email
      ? localStorage.setItem("notes-email", email)
      : localStorage.removeItem("notes-email");
    setEmail(email);
  };

  return { email, setEmail: saveEmail };
};

export default useEmail;
