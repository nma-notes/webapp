import { FC, ReactNode, useEffect } from "react";
import useToken from "../hooks/useToken";
import { useLocation, useNavigate } from "react-router-dom";

interface IRequireNoAuthProps {
  children: ReactNode;
}

const RequireNoAuth: FC<IRequireNoAuthProps> = ({ children }) => {
  const { token } = useToken();
  const location = useLocation();
  const navigate = useNavigate();

  if (token) {
    useEffect(
      () =>
        navigate("/notes/random", { state: { from: location }, replace: true }),
      []
    );
  }

  return <>{children}</>;
};

export default RequireNoAuth;
