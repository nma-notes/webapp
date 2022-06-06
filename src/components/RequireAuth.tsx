import { FC, ReactNode } from "react";
import useToken from "../hooks/useToken";
import { Navigate, useLocation } from "react-router-dom";

interface IRequireAuthProps {
  children: ReactNode;
}

const RequireAuth = (props: IRequireAuthProps) => {
  const { children } = props;
  const { token } = useToken();
  const location = useLocation();

  if (!token) {
    return (
      <Navigate to={"/sign_in"} state={{ from: location }} replace={true} />
    );
  }

  return children;
};

export default RequireAuth;
