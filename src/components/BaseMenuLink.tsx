import { FC } from "react";
import { NavLink } from "react-router-dom";

interface IBaseMenuLinkProps {
  link: string;
  label: string;
  className?: string;
}

const BaseMenuLink: FC<IBaseMenuLinkProps> = ({ link, label, className }) => (
  <NavLink to={link} className={className || "hover:underline"}>
    {label}
  </NavLink>
);

export default BaseMenuLink;
