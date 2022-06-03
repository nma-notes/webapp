import Review from "./components/Review";
import { faker } from "@faker-js/faker";

import banner from "./assets/banner.jpg";
import banner2 from "./assets/banner2.jpg";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <div className={"md:mt-20 m-5 flex flex-col justify-center items-center"}>
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
    </Layout>
  );
}

export default App;
