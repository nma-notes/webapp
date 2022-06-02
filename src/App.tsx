import { NavLink } from "react-router-dom";
import MenuLink from "./components/MenuLink";
import BaseMenuLink from "./components/BaseMenuLink";
import Review from "./components/Review";
import { faker } from "@faker-js/faker";

function App() {
  const links = [
    { link: "/", label: "Home" },
    { link: "/about", label: "About" },
    { link: "/contacts", label: "Contacts" },
    { link: "/sign_in", label: "Sign In" },
    { link: "/sign_up", label: "Sign Up" },
  ];

  return (
    <div className={"w-full flex flex-col"}>
      <nav className={"w-full fixed"}>
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
      <div className={"min-h-screen"}>
        <div className={"mt-20 m-5"}>Banner</div>
        <div className={"m-5 flex flex-col lg:flex-row"}>
          {[...Array(3)].map((_, i) => (
            <Review
              key={i}
              name={faker.name.findName()}
              text={faker.lorem.paragraph()}
              avatarUrl={faker.internet.avatar()}
            />
          ))}
        </div>
      </div>
      <footer>
        <div
          className={
            "w-full flex justify-evenly items-center justify-items-center"
          }
        >
          {links.map(({ label, link }, i) => (
            <BaseMenuLink link={link} label={label} key={i} />
          ))}
        </div>
      </footer>
    </div>
  );
}

export default App;
