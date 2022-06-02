import { NavLink } from "react-router-dom";
import MenuLink from "./components/MenuLink";
import BaseMenuLink from "./components/BaseMenuLink";

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
      <div>Banner</div>
      <div>Reviews</div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <footer>
        <div
          className={
            "w-full flex justify-evenly items-center justify-items-center"
          }
        >
          {links.map(({ label, link }) => (
            <BaseMenuLink link={link} label={label} />
          ))}
        </div>
      </footer>
    </div>
  );
}

export default App;
