import { FC, ReactNode } from "react";
import Button from "./Button";

const EditorMenuBarButton: FC<{
  children: ReactNode;
  onClick: VoidFunction;
}> = ({ children, onClick }) => (
  <Button className={"m-1"} onClick={onClick}>
    {children}
  </Button>
);

export default EditorMenuBarButton;
