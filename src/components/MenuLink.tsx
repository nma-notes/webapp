import { FC } from "react";
import BaseMenuLink from "./BaseMenuLink";

interface IMenuLinkProps {
  link: string;
  label: string;
}

const MenuLink: FC<IMenuLinkProps> = ({ link, label }) => (
  <BaseMenuLink
    className={
      "border-2 border-sky-600 w-1/5 p-5 text-center hover:bg-sky-800 active:bg-sky-900 cursor-pointer"
    }
    link={link}
    label={label}
  />
);

export default MenuLink;
