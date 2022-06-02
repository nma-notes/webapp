import { FC } from "react";
import { NavLink } from "react-router-dom";

interface IMenuLinkProps {
  link: string;
  label: string;
}

const MenuLink: FC<IMenuLinkProps> = ({ link, label }) => (
  <NavLink
    className={
      "border-2 border-sky-600 w-1/5 p-5 text-center hover:bg-sky-800 active:bg-sky-900 cursor-pointer"
    }
    to={link}
  >
    {label}
  </NavLink>
);

export default MenuLink;
