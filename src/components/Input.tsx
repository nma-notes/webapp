import { FC, InputHTMLAttributes } from "react";

interface IIntputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<IIntputProps> = (props) => {
  return (
    <input {...props} className={"text-black text-center p-1 m-2 rounded-lg"} />
  );
};

export default Input;
