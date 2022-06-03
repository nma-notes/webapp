import { FC, ReactNode } from "react";

const Page: FC<{ children: ReactNode }> = ({ children }) => (
  <div className={"md:mt-20 m-5 flex flex-col justify-center items-center"}>
    {children}
  </div>
);

export default Page;
