import { FC } from "react";

import office from "../assets/contacts/office.jpg";

const Contacts: FC = () => (
  <div className={"md:mt-20 m-5 flex flex-col justify-center items-center"}>
    <img src={office} alt={"Out office"} className={"max-h-96 m-5"} />
    <p>
      <strong className={"mr-5"}>Address:</strong>
      <p>54323, Tuukkapolku 7 683, Itä-Juuliaharju, Finland</p>
      <p>+358 (44) 1528926</p>
      <p>nadja.mottonen@hotmail.com</p>
    </p>
  </div>
);

export default Contacts;
