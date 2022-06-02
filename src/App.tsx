import MenuLink from "./components/MenuLink";
import BaseMenuLink from "./components/BaseMenuLink";
import Review from "./components/Review";
import { faker } from "@faker-js/faker";

import banner from "./assets/banner.jpg";
import banner2 from "./assets/banner2.jpg";

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
      <div className={"min-h-screen m-5"}>
        <div
          className={"md:mt-20 m-5 flex flex-col justify-center items-center"}
        >
          <h1 className={"text-3xl m-5"}>
            Keep all your notes in the same place!
          </h1>
          <div className={"flex"}>
            <img src={banner} alt={"Banner"} className={"rounded-2xl m-2"} />
            <img
              src={banner2}
              alt={"Banner 2"}
              className={"rounded-2xl m-2 hidden lg:block"}
            />
          </div>
        </div>
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
}

export default App;
