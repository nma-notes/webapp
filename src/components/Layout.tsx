import { FC, ReactNode } from "react";
import MenuLink from "./MenuLink";
import BaseMenuLink from "./BaseMenuLink";
import useToken from "../hooks/useToken";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const { token } = useToken();

  const links = [
    { link: "/", label: "Home" },
    { link: "/about", label: "About" },
    { link: "/contacts", label: "Contacts" },
    token
      ? { link: "/notes/random", label: "Dashboard" }
      : { link: "/sign_in", label: "Sign In" },
    token
      ? { link: "/sign_out", label: "Sign Out" }
      : { link: "/sign_up", label: "Sign Up" },
  ];

  return (
    <div className={"w-full flex flex-col"}>
      <nav className={"w-full fixed bg-gray-800 z-50"}>
        <div
          className={
            "flex w-full justify-evenly items-center justify-items-center"
          }
        >
          {links.map(({ label, link }, i) => (
            <MenuLink link={link} label={label} key={i} />
          ))}
        </div>
      </nav>
      <div className={"min-h-screen m-5"}>{children}</div>
      <footer>
        <div
          className={
            "w-full flex justify-evenly items-center justify-items-center md:m-5 mb-5"
          }
        >
          {links.map(({ label, link }, i) => (
            <BaseMenuLink link={link} label={label} key={i} />
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Layout;
