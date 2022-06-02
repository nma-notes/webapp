import { NavLink } from "react-router-dom";
import MenuLink from "./components/MenuLink";

function App() {
  const links = [
    { link: "/", label: "Home" },
    { link: "/about", label: "About" },
    { link: "/contacts", label: "Contacts" },
    { link: "/sign_in", label: "Sign In" },
    { link: "/sign_up", label: "Sign Up" },
  ];

  return (
    <div className={"w-full"}>
      <nav className={"w-full fixed"}>
        <div
          className={
            "flex w-full justify-evenly items-center justify-items-center"
          }
        >
          {links.map(({ label, link }) => (
            <MenuLink link={link} label={label} />
          ))}
        </div>
      </nav>
    </div>
  );
}

export default App;
