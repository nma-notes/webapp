import { FC, ReactNode } from "react";
import { Link, LinkProps, To } from "react-router-dom";
import * as React from "react";

interface ILinkButtonProps {
  to: To;
  children: ReactNode;
}

const LinkButton: FC<ILinkButtonProps> = ({ children, to }) => {
  return (
    <Link to={to} className={"rounded border p-2 hover:bg-gray-500"}>
      {children}
    </Link>
  );
};

export default LinkButton;
