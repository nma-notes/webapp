import { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button: FC<IButtonProps> = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className={`rounded border p-2 hover:bg-gray-500 ${rest.className}`}
    >
      {children}
    </button>
  );
};

export default Button;
