import { FC, ReactNode, useEffect } from "react";
import useToken from "../hooks/useToken";
import { useLocation, useNavigate } from "react-router-dom";

interface IRequireAuthProps {
  children: ReactNode;
}

const RequireAuth: FC<IRequireAuthProps> = (props) => {
  const { children } = props;
  const { token } = useToken();
  const location = useLocation();
  const navigate = useNavigate();

  if (!token) {
    useEffect(
      () => navigate("/sign_in", { state: { from: location }, replace: true }),
      []
    );
  }

  return <>{children}</>;
};

export default RequireAuth;
